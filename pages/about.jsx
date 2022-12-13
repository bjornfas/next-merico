//Next
import Head from "next/head";

//Components
import Layout from "../components/Layout";
import AboutContent from "../components/AboutContent";
import LoveCreators from "../components/LoveCreators";

const About = () => {
	return (
		<Layout>
			<Head>
				<title>Marico | About</title>
			</Head>
			<AboutContent/>
            <LoveCreators/>
		</Layout>
	)
}

export default About;