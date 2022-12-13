
//Next
import Link from "next/link";

//Components
import StatusText from "./StatusText";

//Framer Motion
import {motion} from "framer-motion";

//Styles
import styles from "../styles/modules/Greeting.module.scss";

const Greeting = () => {

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
        className={`${styles.greeting} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
            <div className="container">
                <motion.h1
                className={styles.greeting__title}
                variants={textAnimation}
                custom={1}
                >
                    Own your audience.
                </motion.h1>
                <motion.div
                className={`${styles.greeting__title} gradient`}
                variants={textAnimation}
                custom={2}
                >
                    So you don`t lose them.
                </motion.div>
                <div className={styles.greeting__info}>
                    <motion.div
                    className={styles.greeting__text}
                    variants={textAnimation}
                    custom={3}
                    >
                        Turn your audience into email and <br />
                        text message subscribers.
                    </motion.div>
                    <div className={styles.greeting__btns}>
                        <Link href="/sign-up" className={`${styles.greeting__btn} btn`}>
                            Get Started Now
                        </Link>
                        <Link href="/sign-up" className={`${styles.greeting__btn} inverse`}>
                            View A Demo
                        </Link>
                    </div>
                    <StatusText/>
                </div>
            </div>
        </motion.section>
    )
}

export default Greeting;