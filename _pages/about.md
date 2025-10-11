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


<style>
/* === Futuristic Profile Section === */
.profile-tabs {
  width: 140%;
  max-width: 1000px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(150, 200, 255, 0.4);
  box-shadow: 0 10px 35px rgba(150, 200, 255, 0.35);
  overflow: hidden;
  position: relative;
  animation: fadeInUp 1.2s ease;
}

/* === Glowing Animated Border === */
.profile-tabs::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 1px;
  background: linear-gradient(135deg, #5ee6ff, #3a95f2, #0078d7);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderShift 8s linear infinite;
}

@keyframes borderShift {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

/* === Tab Header === */
.tab-header {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(90deg, #5eb8ff, #3a95f2, #5ee6ff);
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.tab-header div {
  flex: 1;
  text-align: center;
  padding: 12px 0;
  transition: background 0.3s ease, color 0.3s ease;
}

.tab-header div:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* === Active Tab Indicator === */
.tab-header .active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  box-shadow: inset 0 -2px 0 #fff;
}

/* === Tab Content Area === */
.tab-content {
  padding: 24px 30px;
  color: #1a2a3a;
  font-size: 0.95rem;
  line-height: 1.6;
  animation: fadeIn 0.5s ease;
  background: rgba(255,255,255,0.6);
}

/* === Headings === */
.tab-content h3 {
  color: #005fa3;
  margin-top: 0;
  text-align: center;
  font-weight: 700;
}

/* === Lists === */
.tab-content ul {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.tab-content ul li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 0.6rem;
}

.tab-content ul li::before {
  content: "🔹";
  position: absolute;
  left: 0;
  color: #3a95f2;
}

/* === Animations === */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<!-- === FUTURISTIC PROFILE TABS === -->
<div class="profile-tabs">
  <div class="tab-header">
    <div class="tab-link active" onclick="openTab(event, 'bio')">👤 Bio</div>
    <div class="tab-link" onclick="openTab(event, 'exp')">💼 Experience</div>
    <div class="tab-link" onclick="openTab(event, 'edu')">🎓 Education</div>
    <div class="tab-link" onclick="openTab(event, 'research')">🔬 Research Interests</div>
  </div>

  <div class="tab-content" id="bio">
    <h3>About Me</h3>
    <p>
      Dr. <strong>Miao Zhang</strong> is a researcher in the intersection of 
      <strong>Quantum Computing</strong>, <strong>Edge–Cloud Systems</strong>, 
      and <strong>AI-driven IoT Infrastructure</strong>.
      Her research focuses on building scalable and intelligent resource 
      scheduling frameworks for next-generation distributed networks.
    </p>
  </div>

  <div class="tab-content" id="exp" style="display:none;">
    <h3>Professional Experience</h3>
    <ul>
      <li><strong>Lead Researcher</strong> – iQCloudLab, 2024–Present</li>
      <li><strong>Research Associate</strong> – Smart Edge Computing Lab, 2021–2024</li>
      <li><strong>Visiting Scholar</strong> – Quantum Systems Network, Tokyo, 2022</li>
    </ul>
  </div>

  <div class="tab-content" id="edu" style="display:none;">
    <h3>Education</h3>
    <ul>
      <li>Ph.D. in Computer Science – Global Institute of Technology, 2023</li>
      <li>M.Sc. in Cloud & Edge Systems – University of Technology, 2020</li>
      <li>B.Sc. in Information Engineering – Tech University, 2018</li>
    </ul>
  </div>

  <div class="tab-content" id="research" style="display:none;">
    <h3>Research Interests</h3>
    <ul>
      <li>Quantum–Edge Hybrid Computing</li>
      <li>Agentic LLM-based Scheduling</li>
      <li>AI-driven IoT Systems</li>
      <li>Fog–Cloud Resource Optimization</li>
      <li>Next-Generation Distributed Systems</li>
    </ul>
  </div>
</div>

<script>
function openTab(evt, tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}
</script>
