---
translateHelp: true
---

# Use Image


## 图片路径问题

项目中使用图片有两种方式，

1. 先把图片传到 cdn，然后在 JS 和 CSS 中使用图片的绝对路径
2. 把图片放在项目里，然后在 JS 和 CSS 中通过相对路径的方式使用

前者不会有任何问题；后者，如果在 JS 中引用相对路径的图片时，在发布时会根据 publicPath 绝对引入路径，所以就算没有开启 dynamicImport 时，也需要注意 publicPath 的正确性。

## Base64 编译

通过相对路径引入图片的时候，如果图片小于 10K，会被编译为 Base64，否则会被构建为独立的图片文件。

10K 这个阈值可以通过 [inlineLimit 配置](TODO)修改。

## 使用 CDN

TODO
