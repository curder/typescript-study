type pointType = { x: number; y: number };

// 对象类型和函数类型结合使用
function printCoordinate(pt: pointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordinate({ x: 3, y: 7 });

export {};
