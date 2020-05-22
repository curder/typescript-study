// 接口(interface)：用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
interface IPerson {
    name: string
    age: number
}

class Person {
    constructor(public config: IPerson) {
    }
}

// 约束参数类型，是否与接口定义一致，如果不一致(多传或者少传)则会抛出错误
new Person({
    name: "curder",
    age: 29,
})

// 使用接口声明方法
interface Animal {
    eat()
}

// 类实现接口，必须实现接口定义的所有方法
class Sheep implements Animal {
    eat() {
        console.log("i eat grass")
    }
}

class Tiger implements Animal {
    eat() {
        console.log("i eat meat")
    }
}

