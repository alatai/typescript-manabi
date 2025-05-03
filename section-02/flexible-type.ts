// 可以添加一个显示类型，尽管可以推断出类型
// any 类型可以赋值给任何类型
// 但是在使用 any 类型时，TypeScript 不会进行类型检查
// (使用 any 类型有违背与 TypeScript 的初衷)
// let age: any = 36

// 更好的做法是使用 union 类型
let age: number | string = 36

age = '36'
// age = true
// age = {} 
// age = []
