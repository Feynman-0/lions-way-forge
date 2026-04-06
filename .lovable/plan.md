

# Lion's Way — Premium Multi-Page Author Website

## What We Have

From your uploaded documents, I've extracted:
- **Full biography** of Mark L. Fusco (long version)
- **Book details** — what sets it apart, reader benefits, audience needs, pain points, back cover quote
- **Brand values & tagline** — "Train – Believe – Transform"
- **2 full blog posts** — "Tying In" and "Wounded But Willing"
- **Author photo** — Mark in the dojo (martial arts action shot)

**Regarding the RAR files**: RAR archives cannot be extracted in this environment. If they contain additional blog posts, images (book cover, lion logo), or other content, please re-upload them as individual files (images as .jpg/.png, text as .docx/.txt). I'll proceed with everything we have and use high-quality placeholders where needed.

---

## Architecture — 6-Page React App

```text
Pages:
  /           → Home
  /about      → About Mark
  /book       → About the Book
  /blog       → Blog Grid
  /blog/:slug → Individual Blog Post
  /training   → Training / Platforms
  /contact    → Contact
```

### Files to Create

| File | Purpose |
|------|---------|
| `src/pages/Home.tsx` | Hero, video, positioning, values, book CTA |
| `src/pages/About.tsx` | Full bio, credentials, mission |
| `src/pages/Book.tsx` | Book details, what sets it apart, audience |
| `src/pages/Blog.tsx` | Blog grid listing |
| `src/pages/BlogPost.tsx` | Individual blog post view |
| `src/pages/Training.tsx` | Training overview + CTAs |
| `src/pages/Contact.tsx` | Contact form + free chapter CTA |
| `src/components/Navbar.tsx` | Fixed nav with gold accent links |
| `src/components/Footer.tsx` | Minimal footer with links |
| `src/components/HeroSection.tsx` | Cinematic hero with gradient overlay |
| `src/components/VideoSection.tsx` | Video placeholder section |
| `src/components/ValuesGrid.tsx` | 5-block brand values display |
| `src/components/BookCTA.tsx` | Dark bg + gold glow book call-to-action |
| `src/data/blogPosts.ts` | All blog content (exact text, no rewrites) |
| `src/index.css` | Updated design system with the premium palette |

---

## Design System

**Colors** (all converted to HSL for CSS variables):
- Deep Midnight Blue `#0D1B2A` → primary/background
- Charcoal Black `#0A0A0A` → dark sections
- Burnished Gold `#C6A75E` → accent/CTAs
- Soft Warm Light `#F5E6C8` → secondary text highlights
- Steel Blue `#415A77` → secondary depth
- Shadow Grey `#778DA9` → muted text

**Typography**:
- Headlines: `Playfair Display` (elegant serif)
- Body: `Inter` (clean sans-serif)

**Visual Effects**:
- Fog-like radial gradients for divine light feel
- Subtle gold glow on CTAs
- Smooth scroll behavior
- Hover animations on cards and buttons
- Foreground/background depth layers

---

## Page Details

### Home Page
1. **Hero**: Dark gradient overlay, "Lion's Way" headline, subtitle, two CTA buttons (gold)
2. **Video Section**: "Watch the Message" — centered placeholder box
3. **Positioning Block**: "Where Strength Meets Faith" — exact provided copy
4. **Why This Matters**: Exact provided copy
5. **Brand Values Grid**: 5 clean blocks with subtle gold borders
6. **Book CTA**: Dark bg, gold glow, "Not Just a Book. A Path." + back cover quote

### About Page
- Full biography from the Long Biography document (exact text)
- Authority subsection: Naval Academy, Naval Aviator, 8th Degree Black Belt, Bruce Lee lineage
- Mission subsection with exact text
- Author photo from extracted image

### Book Page
- "About Lion's Way" with all sections from Website Homework: Fusion, Authority, Practical Spirituality, Benefits, Audience Needs, Pain Points
- All exact text preserved

### Blog Page
- Grid layout with cards showing title + excerpt
- 2 complete posts from DOCX files: "Tying In" and "Wounded But Willing"
- 10 placeholder entries for remaining blog posts (titles from your list)
- Click → full post page

### Training Page
- "Train With Purpose" heading with exact provided content
- Two CTAs: "Join Training" and "Learn More"

### Contact Page
- Clean form: Name, Email, Message
- "Start Your Journey" subsection with free chapter download CTA

---

## Content Status

| Content | Status |
|---------|--------|
| Biography (full) | Have exact text |
| Book details | Have exact text |
| Brand values/tagline | Have exact text |
| Blog: "Tying In" | Have full text |
| Blog: "Wounded But Willing" | Have full text |
| Blog: 10 other posts | Titles only — need text from RAR files |
| Book cover image | Placeholder needed — may be in RAR files |
| Lion logo | Placeholder needed — may be in RAR files |
| Author photo | Have dojo action shot |

**To get the remaining content**: Please re-upload the RAR contents as individual files (.docx, .jpg, .png). I can then add the remaining 10 blog posts and real images.

