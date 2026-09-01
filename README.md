# NextGen TT — Website

A static website for a table tennis training group: hero/landing page, programs,
weekly schedule, coach profiles, pricing, testimonials, FAQ, a contact/booking
form, and a full video gallery for training clips and behind-the-scenes fun.

No build step, no framework, no dependencies — just HTML, CSS, and vanilla JS.

## Structure

```
index.html          Homepage (hero, about, programs, schedule, coaches,
                     video preview, testimonials, pricing, FAQ, contact)
videos.html          Full video library with category filters + lightbox player
css/style.css        All styling (single stylesheet, CSS variables at the top)
js/main.js           Nav, FAQ accordion, contact form, video gallery + lightbox
js/videos-data.js    Video library content — edit this to add/remove videos
videos/              Put your own .mp4 files here if not using YouTube
images/              Add real photos here (coach headshots, hall photos, etc.)
```

## Adding your own videos

Open `js/videos-data.js` and edit the `VIDEOS` array. Each entry looks like:

```js
{
  id: "v10",
  title: "Your Video Title",
  description: "A short description shown under the thumbnail.",
  category: "training",   // "training" | "matches" | "fun"
  duration: "3:45",
  type: "youtube",         // "youtube" or "local"
  youtubeId: "dQw4w9WgXcQ", // the part after v= in a YouTube URL
  featured: true            // shows on the homepage preview (first 3 featured items)
}
```

To use your own video file instead of YouTube, use:

```js
{
  ...
  type: "local",
  src: "videos/my-clip.mp4"
}
```
and drop the file into the `/videos` folder.

All placeholder entries currently use `"REPLACE_WITH_YOUTUBE_ID"` — swap those
for real YouTube video IDs (or switch to `type: "local"`) before publishing.

## Customizing content

- **Branding / colors**: edit the CSS variables at the top of `css/style.css`
  (`--red`, `--orange`, `--black`, etc.) and the club name in the `.brand`
  elements in `index.html` / `videos.html`.
- **Programs, schedule, coaches, pricing, testimonials**: plain HTML sections
  in `index.html` — edit the text directly.
- **Coach photos**: the coach cards currently show initials on a gradient
  background. Replace `<div class="coach-photo">DC</div>` with
  `<img src="images/coach-daniel.jpg" alt="Daniel Cho">` once you have real photos.

## Contact form

The booking form in `index.html` (`#contactForm`) is front-end only — it shows
a success message but doesn't send anywhere yet. To receive real submissions,
either:

- Point the `<form>` at a service like [Formspree](https://formspree.io) or
  Netlify Forms (add `action="https://formspree.io/f/YOUR_ID" method="POST"`), or
- Wire it up to your own backend endpoint.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

This is a static site, so it deploys anywhere that serves static files:
GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any basic web host — just
upload the folder as-is.
