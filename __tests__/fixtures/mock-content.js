/**
 * Mock content data for testing
 *
 * Mimics structure of actual PROGRAMS and CONTENT_DATA
 */

export const mockPrograms = {
  "all-programs": {
    name: "All Programs (Cohort Roundup)",
    description: "Cross-program marketing",
    color: "cyan",
    icon: "fa fa-layer-group",
    status: "ready"
  },
  "pr-comms": {
    name: "PR & Communications",
    description: "AI training for PR professionals",
    color: "purple",
    icon: "fa fa-bullhorn",
    status: "ready"
  },
  "creative-pros": {
    name: "Creative Professionals",
    description: "AI training for creatives",
    color: "blue",
    icon: "fa fa-palette",
    status: "ready"
  },
  "healthcare-pros": {
    name: "Healthcare Professionals",
    description: "AI training for healthcare",
    color: "green",
    icon: "fa fa-heartbeat",
    status: "in-development"
  }
};

export const mockContentData = {
  "all-programs": {
    linkedin: [
      {
        number: 1,
        title: "Pick your track",
        content: "If you're a working professional trying to get your head around AI...",
        preview: "If you're a working professional...",
        category: "Cohorts Starting Soon",
        wordCount: 84
      }
    ],
    quotes: [],
    emails: [],
    stories: [],
    images: []
  },
  "pr-comms": {
    linkedin: [
      {
        number: 51,
        title: "O-M-G-W-T-F-A-I",
        content: "Three years ago, AI was a curiosity. Today, it's kicked over every table...",
        preview: "Three years ago, AI was a curiosity...",
        category: "Cohort 5 Class 1 (January 2026)",
        wordCount: 150
      },
      {
        number: 52,
        title: "Four Ethics Landmines",
        content: "If you're using AI at work, you need to navigate four big ethics landmines...",
        preview: "If you're using AI at work...",
        category: "Cohort 5 Class 1 (January 2026)",
        wordCount: 120
      },
      {
        number: 53,
        title: "Ops Person Out-Built Her Company",
        content: "She's an ops person. Not a developer. Built an internal tool...",
        preview: "She's an ops person...",
        category: "Cohort 5 Class 1 (January 2026)",
        wordCount: 95
      }
    ],
    quotes: [
      {
        number: 1,
        title: "Start with the work",
        content: "Start with the work you actually do...",
        preview: "Start with the work...",
        category: "Core Philosophy",
        wordCount: 25
      }
    ],
    emails: [
      {
        emailNumber: 1,
        subject: "Day 1: Welcome to The Upgrade",
        timing: "+0 days",
        bodyHtml: "<p>Welcome!</p>",
        bodyPlainText: "Welcome!",
        wordCount: 200
      }
    ],
    stories: [],
    images: []
  },
  "creative-pros": {
    linkedin: [
      {
        number: 1,
        title: "Test Creative Post",
        content: "Content for creatives...",
        preview: "Content for...",
        category: "Test Category",
        wordCount: 75
      }
    ],
    quotes: [],
    emails: [],
    stories: [],
    images: []
  },
  "healthcare-pros": {
    linkedin: [],
    quotes: [],
    emails: [],
    stories: [],
    images: []
  }
};

export const mockProgramOrder = [
  'all-programs',
  'pr-comms',
  'creative-pros',
  'healthcare-pros'
];

export const mockFeatured = {
  title: "PR & Comms Cohort 5 (January 2026)",
  subtitle: "Fresh thought leadership from the latest cohort",
  program: "pr-comms",
  items: [
    {
      title: "O-M-G-W-T-F-A-I",
      preview: "Three years ago...",
      category: "Cohort 5 Class 1",
      number: 51,
      type: "linkedin"
    }
  ]
};

export const mockLastUpdated = "2026-01-22T08:47:00Z";
