// 使用枚举，是一种TypeScript 独有的功能
// 更好的处理常量，提高代码的可读性
// enum ROLE {
//   ADMIN, // 0
//   EDITOR, // 1
//   GUEST, // 2
// }

// let userRole: ROLE = 0 // 0是允许的
// let userRole: ROLE = 5 // 5是不被允许的
// let userRole: ROLE = ROLE.ADMIN

// userRole = ROLE.EDITOR

// 了解枚举之外的替代方案
// 使用union 类型，并结合字面量类型(literal types)
// 左边内容实际上不是值而是类型
// let userRole: 'admin' | 'editor' | 'guest' = 'admin'

// type 关键字设置一个类型定义
type ROLE = 'admin' | 'editor' | 'guest'

// 也可以用在对象类型的类型定义
type User = {
  name: string
  age: number
  role: ROLE
  permissions: string[]
}

let userRole: ROLE = 'admin'

userRole = 'editor'

// 元祖中使用字面量
let possibleResults: [1 | -1, 1 | -1] // [1, -1]

possibleResults = [1, -1]
// possibleResults = [5, -1] // 5是不被允许的

// 复制粘贴并不是最好的方法，如果userRole处的类型变更，这里也需要变更
// 可以使用TypeScript 提供的type 关键字
function access(role: ROLE) {
  // ...
}
