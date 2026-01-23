# The Upgrade AI — Marketing Hub

A beautiful, standalone portal for browsing and exporting marketing content for The Upgrade AI training programs.

![The Upgrade AI Marketing Hub](https://img.shields.io/badge/The_Upgrade-Marketing_Hub-00d9ff?style=for-the-badge&logo=rocket&logoColor=white)

## 🚀 Quick Start

**Requires local server** (uses ES6 modules + fetch API):

```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

**Note:** Direct file opening (file://) won't work due to module scripts and fetch API.

## ✨ Features

- **8 Program Verticals** — All Programs, Creative Pros, PR & Comms, Sales Leaders, Journalists, Healthcare, HR, Legal
- **5 Content Types** — LinkedIn Posts, Quotes, Email Sequences, Transformation Stories, Image Prompts
- **Search & Filter** — Find content instantly by keyword or category
- **One-Click Copy** — Copy any piece of content to clipboard
- **Export Options**:
  - **Buffer CSV** — For social media scheduling
  - **Beehiiv JSON** — For email automation
  - **Markdown** — Raw content for any use
  - **JSON** — Structured data for developers

## 📊 Content Inventory

| Program | LinkedIn Posts | Quotes | Emails | Stories | Image Prompts |
|---------|---------------|--------|--------|---------|---------------|
| Creative Pros | 50+ | 50+ | 6 | 10 | 20+ |
| PR & Comms | 50+ | 50+ | 6 | 10 | 20+ |
| Sales Leaders | 50+ | 50+ | 6 | 10 | 20+ |
| Journalists | 50+ | 50+ | 6 | 10 | 20+ |
| Healthcare | 50+ | 50+ | 6 | 10 | 20+ |
| HR Pros | 50+ | 50+ | 6 | 10 | 20+ |
| Legal Pros | 50+ | 50+ | 6 | 10 | 20+ |

**Total**: 350+ LinkedIn posts, 350+ quotes, 42 emails, 70 stories, 140+ image prompts

## 🎨 Design

- **Dark Mode** aesthetic with teal/purple accents
- **Glassmorphism** card effects
- **Responsive** — works on desktop, tablet, and mobile
- **Font**: Outfit (headings) + JetBrains Mono (numbers)

## 📁 Structure

```
upgrade-marketing-hub/
├── index.html              # Main app
├── css/
│   └── style.css           # All styling
├── js/
│   └── app.js              # Application logic
├── data/
│   ├── loader.js           # Async JSON loader
│   ├── config/             # Configuration (4 files)
│   │   ├── programs.json
│   │   ├── featured.json
│   │   ├── program-order.json
│   │   └── metadata.json
│   └── programs/           # Content by program (48 files)
│       ├── all-programs/   # 6 content types per program
│       ├── creative-pros/
│       ├── pr-comms/
│       └── [5 more programs]
├── __tests__/              # Test suite (15 tests, 50% coverage)
├── package.json            # Dependencies and test scripts
└── README.md               # This file
```

## 🔧 Customization

### Adding New Content (Two Methods)

**Method 1: Edit JSON Files Directly**

Edit the appropriate JSON file in `data/programs/{program}/{type}.json`:

```json
{
  "number": 57,
  "title": "Your Post Title",
  "category": "Identity & Mindset",
  "content": "Your full post content here...",
  "preview": "Short preview for the card...",
  "wordCount": 150
}
```

**Method 2: Use Canonical Sync (Recommended)**

Content should be managed in the canonical source (kk-ai-ecosystem), then synced:

```bash
# In kk-ai-ecosystem repository
cd content/projects/05-marketing-and-outreach/upgrade-marketing-hub/
# Edit markdown files in pr-comms/social/linkedin-posts.md etc.

# Run sync script
cd scripts/content/marketing-hub/
node publish-public-hub.mjs /path/to/upgrade-marketing-hub
```

See `kk-ai-ecosystem/docs/SYNC_PROCEDURE.md` for details.

### Adding a New Program

Edit `data/config/programs.json` and add program definition:

```json
"new-program": {
  "name": "New Program Name",
  "description": "Description here",
  "color": "purple",
  "icon": "fa fa-icon-name",
  "status": "ready"
}
```

Then create content directory: `data/programs/new-program/` with JSON files.

## 📤 Export Formats

### Buffer CSV
```csv
Text,Category
"Your post content here...","Identity & Mindset"
```

### Beehiiv JSON
```json
[
  {
    "emailNumber": 1,
    "subject": "Email Subject",
    "timing": "+2 days",
    "bodyHtml": "<p>Content...</p>",
    "bodyPlainText": "Content..."
  }
]
```

## 🧪 Testing

**Test Coverage:** 50% (Phase 1 of 3 complete)

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run with coverage report
npm run test:coverage

# Watch mode (auto-rerun on changes)
npm run test:watch

# View coverage report
open coverage/index.html
```

**Test Suite:**
- 15 core logic tests (filtering, sorting, exports)
- Target: 70%+ coverage (current: 50%)
- Framework: Vitest + Happy DOM

## 🔗 Related Links

- [The Upgrade AI](https://theupgrade.ai) — Main website
- [Vancouver AI Community](https://vanai.ca) — Local community
- [BC AI Ecosystem](https://bcai.ca) — Nonprofit supporting AI adoption

## 📝 License

Private — The Upgrade AI Team Only

---

Built with ❤️ by the Kris Krug AI Ecosystem
