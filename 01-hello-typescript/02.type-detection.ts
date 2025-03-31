function getLength(args: string | string[]): number {
  return args.length;
}

console.log(getLength("abc"));
console.log(getLength(["a", "b", "c"]));

export {};
