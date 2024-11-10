"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";

export default function Home() {
  const [activeId, setActiveId] = useState("hero"); // Default active section
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id); // Update active section ID
          }
        });
      },
      { threshold: 0 } // Adjust threshold for triggering
    );

    const sections = compsRef.current.children; // Get child elements from ref
    Array.from(sections).forEach((section) => {
      observer.observe(section); // Observe each section
    });

    // Cleanup function to unobserve sections
    return () => {
      Array.from(sections).forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
    <Load/>
    <Toggle>
      <Navbar id={activeId} />
      <div className="w-min" ref={compsRef}>
        <Hero id="hero" />
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Reviews id="reviews" />
        <Projects id="projects" />
        <PricingPlans id="pricing" />
        <Contact id="contact" />
        <Questions id="questions" />
      </div>
      </Toggle>
    </>
  );
}
