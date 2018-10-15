'use strict';

// 箭头函数(定义了一个 breakfast 的函数，能够接受 dessert 并返回 dessert 的函数)
let breakfast = dessert => dessert;
// 转换为普通函数
let breakfast1 = function breakfast(dessert) {
  return dessert;
}

// 箭头函数多个参数
let a = (b,c,d) => b + c + d;
// 转换为普通函数
let a1 = function a(b, c, d) {
  return b + c + d;
}

//箭头函数，无参数时，需要在箭头前加上小括号
let aaa = () => 'Hellow Shinkai'

// 箭头函数体有多条语句时，需要用到大括号
let bbb = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 0;
}

// 返回对象时，需要用小括号抱起来，因为大括号被占用解释为代码块了
let getUserInfo = arr => {
  return ({
    name: 'Shinkai',
    age: '23'
  })
}

// 作为数组排序回调
let arr = [1, 9, 2, 4, 3, 8 , 0].sort((a, b) => {
  if (a - b > 0) {
    return 1;
  }
  return -1;
})


console.log(arr)

console.log(getUserInfo([]))

