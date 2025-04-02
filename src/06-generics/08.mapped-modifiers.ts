// 映射类型 - 修饰符
type MappedPerson<T> = {
  // 使用索引签名拷贝属性
  [P in keyof T]: T[P];
};
type MappedOptionalPerson<T> = {
  // 添加 readonly 和可选参数的修饰符
  readonly [P in keyof T]?: T[P];
};

type MappedRequiredPerson<T> = {
  // 删除 readonly 和可选参数的修饰符
  -readonly [P in keyof T]-?: T[P];
};

interface IPerson {
  readonly name: string;
  age: number;
  height?: number;
  address?: string;
}

type IPersonMapped = MappedPerson<IPerson>;
type IPersonOptional = MappedOptionalPerson<IPerson>;
type IPersonRequired = MappedRequiredPerson<IPerson>;
