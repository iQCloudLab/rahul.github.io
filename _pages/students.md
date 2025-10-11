---
layout: archive
permalink: /students/
title:
author_profile: true
redirect_from: 
  - /md/
  - /markdown.html
---
<!-- === Students Section (Grouped + Sortable) === -->
<section class="lab-students">
  <h2>🎓 Our Research Students</h2>
  <p class="section-subtitle">Dedicated minds advancing the frontier of intelligent quantum–edge–cloud systems.</p>

  <!-- === Filter Controls === -->
  <div class="filter-bar">
    <label>Status:</label>
    <select id="statusFilter">
      <option value="all">All</option>
      <option value="ongoing">Ongoing</option>
      <option value="completed">Completed</option>
    </select>
    <label>Sort by Year:</label>
    <select id="yearSort">
      <option value="desc">Newest → Oldest</option>
      <option value="asc">Oldest → Newest</option>
    </select>
  </div>

  <!-- === PhD Students === -->
  <h3 class="student-category">🧠 PhD Students</h3>
  <div class="student-grid" id="phdGrid">
    <div class="student-card" data-status="ongoing" data-year="2026">
      <img src="https://via.placeholder.com/100" alt="Li Wei" class="student-photo">
      <h3>Li Wei</h3>
      <p class="student-level">PhD Candidate</p>
      <p class="student-topic">AI-driven Quantum Resource Scheduling</p>
      <span class="status ongoing">Ongoing</span>
    </div>
    <div class="student-card" data-status="completed" data-year="2025">
      <img src="https://via.placeholder.com/100" alt="Chen Yu" class="student-photo">
      <h3>Chen Yu</h3>
      <p class="student-level">PhD (2021–2025)</p>
      <p class="student-topic">Edge Computing for Autonomous IoT</p>
      <span class="status completed">Graduated 2025</span>
    </div>

  </div>

  <!-- === Master Students === -->
  <h3 class="student-category">💻 Master Students</h3>
  <div class="student-grid" id="masterGrid">
    <div class="student-card" data-status="ongoing" data-year="2025">
      <img src="https://via.placeholder.com/100" alt="Hiro Tanaka" class="student-photo">
      <h3>Hiro Tanaka</h3>
      <p class="student-level">Master Student</p>
      <p class="student-topic">LLM-based Scheduling for Quantum Cloud</p>
      <span class="status ongoing">Ongoing</span>
    </div>
    <div class="student-card" data-status="completed" data-year="2024">
      <img src="https://via.placeholder.com/100" alt="Wang Mei" class="student-photo">
      <h3>Wang Mei</h3>
      <p class="student-level">Master (2022–2024)</p>
      <p class="student-topic">Federated Edge–Cloud Frameworks</p>
      <span class="status completed">Graduated 2024</span>
    </div>
     <div class="student-card" data-status="ongoing" data-year="2025">
      <img src="https://via.placeholder.com/100" alt="Hiro Tanaka" class="student-photo">
      <h3>Hiro Tanaka</h3>
      <p class="student-level">Master Student</p>
      <p class="student-topic">LLM-based Scheduling for Quantum Cloud</p>
      <span class="status ongoing">Ongoing</span>
    </div>
    <div class="student-card" data-status="completed" data-year="2024">
      <img src="https://via.placeholder.com/100" alt="Wang Mei" class="student-photo">
      <h3>Wang Mei</h3>
      <p class="student-level">Master (2022–2024)</p>
      <p class="student-topic">Federated Edge–Cloud Frameworks</p>
      <span class="status completed">Graduated 2024</span>
    </div>

  </div>
</section>

<!-- === CSS === -->
<style>
.lab-students {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, #f9fbff 0%, #e8f2ff 100%);
  font-family: "Poppins", sans-serif;
}

.lab-students h2 {
  color: #004c91;
  font-size: 2rem;
  margin-bottom: 10px;
}

.section-subtitle {
  color: #444;
  margin-bottom: 40px;
  font-size: 1rem;
}

.filter-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-bar label {
  font-weight: 600;
  color: #004c91;
}

.filter-bar select {
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #c5dfff;
  background: rgba(255, 255, 255, 0.85);
  color: #004c91;
  cursor: pointer;
  transition: all 0.3s;
}
.filter-bar select:hover {
  background: #ffffff;
  box-shadow: 0 0 6px rgba(120, 180, 255, 0.4);
}

.student-category {
  margin: 40px 0 20px;
  color: #005fa3;
  font-size: 1.4rem;
  border-bottom: 2px solid rgba(90,180,255,0.3);
  display: inline-block;
  padding-bottom: 5px;
}

.student-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.student-card {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(120, 190, 255, 0.3);
  box-shadow: 0 6px 20px rgba(90, 180, 255, 0.25);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  backdrop-filter: blur(12px);
  transition: all 0.35s ease;
  position: relative;
}

.student-card:hover {
  transform: translateY(-6px);
  background: rgba(240, 248, 255, 0.95);
  box-shadow: 0 10px 25px rgba(80, 180, 255, 0.4);
}

.student-photo {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 3px solid #5eb8ff;
  margin-bottom: 12px;
  box-shadow: 0 0 10px rgba(90,180,255,0.4);
}

.student-card h3 {
  color: #005fa3;
  margin-bottom: 4px;
  font-size: 1.1rem;
}

.student-level {
  font-weight: 500;
  color: #3a95f2;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.student-topic {
  color: #333;
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 10px;
}

.status {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.status.ongoing {
  background: rgba(60, 180, 255, 0.15);
  color: #0078d7;
  border: 1px solid rgba(60, 180, 255, 0.4);
}

.status.completed {
  background: rgba(120, 255, 180, 0.15);
  color: #008c5e;
  border: 1px solid rgba(90, 220, 150, 0.4);
}
</style>

<!-- === JavaScript === -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const statusFilter = document.getElementById("statusFilter");
  const yearSort = document.getElementById("yearSort");

  const grids = [
    document.getElementById("phdGrid"),
    document.getElementById("masterGrid")
  ];

  function updateStudents() {
    const statusValue = statusFilter.value;
    const sortOrder = yearSort.value;

    grids.forEach(grid => {
      const cards = Array.from(grid.children);

      // Filter
      let filtered = cards.filter(card => {
        if (statusValue === "all") return true;
        return card.dataset.status === statusValue;
      });

      // Sort
      filtered.sort((a, b) => {
        const yearA = parseInt(a.dataset.year);
        const yearB = parseInt(b.dataset.year);
        return sortOrder === "asc" ? yearA - yearB : yearB - yearA;
      });

      // Rebuild
      grid.innerHTML = "";
      filtered.forEach(card => grid.appendChild(card));
    });
  }

  statusFilter.addEventListener("change", updateStudents);
  yearSort.addEventListener("change", updateStudents);
});
</script>
