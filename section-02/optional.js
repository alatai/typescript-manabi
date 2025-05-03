// 可选值类型
// 通过问号来定义可选值类型
function generateError(msg) {
    throw new Error(msg);
}
// ?? 双问号运算符
// 1. 如果值为 null 或 undefined，则返回右侧的值
// 2. 否则返回左侧的值
var input = '';
// 使用 || 时，如果 input 为 falsy 值，则会返回右侧的值
// 例如：0、''、false、NaN
var didProvideInput = input || false;
console.log(didProvideInput); // false
// 使用 ?? 时，如果 input 为 null 或 undefined，则会返回右侧的值
// 否则返回左侧的值
var didProvideInput2 = input !== null && input !== void 0 ? input : false;
console.log(didProvideInput2); // ''
// 3. ?? 运算符的优先级高于 || 运算符
// 4. ?? 运算符的优先级低于 ? 运算符
// 5. ?? 运算符的优先级高于 && 运算符
