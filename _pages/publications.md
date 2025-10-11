---
layout: archive
title: "📚 Publications"
permalink: /publications/
author_profile: true
---

<div class="pub-container">
  <h1>📘 My Research Publications</h1>
  <div id="pubList">Loading publications...</div>
</div>

<style>
.pub-container {
  max-width: 900px;
  margin: 50px auto;
  background: #ffffffb3;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 40px;
  animation: fadeIn 1s ease;
}

h1 {
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

.pub-card {
  border-left: 4px solid #00bcd4;
  background: #f8faff;
  padding: 14px 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: 0.3s;
}
.pub-card:hover {
  background: #eef7ff;
  transform: translateY(-3px);
}
.pub-title { font-weight: 600; color: #004f92; margin-bottom: 6px; }
.pub-authors { color: #333; font-size: 0.9rem; }
.pub-meta { color: #666; font-size: 0.85rem; }
.pub-year { float: right; color: #007cf0; font-weight: bold; }
.pub-link a { text-decoration: none; color: #00bcd4; }
.pub-link a:hover { text-decoration: underline; }
@keyframes fadeIn { from {opacity: 0; transform: translateY(10px);} to {opacity: 1; transform: translateY(0);} }
</style>

{% raw %}
<script>
// Direct BibTeX data pasted here ↓↓↓
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

// --- Simple BibTeX parser ---
function parseBibTeX(bib) {
  const entries = bib.split('@').slice(1);
  return entries.map(entry => {
    const fields = {};
    entry.split('\n').forEach(line => {
      const match = line.match(/(\w+)\s*=\s*[{"]([^"}]+)[}"]/);
      if (match) fields[match[1].toLowerCase()] = match[2];
    });
    return { fields };
  });
}

// --- Render Publications ---
function renderPublications(entries) {
  const list = document.getElementById("pubList");
  list.innerHTML = "";
  if (!entries.length) {
    list.innerHTML = "⚠️ No publications found.";
    return;
  }
  entries.sort((a, b) => (b.fields.year || 0) - (a.fields.year || 0));
  entries.forEach(entry => {
    const f = entry.fields;
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-title">${f.title || "Untitled"}</div>
      <div class="pub-authors">${f.author || ""}</div>
      <div class="pub-meta">${f.journal || ""} <span class="pub-year">${f.year || ""}</span></div>
      ${f.url ? `<div class="pub-link"><a href="${f.url}" target="_blank">🔗 View Paper</a></div>` : ""}
    `;
    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const entries = parseBibTeX(bibtexData);
  renderPublications(entries);
});
</script>
{% endraw %}
