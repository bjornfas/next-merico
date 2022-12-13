
//Components 
import {MLoveCreatorsItem} from "./LoveCreatorsItem";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Jacob from "../public/images/jacob.png";
import Daniel from "../public/images/daniel.png";
import Ryan from "../public/images/ryan.png";

//Styles
import styles from "../styles/modules/LoveCreators.module.scss";

const LoveCreators = () => {

    const creators = [
        {
            image: Jacob,
            name: "Jacob Mark",
            prof: "CEO & Design",
            social: "https://twitter.com/"
        },
        {
            image: Daniel,
            name: "Daniel",
            prof: "CTO & Development",
            social: "https://twitter.com/"
        },
        {
            image: Ryan,
            name: "Ryan Trump",
            prof: "COO & Sales",
            social: "https://twitter.com/"
        },
    ];

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

    const result = creators.map((item, i) => {
        return (
            <MLoveCreatorsItem
            key={i}
            custom={1 + i} 
            variants={creatorsAnimation}
            image={item.image}
            name={item.name}
            prof={item.prof}
            link={item.social}
            />
        )
    });

    return (
        <motion.section 
        className={`${styles["love-creators"]} section`}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        >
            <div className="page-container">
                <motion.h2 
                className={`${styles["love-creators__title"]} title`}
                variants={textAnimation}
                custom={1}
                >
                    We love creators
                </motion.h2>
                <motion.div 
                className={styles["love-creators__wrapper"]}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                >
                    {result}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default LoveCreators;