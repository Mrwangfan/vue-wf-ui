/*
 * @Author: fan wang
 * @Date: 2022-01-25 09:50:15
 * @LastEditTime: 2022-01-25 10:22:05
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-wf-ui\.eslintrc.js
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["error", 2],//强制使用一致的缩进
    'eqeqeq': [0, 'always'], // 要求使用 === 和 !==
    'quotes': [2, 'single'],  // 强制使用一致的反勾号、双引号或单引号
    "no-alert": 0,//禁止使用alert confirm prompt
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multiple-empty-lines": [1, { "max": 2 }],//空行最多不能超过2行
    "camelcase": 2,//强制驼峰法命名
    "semi": [2, 'always'], //语句强制分号结尾
  }
}
