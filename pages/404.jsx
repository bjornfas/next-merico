
//Next
import Head from "next/head";
import Link from "next/link";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Styles
import styles from "../styles/modules/Error404.module.scss";

const Error404 = () => {
    return (
        <>
            <Head>
                <title>Marico | 404</title>
            </Head>
            <Header/>
            <div className={`${styles["error-page"]} section`}>
                <div className="page-container">
                    <h2 className="title">404</h2>
                    <h1 className="title">
                        Page not found
                    </h1>
                    <div className={styles["error-page__text"]}>
                    Please visit our <Link className={styles["error-page__link"]} href="/">home page</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Error404;