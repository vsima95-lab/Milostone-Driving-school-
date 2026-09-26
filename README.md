# Milestone Driving School: HTML/CSS template

Pure HTML and CSS, no build step, no framework. One JavaScript-free mobile menu, plus a small dark mode toggle script.

## Files
- `index.html` Home: hero with photo background, quick-quote form, trust bar, packages, process, instructors, reviews, FAQ, booking CTA
- `courses.html` Packages, comparison table, extras
- `about.html` Story, teaching approach, instructors (same cards as on `index.html`, kept separately)
- `business.html` Company pricing: plans, hourly rates by volume, benefits, FAQ
- `fleet.html` Car cards and photo gallery
- `contact.html` Form, contact details, location image
- `blog.html` + `blog-post.html` Blog listing and article layout
- `404.html` Not-found page
- `style.css` All styles, including light/dark theme variables
- `script.js` Dark mode toggle logic

Every page loads `style.css?v=3` and `script.js?v=3`. If you edit either file and don't see the change in the browser, raise the `v=` number (e.g. `?v=4`) on every page — this forces browsers to load the new version instead of a cached copy.

## Images already wired into the template

These filenames are already referenced in the HTML. Add your own images with these exact names to `images/`, or rename the `src` attributes in the HTML to match your own filenames:

| File | Used for |
|---|---|
| `logo.png` | Hero background photo on `index.html` |
| `Novak.png`, `Bennett.png`, `Svoboda.png` | Instructor photos (on both `index.html` and `about.html` — same photos, kept in sync) |
| `aboutus.png` | Team photo on `about.html` |
| `car1.png`–`car4.png` | The four fleet cards on `fleet.html` |
| `gallery1.png`–`gallery6.png` | The six gallery tiles on `fleet.html` |
| `blog1.png`–`blog3.png` | Blog post thumbnails on `blog.html` |
| `map.png` | Static location image on `contact.html` (not an interactive map — see below) |

## Quick customisation

1. **Colours.** Edit the gradient and colour variables in `:root` at the top of `style.css` (`--grad-brand`, `--grad-cta`, `--blue`, `--violet`, `--pink`, etc). Dark-mode versions of the neutral colours (background, text, borders) live in the `html[data-theme="dark"]` block right below `:root` — edit both if you change the palette.
2. **Fonts.** Change the Google Fonts link in each page's `<head>` and the `--font-head` / `--font-body` variables in `style.css`.
3. **Text and contact details.** Search and replace "Milestone", the phone number, email and address. These repeat in several places — see "Places to keep in sync" below.
4. **Photos.** Replace the files listed in the table above. Each `<img>` already has the right CSS class (`.photo`, `.car-img`, `.thumb`, etc) for cropping and rounded corners — you don't need to add anything, just swap the file. If a photo's focal point (a face, a car's wheels) gets cropped oddly, adjust `object-position` on that class in `style.css` (e.g. `top`, `bottom`, or a percentage).
5. **Forms.** The quote and booking forms in `index.html`, plus the contact form in `contact.html`, currently use `action="#"`, which does not send anywhere. Point each form's `action` to your own form service (Formspree, Netlify Forms) or backend before going live.
6. **Map.** `contact.html` currently uses a static image (`images/map.png`), not an interactive map. To use a real map, replace that `<img>` with a Google Maps or OpenStreetMap `<iframe>` embed for your own address.
7. **Dark mode.** The toggle button in the header switches `data-theme` on `<html>` and remembers the visitor's choice in `localStorage`. No setup needed — just make sure any new colours you add use CSS variables (see below) so they work in both themes.

## Places to keep in sync

Some information is repeated in more than one place, written separately rather than pulled from a single source. If you change one, update the others too:

- **Contact details** (phone, email, hours, address): appear in the footer of every page, in the `index.html` booking CTA, and on `contact.html`.
- **Instructor cards**: duplicated on `index.html` and `about.html`.
- **Package names, prices and hours**: appear as cards on both `index.html` and `courses.html`, again in the comparison table on `courses.html`, and as dropdown options in the `contact.html` form.
- **Logo/school name "Milestone"**: appears in the header and footer of every page.

## Known limitations

- **Blog articles share one file.** All three post previews on `blog.html` link to the same `blog-post.html`. To give each post its own page, duplicate `blog-post.html` (e.g. `blog-post-2.html`), write its content, and update the matching link on `blog.html`.
- **Forms don't submit anywhere** until you set a real `action` (see step 5 above).
- **The map is a static image**, not interactive, until you swap in a real embed.
- **404 page** needs to be configured as your host's custom error page — the file existing alone isn't enough on most static hosts.

## Features
Responsive from 320px, sticky header, light/dark theme toggle, accessible skip link and focus states, semantic HTML, `prefers-reduced-motion` support, FAQ with native `<details>`, gradient accents throughout (buttons, badges, headings, hero backgrounds).

## Credits

- Fonts: Archivo and Public Sans via Google Fonts.
- Images: AI-generated demo imagery created for this template. Replace with your own images before publishing a real driving school website.
- No external image assets are required for the template.