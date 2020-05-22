// 析构表达式：通过表达式将对象或数组拆解成任意数量的变量

function getStock() {
    return {
        name: "IBM",
        price: 100,
    }
}

// @ts-ignore
var {name: neName, price} = getStock()

console.log(newName)
console.log(price)

// 从数组中获取
var arr1 = [1, 2, 3, 4]
var [n1, , n3, ] = arr1
console.log(n1)
console.log(n3)

var [n1,n2,...others] = arr1
console.log(others)
