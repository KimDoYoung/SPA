#!/bin/bash
#
# tailwind와 angular를 컴파일하는 프로젝트를 만든다.
# 1. 만들어진 폴더 안에서 실행한다.
# 2. gulp 
pwd=${PWD##*/}
if [[ -z "${SPA_HOME}" ]]; then
  echo "SPA_HOME is not exist"
  exit 1
fi
TMP_GULP_DIR="${SPA_HOME}/bin/template/gulp"
#
# create folders
#
mkdir -p src/css
mkdir -p src/image
mkdir -p src/app/external
mkdir -p src/app/common
mkdir -p src/app/components
mkdir -p src/app/views

cp "${TMP_GULP_DIR}/package.json" .
cp "${TMP_GULP_DIR}/config.js" .
cp "${TMP_GULP_DIR}/gulpfile.js" .
cp "${TMP_GULP_DIR}/tailwind.config.js" .
cp "${TMP_GULP_DIR}/index.html" ./src
cp "${TMP_GULP_DIR}/tailwind.scss" ./src/css
cp "${TMP_GULP_DIR}/app_module.js" ./src/app
cp "${TMP_GULP_DIR}/app_config.js" ./src/app
cp "${TMP_GULP_DIR}/main.js" ./src/app/main.js
cp "${TMP_GULP_DIR}/README.md" .
