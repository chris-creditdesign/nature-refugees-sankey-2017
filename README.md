#Nature Refugees Sankey

Interactive graphic for @naturenews

Published at [nature.com/news/what-the-numbers-say-about-refugees-1.21548](http://www.nature.com/news/what-the-numbers-say-about-refugees-1.21548)

Created using the [d3-sankey](https://github.com/d3/d3-sankey) plugin for D3 4.0.

## To collect and compile data

	sh compile-data.sh

You will need [csvkit](https://csvkit.readthedocs.io/en/749/) and [circular-migration-plot](https://github.com/null2/circular-migration-plot).

## To create a local version for testing

	gulp

## To create a widget version for use in the polopoly CMS

	gulp dist

## To upload the build folder to Github Pages for approval

	git subtree push --prefix build origin gh-pages

