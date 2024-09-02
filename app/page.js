"use client"; // Ensure this component is a client-side component

import { useRef } from "react";
import Navbar from "./components/Pages/Navbar";
import Planat from "./components/Pages/Planat";
import DiscussProject from "./components/Pages/DiscussProject";
import OurTeam from "./components/Pages/OurTeam";
import FAQ from "./components/Pages/FAQ";
import Footer from "./components/Pages/Footer";
import Industries from "./components/Pages/Industries";
import HeroSection from "./components/Pages/HeroSection";
import DevelopmentStageComponent from "./components/Pages/DevelopmentStage";

export default function Home() {
  const faqRef = useRef(null);
  const discussProjectRef = useRef(null);
  const industriesRef = useRef(null);
  const developmentStageRef = useRef(null);
  const ourTeamRef = useRef(null);

  const scrollToFAQ = () =>
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToDiscussProject = () =>
    discussProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToIndustries = () =>
    industriesRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToDevelopmentStage = () =>
    developmentStageRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToOurTeam = () =>
    ourTeamRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Navbar
        onFAQClick={scrollToFAQ}
        onContactClick={scrollToDiscussProject}
        onindustriesClick={scrollToIndustries}
        onDevelopmentStageClick={scrollToDevelopmentStage}
        onOurTeamClick={scrollToOurTeam}
      />
      <HeroSection />
      <Planat />
      <div ref={industriesRef}>
        <Industries />
      </div>
      <div ref={discussProjectRef}>
        <DiscussProject />
      </div>
      <div ref={developmentStageRef}>
        <DevelopmentStageComponent />
      </div>
      <div ref={ourTeamRef}>
        <OurTeam />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
