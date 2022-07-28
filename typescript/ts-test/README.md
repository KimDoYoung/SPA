# typescript

## 설치.

1. npm init -y
2. npm install -g typescript
3. tsc -version -4.7.2
4. tsc --init
    - tsconfig.json

## vscode extenstions

-   TypeScript ESLint
-   TypeScript Toolbox
-   TypeScript Importer
-   Ponicode
-   CodeMetrics

-   tslint
    -   npm i -g tslint
    -   tslint --init
-   JavaScript and TypeScript Nightly

## 특징

1. 타입이 존재하는 javascript
2. 런타임이 아닌 컴파일시에 에러를 찾을 수 있다.
3. 클래스, 인터페이스, 제너릭등 자바와 유사하게 OOP개념으로 작성할 수 있다.
4. ** eslint는 코드의 quality, prettier는 예쁘게 ** 해주는 것

## prettier

-   npx prettier --write ./src
-   npx prettier --check ./src

## eslint

-   npm install -g eslint
-   vscode에서 eslint extension 설치
-   eslint --init
-   .eslintrc.js 에 아래 코드 설정
-   npm install --save-dev eslint-config-prettier
    -   .eslintrc.json에
    ```
    "extends": ["plugin:prettier/recommended"]
    ```

```javascript
module.exports = {
    extends: 'standard',
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'no-trailing-spaces': 0,
        'keyword-spacing': 0,
        'no-unused-vars': 1,
        'no-multiple-empty-lines': 0,
        'space-before-function-paren': 0,
        'eol-last': 0
    }
};
```
