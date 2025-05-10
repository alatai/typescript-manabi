const userName = 'Max'
// userName = 'Manu'

// let age = 30
// age = 29

// function add(a: number, b: number) {
//   let result
//   result = a + b
//   return result
// }

// console.log(result)

// if (age > 20) {
// 对于 var 实际上只有全局和函数作用域
// 有了 var， JavaScript 除了函数和全局之外就不知道其他作用域了
// var isOld = true
// let 和 const 引入了一个新的概念，块作用域
// 意味着变量或常量总是可以在定义它的块或任何下级块中使用
// let isOld = true
// }

// TypeScript 会在编译时检查作用域
// console.log(isOld) // 这里会报错，isOld 只在 if 语句块内有效
// 但是在 JavaScript 中是可以的
// console.log(isOld)

// 为函数编写表达式，使用箭头函数
// const add = (a: number, b: number) => {
//   return a + b
// }

// console.log(add(2, 3))

// 也可以简写成一行
// 但是这时如果使用类型分配，它将不起作用
// 这里的类型分配是给函数本身的，而不是给返回值的
// const printOutput = output: string | number  => console.log(output)
// 使用一下写法，给常量赋值函数类型
const printOutput: (a: number | string) => void = (output) =>
  console.log(output)

// printOutput(add(5, 10))

const button = document.querySelector('button') // 这里的 button 是一个 HTML 元素

if (button) {
  // 不需要使用类型断言，因为 TypeScript 会自动推断add监视器将向我们提供什么
  // 这将是一个事件对象，TypeScript 能够推断出这一点
  button.addEventListener('click', (event) => {
    console.log(event) // 这里的 event 是一个 MouseEvent 对象
    console.log('Clicked!')
  })
}

// Spread Operator (...)
const hobbies = ['Sports', 'Cooking']
// 将现有数组拓展到该数组中
const activeHobbies = ['Hiking', ...hobbies]

// push 会把 hobbies 作为一个新的数组添加到 activeHobbies中，成为一个新的嵌套数组
// 可以添加每一个元素
// activeHobbies.push(hobbies[0], hobbies[1])

// 使用 ... 运算符
// 它告诉 JavaScript 取出数组后面的所有元素，并将它们作为一个值列表添加，而不是作为一个数组
activeHobbies.push(...hobbies)

// 不仅作用于数组，也作用于对象
const person = {
  firstName: 'Max',
  age: 30,
}

// 实际上是在把内存中的指针复制到新的变量中
// 并没有真正创建该对象的副本
// cons copiedPerson = person

// 创建一个真实的副本，可以对对象使用扩展操作符
const copiedPerson = {
  ...person,
}

// Rest Parameters ...
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return (curResult += curValue)
  }, 0)
}

const addedNumbers = add(5, 10, 2, 3, 7)
console.log(addedNumbers)

// 数组解构
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]

// 使用数组解构可以简化代码
// 元素是按顺序取出的（因为数组是一个有序列表）
const [hobby1, hobby2, ...remainingHobbies] = hobbies
console.log(hobby1)
console.log(hobby2)
console.log(remainingHobbies)

// 也可以应用到对象上
// 如果想覆盖该名称，可以使用冒号
const { firstName: newName, age } = person
