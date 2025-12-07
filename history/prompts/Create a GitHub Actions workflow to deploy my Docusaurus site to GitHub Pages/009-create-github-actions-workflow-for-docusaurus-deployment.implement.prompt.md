---
id: 009
title: Create GitHub Actions workflow for Docusaurus deployment
stage: implement
date_iso: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: Create a GitHub Actions workflow to deploy my Docusaurus site to GitHub Pages.
branch: 
user: 
command: /sp.implement Create a GitHub Actions workflow to deploy my Docusaurus site to GitHub Pages.- File path: .github/workflows/deploy.yml- Install dependencies- Build the Docusaurus site- Upload the build output as a Pages artifact- Deploy using deploy-pages action- Auto-detect my Docusaurus folder- Output only the final deploy.yml code
labels: ["github-actions", "docusaurus", "deployment"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - .github/workflows/deploy.yml
tests_yaml: []
prompt_text: |-
  /sp.implement  Create a GitHub Actions workflow to deploy my Docusaurus site to GitHub Pages.- File path: .github/workflows/deploy.yml- Install dependencies- Build the Docusaurus site- Upload the build output as a Pages artifact- Deploy using deploy-pages action- Auto-detect my Docusaurus folder- Output only the final deploy.yml code
response_text: |-
  ```yaml
  name: Deploy Docusaurus to GitHub Pages

  on:
    push:
      branches:
        - main # Adjust this to your default branch name

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: 18

        - name: Get npm cache directory
          id: npm-cache-dir
          shell: bash
          run: echo "dir=$(npm config get cache)" >> "$GITHUB_OUTPUT"

        - name: Cache dependencies
          uses: actions/cache@v4
          with:
            path: ${{ steps.npm-cache-dir.outputs.dir }}
            key: ${{ runner.os }}-node-${{ hashFiles('my-site/package-lock.json') }}
            restore-keys: |
              ${{ runner.os }}-node-

        - name: Install dependencies
          run: npm install
          working-directory: my-site

        - name: Build Docusaurus site
          run: npm run build
          working-directory: my-site

        - name: Upload artifact
          uses: actions/upload-pages-artifact@v3
          with:
            path: my-site/build

    deploy:
      needs: build
      runs-on: ubuntu-latest
      permissions:
        pages: write
        id-token: write
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - name: Deploy to GitHub Pages
          id: deployment
          uses: actions/deploy-pages@v4
  ```

  I have created the `deploy.yml` file in `.github/workflows/` with the content above.
  I am now creating a PHR for this interaction.
outcome: GitHub Actions workflow for Docusaurus deployment created successfully.
evaluation: The workflow file was created and the content matches the requirements.
---
