import Post from "../Post/Post";
import Suggestion from "../Suggestion/Suggestion";
import styles from "./PrimeiraBar.module.css"
import Story from "./Story/Story";

function PrimeiraBar(){
    return(
        <>

        <div className={styles.MainGrid} >

            <div className={styles.first_column} style={{gridArea: "firstColumn"}}>

                <div className={styles.box} >
                    <Story/>
                </div>

                <div className={styles.box} style={{margin: "30px 0"}} >
                    <Post/>
                </div>
            </div>
           

            <div style={{ gridArea: "secondColumn" }} >
                <div className={styles.suggestionBox} >
                    <Suggestion/>
                </div>
            </div>

        </div>
        
    </>
    );
}

export default PrimeiraBar;