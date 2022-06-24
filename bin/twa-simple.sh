#!/bin/bash
#
# tailwind와 angular를 컴파일하는 프로젝트를 만든다.
# 1. 만들어진 폴더 안에서 실행한다.
# 2. gulp
echo "simple angularjs 1.x, angular-ui-router, tailwind" 
read -p "Press any key to resume ..."
pwd=${PWD##*/}
if [[ -z "${SPA_HOME}" ]]; then
  echo "SPA_HOME is not exist"
  exit 1
fi
TEMPLATE_DIR="${SPA_HOME}/bin/template/twa-simple"
#
# create folders
#
mkdir -p src/js
cp "${TEMPLATE_DIR}/README.md" .
cp "${TEMPLATE_DIR}/tailwind.config.js" .
cp "${TEMPLATE_DIR}/index.html" ./src
cp "${TEMPLATE_DIR}/script.js" ./src/js
