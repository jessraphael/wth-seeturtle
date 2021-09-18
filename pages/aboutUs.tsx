import Body from "../components/Body";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="SeeTurtle cleaning up microplastics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Navbar />
        <button>Outlined</button>
      </Body>
    </>
  );
};

export default Home;
