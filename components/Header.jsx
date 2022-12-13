
//React
import { useState, useEffect } from "react";

//Next
import Link from "next/link";
import { useRouter } from "next/router";

//Components
import Logo from "./Logo";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

//Styles
import styles from "../styles/modules/Header.module.scss";


const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const router = useRouter();

    useEffect(()=> {
        document.body.style.overflow = "";
    }, [router.pathname])

    const onOpenMenu = () => {
        setActiveMenu(!activeMenu);
        if (document.body.style.overflow === "") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrapper}>
                        <div className={styles.header__logo}>
                            <Logo/>
                        </div>
                        <nav className={styles.header__nav}>
                            <Menu/>
                        </nav>
                        <div className={styles.header__btns}>
                            <Link 
                            className={`${styles.header__btn} btn`} 
                            href="/sign-up">
                                Sign up
                            </Link>
                            <Hamburger onOpenMenu={onOpenMenu} activeMenu={activeMenu}/>
                        </div>
                    </div>
                </div>
            </header>
            {activeMenu ? <MobileMenu/> : null}
        </>
    )
}

export default Header;