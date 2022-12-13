
//Next
import Link from "next/link";

//Components
import Logo from "./Logo";
import Menu from "./Menu";

//Styles
import styles from "../styles/modules/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__info}>
                        <Logo/>
                        <Link 
                        className={styles.footer__email} 
                        href="mailto:info@marico.co">
                        info@marico.co</Link>
                    </div>
                    <nav>
                        <Menu/>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;