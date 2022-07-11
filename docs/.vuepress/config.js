module.exports = {
  title: "前端学习笔记",
  description: "Just playing around",
  base: "/learn-notes/", // 网站部署到 https://foo.github.io/bar/下访问
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "vue3", link: "/vue3/" },
      { text: "webpack", link: "/webpack/" },
      { text: "node", link: "/node/" },
      { text: "qiankun", link: "/qiankun/" },
    ],
    sidebar: {},
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir", // ![Image from alias](~@alias/image.png)
      },
    },
  },
}
