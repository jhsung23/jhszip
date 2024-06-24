# @jhszip/eslint-plugin

자주 사용하는 일반적인 린트 규칙을 모아둔 eslint plugin 입니다.

## Installation

```bash
# npm
npm install --save-dev @jhszip/eslint-plugin

# yarn
yarn add -D @jhszip/eslint-plugin
```

## Usage

eslintrc의 extends에 필요한 플러그인을 작성해 주세요.

```javascript
  // ...
  extends: [
    // ...
    'plugin:@jhszip/react', // react rules
    'plugin:@jhszip/next', // next rules
    'plugin:@jhszip/storybook', // storybook rules
    'plugin:@jhszip/import', // import rules
  ],
  //...
```

상세 rule은 다음 링크를 참조해 주세요.

- [react](https://github.com/jhsung23/jhszip/blob/main/packages/eslint/src/react.js)
- [next](https://github.com/jhsung23/jhszip/blob/main/packages/eslint/src/next.js)
- [storybook](https://github.com/jhsung23/jhszip/blob/main/packages/eslint/src/storybook.js)
- [import](https://github.com/jhsung23/jhszip/blob/main/packages/eslint/src/import.js)
