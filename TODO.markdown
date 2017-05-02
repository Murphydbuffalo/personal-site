# TODOs
+ ~~Functional CSS - Small utility classes that describe what they do, and which
aren't tied to any particular part of the DOM (eg, no classes or IDs that
identify specific components on the page, such as `#cryptography`).~~

+ ~~Handle routing! Should have a custom 404 page or a catch-all redirect to the
home page. Need to clean up URLs so that they don't include file extensions.
Eg, you want `/about` and not `/about.html`.~~

+ ~~Style the "browse happy" elements.~~

+ ~~Consolidate shared HTML into a layout. Use some kind of HTML generator? Or native
HTML5 `<template>` tags? Should we use AJAX to fetch the non-index pages?~~

+ Scroll to appropriate point on page for each AJAX link.

+ Handle browser navigation stack (aka don't break the browser's back and forward buttons!)

+ Performance optimization - Minify, concatenate, gzip compression, run Google
PageSpeed insights. Resize images as needed, optimize them with `imageoptim`, and specify their
actual dimensions in the HTML `img` tag (not in CSS when possible).

+ Review and revise all copy.

+ Add polyfill for bleeding edge features like `fetch` and `replaceChild`. Can test
IE with [browserling](https://www.browserling.com/).

+ SEO - ~~Figure out what terms you want to optimize for; probably "Dan Murphy
developer", "Dan Murphy ruby", "Dan Murphy elixir", "Dan Murphy javascript",
"Dan Murphy rails/node/phoenix", "Dan Murphy machine learning", "Dan Murphy
AI", etc. And maybe add locations to those terms, eg "Boston", "Denver",
"Boulder", "Colorado".~~ Add inbound links from your social media, email signature,
resume (*which you should also host online*), friends (get them to visit and test
out the site). Make sure you reference a 2017 SEO checklist for up-to-date tips.

+ Set up analytics and view them regularly while people test the site! Google
Analytics for the behavior of individual sessions. NewRelic for general traffic
and performance insights. You can have people beta test the site from ngrok if you really want to, but it's probably fine to actually host it and just not advertise the site anywhere until you've had a chance to refine it.

+ Add a README describing how the site was developed and how it's hosted (and why).

+ Double check everything and ask your friends and fam to do so as well.
  - Responsive design for large monitor/desktop, laptop, large tablet, small tablet,
  phablet, and mobile.
  - Chrome, Firefox, Safari, IE, Edge, Android, and iOS.
  - All copy.
  - All links.
  - All load times.
  - SEO (should be first page for all keywords).

+ Host on AWS S3 and CloudFront! All static everything.
