# Preview-Before-Publish Workflow (Vercel)

This workflow ensures Marketing can review changes to www.zerolabsai.com on a Vercel Preview Deployment before anything is published to production.

## Feature branch → Vercel Preview URL
1. Create a feature branch from `main`.
2. Push the branch and open a PR.
3. Wait for the Vercel Preview Deployment check to complete on the PR.
4. Open the Preview URL from the Vercel check or from the Vercel dashboard.
5. Share the Preview URL with Marketing for review.
6. Apply feedback by pushing commits to the same branch. Vercel updates the Preview Deployment automatically.

## Merge to main → Production publish
1. Confirm Marketing sign-off on the Preview URL.
2. Merge the PR into `main`.
3. Vercel builds and publishes the Production Deployment.
4. Verify the production site at `https://www.zerolabsai.com`.

## Rollback options
Option A: Revert commit(s) and redeploy
1. Revert the offending commit(s) on `main`.
2. Push the revert to `main`.
3. Vercel creates a new Production Deployment from the revert.

Option B: Promote a previous Vercel deployment
1. Open the Vercel project deployments list.
2. Locate the last known good deployment.
3. Use “Promote to Production” to make it live.
4. Confirm the site at `https://www.zerolabsai.com`.

## Marketing review checklist
- Confirm the Preview banner is visible and reads “Preview Build”.
- Verify page content matches the brief (headlines, body copy, CTA text).
- Check links, downloads, and forms for correctness.
- Review images and media for layout, cropping, and quality.
- Validate typography, spacing, and responsiveness at common breakpoints.
- Confirm SEO metadata if changed (title, description, open graph).
- Ensure there are no broken pages or console errors.
