// unknown 类型

// 通常与函数结合使用
// unknown 是一个类型安全的any
function process(val: unknown) {
  // ...
  // 使用 any 时，编译器不会检查类型
  // val.log() // 不会报错

  // unknown 的作用是迫使开发者在使用之前进行类型检查
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log()
  }
}
