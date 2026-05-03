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
/* === Advanced Academic Research Profile Styles === */
/* Specialized for Quantum Cloud, Agentic Edge, Distributed Computing & Digital Twins */

/* Root Variables for Academic Theming */
:root {
  --quantum-primary: #1e3a5f;
  --quantum-secondary: #2d5a87;
  --quantum-accent: #3b82f6;
  --edge-primary: #0f5132;
  --edge-accent: #198754;
  --digital-twin: #6f42c1;
  --distributed: #d63384;
  --text-dark: #1a1a2e;
  --text-medium: #4a4a5a;
  --text-light: #6c757d;
  --bg-light: #f8f9fa;
  --bg-white: #ffffff;
  --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --border-color: #dee2e6;
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-xl: 0 12px 40px rgba(0,0,0,0.15);
}

/* === Hero Section with Research Visualization === */
.hero-section {
  background: linear-gradient(135deg, var(--quantum-primary) 0%, var(--quantum-secondary) 50%, #4a6fa5 100%);
  color: white;
  padding: 70px 50px;
  border-radius: 16px;
  margin-bottom: 45px;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(111, 66, 193, 0.3) 0%, transparent 50%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.6;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: -1px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.35rem;
  opacity: 0.98;
  margin-bottom: 15px;
  font-weight: 400;
  line-height: 1.5;
}

.hero-research-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.research-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.research-badge:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  opacity: 0.95;
  font-size: 1rem;
  margin-top: 20px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

/* === Research Focus Areas Section === */
.research-focus-section {
  margin: 50px 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--quantum-primary);
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--quantum-accent), var(--digital-twin));
  border-radius: 2px;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-bottom: 40px;
}

.research-card {
  background: var(--bg-white);
  border-radius: 16px;
  padding: 35px 30px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.research-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--quantum-accent), var(--edge-accent));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.research-card:hover::before {
  transform: scaleX(1);
}

.research-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--quantum-accent);
}

.research-card.quantum::before {
  background: linear-gradient(90deg, var(--quantum-accent), #8b5cf6);
}

.research-card.edge::before {
  background: linear-gradient(90deg, var(--edge-accent), #10b981);
}

.research-card.distributed::before {
  background: linear-gradient(90deg, var(--distributed), #ec4899);
}

.research-card.digitaltwin::before {
  background: linear-gradient(90deg, var(--digital-twin), #a855f7);
}

.research-card-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: block;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--bg-light);
}

.research-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--quantum-primary);
  margin-bottom: 15px;
  line-height: 1.3;
}

.research-card-description {
  color: var(--text-medium);
  line-height: 1.8;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.research-card-topics {
  list-style: none;
  padding: 0;
  margin: 0;
}

.research-card-topics li {
  padding: 6px 0;
  padding-left: 22px;
  position: relative;
  font-size: 0.9rem;
  color: var(--text-medium);
}

.research-card-topics li::before {
  content: "▸";
  color: var(--quantum-accent);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1rem;
}

/* === Info Cards Grid === */
.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
  margin: 50px 0;
}

.info-card {
  background: var(--bg-white);
  border-radius: 16px;
  padding: 35px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: all 0.4s ease;
}

.info-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: var(--quantum-accent);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: block;
}

.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--quantum-primary);
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--border-color);
}

.card-content {
  color: var(--text-medium);
  line-height: 1.8;
  font-size: 0.95rem;
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-content li {
  padding: 10px 0;
  padding-left: 26px;
  position: relative;
}

.card-content li::before {
  content: "✓";
  color: var(--edge-accent);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.1rem;
}

.card-content strong {
  color: var(--quantum-primary);
  font-weight: 700;
}

.card-content a {
  color: var(--quantum-accent);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.card-content a:hover {
  color: var(--digital-twin);
  text-decoration: underline;
}

/* === Hiring Notice Card === */
.hiring-card {
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%);
  border-left: 5px solid var(--quantum-accent);
  border-radius: 16px;
  padding: 30px;
  margin: 40px 0;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.hiring-card::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.hiring-card h3 {
  color: var(--quantum-primary);
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.35rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hiring-card p {
  color: var(--text-medium);
  line-height: 1.8;
  margin-bottom: 15px;
}

.hiring-card ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.hiring-card li {
  padding: 8px 0;
  padding-left: 28px;
  position: relative;
  color: var(--text-medium);
  font-size: 0.95rem;
}

.hiring-card li::before {
  content: "🔹";
  position: absolute;
  left: 0;
  font-size: 1rem;
}

.hiring-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--quantum-accent) 0%, var(--digital-twin) 100%);
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 18px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.hiring-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

/* === Tab Navigation === */
.tab-container {
  background: var(--bg-white);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  margin: 50px 0;
  overflow: hidden;
}

.tab-nav {
  display: flex;
  background: linear-gradient(to bottom, var(--bg-light), #fff);
  border-bottom: 2px solid var(--border-color);
  overflow-x: auto;
}

.tab-nav button {
  flex: 1;
  min-width: 140px;
  padding: 18px 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-medium);
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  position: relative;
}

.tab-nav button:hover {
  background: rgba(59, 130, 246, 0.08);
  color: var(--quantum-primary);
}

.tab-nav button.active {
  color: var(--quantum-primary);
  border-bottom-color: var(--quantum-accent);
  background: var(--bg-white);
}

.tab-nav button.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--quantum-accent), var(--digital-twin));
}

.tab-panel {
  padding: 40px;
  display: none;
  animation: fadeIn 0.5s ease;
}

.tab-panel.active {
  display: block;
}

.tab-panel h3 {
  color: var(--quantum-primary);
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 1.5rem;
  font-weight: 700;
}

.tab-panel p {
  color: var(--text-medium);
  line-height: 1.9;
  margin-bottom: 18px;
  font-size: 1rem;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(15px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* === Timeline for Experience/Education === */
.timeline {
  position: relative;
  padding-left: 35px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--quantum-accent), var(--digital-twin));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 30px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -35px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-white);
  border: 3px solid var(--quantum-accent);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  background: var(--quantum-accent);
  transform: scale(1.2);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item h4 {
  margin: 0 0 8px 0;
  color: var(--quantum-primary);
  font-size: 1.15rem;
  font-weight: 700;
}

.timeline-item .timeline-date {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-weight: 500;
  display: inline-block;
  background: var(--bg-light);
  padding: 4px 12px;
  border-radius: 20px;
}

.timeline-item p {
  color: var(--text-medium);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* === Lab Section === */
.lab-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 16px;
  padding: 40px;
  margin: 50px 0;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.lab-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.lab-logo {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.lab-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--quantum-primary);
  margin: 0;
}

.lab-subtitle {
  color: var(--text-light);
  font-size: 1rem;
  margin-top: 5px;
}

.lab-description {
  color: var(--text-medium);
  line-height: 1.8;
  margin-bottom: 20px;
}

/* === Footer === */
.profile-footer {
  background: linear-gradient(135deg, var(--bg-light) 0%, #e9ecef 100%);
  border-top: 2px solid var(--border-color);
  padding: 40px;
  text-align: center;
  margin-top: 70px;
  border-radius: 16px;
}

.profile-footer p {
  margin: 10px 0;
  color: var(--text-medium);
  font-size: 0.95rem;
}

.profile-footer a {
  color: var(--quantum-accent);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.profile-footer a:hover {
  color: var(--digital-twin);
  text-decoration: underline;
}

.footer-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--quantum-accent), var(--digital-twin));
  margin: 20px auto;
  border-radius: 2px;
}

/* === Responsive Design === */
@media (max-width: 768px) {
  .hero-section {
    padding: 50px 25px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-research-areas {
    flex-direction: column;
  }
  
  .research-grid {
    grid-template-columns: 1fr;
  }
  
  .info-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .tab-nav {
    flex-wrap: nowrap;
  }
  
  .tab-nav button {
    min-width: 120px;
    padding: 14px 18px;
    font-size: 0.9rem;
  }
  
  .tab-panel {
    padding: 25px;
  }
  
  .lab-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>

<!-- === Hero Section === -->
<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Rahul Yadav, SMIEEE</h1>
    <p class="hero-subtitle">Associate Professor | Quantum Cloud Computing & Distributed Systems Researcher</p>
    <div class="hero-research-areas">
      <span class="research-badge">⚛️ Quantum Cloud Computing</span>
      <span class="research-badge">🤖 Agentic Edge Computing</span>
      <span class="research-badge">🌐 Distributed Computing</span>
      <span class="research-badge">🔄 Digital Twins</span>
    </div>
    <div class="hero-location">
      <span>📍</span>
      <span>Harbin Engineering University, China</span>
    </div>
  </div>
</div>

<!-- === Research Focus Areas === -->
<div class="research-focus-section">
  <h2 class="section-title">Research Focus Areas</h2>
  <div class="research-grid">
    
    <!-- Quantum Cloud Computing Card -->
    <div class="research-card quantum">
      <div class="research-card-icon">⚛️</div>
      <h3 class="research-card-title">Quantum Cloud Computing</h3>
      <p class="research-card-description">Pioneering the integration of quantum computing principles with cloud infrastructure to solve complex computational problems.</p>
      <ul class="research-card-topics">
        <li>Quantum-Classical Hybrid Algorithms</li>
        <li>Quantum Resource Orchestration</li>
        <li>QoS-aware Quantum Task Scheduling</li>
        <li>Quantum Network Architecture</li>
      </ul>
    </div>
    
    <!-- Agentic Edge Computing Card -->
    <div class="research-card edge">
      <div class="research-card-icon">🤖</div>
      <h3 class="research-card-title">Agentic Edge Computing</h3>
      <p class="research-card-description">Developing intelligent autonomous agents powered by LLMs for dynamic edge resource management and decision-making.</p>
      <ul class="research-card-topics">
        <li>LLM-based Autonomous Agents</li>
        <li>Intelligent Task Offloading</li>
        <li>Multi-Agent Coordination at Edge</li>
        <li>Self-Optimizing Edge Networks</li>
      </ul>
    </div>
    
    <!-- Distributed Computing Card -->
    <div class="research-card distributed">
      <div class="research-card-icon">🌐</div>
      <h3 class="research-card-title">Distributed Computing</h3>
      <p class="research-card-description">Designing scalable and resilient distributed systems for next-generation computing infrastructures.</p>
      <ul class="research-card-topics">
        <li>Fog-Cloud Continuum</li>
        <li>Distributed Resource Management</li>
        <li>Energy-Efficient Computing</li>
        <li>Scalable System Architectures</li>
      </ul>
    </div>
    
    <!-- Digital Twins Card -->
    <div class="research-card digitaltwin">
      <div class="research-card-icon">🔄</div>
      <h3 class="research-card-title">Digital Twins</h3>
      <p class="research-card-description">Creating virtual replicas of physical systems for real-time monitoring, simulation, and predictive analytics.</p>
      <ul class="research-card-topics">
        <li>IoT-Enabled Digital Twins</li>
        <li>Real-Time Synchronization</li>
        <li>Predictive Maintenance Systems</li>
        <li>Smart City Digital Twins</li>
      </ul>
    </div>
    
  </div>
</div>

<!-- === Hiring Notice === -->
<div class="hiring-card">
  <h3>🎓 Prospective PhD & Master's Students</h3>
  <p>I am actively seeking highly motivated PhD and Master's students to join the <strong>iQCloudLab</strong> research group. We offer opportunities to work on groundbreaking research in:</p>
  <ul>
    <li>Quantum Cloud & Edge Computing Architectures</li>
    <li>Agentic AI for Distributed Systems (LLM-based Scheduling)</li>
    <li>Digital Twin Technologies for Smart Infrastructure</li>
    <li>Next-Generation IoT and Edge Intelligence</li>
  </ul>
  <p>Our lab provides a collaborative international environment with opportunities for publications in top-tier venues and industry partnerships.</p>
  <a href="mailto:rahul@hrbeu.edu.cn?subject=Prospective Student Inquiry" class="hiring-btn">Apply Now - Contact Me</a>
</div>

<!-- === Main Content Grid === -->
<div class="info-cards-grid">
  
  <!-- Research Impact Card -->
  <div class="info-card">
    <span class="card-icon">🔬</span>
    <h3 class="card-title">Research Expertise</h3>
    <div class="card-content">
      <ul>
        <li>Quantum–Edge Hybrid Computing Systems</li>
        <li>Agentic LLM-based Resource Scheduling</li>
        <li>Distributed Computing Architectures</li>
        <li>Digital Twin Frameworks</li>
        <li>AI-driven IoT & Edge Intelligence</li>
        <li>Fog–Cloud Resource Optimization</li>
        <li>Smart City Infrastructure Systems</li>
      </ul>
    </div>
  </div>
  
  <!-- Recent Achievements Card -->
  <div class="info-card">
    <span class="card-icon">🏆</span>
    <h3 class="card-title">Recent Achievements</h3>
    <div class="card-content">
      <ul>
        <li><strong>Recognition:</strong> Ranked in Top 2% Worldwide Scientists (Stanford List)</li>
        <li><strong>Excellence:</strong> Best Teacher Award for Outstanding Pedagogy</li>
        <li><strong>Publication:</strong> Federated Deep Learning for Malware Detection in Edge-IoMT</li>
        <li><strong>Publication:</strong> Intelligent Data Offloading for Smart City Services</li>
        <li><strong>Collaboration:</strong> International Joint Project on Quantum Cloud Computing</li>
        <li><strong>Leadership:</strong> Senior Member of IEEE (SMIEEE)</li>
      </ul>
    </div>
  </div>
  
  <!-- Contact & Links Card -->
  <div class="info-card">
    <span class="card-icon">📬</span>
    <h3 class="card-title">Get In Touch</h3>
    <div class="card-content">
      <p><strong>📧 Email:</strong><br><a href="mailto:rahul@hrbeu.edu.cn">rahul@hrbeu.edu.cn</a></p>
      <p><strong>🏢 Office:</strong><br>Room 2123, 21B Building<br>Harbin Engineering University<br>Harbin, China</p>
      <p><strong>📚 Academic Profiles:</strong><br>
        <a href="https://scholar.google.com/citations?hl=en&user=kvwUY_MAAAAJ" target="_blank">Google Scholar</a> • 
        <a href="https://orcid.org/my-orcid?orcid=0000-0001-7514-4517" target="_blank">ORCID</a> •
        <a href="https://www.ieee.org/" target="_blank">IEEE</a>
      </p>
    </div>
  </div>
  
</div>

<!-- === Detailed Information Tabs === -->
<div class="tab-container">
  <div class="tab-nav">
    <button class="active" onclick="openTab(event, 'bio')">👤 Biography</button>
    <button onclick="openTab(event, 'research')">🔬 Research</button>
    <button onclick="openTab(event, 'experience')">💼 Experience</button>
    <button onclick="openTab(event, 'education')">🎓 Education</button>
  </div>
  
  <div id="bio" class="tab-panel active">
    <h3>About Me</h3>
    <p>
      I am an Associate Professor at Harbin Engineering University, where I lead the <strong>iQCloudLab</strong> research group focused on next-generation intelligent distributed systems. My research bridges the physical and digital worlds through innovative approaches in Quantum Cloud Computing, Agentic Edge Computing, Distributed Systems, and Digital Twin technologies.
    </p>
    <p>
      With a strong foundation in computer science and extensive research experience, I am dedicated to advancing the state-of-the-art in computational paradigms that will power tomorrow's technologies—from smart cities and autonomous vehicles to quantum-enhanced cloud infrastructures. My work emphasizes both theoretical contributions and practical implementations that address real-world challenges in resource optimization, energy efficiency, and system scalability.
    </p>
    <p>
      As a Senior Member of IEEE (SMIEEE), I actively collaborate with researchers worldwide and supervise graduate students pursuing cutting-edge research. My lab offers a dynamic, international environment where students engage in high-impact research with opportunities for publications in premier venues and industry partnerships.
    </p>
  </div>
  
  <div id="research" class="tab-panel">
    <h3>Research Portfolio</h3>
    <p>My research spans four interconnected pillars that define the future of computing:</p>
    
    <h4 style="color: var(--quantum-primary); margin-top: 25px;">⚛️ Quantum Cloud Computing</h4>
    <p>Exploring the convergence of quantum computing and cloud infrastructures to enable unprecedented computational capabilities. Key focus areas include hybrid quantum-classical algorithms, quantum resource orchestration, and QoS-aware task scheduling for quantum networks.</p>
    
    <h4 style="color: var(--edge-accent); margin-top: 25px;">🤖 Agentic Edge Computing</h4>
    <p>Pioneering autonomous intelligent agents powered by Large Language Models (LLMs) for dynamic edge resource management. This research enables self-optimizing edge networks, intelligent task offloading, and multi-agent coordination systems that adapt to changing environments in real-time.</p>
    
    <h4 style="color: var(--distributed); margin-top: 25px;">🌐 Distributed Computing</h4>
    <p>Designing scalable, resilient, and energy-efficient distributed systems for fog-cloud continuums. Our work addresses fundamental challenges in resource management, load balancing, and system architecture for next-generation computing infrastructures.</p>
    
    <h4 style="color: var(--digital-twin); margin-top: 25px;">🔄 Digital Twins</h4>
    <p>Creating high-fidelity virtual replicas of physical systems for real-time monitoring, predictive analytics, and simulation-driven decision making. Applications span smart city infrastructure, industrial IoT, and autonomous systems.</p>
  </div>
  
  <div id="experience" class="tab-panel">
    <h3>Professional Experience</h3>
    <div class="timeline">
      <div class="timeline-item">
        <h4>Associate Professor</h4>
        <div class="timeline-date">Harbin Engineering University | 2022 – Present</div>
        <p>Leading the iQCloudLab research group, supervising PhD and Master's students, teaching advanced courses in distributed systems and cloud computing, and conducting cutting-edge research in quantum cloud computing, agentic edge systems, and digital twins.</p>
      </div>
      <div class="timeline-item">
        <h4>Postdoctoral Researcher</h4>
        <div class="timeline-date">Peng Cheng Laboratory | 2021 – 2022</div>
        <p>Conducted advanced research on next-generation networking architectures, edge computing systems, and intelligent resource management for large-scale distributed infrastructures.</p>
      </div>
    </div>
  </div>
  
  <div id="education" class="tab-panel">
    <h3>Educational Background</h3>
    <div class="timeline">
      <div class="timeline-item">
        <h4>Ph.D. in Computer Science</h4>
        <div class="timeline-date">Harbin Institute of Technology | 2020</div>
        <p>Dissertation focused on distributed computing architectures, resource optimization algorithms, and energy-efficient cloud-edge systems.</p>
      </div>
      <div class="timeline-item">
        <h4>M.Sc. in Computer Science</h4>
        <div class="timeline-date">South Asian University | 2015</div>
        <p>Advanced studies in computer science fundamentals, distributed systems, and algorithm design with emphasis on cloud computing applications.</p>
      </div>
      <div class="timeline-item">
        <h4>B.Sc. in Computer Application</h4>
        <div class="timeline-date">Kanpur University | 2011</div>
        <p>Foundation in computer applications, programming paradigms, software engineering, and computational mathematics.</p>
      </div>
    </div>
  </div>
</div>

<!-- === Footer === -->
<div class="profile-footer">
  <div class="footer-divider"></div>
  <p><strong>iQCloudLab - Intelligent Quantum Cloud Computing Laboratory</strong></p>
  <p>📍 Room 2123, 21B Building, Harbin Engineering University, Harbin, China</p>
  <p>✉️ <a href="mailto:rahul@hrbeu.edu.cn">rahul@hrbeu.edu.cn</a></p>
  <p style="margin-top: 25px; font-size: 0.9rem;">
    <a href="https://scholar.google.com/citations?hl=en&user=kvwUY_MAAAAJ" target="_blank">Google Scholar</a> • 
    <a href="https://orcid.org/my-orcid?orcid=0000-0001-7514-4517" target="_blank">ORCID</a> •
    <a href="https://www.ieee.org/" target="_blank">IEEE</a>
  </p>
  <p style="margin-top: 20px; font-size: 0.85rem; color: var(--text-light);">
    © 2024 Prof. Rahul Yadav, SMIEEE. All rights reserved. | Harbin Engineering University
  </p>
</div>

<script>
function openTab(evt, tabId) {
  // Hide all tab panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  
  // Remove active class from all buttons
  document.querySelectorAll(".tab-nav button").forEach(button => {
    button.classList.remove("active");
  });
  
  // Show selected panel and activate button
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
</script>
