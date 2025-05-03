// 默认情况下 inputEl: HTMLElement | null
// 通过 ! 符号来告诉 TypeScript inputEl 不会是 null
// 这是一种非空断言操作符（是 TypeScript 的一个特性）
// const inputEl = document.getElementById('user-name')!

// as HTMLInputElement 显示地告诉 TypeScript inputEl 的类型
// 推断出类型时，都要承担一定的风险
// TypeScript 不会抱怨代码，但是可能在运行时出错
const inputEl = document.getElementById('user-name') as HTMLInputElement | null

// 通常使用if 可以使类型缩小
// if (!inputEl) {
// throw new Error('inputEl is null')
// }

// 经过上述判断后，inputEl 的类型为 HTMLElement
// inputEl: HTMLElement
// ! 还可以用于函数参数
// console.log(inputEl!.value)

// 还可以在潜在空值的地方使用 ？
// ？ 是可选链操作符（是 JavaScript 标准操作符）
console.log(inputEl?.value)
