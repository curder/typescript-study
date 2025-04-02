// 类型别名，使用 type 关键字来定义类型别名
type idType = number | string;

function printId(id: idType) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 打印坐标
type pointType = { x: number; y: number; z?: number };
function printCoord(pt: pointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z) {
    console.log("The coordinate's z value is " + pt.z);
  }
}
