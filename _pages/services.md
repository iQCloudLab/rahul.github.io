---
layout: archive
title:
permalink: /services/
author_profile: true
redirect_from:
  - /resume
---



<section class="lab-services">
  <h2>🌍 Professional Services</h2>
  <p class="section-subtitle">Engaging with the global research community through leadership, editorial, and reviewing activities.</p>

  <div class="service-container">
    <!-- === Memberships === -->
    <div class="service-category">
      <div class="category-header">
        <h3>🤝 Professional Memberships</h3>
        <button class="toggle-btn">View ▾</button>
      </div>
      <ul class="service-list">
        <li>Senior Member, IEEE (Institute of Electrical and Electronics Engineers)</li>
        <li>Member, ACM (Association for Computing Machinery)</li>
        <li>Member, IEEE Cloud Computing Technical Committee</li>
        <li>Member, IEEE Quantum Computing Community</li>
      </ul>
    </div>
    <!-- === Editorial Activity === -->
    <div class="service-category">
      <div class="category-header">
        <h3>📰 Editorial Activities</h3>
        <button class="toggle-btn">View ▾</button>
      </div>
      <ul class="service-list">
        <li>Associate Editor, <em>IEEE Internet of Things Journal</em>, 2023–Present</li>
        <li>Guest Editor, <em>Future Generation Computer Systems</em>, Special Issue on “Hybrid Edge–Quantum Systems”, 2024</li>
        <li>Editorial Board Member, <em>Journal of Cloud Computing Advances</em>, 2022–Present</li>
      </ul>
    </div>
    <!-- === Conference Activities === -->
    <div class="service-category">
      <div class="category-header">
        <h3>🎤 Conference & Committee Roles</h3>
        <button class="toggle-btn">View ▾</button>
      </div>
      <ul class="service-list">
        <li>Session Chair, IEEE CLOUD 2025 — “Quantum-Edge Resource Management”</li>
        <li>Organizing Committee Member, IEEE EdgeCom 2024</li>
        <li>Program Committee, ACM/IEEE Symposium on Edge Computing (SEC), 2023–2025</li>
        <li>Workshop Organizer, “AI for Quantum Cloud Systems”, IEEE IC2E 2024</li>
      </ul>
    </div>
    <!-- === Reviewer Roles === -->
    <div class="service-category">
      <div class="category-header">
        <h3>🔍 Reviewer Activities</h3>
        <button class="toggle-btn">View ▾</button>
      </div>
      <ul class="service-list">
        <li><em>IEEE Transactions on Cloud Computing</em></li>
        <li><em>IEEE Internet of Things Journal</em></li>
        <li><em>ACM Transactions on Internet Technology</em></li>
        <li><em>Future Generation Computer Systems</em></li>
        <li><em>Journal of Systems Architecture</em></li>
      </ul>
    </div>

  </div>
</section>

<!-- === CSS === -->
<style>
.lab-services {
  padding: 60px 20px;
  background: linear-gradient(180deg, #f9fbff 0%, #e8f2ff 100%);
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.lab-services h2 {
  color: #004c91;
  font-size: 2rem;
  margin-bottom: 10px;
}

.section-subtitle {
  color: #555;
  margin-bottom: 40px;
  font-size: 1rem;
}

.service-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.service-category {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(120, 190, 255, 0.3);
  border-left: 5px solid #0078d7;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 6px 18px rgba(80, 160, 255, 0.25);
  transition: all 0.3s ease;
  overflow: hidden;
}

.service-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(80, 180, 255, 0.35);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(230, 244, 255, 0.9);
  padding: 15px 20px;
  cursor: pointer;
}

.category-header h3 {
  color: #004c91;
  font-size: 1.2rem;
  margin: 0;
}

.toggle-btn {
  background: linear-gradient(90deg, #5eb8ff, #3a95f2);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;
}

.toggle-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.service-list {
  list-style: none;
  margin: 0;
  padding: 0 25px 15px 40px;
  display: none;
  animation: fadeIn 0.4s ease;
}

.service-list li {
  margin: 10px 0;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
  position: relative;
}

.service-list li::before {
  content: "•";
  position: absolute;
  left: -15px;
  color: #0078d7;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<!-- === JS === -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.closest(".service-category").querySelector(".service-list");
      const isVisible = list.style.display === "block";

      // Close all
      document.querySelectorAll(".service-list").forEach(l => l.style.display = "none");
      document.querySelectorAll(".toggle-btn").forEach(b => b.textContent = "View ▾");

      // Toggle selected
      if (!isVisible) {
        list.style.display = "block";
        btn.textContent = "Hide ▴";
      } else {
        list.style.display = "none";
        btn.textContent = "View ▾";
      }
    });
  });
});
</script>
