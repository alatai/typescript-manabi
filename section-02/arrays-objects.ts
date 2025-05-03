let hobbies = ['Sports', 'Cooking']

// TypeScript 可以正确推断出 hobbies 的类型
// hobbies.push(100) // 数字类型不能添加到 hobbies 数组中

// 显示声明，存储在用户数组中的值类型是字符串
// let users: string[]
// 使用union 类型
// let users: (string | number)[] // 数组中可以存储字符串和数字
// 另一种写法（推荐）
let users: Array<string | number> // 数组中可以存储字符串和数字

users = ['Max', 36]
users = [5, 1]

// TypeScript 中还有一个特殊的数组类型，叫做元组（Tuple）
// 元组是一个固定长度的数组，数组中的每个元素可以是不同的类型
// let possibleResults: number[] // [1, -1]
// 一个包含两个元素的元组，第一个元素是数字，第二个元素也是数字
let possibleResults: [number, number] // [1, -1]

possibleResults = [1, -1]
// possibleResults = [5, 10, 12] // 元组的长度是固定的，不能添加其他元素

// 对象类型
// 同样TypeScript会推断出对象属性的类型
// 也可以显示声明对象的类型
let user: {
  name: string
  age: number | string // 使用union 类型
  hobbies: string[]
  role: {
    description: string
    id: number
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5,
  },
}

// val 是一个空对象，但是赋值字符串还是有效的
// 在 JavaScript 中，空对象作为一个类型时，实际上只是指定未定义或空的值
let val: {} = 'some text'
// let val: {} = null // 类型 null 不可赋值给类型
// let val: {} = undefined // 同样使用与 undefined

// 当需要一个对象类型时，使用 {} 是不推荐的
// let data: {}
// 使用Record 类型替代，它是一个TypeScript 内置的类型，告诉 TypeScript 这是一个对象类型
// 相当于 key 是字符串，value 是数字或字符串
let data: Record<string, number | string>

data = {} // 可以是一个空对象

// 也可以是一个对象
data = {
  entry1: 1,
  entry2: 'some string',
}
