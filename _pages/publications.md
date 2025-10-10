---
layout: archive
title: 
permalink: /publications/
author_profile: true
---

<style>
/* Container */
.publications-container {
  background: #ffffffcc;
  backdrop-filter: blur(12px);
  width: 110%;
  max-width: 900px;
  margin-top: 60px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  padding: 30px 40px;
  animation: fadeIn 1.2s ease;
}

/* Title */
h1 {
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

/* Each Publication Card */
.pub-card {
  background: #f9fbff;
  border-radius: 14px;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-left: 4px solid #00bcd4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pub-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  border-left: 4px solid #007cf0;
}

.pub-title {
  font-weight: 600;
  color: #005fa3;
  margin-bottom: 4px;
}

.pub-authors {
  color: #444;
  font-size: 0.95rem;
}

.pub-meta {
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
}

.pub-year {
  float: right;
  color: #007cf0;
  font-weight: bold;
}

.pub-link a {
  color: #00bcd4;
  text-decoration: none;
}

.pub-link a:hover {
  text-decoration: underline;
}

/* Animation */
@keyframes fadeIn {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
</style>


<body>
<div class="publications-container">
  <h1>📚 My Research Publications</h1>
  <div id="publications"></div>
</div>
{% raw %}
<script>
/* === Embedded BibTeX (You can paste your .bib contents here) === */
const bibtexData = `
@article{zhang2025quantum,
  title = {Quantum–Edge Hybrid Resource Management Framework for Smart IoT},
  author = {Zhang, M. and Wei, L. and Li, Q.},
  journal = {IEEE Transactions on Cloud Computing},
  year = {2025},
  url = {https://doi.org/10.xxxx/ieee.tcc.2025.001}
}
@article{wei2024dynamic,
  title = {Dynamic Task Offloading in Multi-tier Cloud–Edge–IoT Environments},
  author = {Wei, L. and Kumar, A. and Zhang, M.},
  journal = {IEEE Internet of Things Journal},
  year = {2024},
  url = {https://doi.org/10.xxxx/iotj.2024.12345}
}
@article{miao2023quantum,
  title = {Hybrid Quantum-Classical Scheduling Framework for Distributed IoT Networks},
  author = {Miao, J. and Zhang, M.},
  journal = {Future Generation Computer Systems},
  year = {2023},
  url = {https://doi.org/10.xxxx/fgcs.2023.6789}
}
`;

/* === Simple BibTeX Parser === */
function parseBibTeX(bib) {
  const entries = bib.split("@").slice(1);
  return entries.map(entry => {
    const type = entry.match(/^\w+/)?.[0] || "";
    const fields = {};
    entry.split("\n").forEach(line => {
      const match = line.match(/(\w+)\s*=\s*[{"]([^"}]+)[}"]/);
      if (match) fields[match[1].toLowerCase()] = match[2];
    });
    return { type, fields };
  });
}

/* === Render === */
function renderPublications(entries) {
  const container = document.getElementById("publications");
  entries.sort((a, b) => (b.fields.year || 0) - (a.fields.year || 0));
  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-title">${entry.fields.title || "Untitled"}</div>
      <div class="pub-authors">${entry.fields.author || ""}</div>
      <div class="pub-meta">
        ${entry.fields.journal || ""} 
        <span class="pub-year">${entry.fields.year || ""}</span>
      </div>
      <div class="pub-link">${entry.fields.url ? `<a href="${entry.fields.url}" target="_blank">🔗 View Paper</a>` : ""}</div>
    `;
    container.appendChild(div);
  });
}

/* === Run === */
const entries = parseBibTeX(bibtexData);
renderPublications(entries);
</script>
{% endraw %}
</body>








