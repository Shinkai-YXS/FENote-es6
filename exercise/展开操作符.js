'use strict';
let fruits = ['🍎', '🍌'],
    // 拼接数组
    foods = ['🎃', '🍅', '🍆', '🌶', ...fruits]

console.log(fruits) // [ '🍎', '🍌' ]
// 解构
console.log(...fruits) // 🍎 🍌

console.log(foods) // [ '🎃', '🍅', '🍆', '🌶', '🍎', '🍌' ]
// 解构
console.log(...foods) // 🎃 🍅 🍆 🌶 🍎 🍌


// rest 操作符（一般用在函数的参数里头），参数数量不定时使用
// ...foods 表示函数除了指定 dessert,drink 之外，其余参数的值都会放在一个叫 foods 的数组中
function breakfast(dessert, drink, ...foods) {
  console.log(dessert, drink, foods) // 🎂 ☕️ [ '🍊', '🍎', '🌰' ]
  console.log(dessert, drink, ...foods) // 🎂 ☕️ 🍊 🍎 🌰
}

breakfast('🎂', '☕️', '🍊', '🍎', '🌰')


// 解构参数
function breakfast1(dessert, drink, {location, restaurant} = {}) {
  console.log(dessert, drink, location, restaurant) // 🎂 ☕️ 成都 早餐店
}
breakfast1('🎂', '☕️', {location: '成都', restaurant: '早餐店'})