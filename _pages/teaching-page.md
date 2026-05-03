---
permalink: /teaching-page/
title: "Teaching"
excerpt: ""
author_profile: true
---

<style>
/* Teaching Page Styles */
.teaching-intro {
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}

.teaching-intro h2 {
  color: #1e3a5f;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.teaching-intro p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.8;
}

.courses-section {
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}

.courses-section h3 {
  color: #1e3a5f;
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 700;
}

.course-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 25px;
  border-left: 5px solid #3b82f6;
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 20px;
  flex-wrap: wrap;
}

.course-title {
  font-size: 1.25rem;
  color: #1e3a5f;
  font-weight: 700;
  margin: 0;
}

.course-code {
  display: inline-block;
  background: #e2e8f0;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

.course-desc {
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 15px;
}

.course-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.topic-tag {
  background: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #3b82f6;
  border: 1px solid #bfdbfe;
  font-weight: 500;
}

.award-section {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  border: 2px solid #fcd34d;
}

.award-section h3 {
  color: #92400e;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.award-section p {
  color: #78350f;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .teaching-intro, .courses-section {
    padding: 35px 25px;
  }
  
  .course-header {
    flex-direction: column;
  }
  
  .award-section {
    padding: 30px 25px;
  }
}
</style>

<div class="teaching-intro">
  <h2>Teaching Philosophy</h2>
  <p>
    My teaching philosophy centers on active learning, real-world application, and fostering critical thinking. I believe that students learn best when they are engaged in solving authentic problems, collaborating with peers, and connecting theoretical concepts to practical implementations. In my courses, I emphasize hands-on projects, case studies from current research, and opportunities for students to explore topics that align with their interests and career goals.
  </p>
</div>

<div class="award-section">
  <h3>🏆 Best Teacher Award</h3>
  <p>
    I am honored to have received the Best Teacher Award for Outstanding Pedagogy, recognizing my commitment to excellence in teaching and mentorship. This award reflects my dedication to creating engaging learning experiences and supporting student success both inside and outside the classroom.
  </p>
</div>

<div class="courses-section">
  <h3>Current & Recent Courses</h3>
  
  <div class="course-card">
    <div class="course-header">
      <h4 class="course-title">Distributed Systems and Cloud Computing</h4>
      <span class="course-code">Graduate Level</span>
    </div>
    <p class="course-desc">
      Comprehensive exploration of distributed computing paradigms, cloud architectures, and resource management strategies. Students gain hands-on experience with cloud platforms and distributed system design patterns.
    </p>
    <div class="course-topics">
      <span class="topic-tag">Cloud Architecture</span>
      <span class="topic-tag">Resource Scheduling</span>
      <span class="topic-tag">Microservices</span>
      <span class="topic-tag">Container Orchestration</span>
      <span class="topic-tag">Distributed Consensus</span>
    </div>
  </div>
  
  <div class="course-card">
    <div class="course-header">
      <h4 class="course-title">Edge Computing and IoT Systems</h4>
      <span class="course-code">Graduate Level</span>
    </div>
    <p class="course-desc">
      Advanced study of edge computing architectures, IoT protocols, and intelligent data processing at the network edge. Includes practical labs on edge device programming and fog-cloud integration.
    </p>
    <div class="course-topics">
      <span class="topic-tag">Edge Architectures</span>
      <span class="topic-tag">IoT Protocols</span>
      <span class="topic-tag">Task Offloading</span>
      <span class="topic-tag">Real-Time Processing</span>
      <span class="topic-tag">Security & Privacy</span>
    </div>
  </div>
  
  <div class="course-card">
    <div class="course-header">
      <h4 class="course-title">Quantum Computing Fundamentals</h4>
      <span class="course-code">Graduate Level</span>
    </div>
    <p class="course-desc">
      Introduction to quantum computing principles, quantum algorithms, and their applications in optimization, cryptography, and machine learning. Students explore quantum programming frameworks and hybrid quantum-classical systems.
    </p>
    <div class="course-topics">
      <span class="topic-tag">Quantum Mechanics Basics</span>
      <span class="topic-tag">Quantum Gates</span>
      <span class="topic-tag">Grover's Algorithm</span>
      <span class="topic-tag">Shor's Algorithm</span>
      <span class="topic-tag">Qiskit/Cirq</span>
    </div>
  </div>
  
  <div class="course-card">
    <div class="course-header">
      <h4 class="course-title">Advanced Algorithms and Optimization</h4>
      <span class="course-code">Undergraduate/Graduate</span>
    </div>
    <p class="course-desc">
      Deep dive into algorithm design, analysis, and optimization techniques. Covers classical algorithms, approximation algorithms, and metaheuristic approaches for complex computational problems.
    </p>
    <div class="course-topics">
      <span class="topic-tag">Algorithm Design</span>
      <span class="topic-tag">Complexity Analysis</span>
      <span class="topic-tag">Dynamic Programming</span>
      <span class="topic-tag">Genetic Algorithms</span>
      <span class="topic-tag">Particle Swarm Optimization</span>
    </div>
  </div>
</div>

<div class="courses-section">
  <h3>📚 Teaching Resources</h3>
  <p style="color: #64748b; font-size: 1rem; line-height: 1.8;">
    Course syllabi, lecture slides, and assignment templates are available to enrolled students through the university learning management system. For prospective collaborators or educators interested in course materials, please contact me directly.
  </p>
</div>
