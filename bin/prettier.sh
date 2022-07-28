#!/bin/bash
#
# vscode와 prettier이 환경을 설정한다.
pwd=${PWD##*/}

# vscode copy
if [ ! -a ".vscode" ]; then
	cp -R $SPA_HOME/bin/template/config/.vscode .
fi

# prettier 설정파일 copy
cp $SPA_HOME/bin/template/config/.prettier* .

echo "## prettier 사용" >> ./README.md
echo "- npx prettier --write ./src" >> ./README.md
echo "- npx prettier --check ./src" >> ./README.md