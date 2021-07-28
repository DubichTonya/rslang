(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1P0b":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("fXoL"),i=n("Xa2L");let s=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-progress"]],decls:2,vars:1,consts:[[1,"progress"],[3,"diameter"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Ob(1,"mat-spinner",1),r.Rb()),2&t&&(r.Cb(1),r.jc("diameter",50))},directives:[i.c],styles:["[_nghost-%COMP%]     .mat-progress-spinner{position:fixed;z-index:1000;top:50%;left:50%;transform:translate(-50%,-50%)}.progress[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.25);z-index:999}"]}),t})()},GlWI:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});var r=function(t){return t.startImageSrc='url("./../../../../../assets/images/mini-games/sprint/sprinter-step-1.png")',t.runImageSrc='url("./../../../../../assets/images/mini-games/sprint/sprinter-step-2.png")',t.sprintImageSrc='url("./../../../../../assets/images/mini-games/sprint/sprinter-step-3.png")',t.finishImageSrc='url("./../../../../../assets/images/mini-games/sprint/sprinter-step-4.png")',t}({}),i=function(t){return t.CORRECT="../../../assets/sounds/mini-games/right.mp3",t.WRONG="../../../assets/sounds/mini-games/wrong.mp3",t.LEVELUP="../../../assets/sounds/mini-games/sprint/level-up.mp3",t}({}),s=function(t){return t.CORRECT="#00ff00cc",t.WRONG="#ff0000cc",t}({});const o=1},I58c:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return c}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u});const r="rslang-short-term-statistics",i={backgroundColor:"rgba(117, 117, 117, 0.2)",borderColor:"rgba(117, 117, 117, 1)",pointBackgroundColor:"rgba(117, 117, 117, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(117, 117, 117, 1)"},s={backgroundColor:"rgb(3, 155, 229, 0.3)",borderColor:"rgb(3, 155, 229, 1)",pointBackgroundColor:"rgb(3, 155, 229, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(3, 155, 229, 0.8)"},o="rgba(3, 155, 229, 0.3)",c="rgba(3, 155, 229)",a="\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u041d\u043e\u0432\u044b\u0445 \u0418\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0421\u043b\u043e\u0432",u="\u0421\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u0430\u044f \u0421\u0443\u043c\u043c\u0430 \u0418\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0421\u043b\u043e\u0432"},ITGz:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("lJxs"),i=n("G8mm"),s=n("fXoL"),o=n("uP9m"),c=n("f4AX");let a=(()=>{class t{constructor(t,e){this.statisticsService=t,this.userService=e}getStatistics(){const t=this.userService.getUserId();return t?this.statisticsService.getUserStatistics(t):null}getStatisticsByGroups(){const t=this.getStatistics();return t?t.pipe(Object(r.a)(t=>this.calculateStatisticsByGroups(t))):null}calculateStatisticsByGroups(t){var e,n;const r=null===(n=null===(e=null==t?void 0:t.optional)||void 0===e?void 0:e.statistics)||void 0===n?void 0:n.trainings,s={};return r.forEach(t=>{const e=t.wordsGroup;s[e]||(s[e]={learnedWords:new Set,correctAnswers:0,wrongAnswers:0}),s[e].learnedWords=new Set([...s[e].learnedWords,...t.wordsIds]),s[e].correctAnswers+=(t.answers||[]).filter(t=>t===i.a.CORRECT).length,s[e].wrongAnswers+=(t.answers||[]).filter(t=>t===i.a.WRONG).length}),s}setStatistics(t,e,n){const r=this.userService.getUserId();if(!r)return;const i=this.getStatistics();if(!i)return;const s=i.subscribe(e=>{null==e||delete e.id;const i=this.addStatistics(e,t,n),o=this.statisticsService.updateUserStatistics(r,i).subscribe(()=>{o.unsubscribe()});s.unsubscribe()},e=>{if("Not Found"===e.statusText){const e={learnedWords:t.length,optional:{statistics:{trainings:[{timeStamp:Date.now(),wordsIds:t.map(t=>t.id),answers:t.map(t=>t.result),wordsGroup:n}]}}},i=this.statisticsService.updateUserStatistics(r,e).subscribe(()=>{i.unsubscribe()});s.unsubscribe()}})}addStatistics(t,e,n){var r,i,s;let o=t;return(null===(s=null===(i=null===(r=null==o?void 0:o.optional)||void 0===r?void 0:r.statistics)||void 0===i?void 0:i.trainings)||void 0===s?void 0:s.length)?(o.optional.statistics.trainings.push({timeStamp:Date.now(),wordsIds:e.map(t=>t.id),answers:e.map(t=>t.result),wordsGroup:n}),o.learnedWords=this.countLearnedWords(o.optional.statistics.trainings)):o={learnedWords:e.length,optional:{statistics:{trainings:[{timeStamp:Date.now(),wordsIds:e.map(t=>t.id),answers:e.map(t=>t.result),wordsGroup:n}]}}},o}countLearnedWords(t){let e=new Set;return t.forEach(t=>{e=new Set([...e,...t.wordsIds])}),e.size}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(o.a),s.Wb(c.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OpGh:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});const r=30,i="0"},QAlT:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("I58c"),i=n("fXoL"),s=n("UYTb");let o=(()=>{class t{constructor(t){this.storageService=t}getStatistics(){let t=this.storageService.getItem(r.e);if(t){const e=new Date;t=t.filter(t=>{const n=new Date(t.timeStamp);return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}),t=t.filter(t=>t.trainedWords.length>0),t.length>0?this.storageService.setItem(r.e,t):(this.storageService.removeItem(r.e),t=null)}return t}setStatistics(t,e){let n=this.getStatistics();n||(n=[]),n.push({trainedWords:t,gamePlayed:e,timeStamp:Date.now()}),this.storageService.setItem(r.e,n)}}return t.\u0275fac=function(e){return new(e||t)(i.Wb(s.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Y45k:function(t,e,n){"use strict";n.d(e,"a",function(){return s});const r="Something went wrong. Check the form inputs";var i=n("fXoL");let s=(()=>{class t{constructor(){}parseError(t){if(Array.isArray(t.errors)&&t.errors.length){const[{message:e}]=t.errors;return null!=e?e:r}return r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},eotD:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return o});var r=function(t){return t.SETUP="SETUP",t.READY="READY",t.PLAY="PLAY",t.PAUSE="PAUSE",t.OVER="OVER",t}({}),i=function(t){return t.CORRECT="CORRECT",t.WRONG="WRONG",t.LEVELUP="LEVEL-UP",t}({}),s=function(t){return t[t.ZERO=0]="ZERO",t[t.FIRST=4]="FIRST",t[t.SECOND=8]="SECOND",t[t.THIRD=12]="THIRD",t}({}),o=function(t){return t.RIGHT="ArrowRight",t.LEFT="ArrowLeft",t}({})},mMYO:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return a}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return l});var r=n("eotD"),i=n("GlWI"),s=n("OpGh");function o(t){return Math.floor(Math.random()*t)}function c(t){return t<r.d.FIRST?1:t<r.d.SECOND?2:t<r.d.THIRD?4:8}function a(t){const e=new Audio;e.src=t===r.c.CORRECT?i.c.CORRECT:t===r.c.WRONG?i.c.WRONG:t===r.c.LEVELUP?i.c.LEVELUP:`data:audio/mpeg;base64,${t}`,e.play()}function u(t){let e=0;function n(){const n=new Audio;n.src=t[e],n.removeEventListener("ended",r),n.addEventListener("ended",r,!0),n.play()}function r(){e+=1,e<t.length&&n()}n()}function l(){const t=[];for(;t.length<3;){const e=o(s.b);t.includes(e)||t.push(e)}return t}},s3XV:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("fXoL"),i=n("bTqV"),s=n("ofXK"),o=n("Qu3c"),c=n("NFeN");function a(t,e){if(1&t&&r.Ob(0,"img",9),2&t){const t=r.dc();r.jc("src",t.image,r.wc)}}const u=function(t){return{"file-input__preview-image--filled":t}};let l=(()=>{class t{constructor(){this.loadFileEvent=new r.n}onSelect(t){const e=t.target;if(e&&e.files){const t=e.files[0],n=new FileReader;n.onload=()=>{var t;return this.loadFileEvent.emit(null===(t=null==n?void 0:n.result)||void 0===t?void 0:t.toString())},t&&n.readAsDataURL(t)}}remove(t){t.preventDefault(),t.stopPropagation(),this.loadFileEvent.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-file-input"]],inputs:{image:"image"},outputs:{loadFileEvent:"loadFileEvent"},decls:11,vars:4,consts:[[1,"file-input"],["type","button","mat-stroked-button","",3,"click"],[1,"file-input__load-button","color-text-togglable"],[1,"file-input__preview-image",3,"ngClass","click"],["class","file-input__image",3,"src","alt",4,"ngIf"],["mat-icon-button","","aria-label","Remove photo","matTooltip","\u0423\u0434\u0430\u043b\u0438\u0442\u044c",1,"file-input__remove-photo-btn",3,"click"],[1,"color-text-togglable"],["type","file","accept","image/*",1,"file-input__input",3,"change"],["fileUploader",""],[1,"file-input__image",3,"src","alt"]],template:function(t,e){if(1&t){const t=r.Tb();r.Sb(0,"div",0),r.Sb(1,"button",1),r.Zb("click",function(){return r.uc(t),r.qc(10).click()}),r.Sb(2,"span",2),r.Ec(3,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"),r.Rb(),r.Rb(),r.Sb(4,"div",3),r.Zb("click",function(){return r.uc(t),r.qc(10).click()}),r.Cc(5,a,1,1,"img",4),r.Sb(6,"button",5),r.Zb("click",function(t){return e.remove(t)}),r.Sb(7,"mat-icon",6),r.Ec(8,"close"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(9,"input",7,8),r.Zb("change",function(t){return e.onSelect(t)}),r.Rb()}2&t&&(r.Cb(4),r.jc("ngClass",r.mc(2,u,e.image)),r.Cb(1),r.jc("ngIf",e.image))},directives:[i.b,s.k,s.m,o.a,c.a],styles:["[_nghost-%COMP%]{width:100%}.file-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.file-input__load-button[_ngcontent-%COMP%]{opacity:.5}.file-input__preview-image[_ngcontent-%COMP%]{width:4rem;height:4rem;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:1px dashed #b0b0b0;cursor:pointer;position:relative}.file-input__preview-image--filled[_ngcontent-%COMP%]{border-color:#00e676}.file-input__preview-image--filled[_ngcontent-%COMP%]:hover   .file-input__remove-photo-btn[_ngcontent-%COMP%]{display:flex}.file-input__image[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:50%}.file-input__remove-photo-btn[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem;display:none;justify-content:center;align-items:center;background-color:rgba(0,0,0,.5);top:-.875rem;right:-.875rem;position:absolute;transition:opacity .3s ease-in-out}.file-input__input[_ngcontent-%COMP%]{visibility:hidden;max-width:0;max-height:0}.file-input[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),t})()},uP9m:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("fXoL"),i=n("tk/3"),s=n("qc5V");let o=(()=>{class t{constructor(t,e){this.http=t,this.api=e,this.apiUrl=e.baseApiUrl}getUserStatistics(t){return this.http.get(`${this.apiUrl}/users/${t}/statistics`)}updateUserStatistics(t,e){return this.http.put(`${this.apiUrl}/users/${t}/statistics`,e)}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(i.b),r.Wb(s.a))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);