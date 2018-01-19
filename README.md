UKRSE.github.io
===============

**This is the old UK RSE website source and no longer generates the pages at http://www.rse.ac.uk/**

The new site uses Wordpress. To suggest changes or add jobs, events, RSE group entries etc, please contact info@rse.ac.uk

This page is built using [Jekyll](http://jekyllrb.com/) and [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) and published using [Github Pages](http://pages.github.com/) 

See [_layouts/default.html](_layouts/default.html) for the layout and [stylesheets/stylesheet.css](stylesheets/stylesheet.css) for the styles.

To make new pages, create files called foo.md containing [YAML frontmatter](http://jekyllrb.com/docs/frontmatter/):

``` yaml
---
title: The title
layout: default
short: Shortname
---
```

followed by content in [Markdown](https://daringfireball.net/projects/markdown/).

You can edit the content online in the Github live editor, or clone it in git and work offline:

``` bash
git clone git@github.com:UKRSE/UKRSE.github.io.git
cd UKRSE.github.io
```

Then to run Jekyll you can either install it locally:

``` bash
gem install jekyll
jekyll serve
```

Or you can use docker. This has the advantage of more closely mimicking the GitHub Pages setup:

``` bash
docker run -it --rm \
  --name jekyll \
  --volume=$(pwd):/srv/jekyll \
  -p 4000:4000 \
  jekyll/jekyll:pages
```

In either case, once Jekyll is running, point your browser at http://localhost:4000 to view the site.
