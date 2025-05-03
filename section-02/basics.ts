// let userName

// 非标准JavaScript，而是现实类型赋值带有冒号和类型名称（也称为类型注解）
// 编译后的JavaScript不再有类型声明
let userName: string
// 这里变量下面没有三个点，因为TypeScript能够根据分配给变量的值来推断类型
let userAge = 38

userName = 'Tom'
// userAge = '34' // 这里会报错，因为userAge是number类型

// 在函数中使用类型注解
function add(a: number, b = 5) {
  return a + b
}

add(10)
// add('10') // 这里会报错，因为传入的参数不是number类型
add(10, 20)
// add(10, '20') // 这里会报错，因为传入的参数不是number类型
