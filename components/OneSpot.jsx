
//Next
import Image from "next/image";
import Link from "next/link";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Screen from "../public/images/screen.jpg";

//Styles
import styles from "../styles/modules/OneSpot.module.scss";

const OneSpot = () => {

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
        className={`${styles["one-spot"]} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.5}}
        >
            <div className="container">
                <div className={styles["one-spot__wrapper"]}>
                    <div className={styles["one-spot__item"]}>
                        <motion.h2 
                        className={styles["one-spot__title"]}
                        variants={textAnimation}
                        custom={1}
                        >
                            Your Content. <br />
                            All in <span className="blue">One Spot</span>
                        </motion.h2>
                        <div className={styles["one-spot__btns"]}>
                            <Link href="/sign-up" className={`${styles["one-spot__btn"]} btn`}>
                                Get Started Now
                            </Link>
                            <Link href="/sign-up" className={`${styles["one-spot__btn"]} inverse`}>
                                View A Demo
                            </Link>
                        </div>
                    </div>
                    <div className={styles["one-spot__item"]}>
                        <Image 
                        className={styles["one-spot__image"]}
                        src={Screen} 
                        alt="Screen" 
                        placeholder="blur"/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default OneSpot;