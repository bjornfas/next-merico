
//Components
import Image from "next/image";

//Images
import Dot from "../public/images/dot.svg";

//Styles
import styles from "../styles/modules/StatusText.module.scss";

const StatusText = () => {
    return (
        <div className={styles.started}>
            <div className={styles.started__status}>
                <Image 
                className={styles.started__icon} 
                src={Dot} 
                alt="Online status"/>
                1000+
            </div> 
            creators have already started
        </div>
    )
}

export default StatusText;