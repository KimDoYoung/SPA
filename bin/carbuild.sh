#!/bin/bash
#
# car build sh
# 
rm -rf ./dist
tsc --project ./tsconfig.json
cp ./.production.env ./dist
