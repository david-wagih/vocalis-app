import type { NextPage } from "next";
import Feature from "../components/feature";
import Navbar from "../components/header";
import Hero from "../components/hero";


const Home: NextPage = (props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
    </>
  );
};

export default Home;
