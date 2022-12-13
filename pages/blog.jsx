
//Next
import Head from "next/head";

//Components
import Layout from "../components/Layout";
import BlogContent from "../components/BlogContent";
import Services from "../components/Services";

const Blog = () => {
	return (
		<Layout>
            <Head>
				<title>Marico | Blog</title>
			</Head>
            <BlogContent/>
            <Services/>
        </Layout>
	)
}

export default Blog;