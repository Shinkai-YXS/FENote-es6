'use strict';

// 通过var定义的变量，作用域是整个封闭函数，是全域的。通过let定义的变量，作用域是在块级或是子块中.
func();
function func() {
  if (true) {
    var test = '🍎';
  }
  console.log(test);

  if (true) {
    let test1 = '🍊';
  }
  console.log(test1);
}
console.log(test);