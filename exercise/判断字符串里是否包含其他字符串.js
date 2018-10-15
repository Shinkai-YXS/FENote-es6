'use strict';

let dessert = '🎂',
  drink = '☕️'

let breakfast = `今天的早餐是 ${dessert} 和 ${drink}`

console.log(
  // 字符串是否是以特定的字符开头，比如今天
  breakfast.startsWith('今天'), // true
  // 字符串是否是以某一个字符串结尾的
  breakfast.endsWith('☕️'), // true
  // 字符串是否包含某一个字符串
  breakfast.includes('早餐啊'), // false
  // 创建重复字符串
  breakfast.repeat(2) //'今天的早餐是 🎂 和 ☕️今天的早餐是 🎂 和 ☕️'
)