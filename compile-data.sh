#! /usr/bin/env bash
RED=`tput setaf 1`
GREEN=`tput setaf 2`
NOCOLOR=`tput sgr0`


# echo "${RED}Download Excel file from github ${NOCOLOR}"
# curl -H "Authorization: token INSERT-TOKEN-HERE" -H 'Accept: application/vnd.github.v3.raw' -o build/data/refugee-data.xlsx "https://github.com/NikolaSander/global-refugees/blob/gh-pages/refugee-data.xlsx?raw=true"

# echo ""

echo "${RED}Convert Excel sheet into csv ${NOCOLOR}"
in2csv --sheet "d3.csv" ./build/data/refugee-data.xlsx > ./build/data/refugee-data.csv

echo ""

echo "${GREEN}Column Names in refugee-data.csv: ${NOCOLOR}"
csvcut -n ./build/data/refugee-data.csv

echo ""

echo "${GREEN}Extract just the columns that we need ${NOCOLOR}"
csvcut -c 2,4,10,12,14 ./build/data/refugee-data.csv > ./build/data/refugee-data-edit.csv


# originregion_name, destinationregion_name, origin_name, destination_name, countryflow_2016
# 2,4,10,12,14