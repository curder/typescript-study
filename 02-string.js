var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// 多行字符串
var muitlpartString = "a\nb\nc";
console.log(muitlpartString);
// 字符串模版
// 在一个字符串中插入多个变量或者表达式
var myString = "curder";
function getString() {
    return "curder";
}
console.log("hello " + myString);
console.log("hello " + getString());
// 自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = "curder";
var getAge = function () {
    return 29;
};
test(__makeTemplateObject(["Hello, my name is ", ", I'm ", ";"], ["Hello, my name is ", ", I'm ", ";"]), myName, getAge);
