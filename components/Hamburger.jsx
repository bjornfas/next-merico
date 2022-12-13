
//Styles
import styles from "../styles/modules/Hamburger.module.scss";

const Hamburger = ({onOpenMenu, activeMenu}) => {
    return (
        <div className={`${styles.hamburger} ${activeMenu ? styles.open : ""}`} 
        onClick={onOpenMenu}>
            <span className={styles.hamburger__item}></span>
            <span className={styles.hamburger__item}></span>
            <span className={styles.hamburger__item}></span>
        </div>
    )
}

export default Hamburger;