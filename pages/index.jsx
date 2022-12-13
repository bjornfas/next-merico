
//Next
import Head from "next/head";

//Components
import Layout from "../components/Layout";
import Greeting from "../components/Greeting";
import Creators from "../components/Creators";
import Connect from "../components/Connect";
import OneSpot from "../components/OneSpot";

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>Marico | Home</title>
			</Head>
			<Greeting/>
			<Creators/>
			<Connect/>
			<OneSpot/>
		</Layout>
	)
}

export default Home;