/***
 *  Iterators 迭代器
 *  特点：
 *  每次执行的时候会返回一个对象，对象里面有两样东西，
 *  一个是 value ，表示返回的值
 *  一个就是 done ，它的值是一个布尔值，表示还有没有可以迭代的东西，如果没有了，这个 done 的值就会是 true，意思就是完成了迭代
 *
 *
 *  另外 Iterators 里面，还应该有一个叫 next 的方法，每次执行这个方法就会返回一个对象，对象里的东西就是 value 还有 done，如果没有迭代的东西了，执行 next 方法以后，value 的值就会是 undefined，另外 done 的值就会是 true。
 */

// {value: xx, done: true/false}
function chef(foods) {
  let i = 0
  return {
    next() {
      let done = (i >= foods.length)
      // 如果 done 的值是 true 的话 .. value 的值就会是 undefined ..
      let value = !done ? foods[i++] : undefined
      return {
        value: value,
        done: done
      }
    }
  }
}


let yxs = chef(['西红柿', '炒鸡蛋'])
console.log(yxs.next()) // { value: '西红柿', done: false }
console.log(yxs.next()) // { value: '炒鸡蛋', done: false }
console.log(yxs.next()) // { value: undefined, done: true }
