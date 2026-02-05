import React from "react";
import PageContainer from "../components/PageContainer";
import ScrollReveal from "../components/ScrollReveal";;
import LandingHero from "../components/LandingHero";

export default function Home() {
  return (
    <LandingHero>
      <ScrollReveal>
        <h1 className="main-heading">Welcome to World One School’s Sports Fest 2026</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <p className="subtitle">Celebrating sport, teamwork, and excellence.</p>
      </ScrollReveal>
    </LandingHero>
  );
}