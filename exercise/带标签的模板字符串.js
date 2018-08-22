let dessert = '🎂',
  drink = '☕️'

breakfast = kitchen`今天的早餐是 \n ${dessert} 和 ${drink}`

function kitchen( strings, ...values) {
  console.log(strings) // [ '今天的早餐是 \n ', ' 和 ', '' ]
  console.log(values) // [ '🎂', '☕️' ]
  let result = ''
  for (var i = 0; i < values.length; i ++) {
    result += strings[i];
    result += values[i];
  }
  result += strings[strings.length - 1];
  return result
}

console.log(breakfast)
// 今天的早餐是
//  🎂 和 ☕️
