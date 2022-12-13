
//Components
import Header from "./Header";
import Footer from "./Footer";
import Started from "./Started";
import { motion, useScroll } from "framer-motion";

const Layout = ({children}) => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header/>
            <main>
                {children}
                <Started/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;