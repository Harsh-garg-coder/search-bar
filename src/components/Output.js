import styles from "../styles/Output.module.css";

export default function Output(props) {
    return (
        <div>
            {
                props.data && 
                <div 
                    className = {styles["output-container"]}
                    style = {{height: props.outputHeight ? props.outputHeight : "auto"}}
                >
                    {
                        props.data.map((currentData, index) => {
                            return (
                                <div 
                                    className = {styles["item"]}
                                    key = {"item_" + index}
                                >
                                    {currentData.name}
                                </div>  
                            );
                        })
                    }
                    
                </div>
            }
        </div>
    );
}