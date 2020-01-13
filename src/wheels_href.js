import Video from "./js/audio.js";//导入video函数
var videoscreen = new Video('#myAudio'/*视频元素Video标签上的id*/,{
    btn: '#vbtn',
    videoplay: "iconfont iconplay",
    videopause: "iconfont iconpause",
    fullscreen: '.audiomain',
    choicefs: "#v_fullscreen",
    fsicon: 'iconfont iconfullscreen',
    exitfsicon: 'iconfont iconfullscreenexit',
    timebeat: '.changetime',
    timetotal: '#videoduration',
    pipbtn: '#pinpicture',
    speedbtn: '#v_speed',
    speedlist: '#speedcontrol',
    slistclassopen: 'speedopen',
    slistclassshut: 'speedshut',
    slistone: '#one',
    slisttwo: "#two",
    slistthree: "#three",
    slistfour: "#four",
    volumebtn: '#volume',
    volumemouse: '#vlpanel',
    vmuteclass: 'iconfont iconvolumeoff',
    vmediumclass: 'iconfont iconvolumeup1',
    vbigclass: 'iconfont iconvolumeup',
    vcontrols: '#volumecontrols',
    volumehead: '#vhead',
    vprogress: '#vprogress',
    apcontrols: '.video_progress',
    audioprogress: '#vtprogress',
    audiohead: '#vthead',
    aloadprogress: '#alprogress',
    mousevolumedistance: 1,//鼠标点击调节音量时小球偏移量(它的作用是能让小球和滚动条更能凝聚在一起)
    mouseaprogressdistance: 5,//鼠标点击时调节视频进度的时候偏移量(小球更好的凝聚在一起)
    audioloadingselect: '#audioloading',//缓存加载视频时的loading选择器(让它去控制别的类名，来控制类名的显示隐藏)
    loadinghideclass: 'audiol',//视频缓存加载完成后隐藏loading的class(这里必须是字符串的形式)
    create:function(){
        console.log(this.btn)
    }
})
console.log(videoscreen);
/**
 * 以上为video插件引用方式
 */