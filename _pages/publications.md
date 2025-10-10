---
layout: archive
title: 
permalink: /publications/
author_profile: true
---
<style>
/* === Header === */
.pub-header {
  font-size: 2rem;
  font-weight: 700;
  color: #005fa3;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}
.pub-header::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
}
/* === Publication Grid === */
.pub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1100px;
}
/* === Publication Card === */
.pub-card {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(90,180,255,0.3);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(100,180,255,0.25);
  padding: 20px;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
}
.pub-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(80,160,255,0.4);
  border-color: rgba(60,160,255,0.5);
}
/* === Glow Animation === */
.pub-card::before {
  content: "";
  position: absolute;
  width: 250%;
  height: 250%;
  top: -75%;
  left: -75%;
  background: linear-gradient(120deg, rgba(90,180,255,0.15), rgba(255,255,255,0), rgba(90,180,255,0.15));
  transform: rotate(25deg);
  animation: shimmer 10s linear infinite;
}
@keyframes shimmer {
  0% { transform: translateX(-25%) rotate(25deg); }
  100% { transform: translateX(25%) rotate(25deg); }
}
/* === Content === */
.pub-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #004b87;
  margin-bottom: 6px;
}
.pub-authors {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 6px;
}
.pub-journal {
  font-size: 0.85rem;
  color: #0078d7;
  font-weight: 500;
}
.pub-year {
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 0.85rem;
  background: rgba(220,240,255,0.6);
  padding: 3px 8px;
  border-radius: 8px;
  color: #0078d7;
}
.pub-link {
  margin-top: 10px;
  display: inline-block;
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  color: white;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}
.pub-link:hover {
  background: linear-gradient(90deg, #5ee6ff, #3a95f2);
  box-shadow: 0 0 10px rgba(80,180,255,0.6);
}
</style>



  <div class="pub-header">📚 Journal Publications</div>
  <div id="publications" class="pub-grid"></div>

<script>
/* === Minimal BibTeX Parser === */
function parseBibTeX(bibtexText) {
  const entries = [];
  const regex = /@(\w+)\s*{\s*([^,]+),([\s\S]*?)\n}/g;
  let match;
  while ((match = regex.exec(bibtexText))) {
    const type = match[1];
    const id = match[2];
    const fieldsText = match[3];
    const fields = {};
    const fieldRegex = /(\w+)\s*=\s*[{"]([^"}]+)[}"]/g;
    let f;
    while ((f = fieldRegex.exec(fieldsText))) {
      fields[f[1].toLowerCase()] = f[2];
    }
    entries.push({ type, id, fields });
  }
  return entries;
}

/* === Render Function === */
function renderPublications(entries) {
  const container = document.getElementById("publications");
  container.innerHTML = "";
  entries.forEach(entry => {
    const f = entry.fields;
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-year">${f.year || ""}</div>
      <div class="pub-title">${f.title || "Untitled"}</div>
      <div class="pub-authors">${f.author || ""}</div>
      <div class="pub-journal"><em>${f.journal || f.booktitle || ""}</em></div>
      ${f.url ? `<a href="${f.url}" class="pub-link" target="_blank">View Paper →</a>` : ""}
    `;
    container.appendChild(div);
  });
}

/* === Load BibTeX File === */
fetch("publications.bib")
  .then(res => res.text())
  .then(text => {
    const entries = parseBibTeX(text);
    // Sort by year (descending)
    entries.sort((a, b) => (b.fields.year || 0) - (a.fields.year || 0));
    renderPublications(entries);
  })
  .catch(err => console.error("Error loading BibTeX:", err));
</script>






