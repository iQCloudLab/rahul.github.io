---
layout: page
title: "📚 Publications"
permalink: /publications/
author_profile: true
---

<div class="pub-container">
  <h1>📘 Research Publications</h1>
  
  <!-- Statistics -->
  <div class="pub-stats"> 
      {% assign total_pubs = site.data.publications | size %}
    {% assign journal_pubs = site.data.publications | where: "type", "journal" | size %}
    {% assign conference_pubs = site.data.publications | where: "type", "conference" | size %}
    
    <div class="stat-item">
      <span class="stat-number">{{ total_pubs }}</span>
      <span class="stat-label">Total Publications</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">{{ journal_pubs }}</span>
      <span class="stat-label">Journal Articles</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">{{ conference_pubs }}</span>
      <span class="stat-label">Conference Papers</span>
    </div>
  </div>

  <!-- Filters -->
  <div class="pub-filters">
    <button class="filter-btn active" data-filter="all">All Publications</button>
    <button class="filter-btn" data-filter="journal">Journal Articles</button>
    <button class="filter-btn" data-filter="conference">Conference Papers</button>
    <button class="filter-btn" data-filter="recent">Recent (2023-2025)</button>
  </div>

  <!-- Search Box -->
  <div class="search-container">
    <input type="text" id="pubSearch" placeholder="🔍 Search publications by title, author, or keyword..." class="search-box">
  </div>

  <!-- Publications List -->
  <div id="publicationsList">
    {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
    {% for pub in sorted_pubs %}
    <div class="pub-card" data-type="{{ pub.type }}" data-year="{{ pub.year }}" data-tags="{{ pub.tags | join: ',' | downcase }}">
      <!-- Publication Header -->
      <div class="pub-header">
        <div class="pub-title">{{ pub.title }}</div>
        <div class="pub-year">{{ pub.year }}</div>
      </div>
      
      <!-- Authors -->
      <div class="pub-authors">{{ pub.authors }}</div>
      
      <!-- Venue Information -->
      <div class="pub-venue">
        {% if pub.type == "journal" %}
          <em>{{ pub.journal }}</em>
          {% if pub.volume %}Volume {{ pub.volume }}{% endif %}
          {% if pub.issue %}({{ pub.issue }}){% endif %}
          {% if pub.pages %}, pp. {{ pub.pages }}{% endif %}
        {% elsif pub.type == "conference" %}
          <em>{{ pub.booktitle }}</em>
          {% if pub.pages %}, pp. {{ pub.pages }}{% endif %}
        {% endif %}
      </div>

      <!-- Awards and Status -->
      <div class="pub-badges">
        {% if pub.award %}
        <span class="badge award-badge">🏆 {{ pub.award }}</span>
        {% endif %}
        
        {% if pub.status == "forthcoming" %}
        <span class="badge forthcoming-badge">📅 Forthcoming</span>
        {% endif %}
        
        {% if pub.tags %}
          {% for tag in pub.tags limit: 3 %}
          <span class="badge tag-badge">{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>

      <!-- Links -->
      <div class="pub-links">
        {% if pub.url %}
        <a href="{{ pub.url }}" target="_blank" class="pub-link" title="View Publication">
          📄 Paper
        </a>
        {% endif %}
        
        {% if pub.pdf %}
        <a href="{{ pub.pdf }}" target="_blank" class="pub-link" title="Download PDF">
          📥 PDF
        </a>
        {% endif %}
        
        {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank" class="pub-link" title="DOI">
          🔗 DOI
        </a>
        {% endif %}
        
        {% if pub.code %}
        <a href="{{ pub.code }}" target="_blank" class="pub-link" title="View Code">
          💻 Code
        </a>
        {% endif %}
      </div>

      <!-- Abstract (Collapsible) -->
      {% if pub.abstract %}
      <div class="pub-abstract-container">
        <button class="abstract-toggle" onclick="toggleAbstract(this)">
          📖 Show Abstract
        </button>
        <div class="pub-abstract">
          {{ pub.abstract }}
        </div>
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>

  <!-- No Results Message -->
  <div id="noResults" class="no-results" style="display: none;">
    <p>No publications found matching your criteria.</p>
    <button onclick="resetFilters()" class="reset-btn">Show All Publications</button>
  </div>
</div>

<style>
/* Enhanced CSS Styles */
.pub-container {
  max-width: 1000px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 40px;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2.2rem;
  background: linear-gradient(135deg, #007cf0, #00dfd8, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
}

/* Statistics */
.pub-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 15px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  min-width: 120px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.9;
}

/* Filters */
.pub-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn.active,
.filter-btn:hover {
  background: linear-gradient(135deg, #007cf0, #00dfd8);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
}

/* Search */
.search-container {
  margin-bottom: 30px;
}

.search-box {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-box:focus {
  outline: none;
  border-color: #007cf0;
  box-shadow: 0 0 0 3px rgba(0, 124, 240, 0.1);
}

/* Publication Cards */
.pub-card {
  border-left: 5px solid #00bcd4;
  background: #f8faff;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

.pub-card:hover {
  background: #eef7ff;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.pub-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 15px;
}

.pub-title {
  font-weight: 700;
  color: #004f92;
  font-size: 1.2rem;
  line-height: 1.4;
  flex: 1;
}

.pub-year {
  background: linear-gradient(135deg, #007cf0, #00dfd8);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9rem;
  white-space: nowrap;
}

.pub-authors {
  color: #555;
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.5;
}

.pub-venue {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 12px;
  line-height: 1.4;
}

/* Badges */
.pub-badges {
  margin-bottom: 15px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.award-badge {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.forthcoming-badge {
  background: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.tag-badge {
  background: #e9ecef;
  color: #495057;
  border: 1px solid #dee2e6;
}

/* Links */
.pub-links {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.pub-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background: white;
  color: #007cf0;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.pub-link:hover {
  background: #007cf0;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 124, 240, 0.3);
}

/* Abstract */
.pub-abstract-container {
  margin-top: 15px;
}

.abstract-toggle {
  background: none;
  border: none;
  color: #007cf0;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.abstract-toggle:hover {
  color: #0056b3;
}

.pub-abstract {
  margin-top: 10px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border-left: 3px solid #00bcd4;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  display: none;
}

.pub-abstract.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 40px;
  color: #666;
}

.reset-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #007cf0, #00dfd8);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .pub-container {
    padding: 20px;
    margin: 15px;
  }
  
  .pub-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .pub-year {
    align-self: flex-start;
  }
  
  .pub-stats {
    gap: 15px;
  }
  
  .stat-item {
    min-width: 100px;
    padding: 10px 15px;
  }
}
</style>

<script>
// JavaScript for filtering, search, and interactivity
function initializePublications() {
  const pubCards = document.querySelectorAll('.pub-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchBox = document.getElementById('pubSearch');
  const noResults = document.getElementById('noResults');

  function filterPublications() {
    const searchTerm = searchBox.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    let visibleCount = 0;

    pubCards.forEach(card => {
      const type = card.dataset.type;
      const year = parseInt(card.dataset.year);
      const tags = card.dataset.tags || '';
      const text = card.textContent.toLowerCase();

      // Filter logic
      let matchesFilter = true;
      let matchesSearch = true;

      // Apply filter
      if (activeFilter === 'journal' && type !== 'journal') matchesFilter = false;
      if (activeFilter === 'conference' && type !== 'conference') matchesFilter = false;
      if (activeFilter === 'recent' && year < 2023) matchesFilter = false;

      // Apply search
      if (searchTerm && !text.includes(searchTerm) && !tags.includes(searchTerm)) {
        matchesSearch = false;
      }

      // Show/hide card
      if (matchesFilter && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show no results message
    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  // Event listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterPublications();
    });
  });

  searchBox.addEventListener('input', filterPublications);

  // Initial filter
  filterPublications();
}

function toggleAbstract(button) {
  const abstract = button.nextElementSibling;
  const isVisible = abstract.classList.contains('show');
  
  if (isVisible) {
    abstract.classList.remove('show');
    button.innerHTML = '📖 Show Abstract';
  } else {
    abstract.classList.add('show');
    button.innerHTML = '📘 Hide Abstract';
  }
}

function resetFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  document.getElementById('pubSearch').value = '';
  initializePublications();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializePublications);
</script>