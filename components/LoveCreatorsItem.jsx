
//React
import { forwardRef } from "react";

//Next
import Image from "next/image";
import Link from "next/link";

//Framer Motion
import {motion} from "framer-motion";

//Styles
import styles from "../styles/modules/LoveCreators.module.scss";

const LoveCreatorsItem = forwardRef(({image, name, prof, link}, ref) => {
    return (
        <div className={styles["love-creators__item"]} ref={ref}>
            <Image 
            className={styles["love-creators__avatar"]} 
            src={image} 
            alt={image}
            />
            <div className={styles["love-creators__name"]}>
                {name}
            </div>
            <div className={styles["love-creators__profession"]}>
                {prof}
            </div>
            <Link 
            className={styles["love-creators__social"]} 
            href={link}>
            Twitter
            </Link>
        </div>
    )
})

LoveCreatorsItem.displayName = "LoveCreatorsItem";

export const MLoveCreatorsItem = motion(LoveCreatorsItem);