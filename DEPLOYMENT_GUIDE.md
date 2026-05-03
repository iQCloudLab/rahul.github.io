# Academic Website Deployment Guide

## Overview

This is a Jekyll-based academic website for Dr. Rahul Yadav, hosted on GitHub Pages. The site features a modern, professional design with responsive layouts and accessibility compliance.

## Site Structure

```
├── _pages/
│   ├── index.md          # Home page
│   ├── about-page.md     # About page (consolidated)
│   ├── research-page.md  # Research page (4 pillars)
│   ├── publications.md   # Publications listing
│   ├── teaching-page.md  # Teaching & courses
│   ├── join-lab.md       # Prospective students
│   └── contact.md        # Contact information
├── _data/
│   └── navigation.yml    # Navigation menu configuration
├── _config.yml           # Jekyll configuration
└── DEPLOYMENT_GUIDE.md   # This file
```

## Quick Start

### Prerequisites

- Ruby 3.0+ installed
- Bundler gem installed (`gem install bundler`)
- Git installed

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **View the site:**
   Open http://localhost:4000 in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://<username>.github.io/<repo-name>/`

### Option 2: Manual Deployment

1. Build the site:
   ```bash
   bundle exec jekyll build
   ```

2. Deploy using gh-pages branch:
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   cp -R _site/* .
   git add .
   git commit -m "Deploy website"
   git push origin gh-pages --force
   ```

## Content Updates

### Adding Publications

Edit `_pages/publications.md` and add new entries following the existing format:

```markdown
### 2025

- **Author List**, "Paper Title", *Journal/Conference Name*, Year. [DOI] [PDF]
```

### Updating Research Projects

Edit `_pages/research-page.md` to update project descriptions, focus areas, or add new pillars.

### Modifying Navigation

Edit `_data/navigation.yml`:

```yaml
main:
  - title: "Page Name"
    url: /page-slug/
```

### Updating Contact Information

Edit `_pages/contact.md` to change email, office location, or social links.

## Customization

### Changing Colors

The color scheme is defined in CSS variables within each page's `<style>` block. Key colors:

- Primary: `#1e3a5f` (Deep Navy)
- Accent: `#3b82f6` (Blue)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)

### Adding Images

Place images in `/images/` directory and reference them as:

```markdown
![Alt text](/images/filename.jpg)
```

### SEO Configuration

Update `_config.yml` with:

- Site title and description
- Social media handles
- Google Analytics ID (if using)
- ORCID and Google Scholar URLs

## Accessibility Features

The site includes:

- Semantic HTML5 structure
- ARIA labels where appropriate
- Sufficient color contrast (WCAG 2.1 AA)
- Keyboard navigation support
- Skip-to-content link
- Responsive design for all screen sizes

## Performance Optimization

- Images should be optimized before upload (use tools like TinyPNG)
- Minimize custom JavaScript
- Use system fonts where possible
- Enable gzip compression on server

## Troubleshooting

### Build Errors

1. Check Ruby version: `ruby -v` (should be 3.0+)
2. Update bundler: `gem update bundler`
3. Reinstall dependencies: `bundle install --force`

### Page Not Found

1. Verify permalink in front matter matches navigation URL
2. Check that the file is in `_pages/` directory
3. Ensure file extension is `.md`

### Styling Issues

1. Clear browser cache
2. Check for CSS syntax errors
3. Verify class names match between HTML and CSS

## Maintenance Checklist

- [ ] Update publications quarterly
- [ ] Review and update research projects annually
- [ ] Check all external links biannually
- [ ] Update teaching information each semester
- [ ] Review accessibility compliance annually
- [ ] Backup site content regularly

## Support

For technical issues or questions about the website:

1. Check this deployment guide
2. Review Jekyll documentation: https://jekyllrb.com/docs/
3. Consult GitHub Pages docs: https://docs.github.com/en/pages

---

**Last Updated:** December 2024  
**Maintained by:** iQCloudLab, Harbin Engineering University
