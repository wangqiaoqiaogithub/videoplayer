## Videoplayer.js
>这是一个由HMLT5API提供的视频播放器原生插件，专为开发者提供的友好、便捷。
## 介绍
* 是一个原生无任何依赖项具有封装性的模块化插件
* 效果演示：[Videoplayer DEMO](https://wangqiaoqiaogithub.github.io/videoplayer/dist/index.html)(细节性的API方法都在控制台日志这里)
   
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
var videoscreen = new Video('#myAudio'//确定video标签的id容器,{
  btn: '自定义',//控制播放暂停的按钮属性
  videoplay: "自定义",//音频开始状态时的按钮样式属性
  videopause: "自定义",//音频暂停状态时的按钮样式的属性
  fullscreen: '自定义',//当全屏时的受益容器属性
  choicefs: "自定义",//点击进入全屏的按钮容器属性
  fsicon: '自定义',//未进入全屏时的元素样式属性（用来设置未进入全屏时的字体图标类名）
  exitfsicon: '自定义',//退出全屏时的元素样式属性（用来设置退出全屏时的字体图标类名）
  timebeat: '自定义',//计算video标签的视频当前所用时间容器属性
  timetotal: '自定义',//计算video标签的视频总时间容器属性
  pipbtn: '自定义',//音频画中画时的点击开启按钮属性
  speedbtn: '自定义',//控制显示或隐藏倍速列表的按钮属性
  speedlist: '自定义',//倍速列表最外部容器(被speedbtn属性操控)
  slistclassopen: '自定义',//倍速列表被点击显示状态的类名属性(该类名属性主要用来是该容器被点击是显示)
  slistclassshut: '自定义',///倍速列表被点击关闭状态的类名属性(该类名属性主要用来是该容器被点击是隐藏)
  slistone: '自定义',//倍速列表中的.5x倍速按钮属性
  slisttwo: "自定义",//倍速列表中的1x倍速按钮属性
  slistthree: "自定义",//倍速列表中的1.5x倍速按钮属性
  slistfour: "自定义",//倍速列表中的2x倍速按钮属性
  volumebtn: '自定义',//声音按钮容器样式属性(控制声音列表的显示和隐藏)
  volumemouse: '自定义',//声音列表容器样式属性(被控制放大缩小的最外容器声音列表)
  vmuteclass: '自定义',//没有声音时出现的样式类名容器属性（用来设置没有声音时的字体图标类名）
  vmediumclass: '自定义',//声音中等时出现的样式类名容器属性（用来设置声音中等字体图标类名）
  vbigclass: '自定义',//声音超过中等时出现的样式类名容器属性（用来设置声音大时的字体图标类名）
  vcontrols: '自定义',//调节音量时的最外层类名容器属性
  volumehead: '自定义',//点击调节声音大小时的小球属性(方向指示器)
  vprogress: '自定义',//被控制的声音的进度条属性（高度会自动调节）
  apcontrols: '自定义',//调节视频进度时的外层容器类名属性
  audioprogress: '自定义',//显示音频加载时缓冲完的的进度条容器属性
  audiohead: '自定义',//点击调节音频进度时的小球(方向指示器)
  aloadprogress: '自定义',//显示音频加载时播放过的的进度条容器属性
  mousevolumedistance: 1,//鼠标点击调节音量时小球偏移量(它的作用是能让小球和滚动条更能凝聚在一起)
  mouseaprogressdistance: 5,//鼠标点击时调节视频进度的时候偏移量(小球更好的凝聚在一起)
  audioloadingselect: '自定义',//缓存加载视频时的loading选择器(让它去控制别的类名，来控制类名的显示隐藏)
  loadinghideclass: '自定义'//视频缓存加载完成后隐藏loading的class(这里必须是字符串的形式)
})
