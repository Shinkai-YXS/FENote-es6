'use strict';

// ------------------- 属性的简洁表示法 ------------------- //
let a = 'aaa', b = 'bbb'
// 创建对象
let c = {
  a: a,
  b: b
}

console.log(c) // { a: 'aaa', b: 'bbb' }

// 属性名和变量名相同时，可简写
let d = {a, b}
console.log(d) // { a: 'aaa', b: 'bbb' }

// 方法
let e = {
  a,
  b,
  c () {
    return {c: 'ccc', d: 'ddd'}
  }
}
console.log(e) // { a: 'aaa', b: 'bbb', c: [Function: c] }
console.log(e.c()) // { c: 'ccc', d: 'ddd' }


// 直接返回变量，变为对象的属性
function getPoint() {
  var x = 1;
  var y = 2;
  return {x, y}
}
console.log(getPoint()) //{ x: 1, y: 2 }

// ------------------- 属性名表达式  ------------------- //
let obj = {}
obj.a = true
obj['b' + 'c'] = 123
console.log(obj) // { a: true, bc: 123 }

// 对象属性名，添加带空格的属性名字：
obj['a b'] = 123
console.log(obj['a b']) // 123

let bc = 'liehgnb'
let obj1 = {
  [bc]: true,
  ['a' + 'bc']: 123
}
console.log(obj1) // { liehgnb: true, abc: 123 }


// ------------------- 比较两个值是否相等 ------------------- //
//Object.is()用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

console.log(+0 === -0) // true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true

// ------------------- Object.assign ------------------- //
// 源对象的所有可枚举属性，复制到目标对象
// Object.assign方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两
// 个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。只要有一个参数不是对象，就会抛出
// TypeError错误。

var target = {a: 1}
var source1 = {b: 2}
var source2 = {c: 3}
Object.assign(target, source1, source2)
console.log(target) // { a: 1, b: 2, c: 3 }

// ------------------- Object.setPrototypeOf ------------------- //
// 将一个指定的对象的原型设置为另一个对象或者 null (既对象的[[Prototype]]内部属性).
// 语法：Object.setPrototypeOf(obj, prototype)
// 参数：obj(将被设置原型的对象) prototype(该对象新的原型[可以是一个对象或者 null])
let f = {
  getValue() {
    return 'fff'
  }
}

let g = {
  getValue() {
    return 'ggg'
  }
}

let h = Object.create(f)
console.log(h.getValue()) // fff
// 判断对象 h 是否等于对象 f
console.log(Object.getPrototypeOf(h) === f) // true

// 重新设置 h 对象
Object.setPrototypeOf(h, g)
console.log(h.getValue()) // ggg

// 判断对象 h 是否等于对象 g
console.log(Object.getPrototypeOf(h) === g) // true


// ------------------- __proto__ ------------------- //

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

let Circle = function () {};
let shape = {};
let circle = new Circle();

// 设置该对象的原型链引用
// 过时且不推荐使用的。这里只是举个例子，尽量不要在生产环境中这样做。
shape.__proto__ = circle;

// 判断该对象的原型链引用是否属于circle
console.log(shape.__proto__ === circle); // true


// ------------------- super ------------------- //
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
// super关键字用于访问和调用一个对象的父对象上的函数。

// 语法：
/***
 *  super([arguments]); 调用 父对象/父类 的构造函数
 *  super.functionOnParent([arguments]); 调用 父对象/父类 上的方法
 */
// 在构造函数中使用时，super关键字将单独出现，并且必须在使用this关键字之前使用。super关键字也可以用来调用父对象上的函数。

let aaa = {
  getAAA() {
    return 'aaa'
  }
}
let bbb = {
  getBBB() {
    return 'bbb'
  }
}

let ccc = {
  __proto__:aaa,
  getCCC() {
    return super.getAAA() + 'ccc'
  }
}
console.log(ccc.getCCC()) //aaaccc







