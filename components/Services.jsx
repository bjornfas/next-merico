
//Components
import {MServicesItem} from "./ServicesItem";

//Framer Motion
import {motion} from "framer-motion";

//Images
import Twitter from "../public/images/twitter.svg";
import Youtube from "../public/images/youtube.svg";
import Wordpress from "../public/images/wordpress.svg";
import Substack from "../public/images/substack.svg";
import Medium from "../public/images/medium.svg";
import Spotify from "../public/images/spotify.svg";
import Anchor from "../public/images/anchor.svg";
import Podcast from "../public/images/podcast.svg";
import Inst from "../public/images/inst.svg";
import Linkedin from "../public/images/linkedin.svg";
import Facebook from "../public/images/facebook.svg";

//Styles
import styles from "../styles/modules/Services.module.scss";

const Services = () => {

    const servicesList = [
        {
            image: Twitter,
            name: "Twitter"
        },
        {
            image: Youtube,
            name: "YouTube"
        },
        {
            image: Wordpress,
            name: "Wordpress"
        },
        {
            image: Substack,
            name: "Substack"
        },
        {
            image: Medium,
            name: "Medium"
        },
        {
            image: Wordpress,
            name: "RSS Feeds"
        },
        {
            image: Spotify,
            name: "Spotify"
        },
        {
            image: Anchor,
            name: "Anchor"
        },
        {
            image: Podcast,
            name: "Apple Podcasts"
        },
        {
            image: Inst,
            name: "Inst"
        },
        {
            image: Linkedin,
            name: "Linkedin"
        },
        {
            image: Facebook,
            name: "Facebook"
        }
    ];

    const servicesAnimation = {
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

    const result = servicesList.map((item, i) => {
        return (
            <MServicesItem 
            key={i} 
            custom={1 + i}
            variants={servicesAnimation}
            image={item.image} 
            name={item.name}/>
        )
    })

    return (
        <section className={`${styles.services} section`}>
            <div className="page-container">
                <motion.div 
                className={styles.services__list}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once: true}}
                >
                    {result}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;