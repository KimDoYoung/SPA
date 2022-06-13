#!/bin/bash
#
# tailwindcss 프로젝트를 설정한다
# 1. 만들어진 폴더 안에서 실행한다.
# 2. npx로 실행하는 것으로 한다.
# 3. dist/index.html을 live로 
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
cat <<EOT >> dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>tailwindcss</title>
</head>
<body>
    <h1 class="text-lg">tailwindcss</h1>
</body>
</html>
EOT
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
$pwd
=====
1. npx tailwindcss -i ./src/css/style.css -o ./dist/css/style.css --watch
   package.json에 넣기
   
2. dist/index.html을 live로
3. tailwind.config.js안에 content
   content: ['./dist/**/*.{html,js}'],
EOT

