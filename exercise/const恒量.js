// const是用来声明常量的。一旦声明，其值就不能改变。
// const的作用域与let命令相同：即只在声明所在的块级作用域内有效。

{
  const test = '🍌';
  console.log(test);
  test = '🍉';
  console.log(test);
}
const test = '🌰';
console.log(test)
