#!/bin/bash
#
# car build sh
# 
export NODE_ENV=production
node ./dist/index.js &> /dev/null &
