// null 类型
// 除了  null 以外的值都不允许赋值给 null 类型的变量
let a: null | string

a = 'Hi'
// ...
// 例如在重置操作中可能会有帮助
a = null

// undefined 类型
// 除了 undefined 以外的值都不允许赋值给 undefined 类型的变量
let b: undefined | string

b = 'Hi'
// ...
// 例如在重置操作中可能会有帮助
b = undefined
