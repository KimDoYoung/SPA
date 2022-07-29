#!/bin/bash
#
# car build sh
# 
#CAR_REST_API='/c/Users/apro/Documents/work/SPA/app/car/restapi'
export NODE_ENV=production
node "./dist/index.js" &> /dev/null &
