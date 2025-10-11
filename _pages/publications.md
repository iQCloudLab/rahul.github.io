---
layout: archive
title: 
permalink: /publications/
author_profile: true
---

<style>
        .publications-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
        }        
        .publication-item {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }        
        .publication-title {
            color: #2c5aa0;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 5px;
        }        
        .publication-authors {
            color: #555;
            margin-bottom: 5px;
        }        
        .publication-venue {
            color: #777;
            font-style: italic;
            margin-bottom: 5px;
        }        
        .publication-year {
            color: #999;
            font-weight: bold;
        }        
        .publication-links {
            margin-top: 8px;
        }        
        .publication-link {
            display: inline-block;
            margin-right: 15px;
            color: #2c5aa0;
            text-decoration: none;
        }        
        .publication-link:hover {
            text-decoration: underline;
        }
</style>

<body>
    <div class="publications-container">
        <h1>Publications</h1>
        <div id="publicationsList">
            <!-- Publications will be inserted here by JavaScript -->
        </div>
    </div>
    <script>
        // Simple BibTeX data (replace with your actual BibTeX content)
        const bibtexData = `
@article{smith2023ai,
  title={Artificial Intelligence in Healthcare},
  author={Smith, John and Doe, Jane and Johnson, Bob},
  journal={Nature Medicine},
  year={2023},
  volume={29},
  pages={100--115},
  doi={10.1038/s41591-023-02245-3}
}
@inproceedings{jones2022ml,
  title={Machine Learning for Climate Prediction},
  author={Jones, Alice and Brown, Charlie and Wilson, David},
  booktitle={International Conference on Machine Learning},
  year={2022},
  pages={500--515}
}        `;
        function parseBibTeX(bibtex) {
            const publications = [];
            const entries = bibtex.split('@').filter(entry => entry.trim());            
            entries.forEach(entry => {
                const typeMatch = entry.match(/^(\w+)\{/);
                if (!typeMatch) return;                
                const fields = {};
                const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
                let match;                
                while ((match = fieldRegex.exec(entry)) !== null) {
                    fields[match[1].toLowerCase()] = match[2].replace(/[{}]/g, '');
                }                
                publications.push({
                    title: fields.title || '',
                    authors: (fields.author || '').split(' and ').join(', '),
                    journal: fields.journal || fields.booktitle || '',
                    year: fields.year || '',
                    volume: fields.volume || '',
                    pages: fields.pages || '',
                    doi: fields.doi || ''
                });
            });            
            return publications.sort((a, b) => b.year - a.year);
        }
        function displayPublications() {
            const publications = parseBibTeX(bibtexData);
            const container = document.getElementById('publicationsList');            
            container.innerHTML = publications.map(pub => `
                <div class="publication-item">
                    <div class="publication-title">${pub.title}</div>
                    <div class="publication-authors">${pub.authors}</div>
                    <div class="publication-venue">
                        ${pub.journal}
                        ${pub.volume ? `, ${pub.volume}` : ''}
                        ${pub.pages ? `, pp. ${pub.pages}` : ''}
                    </div>
                    <div class="publication-year">${pub.year}</div>
                    ${pub.doi ? `
                        <div class="publication-links">
                            <a href="https://doi.org/${pub.doi}" target="_blank" class="publication-link">
                                View Publication
                            </a>
                        </div>
                    ` : ''}
                </div>
            `).join('');
        }
        // Display publications when page loads
        document.addEventListener('DOMContentLoaded', displayPublications);
    </script>
</body>
