#!/bin/bash
#
# tailwind와 angular를 컴파일하는 프로젝트를 만든다.
# 1. 만들어진 폴더 안에서 실행한다.
# 2. gulp 
pwd=${PWD##*/}
if [[ -z "${SPA_HOME}" ]]; then
  echo "SPA_HOME is not exist"
fi
TMP_GULP_DIR="${SPA_HOME}/bin/template/gulp"
#
# create folders
#
mkdir -p src/css
mkdir -p src/image
mkdir -p src/js/external
mkdir -p src/js/app/common
mkdir -p src/js/app/components
mkdir -p src/js/app/views
echo "//main.js" > src/js/main.js
cp "${TMP_GULP_DIR}/package.json" .
cp "${TMP_GULP_DIR}/config.js" .
cp "${TMP_GULP_DIR}/gulpfile.js" .
cp "${TMP_GULP_DIR}/tailwind.config.js" .
cp "${TMP_GULP_DIR}/index.html" ./src
cp "${TMP_GULP_DIR}/tailwind.scss" ./src/css
cat <<EOT >> README.md
gulp tailwind angular start kit
===============================

##($pwd)

1. npm install
2. gulp --tasks
3. gulp
4. gulp clean
5. gulp prod

## directory설명

1. css : sass로 tailwind css 들
2. image : image파일저장
3. app : javascript파일들
  - app/common : 공통
  - app/components : directives
  - external : 외부라이브러리 이것들은 dist로 copy된다.
  - views : 각각 서브시스템 폴더를 만들수 있으며 template와 controller
  

EOT
