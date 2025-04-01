# Typescript 泛型

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```Typescript
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
