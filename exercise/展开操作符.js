
let fruits = ['🍎', '🍌'],
    // 拼接数组
    foods = ['🎃', '🍅', '🍆', '🌶', ...fruits]

console.log(fruits) // [ '🍎', '🍌' ]
// 解构
console.log(...fruits) // 🍎 🍌

console.log(foods) // [ '🎃', '🍅', '🍆', '🌶', '🍎', '🍌' ]
// 解构
console.log(...foods) // 🎃 🍅 🍆 🌶 🍎 🍌