---
layout: archive
title: "📚 Publications"
permalink: /publications/
author_profile: true
---

<style>
.pub-container {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  padding: 40px;
}
.pub-card {
  border-left: 4px solid #00bcd4;
  background: #fafafa;
  padding: 12px 20px;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: 0.3s;
}
.pub-card:hover { background: #eef7ff; transform: translateY(-2px); }
.pub-title { font-weight: 600; color: #004f92; }
.pub-authors { color: #333; font-size: 0.9rem; }
.pub-meta { color: #666; font-size: 0.85rem; }
.pub-year { float: right; color: #007cf0; font-weight: bold; }
.pub-link a { text-decoration: none; color: #00bcd4; }
.pub-link a:hover { text-decoration: underline; }
</style>

<div class="pub-container">
  <h1>📚 My Research Publications</h1>
  <div id="pubList"></div>
</div>

{% raw %}
<script>
async function loadBibtex() {
  try {
    const response = await fetch('{{ "/data/publications.bib" | relative_url }}');
    const text = await response.text();
    renderPublications(parseBibTeX(text));
  } catch (e) {
    document.getElementById('pubList').innerHTML = "⚠️ Could not load publications.";
  }
}

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
      <div class="pub-title">${f.title || "Untitled"}</div>
      <div class="pub-authors">${f.author || ""}</div>
      <div class="pub-meta">${f.journal || ""} <span class="pub-year">${f.year || ""}</span></div>
      ${f.url ? `<div class="pub-link"><a href="${f.url}" target="_blank">🔗 View Paper</a></div>` : ""}
    `;
    list.appendChild(div);
  });
}

loadBibtex();
</script>
{% endraw %}
