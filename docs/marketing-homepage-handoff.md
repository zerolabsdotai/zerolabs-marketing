# Marketing Homepage Handoff (EPIC-218)

## Overview of EPIC-218 CMS homepage
EPIC-218 delivers a CMS-managed homepage for the Zero Labs marketing site. The homepage content is authored in the CMS and rendered at build time into a static site. The CMS for EPIC-218 is Sanity, selected in ZER-219.

## What marketing can edit
- All fields exposed in the CMS "Homepage" document.
- Typically includes hero headline, subheadline, supporting copy, and hero media.
- Section titles, body copy, cards, and supporting media for each homepage section.
- Primary and secondary CTA labels and destination URLs.
- Logos, testimonials, metrics, or other structured blocks defined by the schema.
- Image alt text and captions where provided.

## How to access CMS
- CMS URL: TODO
- Workspace/project name: TODO
- Login method (SSO or email/password): TODO
- Role request path (who to contact): TODO

## Editing hero, sections, CTAs
1. Open the CMS and select the "Homepage" document.
2. Update the Hero fields (headline, subheadline, supporting copy, and hero media).
3. Scroll to the Sections list and edit each section's fields in place.
4. Update CTA labels and URLs in the Hero and in any section-level CTA fields.
5. Save the draft when finished.

## Reordering sections
1. In the "Sections" list, drag and drop items to the desired order.
2. Verify the new order in the preview.
3. Save the draft.

## Draft vs Published explanation
Draft content is visible only inside the CMS and in preview. Published content is the live version that the static site builds from. Publishing promotes draft content to the published state; the live site updates after the next successful build.

## Preview-before-publish workflow
1. Save your edits as a draft.
2. Open the preview link (if configured) to review the draft rendering.
3. Validate copy, images, and CTA links.
4. Apply any fixes and re-check preview before publishing.
5. Publish once the preview is approved.

## Publish process
1. Confirm the draft is ready.
2. Click Publish in the CMS.
3. Verify that a build is triggered for the marketing site (if applicable).
4. Confirm the live site updates after the build completes.

## Rollback process using CMS history
1. Open the "Homepage" document in the CMS.
2. Open the History or Revisions panel (label may vary).
3. Select the last known good revision.
4. Restore the revision and publish.
5. Confirm the build completes and the live site reflects the rollback.

## Guardrails (what marketing must not change)
- Do not modify CMS schemas or content models.
- Do not add new section types or fields without engineering approval.
- Do not alter the homepage document ID or slug.
- Do not add scripts, embeds, or custom HTML beyond provided fields.
- Do not change navigation or site-wide settings unless explicitly owned by marketing.
- Do not make changes that require backend logic, authentication, or API routes.

## Troubleshooting checklist
- Confirm changes are saved in Draft.
- Confirm the content is Published after approval.
- Verify CTA URLs are valid and use https.
- Check that images meet size/format expectations.
- If the preview looks correct but the live site is stale, confirm the latest build succeeded.
- If build failures occur, notify engineering with the build log link.
