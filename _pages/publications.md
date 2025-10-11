---
layout: archive
title: 
permalink: /publications/
author_profile: true
---

<style>
body {
  font-family: "Inter", "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #f0f7ff, #e6f0ff, #f8fbff);
  color: #111;
  margin: 0;
  padding: 0;
}
/* Container */
.pub-container {
  max-width: 1000px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: 22px;
  box-shadow: 0 10px 45px rgba(0, 153, 255, 0.2);
  padding: 50px 55px;
}
/* Title */
.pub-container h1 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(90deg, #007cf0, #00dfd8, #007cf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradient 5s linear infinite;
}
@keyframes gradient {
  from { background-position: 0% center; }
  to { background-position: 200% center; }
}
/* Filters */
.pub-filters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 25px 0;
  gap: 12px;
}
.pub-filters input,
.pub-filters select {
  padding: 10px 14px;
  border: 1px solid #cde3f9;
  border-radius: 8px;
  background: #fff;
  font-size: 0.95rem;
}
/* Publication Cards */
.pub-card {
  background: white;
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 18px;
  border-left: 4px solid #00bcd4;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
}
.pub-card:hover {
  transform: translateY(-4px);
  border-left-color: #007cf0;
  box-shadow: 0 8px 22px rgba(0, 120, 255, 0.15);
}
/* Text */
.pub-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #004f92;
}
.pub-authors {
  color: #444;
  font-size: 0.92rem;
  margin-top: 3px;
}
.pub-meta {
  color: #666;
  font-size: 0.9rem;
  margin-top: 6px;
}
.pub-year {
  float: right;
  color: #007cf0;
  font-weight: bold;
}
.pub-link a {
  text-decoration: none;
  color: #00bcd4;
}
.pub-link a:hover {
  text-decoration: underline;
}
/* Glow Badge */
.badge {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  box-shadow: 0 0 8px rgba(0, 200, 255, 0.6);
  margin-right: 6px;
}
</style>
<body>

<div class="pub-container">
  <h1>🚀 My Research Publications</h1>
  
  <div class="pub-filters">
    <input id="searchInput" type="text" placeholder="🔍 Search by title or author...">
    <select id="yearFilter"><option value="">All Years</option></select>
  </div>

  <div id="pubList">Loading publications...</div>
</div>

<script>
const SCHOLAR_ID = "kvwUY_MAAAAJ";
const API_KEY = "a8b60dd4c831320a28917e137809fa4e99692cbbf2415da2700e509e609ebdb3"; // Get free key from serpapi.com
const API_URL = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${SCHOLAR_ID}&api_key=${API_KEY}`;

async function loadPublications() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const pubs = data.articles || [];
    renderPublications(pubs);
  } catch (e) {
    document.getElementById("pubList").innerHTML =
      "<p>⚠️ Unable to load Google Scholar data. Please check API key or ID.</p>";
  }
}

function renderPublications(pubs) {
  const list = document.getElementById("pubList");
  const yearSet = new Set();

  list.innerHTML = "";
  pubs.forEach(p => yearSet.add(p.year));

  pubs.sort((a, b) => (b.year || 0) - (a.year || 0));
  pubs.forEach(pub => {
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-title"><span class="badge">AI</span> ${pub.title}</div>
      <div class="pub-authors">${pub.authors || ""}</div>
      <div class="pub-meta">${pub.publication || ""} 
        <span class="pub-year">${pub.year || ""}</span></div>
      ${pub.link ? `<div class="pub-link"><a href="${pub.link}" target="_blank">🔗 View Paper</a></div>` : ""}
    `;
    list.appendChild(div);
  });

  const yearFilter = document.getElementById("yearFilter");
  [...yearSet].sort((a, b) => b - a).forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearFilter.appendChild(opt);
  });

  yearFilter.onchange = () => {
    const selected = yearFilter.value;
    const filtered = selected ? pubs.filter(p => p.year == selected) : pubs;
    renderPublications(filtered);
  };

  document.getElementById("searchInput").oninput = (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = pubs.filter(p =>
      p.title?.toLowerCase().includes(q) || p.authors?.toLowerCase().includes(q)
    );
    renderPublications(filtered);
  };
}

loadPublications();
</script>

</body>



