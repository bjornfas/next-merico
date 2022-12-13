
//Components
import Image from "next/image";
import Link from "next/link";
import StatusText from "./StatusText";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Emblem from "../public/images/emblem.svg";

//Styles
import styles from "../styles/modules/Started.module.scss";


const Started = () => {

    const textAnimation = {
        hidden: {
            x: -100, 
            opacity: 0
        },
        visible: custom => ({
            x: 0, 
            opacity: 1,
            transition:  { delay: custom * 0.2}
        })
    }


    return (
        <motion.section 
        className={`${styles.started} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.5}}
        >
            <div className="container">
                <div className={styles.started__content}>
                    <Image 
                    className={styles.started__emblem} 
                    src={Emblem} 
                    alt="Emblem"
                    />
                    <motion.h2 
                    className={`${styles.started__title} title`}
                    variants={textAnimation}
                    custom={1}
                    >
                        Get Started Now
                    </motion.h2>
                    <motion.div 
                    className={styles.started__description}
                    variants={textAnimation}
                    custom={2}
                    >
                        Setup is easy and takes under 5 minutes.
                    </motion.div>
                    <Link href="/sign-up" className={`${styles.started__btn} btn`}>Get Started Now</Link>
                    <StatusText/>
                </div>
            </div>
        </motion.section>
    )
}

export default Started;