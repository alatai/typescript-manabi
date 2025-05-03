// 更加了解函数

// 添加返回类型
// 对于函数来说，TypeScript 可以推断出返回值的类型
// function add(a: number, b: number): number {
function add(a: number, b: number) {
  return a + b
}

// 如果没有返回值，TypeScript 会推断为 void
function log(message: string): void {
  console.log(message)
}

// 返回类型为void，但是可以声明为never
// 这是 TypeScript 提供的一个特殊类型
// never 表示这个函数不会有返回值（例如，抛出异常或者死循环）
// 通过显示设置，可以确保在使用函数时不会意外地将返回值存储到变量或常量中
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage)
  throw new Error(errorMessage)
}

const logged = logAndThrow('Error message')
// logged. // 这里会报错，因为 logged 的类型是 never

// 可以将函数值存储在变量或常量中
const logMsg = (msg: string) => {
  console.log(msg)
}

// cb 是一个参数，它希望得到一个函数作为值
// TypeScript 提供了一个内置Function 类型
// function performJob(cb: Function) {

// 但是更好的做法是使用函数类型来定义参数的类型
// 这样可以更好地描述函数的参数和返回值
function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done')
}

performJob(logMsg)

type User = {
  name: string
  age: number
  greet: () => string
}

let user: User = {
  name: 'John',
  age: 30,
  greet: () => {
    return `Hello, my name is ${user.name}`
  },
}

user.greet() // Hello, my name is John
