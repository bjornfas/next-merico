
//React
import { useState } from "react";

//Next
import Head from "next/head";
import Image from "next/image";

//Components
import { useFormik } from "formik";
import * as Yup from 'yup';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

//Framer Motion
import {motion} from "framer-motion";

//Images
import User from "../public/images/user.svg";
import Show from "../public/images/show.svg";
import Hide from "../public/images/hide.svg";
import At from "../public/images/at.svg";

//Styles
import styles from "../styles/modules/SignUp.module.scss";

const SignUp = () => {

    const [openModal, setOpenModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const formik = useFormik({
        initialValues: {
          Username: "",
          Password: "",
          Email: "",
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            Password: Yup.string()
                .required('No password provided.') 
                .min(8, 'Password is too short - minimum 8.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            Email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            setUsername(values.Username);
            setPassword(values.Password);
            setEmail(values.Email);
            setOpenModal(true);
            resetForm();
        },
    });

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

    const onChangeShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <Head>
				<title>Marico | Sign Up</title>
			</Head>
            <Header/>
            <motion.section 
            className={`${styles["sign-up"]} section`}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            >
                <div className="page-container">
                    <motion.h1 
                    className={`${styles["sign-up__title"]} title`}
                    variants={textAnimation}
                    custom={1}
                    >
                        Sign up
                    </motion.h1>
                    <motion.h2 
                    className={styles["sign-up__subtitle"]}
                    variants={textAnimation}
                    custom={2}
                    >
                        Fill all field for create an account.
                    </motion.h2>
                    <form 
                    className={styles["sign-up__form"]}
                    onSubmit={formik.handleSubmit}>
                        <div className={styles["sign-up__item"]}>
                            <label htmlFor="Username" className={styles["sign-up__label"]}>
                                <input 
                                id="Username"
                                autoComplete="username" 
                                className={styles["sign-up__input"]} 
                                type="text" 
                                placeholder="Username"
                                name="Username"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.Username}
                                style={formik.touched.Username && formik.errors.Username 
                                ? {borderBottom: "1px solid #3C82F4"} 
                                : null}
                                />
                                {formik.touched.Username && formik.errors.Username ? (
                                    <div className="error-input">{formik.errors.Username}</div>
                                ) : null}
                                <Image 
                                className={styles["sign-up__icon"]} 
                                width={32}
                                src={User} 
                                alt={User}/>
                            </label>
                            <label htmlFor="Password" className={styles["sign-up__label"]}>
                                <input
                                id="Password"
                                autoComplete="current-password" 
                                className={styles["sign-up__input"]} 
                                type={showPassword ? formik.values.Password : "password"} 
                                placeholder="Password"
                                name="Password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.Password}
                                style={formik.touched.Password && formik.errors.Password 
                                ? {borderBottom: "1px solid #3C82F4"} 
                                : null}
                                />
                                {formik.touched.Password && formik.errors.Password ? (
                                    <div className="error-input">{formik.errors.Password}</div>
                                ) : null}
                                <Image 
                                className={styles["sign-up__icon"]}
                                width={32}
                                src={showPassword ? Hide : Show} 
                                alt="Password"
                                onClick={onChangeShowPassword}/>
                            </label>
                        </div>
                        <div className={styles["sign-up__item"]}>
                            <label htmlFor="Email" className={styles["sign-up__label"]}>
                                <input 
                                id="Email"
                                className={styles["sign-up__input"]} 
                                type="email" 
                                placeholder="Email Address"
                                name="Email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.Email}
                                style={formik.touched.Email && formik.errors.Email 
                                ? {borderBottom: "1px solid #3C82F4"} 
                                : null}
                                />
                                {formik.touched.Email && formik.errors.Email ? (
                                    <div className="error-input">{formik.errors.Email}</div>
                                ) : null}
                                <Image 
                                className={styles["sign-up__icon"]}
                                width={32} 
                                src={At} 
                                alt={At}/>
                            </label>
                            <button 
                            type="submit"
                            className={`${styles["sign-up__btn"]} btn`}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </motion.section>
            <Modal 
            username={username} 
            password={password}
            email={email}
            openModal={openModal} 
            setOpenModal={setOpenModal}/>
            <Footer/>
        </>
    )
}

export default SignUp;