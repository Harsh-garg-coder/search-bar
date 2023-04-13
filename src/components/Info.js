import styles from "../styles/Info.module.css";

export default function Info(props) {
    return (
        <div className = {styles["info-container"]}>
            <p className = "bold"> Please type more than 3 letters</p>
            {
                props.selected && 
                <p className = "bold">
                    You selected : &nbsp;
                    {
                        props.selected
                    }
                </p>
            }
            
        </div>
    );
}