# Deploying to GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **The deployment will happen automatically:**
   - Every time you push to the `main` branch, GitHub Actions will:
     - Build your Next.js app as a static site
     - Deploy it to GitHub Pages
   - Your site will be available at: `https://[your-username].github.io/[repository-name]`

## Manual Build (Optional)

If you want to test the build locally:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Important Notes

- The site is configured for static export (no server-side features)
- Images are unoptimized for GitHub Pages compatibility
- All dynamic routes are pre-generated at build time
- The site uses trailing slashes for better GitHub Pages compatibility

## Troubleshooting

If deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Look for any error messages in the workflow logs
3. Make sure GitHub Pages is enabled in repository settings
4. Ensure the workflow file is in `.github/workflows/deploy.yml`

