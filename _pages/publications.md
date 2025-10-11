---
layout: archive
title: "Publications"
permalink: /publications/
---

## My Publications

<div class="publications-list">
  <div class="publication">
    <h3>Quantum–Edge Hybrid Resource Management Framework for Smart IoT</h3>
    <p class="authors">Zhang, M. and Wei, L. and Li, Q.</p>
    <p class="venue">IEEE Transactions on Cloud Computing, 2025</p>
    <a href="https://doi.org/10.xxxx/ieee.tcc.2025.001" target="_blank">🔗 View Paper</a>
  </div>

  <div class="publication">
    <h3>Dynamic Task Offloading in Multi-tier Cloud–Edge–IoT Environments</h3>
    <p class="authors">Wei, L. and Kumar, A. and Zhang, M.</p>
    <p class="venue">IEEE Internet of Things Journal, 2024</p>
    <a href="https://doi.org/10.xxxx/iotj.2024.12345" target="_blank">🔗 View Paper</a>
  </div>

  <div class="publication">
    <h3>Hybrid Quantum-Classical Scheduling Framework for Distributed IoT Networks</h3>
    <p class="authors">Miao, J. and Zhang, M.</p>
    <p class="venue">Future Generation Computer Systems, 2023</p>
    <a href="https://doi.org/10.xxxx/fgcs.2023.6789" target="_blank">🔗 View Paper</a>
  </div>
</div>

<style>
/* ===== Container ===== */
.publications-list {
  max-width: 850px;
  margin: 2rem auto;
  display: grid;
  gap: 1.8rem;
}

/* ===== Publication Card ===== */
.publication {
  padding: 1.8rem 2rem;
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
