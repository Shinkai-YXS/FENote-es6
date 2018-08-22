let dessert = '🎂',
    drink = '☕️'
// 普通的写法：
let breakfast = '今天的早餐是 ' + dessert + ' 和 ' + drink
console.log(breakfast) // 今天的早餐是 🎂 和 ☕️
// es6 写法：
breakfast = `今天的早餐是 ${dessert} 和 ${drink}`
console.log(breakfast) // 今天的早餐是 🎂 和 ☕️