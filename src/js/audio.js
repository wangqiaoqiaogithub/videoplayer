/*created by wangqiaoqiao 
* Datetime: 2019/5/2 
*/  
(function(){
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global) ||
        this || {};
    var util = {
        extend: function(target) {
            for (var i = 1, len = arguments.length; i < len; i++) {
                for (var prop in arguments[i]) {
                    if (arguments[i].hasOwnProperty(prop)) {
                        target[prop] = arguments[i][prop]
                    }
                }
            }
            return target
        },
        indexOf: function(array, item) {
            if (array.indexOf) {
                return array.indexOf(item);
            } else {
                var result = -1;
                for (var i = 0, len = array.length; i < len; i++) {
                    if (array[i] === item) {
                        result = i;
                        break;
                    }
                }
                return result;
            }
        },
        addEvent:function(element,type,fn){
            if(document.addEventListener||Window.addEventlistener){
                element.addEventListener(type,fn,false)
                return fn;
            }else if(document.attachEvent||Window.attachEvent){
                var bound = function(){
                    return fn.apply(element, arguments);
                }
                element.attachEvent('on'+ type, bound);
                return bound;
            }
        },
        addClass:function(element,className){
            var elementName = typeof element === "string" ? document.querySelector(element) : element;
            var classNames = elementName.className.split(/\s+/);
            if(util.indexOf(classNames, className) == -1){
                classNames.push(className);
            }
            elementName.className = classNames.join('');
        },
        removeClass:function(element,className){
            var elementName = typeof element === "string" ? document.querySelector(element) : element;
            var classNames = elementName.className.split(/\s+/);
            var index = util.indexOf(classNames, className);
            if(index !== -1){
                classNames.splice(index, 1);
            }
            elementName.className = classNames.join('');
        },
        hasclass(element,className){
            element = element || "";
            if (className.replace(/\s/g, "").length == 0) return false; //当cls没有参数时，返回false
            return new RegExp("" + className + "").test("" + ele.className+ "");

        },
        typeofqs:function(element){
            return typeof element === "string" ? document.querySelector(element) : element;
        }
    }
    function Videoplayer(
        btn,videoplay,videopause,
        choicefs,fullscreen,fsicon,exitfsicon,timebeat,timetotal,pipbtn,speedbtn,
        speedlist,slistclassopen,slistclassshut,slistone,slisttwo,slistthree,
        slistfour,screenshotbtn,volumebtn,volumemouse,vmuteclass,vmediumclass,vbigclass,vcontrols,
        volumehead,vprogress,apcontrols,audiohead,audioprogress,aloadprogress,mousevolumedistance,
        mouseaprogressdistance,audioloadingselect,loadinghideclass,rightclickmenu
    ){
        this.btn= btn;//绑定播放按钮
        this.videoplay = videoplay;//提供开始播放类名的属性
        this.videopause = videopause;//提供暂停播放类名的属性
        this.choicefs = choicefs;//提供全屏的类名属性
        this.fullscreen = fullscreen;//提供点击按钮会全屏属性
        this.fsicon = fsicon;
        this.exitfsicon = exitfsicon;
        this.timebeat = timebeat;//提供时间的类名属性
        this.timetotal = timetotal;
        this.pipbtn = pipbtn;//提供画中画的类名属性
        this.speedbtn = speedbtn;//提供点击倍速按钮并显示倍速列表的类名属性
        this.speedlist = speedlist;
        this.slistclassopen = slistclassopen;
        this.slistclassshut = slistclassshut;
        this.slistone = slistone;
        this.slisttwo = slisttwo;
        this.slistthree = slistthree;
        this.slistfour = slistfour;
        this.screenshotbtn = screenshotbtn;
        this.volumebtn = volumebtn;
        this.volumemouse = volumemouse;
        this.vmuteclass = vmuteclass;
        this.vmediumclass = vmediumclass;
        this.vbigclass = vbigclass;
        this.vcontrols = vcontrols;
        this.volumehead = volumehead;
        this.apcontrols = apcontrols;
        this.vprogress = vprogress;
        this.audiohead = audiohead;
        this.audioprogress = audioprogress;
        this.aloadprogress = aloadprogress;
        this.mousevolumedistance = mousevolumedistance;
        this.mouseaprogressdistance = mouseaprogressdistance;
        this.audioloadingselect = audioloadingselect;
        this.loadinghideclass = loadinghideclass;
        this.rightclickmenu = rightclickmenu;
    }
    Video.defaultOptions = {
        //提供参数的地方
        btn: this.btn,//利用对象字面量的形式（this.btn其实就等于this.options.btn）
        videoplay: this.videoplay,
        videopause: this.videopause,
        fullscreen: this.fullscreen,
        choicefs: this.choicefs,
        fsicon: this.fsicon,
        exitfsicon: this.exitfsicon,
        timebeat: this.timebeat,
        timetotal: this.timetotal,//提供获取视频总时间的属性
        pipbtn: this.pipbtn,
        speedbtn: this.speedbtn,
        speedlist: this.speedlist,
        slistclassopen: this.slistclassopen,
        slistclasshut: this.slistclasshut,
        slistone: this.slistone,
        slisttwo: this.slisttwo,
        slistthree: this.slistthree,
        slistfour: this.slistfour,
        screenshotbtn: this.screenshotbtn,
        volumebtn: this.volumebtn,
        volumemouse: this.volumemouse,
        vmuteclass: this.vmuteclass,
        vmediumclass: this.vmediumclass,
        vbigclass: this.vbigclass,
        vcontrols: this.vcontrols,
        volumehead: this.volumehead,
        vprogress: this.vprogress,
        apcontrols: this.apcontrols,
        audiohead: this.audiohead,
        audioprogress: this.audioprogress,
        aloadprogress: this.aloadprogress,
        mousevolumedistance: this.mousevolumedistance,
        mouseaprogressdistance: this.mouseaprogressdistance,
        audioloadingselect: this.audioloadingselect,
        loadinghideclass: this.loadinghideclass,
        rightclick: this.rightclickmenu,
        create:function(){}
        //这里的this指向为Video
    }
    function Video(name,options){
        Videoplayer.call(arguments);
        this.name = typeof name === "string" ? document.querySelector(name) : name;
        this.options = util.extend({}, this.constructor.defaultOptions, options)
        /**
         * 接着引用拷贝函数以拷贝的形式复制父类并使用属性
         * 接着call方法让Video类继承Videoplayer类
         * 通过继承的属性储存在了子类型中
         * 接着创建一个共有属性让它等于拷贝函数(this.options = util.extend({}, 
         * this.constructor.defaultOptions, options))
         * 接着声明一个变量并实例化让Video类的prototype属性实例化Videoplayer类
         * 接着在修复Video类让声明的的那个变量的constructor属性指向Video类
         */
        this.init();
        options.create();// 回调函数（调用defaultoptions栈中函数）
    }
    var proto = Video.prototype = new Videoplayer();
    proto.constructor = Video;
    proto.version = '%c2.0.0';
    proto.buildtime = '%c2019-12-20T14:25Z';
    proto.init = function(){
        this.bindclick();
        this.bindfscreen();
        this.bindbtn();
        this.exitfscreen();
        this.onoff_fsbtn();
        this.bindVideotime();
        this.bindpinpicture();
        this.bindspeed();
        this.bindvolume();
        this.bindVideotime();
        this.bindaudiocontrols();
        this.bindloadingpic();
        // this.bindrightmenu();
        // 创建init函数为共有方法
        let {totalsone,totalstwo} = {
            totalsone: "color: #fff; background: #606060; font-size: 11px; padding: 0px 6px 0px 6px; border-radius: 3px 0px 0px 3px;",
            totalstwo: "background: #1475b2;color: #fff;font-size: 11px; padding: 0px 6px 0px 6px; border-radius: 0 3px 3px 0;"
        }
        console.log(""+"%cVeision"+proto.version+"",
        totalsone,totalstwo)
        console.log(""+"%cbuildtime"+proto.buildtime+"",
        totalsone,totalstwo)
    }
    proto.bindclick = function(){
        let audio = this.name;
        //let videobtn = this.btn;
        let videoplay = this.options.videoplay;
        let videopause = this.options.videopause;
        let selectorvbtn = util.typeofqs(this.options.btn);
        util.addEvent(audio,"click",function(){
            //主屏幕点击触发
            if(audio.paused){
                audio.play();
                //video.addClass()
                selectorvbtn.className = videopause+"";
            }else if(audio.played){
                audio.pause()
                //video.removeClass();
                selectorvbtn.className = videoplay+"";
            }
        })
    }
    proto.bindbtn = function(){
        let audio = this.name;
        let selectorvbtn = util.typeofqs(this.options.btn);
        let videoplay = this.options.videoplay;
        let videopause = this.options.videopause;
        util.addEvent(selectorvbtn,"click",function(){
            //视频控制播放暂停的点击事件触发
            if(audio.paused){
                audio.play();
                console.log(selectorvbtn)
                selectorvbtn.className = videopause+"";
            }else if(audio.played){
                audio.pause();
                selectorvbtn.className = videoplay+"";
            }
        })
    }
    proto.bindfscreen = function(){
        let selectfs = util.typeofqs(this.options.fullscreen);
        let selectfsbtn = util.typeofqs(this.options.choicefs);
        let ele = document.documentElement||document||window||document.body;
        util.addEvent(selectfsbtn,"click",function(){
            if (ele.requestFullscreen) {
                selectfs.requestFullscreen();
            }else if(ele.msRequestFullScreen){
                selectfs.msRequestFullScreen();
            } else if (ele.mozRequestFullScreen) {
                selectfs.mozRequestFullScreen();
            } else if (ele.webkitRequestFullScreen) {
                selectfs.webkitRequestFullScreen();
            } else if(ele.oRequestFullScreen){
                selectfs.oRequestFullScreen();
            }
        })
    }
    proto.exitfscreen = function(){
        let selectfsbtn = util.typeofqs(this.options.choicefs);
        let ele = document||document.body||window;//获取退出时的文档
        util.addEvent(selectfsbtn,"click",function(){
            if (ele.exitFullScreen) {
                ele.exitFullscreen();
            }else if(ele.msCancelFullScreen){
                ele.msCancelFullScreen();
            } else if (ele.mozCancelFullScreen) {
                ele.mozCancelFullScreen();
            } else if (ele.webkitCancelFullScreen) {
                ele.webkitCancelFullScreen();
            }else if (ele.oCancelFullScreen) {
                ele.oCancelFullScreen();
            }
            
        })
    }
    proto.onoff_fsbtn = function(){
        //这是点击全屏按钮时的图标切换模块
        //let fsbtn = this.choicefs;//获取将要点击的视屏类名id
        let selectfsbtn = util.typeofqs(this.options.choicefs);
        let onoff = true;
        let fsicon = this.options.fsicon;
        let efsbtn = this.options.exitfsicon;
        util.addEvent(selectfsbtn,"click",function(){
            if(onoff == true){
                selectfsbtn.className = efsbtn+"";
                onoff = false;
            }else{
                selectfsbtn.className = fsicon+"";
                onoff = true;
            }
        })
    }
    proto.bindpinpicture = function(){
        let audio = this.name;
        //let pip = this.pipbtn;
        let pipbtn = util.typeofqs(this.options.pipbtn);
        let ele = document||document.body||window;
        util.addEvent(pipbtn,"click",function(){
            if(audio !== document.pictureInPictureElement){
                audio.requestPictureInPicture();
            }else{
                ele.exitPictureInPicture();
            }
        })
    }
    proto.bindVideotime = function(){
        let audio = this.name;
        let mapdistance = this.options.mouseaprogressdistance;
        let changetime = util.typeofqs(this.options.timebeat);
        let aheadselect = util.typeofqs(this.options.audiohead);
        let alpselect = util.typeofqs(this.options.aloadprogress);
        let apselect = util.typeofqs(this.options.audioprogress);
        let apcselect = util.typeofqs(this.options.apcontrols);
        let ttselect =  util.typeofqs(this.options.timetotal);
        util.addEvent(audio,"canplay",function(){
            audio.canplay=true;//开启canplyaudio属性的作用
        })
        util.addEvent(audio,"timeupdate",function(){
			var buff_pro = parseInt((buffered / duration) * 100);
            let cur = parseInt(audio.currentTime);
            //用变量来接收一个音频的秒数并取整(228秒)
            let temp = cur;
            let minute = parseInt(temp/60);//转换成分钟为后面的程序做准备
            let clock = parseInt(temp/3600);
            if(audio.canplay){
                var currentTime = audio.currentTime;
                var buffered = audio.buffered.end(0);
                var duration = audio.duration;
                for(var i = 0; i < audio.buffered.length; i++) {
                    if(currentTime < audio.buffered.end(i)) {
                        buffered = audio.buffered.end(i);
                        break;
                    }
                }
                var buff_pro = parseInt((buffered / duration) * 100);
                let buffwow = currentTime/duration*100;
                let total = buffwow - (mapdistance*0.1);
                apselect.style.width = buffwow+"%";
                aheadselect.style.left = total+"%";
                alpselect.style.width = buff_pro+"%";
            }
            if(cur%60<10){
                //在cur变量模余60小于10的时候的时候试一下作用
                changetime.innerHTML=""+minute+":0"+cur%60+"";
            }else if(minute < 10){
                changetime.innerHTML=""+minute+":"+cur%60+"";
            }else if(minute>10 && minute<60){
                changetime.innerHTML=""+minute+":"+cur%60+"";
            }else if(clock<10||minute<10||cur%60<10){
                changetime.innerHTML=""+clock+":0"+minute+":0"+cur%60+"";
            }else if(clock<10||minute<10||cur%60>10){
                changetime.innerHTML=""+clock+":0"+minute+":"+cur%60+"";
            }else{
                changetime.innerHTML=""+clock+":"+minute+":"+cur%60+"";
            }
        })
        util.addEvent(audio,"loadedmetadata",function(){
            //当音频成功获取资源是运行以下程序
            let cur = parseInt(audio.duration);
            let temp = cur;
            //用变量来接收一个音频的秒数并取整(228秒)
            let minute = parseInt(temp/60);//转换成分钟为后面的程序做准备
            let clock = parseInt(temp/3600);
            ttselect.innerHTML=""+minute+":"+temp%60+"";
        })
    }
    proto.bindspeed = function(){
        let audio = this.name;
        let slistclassopen = this.options.slistclassopen;
        let slistclassshut = this.options.slistclassshut;
        let speedselect = util.typeofqs(this.options.speedbtn);
        let slselect = util.typeofqs(this.options.speedlist);
        // let slschildren = slselect.childNodes.item(1).children;
        let sloneselect = util.typeofqs(this.options.slistone);
        let sltwoselect = util.typeofqs(this.options.slisttwo);
        let slthreeselect = util.typeofqs(this.options.slistthree);
        let slfourselect = util.typeofqs(this.options.slistfour);
        let onoff = true;
        Videoplayer.call(arguments);
        util.addEvent(speedselect,"click",function(){
            if(onoff == true){
                slselect.className = slistclassopen+"";
                onoff = false;
            }else{
                slselect.className = slistclassshut+"";
                onoff = true;
            }
        })
        if(typeof sloneselect && sltwoselect && slthreeselect && slfourselect === 'undefined'){
            alert(视频播放速率属性未定义);
        }else {
            let speedarr = ["0.5","1.0","1.5","2.0"];
            let slsarr = [sloneselect,sltwoselect,slthreeselect,slfourselect];
            for(let i=0;i<slsarr.length;i++){
                slsarr[i].onclick = function(){
                    audio.playbackRate = speedarr[i];
                    if(audio.playbackRate === 1.0){
                        speedselect.innerHTML = "正常";
                    }else {
                        speedselect.innerHTML = audio.playbackRate+"x";
                    }
                }
            }
        }
        /**
         * 视频源的playbackRate属性是显示视频源的播放速度
         */
    }
    proto.bindvolume = function(){
        let audio = this.name;
        let vmediumclass = this.options.vmediumclass;
        let vmuteclass = this.options.vmuteclass;
        let vbigclass = this.options.vbigclass;
        let onoff = true;
        let mapdistance = this.options.mouseaprogressdistance;
        let vbselect = util.typeofqs(this.options.volumebtn);
        let vmselect = util.typeofqs(this.options.volumemouse);
        let vcselect = util.typeofqs(this.options.vcontrols);
        let vpselect = util.typeofqs(this.options.vprogress);
        let vhselect = util.typeofqs(this.options.volumehead);
        util.addEvent(vbselect,"mouseover",function(){
            vmselect.style="display: block";
        })
        util.addEvent(vbselect,"click",function(){
            if(onoff == true){
                audio.volume = 0;
                vmselect.style="display: none";
                vbselect.className = vmuteclass+"";
                onoff = false;
            }else{
                audio.volume = 0.5;
                vmselect.style="display: block";
                vbselect.className = vmediumclass+"";
                onoff = true;
            }
        })
        util.addEvent(vcselect,"click",function(e){
            let position = 1 - (e.offsetY) / vcselect.offsetHeight;
            let pero =  1 - (e.offsetY) / vcselect.offsetHeight;
            let percentage = Math.floor(position*vcselect.offsetHeight);
            let total = percentage-mapdistance;
            if(percentage<0){
                percentage = 0;
            }
            audio.volume = parseFloat(percentage/100)*1;
            vhselect.style.bottom =""+total+"px";
            vpselect.style.height =""+(1-audio.volume)*100+"%";
            if(percentage <= 0){
                vbselect.className = vmuteclass+"";
            }else if(audio.volume <= 0.5){
                vbselect.className = vmediumclass+"";
            }else if(audio.volume >= 0.5){
                vbselect.className = vbigclass+"";
            }
        })
        util.addEvent(vmselect,"mouseover",function(){
            this.style="display: block";
        })
        util.addEvent(vmselect,"mouseout",function(){
            this.style="display: none";
        })
    }
    proto.bindaudiocontrols = function(){
        let audio = this.name;
        let mapdistance = this.options.mouseaprogressdistance;  
        let aheadselect = util.typeofqs(this.options.audiohead);
        let apselect = util.typeofqs(this.options.audioprogress);
        let apcselect = util.typeofqs(this.options.apcontrols);
        util.addEvent(apcselect,"click",function(e){
            let offsetx =  e.offsetX;
            let lenth = audio.duration;
            let position = Math.floor(offsetx-mapdistance);
            audio.currentTime=""+parseInt(offsetx*lenth/apcselect.offsetWidth)+"";
            aheadselect.style.left=position+"px";
            apselect.style.width=offsetx+"px";
            audio.play();
        })
    }
    proto.bindloadingpic = function(){
        let audio = this.name;
        let loadinghide = this.options.loadinghideclass;
        //let audioloading = this.audioloadingselect;
        let loadingselect = util.typeofqs(this.options.audioloadingselect);
        util.addEvent(audio,"waiting",function(){
            //删除待加载的图标组件
            util.removeClass(loadingselect,loadinghide);
        })
        util.addEvent(audio,"playing",function(){
            //添加待加载的图标组件
            util.addClass(loadingselect,loadinghide);
        })
        util.addEvent(audio,"loadstart",function(){
            //客户端正在请求数据时删除待加载的图标组件
            util.removeClass(loadingselect,loadinghide);
        })
    } 
   /**
    * 屏幕上右键点击出现信息菜单
    * @privatemethod bindrightmenu
    * @author wangqiaoqiaogithub
    * */
    proto.bindrightmenu = function(){
        let audio = this.name;
        let rclickmenu = this.util.typeofqs(this.options.rightclickmenu);
        let onoff = true;
        util.addEvent(audio,"contextmenu",function(e){
            let event = e || window.event;
            // let clientRect = audio.getBoundingClientRect();
            event.preventDefult();//阻止事件默认
            // 监听点击右键事件
            if(onoff == true){
                rclickmenu.style="display:block";
                onoff = false;
            }else{
                rclickmenu.style="display:none";
                onoff = true;
            }
        })
    }
    /**
     * 镜像画面效果（屏幕反转）
     * @privatemethod mrotate
     * @autor wangqiaoqiaogithub
     */
    proto.bindmrotate = function(){
        let audio = this.name;
        let rotatebtn = ss;
        let onoff = true;
        util.addEvent(rotatebtn,"click",function(){
            if(onoff == true){
                audio.style = 'transform: rotateY(180deg)';
                onoff = false
            }else{
                audio.style = null;
                onoff = true
            }   
        })
    }
    /**
     * 截图功能
     * @privatemethod screenshot
     * @license MIT
     */
    proto.screenshot = function(){
        let audio = this.name;
        let sshotbtn = this.options.screenshotbtn;
        let canvas = document.createElement('canvas');
        util.addEvent(sshotbtn,'click',function(){
            canvas.width = audio.videoWidth;
            canvas.height = audio.videoHeight;
            canvas.getContext('2d').drawImage(audio,0,0,canvas.width,canvas.height);
            var dataURL = void 0;
            canvas.toBlob(function(blob){
                dataURL = URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = dataURL;
                link.download = 'videoPlayer.png';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(dataURL);
            })
        })
    }
   if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = Video;
        }
        exports.Video = Video;
    } else {
        root.Video = Video;
    } 
}())