---
layout: archive
title: "📚 Publications"
permalink: /publications/
author_profile: true
---

<div class="pub-container">
  <h1>📘 My Research Publications</h1>
  
  {% for pub in site.data.publications %}
  <div class="pub-card">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-meta">
      {{ pub.journal }} 
      <span class="pub-year">{{ pub.year }}</span>
    </div>
    {% if pub.url %}
    <div class="pub-link">
      <a href="{{ pub.url }}" target="_blank">🔗 View Paper</a>
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>

<style>
.pub-container {
  max-width: 900px;
  margin: 50px auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 40px;
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
.pub-title { 
  font-weight: 600; 
  color: #004f92; 
  margin-bottom: 6px; 
}
.pub-authors { 
  color: #333; 
  font-size: 0.9rem; 
}
.pub-meta { 
  color: #666; 
  font-size: 0.85rem; 
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
</style>