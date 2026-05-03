---
permalink: /about-page/
title: "About"
excerpt: ""
author_profile: true
---

<style>
/* About Page Styles */
.about-intro {
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  border: 1px solid #e2e8f0;
}

.about-intro h2 {
  color: #1e3a5f;
  font-size: 2rem;
  margin-bottom: 25px;
  font-weight: 700;
}

.about-intro p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.timeline-section {
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  border: 1px solid #e2e8f0;
}

.timeline-section h3 {
  color: #1e3a5f;
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 700;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 10px;
  bottom: 0;
  width: 2px;
  background: #cbd5e1;
}

.timeline-item {
  position: relative;
  padding-bottom: 35px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -25px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3b82f6;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #3b82f6;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-title {
  font-size: 1.15rem;
  color: #1e3a5f;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.timeline-meta {
  display: inline-block;
  background: #f1f5f9;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 12px;
  font-weight: 500;
}

.timeline-desc {
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0;
}

.philosophy-section {
  background: linear-gradient(135deg, #f0f7ff 0%, #e8f5e9 100%);
  border-radius: 16px;
  padding: 50px 40px;
  border: 1px solid #cbd5e1;
}

.philosophy-section h3 {
  color: #1e3a5f;
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.philosophy-section p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-intro, .timeline-section, .philosophy-section {
    padding: 35px 25px;
  }
  
  .about-intro h2 {
    font-size: 1.6rem;
  }
  
  .timeline {
    padding-left: 30px;
  }
  
  .timeline::before {
    left: 10px;
  }
  
  .timeline-item::before {
    left: -20px;
  }
}
</style>

<div class="about-intro">
  <h2>About Me</h2>
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

<div class="timeline-section">
  <h3>Academic Journey</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4 class="timeline-title">Associate Professor</h4>
      <div class="timeline-meta">Harbin Engineering University | 2022 – Present</div>
      <p class="timeline-desc">Leading the iQCloudLab research group, supervising PhD and Master's students, teaching advanced courses in distributed systems and cloud computing, and conducting cutting-edge research in quantum cloud computing, agentic edge systems, and digital twins.</p>
    </div>
    
    <div class="timeline-item">
      <h4 class="timeline-title">Postdoctoral Researcher</h4>
      <div class="timeline-meta">Peng Cheng Laboratory | 2021 – 2022</div>
      <p class="timeline-desc">Conducted advanced research on next-generation networking architectures, edge computing systems, and intelligent resource management for large-scale distributed infrastructures.</p>
    </div>
    
    <div class="timeline-item">
      <h4 class="timeline-title">Ph.D. in Computer Science</h4>
      <div class="timeline-meta">Harbin Institute of Technology | 2020</div>
      <p class="timeline-desc">Dissertation focused on distributed computing architectures, resource optimization algorithms, and energy-efficient cloud-edge systems.</p>
    </div>
    
    <div class="timeline-item">
      <h4 class="timeline-title">M.Sc. in Computer Science</h4>
      <div class="timeline-meta">South Asian University | 2015</div>
      <p class="timeline-desc">Advanced studies in computer science fundamentals, distributed systems, and algorithm design with emphasis on cloud computing applications.</p>
    </div>
    
    <div class="timeline-item">
      <h4 class="timeline-title">B.Sc. in Computer Application</h4>
      <div class="timeline-meta">Kanpur University | 2011</div>
      <p class="timeline-desc">Foundation in computer applications, programming paradigms, software engineering, and computational mathematics.</p>
    </div>
  </div>
</div>

<div class="philosophy-section">
  <h3>Teaching & Mentorship Philosophy</h3>
  <p>
    My approach to teaching and mentorship is grounded in the belief that every student has unique potential that can be unlocked through personalized guidance, hands-on research experience, and exposure to real-world challenges. I strive to create an inclusive, supportive environment where curiosity is encouraged and failure is viewed as a learning opportunity.
  </p>
  <p>
    In the classroom, I emphasize active learning through case studies, collaborative projects, and connections to current research. My goal is not only to transmit knowledge but to develop critical thinking skills and foster a lifelong passion for learning.
  </p>
  <p>
    As a research supervisor, I believe in balancing structure with autonomy—providing clear direction while empowering students to take ownership of their projects. Regular one-on-one meetings, constructive feedback, and encouragement to present at conferences are integral to my mentorship approach. Many of my former students have gone on to successful careers in academia and industry, publishing in top-tier venues and contributing to groundbreaking technologies.
  </p>
</div>
