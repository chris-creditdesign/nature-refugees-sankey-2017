#Nature Refugees Sankey

Interactive graphic for @naturenews

## Collect and compile data

	sh compile-data.sh

You will need [csvkit](https://csvkit.readthedocs.io/en/749/) and [circular-migration-plot](https://github.com/null2/circular-migration-plot).

## Build 

	gulp

## Dist

	gulp dist

## gh-pages

	git subtree push --prefix build origin gh-pages

## To Do

- click to show just relevant nodes
- click to show just relevant text
- add gradient to links
- add proper tooltips
- Add continent view
- Put links in group so that text is above links
- Add drop down to choose country
- Make nodes at least 1px thick
- Add transitions?
- Add print colours
- Add correct country and continent names
- Add collision detection for text

Created using the [d3-sankey](https://github.com/d3/d3-sankey) plugin for D3 4.0.

Run `npm install` and then `npm run build` to create `d3.min.js`.