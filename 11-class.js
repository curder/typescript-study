// 类是 TypeScript 的核心，使用 TypeScript 开发时，大部分代码都是写在类中
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的定义
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log("I'm eating");
    };
    return Person;
}());
var p1 = new Person();
p1.name = "curder";
p1.eat();
// 构造函数 constructor
var PersonConstructor = /** @class */ (function () {
    function PersonConstructor(name) {
        console.log("constructor for:", name);
    }
    return PersonConstructor;
}());
new PersonConstructor("Demo");
// 类的继承 extends、super
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this); // 调取父类方法
        console.log("i am working from Employee class");
    };
    return Employee;
}(Person));
var p2 = new Employee();
p2.name = "curder";
p2.eat();
p2.work();
