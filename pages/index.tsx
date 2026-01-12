import AnimatedBackground from "@/components/common/AnimatedPhotoBackground";
import { About } from "@/components/layouts/About";
import { Footer } from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";
import Project from "@/components/layouts/Project";
import Service from "@/components/layouts/Service";
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
    <div className="">
      <Header />
      <main>
        <Layout />
        <About />
        <Project />
        <Service />
        <Footer />
      </main>
    </div>
      
    </>
  )
}

export default Home;
