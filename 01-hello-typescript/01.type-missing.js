function getLength(args) {
  return args.length;
}

console.log(getLength("abc")); // 3
console.log(getLength(["a", "b", "c"])); // 3

console.log(getLength(123)); // undefined
console.log(getLength({})); // undefined
console.log(getLength(undefined)); // TypeError: Cannot read properties of undefined (reading 'length')
console.log(getLength(null)); // TypeError: Cannot read properties of null (reading 'length')
console.log(getLength()); // TypeError: Cannot read properties of undefined (reading 'length')
