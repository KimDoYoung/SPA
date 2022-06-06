#!/bin/bash
#
# tailwindcss 프로젝트를 설정한다
# 1. 만들어진 폴더 안에서 실행한다.
# 2. npx로 실행하는 것으로 한다.
#
pwd=${PWD##*/}
#
# create folders
#
mkdir src
mkdir dist
mkdir -p src/css
mkdir -p dist/css
#
# creat files
#
cat <<EOT >> src/css/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT
touch dist/index.html
#
# commands
#
npm init -y
npm i -D tailwindcss
npx tailwind init
#
# creat files
#
cat <<EOT >> README.md
$pwd\n
npx tailwindcss -i ./src/css/style.css -o ./dist/css/style.css --watch
EOT

