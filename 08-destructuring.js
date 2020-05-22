// 析构表达式：通过表达式将对象或数组拆解成任意数量的变量
function getStock() {
    return {
        name: "IBM",
        price: 100
    };
}
// @ts-ignore
var _a = getStock(), neName = _a.name, price = _a.price;
console.log(newName);
console.log(price);
// 从数组中获取
var arr1 = [1, 2, 3, 4];
var n1 = arr1[0], n3 = arr1[2];
console.log(n1);
console.log(n3);
var n1 = arr1[0], n2 = arr1[1], others = arr1.slice(2);
console.log(others);
