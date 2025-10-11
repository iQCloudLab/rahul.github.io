---
layout: archive
title: 
permalink: /publications/
author_profile: true
---

<style>

.container {
  max-width: 700px;
  margin: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
  padding: 10px;
}
h1 {
  text-align: center;
  background: linear-gradient(90deg,#007cf0,#00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pub-card {
  border-left: 4px solid #00bcd4;
  padding: 12px 18px;
  margin-bottom: 15px;
  border-radius: 8px;
  background: #fafafa;
  transition: all 0.3s ease;
}
.pub-card:hover {
  background: #eef7ff;
  transform: translateY(-3px);
}
.pub-title { font-weight: 600; color: #004f92; }
.pub-authors { color: #333; font-size: 0.9rem; }
.pub-meta { color: #666; font-size: 0.85rem; }
.pub-year { float: right; color: #007cf0; font-weight: bold; }
.pub-link a { text-decoration: none; color: #00bcd4; }
.pub-link a:hover { text-decoration: underline; }
</style>

<body>
<div class="container">
  <h1>📚 My Research Publications</h1>
  <div id="pubList"></div>
</div>

<script>
// 👇 Paste your BibTeX here directly
const bibData = `
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
  const container = document.getElementById('pubList');
  container.innerHTML = '';
  entries.sort((a,b)=>(b.fields.year||0)-(a.fields.year||0));
  entries.forEach(entry => {
    const f = entry.fields;
    const div = document.createElement('div');
    div.className = 'pub-card';
    div.innerHTML = `
      <div class="pub-title">${f.title||''}</div>
      <div class="pub-authors">${f.author||''}</div>
      <div class="pub-meta">${f.journal||''} <span class="pub-year">${f.year||''}</span></div>
      ${f.url?`<div class="pub-link"><a href="${f.url}" target="_blank">🔗 View Paper</a></div>`:''}
    `;
    container.appendChild(div);
  });
}

renderPublications(parseBibTeX(bibData));
</script>
</body>

