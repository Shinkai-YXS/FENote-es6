'use strict';
let dessert = '🎂',
    drink = '☕️'
// 普通的写法：
let breakfast = '今天的早餐是 ' + dessert + ' 和 ' + drink
console.log(breakfast) // 今天的早餐是 🎂 和 ☕️
// es6 写法：
breakfast = `今天的早餐是 ${dessert} 和 ${drink}`
console.log(breakfast) // 今天的早餐是 🎂 和 ☕️

// 一些例子
let x = 1
let y = 2
console.log(`${x} + ${y} = ${x + y}`) // 1 + 2 = 3
console.log(`${x} + ${y * 2} = ${x + y * 2}`) // 1 + 4 = 5

let obj = {x: 1, y: 2}
console.log(`${obj.x} + ${obj.y} = ${obj.x + obj.y}`) //1 + 2 = 3

// 调用函数
function fn() {
  return "Hello Shinkai"
}
console.log(`调用函数 ${fn()}`) // 调用函数 Hello Shinkai

// 大括号中的字符串会原样输出
console.log(`Hello ${'Shinkai'}`) // Hello Shinkai