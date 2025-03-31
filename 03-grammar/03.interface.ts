// 类型别名
type pointType = {
  x: number;
  y: number;
  z?: number;
};

// 接口声明
interface pointInterface {
  x: number;
  y: number;
  z?: number;
}

function printCoordinate(pt: pointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z) {
    console.log("The coordinate's z value is " + pt.z);
  }
}
