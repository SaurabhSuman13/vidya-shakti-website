# Vidya Shakti Niwas website

A responsive static website prototype built with HTML, CSS and JavaScript. It can run locally and can be deployed free as a static site using GitHub Pages.

## Included school photographs

The `assets/` folder contains the four school photographs supplied for this prototype. The homepage uses the school gate image; the school gallery shows the building and two classroom scenes. Review permission/consent for identifiable children before public deployment.

## School photographs
The `assets/` folder contains the supplied school and classroom photographs used in the homepage and gallery. Several newly uploaded images were duplicates of images already included, so only distinct additional photographs were added to avoid repetition.

## Before publishing

Review `index.html` and:
1. Confirm all programme descriptions with Vidya Shakti Niwas.
2. Confirm the reporting date and accuracy of the preliminary figures in the Our Reach section.
3. Replace `[Add official email]`, `[Add approved phone number]`, office hours, and `REPLACE_WITH_OFFICIAL_EMAIL` with approved contact information.
4. Confirm the full address and add a verified map link if desired.
5. Obtain approval and informed consent before adding real photographs, identifiable stories or testimonials, especially involving children.
6. Keep student-level records and sensitive information off this public website.

The contact section is currently informational; it is not a database-backed contact form. The email button works after the official email address is configured. Do not describe donations as available unless management has approved a legitimate process.

## Run locally

### Option 1: Python
Install Python if needed, then open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Open http://localhost:8000

Stop the server with `Ctrl+C`.

### Option 2: Visual Studio Code
Open this folder in VS Code. You may install the Live Server extension, right-click `index.html`, and choose **Open with Live Server**.

## Publish permanently with GitHub Pages

1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new **public** repository, for example `vidya-shakti-website`. (A public repository means the source code is visible to everyone; do not put private records or secrets in it.)
3. Upload `index.html`, `style.css`, `script.js`, and this README to the repository's root. Keep `index.html` at the root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait a few minutes. The Pages section will show the published URL, typically `https://YOUR-USERNAME.github.io/vidya-shakti-website/`.
8. Open that URL on a phone and a different browser to test it. If it fails, check the Actions tab for deployment errors.
9. After changes, upload/commit the updated files; GitHub Pages will redeploy.

GitHub Pages is static hosting. The website has no server-side database, authentication, or form-processing backend. A custom domain is optional and may involve cost.

## Updating the website

Edit the HTML text and CSS, then upload/commit the changes to GitHub. Ask the NGO to approve content changes before publishing them.
