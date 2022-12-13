
//Components
import Image from "next/image";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Smile from "../public/images/smile.svg";
import Happy from "../public/images/happy.svg";
import Party from "../public/images/party.svg";

//Styles
import styles from "../styles/modules/Creators.module.scss";

const Creators = () => {

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

    const creatorsAnimation = {
        hidden: {
            y: 30, 
            opacity: 0
        },
        visible: custom => ({
            y: 0, 
            opacity: 1,
            transition:  { delay: custom * 0.2}
        })
    }

    return (
        <motion.section 
        className={`${styles.creators} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
            <div className="container">
                <motion.h2 
                className={`${styles.creators__title} title`}
                variants={textAnimation}
                custom={1}
                >
                    Why Creators Love Marico
                </motion.h2>
                <motion.div 
                className={styles.creators__items} 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                >
                    <motion.div className={styles.creators__item} custom={2} variants={creatorsAnimation}>
                        <div className={styles.creators__heading}>
                            <Image className={styles.creators__icon} src={Smile} alt="Smile"/>
                            Reduced Anxiety
                        </div>
                        <div className={styles.creators__description}>
                            Never worry about losing your audience.
                        </div>
                    </motion.div>
                    <motion.div className={styles.creators__item} custom={3} variants={creatorsAnimation}>
                        <div className={styles.creators__heading}>
                            <Image className={styles.creators__icon} src={Happy} alt="Happy"/>
                            Lower Workload
                        </div>
                        <div className={styles.creators__description}>
                            Just share one link. We all handle the rest.
                        </div>
                    </motion.div>
                    <motion.div className={styles.creators__item} custom={4} variants={creatorsAnimation}>
                        <div className={styles.creators__heading}>
                            <Image className={styles.creators__icon} src={Party} alt="Party"/>
                            More Time
                        </div>
                        <div className={styles.creators__description}>
                            Spend less time on marketing tools
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Creators;