
import styles from "../styles/SelectionBox.module.css";
import data from "../data/data";

export default function SelectionBox(props) {
    return (
        <div className = {styles["selection-box-container"]}>
            {
                data && data.map((current) => {
                    return (
                        <div 
                            className = {styles["container"]}
                            onClick = {() => props.setSelected(current.text)}
                        >
                            <img src = {current.image} />
                            <p className = "bold">{current.text}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}