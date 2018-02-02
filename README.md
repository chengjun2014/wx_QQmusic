# 微信小程序实现wap移动版 QQ 音乐播放器
> 微信小程序练习demo，只能clone代码本地电脑或手机浏览无法发布上线，因为需要审核啊；


## 又是QQ音乐播放器？！
- 接口是现成的在线接口，能跟实际效果保持一致；
- 不用自己造假数据，大批假数据容易出错；
- 数据结构符合生产环境真实数据，自己造可能都是用最简单的数据结构跟实际差距太大；
- 不做这做啥呢，总的参考一个产品啊（😂。。。。)，之前用vue实现过一版。大体流程和页面结构比较熟悉；
- wap版QQ音乐播放器改版，请以Vue版案例为准[点击查看](http://dabaipm.cn/qq_music/index.html)


## 坑
- 单行文本溢出省略，需要父级元素设置属性`overflow hidden`；
- `rich-text`相当难用，不知道有没有什么技巧，多标签嵌套，支持字符串格式，不过官方不提倡；
- `HTML Entities` &#****; 转码问题 [参考文档](https://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript)；
- 不支持本地图片需要 `base64` 编码或使用 image 标签，这个比较恶心啊；
- `navigationBar` 不能修改 `font-size` 样式；
- 没有Vue插件丰富，比Vue好的地方是同一路由页面不会重复载入；
- input 高度太小（20px）聚焦时placeholder莫名其妙的往上跳了一点点，24px不跳动；
- 代码包大小上限为 2048 kb，实际项目需要删除静态文件比如 演示GIF demo.gif；
- input 如何做数据绑定？已解决参考搜索页面输入框源码；
- 字符串拼接 `src="strA{{zhida.singermid}}strB"` 无需使用 `+` 号，注意被拼接字符串放在双引号内；
- wxml中计算后的模板数据不支持`toFixed`函数格式化，需要引入[wxs模板](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxs/01wxs-module.html)或标签封装一个函数，export出去；
- 组件系统有点坑，先不用组件实现一下，后续有时间再拆分组件吧。事件传递比较麻烦，每次需要增加一大堆路径和文件；
- currentColor 这是一个神奇的CSS3属性;
- template 模板标签数组参数传递(官网没有给实例，自己摸索出来的);
- 小程序不支持before、after伪元素；
- 小程序浏览器调试[工具](https://chemzqm.github.io/wept/#/home);
- wxml无法处理时间戳格式化，只能在js里面处理；
- 不要在wxml中拼接图片地址，控制台会报错，虽不影响功能但是很难看，js拼好统一解析；
- vkey 不知道从哪里获取，音频和视频无法构造资源地址；
- 不能解析HTML标签，需要转义 https://github.com/icindy/wxParse



## 演示图片
![](https://github.com/chengjun2014/f_grid/blob/master/demo.gif)

## 参考文档
[小程序官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/)

[微信小程序架构分析（上）](https://zhuanlan.zhihu.com/p/22754296)

[微信小程序架构分析（中）](https://zhuanlan.zhihu.com/p/22765476)

[微信小程序架构分析（下）](https://zhuanlan.zhihu.com/p/22932309)
