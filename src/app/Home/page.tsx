import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/app/_ui/components/Hero/Hero";
import Slider from "@/app/_ui/components/Slider/Slider";
import { SliderData } from "@/app/_ui/components/Slider/SliderData";
import Instagram from "@/app/_ui/components/InstagramGallery/Instagram";
import Portfolio from "@/app/_ui/components/Portfolio/Portfolio";
import Contact from "@/app/_ui/components/Contact/Contact";
import NavBar from "../_ui/components/NavigationBar/NavBar";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Keep moving</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavBar />
      <Hero heading="Let's go jogging" message="Find your road" />
      <Slider slides={SliderData} />
      <Instagram />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;