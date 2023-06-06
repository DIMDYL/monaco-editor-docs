import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "指南", icon: "discover", link: "/editor/declare.md" },
  {
    text: "样例",
    icon: "creative",
    link: "/example/"
  },
  {
    text: "自定义语言",
    icon: "creative",
    prefix: "/language/",
    children: [
      {
        text: "yaml",
        icon: "creative",
        link: 'custom-yaml.md'
      },
    ],
  },
  { 
    text: 'Monaco-editor',
    children: [
      {
        text: '官方仓库',
        link: 'https://github.com/microsoft/monaco-editor' 
      },
      {
        text: '官方文档',
        link: 'https://microsoft.github.io/monaco-editor/' 
      }
    ]
  }
]);