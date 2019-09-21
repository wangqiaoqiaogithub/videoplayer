## Videoplayer.js
>这是一个由HMLT5API提供的视频播放器原生插件
## 介绍
* 是一个原生无任何依赖项具有封装性的模块化插件
* 效果演示：[Videoplayer DEMO](https://wangqiaoqiaogithub.github.io/videoplayer/dist/index.html)
   
## 下载
```
git clone git@github.com:wangqiaoqiaogithub/videoplayer.git
```
## 使用
 ```html
<script src="path/videoplayer.js"></script>
```
或者
```js
var audio = new Video('#myAudio');
```
## 示例
HTML文件：
```html
<video id="myAudio" src="xxx" type="video/mp4"></video>
```
JavaScript文件中的插件配置：
```js
var videoscreen = new Video('#myAudio'//确定video的id标签容器,{
  btn: '自定义',//控制播放暂停的按钮
  videoplay: "自定义",//音频开始状态时的按钮样式
  videopause: "自定义",//音频暂停状态时的按钮样式
  fullscreen: '自定义',
  choicefs: "自定义",
  fsicon: '自定义',
  exitfsicon: '自定义',
  timebeat: '自定义',
  pipbtn: '自定义',
  speedbtn: '自定义',//控制显示或隐藏倍速列表的按钮
  speedlist: '自定义',//倍速列表最外部容器(被speedbtn属性操控)
  slistclassopen: '自定义',//倍速列表被点击显示状态的类名属性(该类名属性主要用来是该容器被点击是显示)
  slistclassshut: '自定义',///倍速列表被点击关闭状态的类名属性(该类名属性主要用来是该容器被点击是隐藏)
  slistone: '自定义',//倍速列表中的.5x倍速按钮属性
  slisttwo: "自定义",//倍速列表中的1x倍速按钮属性
  slistthree: "自定义",//倍速列表中的1.5x倍速按钮属性
  slistfour: "自定义",//倍速列表中的2x倍速按钮属性
  volumebtn: '自定义',//声音按钮容器样式属性(控制声音列表的显示和隐藏)
  volumemouse: '自定义',//声音列表容器样式属性(被控制放大缩小的最外容器声音列表)
  vmuteclass: '自定义',
  vmediumclass: '自定义',
  vbigclass: '自定义',
  vcontrols: '自定义',
  volumehead: '自定义',//点击调节声音大小时的小球(方向指示器)
  vprogress: '自定义',//被控制的声音的进度条（高度会自动调节）
  apcontrols: '自定义',
  audioprogress: '自定义',//显示音频加载时缓冲完的的进度条属性容器
  audiohead: '自定义',//点击调节音频进度时的小球(方向指示器)
  aloadprogress: '自定义',//显示音频加载时播放过的的进度条属性容器
  mousevolumedistance: 1,//鼠标点击调节音量时小球偏移量(它的作用是能让小球和滚动条更能凝聚在一起)
  mouseaprogressdistance: 5,//鼠标点击时调节视频进度的时候偏移量(小球更好的凝聚在一起)
  audioloadingselect: '自定义',//缓存加载视频时的loading选择器(让它去控制别的类名，来控制类名的显示隐藏)
  loadinghideclass: '自定义'//视频缓存加载完成后隐藏loading的class(这里必须是字符串的形式)
})
```
## 环境
安装node所有依赖包：
```
npm install
```
webpack开发环境启动：
```js
npm run dev
```
webpack打包命令：
```js
npm run build
```
#### 细节性的属性方法还请查看demo页面中控制台的日志
