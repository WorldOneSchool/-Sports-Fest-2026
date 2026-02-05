import React from "react";
import PageContainer from "../components/PageContainer";
import whyBg from "../assets/why.png";
import ScrollReveal from "../components/ScrollReveal";

export default function WhySportsDay() {
  return (
    <PageContainer>
      <div
        aria-hidden="true"
        className="why-bg-blur"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${whyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      <article className="content-page why-content">
        <header>
          <ScrollReveal>
            <h2>Why We Celebrate Sports Day</h2>
          </ScrollReveal>
        </header>

        <section>
          <ScrollReveal delay={0.08}>
            <p>Sports Day builds character, teamwork, and healthy competition among students by
               encouraging them to challenge themselves, work together, respect rules, and develop
               a positive attitude toward success and failure..</p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p>Through sports, we learn valuable qualities such as discipline, teamwork, leadership, patience, and 
              perseverance. When we play together, we understand the power of unity and cooperation. Sports teach us how to accept victory with humility
               and defeat with courage, helping us grow into confident and responsible individuals.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <p>Sports Day reminds us of the importance of physical fitness and a healthy lifestyle. In a world where we spend more time sitting and using screens, sports encourage us to stay active, energetic, and strong — both physically and mentally.</p>
          </ScrollReveal>
        </section>
      </article>
    </PageContainer>
  );
}