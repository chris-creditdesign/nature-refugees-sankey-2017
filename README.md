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

- Add continent view
- Add drop down to choose country
- Add transitions?
- Add print colours
- Proper colour scale
- Add correct country and continent names
- Remove titles
- Simplify the links opacity on hover logic
- Add button to switch between continents and countries 
- Check page width on resize
- Add credit

Created using the [d3-sankey](https://github.com/d3/d3-sankey) plugin for D3 4.0.

Run `npm install` and then `npm run build` to create `d3.min.js`.