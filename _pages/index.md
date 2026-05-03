---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /index.html
---

{% include base_path %}

<style>
/* === Modern Academic Home Page Styles === */

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #0f2942 0%, #1a3a5c 50%, #2d5a87 100%);
  color: white;
  padding: 80px 40px;
  border-radius: 16px;
  margin: 30px 20px 50px 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
  opacity: 0.6;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero-name {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.hero-title {
  font-size: 1.3rem;
  color: rgba(255,255,255,0.95);
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.6;
}

.hero-affiliation {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 1.05rem;
  color: rgba(255,255,255,0.95);
  border: 1px solid rgba(255,255,255,0.2);
  margin-top: 15px;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(255,255,255,0.12);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.2);
}

/* Quick Links Grid */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto 60px auto;
  padding: 0 20px;
}

.quick-link-card {
  background: white;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
}

.quick-link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.quick-link-card:hover::before {
  transform: scaleX(1);
}

.quick-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.quick-link-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 15px;
}

.quick-link-title {
  font-size: 1.25rem;
  color: #1e3a5f;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.quick-link-desc {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Research Pillars Preview */
.research-preview {
  max-width: 1100px;
  margin: 0 auto 60px auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #1e3a5f;
  margin-bottom: 15px;
  font-weight: 700;
}

.section-header p {
  color: #64748b;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.pillar-card {
  background: white;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pillar-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.pillar-card.quantum::after { background: #3b82f6; }
.pillar-card.edge::after { background: #10b981; }
.pillar-card.distributed::after { background: #f59e0b; }
.pillar-card.twins::after { background: #8b5cf6; }

.pillar-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.pillar-icon {
  font-size: 2.8rem;
  display: block;
  margin-bottom: 18px;
}

.pillar-title {
  font-size: 1.2rem;
  color: #1e3a5f;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.pillar-desc {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 15px 0;
}

.pillar-topics {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pillar-topics li {
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.88rem;
  color: #475569;
}

.pillar-topics li::before {
  content: "•";
  color: #3b82f6;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #f0f7ff 0%, #e8f5e9 100%);
  border-radius: 16px;
  padding: 50px 40px;
  max-width: 1100px;
  margin: 0 auto 60px auto;
  text-align: center;
  border: 1px solid #cbd5e1;
}

.cta-section h3 {
  font-size: 1.8rem;
  color: #1e3a5f;
  margin-bottom: 15px;
  font-weight: 700;
}

.cta-section p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 25px auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: white;
  color: #1e3a5f;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid #3b82f6;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 50px 25px;
    margin: 20px 15px 40px 15px;
  }
  
  .hero-name {
    font-size: 2.2rem;
  }
  
  .hero-title {
    font-size: 1.1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-name">Rahul Yadav, SMIEEE</h1>
    <p class="hero-title">Associate Professor specializing in Quantum Cloud Computing, Agentic Edge Intelligence, Distributed Systems, and Digital Twins</p>
    <div class="hero-affiliation">
      📍 Harbin Engineering University, China
    </div>
    <div class="hero-badges">
      <span class="badge">🎓 Principal Investigator, iQCloudLab</span>
      <span class="badge">🏆 Top 2% Scientists Worldwide</span>
      <span class="badge">✨ Best Teacher Award</span>
    </div>
  </div>
</div>

<!-- Quick Links -->
<div class="quick-links">
  <a href="/about-page/" class="quick-link-card">
    <span class="quick-link-icon">👤</span>
    <h3 class="quick-link-title">About Me</h3>
    <p class="quick-link-desc">Learn about my academic journey, research philosophy, and mentorship approach.</p>
  </a>
  
  <a href="/research-page/" class="quick-link-card">
    <span class="quick-link-icon">🔬</span>
    <h3 class="quick-link-title">Research</h3>
    <p class="quick-link-desc">Explore our four pillars of research advancing next-generation computing.</p>
  </a>
  
  <a href="/publications/" class="quick-link-card">
    <span class="quick-link-icon">📚</span>
    <h3 class="quick-link-title">Publications</h3>
    <p class="quick-link-desc">Browse peer-reviewed papers, conference proceedings, and journal articles.</p>
  </a>
  
  <a href="/join-lab/" class="quick-link-card">
    <span class="quick-link-icon">🎓</span>
    <h3 class="quick-link-title">Join the Lab</h3>
    <p class="quick-link-desc">Prospective PhD and Master's students: discover opportunities at iQCloudLab.</p>
  </a>
</div>

<!-- Research Pillars Preview -->
<div class="research-preview">
  <div class="section-header">
    <h2>Research Focus Areas</h2>
    <p>Our lab pioneers innovative solutions at the intersection of quantum computing, edge intelligence, and distributed systems to address tomorrow's computational challenges.</p>
  </div>
  
  <div class="pillars-grid">
    <div class="pillar-card quantum">
      <span class="pillar-icon">⚛️</span>
      <h3 class="pillar-title">Quantum Cloud Computing</h3>
      <p class="pillar-desc">Integrating quantum computing principles with cloud infrastructure for unprecedented computational capabilities.</p>
      <ul class="pillar-topics">
        <li>Hybrid Quantum-Classical Algorithms</li>
        <li>Quantum Resource Orchestration</li>
        <li>QoS-aware Task Scheduling</li>
      </ul>
    </div>
    
    <div class="pillar-card edge">
      <span class="pillar-icon">🤖</span>
      <h3 class="pillar-title">Agentic Edge Computing</h3>
      <p class="pillar-desc">Developing LLM-powered autonomous agents for intelligent edge resource management.</p>
      <ul class="pillar-topics">
        <li>LLM-based Autonomous Agents</li>
        <li>Intelligent Task Offloading</li>
        <li>Multi-Agent Coordination</li>
      </ul>
    </div>
    
    <div class="pillar-card distributed">
      <span class="pillar-icon">🌐</span>
      <h3 class="pillar-title">Distributed Computing</h3>
      <p class="pillar-desc">Designing scalable and resilient systems for next-generation computing infrastructures.</p>
      <ul class="pillar-topics">
        <li>Fog-Cloud Continuum</li>
        <li>Energy-Efficient Architectures</li>
        <li>Distributed Resource Management</li>
      </ul>
    </div>
    
    <div class="pillar-card twins">
      <span class="pillar-icon">🔄</span>
      <h3 class="pillar-title">Digital Twins</h3>
      <p class="pillar-desc">Creating virtual replicas for real-time monitoring and predictive analytics.</p>
      <ul class="pillar-topics">
        <li>IoT-Enabled Digital Twins</li>
        <li>Real-Time Synchronization</li>
        <li>Predictive Maintenance</li>
      </ul>
    </div>
  </div>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <h3>Interested in Collaborating?</h3>
  <p>Whether you're a prospective student, researcher, or industry partner, we welcome opportunities for collaboration and knowledge exchange.</p>
  <div class="cta-buttons">
    <a href="/join-lab/" class="btn-primary">
      🎓 Join Our Team
    </a>
    <a href="/contact/" class="btn-secondary">
      📬 Get In Touch
    </a>
  </div>
</div>
