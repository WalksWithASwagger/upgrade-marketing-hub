# The Upgrade AI — Marketing Hub

A beautiful, standalone portal for browsing and exporting marketing content for The Upgrade AI training programs.

![The Upgrade AI Marketing Hub](https://img.shields.io/badge/The_Upgrade-Marketing_Hub-00d9ff?style=for-the-badge&logo=rocket&logoColor=white)

## 🚀 Quick Start

Just open `index.html` in your browser. No server required!

Or serve it locally:
```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## ✨ Features

- **7 Program Verticals** — Creative Pros, PR & Comms, Sales Leaders, Journalists, Healthcare, HR, Legal
- **6 Content Types** — LinkedIn Posts, Quotes, Email Sequences, Transformation Stories, Playbooks, Image Prompts
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
├── index.html          # Main app
├── css/
│   └── style.css       # All styling
├── js/
│   ├── app.js          # Application logic
│   └── data.js         # Content data
└── README.md           # This file
```

## 🔧 Customization

### Adding New Content

Edit `js/data.js` and add entries to the appropriate program and content type:

```javascript
{
    number: 51,
    title: "Your Post Title",
    category: "Identity & Mindset",
    content: `Your full post content here...`,
    preview: `Short preview for the card...`,
    wordCount: 150
}
```

### Adding a New Program

Add to the `PROGRAMS` object and create a corresponding entry in `CONTENT_DATA`:

```javascript
"new-program": {
    name: "New Program Name",
    description: "Description here",
    color: "purple", // purple, blue, green, orange, red, teal, indigo
    icon: "fa fa-icon-name",
    status: "ready"
}
```

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

## 🔗 Related Links

- [The Upgrade AI](https://theupgrade.ai) — Main website
- [Vancouver AI Community](https://vanai.ca) — Local community
- [BC AI Ecosystem](https://bcai.ca) — Nonprofit supporting AI adoption

## 📝 License

Private — The Upgrade AI Team Only

---

Built with ❤️ by the Kris Krug AI Ecosystem
