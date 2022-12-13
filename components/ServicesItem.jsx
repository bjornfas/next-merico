//React
import { forwardRef } from "react";

//Next
import Image from "next/image";

//Framer Motion
import {motion} from "framer-motion";

//Styles
import styles from "../styles/modules/Services.module.scss";

export const ServicesItem = forwardRef(({image, name}, ref) => {
    return (
        <div className={styles.services__item} ref={ref}>
            <Image 
            className={styles.services__image}
            src={image} 
            alt={name}/>
            <div className={styles.services__name}>
                {name}
            </div>
            <div className={styles.services__text}>
                Connect your {name} feed to
                your Marico homepage.
            </div>
        </div>
    )
})

export const MServicesItem = motion(ServicesItem);