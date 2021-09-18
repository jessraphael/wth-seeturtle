import type { NextPage } from "next";
import Head from "next/head";
// Components
import Body from "../components/Body";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SeeTurtle - What The Hack</title>
        <meta
          name="description"
          content="SeeTurtle cleaning up microplastics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Navbar />
      </Body>
    </>
  );
};

export default Home;
