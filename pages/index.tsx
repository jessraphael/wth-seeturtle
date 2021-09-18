import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Components
import Body from "../components/Body";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import GridContainer from "../components/GridContainer";
import LeftGrid from "../components/LeftGrid";
import RightGrid from "../components/RightGrid";
import TurtleFeed from "../components/TurtleFeed";

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
        <LeftNavbar />
        <Navbar>
          <Image
            src="/profilepic.png"
            alt="Profile picture"
            layout="fixed"
            width={48}
            height={48}
            className="rounded-xl"
          />
        </Navbar>
        <GridContainer>
          <LeftGrid></LeftGrid>
          <RightGrid>
            <TurtleFeed />
          </RightGrid>
        </GridContainer>
      </Body>
    </>
  );
};

export default Home;
