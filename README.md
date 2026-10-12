# Personal Portfolio

A one-page editorial portfolio built with HTML, CSS, and a small amount of JavaScript. Designed for GitHub Pages or any static host.

## Preview locally

1. Open the project folder on your computer.
2. Double-click `index.html`, or run a simple local server:

   ```bash
   # Python 3
   python3 -m http.server 8080
   ```

   Then visit [http://localhost:8080](http://localhost:8080).

3. Resize the browser window to check mobile and tablet layouts.

## Edit your personal details

### Name and page title

In `index.html`, search for `YOUR NAME` and replace it in:

- The `<title>` tag
- The header logo link
- The footer copyright line

Optional: set `PERSONAL.name` in `script.js` for future use (contact links use the fields below).

### Email, LinkedIn, and GitHub

Open `script.js` and edit the `PERSONAL` object at the top:

```javascript
const PERSONAL = {
  name: "YOUR NAME",
  email: "",      // e.g. "you@school.edu"
  linkedin: "",   // full URL
  github: "",     // full URL — omit or leave empty if you don't use GitHub
};
```

- Leave a field as `""` to **hide** that button or link (nothing broken shows on the page).
- Once you add at least one valid value, the placeholder hint in the Contact section disappears automatically.

### Projects and experience

- Project copy lives in `index.html` under **Selected work**.
- To add a public link later, uncomment the optional `<a class="text-link">` blocks inside each project and set `href`.
- Keep descriptions aligned with what you actually did; avoid inventing metrics or tools.

### Colors and typography

Main design tokens are in `style.css` under `:root` (`--paper`, `--ink`, `--pink-deep`, etc.).

## Publish with GitHub Pages

1. Create a **public** GitHub repository (for example, `personal-portfolio`).
2. Upload these files to the repository **root**:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` (or `master`) and folder **/ (root)**, then **Save**.
6. After a minute or two, your site URL appears at the top of the Pages settings (usually `https://<username>.github.io/<repo-name>/`).

## File overview

| File        | Purpose                                      |
|------------|-----------------------------------------------|
| `index.html` | Structure and content for all sections      |
| `style.css`  | Layout, typography, responsive design       |
| `script.js`  | Contact links, nav highlight, mobile menu   |

## Accessibility notes

- Skip link to main content
- Visible focus styles for keyboard users
- `prefers-reduced-motion` respected for smooth scrolling and transitions
- Contact links hidden until you provide real URLs or email
