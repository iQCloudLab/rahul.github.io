---
permalink: /
title: "" 
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* === Page Setup (Neutral Light Background) === */


/* === General Page Layout === */

/* === Announcement Box Container === */
.hiring-box {
  position: absolute;;
  top: 132px;
  right: 20px;
  width: 420px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(90, 180, 255, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(150, 200, 255, 0.4);
  overflow: hidden;
  animation: slideInRight 1.2s ease;
  z-index: 999;
}

/* === Slide In Animation === */
@keyframes slideInRight {
  0% { transform: translateX(120%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/* === Header Section === */
.hiring-header {
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  color: white;
  text-align: center;
  padding: 7px;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  position: relative;
}

.hiring-header::after {
  content: "🌟";
  position: absolute;
  right: 15px;
  animation: spin 6s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* === Content Section === */
.hiring-content {
  padding: 6px 2px ;
  text-align: center;
  color: #1a2a3a;
  font-size: 0.95rem;
  line-height: 1.3;
}

.hiring-content strong {
  color: #0078d7;
}

/* === Call to Action Button === */
.hiring-btn {
  display: inline-block;
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.hiring-btn:hover {
  background: linear-gradient(90deg, #5ee6ff, #3a95f2);
  box-shadow: 0 0 10px rgba(80, 180, 255, 0.6);
}

/* === Glow Border Animation === */
.hiring-box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, #5ee6ff, #3a95f2, #0078d7);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderGlow 8s linear infinite;
}
@keyframes borderGlow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}


/* === Glassmorphism Container === */
.announcement-box {
  width: 90%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(180, 200, 255, 0.4);
  box-shadow: 0 8px 25px rgba(180, 210, 255, 0.35);
  overflow: hidden;
  position: relative;
  animation: glowPulse 8s infinite ease-in-out;
}

/* === Gentle Glow Animation === */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(90, 180, 255, 0.3); }
  50% { box-shadow: 0 0 35px rgba(90, 180, 255, 0.55); }
}

/* === Header === */
.announcement-header {
  background: linear-gradient(90deg, #5eb8ff, #3a95f2, #5ee6ff);
  text-align: center;
  padding: 7px 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.announcement-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05), rgba(255,255,255,0.25));
  animation: headerShine 6s linear infinite;
}

@keyframes headerShine {
  0% { left: -50%; }
  100% { left: 100%; }
}

/* === Scrolling Area === */
.announcement-content {
  height: 200px;
  overflow: hidden;
  color: #1a2a3a;
  padding: 15px 20px;
  background: rgba(255,255,255,0.4);
}

.scroll-area {
  display: flex;
  flex-direction: column;
  animation: scrollFuture 20s linear infinite;
}

.scroll-area:hover {
  animation-play-state: paused;
}

@keyframes scrollFuture {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-50%); }
}

/* === Individual Announcement === */
.announcement-item {
  border-bottom: 1px solid rgba(150, 180, 255, 0.2);
  padding: 7px 0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.announcement-item span.icon {
  color: #3a95f2;
  text-shadow: 0 0 6px rgba(80, 180, 255, 0.8);
  font-size: 1.1rem;
}

.announcement-item strong {
  color: #0078d7;
}

.announcement-item:hover {
  transform: translateX(6px);
  color: #005fa3;
}

/* === Subtle Glow Lines (Top + Bottom) === */
.announcement-box::before,
.announcement-box::after {
  content: "";
  position: absolute;
  width: 120%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5eb8ff, transparent);
  top: 0;
  left: -10%;
  animation: moveLine 9s linear infinite;
}

.announcement-box::after {
  bottom: 0;
  top: auto;
  animation-delay: 4s;
}

@keyframes moveLine {
  0% { transform: translateX(-50%); opacity: 0.6; }
  100% { transform: translateX(50%); opacity: 0.6; }
}
</style>



<!-- === Announcement Box === -->
<div class="hiring-box">
  <div class="hiring-header">🎓 Student Hiring</div>
  <div class="hiring-content">
    <p> I'm seeking students for PhD & master, research in:</p>
      <ul style="list-style: none; padding: 0; margin: 0; text-align: center;">
      <li>🔹 Quantum Cloud & Edge Computing</li>
      <li>🔹 Agentic-based (LLM) Scheduling</li>
      <li>🔹 AI-driven IoT Applications</li>
    </ul>       
    <p> <strong> Mail me </strong>  your CV to join our innovation-driven environment to explore next-gen computing!</p>    
  </div>
</div>


<!-- === Futuristic Announcement Box (Light Theme) === -->
<div class="announcement-box">
  <div class="announcement-header">✨ Recent iQCloudLab Highlights</div>
  <div class="announcement-content">
    <div class="scroll-area">
      <div class="announcement-item"><span class="icon">🚀</span> <strong>Publication:</strong> Quantum–Edge Resource Scheduling accepted at IEEE CloudNet 2025.</div>
      <div class="announcement-item"><span class="icon">🧠</span> <strong>Symposium:</strong> “AI for Quantum Networks” — Tokyo, March 2026.</div>
      <div class="announcement-item"><span class="icon">🔬</span> <strong>Launch:</strong> QEdge 2.0 — Adaptive Hybrid Cloud Framework.</div>
      <div class="announcement-item"><span class="icon">🏆</span> <strong>Award:</strong> Recognized for Excellence in Edge-AI Research 2025.</div>
      <div class="announcement-item"><span class="icon">🌐</span> <strong>Collaboration:</strong> Joint Project with European Quantum Network.</div>

      <!-- Duplicate for smooth infinite scroll -->
      <div class="announcement-item"><span class="icon">🚀</span> <strong>Publication:</strong> Quantum–Edge Resource Scheduling accepted at IEEE CloudNet 2025.</div>
      <div class="announcement-item"><span class="icon">🧠</span> <strong>Symposium:</strong> “AI for Quantum Networks” — Tokyo, March 2026.</div>
      <div class="announcement-item"><span class="icon">🔬</span> <strong>Launch:</strong> QEdge 2.0 — Adaptive Hybrid Cloud Framework.</div>
      <div class="announcement-item"><span class="icon">🏆</span> <strong>Award:</strong> Recognized for Excellence in Edge-AI Research 2025.</div>
      <div class="announcement-item"><span class="icon">🌐</span> <strong>Collaboration:</strong> Joint Project with European Quantum Network.</div>
    </div>
  </div>
</div>


## About Me

<div class="profile-section">

  <div class="bio-card">
    <h2>👤 Bio</h2>
    <p>
      I am a researcher in distributed computing, edge-cloud integration, and hybrid quantum-classical systems.
      Passionate about IoT, smart manufacturing, and building next-generation computing frameworks.
    </p>
  </div>

  <div class="experience-card">
    <h2>💼 Experience</h2>
    <ul>
      <li><strong>Postdoctoral Researcher</strong> – Hybrid Quantum Cloud Lab (2024–Present)</li>
      <li><strong>Research Assistant</strong> – Smart IoT Systems Lab (2022–2024)</li>
      <li><strong>Intern</strong> – Edge Computing Research Group (2021–2022)</li>
    </ul>
  </div>

  <div class="research-card">
    <h2>🔬 Research Interests</h2>
    <p>
      Edge computing, distributed IoT systems, quantum cloud integration, hybrid AUV task scheduling,
      dynamic task offloading, and smart manufacturing infrastructures.
    </p>
  </div>

</div>

<style>
/* ===== Container ===== */
.profile-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
}

/* ===== Common Card Styles ===== */
.bio-card, .experience-card, .research-card {
  position: relative;
  padding: 2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bio-card:hover, .experience-card:hover, .research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.45);
}

/* ===== Neon Header ===== */
.bio-card h2, .experience-card h2, .research-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00f0ff, #007cf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 5px #00f0ff, 0 0 10px #007cf0;
}

/* ===== Text ===== */
.bio-card p, .research-card p {
  font-size: 1rem;
  line-height: 1.6;
}

.experience-card ul {
  list-style: none;
  padding: 0;
}

.experience-card li {
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.experience-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #00f0ff;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #00f0ff;
}

/* ===== Animated Background ===== */
.bio-card::before, .experience-card::before, .research-card::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: conic-gradient(from 0deg, #00f0ff, #007cf0, #00dfd8, #00f0ff);
  opacity: 0.15;
  z-index: 0;
  border-radius: 50%;
  animation: rotateBG 12s linear infinite;
}

@keyframes rotateBG {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ===== Position content above background ===== */
.bio-card > *, .experience-card > *, .research-card > * {
  position: relative;
  z-index: 1;
}

/* ===== Responsive ===== */
@media (max-width: 700px) {
  .profile-section {
    grid-template-columns: 1fr;
  }
}
</style>
