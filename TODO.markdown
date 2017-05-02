# TODOs
1. Functional CSS - Small utility classes that describe what they do, and which
aren't tied to any particular part of the DOM (eg, no classes or IDs that
identify specific components on the page, such as `#cryptography`).

2. SEO - Figure out what terms you want to optimize for; probably "Dan Murphy
developer", "Dan Murphy ruby", "Dan Murphy elixir", "Dan Murphy javascript",
"Dan Murphy rails/node/phoenix", "Dan Murphy machine learning", "Dan Murphy
AI", etc. And maybe add locations to those terms, eg "Boston", "Denver",
"Boulder", "Colorado". Add inbound links from your social media, email signature,
resume (*which you should also host online*), friends (get them to visit and test
out the site). Make sure you reference a 2017 SEO checklist for up-to-date tips.

3. Performance optimization - Minify, concatenate, gzip compression, run Google
PageSpeed insights.

4. Set up analytics and view them regularly while people test the site! Google
Analytics for the behavior of individual sessions. NewRelic for general traffic
and performance insights. You can have people beta test the site from ngrok if you really want to, but it's probably fine to actually host it and just not advertise the site anywhere until you've had a chance to refine it.

5. Host on AWS S3 and CloudFront! All static everything.

6. Handle routing! Should have a custom 404 page or a catch-all redirect to the
home page. Need to clean up URLs so that they don't include file extensions.
Eg, you want `/about` and not `/about.html`.

7. Style the "browse happy" elements.

8. Consolidate shared HTML into a layout. Use some kind of HTML generator? Or native
HTML5 `<template>` tags? Should we use AJAX to fetch the non-index pages?
