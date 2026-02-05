import React from "react";
import PageContainer from "../components/PageContainer";
import ScrollReveal from "../components/ScrollReveal";

export default function WhatsNew() {
  return (
    <PageContainer>
      <section className="content-page">
        <header>
          <ScrollReveal>
            <h2>What’s New in Our School</h2>
          </ScrollReveal>
        </header>

        <ScrollReveal delay={0.08}>
          <h3>New Sports Stadiums</h3>
        </ScrollReveal>

        <div className="stadium-list">
          <ScrollReveal delay={0.12}>
            <div className="stadium-card">
              <div className="stadium-text">Main Stadium — details placeholder</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="stadium-card black-placeholder" aria-hidden="true"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="stadium-card">
              <div className="stadium-text">Indoor Arena — details placeholder</div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageContainer>
  );
}