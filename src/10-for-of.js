// forEach()、for-in 和 for-of
var myArr = [1, 2, 3, 4];
myArr.desc = "description";
// forEach
console.log("========== forEach ==========");
myArr.forEach(function (item) { return console.log(item); });
// for-in
console.log("========== for-in ==========");
for (var n in myArr) {
    console.log(myArr[n]);
}
// for-of
console.log("========== for-of ==========");
for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
    var item = myArr_1[_i];
    console.log(item);
}
