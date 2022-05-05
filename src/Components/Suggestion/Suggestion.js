import styles from "./Suggestion.module.css"

function Suggestion(){
    return(
        <>
            <div className={styles.header_suggestion}>
                <img src="https://github.com/PatrickGonzaless.png"/>

                <div className={styles.user_infos}>
                    <div className={styles.infos}>
                        <span>patrick.gonzales123</span>
                        <p>Patrick Gonzales</p>
                    </div>
                    
                    <button>Mudar</button>

                </div>
            </div>

            <div className={styles.main_suggestion}>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className={styles.user_suggestion}>
                <div className={styles.infos_suggestion}>
                    <img src="https://github.com/PatrickGonzaless.png"/>

                    <div className={styles.info_suggestion}>
                        <span>patrick.gonzales123</span>
                        <p>Seguido por poxaaa_bre</p>
                    </div>
                    <button className={styles.follow}>Seguir</button>
                </div>
            </div>
            <div className={styles.infos_suggestion}>
                    <img src="https://github.com/PatrickGonzaless.png"/>

                    <div className={styles.info_suggestion}>
                        <span>patrick.gonzales123</span>
                        <p>Seguido por poxaaa_bre</p>
                    </div>
                    <button className={styles.follow}>Seguir</button>
                </div>
                <div className={styles.infos_suggestion}>
                    <img src="https://github.com/PatrickGonzaless.png"/>

                    <div className={styles.info_suggestion}>
                        <span>patrick.gonzales123</span>
                        <p>Seguido por poxaaa_bre</p>
                    </div>
                    <button className={styles.follow}>Seguir</button>
                </div>
                <div className={styles.infos_suggestion}>
                    <img src="https://github.com/PatrickGonzaless.png"/>

                    <div className={styles.info_suggestion}>
                        <span>patrick.gonzales123</span>
                        <p>Seguido por poxaaa_bre</p>
                    </div>
                    <button className={styles.follow}>Seguir</button>
                </div>
                <div className={styles.infos_suggestion}>
                    <img src="https://github.com/PatrickGonzaless.png"/>

                    <div className={styles.info_suggestion}>
                        <span>patrick.gonzales123</span>
                        <p>Seguido por poxaaa_bre</p>
                    </div>
                    <button className={styles.follow}>Seguir</button>
                </div>

                <footer className={styles.footer_suggestion}>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull;Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais &bull; contas &bull; HashtagsIdioma
                    Português (Brasil)</p>
                    <p>© 2022 INSTAGRAM FROM META</p>
                </footer>
        </>

        
    );
}

export default Suggestion;