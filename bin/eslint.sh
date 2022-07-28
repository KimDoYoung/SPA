#!/bin/bash
#
# eslint의  환경을 설정한다.
pwd=${PWD##*/}

# vscode copy
echo "npm install --save-dev eslint-config-prettier"
cp $SPA_HOME/bin/template/config/.eslintrc.js .
