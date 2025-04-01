// 枚举类型
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

const d1: Direction = Direction.Up;
const d2: Direction = Direction.Down;
const d3: Direction = Direction.Left;
const d4: Direction = Direction.Right;
console.log(d1, d2, d3, d4); // 1 2 3 4

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Turn Up");
      break;
    case Direction.Down:
      console.log("Turn Down");
      break;
    case Direction.Left:
      console.log("Turn Left");
      break;
    case Direction.Right:
      console.log("Turn Right");
      break;
    default:
      console.log("Turn Around");
      break;
  }
}

turnDirection(Direction.Up); // Turn Up
turnDirection(Direction.Down); // Turn Down
turnDirection(Direction.Left); // Turn Left
turnDirection(Direction.Right); // Turn Right

export {};
