---
layout: archive
title: "📚 Publications"
permalink: /publications/
author_profile: true
---

<style>
.pub-container {
  max-width: 900px;
  margin: 60px auto;
  background: #ffffffcc;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  padding: 40px 50px;
  font-family: "Inter", "Segoe UI", sans-serif;
}

.pub-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

.pub-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 18px;
  border-left: 5px solid #00bcd4;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}
.pub-card:hover {
  transform: translateY(-3px);
  border-left-color: #007cf0;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

.pub-authors { color: #333; margin-top: 3px; font-size: 0.92rem; }
.pub-meta { color: #666; font-size: 0.9rem; margin-top: 6px; }
.pub-year { float: right; color: #007cf0; font-weight: bold; }
.pub-link a { color: #00bcd4; text-decoration: none; }
.pub-link a:hover { text-decoration: underline; }
</style>

<div class="pub-container">
  <h1 class="pub-title">📚 My Research Publications</h1>
  <div id="pubList">Loading publications…</div>
</div>

{% raw %}
<script>
// === Paste your BibTeX data directly here ===
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

function parseBibTeX(bib) {
  return bib.split('@').slice(1).map(entry => {
    const fields = {};
    entry.split('\n').forEach(line => {
      const match = line.match(/(\w+)\s*=\s*[{"]([^"}]+)[}"]/);
      if (match) fields[match[1].toLowerCase()] = match[2];
    });
    return { fields };
  });
}

function renderPublications(entries) {
  const list = document.getElementById("pubList");
  list.innerHTML = "";
  entries.sort((a,b)=>(b.fields.year||0)-(a.fields.year||0));
  entries.forEach(entry => {
    const f = entry.fields;
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-title-item">${f.title || "Untitled"}</div>
      <div class="pub-authors">${f.author || ""}</div>
      <div class="pub-meta">${f.journal || ""} <span class="pub-year">${f.year || ""}</span></div>
      ${f.url ? `<div class="pub-link"><a href="${f.url}" target="_blank">🔗 View Paper</a></div>` : ""}
    `;
    list.appendChild(div);
  });
}

renderPublications(parseBibTeX(bibtexData));
</script>
{% endraw %}
