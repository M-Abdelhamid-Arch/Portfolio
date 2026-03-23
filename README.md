# Mohammad Abdelhamid — Architecture Portfolio
**Live site:** `https://M-Abdelhamid-Arch.github.io/Portfolio/`

---

## Folder Structure
```
Portfolio/
├── index.html              ← Homepage (hero, about, skills, education, projects, contact)
├── css/
│   ├── style.css           ← Main stylesheet
│   └── project.css         ← Project detail page styles
├── js/
│   └── main.js             ← Filtering, nav, animations
├── img/
│   ├── profile.jpg         ← Your profile photo
│   ├── hero-bg.jpg         ← Full-width hero background image
│   └── projects/           ← One image per project (thumbnail)
│       ├── al-qarafa.jpg
│       ├── botanica.jpg
│       ├── pelagia.jpg
│       ├── tornatora.jpg
│       ├── ezra.jpg
│       └── hadana.jpg
├── projects/               ← One HTML file per project
│   └── al-qarafa.html      ← ✅ Done — use as template for others
└── docs/
    └── Mohammad_Abdelhamid_Portfolio.pdf  ← Your portfolio PDF
```

---

## How to Add a New Project

### Step 1 — Add a card to `index.html`
Find the `<!-- Project Grid -->` section and paste a new card:

```html
<article class="project-card" data-category="CATEGORY">
  <div class="project-img">
    <img src="img/projects/YOUR-IMAGE.jpg" alt="Project Name">
    <div class="project-overlay">
      <a href="projects/YOUR-SLUG.html" class="project-link">View Project</a>
    </div>
  </div>
  <div class="project-info">
    <span class="project-tag">Type · Year</span>
    <h3><a href="projects/YOUR-SLUG.html">Project Name</a></h3>
    <p>One line description of the project.</p>
  </div>
</article>
```

**Categories:** `urban` · `restoration` · `residential` · `parametric` · `hospitality`
To add a new category: add a new `<button>` in `.project-filters` and use it as `data-category`.

### Step 2 — Create a project detail page
Copy `projects/al-qarafa.html` → rename it → update:
- `<title>` and `<meta name="description">`
- `.project-hero-tag`, `h1`, subtitle `p`
- All `.meta-item` values
- `.project-text` paragraphs
- `.project-gallery` images (add as many as needed)
- `.project-nav` prev/next links

### Step 3 — Add images
Place in `img/projects/` — JPG, 1200×800px recommended.

### Step 4 — Commit via GitHub Desktop
1. Open GitHub Desktop → you'll see changed files
2. Write commit message: `Add [Project Name]`
3. Click **Commit to main** → **Push origin**

---

## Images Still Needed
| File | Used for |
|------|----------|
| `img/profile.jpg` | Sidebar + About section |
| `img/hero-bg.jpg` | Hero background |
| `img/projects/al-qarafa.jpg` | Al Qarafa card + detail page |
| `img/projects/botanica.jpg` | Botanica card |
| `img/projects/pelagia.jpg` | Pelagia card |
| `img/projects/tornatora.jpg` | Tornatora card |
| `img/projects/ezra.jpg` | Ezra card |
| `img/projects/hadana.jpg` | Hadana card |
| `docs/Mohammad_Abdelhamid_Portfolio.pdf` | Download button |

## Project Pages Status
| Page | Status |
|------|--------|
| `projects/al-qarafa.html` | ✅ Done |
| `projects/botanica.html` | ⬜ Copy from al-qarafa |
| `projects/pelagia.html` | ⬜ Copy from al-qarafa |
| `projects/tornatora.html` | ⬜ Copy from al-qarafa |
| `projects/ezra.html` | ⬜ Copy from al-qarafa |
| `projects/hadana.html` | ⬜ Copy from al-qarafa |
