import type { NextPage } from "next";
import Navbar from "../components/header";
import Hero from "../components/hero";


const Home: NextPage = (props) => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
