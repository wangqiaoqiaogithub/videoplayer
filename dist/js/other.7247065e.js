!function(t){var s={};function e(i){if(s[i])return s[i].exports;var o=s[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var o in t)e.d(i,o,function(s){return t[s]}.bind(null,o));return i},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=8)}([function(t,s,e){(function(t,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var o="object"==("undefined"==typeof self?"undefined":i(self))&&self.self==self&&self||"object"==(void 0===t?"undefined":i(t))&&t.global==t&&t||this||{},n={extend:function(t){for(var s=1,e=arguments.length;s<e;s++)for(var i in arguments[s])arguments[s].hasOwnProperty(i)&&(t[i]=arguments[s][i]);return t},indexOf:function(t,s){if(t.indexOf)return t.indexOf(s);for(var e=-1,i=0,o=t.length;i<o;i++)if(t[i]===s){e=i;break}return e},addEvent:function(t,s,e){if(document.addEventListener||Window.addEventlistener)return t.addEventListener(s,e,!1),e;if(document.attachEvent||Window.attachEvent){var i=function(){return e.apply(t,arguments)};return t.attachEvent("on"+s,i),i}},addClass:function(t,s){var e="string"==typeof t?document.querySelector(t):t,i=e.className.split(/\s+/);-1==n.indexOf(i,s)&&i.push(s),e.className=i.join("")},removeClass:function(t,s){var e="string"==typeof t?document.querySelector(t):t,i=e.className.split(/\s+/),o=n.indexOf(i,s);-1!==o&&i.splice(o,1),e.className=i.join("")},typeofqs:function(t){return"string"==typeof t?document.querySelector(t):t}};function l(t,s,e,i,o,n,l,a,c,r,u,d,p,h,f,m,v,b,y,g,x,q,w,S,k,E,F,N,O,P,j,C,T,I){this.btn=t,this.videoplay=s,this.videopause=e,this.choicefs=i,this.fullscreen=o,this.fsicon=n,this.exitfsicon=l,this.timebeat=a,this.timetotal=c,this.pipbtn=r,this.speedbtn=u,this.speedlist=d,this.slistclassopen=p,this.slistclassshut=h,this.slistone=f,this.slisttwo=m,this.slistthree=v,this.slistfour=b,this.volumebtn=y,this.volumemouse=g,this.vmuteclass=x,this.vmediumclass=q,this.vbigclass=w,this.vcontrols=S,this.volumehead=k,this.apcontrols=F,this.vprogress=E,this.audiohead=N,this.audioprogress=O,this.aloadprogress=P,this.mousevolumedistance=j,this.mouseaprogressdistance=C,this.audioloadingselect=T,this.loadinghideclass=I}function a(t,s){l.call(arguments),this.name="string"==typeof t?document.querySelector(t):t,this.options=n.extend({},this.constructor.defaultOptions,s),this.btn=this.options.btn,this.videoplay=this.options.videoplay,this.videopause=this.options.videopause,this.choicefs=this.options.choicefs,this.fullscreen=this.options.fullscreen,this.fsicon=this.options.fsicon,this.exitfsicon=this.options.exitfsicon,this.timebeat=this.options.timebeat,this.timetotal=this.options.timetotal,this.pipbtn=this.options.pipbtn,this.speedbtn=this.options.speedbtn,this.speedlist=this.options.speedlist,this.slistclassopen=this.options.slistclassopen,this.slistclassshut=this.options.slistclassshut,this.slistone=this.options.slistone,this.slisttwo=this.options.slisttwo,this.slistthree=this.options.slistthree,this.slistfour=this.options.slistfour,this.volumebtn=this.options.volumebtn,this.volumemouse=this.options.volumemouse,this.vmuteclass=this.options.vmuteclass,this.vmediumclass=this.options.vmediumclass,this.vbigclass=this.options.vbigclass,this.vcontrols=this.options.vcontrols,this.volumehead=this.options.volumehead,this.vprogress=this.options.vprogress,this.apcontrols=this.options.apcontrols,this.audiohead=this.options.audiohead,this.audioprogress=this.options.audioprogress,this.aloadprogress=this.options.aloadprogress,this.mousevolumedistance=this.options.mousevolumedistance,this.mouseaprogressdistance=this.options.mouseaprogressdistance,this.audioloadingselect=this.options.audioloadingselect,this.loadinghideclass=this.options.loadinghideclass,this.init()}a.defaultOptions={btn:this.btn,videoplay:this.videoplay,videopause:this.videopause,fullscreen:this.fullscreen,choicefs:this.choicefs,fsicon:this.fsicon,exitfsicon:this.exitfsicon,timebeat:this.timebeat,timetotal:this.timetotal,pipbtn:this.pipbtn,speedbtn:this.speedbtn,speedlist:this.speedlist,slistclassopen:this.slistclassopen,slistclasshut:this.slistclasshut,slistone:this.slistone,slisttwo:this.slisttwo,slistthree:this.slistthree,slistfour:this.slistfour,volumebtn:this.volumebtn,volumemouse:this.volumemouse,vmuteclass:this.vmuteclass,vmediumclass:this.vmediumclass,vbigclass:this.vbigclass,vcontrols:this.vcontrols,volumehead:this.volumehead,vprogress:this.vprogress,apcontrols:this.apcontrols,audiohead:this.audiohead,audioprogress:this.audioprogress,aloadprogress:this.aloadprogress,mousevolumedistance:this.mousevolumedistance,mouseaprogressdistance:this.mouseaprogressdistance,audioloadingselect:this.audioloadingselect,loadinghideclass:this.loadinghideclass};var c=a.prototype=new l;c.constructor=a,c.version="%c2.0.0",c.init=function(){this.bindclick(),this.bindfscreen(),this.bindbtn(),this.exitfscreen(),this.onoff_fsbtn(),this.bindVideotime(),this.bindpinpicture(),this.bindspeed(),this.bindvolume(),this.bindVideotime(),this.bindaudiocontrols(),this.bindloadingpic(),console.log("%cVeision"+c.version,"color: #fff; background: #606060; font-size: 14px; padding: 0px 6px 0px 6px; border-radius: 3px 0px 0px 3px;","background: #1475b2;color: #fff;font-size: 14px; padding: 0px 6px 0px 6px; border-radius: 0 3px 3px 0;")},c.bindclick=function(){var t=this.name,s=this.videoplay,e=this.videopause,i=n.typeofqs(this.btn);n.addEvent(t,"click",function(){t.paused?(t.play(),i.className=e+""):t.played&&(t.pause(),i.className=s+"")})},c.bindbtn=function(){var t=this.name,s=n.typeofqs(this.btn),e=this.videoplay,i=this.videopause;n.addEvent(s,"click",function(){t.duration;t.paused?(t.play(),console.log(s),s.className=i+""):t.played&&(t.pause(),s.className=e+"")})},c.bindfscreen=function(){var t=n.typeofqs(this.fullscreen),s=n.typeofqs(this.choicefs),e=document.documentElement||document||window||document.body;n.addEvent(s,"click",function(){e.requestFullscreen?t.requestFullscreen():e.msRequestFullScreen?t.msRequestFullScreen():e.mozRequestFullScreen?t.mozRequestFullScreen():e.webkitRequestFullScreen?t.webkitRequestFullScreen():e.oRequestFullScreen&&t.oRequestFullScreen()})},c.exitfscreen=function(){var t=n.typeofqs(this.choicefs),s=document||document.body||window;n.addEvent(t,"click",function(){s.exitFullScreen?s.exitFullscreen():s.msCancelFullScreen?s.msCancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen?s.webkitCancelFullScreen():s.oCancelFullScreen&&s.oCancelFullScreen()})},c.onoff_fsbtn=function(){var t=n.typeofqs(this.choicefs),s=!0,e=this.fsicon,i=this.exitfsicon;n.addEvent(t,"click",function(){1==s?(t.className=i+"",s=!1):(t.className=e+"",s=!0)})},c.bindpinpicture=function(){var t=this.name,s=n.typeofqs(this.pipbtn),e=document||document.body||window;n.addEvent(s,"click",function(){t!==document.pictureInPictureElement?t.requestPictureInPicture():e.exitPictureInPicture()})},c.bindVideotime=function(){var t=this.name,s=this.mouseaprogressdistance,e=n.typeofqs(this.timebeat),i=n.typeofqs(this.audiohead),o=n.typeofqs(this.aloadprogress),l=n.typeofqs(this.audioprogress),a=(n.typeofqs(this.apcontrols),n.typeofqs(this.timetotal));n.addEvent(t,"canplay",function(){t.canplay=!0}),n.addEvent(t,"timeupdate",function(){var n=parseInt(p/h*100),a=parseInt(t.currentTime),c=a,r=parseInt(c/60),u=parseInt(c/3600);if(t.canplay){for(var d=t.currentTime,p=t.buffered.end(0),h=t.duration,f=0;f<t.buffered.length;f++)if(d<t.buffered.end(f)){p=t.buffered.end(f);break}n=parseInt(p/h*100);var m=d/h*100,v=m-.1*s;l.style.width=m+"%",i.style.left=v+"%",o.style.width=n+"%"}e.innerHTML=a%60<10?r+":0"+a%60:r<10?r+":"+a%60:r>10&&r<60?r+":"+a%60:u<10||r<10||a%60<10?u+":0"+r+":0"+a%60:u<10||r<10||a%60>10?u+":0"+r+":"+a%60:u+":"+r+":"+a%60}),n.addEvent(t,"loadedmetadata",function(){var s=parseInt(t.duration),e=parseInt(s/60);parseInt(s/3600);a.innerHTML=e+":"+s%60})},c.bindspeed=function(){var t=this.name,s=(this.speedbtn,this.speedlist,this.slistclassopen),e=this.slistclassshut,i=(this.slistone,this.slisttwo,this.slistthree,this.slistfour,n.typeofqs(this.speedbtn)),o=n.typeofqs(this.speedlist),l=n.typeofqs(this.slistone),a=n.typeofqs(this.slisttwo),c=n.typeofqs(this.slistthree),r=n.typeofqs(this.slistfour),u=!0;n.addEvent(i,"click",function(){1==u?(o.className=s+"",u=!1):(o.className=e+"",u=!0)}),n.addEvent(l,"click",function(){t.playbackRate=.5,i.innerHTML="0.5X"}),n.addEvent(a,"click",function(){t.playbackRate=1,i.innerHTML="正常"}),n.addEvent(c,"click",function(){t.playbackRate=1.5,i.innerHTML="1.5X"}),n.addEvent(r,"click",function(){t.playbackRate=2,i.innerHTML="2.0X"})},c.bindvolume=function(){var t=this.name,s=this.vmediumclass,e=this.vmuteclass,i=this.vbigclass,o=(this.apcontrols,!0),l=this.mouseaprogressdistance,a=n.typeofqs(this.volumebtn),c=n.typeofqs(this.volumemouse),r=n.typeofqs(this.vcontrols),u=n.typeofqs(this.vprogress),d=n.typeofqs(this.volumehead);n.addEvent(a,"mouseover",function(){c.style="display: block"}),n.addEvent(a,"click",function(){1==o?(t.volume=0,c.style="display: none",a.className=e+"",o=!1):(t.volume=.5,c.style="display: block",a.className=s+"",o=!0)}),n.addEvent(r,"click",function(o){var n=1-o.offsetY/r.offsetHeight,c=(o.offsetY,r.offsetHeight,Math.floor(n*r.offsetHeight)),p=c-l;c<0&&(c=0),t.volume=1*parseFloat(c/100),d.style.bottom=p+"px",u.style.height=100*(1-t.volume)+"%",c<=0?a.className=e+"":t.volume<=.5?a.className=s+"":t.volume>=.5&&(a.className=i+"")}),n.addEvent(c,"mouseover",function(){this.style="display: block"}),n.addEvent(c,"mouseout",function(){this.style="display: none"})},c.bindaudiocontrols=function(){var t=this.name,s=this.mouseaprogressdistance,e=n.typeofqs(this.audiohead),i=n.typeofqs(this.audioprogress),o=n.typeofqs(this.apcontrols);n.addEvent(o,"click",function(n){var l=n.offsetX,a=t.duration,c=Math.floor(l-s);t.currentTime=""+parseInt(l*a/o.offsetWidth),e.style.left=c+"px",i.style.width=l+"px",t.play()})},c.bindloadingpic=function(){var t=this.name,s=this.loadinghideclass,e=n.typeofqs(this.audioloadingselect);n.addEvent(t,"waiting",function(){n.removeClass(e,s)}),n.addEvent(t,"playing",function(){n.addClass(e,s)}),n.addEvent(t,"loadstart",function(){n.removeClass(e,s)})},s.nodeType?o.Video=a:(!e.nodeType&&e.exports&&(s=e.exports=a),s.Video=a)}()}).call(this,e(1),e(2)(t))},function(t,s){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":e(window))&&(i=window)}t.exports=i},function(t,s){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},,,,,,function(t,s,e){"use strict";e.r(s);var i=e(0),o=new(e.n(i).a)("#myAudio",{btn:"#vbtn",videoplay:"iconfont iconplay",videopause:"iconfont iconpause",fullscreen:".audiomain",choicefs:"#v_fullscreen",fsicon:"iconfont iconfullscreen",exitfsicon:"iconfont iconfullscreenexit",timebeat:".changetime",timetotal:"#videoduration",pipbtn:"#pinpicture",speedbtn:"#v_speed",speedlist:"#speedcontrol",slistclassopen:"speedopen",slistclassshut:"speedshut",slistone:"#one",slisttwo:"#two",slistthree:"#three",slistfour:"#four",volumebtn:"#volume",volumemouse:"#vlpanel",vmuteclass:"iconfont iconvolumeoff",vmediumclass:"iconfont iconvolumeup1",vbigclass:"iconfont iconvolumeup",vcontrols:"#volumecontrols",volumehead:"#vhead",vprogress:"#vprogress",apcontrols:".video_progress",audioprogress:"#vtprogress",audiohead:"#vthead",aloadprogress:"#alprogress",mousevolumedistance:1,mouseaprogressdistance:5,audioloadingselect:"#audioloading",loadinghideclass:"audiol"});console.log(o)}]);