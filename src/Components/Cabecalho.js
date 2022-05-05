import {AiFillHome} from "react-icons/ai"
import {RiMessengerLine} from "react-icons/ri"
import {BsPlusSquare} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {MdOutlineExplore} from "react-icons/md"
import {IconContext} from 'react-icons/lib';
import lupa from "./Imagens/lupa.png"
import styles from "./Cabecalho.module.css"

function Cabecalho(){
    return(
        <header className={styles.header} >
            <div className={styles.container} >
                <img className={styles.logo} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="imagem do usuário do Instagram"/>
                <div className={styles.input}>  
                    <img className={styles.lupa} src={lupa} alt="lupa para a barra de pequisa"/>                  
                    <input className={styles.pesquisa} placeholder="Pesquisar" />
                </div>

                <div className={styles.menu_icons}>
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome/>
                        </div>
                        <div>
                            <RiMessengerLine />
                        </div>
                        <div>
                            <BsPlusSquare />
                        </div>
                        <div>
                            <MdOutlineExplore />
                        </div>
                        <div>
                            <FiHeart />
                        </div>
                    </IconContext.Provider>
                    <img className={styles.img_user} src="https://github.com/PatrickGonzaless.png" alt="imagem puxada do GitHub"/>
                </div>
            </div>
        </header>
        
    );
}

export default Cabecalho;