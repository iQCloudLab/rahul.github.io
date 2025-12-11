---
layout: archive
title: "Publications"
permalink: /publications/
---

## My Publications

<div class="publications-list">
  <div class="publication">
    <h3>Data Offloading for Edge-Enabled Smart City Services via Location-Functionality Correlation Analysis</h3>
    <p class="authors">Qingyang Fan, Weizhe Zhang, Chen Ling, Rahul Yadav, Hui He</p>
    <p class="venue">IEEE Transactions on Service Computing, 2025</p>
    <a href="https://doi.org/10.1109/TSC.2025.3623180" target="_blank">🔗 View Paper</a>
  </div>

  <div class="publication">
    <h3>Federated deep learning for malware detection and data protection in edge-enabled IoMT</h3>
    <p class="authors">Rahul Yadav, U Kumaran, VP Meena, Li Wei</p>
    <p class="venue">Cluster Computing, 2025</p>
    <a href="https://link.springer.com/article/10.1007/s10586-025-05491-x" target="_blank">🔗 View Paper</a>
  </div>

  <div class="publication">
    <h3>Mobility-aware cooperative service caching for mobile augmented reality services in mobile edge computing</h3>
    <p class="authors">Qingyang Fan, Weizhe Zhang, Chen Ling, Rahul Yadav, Desheng Wang, Hui He</p>
    <p class="venue">IEEE Transactions on Vehicular Technology, 2024</p>
    <a href="https://doi.org/10.1109/TVT.2024.3422179" target="_blank">🔗 View Paper</a>
  </div>
</div>

<style>
/* ===== Container ===== */
.publications-list {
  max-width: 850px;
  margin: 2rem auto;
  display: grid;
  gap: 1.4rem;
}

/* ===== Publication Card ===== */
.publication {
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #f0f4ff, #e8f0ff);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.publication::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #00c3ff, #007cf0, #00dfd8, #00c3ff);
  animation: rotate 8s linear infinite;
  opacity: 0.2;
  transform-origin: center;
  border-radius: 50%;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.publication:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

/* ===== Text Styling ===== */
.publication h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.authors {
  margin: 0.2rem 0;
  color: #444;
  font-size: 0.95rem;
}

.venue {
  margin: 0.2rem 0 0.8rem 0;
  color: #666;
  font-style: italic;
  font-size: 0.88rem;
}

.publication a {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  color: #fff;
  border-radius: 6px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.publication a:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,223,216,0.5);
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .publication { padding: 1.2rem 1.5rem; }
  .publication h3 { font-size: 1.1rem; }
}

/* ===== Glow Animation ===== */
.publication h3, .publication a {
  transition: all 0.3s ease;
}
</style>
