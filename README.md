# videoplayer
>这是一个HMLT5视频播放器原生插件
## 介绍
* 是一个原生无任何依赖项具有封装性的模块化插件
* 效果演示：
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
JavaScript文件：
```js
var videoscreen = new Video('#myAudio',{
  btn: '自定义',
  videoplay: "自定义",
  videopause: "自定义",
  fullscreen: '自定义',
  choicefs: "自定义",
  fsicon: '自定义',
  exitfsicon: '自定义',
  timebeat: '自定义',
  pipbtn: '自定义',
  speedbtn: '自定义',
  speedlist: '自定义',
  slistclassopen: '自定义',
  slistclassshut: '自定义',
  slistone: '自定义',
  slisttwo: "自定义",
  slistthree: "自定义",
  slistfour: "自定义",
  volumebtn: '自定义',
  volumemouse: '自定义',
  vmuteclass: '自定义',
  vmediumclass: '自定义',
  vbigclass: '自定义',
  vcontrols: '自定义',
  volumehead: '自定义',
  vprogress: '自定义',
  apcontrols: '自定义',
  audioprogress: '自定义',
  audiohead: '自定义',
  aloadprogress: '自定义',
  mousevolumedistance: 1,//鼠标点击调节音量时小球偏移量(它的作用是能让小球和滚动条更能凝聚在一起)
  mouseaprogressdistance: 5,//鼠标点击时调节视频进度的时候偏移量(小球更好的凝聚在一起)
  audioloadingselect: '自定义',//缓存加载视频时的loading选择器(让它去控制别的类名，来控制类名的显示隐藏)
  loadinghideclass: '自定义'//视频缓存加载完成后隐藏loading的class(这里必须是字符串的形式)
})
```
## 环境
安装node依赖包：
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
