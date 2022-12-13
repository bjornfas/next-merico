
//Next
import Link from "next/link";
import { useRouter } from "next/router";

//Styles
import styles from "../styles/modules/Menu.module.scss";

const MenuItem = ({name, link}) => {

    const router = useRouter();
    const activeClass = router.pathname === link ? `${styles.active}` : "";

    return (
        <li className={styles.menu__item}>
            <Link href={link} className={`${styles.menu__link} ${activeClass}`}>
                {name}
            </Link>
        </li>
    )
}

export default MenuItem;