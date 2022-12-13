
//Components
import Menu from "./Menu";

//Styles
import styles from "../styles/modules/MobileMenu.module.scss";

const MobileMenu = () => {
    return (
        <div className={styles.mobile}>
            <nav className={styles.mobile__nav}>
                <Menu/>
            </nav>
        </div>
    )
}

export default MobileMenu;