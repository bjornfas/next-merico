
//Components
import MenuItem from "./MenuItem";

//Styles
import styles from "../styles/modules/Menu.module.scss";

const Menu = () => {

    const pages = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Blog",
            link: "/blog"
        }
    ]

    const menuList = pages.map((item, i) => {
        return (
            <MenuItem key={i} name={item.name} link={item.link} />
        )
    });

    return (
        <ul className={styles.menu}>
            {menuList}
        </ul>
    )
}

export default Menu;