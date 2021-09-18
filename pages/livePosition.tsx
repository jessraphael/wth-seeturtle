
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Components
import Body from "../components/Body";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>live position</title>
        <meta
          name="description"
          content="SeeTurtle cleaning up microplastics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <LeftNavbar />
        <Navbar>
        </Navbar>
        <Image
            src="/liveposition.png"
            alt="live position"
            layout="fixed"
            width={60}
            height={60}
            className="rounded-xl"
          />
      </Body>
    </>
  );
};

export default Home;


