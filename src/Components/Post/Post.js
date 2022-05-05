import styles from "./Post.module.css"
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaRegHeart } from "react-icons/fa"
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from "react-icons/lib"

function Post(){
    return(
        <>
            <header className={styles.header_post} >

                <div className={styles.infos_post} >
                    <img className={styles.img_header_post} src="https://github.com/maykbrito.png" />

                    <p>maykbrito</p>
                </div>


                    <FiMoreHorizontal />
            </header>
            
            <div className={styles.img_post}>
                <img src="https://github.com/maykbrito.png"/>
            </div>    

            <div className={styles.footer_post}>
                <IconContext.Provider value={{size:"23px"}}>
                <section className={styles.engagement_post}>
                    <div className={styles.icons1}>
                        <div className={styles.icon}><FaRegHeart/></div>
                        <div className={styles.icon}><BsChat/></div>
                        <div className={styles.icon}><FiSend/></div>
                    </div>
                        <div className={styles.icon}><BsBookmark/></div>
                    
                </section>
                </IconContext.Provider>

                <section className={styles.like}>
                    <span>115 curtidas</span>
                </section>

                <div className={styles.legend}>
                    <p>
                        <span>maykbrito</span> Este post é um oferecimento PROA: O melhor curso de WebJavaDeveloper do Brasil!
                    </p>
                </div>

                <div className={styles.hour_post}>
                    <time>HÁ 3 HORAS</time>
                </div>

                <div className={styles.comment}>

                    <div className={styles.fake_comment}>
                        
                        <IconContext.Provider value={{size:"25px"}}>
                        <div className={styles.icon}>
                            <BsEmojiSmile/>
                        </div>
                        </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div>
                    <button className={styles.button}>Publicar</button>
                </div>
            </div>
        
        </>
    );
}

export default Post;