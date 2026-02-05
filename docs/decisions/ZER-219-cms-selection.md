# ZER-219 — CMS Selection & Integration Plan (EPIC-218)

## 1. Objective
Define the CMS selection and integration plan for the Zero Labs marketing site (www.zerolabsai.com) under EPIC-218, covering selection rationale, SSG rendering approach in Next.js Pages Router, preview-before-publish design, and security/access model — planning only.

## 2. Constraints
- Marketing site is static content only.
- No authentication.
- No backend logic.
- No environment variables (in ZER-219).
- Must remain isolated from the product app (app.zerolabsai.com).
- Do NOT modify DNS.
- Do NOT connect to app APIs.
- Do NOT touch app.zerolabsai.com.
- Blog remains MD/MDX (out of scope for EPIC-218 / ZER-219).

## 3. Decision (CMS = Sanity) + Decision Drivers
**Decision:** Sanity is the chosen headless CMS.

**Decision Drivers:**
- **Engineering:** Sanity supports structured content models with strong schema control and flexible querying, which fits a static marketing site that fetches content at build time. It integrates cleanly with Next.js Pages Router without requiring backend services.
- **Marketing:** Sanity provides an editorial experience suited to frequent marketing updates and content iteration while keeping content structured and consistent across pages.

## 4. Options Considered
- **Contentful:** Strong editor UX, but heavier licensing/complexity for a small static marketing surface and less flexibility for custom content modeling.
- **Storyblok:** Visual editor is compelling, but introduces additional coupling to a visual editing workflow that is unnecessary for a static site with SSG-first delivery.
- **Prismic:** Solid previews and slices, but less flexible for custom structured content beyond typical marketing layouts.

## 5. Architecture Overview
High-level data flow:  
Sanity (content source) → build-time content fetch in Next.js Pages Router → static HTML output → deployed on Vercel for www.zerolabsai.com.  
No runtime backend, no product app integration, no API dependencies.

## 6. Rendering Strategy (SSG)
- Use SSG with build-time content fetch to generate static pages.
- Compatible with Next.js Pages Router (no App Router required).
- Fallback behavior: use a deterministic SSG strategy (e.g., pre-generate known routes; avoid runtime rendering). This keeps the site fully static and predictable for Vercel hosting.

## 7. Preview-before-publish Workflow
Design only (no setup steps):
- Sanity maintains draft vs. published content states.
- Marketing edits drafts in Sanity; a preview view renders draft content for review before publish.
- Publishing promotes draft content to published state, which is then picked up on the next build for the static site.

## 8. Security & Access Model
- Roles in Sanity: Admin/Owner for configuration, Editors for drafts, and Publishers for final approval.
- Least-privilege access enforced in CMS.
- Frontend consumes read-only marketing content only; no product secrets, no app data, and no authentication.
- Content delivery uses a read-only access mechanism conceptually (e.g., build-time read token). This is design-only here and must not introduce environment variables within ZER-219.

## 9. Risks / Tradeoffs
- Preview complexity: Draft preview requires coordination between CMS draft state and a preview view without introducing backend logic.
- SSG publish latency: Published content appears only after the next build, so updates are not instantaneous.
- Content model rigor: Strong schemas are required to avoid inconsistent page structures across the marketing site.
- Static-only constraint: Limits real-time personalization or dynamic content.

## 10. Completion Criteria for ZER-219
- Sanity selected as CMS with clear engineering and marketing rationale.
- SSG rendering strategy defined for Next.js Pages Router.
- Preview-before-publish workflow documented at a conceptual level.
- Security and access model documented with least-privilege roles and read-only frontend.
- Risks/tradeoffs and assumptions recorded.
- Handoff notes for ZER-220/221 provided.

## 11. Next Tickets Handoff
- **ZER-220:** Implement Sanity content models and wiring for build-time content fetch in Next.js Pages Router (static marketing pages only).
- **ZER-221:** Implement preview experience for draft content and establish CMS roles/permissions aligned with marketing workflows.
