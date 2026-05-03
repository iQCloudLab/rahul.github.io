---
permalink: /contact/
title: "Contact"
excerpt: ""
author_profile: true
---

<style>
/* Contact Page Styles */
.contact-hero {
  background: linear-gradient(135deg, #0f2942 0%, #1a3a5c 50%, #2d5a87 100%);
  color: white;
  padding: 70px 40px;
  border-radius: 16px;
  margin-bottom: 50px;
  text-align: center;
}

.contact-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 800;
}

.contact-hero p {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.9);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto 50px auto;
}

.contact-card {
  background: white;
  border-radius: 16px;
  padding: 40px 35px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.contact-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 20px;
}

.contact-card h3 {
  color: #1e3a5f;
  font-size: 1.35rem;
  margin: 0 0 20px 0;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 2px solid #f1f5f9;
}

.contact-info {
  color: #475569;
  line-height: 1.8;
  font-size: 0.98rem;
}

.contact-info p {
  margin: 12px 0;
}

.contact-info strong {
  color: #1e3a5f;
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.contact-info a {
  color: #3b82f6;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
}

.contact-info a:hover {
  color: #8b5cf6;
  text-decoration: underline;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed #e2e8f0;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  color: #1e40af;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid #bfdbfe;
}

.social-link:hover {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.location-section {
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  max-width: 1100px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}

.location-section h3 {
  color: #1e3a5f;
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
}

.location-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: center;
}

.location-details p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.8;
  margin: 15px 0;
}

.location-details strong {
  color: #1e3a5f;
  font-weight: 600;
}

.map-placeholder {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 60px 40px;
  text-align: center;
}

.map-placeholder p {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}

.response-time {
  background: linear-gradient(135deg, #f0f7ff 0%, #e8f5e9 100%);
  border-radius: 12px;
  padding: 25px 30px;
  margin-top: 30px;
  border: 1px solid #cbd5e1;
}

.response-time p {
  color: #1e3a5f;
  font-size: 0.98rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 50px 25px;
  }
  
  .contact-hero h1 {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-card {
    padding: 30px 25px;
  }
  
  .location-section {
    padding: 35px 25px;
  }
  
  .location-content {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="contact-hero">
  <h1>📬 Get In Touch</h1>
  <p>Interested in collaboration, research opportunities, or have questions about our work? Feel free to reach out!</p>
</div>

<div class="contact-grid">
  <!-- Contact Card 1: Direct Contact -->
  <div class="contact-card">
    <span class="contact-icon">✉️</span>
    <h3>Contact Information</h3>
    <div class="contact-info">
      <p><strong>Email:</strong><a href="mailto:rahul@hrbeu.edu.cn">rahul@hrbeu.edu.cn</a></p>
      <p><strong>Office:</strong>Room 2123, 21B Building<br>Harbin Engineering University<br>Harbin, Heilongjiang, China</p>
    </div>
    <div class="response-time">
      <p>⏱️ Typical response time: 24-48 hours</p>
    </div>
  </div>

  <!-- Contact Card 2: Academic Profiles -->
  <div class="contact-card">
    <span class="contact-icon">🎓</span>
    <h3>Academic Profiles</h3>
    <div class="contact-info">
      <p style="margin-bottom: 20px;">Connect with me on academic platforms:</p>
      <div class="social-links">
        <a href="https://scholar.google.com/citations?hl=en&user=kvwUY_MAAAAJ" target="_blank" class="social-link">
          🔍 Google Scholar
        </a>
        <a href="https://orcid.org/my-orcid?orcid=0000-0001-7514-4517" target="_blank" class="social-link">
          🆔 ORCID
        </a>
        <a href="https://www.researchgate.net/profile/Rahul-Yadav-10" target="_blank" class="social-link">
          📖 ResearchGate
        </a>
        <a href="https://www.linkedin.com/in/yaduvanshi/" target="_blank" class="social-link">
          💼 LinkedIn
        </a>
      </div>
    </div>
  </div>

  <!-- Contact Card 3: For Students -->
  <div class="contact-card">
    <span class="contact-icon">🎓</span>
    <h3>Prospective Students</h3>
    <div class="contact-info">
      <p>I am actively seeking motivated PhD and Master's students to join iQCloudLab.</p>
      <p style="margin-top: 15px;"><strong>Research Areas:</strong></p>
      <ul style="color: #64748b; font-size: 0.92rem; line-height: 1.8; padding-left: 20px; margin: 10px 0;">
        <li>Quantum Cloud Computing</li>
        <li>Agentic Edge Intelligence</li>
        <li>Distributed Systems</li>
        <li>Digital Twins</li>
      </ul>
      <p style="margin-top: 15px;"><a href="mailto:rahul@hrbeu.edu.cn?subject=Prospective Student Inquiry" style="font-weight: 600;">📧 Send Inquiry</a></p>
    </div>
  </div>
</div>

<!-- Location Section -->
<div class="location-section">
  <h3>📍 Visit Us</h3>
  <div class="location-content">
    <div class="location-details">
      <p><strong>Harbin Engineering University</strong><br>
      Room 2123, 21B Building<br>
      145 Nantong Street, Nangang District<br>
      Harbin, Heilongjiang Province<br>
      China, 150001</p>
      
      <p><strong>Getting Here:</strong><br>
      Harbin is accessible via Harbin Taiping International Airport (HRB) and multiple high-speed rail connections from major Chinese cities.</p>
      
      <p><strong>Time Zone:</strong><br>China Standard Time (CST, UTC+8)</p>
    </div>
    <div class="map-placeholder">
      <p>🗺️ Interactive Map Placeholder<br><span style="font-size: 0.85rem; color: #94a3b8;">Harbin Engineering University Campus</span></p>
    </div>
  </div>
</div>
