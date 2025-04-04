declare module "lodash" {
  export function join(arr: string[], separator: string): string;
}

// 给变量编写自定义类型声明
declare const websiteName: string;
declare const websiteUrl: string;

// 给函数编写自定义类型声明
declare function getWebsiteInfo(): string;

// 给类编写自定义类型声明
declare class Person {
  constructor(public name: string, public age: number);
}

// 给文件编写自定义类型声明
declare module "*.png";

// 给第三方库编写自定义类型声明
declare namespace $ {
  export function ajax(settings?: any): void;
}
