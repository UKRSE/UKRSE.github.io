UKRSE.github.io
===============

This page is built using [Jekyll](http://jekyllrb.com/) and [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)

It is published using [Github Pages](http://pages.github.com/) at http://www.rse.ac.uk/

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
gem install jekyll
git clone git@github.com:UKRSE/UKRSE.github.io.git
cd UKRSE.github.io
jekyll serve
# Point browser to localhost:4000
```

## bootstraped/ (under construction)

Responsive, mobile ready version of the UKRSE website made with the Bootstrap framework.
