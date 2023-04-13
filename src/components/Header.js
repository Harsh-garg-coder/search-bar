import styles from "../styles/Header.module.css";
import crossIcon from "../images/cross-icon.svg";
import searchIcon from "../images/search-icon.svg";

export default function Header(props) {

    const handleChange = (e) => {
        props.setSearchInput(e.target.value);
    }
    
    return (
        <div 
            className = {styles["header-container"]}
        >
            <div className = {styles["search-input-container"]}>
                <input 
                    type = "text" 
                    placeholder = "Search By College or City"
                    value = {props.searchInput}
                    onChange = {handleChange}
                    onFocus = {() => props.handleOutputHeight("auto")}
                />

                <img 
                    src = {crossIcon} 
                    onClick = {() => props.handleOutputHeight("40px")}
                />
                
            </div>
            <div 
                className = {styles["search-btn-container"]}
            >
                <button>
                    Search
                </button>
                <img src = {searchIcon} />
            </div>
        </div>
    );
}