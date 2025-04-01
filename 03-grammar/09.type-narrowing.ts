// 类型缩小

// 1. typeof，最常用的类型缩小
function printId(id: number | string) {
  if (typeof id === "string") {
    // 在这个分支中，id 的类型被收窄为 string
    console.log(id.toUpperCase());
  } else {
    // 否则在这个分支中，id 的类型被收窄为 number
    console.log(id);
  }
}

// 2. 平等缩小，方向的类型判断
type Direction = "left" | "right" | "up" | "down";
function getDistance(direction: Direction) {
  switch (direction) {
    case "left":
      // 在这个分支中，direction 的类型被收窄为 "left"
      return 1;
    case "right":
      // 在这个分支中，direction 的类型被收窄为 "right"
      return 2;
    case "up":
      // 在这个分支中，direction 的类型被收窄为 "up"
      return 3;
    case "down":
      // 在这个分支中，direction 的类型被收窄为 "down"
      return 4;
    default:
      // 在这个分支中，direction 的类型被收窄为 never
      const _exhaustiveCheck: never = direction;
      return _exhaustiveCheck;
  }
}

// 3. instanceof，判断对象的类型
function printDate(date: string | Date) {
  if (date instanceof Date) {
    // 在这个分支中，date 的类型被收窄为 Date
    console.log(date.toUTCString());
  } else {
    // 否则在这个分支中，date 的类型被收窄为 string
    console.log(new Date(date).toUTCString());
  }
}

// 4. in，判断对象的属性是否存在
type Fish = { swim: () => void }; // 鱼
type Bird = { fly: () => void }; // 鸟
/**
 * 移动动物
 * @param animal 动物
 * @returns
 */
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // 在这个分支中，animal 的类型被收窄为 Fish
    return animal.swim();
  } else {
    // 否则在这个分支中，animal 的类型被收窄为 Bird
    return animal.fly();
  }
}

move({ fly: () => {} });
move({ swim: () => {} });

export {};
