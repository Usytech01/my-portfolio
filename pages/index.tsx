import Head from 'next/head';
import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";
import { About } from "@/components/layouts/About";
import Project from "@/components/layouts/Project";
import Service from "@/components/layouts/Service";
import Contact from "@/components/layouts/Contact";
import { Footer } from "@/components/layouts/Footer";
import React from 'react'



const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Usman O. Dio | Designer & Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of Usman O. Dio, a multidisciplinary designer and developer specializing in modern UI/UX and web development." />
      </Head>
      
      <div className="text-foreground selection:bg-blue-500/30 transition-colors duration-500">


        <Header />
        <main>
          <Layout />
          <About />
          <Project />
          <Service />
          <Contact />
        </main>


        <Footer />
      </div>
    </>
  )
}

export default Home;
