import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习 Typescript",
  description:
    "TypeScript 通过类型系统增强 JavaScript 的可维护性和可扩展性，适用于大型项目开发，同时兼容 ECMAScript 标准。",
  themeConfig: {
    logo: {
      src: "/images/logo48x48.svg",
      alt: "Typescript Logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    outline: {
      level: "deep",
      label: "当前目录",
    },
    lastUpdated: {
      text: "最后更新",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    sidebar: [
      {
        text: "",
        items: [
          { text: "基础", link: "/hello-typescript" },
          { text: "数据类型", link: "/data-types" },
          { text: "语法", link: "/grammar" },
          { text: "函数类型", link: "/function-types" },
          { text: "面向对象", link: "/object-oriented" },
          { text: "泛型", link: "/generics" },
          { text: "模块化", link: "/modules" },
          { text: "类型体操", link: "/type-challenges" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/curder/typescript-study" },
    ],
  },
});
