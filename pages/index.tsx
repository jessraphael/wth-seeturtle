import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Components
import Body from "../components/Body";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import GridContainer from "../components/GridContainer";
import LeftGrid from "../components/LeftGrid";
import RightGrid from "../components/RightGrid";
import TurtleFeed from "../components/TurtleFeed";
import AboutUs from "../components/AboutUs";

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
          {/* <Image
            src="/profilepic.png"
            alt="Profile picture"
            layout="fixed"
            width={48}
            height={48}
            className="rounded-xl"
          /> */}
          <p className="text-white text-lg">Navbar</p>
        </Navbar>
        <Landing>
          <p className="text-white text-lg">Landing</p>
        </Landing>
        <GridContainer>
          <LeftGrid></LeftGrid>
          <RightGrid>
            <TurtleFeed />
          </RightGrid>
        </GridContainer>
        <AboutUs>
          <p className="text-white text-lg">About Us</p>
        </AboutUs>
      </Body>
    </>
  );
};

export default Home;
