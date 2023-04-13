import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import SelectionBox from './components/SelectionBox';
import Output from './components/Output';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [outputHeight, setOutputHeight] = useState("auto");

  useEffect(() => {
    if(searchInput.length >= 3) {
      const fetchData = async () => {
        const url = `https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${searchInput}%20`

        const resp = await fetch(url);

        const data = await resp.json();

        setData(data.data.result);
      }

      fetchData();
    }
  }, [searchInput]);

  const handleOutputHeight = (height) => {
    setOutputHeight(height);
  }

  return (
    <div className={styles["app-container"]}>
      <Header 
        searchInput = {searchInput}
        setSearchInput = {setSearchInput}
        handleOutputHeight = {handleOutputHeight}
      />
      {
        searchInput.length < 3 ? 
        <>
          <Info 
            selected = {selected}
          />
          <SelectionBox 
            setSelected = {setSelected}
          /> 
        </>
        : 
        <Output 
          data = {data}
          outputHeight = {outputHeight}
        />
      }
      
    </div>
  );
}

export default App;
