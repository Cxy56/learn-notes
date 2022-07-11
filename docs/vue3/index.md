<!--
 * @Description: 
 * @Author: CherryChen
 * @Date: 2021-06-17 00:45:13
 * @LastEditors: CherryChen
 * @LastEditTime: 2021-08-20 17:33:36
-->
<!-- [[toc]] -->
# 代码规范
# 基本准则
符合web标准，结构表现行为分离，兼容性优良。页面性能方面，代码要求简洁明了有序， 尽可能的减小服务器负载，保证最快的解析速度。

项目的维护和二次开发可能是直接或间接的团队合作，所以创建易维护的代码是一个项目成功与否的关键，易维护的代码意味着具有如下特性：

- 阅读性好：如良好的注释和命名规范，有文档

- 具有一致性：看起来如同一个人编写

- 代码的松耦合，高度模块化：将页面内的元素视为一个个模块，相互独立，尽量避免耦合过高的代码，从html,css,js三个层面都要考虑模块化

- 严格按照规范编写代码

(本规范整理来自于： [爱彼迎规范](https://github.com/airbnb/javascript)， 《编写可维护的JavaScript》)

## 1. 基本格式

### 代码缩进
统一2space。
``` js
// bad
function() {
  let a = 1;
let b = 1;
}

// good
function() {
  let a = 1;
}
```
eslint配置：
``` js
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,   // enforces indentation level for case clauses in switch statements. (此处1是2个空格缩进)
      flatTernaryExpressions: true // true (默认 false) 要求三元表达式内的三元表达式不能有缩进。
    }
  ],
```
函数体对齐

```  js
// bad
function a() {
  }
for(let i = 0; i < len; i++) {
 }

// good
for(let i = 0; i < len; i++) {
}
```

### 使用空格
（1）在控制语句（if、while 等）的小括号前放一个空格。

（2）在花括号前放一个空格。（"space-before-blocks": ["error", "always"],）

（3）在函数调用及声明中，不在函数的参数列表前加空格，在小括号后面花括号前加空格。

（4）代码块中开括号前和闭括号后有空格 （ "block-spacing": "error"）

```  js
/*eslint block-spacing: "error"*/

function foo() {return true;}
if (foo) { bar = 0;}
function baz() {let i = 0;
    return i;
}

```
正确示例：
```  js
function foo() { return true; }
if (foo) { bar = 0; }
```

（5）注释符号后加一个空格，再开始写注释。（"lines-around-comment": ["error", { "beforeBlockComment": true}]）

（6）禁止行尾有空格（"no-trailing-spaces": "error"）
    禁止有多个空格
  ```  js
  "no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: true,
      exceptions: {
        Property: true,
        BinaryExpression: false,
        VariableDeclarator: true,
        ImportDeclaration: true
      }
    }
  ],
  ```
示例：
```  js
// bad
function fight (sum) {
  console.log ('Swooosh!');
}

// good
function fight() {
  if (sum) {
    return 'string'
  }
  console.log('Swooosh!');
}
```
使用空格把运算符隔开， 定义变量时候留空格。
```  js
// bad
const x=y+5;
let sum= 0;

// good
const x = y + 5;

let sum = 0;
```
### 使用空行
- 代码块之间用一个空行隔开，便于阅读
- 文件尾部加一个空行
  （"eol-last": ["error", "always"]）
  why? Linux环境下文件最后一行可能会丢失，所以加空行防止代码被截掉最后一行
### 代码块限制

#### 单行
代码块不超过80字符， 超过的请换行。。("max-len": ["error", { "code": 80 }])
```  js
// bad
let i = 'aasjhdgas asjkhd acuihed ausdhaskjdashkdhakudca udsahgfaudf aslkjdghas'

// good
let i = 'asdsads' +
  'sadkjhygasjyd' + 
  'sahjdasd'
```
程序化生成字符串时，使用模板字符串代替字符串连接
```  js
function generateStr(value) {
  return `${value} hello world`
}
```
#### 单文件
单文件不超过1200行代码，含注释最多不超过1400行（极限）最佳维持在800行以内。（代码分块、功能分块、组件化、高阶hoc都可实现代码的质量管理，更有利于前端代码维护）

 ("max-lines": ["error",  {"max": 1200}])
#### 函数体
函数体量不超过100行，合理使用空格换行（函数结束 添加空格进行代码隔离）

("max-lines-per-function": ["error",  {"max": 100, "skipBlankLines": true, "skipComments": true}],)

强制回调函数最大嵌套深度为3:
很多 JavaScript 类库是使用回调模式处理异步操作。任何复杂的程序都将最有可能在不同级别的并发性下处理多个异步回调操作。一个最长见的隐患就是嵌套的回调，使得代码嵌套层级越深越难以阅读。
eslint配置： max-nested-callbacks: ["error", 3]
#### 语句块
(1) 所有语句块都应当使用大括号包裹
- if
- for
- while
- do...while...
- try...catch...finally

```  js
  // bad
  if (test)
    return false;

  // good
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function() { return false; }

  // good
  function() {
    return false;
  }
```
(2) 如果通过 if 和 else 使用多行代码块，把 else 放在 if 代码块关闭括号的同一行。
```  js
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```
#### 代码对齐方式，块语句间隔，缩进，switch,(case，default)等

### 逗号和分号
(1)语句末尾添加 ;
```  js
// bad
var a = 1

// good
var a = 1;
```
对应eslint配置：
```  js
// @fixable 结尾必须有分号
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true   // 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
      }
    ],
// @fixable 禁止行尾有空格
   "no-trailing-spaces": "error",

// @fixable 分号必须写在行尾，禁止在行首出现
    "semi-style": ["error", "last"],
```
(2) 增加结尾的逗号: 需要。（为什么? 这会让 git diffs 更干净。）（"comma-dangle": ["error", "always"],）
行首逗号：不需要。
```  js
// bad
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
```
## 2. 命名规范
  ### 变量名和函数
  避免单字母命名
  变量名不要以 $ 作为开始标记，会与很多 JavaScript 库冲突。
  驼峰（Camel Case）， 变量以名词前缀， 函数名以动词前缀， 同时命名在做到见名知意的同时，长度仅可能短
  ```  js
  // good
  function getName() {
    return myName;
  }
  // bad: 函数看起来像变量
  function theName() {
    return myName;
  }
  ```
  ### 常量
  大写字母+下划线， 以单词间隔
  ```  js
  const MSG_TYPE = 0;
  ```
  ### 构造函数或类
   命名遵循大驼峰命名法Pascal  Case
  ### 直接量
  - 字符串： 使用单引号 ''；单引号里的双引号无需转义，  eslint: quotes
  ```  js
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,  // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true // 允许字符串使用反勾号
      }
    ],
  ```
  在jsx中强制使用双引号
  ```  js
    // @fixable jsx 中的属性必须用双引号
    "jsx-quotes": ["error", "prefer-double"],
  ```
  - 数字：整数和浮点数
  
  不推荐写法：
  ```  js
  let price = 10.;
  // 科学计数法
  let  num = 1e23;
  ```
  0820讨论：有场景用到非十进制数
  
  - 使用直接量对引用类型赋值（如Object, Array, RegExp等，不用new）
  ### 文件命名
  ts/js 文件使用驼峰命名（react的组件函数命名：使用大驼峰）
  如果你的文件只输出一个类，那你的文件名必须和类名完全保持一致。
  当你导出单例、函数库、空对象时使用帕斯卡式(大驼峰)命名
  ### 推荐vscode插件
  - 单词拼写提醒：Code Spell Checker （可提示命名、css样式等英文拼写问题)
  - 词组格式快捷转换：A-super-change-case （对非驼峰命名快捷转换）

## 3. 注释
### 单行注释
使用 // 作为单行注释。在评论对象上面另起一行使用单行注释。在注释前插入空行。
```  js
// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}
```
### 多行注释
 多行注释 /****/包含描述、指定所有参数和返回值的类型和值。
``` js
// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
 ```

 eslint配置：
 ```  js
 "lines-around-comment": ["error", { "beforeBlockComment": true, "beforeLineComment": true }]
``` 

### 注释FIXME 或 TODO 前缀
给注释增加 FIXME 或 TODO 的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。
```  js
class Calculator {
  constructor() {
    // FIXME: shouldn't use a global here
    total = 0;
    // TODO: *****
  }
}
```
### 推荐vscode注释插件
- 让注释高亮起来： Better Comments（一眼看出各类注释以提高效率）


## 4. 数据类型

### 基本类型
直接存取基本类型。
- 字符串
- 数值
- 布尔类型
- null
- undefined

使用let 定义变量，使用 const 引用类型， 避免使用var; 

eslint配置：
``` js
"prefer-const": "error",
"no-const-assign": "error", // 禁止对使用 const 定义的常量重新赋值
"no-var": "error",
```

``` js
// bad
var a = 1;

// good
const a = 1;

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}

```

变量使用，尽量避免多个var or let同时存在，多个变量可以通过“,”隔开，并采用缩进同列的形式
所有变量声明放在顶部，没有赋值的变量，放在尾部
函数声明，紧跟变量声明后面
``` js
// bad
var a = 1
var b = 2
var c = 3

// good
var a = 1,
    b = 2,
    c = 3
/*
* 将有变量值的放在后面，没有变量值放在后面
*/
// bad

var a = 1,
    b,
    c = 2

// good
var a = 1,
    c = 2,
    b
```

### 引用类型
通过引用的方式存取复杂类型。
- 对象
- 数组
- 函数
```  js
// bad
var array = new Array()
var object = new Object()

// good
var arr = []
var obj = {}
```
### 对象
- 对所有的引用使用 const ；避免使用 var。

- 如果你一定需要可变动的引用，使用 let 代替 var。

- 注意 let 和 const 都是块级作用域，以及暂时性死区。 （eslint: "block-scoped-var": "error"）

- 使用对象方法的简写。eslint: object-shorthand
``` js
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

- 使用对象属性简写。  eslint: object-shorthand
``` js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

- 在对象属性声明前把简写的属性分组，写在一起便于阅读。
``` js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

- 别使用 保留字 作为键值, 使用同义词替换需要使用的保留字。

- 使用直接量对对象赋值。eslint: no-new-object

``` js
// bad
const item = new Object();

// good
const item = {};
```
##### 理由
{}是字面量，可以立即求值，而new Object()本质上是方法（只不过这个方法是内置的）调用，既然是方法调用，就涉及到在proto链中遍历该方法，当找到该方法后，又会生产方法调用必须的堆栈信息，方法调用结束后，还要释放该堆栈

new的过程
``` js
/*
new:
  var obj = {};
  obj.__proto__ = Object.prototype;
  Object.call(obj);
*/
```



- 只对包含特殊字符的属性， 使用单引号来声明。 eslint: quote-props
``` js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```
- 不要直接调用对象的 Object.prototype方法，比如 hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins
  为什么？ 因为一个对象的这些方法，可能有问题， 比如 { hasOwnProperty: false }， 或者对象为null
``` js
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
```

- 使用..., 优于使用 Object.assign 来浅拷贝对象
``` js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

- 不是你的对象不要动。 更好的途径是：扩展对象，如：继承（限制，不能从dom和bom继承，单页应用不直接操作dom）

使用解构存取和使用多属性对象。(为什么？因为解构能减少临时引用属性)
``` js

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
  ```
  eslint配置：
``` js
  "prefer-destructuring": ["error", {
    "array": true,
    "object": true
  }, {
    "enforceForRenamedProperties": false // 用来决定 object 解构是否应用于重命名的变量
  }]
  ```
#### 属性访问
- 使用 . 来访问对象的属性。
- 当通过变量访问属性时使用中括号 []。
- 属性优化原则 . 的使用优先权> []

a.b 使用优先权 > a['b']
``` js
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;


function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```
### 数组
推荐使用直接量定义数组 eslint: no-array-constructor

``` js
// good
const items = [];
```

对数组使用解构赋值。
``` js
const arr = [1, 2, 3, 4];
const [first, second] = arr;
```
向数组添加元素时使用 Array#push 替代直接赋值。
``` js
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```
使用拓展运算符 ... 复制数组，避免使用遍历嵌套循环等
``` js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
// good
const newArr = items.slice();
```

使用...将可迭代的对象（iterable object）转为数组， 代替Array.from。 对于类数组使用Array.from
``` js
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```
使用在数组方法中使用 return 语句， eslint: array-callback-return
``` js
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);


// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```

如果数组有多行， 在 [ 之后，] 之前使用换行
``` js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```
## 5. 函数
### 函数基本使用
（1）函数声明及使用
```  js
// 匿名函数表达式
var anonymous = function() {
  return true;
};

// 有名函数表达式
var named = function named() {
  return true;
};

// 立即调用函数表达式
(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();
```
（2）使用函数声明代替函数表达式。
为什么？因为函数声明是可命名的，所以他们在调用栈中更容易被识别。此外，函数声明会把整个函数提升（hoisted），而函数表达式只会把函数的引用变量名提升。
``` js
// bad
const foo = function () {
};

// good
function foo() {
}
```
  （3）永远不要在一个非函数代码块（if、while 等）中声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但它们的解析表现不一致。
```  js
/*
* 不要在一个非函数块里声明一个函数，把那个函数赋给一个变量
*/

// bad
if (testFlag) {
  function test() {
    console.log('Nope.');
  }
}

// good
if (testFlag) {
  var test = function test() {
    console.log('Yup.');
  };
}
```
（4）永远不要把参数命名为 arguments。 eslint: prefer-rest-params

这将取代原来函数作用域内的 arguments 对象。
``` js
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
```
（5）不要使用 arguments。可以选择 rest 语法 ... 替代。
为什么？使用 ... 能明确你要传入的参数。另外 rest 参数是一个真正的数组，而 arguments是一个类数组。
``` js
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
  ```
  （6）直接给函数的参数指定默认值，不要使用一个变化的函数参数。（默认参数放在最后）eslint: default-param-last
  ``` js
// really bad
function handleThings(opts) {
  // 不！我们不应该改变函数参数。
  // 更加糟糕: 如果参数 opts 是 false 的话，它就会被设定为一个对象。
  // 但这样的写法会造成一些 Bugs。
  //（译注：例如当 opts 被赋值为空字符串，opts 仍然会被下一行代码设定为一个空对象。）
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```
（7）直接给函数参数赋值时需要避免副作用。
为什么？因为这样的写法让人感到很困惑。
``` js
var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```
（8）不要使用 new Function 来创建函数。 eslint: no-new-func
``` js
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```
### 箭头函数
(1) 当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数符号。（"prefer-arrow-callback": "error"）
``` js
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => x * x);
```
(2) 如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 return 都省略掉； 多行时return不可省略
``` js
// good
[1, 2, 3].map(x => x * x);

// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

 ```
 ### 构造函数
 (1) 总是使用 class。避免直接操作 prototype 。

（class 语法更为简洁更易读。）

(2) 使用 extends 继承。 

（因为 extends 是一个内建的原型继承方法并且不会破坏 instanceof。）

(3）方法可以返回 this 来帮助链式调用。
``` js
// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
  ```

### 匿名函数

使用匿名函数的立即调用函数，赋值时候使用括号增强易读性

``` js
// bad
var value = function () {
  ...
  return false
}();
// good
var value = (function () {
  ...
  return false
}());
```
## 6. 条件表达式
### if...else
如果通过 if 和 else 使用多行代码块，把 else 放在 if 代码块关闭括号的同一行。
``` js
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```
### 比较运算符
优先使用 === 和 !== 而不是 == 和 !=
eslint配置
``` js
eqeqeq: [
      "error",
      "always",
      {
        null: "ignore"
      }
    ],
```
### 条件表达式使用简写
例如 if 语句等。规则如下：

- 对象 被计算为 true

- Undefined 被计算为 false

- Null 被计算为 false

- 布尔值 被计算为 布尔的值

- 数字 如果是 +0、-0、或 NaN 被计算为 false, 否则为 true

- 字符串 如果是空字符串 '' 被计算为 false，否则为 true
``` js
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```
## 7. 类型转换

### 类型转换
在语句开始时执行类型转换。

### 字符串
``` js
// this.reviewScore = 9;

// 爱彼迎规范不推荐 + '' 转换类型？个人认为这种方法挺好的～
const totalScore = this.reviewScore + '';
// 或
const totalScore = String(this.reviewScore);
```
### 对数字使用 parseInt 转换
并带上类型转换的基数
```  js
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);

// FIXME: 个人感觉以下写法也挺好
const val = +inputValue;
const val = inputValue >> 0;
```
### 布尔
```  js
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```
## 8. 模块
### 使用模组 (import/export) 
总是(import/export) 而不是其他非标准模块系统。你可以编译为你喜欢的模块系统。
(tree-shaking)
```  js
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```
### 不要从 import 中直接 export
为什么？虽然一行代码简洁明了，但让 import 和 export 各司其职让事情能保持一致。
```  js
// bad
// filename es6.js
export { es6 as default } from './airbnbStyleGuide';

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
```
### 同一个路径只使用一个import
```  js
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
  named1,
  named2,
} from 'foo';
```
### 引入JavaScript时，不使用文件名的后缀  
eslint: import/extensions
在不同电脑上表现可能不一样
```  js
// bad
import foo from './foo.js';
import bar from './bar.jsx';
import baz from './baz/index.jsx';

// good
import foo from './foo';
import bar from './bar';
import baz from './baz';
```
## 9. 代码解耦
  单页应用，已经基本解耦了css, html，js
  ### 配置数据解耦
  配置数据（写死的数据）从代码中分离， 最好放在单独的文件，以便清晰的分隔数据和应用逻辑
  - URL
  - 需要展现给用户的字符串
  - 重复的值
  - 设置数据
  - 任何可能发生变更的值（后续上线后需要改动的）
## 10. 建议尽量使用es6+
对于异步请求， 使用 async / await

try{} catch{} 包裹代码块，否则会向上抛出错误。
