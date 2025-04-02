# Typescript 泛型

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```typescript
function identify<T>(arg: T): T {
  return arg;
}

console.log(identify("Jack"));
console.log(identify(18));
console.log(identify({ name: "Jack", age: 18 }));
```

> [!NOTE]
>
> 泛型作用于类型，而不是值。

## 类型参数化

通过实现一个 `useState` 函数，使用泛型的类型参数化来模拟 React 中的 `useState` 函数。

```typescript
function useState<T>(initialState: T): [T, (state: T) => void] {
  let state = initialState;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}

const [counter, setCounter] = useState(0);
const [message, setMessage] = useState("hello");
const [banners, setBanners] = useState<any[]>([]);
```

当然，泛型也支持多个类型的参数化：

```typescript
function foo<T, E>(arg1: T, arg2: E): [T, E] {
  return [arg1, arg2];
}

console.log(foo(1, "Jack"));
console.log(foo("Jack", 1));
```

在开发中，可能会看到一些常用的名称缩写：

- `T` 表示 Type
- `E` 表示 Element
- `K` 表示 Key
- `V` 表示 Value
- `N` 表示 Number
- `U` 表示 Unknown
- `O` 表示 Object

## 泛型接口

在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的类型。

```typescript
interface IUser<T> {
  name: T;
  age: number;
  slogan: T;
}

const user1: IUser<string> = {
  name: "Jack"
  age: 18,
  slogan: "Hello World",
```

也可以给接口的属性指定默认类型：

```typescript
interface IUser<T = string> {
  name: T;
  age: number;
  slogan: T;
}

const user1: IUser = {
  name: "Jack"
  age: 18,
  slogan: "Hello World",
}
```

## 泛型类

在定义类时，为类中的属性定义泛型类型，在使用类时，再指定具体的类型。

```typescript
class Point<T = number> {
  constructor(public x: T, public y: T) {}
}

const p1 = new Point(1, 2);
const p2 = new Point<string>("1", "2");
console.log(p1);
console.log(p2);
```

## 泛型约束

有时候希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中：

### `extends`

使用 `extends` 关键字来约束泛型的类型，使其只能是某个类型的子类型：

```typescript
interface ILength {
  length: number;
}
// 使用 extens 关键字来约束泛型的类型
function getLength<T extends ILength>(arg: T): T {
  return arg;
}

getLength("aaa");
getLength([1, 2, 3]);
getLength({ length: 1 });
```

### `keyof`

使用 `keyof` 关键字来约束泛型的类型，使其只能是对象的属性：

```typescript
function getProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const obj = {
  name: "Jack",
  age: 18,
  height: 180,
};

const name = getProperty(obj, "name");
const age = getProperty(obj, "age");
const height = getProperty(obj, "height");
// const weight = getProperty(obj, "weight"); // 类型“"weight"”的参数不能赋给类型“"name" | "age" | "height"”的参数。
```

## 映射类型 Mapped Types

有时一个类型需要基于另外一个类型，但是又不想拷贝一份，此时可以使用映射类型。

映射类型使用了 PropertyKey 联合类型的泛型实现，其中 PropertyKey 多是通过 `keyof` 操作符创建，然后遍历键名创建类型。

```typescript
type MappedPerson<T> = {
  // 使用索引签名
  [P in keyof T]: T[P];
};

interface IPerson {
  name: string;
  age: number;
}

type newPerson = MappedPerson<IPerson>;
const p: newPerson = {
  name: "Jack",
  age: 18,
};
console.log(p.name); // Jack
console.log(p.age); // 18
```

### 映射符号

在使用映射类型时，有两个额外的修饰符可能会用到：

- 一个是 `readonly`，用于设置属性只读；
- 一个是 `?` ，用于设置属性可选；

可以通过前缀 `-` 或者 `+` 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 `+` 前缀。

```typescript
type MappedOptionalPerson<T> = {
  // 使用索引签名,添加可选和只读属性
  readonly [P in keyof T]?: T[P];
};

type MappedRequiredPerson<T> = {
  // 使用索引签名，删除可选和只读属性
  -readonly [P in keyof T]-?: T[P];
};

interface IPerson {
  readonly name: string;
  age: number;
  height?: number;
  address?: string;
}

type IPersonOptional = MappedOptionalPerson<IPerson>;
type IPersonRequired = MappedRequiredPerson<IPerson>;
```
