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
/* Personal academic page styling - clean and approachable */

/* Main container adjustments */
.page__content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

/* Simple intro section */
.intro-section {
  background: #f9fafb;
  padding: 35px 30px;
  border-radius: 8px;
  margin-bottom: 35px;
  border-left: 4px solid #4a90d9;
}

.intro-name {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
}

.intro-title {
  font-size: 1.1rem;
  color: #5a6c7d;
  margin-bottom: 15px;
  line-height: 1.5;
}

.intro-location {
  display: inline-block;
  color: #7a8b9c;
  font-size: 0.95rem;
  margin-top: 10px;
  padding: 6px 14px;
  background: #eef2f6;
  border-radius: 20px;
}

/* Research areas - simple cards */
.research-section {
  margin: 40px 0;
}

.section-heading {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.area-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.area-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.area-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.area-title {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 12px;
  font-weight: 600;
}

.area-desc {
  color: #5a6c7d;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.area-topics {
  list-style: none;
  padding: 0;
  margin: 0;
}

.area-topics li {
  padding: 5px 0;
  padding-left: 18px;
  position: relative;
  font-size: 0.88rem;
  color: #6a7c8d;
}

.area-topics li::before {
  content: "•";
  color: #4a90d9;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Info boxes */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.info-box {
  background: white;
  padding: 28px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.box-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.box-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 18px;
  font-weight: 600;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.box-content {
  color: #5a6c7d;
  line-height: 1.7;
  font-size: 0.93rem;
}

.box-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.box-content li {
  padding: 8px 0;
  padding-left: 22px;
  position: relative;
}

.box-content li::before {
  content: "→";
  color: #4a90d9;
  position: absolute;
  left: 0;
  font-size: 1rem;
}

.box-content strong {
  color: #2c3e50;
  font-weight: 600;
}

.box-content a {
  color: #4a90d9;
  text-decoration: none;
}

.box-content a:hover {
  text-decoration: underline;
}

/* Students notice */
.students-notice {
  background: #f0f7ff;
  border: 1px solid #d0e3f5;
  border-radius: 8px;
  padding: 28px;
  margin: 35px 0;
}

.students-notice h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 600;
}

.students-notice p {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.students-notice ul {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.students-notice li {
  padding: 6px 0;
  padding-left: 24px;
  position: relative;
  color: #5a6c7d;
  font-size: 0.92rem;
}

.students-notice li::before {
  content: "▸";
  color: #4a90d9;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.contact-btn {
  display: inline-block;
  background: #4a90d9;
  color: white;
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 15px;
  font-size: 0.95rem;
}

.contact-btn:hover {
  background: #3a7bc8;
  text-decoration: none;
}

/* Tabs section */
.tabs-wrapper {
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  margin: 40px 0;
  overflow: hidden;
}

.tabs-header {
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e5e5;
  flex-wrap: wrap;
}

.tab-button {
  flex: 1;
  min-width: 120px;
  padding: 15px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  color: #6a7c8d;
  transition: all 0.2s ease;
  border-bottom: 3px solid transparent;
}

.tab-button:hover {
  background: #f0f4f8;
  color: #2c3e50;
}

.tab-button.active {
  color: #4a90d9;
  border-bottom-color: #4a90d9;
  background: white;
}

.tab-content {
  padding: 30px;
  display: none;
}

.tab-content.active {
  display: block;
}

.tab-content h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.3rem;
  font-weight: 600;
}

.tab-content p {
  color: #5a6c7d;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.tab-content h4 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 12px;
  font-size: 1.05rem;
  font-weight: 600;
}

/* Timeline styling */
.timeline-list {
  position: relative;
  padding-left: 30px;
  margin: 20px 0;
}

.timeline-list::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  bottom: 0;
  width: 2px;
  background: #d0dce8;
}

.timeline-entry {
  position: relative;
  padding-bottom: 25px;
}

.timeline-entry::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4a90d9;
}

.timeline-entry:last-child {
  padding-bottom: 0;
}

.timeline-entry h4 {
  margin: 0 0 6px 0;
  color: #2c3e50;
  font-size: 1.05rem;
  font-weight: 600;
}

.timeline-date {
  color: #7a8b9c;
  font-size: 0.88rem;
  margin-bottom: 8px;
  display: inline-block;
  background: #f5f7fa;
  padding: 3px 10px;
  border-radius: 12px;
}

.timeline-entry p {
  color: #5a6c7d;
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Footer */
.page-footer {
  background: #f8f9fa;
  border-top: 1px solid #e5e5e5;
  padding: 30px;
  text-align: center;
  margin-top: 50px;
  border-radius: 8px;
}

.page-footer p {
  margin: 8px 0;
  color: #6a7c8d;
  font-size: 0.9rem;
}

.page-footer a {
  color: #4a90d9;
  text-decoration: none;
}

.page-footer a:hover {
  text-decoration: underline;
}

.footer-links {
  margin-top: 15px;
  font-size: 0.88rem;
}

.copyright {
  margin-top: 15px;
  font-size: 0.82rem;
  color: #9aaab8;
}

/* Responsive */
@media (max-width: 768px) {
  .intro-name {
    font-size: 1.8rem;
  }
  
  .research-areas {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .tabs-header {
    flex-direction: column;
  }
  
  .tab-button {
    border-bottom: 2px solid transparent;
    border-left: 3px solid transparent;
  }
  
  .tab-button.active {
    border-bottom-color: transparent;
    border-left-color: #4a90d9;
  }
  
  .tab-content {
    padding: 20px;
  }
}
</style>

<!-- === Intro Section === -->
<div class="intro-section">
  <h1 class="intro-name">Rahul Yadav, SMIEEE</h1>
  <p class="intro-title">Associate Professor | Quantum Cloud Computing & Distributed Systems Researcher</p>
  <div class="intro-location">
    📍 Harbin Engineering University, China
  </div>
</div>

<!-- === Research Areas === -->
<div class="research-section">
  <h2 class="section-heading">Research Focus Areas</h2>
  <div class="research-areas">
    
    <!-- Quantum Cloud Computing Card -->
    <div class="area-card">
      <div class="area-icon">⚛️</div>
      <h3 class="area-title">Quantum Cloud Computing</h3>
      <p class="area-desc">Integrating quantum computing principles with cloud infrastructure to solve complex computational problems.</p>
      <ul class="area-topics">
        <li>Quantum-Classical Hybrid Algorithms</li>
        <li>Quantum Resource Orchestration</li>
        <li>QoS-aware Quantum Task Scheduling</li>
        <li>Quantum Network Architecture</li>
      </ul>
    </div>
    
    <!-- Agentic Edge Computing Card -->
    <div class="area-card">
      <div class="area-icon">🤖</div>
      <h3 class="area-title">Agentic Edge Computing</h3>
      <p class="area-desc">Developing intelligent autonomous agents powered by LLMs for dynamic edge resource management.</p>
      <ul class="area-topics">
        <li>LLM-based Autonomous Agents</li>
        <li>Intelligent Task Offloading</li>
        <li>Multi-Agent Coordination at Edge</li>
        <li>Self-Optimizing Edge Networks</li>
      </ul>
    </div>
    
    <!-- Distributed Computing Card -->
    <div class="area-card">
      <div class="area-icon">🌐</div>
      <h3 class="area-title">Distributed Computing</h3>
      <p class="area-desc">Designing scalable and resilient distributed systems for next-generation computing infrastructures.</p>
      <ul class="area-topics">
        <li>Fog-Cloud Continuum</li>
        <li>Distributed Resource Management</li>
        <li>Energy-Efficient Computing</li>
        <li>Scalable System Architectures</li>
      </ul>
    </div>
    
    <!-- Digital Twins Card -->
    <div class="area-card">
      <div class="area-icon">🔄</div>
      <h3 class="area-title">Digital Twins</h3>
      <p class="area-desc">Creating virtual replicas of physical systems for real-time monitoring and predictive analytics.</p>
      <ul class="area-topics">
        <li>IoT-Enabled Digital Twins</li>
        <li>Real-Time Synchronization</li>
        <li>Predictive Maintenance Systems</li>
        <li>Smart City Digital Twins</li>
      </ul>
    </div>
    
  </div>
</div>

<!-- === Students Notice === -->
<div class="students-notice">
  <h3>🎓 Prospective PhD & Master's Students</h3>
  <p>I am actively seeking highly motivated PhD and Master's students to join the <strong>iQCloudLab</strong> research group. We offer opportunities to work on groundbreaking research in:</p>
  <ul>
    <li>Quantum Cloud & Edge Computing Architectures</li>
    <li>Agentic AI for Distributed Systems (LLM-based Scheduling)</li>
    <li>Digital Twin Technologies for Smart Infrastructure</li>
    <li>Next-Generation IoT and Edge Intelligence</li>
  </ul>
  <p>Our lab provides a collaborative international environment with opportunities for publications in top-tier venues and industry partnerships.</p>
  <a href="mailto:rahul@hrbeu.edu.cn?subject=Prospective Student Inquiry" class="contact-btn">Apply Now - Contact Me</a>
</div>

<!-- === Info Grid === -->
<div class="info-grid">
  
  <!-- Research Expertise Card -->
  <div class="info-box">
    <span class="box-icon">🔬</span>
    <h3 class="box-title">Research Expertise</h3>
    <div class="box-content">
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
  <div class="info-box">
    <span class="box-icon">🏆</span>
    <h3 class="box-title">Recent Achievements</h3>
    <div class="box-content">
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
  <div class="info-box">
    <span class="box-icon">📬</span>
    <h3 class="box-title">Get In Touch</h3>
    <div class="box-content">
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

<!-- === Tabs Section === -->
<div class="tabs-wrapper">
  <div class="tabs-header">
    <button class="tab-button active" onclick="openTab(event, 'bio')">👤 Biography</button>
    <button class="tab-button" onclick="openTab(event, 'research')">🔬 Research</button>
    <button class="tab-button" onclick="openTab(event, 'experience')">💼 Experience</button>
    <button class="tab-button" onclick="openTab(event, 'education')">🎓 Education</button>
  </div>
  
  <div id="bio" class="tab-content active">
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
  
  <div id="research" class="tab-content">
    <h3>Research Portfolio</h3>
    <p>My research spans four interconnected pillars that define the future of computing:</p>
    
    <h4>⚛️ Quantum Cloud Computing</h4>
    <p>Exploring the convergence of quantum computing and cloud infrastructures to enable unprecedented computational capabilities. Key focus areas include hybrid quantum-classical algorithms, quantum resource orchestration, and QoS-aware task scheduling for quantum networks.</p>
    
    <h4>🤖 Agentic Edge Computing</h4>
    <p>Pioneering autonomous intelligent agents powered by Large Language Models (LLMs) for dynamic edge resource management. This research enables self-optimizing edge networks, intelligent task offloading, and multi-agent coordination systems that adapt to changing environments in real-time.</p>
    
    <h4>🌐 Distributed Computing</h4>
    <p>Designing scalable, resilient, and energy-efficient distributed systems for fog-cloud continuums. Our work addresses fundamental challenges in resource management, load balancing, and system architecture for next-generation computing infrastructures.</p>
    
    <h4>🔄 Digital Twins</h4>
    <p>Creating high-fidelity virtual replicas of physical systems for real-time monitoring, predictive analytics, and simulation-driven decision making. Applications span smart city infrastructure, industrial IoT, and autonomous systems.</p>
  </div>
  
  <div id="experience" class="tab-content">
    <h3>Professional Experience</h3>
    <div class="timeline-list">
      <div class="timeline-entry">
        <h4>Associate Professor</h4>
        <div class="timeline-date">Harbin Engineering University | 2022 – Present</div>
        <p>Leading the iQCloudLab research group, supervising PhD and Master's students, teaching advanced courses in distributed systems and cloud computing, and conducting cutting-edge research in quantum cloud computing, agentic edge systems, and digital twins.</p>
      </div>
      <div class="timeline-entry">
        <h4>Postdoctoral Researcher</h4>
        <div class="timeline-date">Peng Cheng Laboratory | 2021 – 2022</div>
        <p>Conducted advanced research on next-generation networking architectures, edge computing systems, and intelligent resource management for large-scale distributed infrastructures.</p>
      </div>
    </div>
  </div>
  
  <div id="education" class="tab-content">
    <h3>Educational Background</h3>
    <div class="timeline-list">
      <div class="timeline-entry">
        <h4>Ph.D. in Computer Science</h4>
        <div class="timeline-date">Harbin Institute of Technology | 2020</div>
        <p>Dissertation focused on distributed computing architectures, resource optimization algorithms, and energy-efficient cloud-edge systems.</p>
      </div>
      <div class="timeline-entry">
        <h4>M.Sc. in Computer Science</h4>
        <div class="timeline-date">South Asian University | 2015</div>
        <p>Advanced studies in computer science fundamentals, distributed systems, and algorithm design with emphasis on cloud computing applications.</p>
      </div>
      <div class="timeline-entry">
        <h4>B.Sc. in Computer Application</h4>
        <div class="timeline-date">Kanpur University | 2011</div>
        <p>Foundation in computer applications, programming paradigms, software engineering, and computational mathematics.</p>
      </div>
    </div>
  </div>
</div>

<!-- === Footer === -->
<div class="page-footer">
  <p><strong>iQCloudLab - Intelligent Quantum Cloud Computing Laboratory</strong></p>
  <p>📍 Room 2123, 21B Building, Harbin Engineering University, Harbin, China</p>
  <p>✉️ <a href="mailto:rahul@hrbeu.edu.cn">rahul@hrbeu.edu.cn</a></p>
  <div class="footer-links">
    <a href="https://scholar.google.com/citations?hl=en&user=kvwUY_MAAAAJ" target="_blank">Google Scholar</a> • 
    <a href="https://orcid.org/my-orcid?orcid=0000-0001-7514-4517" target="_blank">ORCID</a> •
    <a href="https://www.ieee.org/" target="_blank">IEEE</a>
  </div>
  <p class="copyright">
    © 2024 Prof. Rahul Yadav, SMIEEE. All rights reserved. | Harbin Engineering University
  </p>
</div>

<script>
function openTab(evt, tabId) {
  // Hide all tab panels
  document.querySelectorAll(".tab-content").forEach(panel => {
    panel.classList.remove("active");
  });
  
  // Remove active class from all buttons
  document.querySelectorAll(".tab-button").forEach(button => {
    button.classList.remove("active");
  });
  
  // Show selected panel and activate button
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
</script>
