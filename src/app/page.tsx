"use client"

import Hero from "@/components/Hero";
import Projects from "@/components/Myprojects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AOS from "aos";
import Nav from "@/components/Nav";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function Home() {
  useEffect (() => {
  AOS.init({
    easing:"ease-out-back",
    duration: 1200,
    delay:100,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset:160,
  });
  AOS.refresh();
}, [])

  return (
    <main>
      <Nav/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>

  )
}
