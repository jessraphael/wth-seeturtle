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
import Dashboard from "../components/Dashboard";
import RightGrid from "../components/RightGrid";
import TurtleFeed from "../components/TurtleFeed";
import Chat from "../components/Chat";
import Donate from "../components/Donate";
import AboutUs from "../components/AboutUs";
import How from "../components/How";

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
        <Navbar />
        <Landing />
        <GridContainer>
          <LeftGrid>
            <Dashboard />
          </LeftGrid>
          <RightGrid>
            <TurtleFeed embedId="2I6hDqCrI9o" />
          </RightGrid>
        </GridContainer>
        <Donate />
        <AboutUs>
        </AboutUs>
        <How />
      </Body>
    </>
  );
};

export default Home;
