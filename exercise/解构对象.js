'use strict';

// 解构对象
function breakfast() {
  return {name: 'Shinkai', age: '23', rests: {hobby: 'Photo', work: 'Software Developer'}}
}

// 从对象中提取数据
const {name: name, age: age, rests: rests} = breakfast()
console.log(name) // Shinka
console.log(age) // 23
console.log(rests) // { hobby: 'Photo', work: 'Software Developer' }

// 提取嵌套值
const {rests: {hobby}} = breakfast()
console.log(hobby) // Photo

// 数据缺失时的默认值
const {home} = breakfast()
console.log(home) // undefined

const { workPlace = 'Unknown'} = breakfast()
console.log(workPlace) //Unknown