'use strict';

// 解构数组

function breakfast() {
  return ['🎂', '☕️', '🍎'];
}
// 通常方法是定义新的变量，来接收值
var tmp = breakfast(),
    dessert = tmp[0], drink = tmp[1], fruit = tmp[2];
console.log(dessert, drink, fruit) // 🎂 ☕️ 🍎

// 解构方法

let [dessert1, drink1, fruit1] = breakfast()
console.log(dessert1, drink1, fruit1) // 🎂 ☕️ 🍎

// 元素缺失
let [dessert2, drink2, fruit2, test] = breakfast()
console.log(dessert2, drink2, fruit2, test) // 🎂 ☕️ 🍎 undefined

// 跳过数组中的元素, 通过简单的添加逗号，就可以避免分配相应的数组元素，直接跳到下一个元素
let [dessert3, , fruit3] = breakfast()
console.log(dessert3, fruit3) // 🎂 🍎

// 分配数组中剩下的元素,通过在最后一个变量前加 ... 标记，这个意思是分配数组中剩下的所有元素给 rest 变量。
let [first, ...rest] = breakfast()
console.log(first) // 🎂
console.log(rest) // [ '☕️', '🍎' ]