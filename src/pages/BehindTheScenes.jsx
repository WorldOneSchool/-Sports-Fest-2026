import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import ScrollReveal from "../components/ScrollReveal";
import behindImg from "../assets/behind.png";

export default function BehindTheScenes() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <PageContainer>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${behindImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      <section className="behind-scenes-page">
        <ScrollReveal>
          <header className="behind-scenes-header" >
            <h1 style={{ color: "#fff" }}>Behind the Scenes</h1>
          </header>
        </ScrollReveal>
      </section>

        <ScrollReveal delay={0.2}>
          <div className="video-grid" style={{ marginTop: "40px" }}>
            {Array.from({ length: 6 }, (_, i) => {
              const videoIds = ['q_uurG8d0yc', 'ByJMCscnvx0'];
              const videoId = videoIds[i % videoIds.length];
              return (
                <div key={i} className="video-card">
                <div className="video-thumbnail">
                  {playingVideo === i ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={`Behind the Scenes Video ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div
                      className="video-placeholder"
                      style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}
                      onClick={() => handlePlay(i)}
                    >
                      <div className="video-overlay">
                        <div className="play-button">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)"/>
                            <path d="M9 8L16 12L9 16V8Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="video-info">
                          <h4>Video {i + 1}</h4>
                          <p>Behind the scenes footage</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
            })}
          </div>
        </ScrollReveal>
    </PageContainer>
  );
}
