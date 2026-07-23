Update testimonials and blog content here without changing page code.

- `testimonials.json`: Add or update testimonial objects.
  - `quote`: customer quote text.
  - `author`: person or contact name.
  - `title`: role or position.
  - `company`: company name.
  - `rating`: optional number between 1 and 5.

- `blog-posts.json`: Add or update blog post objects.
  - `slug`: URL segment, e.g. `new-post-title`.
  - `title`: blog post title.
  - `excerpt`: short summary for the listing.
  - `content`: full article body. Use `\n\n` for paragraph breaks and markdown-like headings/lists.
  - `author`: author name.
  - `category`: blog category.
  - `date`: `YYYY-MM-DD` format.
  - `image`: optional image path or URL.

After editing these files, redeploy the site. The app automatically loads data from these JSON files during build.
