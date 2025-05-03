// 使用枚举，是一种TypeScript 独有的功能
// 更好的处理常量，提高代码的可读性
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["EDITOR"] = 1] = "EDITOR";
    ROLE[ROLE["GUEST"] = 2] = "GUEST";
})(ROLE || (ROLE = {}));
// let userRole: ROLE = 0 // 0是允许的
// let userRole: ROLE = 5 // 5是不被允许的
var userRole = ROLE.ADMIN;
userRole = ROLE.EDITOR;
