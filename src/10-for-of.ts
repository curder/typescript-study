// forEach()、for-in 和 for-of

let myArr = [1, 2, 3, 4];
myArr.desc = "description";

// forEach
console.log("========== forEach ==========")
myArr.forEach((item) => console.log(item))


// for-in
console.log("========== for-in ==========")
for(let n in myArr) {
    console.log(myArr[n])
}

// for-of
console.log("========== for-of ==========")
for(let item of myArr) {
    console.log(item)
}
