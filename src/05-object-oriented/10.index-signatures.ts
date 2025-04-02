type ICollection = {
  // 索引签名
  [key: number]: string | number;
  length: number;
};

function iteratorCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
}

const tuple: [string, number] = ["Jack", 18];
const array: string[] = ["Jack", "Tom"];

iteratorCollection(tuple); // Jack 18
iteratorCollection(array); // Jack Tom

export {};
