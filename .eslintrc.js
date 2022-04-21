/*
'off' or 0 - turn the rule off
'warn' or 1 - turn the rule on as a warning (doesn't affect exit code)
'error' or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  rules: {
    // 变量声明
    'no-undef': ['off'], // 禁用未声明的变量，除非它们在 global 注释中被提到
    'no-unused-vars': ['off'], // 禁止出现未使用过的变量
    'vue/no-unused-vars': ['off'], // 禁止出现未使用过的变量

    // 风格指南
    'no-unused-labels': ['off'], // 禁用出现未使用过的标
    'default-case': ['off'], // 要求 switch 语句中有 default 分支
    'dot-notation': ['off'], // 强制尽可能地使用点号而不是obj['attr']
    'eqeqeq': ['off'], // 要求使用 === 和 !==
    'no-case-declarations': ['off'], // 不允许在 case 子句中使用词法声明
    'no-empty-function': ['off'], // 禁止出现空函数
    'no-eval': ['off'], // 禁用 eval()
    'array-bracket-spacing': ['off', 'never'], // 强制数组方括号中使用一致的空2
    'comma-spacing': ['warn', { 'before': false, 'after': true }], // 强制在逗号前后使用一致的空格
    'comma-style': ['off', 'last'], // 强制使用一致的逗号风格
    'computed-property-spacing': ['off', 'never'], // 强制在计算的属性的方括号中使用一致的空格
    'consistent-this': ['off', 'that'], // 当获取当前执行环境的上下文时，强制使用一致的命名
    'eol-last': ['off', 'always'], // 要求或禁止文件末尾存在空行
    'func-call-spacing': ['off', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
    'func-style': ['off', 'declaration', { 'allowArrowFunctions': true }], // 强制一致地使用 function 声明或表达式
    'function-paren-newline': ['off', 'multiline'], // 强制在函数括号内使用一致的换行
    'implicit-arrow-linebreak': ['off', 'beside'], // 强制隐式返回的箭头函数体的位置
    'jsx-quotes': ['off', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': ['off', { 'beforeColon': false, 'afterColon': true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'linebreak-style': ['off', 'windows'], // 换行符风格
    'max-depth': ['off', 4], // 强制可嵌套的块的最大深度
    'max-nested-callbacks': ['off', 3], // 强制回调函数最大嵌套深度
    'max-params': ['off', 6], // 强制函数定义中最多允许的参数数量
    'multiline-comment-style': ['off', 'starred-block'], // 强制对多行注释使用特定风格
    'multiline-ternary': ['off', 'always-multiline'], // 要求或禁止在三元操作数中间换行
    'new-cap': ['off', { 'capIsNew': false }], // 要求构造函数首字母大写
    'no-array-constructor': ['off'], // 禁用 Array 构造函数
    'no-mixed-operators': ['off'], // 禁止混合使用不同的操作符
    'no-mixed-spaces-and-tabs': ['off'], // 禁止空格和 tab 的混合缩进
    'no-multiple-empty-lines': ['off'], // 禁止出现多行空行
    'no-new-object': ['off'], // 禁用 Object 的构造函数
    'no-tabs': ['off'], // 禁用 tab
    'no-trailing-spaces': [
      // 禁用行尾空白
      'off',
      { 'skipBlankLines': false, 'ignoreComments': false },
    ],
    'no-whitespace-before-property': ['off'], // 禁止属性前有空白
    'nonblock-statement-body-position': ['off', 'beside'], // 强制单个语句的位置
    'object-curly-spacing': ['off', 'never'], // 强制在大括号中使用一致的空格
    'operator-linebreak': ['off', 'after'], // 强制操作符使用一致的换行符
    'space-before-function-paren': ['off', 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': ['off', 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': ['off'], // 要求操作符周围有空格
    'space-unary-ops': ['off', { 'words': true, 'nonwords': false }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': ['warn', 'always'], // 强制在注释中 // 或 /* 使用一致的空格
    'vue/no-template-shadow': ['off'], // 这个规则不允许变量声明隐藏在外部作用域中声明的变量
    'vue/max-attributes-per-line': [
      // vue template 单行属性个数规范
      'warn',
      {
        'singleline': {
          'max': 1,
        },
        'multiline': {
          'max': 1,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': [
      // vue template 此规则在单行元素的内容前后强制换行
      'warn',
      {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': true,
        'ignores': ['pre', 'textarea'],
      },
    ],
    // 是否能在html写注释
    'vue/comment-directive': [
      'off',
      {
        'reportUnusedDisableDirectives': false,
      },
    ],
    // 标签是否自闭和
    'vue/html-self-closing': ['off'],
    // ECMAScript 6
    'arrow-spacing': ['warn', { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用一致的空格
    'no-var': ['warn'], // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['warn', 'always'], // 要求或禁止对象字面量中方法和属性使用简写语法
    // ts
    '@typescript-eslint/no-explicit-any': ['off', { 'ignoreRestArgs': false }],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
