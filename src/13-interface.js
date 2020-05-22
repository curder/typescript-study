var Person = /** @class */ (function () {
    function Person(config) {
        this.config = config;
    }
    return Person;
}());
// 约束参数类型，是否与接口定义一致，如果不一致(多传或者少传)则会抛出错误
new Person({
    name: "curder",
    age: 29,
});
// 类实现接口，必须实现接口定义的所有方法
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log("i eat grass");
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log("i eat meat");
    };
    return Tiger;
}());
