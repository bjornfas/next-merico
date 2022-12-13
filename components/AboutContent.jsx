
//Next
import Image from "next/image";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Logo from "../public/images/logo.svg";

//Styles
import styles from "../styles/modules/AboutContent.module.scss";

const AboutContent = () => {

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
        className={`${styles.about} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
            <div className="page-container">
                <div className={styles.about__preview}>
                    <Image 
                    className={styles.about__logo} 
                    width={320} 
                    src={Logo} 
                    alt="Logo"/>
                    <motion.h1 
                    className={`${styles.about__title} title`}
                    variants={textAnimation}
                    custom={1}
                    >
                    We exist to help creators <br />
                    own their audience.
                    </motion.h1>
                    <motion.h2 
                    className={styles.about__subtitle}
                    variants={textAnimation}
                    custom={2}
                    >
                    We believe that social platforms are taking advantage of creators. <br />
                    We want to change that and help creators fight back. 
                    </motion.h2>
                </div>
                <div className={styles.about__content}>
                    Building a career on social platforms is like building a home on someone else is
                    land. While social platforms are great for discovering and reaching your audience,
                    your goal as a creator should be to convert your followers into email or text
                    message subscribers. Why? Look no further than TikTok. Almost overnight,
                    millions of creative people almost lost their careers. <br /><br />

                    If a platform removes your account, or their algorithm for distribution no longer
                    favours you, are you prepared? <br /><br />


                    We built Marico to make this process easy, fast, and effective. The traditional
                    solution to this problem involves spending days building a website or hiring
                    someone expensive to do it for you. But those days are gone. With Marico, you
                    get a portfolio that is always up-to-date and converts visitors into email or text
                    message subscribers. The best thing? It takes under 5 minutes to setup, and it
                    automatically updates whenever you post new content anywhere online. We
                    believe the best tools are the ones you do not even notice. Marico helps you build
                    your own audience, without any hassle or time commitment. All you have to do is
                    share your portfolio link with your audience, and we all handle the rest. <br /> <br />
                    <span className={styles.about__author}>
                        - The Team Marico (Olivia, William, and Noah) 
                    </span>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutContent;