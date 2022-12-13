
//Framer Motion
import {motion} from "framer-motion";

//Styles
import styles from "../styles/modules/BlogContent.module.scss";

const BlogContent = () => {

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
        className={`${styles.blog} section`}
        initial="hidden"
        whileInView="visible"
        >
            <div className="page-container">
                <motion.h1 
                className={`${styles.blog__title} title`}
                variants={textAnimation}
                custom={1}
                >
                    Content Sources
                </motion.h1>
                <motion.h2 
                className={styles.blog__subtitle}
                variants={textAnimation}
                custom={2}
                >
                    Connect these sources to your Marico homepage.
                </motion.h2>
            </div>
        </motion.section>
	)
}

export default BlogContent;