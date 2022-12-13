
//Framer Motion
import {motion} from "framer-motion";

//Styles
import styles from "../styles/modules/Connect.module.scss";

const Connect = () => {

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
        className={`${styles.connect} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
            <div className="container">
                <motion.h2 
                className={`${styles.connect__title} title`}
                variants={textAnimation}
                custom={1}
                >
                    Connect Your Content
                </motion.h2>
                <motion.div 
                className={styles.connect__text}
                variants={textAnimation}
                custom={2}
                >
                    Bring all of your content together and get a Homepage that <br />
                    automatically updates whenever you create anywhere online.
                </motion.div>
                <a href="/blog" className={`${styles.connect__btn} inverse`}>
                    View Avaliable Sources
                </a>
            </div>
        </motion.section>
    )
}

export default Connect;