(this["webpackJsonpi-coach"]=this["webpackJsonpi-coach"]||[]).push([[0],{115:function(e,t,a){e.exports=a(127)},127:function(e,t,a){"use strict";a.r(t);var n=a(188),r=a(187),i=a(0),o=a.n(i),c=a(9),s=a.n(c),l=a(13),u=a(86),d=a(45),p=a(14),m=a(171),h=a(173),k=a(167),f=a(128),g=a(170),b=a(169),v=a(164),y=a(191),w=a(172),D=a(42),x=a(62),E=a.n(x),O=a(60),S=a.n(O),j=[{name:"Soft Touch Front",prepareDuration:10,workDuration:30},{name:"Soft Touch Side",prepareDuration:10,workDuration:30},{name:"Soft Touch Backhand",prepareDuration:10,workDuration:30},{name:"Soft Touch Around Side",prepareDuration:10,workDuration:30},{name:"Soft Touch Around Backhand",prepareDuration:10,workDuration:30},{name:"Slide Bottom Hand",prepareDuration:10,workDuration:30},{name:"Roll Puck Front",prepareDuration:10,workDuration:30},{name:"Roll Puck Side",prepareDuration:10,workDuration:30},{name:"Wide Move Front",prepareDuration:10,workDuration:30},{name:"Wide Move Side",prepareDuration:10,workDuration:30},{name:"Wide Move To Soft Touch",prepareDuration:10,workDuration:30},{name:"Forehand Ls",prepareDuration:10,workDuration:30},{name:"Backhand Ls",prepareDuration:10,workDuration:30},{name:"Soft Touch, Pull To Shoot",prepareDuration:10,workDuration:30},{name:"Soft Touch, Pull To Fake To Slide",prepareDuration:10,workDuration:30},{name:"Backhand Fake",prepareDuration:10,workDuration:30},{name:"Forehand Fake",prepareDuration:10,workDuration:30},{name:"Fake Snapshot",prepareDuration:10,workDuration:30},{name:"Fake Wristshot",prepareDuration:10,workDuration:30},{name:"Pump Fake",prepareDuration:10,workDuration:30},{name:"Backhand Toe Pull",prepareDuration:10,workDuration:30},{name:"Backhand Toe Drag",prepareDuration:10,workDuration:30},{name:"Backhand To Forehand Toey",prepareDuration:10,workDuration:30},{name:"5-Points Toe Drag",prepareDuration:10,workDuration:30},{name:"Back To Front Toe Drag",prepareDuration:10,workDuration:30},{name:"Toe Drag Front",prepareDuration:10,workDuration:30},{name:"Toe Drag Side",prepareDuration:10,workDuration:30},{name:"Yo Yo Toe",prepareDuration:10,workDuration:30},{name:"8 Start Forehand",prepareDuration:20,workDuration:40},{name:"8 Start Backhand",prepareDuration:20,workDuration:40},{name:"Infinity",prepareDuration:20,workDuration:40},{name:"Infinity Toe",prepareDuration:20,workDuration:40},{name:"Side Datsyuk",prepareDuration:20,workDuration:40},{name:"Behind Datsyuk",prepareDuration:20,workDuration:40},{name:"Side And Behind Datsyuk",prepareDuration:20,workDuration:40},{name:"Side Datsyuk L",prepareDuration:20,workDuration:40},{name:"Side Datsyuk To Wide",prepareDuration:20,workDuration:40},{name:"Side Datsyuk To Wide + L",prepareDuration:20,workDuration:40},{name:"4 Pucks Slide",prepareDuration:20,workDuration:40},{name:"4 Pucks Infinity Slide",prepareDuration:20,workDuration:40},{name:"Side Datsyuk To 8",prepareDuration:20,workDuration:40},{name:"Double Side Datsyuk Stack",prepareDuration:20,workDuration:40}],F=Object(v.a)((function(e){return Object(y.a)({list:{marginBottom:e.spacing(9)},bottomAppBar:{top:"auto",bottom:0},trainingDuration:{justifyContent:"center","& > *:not(:first-child)":{marginLeft:e.spacing(2)}},startButton:{position:"absolute",zIndex:1,top:"-50%",right:e.spacing(2)}})}));function I(){var e=F(),t=j.reduce((function(e,t){return e+t.prepareDuration+t.workDuration}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{className:e.list},j.map((function(e,t){var a=e.prepareDuration+e.workDuration;return o.a.createElement(f.a,{key:t},o.a.createElement(b.a,{primary:e.name}),o.a.createElement(g.a,null,o.a.createElement(D.a,{variant:"body2",color:"textSecondary"},C(a))))}))),o.a.createElement(m.a,{className:e.bottomAppBar,position:"fixed",color:"inherit"},o.a.createElement(w.a,{className:e.trainingDuration},o.a.createElement(S.a,{color:"primary"}),o.a.createElement(D.a,null,"Training duration"),o.a.createElement(D.a,null,C(t)),o.a.createElement(h.a,{className:e.startButton,color:"primary",component:d.b,to:"/training"},o.a.createElement(E.a,null)))))}function C(e){var t=String(Math.floor(e/60)).padStart(2,"0"),a=String(e%60).padStart(2,"0");return"".concat(t,":").concat(a)}function T(e){return o.a.createElement(k.a,null,e.exercises.ids.map((function(t){var a=e.exercises.byId[t];return o.a.createElement(f.a,{key:t},o.a.createElement(b.a,{primary:a.name,secondary:a.description}))})))}var P=Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"column",marginBottom:e.spacing(2),"& > *, & > .MuiFormControl-root":{marginTop:e.spacing(2)},"& .MuiFab-root":{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}}}));function B(e){var t=P();return o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},e.children)}var N=a(10),W=a(176),A=a(184),L=a(189),M=a(177),H=a(178),R=a(192),q=a(180),U=a(174),Y=a(89),J=a.n(Y),z=a(88),Q=a.n(z),K=a(87),X=a.n(K),V={prepare:o.a.createElement(X.a,null),work:o.a.createElement(Q.a,null),break:o.a.createElement(S.a,null)},$=Object(v.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},iconField:{alignSelf:"flex-start",minWidth:80}}})),G=Object(i.forwardRef)((function(e,t){return o.a.createElement(U.a,Object.assign({direction:"up",ref:t},e))}));function Z(e){var t=$(),a=Object(i.useState)(""),n=Object(l.a)(a,2),r=n[0],c=n[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],h=Object(i.useState)(""),k=Object(l.a)(h,2),f=k[0],g=k[1];function b(){e.onClose()}return o.a.createElement(R.a,{fullScreen:!0,open:e.open,onClose:b,TransitionComponent:G},o.a.createElement(m.a,{className:t.appBar},o.a.createElement(w.a,null,o.a.createElement(W.a,{edge:"start",color:"inherit",onClick:b},o.a.createElement(J.a,null)),o.a.createElement(D.a,{variant:"h6",className:t.title},"New exercise"),o.a.createElement(M.a,{autoFocus:!0,color:"inherit",onClick:function(){e.onClose({id:e.exercises.nextId,icon:r,name:d,description:f})}},"Save"))),o.a.createElement(H.a,{maxWidth:"sm"},o.a.createElement(B,null,o.a.createElement(L.a,{select:!0,label:"Icon",className:t.iconField,value:r,onChange:function(e){c(e.target.value)}},Object.entries(V).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return o.a.createElement(q.a,{key:a,value:a},n)}))),o.a.createElement(L.a,{label:"Name",value:d,onChange:function(e){p(e.target.value)}}),o.a.createElement(L.a,{label:"Description",value:f,onChange:function(e){g(e.target.value)}}))))}var _=a(181),ee=a(102),te=a(92),ae=a.n(te),ne=a(91),re=a.n(ne),ie=a(93),oe=a.n(ie),ce=a(90),se=a.n(ce);function le(e){var t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],r=a[1],c=Boolean(n);return o.a.createElement("div",null,o.a.createElement(W.a,{onClick:function(e){r(e.currentTarget)}},o.a.createElement(se.a,null)),o.a.createElement(ee.a,{anchorEl:n,keepMounted:!0,open:c,onClose:function(){r(null)}},o.a.createElement(q.a,{onClick:function(){e.onAddBeforeClick(),r(null)}},o.a.createElement(_.a,null,o.a.createElement(re.a,null)),o.a.createElement(b.a,{primary:"Add interval before"})),o.a.createElement(q.a,{onClick:function(){e.onAddAfterClick(),r(null)}},o.a.createElement(_.a,null,o.a.createElement(ae.a,null)),o.a.createElement(b.a,{primary:"Add interval after"})),o.a.createElement(q.a,{onClick:function(){e.onDeleteClick(),r(null)}},o.a.createElement(_.a,null,o.a.createElement(oe.a,null)),o.a.createElement(b.a,{primary:"Delete interval"}))))}var ue=a(193),de=a(66),pe=a(182),me=a(183),he=a(94),ke=a.n(he),fe=Object(v.a)({avatar:{backgroundColor:de.a[100],color:de.a[600]}});function ge(e){var t=fe();function a(t){e.onClose(t)}return o.a.createElement(R.a,{open:e.open,onClose:function(){e.onClose()}},o.a.createElement(pe.a,null,"Exercise"),o.a.createElement(k.a,null,e.exercises.ids.map((function(n){var r=e.exercises.byId[n];return o.a.createElement(f.a,{key:r.id,button:!0,onClick:function(){return a(r)}},o.a.createElement(me.a,null,o.a.createElement(ue.a,{className:t.avatar},V[r.icon])),o.a.createElement(b.a,{primary:r.name}))})),o.a.createElement(f.a,{autoFocus:!0,button:!0,onClick:function(){return a("create")}},o.a.createElement(me.a,null,o.a.createElement(ue.a,null,o.a.createElement(ke.a,null))),o.a.createElement(b.a,{primary:"Add exercise"}))))}var be=Object(i.createContext)(null),ve=Object(i.createContext)(null),ye=(Object(i.createContext)(null),Object(v.a)((function(){return{root:{display:"flex",alignItems:"center"},time:{flex:1}}})));function we(e){var t=e.exercises.byId[e.interval.exerciseId],a=ye(),n=Object(i.useContext)(be),r=Object(i.useContext)(ve),c=Object(i.useState)({type:null,isNewInterval:!1,newIntervalPosition:null}),s=Object(l.a)(c,2),u=s[0],d=s[1],p="select"===u.type,m="create"===u.type;return o.a.createElement("div",{className:a.root},o.a.createElement(W.a,{onClick:function(){d({type:"select",isNewInterval:!1,newIntervalPosition:null})}},V[t.icon]),o.a.createElement(L.a,{label:t.name,type:"number",className:a.time,value:e.interval.time,onChange:function(t){n({type:"update",item:Object(N.a)(Object(N.a)({},e.interval),{},{time:Number(t.target.value)})})},InputProps:{endAdornment:o.a.createElement(A.a,{position:"end"},"sec")}}),o.a.createElement(le,{onAddBeforeClick:function(){d({type:"select",isNewInterval:!0,newIntervalPosition:"before"})},onAddAfterClick:function(){d({type:"select",isNewInterval:!0,newIntervalPosition:"after"})},onDeleteClick:function(){n({type:"delete",item:e.interval})}}),o.a.createElement(ge,{exercises:e.exercises,open:p,onClose:function(t){if("create"!==t){if(d(Object(N.a)(Object(N.a)({},u),{},{type:null})),t)if(u.isNewInterval){var a=Object(N.a)({},e.interval);a.id=e.intervals.nextId,a.exerciseId=t.id;var r={type:"add",item:a};u.newIntervalPosition&&(r[u.newIntervalPosition]=e.interval),n(r)}else n({type:"update",item:Object(N.a)(Object(N.a)({},e.interval),{},{exerciseId:t.id})})}else d(Object(N.a)(Object(N.a)({},u),{},{type:"create"}))}}),o.a.createElement(Z,{open:m,exercises:e.exercises,onClose:function(t){if(d(Object(N.a)(Object(N.a)({},u),{},{type:null})),t){var a=e.exercises.nextId;if(r({type:"add",item:t}),u.isNewInterval){var i=Object(N.a)({},e.interval);i.id=e.intervals.nextId,i.exerciseId=a;var o={type:"add",item:i};u.newIntervalPosition&&(o[u.newIntervalPosition]=e.interval),n(o)}else n({type:"update",item:Object(N.a)(Object(N.a)({},e.interval),{},{exerciseId:a})})}}}))}function De(e){return o.a.createElement(B,null,e.intervals.ids.map((function(t){return o.a.createElement(we,{key:t,interval:e.intervals.byId[t],intervals:e.intervals,exercises:e.exercises})})))}var xe=a(103),Ee=a(101),Oe=a(75),Se=a(49);function je(e,t){switch(t.type){case"add":var a=t.before?e.ids.indexOf(t.before.id):t.after?e.ids.indexOf(t.after.id)+1:e.ids.length;return{byId:Object(N.a)(Object(N.a)({},e.byId),{},Object(Se.a)({},t.item.id,t.item)),ids:[].concat(Object(Oe.a)(e.ids.slice(0,a)),[t.item.id],Object(Oe.a)(e.ids.slice(a))),nextId:e.nextId+1};case"update":return{byId:Object(N.a)(Object(N.a)({},e.byId),{},Object(Se.a)({},t.item.id,t.item)),ids:e.ids,nextId:e.nextId};case"delete":var n=e.byId,r=t.item.id;n[r];return{byId:Object(xe.a)(n,[r].map(Ee.a)),ids:e.ids.filter((function(e){return e!==t.item.id})),nextId:e.nextId};default:return e}}var Fe=a(74),Ie=a.n(Fe),Ce=a(95),Te=a(67),Pe=a(186),Be=a(175),Ne=a(179),We=a(99),Ae=a.n(We),Le=a(3),Me=a(52),He=a(51),Re=a(185),qe=a(15),Ue=a(97),Ye=a.n(Ue),Je=a(98),ze=a.n(Je),Qe=a(96),Ke=a.n(Qe),Xe=Object(v.a)((function(e){return Object(y.a)({root:{top:"auto",bottom:0,transform:"translateY(".concat(e.spacing(9),"px)"),transition:"transform ".concat(e.transitions.duration.short,"ms ").concat(e.transitions.easing.easeInOut),'&[aria-expanded="true"]':{transform:"none"}},trainingProgress:{height:e.spacing(1)},controls:{minHeight:e.spacing(9),justifyContent:"center"},playButton:{backgroundColor:e.palette.text.primary,color:e.palette.background.paper,boxShadow:e.shadows[0],"&:hover":{backgroundColor:Object(qe.d)(e.palette.text.primary,e.palette.action.hoverOpacity)}}})}));function Ve(e){var t=Xe();return o.a.createElement(m.a,{role:"toolbar","aria-expanded":!e.isTimerRunning,className:t.root,position:"fixed",color:"inherit"},o.a.createElement(Re.a,{className:t.trainingProgress,variant:"determinate",value:100*e.trainingCurrentTime/e.trainingDuration}),o.a.createElement(w.a,{className:t.controls},o.a.createElement(W.a,{"aria-label":"previous",color:"inherit",disabled:0===e.trainingCurrentTime,onClick:e.onPreviousClick},o.a.createElement(Ke.a,null)),e.isTimerRunning?o.a.createElement(h.a,{"aria-label":"pause",className:t.playButton,onClick:e.onPlayClick},o.a.createElement(Ye.a,null)):o.a.createElement(h.a,{"aria-label":"play",className:t.playButton,onClick:e.onPlayClick},o.a.createElement(E.a,null)),o.a.createElement(W.a,{"aria-label":"next",color:"inherit",disabled:e.exerciseIndex===e.exerciseCount-1,onClick:e.onNextClick},o.a.createElement(ze.a,null))))}Object(v.a)((function(e){return Object(y.a)({root:{display:"flex",flexDirection:"column",alignItems:"center","&.slide-left":{"--exit-translate-x":"-200px","--enter-translate-x":"200px"},"&.slide-right":{"--exit-translate-x":"200px","--enter-translate-x":"-200px"}},next:{color:e.palette.text.secondary},exerciseName:{fontWeight:500,"&.appear, &.enter":{opacity:0,transform:"translateX(var(--enter-translate-x))"},"&.appear-active, &.enter-active":{opacity:1,transform:"none",transition:"opacity 100ms linear, transform 100ms ".concat(e.transitions.easing.easeOut)},"&.exit":{opacity:1,transform:"none"},"&.exit-active":{opacity:0,transform:"translateX(var(--exit-translate-x))",transition:"opacity 100ms linear, transform 100ms ".concat(e.transitions.easing.easeIn)}}})}));Object(v.a)((function(e){return Object(y.a)({progress:{transition:"color ".concat(e.transitions.duration.short,"ms ").concat(e.transitions.easing.easeOut),'&[aria-label="prepare"], &.prepare':{color:e.palette.text.secondary}},track:{opacity:.1},indicator:{position:"absolute","&.running .MuiCircularProgress-circle":{transitionDuration:"1s",transitionTimingFunction:"linear"},"&.ending .MuiCircularProgress-circle":{transitionDuration:"300ms",transitionTimingFunction:e.transitions.easing.easeInOut}}})}));var $e;Object(v.a)((function(e){return Object(y.a)({root:{position:"absolute",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:500,transition:"color ".concat(e.transitions.duration.short,"ms ").concat(e.transitions.easing.easeOut),'&[aria-label="prepare"]':{color:e.palette.text.secondary},'&[aria-label="work"]':{color:e.palette.text.primary},'&[aria-live="assertive"] > *':{animation:"$pulsate 500ms ".concat(e.transitions.easing.easeInOut)}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"25%":{transform:"scale(1.5)"},"100%":{transform:"scale(1)"}}})}));!function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}($e||($e={}));var Ge=Object(v.a)((function(e){return Object(y.a)({root:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&.disabled":{cursor:"auto"},overflowX:"hidden"},backButton:{position:"absolute",top:e.spacing(1),left:e.spacing(1)},interval:{position:"relative",display:"flex"},intervalTime:{marginTop:-e.spacing(12),width:"min(100vw, 70vh)",height:"min(100vw, 70vh)",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"calc(0.4 * min(100vw, 70vh))",fontWeight:500,transitionProperty:"color",transitionDuration:"".concat(e.transitions.duration.short,"ms"),transitionTimingFunction:e.transitions.easing.easeOut,"& .MuiCircularProgress-svg":{transitionProperty:"color",transitionDuration:"".concat(e.transitions.duration.short,"ms"),transitionTimingFunction:e.transitions.easing.easeOut}},intervalTimeSeconds:{transition:"transform ".concat(e.transitions.duration.short,"ms ").concat(e.transitions.easing.easeOut),".countdown &.enter":{transform:"scale(1)"},".countdown &.enter-active":{transform:"scale(1.001)",transition:"transform 500ms cubic-bezier(0, 0, 0.5, 250)"}},intervalProgress:{position:"absolute",top:e.spacing(3),right:e.spacing(3),bottom:e.spacing(3),left:e.spacing(3)},intervalProgressTrack:{position:"absolute",opacity:.1},intervalProgressIndicator:{"&.running .MuiCircularProgress-circle":{transitionDuration:"1s",transitionTimingFunction:"linear"},"&.running.done .MuiCircularProgress-circle":{transitionDuration:"300ms",transitionTimingFunction:e.transitions.easing.easeInOut}},exercise:{marginLeft:e.spacing(1),marginRight:e.spacing(1),display:"flex",flexDirection:"column",textAlign:"center"},next:Object(N.a)(Object(N.a)({},e.typography.h4),{},{height:"calc(".concat(e.typography.h4.lineHeight," * ").concat(e.typography.h4.fontSize,")"),color:e.palette.text.secondary}),exerciseName:Object(N.a)(Object(N.a)({},e.typography.h3),{},{height:"calc(".concat(e.typography.h3.lineHeight," * ").concat(e.typography.h3.fontSize,")"),fontWeight:500,"&.appear, &.enter":{opacity:0,transform:"translateX(var(--enter-translate-x))"},"&.appear-active, &.enter-active":{opacity:1,transform:"none",transition:"opacity 100ms linear, transform 100ms ".concat(e.transitions.easing.easeOut)},"&.exit":{opacity:1,transform:"none"},"&.exit-active":{opacity:0,transform:"translateX(var(--exit-translate-x))",transition:"opacity 100ms linear, transform 100ms ".concat(e.transitions.easing.easeIn)}})})}));function Ze(){var e=Ge(),t=Object(p.f)(),a=Object(i.useState)(0),n=Object(l.a)(a,2),r=n[0],c=n[1],s=Object(i.useState)("prepare"),u=Object(l.a)(s,2),d=u[0],m=u[1],h=Object(i.useState)(0),k=Object(l.a)(h,2),f=k[0],g=k[1],b=Object(i.useState)(!1),v=Object(l.a)(b,2),y=v[0],w=v[1],x=Object(i.useState)(!1),E=Object(l.a)(x,2),O=E[0],S=E[1],F=Object(i.useState)($e.Left),I=Object(l.a)(F,2),C=I[0],T=I[1],P=Object(i.useState)(Date.now()),B=Object(l.a)(P,2),N=B[0],A=B[1],L=Object(i.useState)(null),M=Object(l.a)(L,2),H=M[0],R=M[1],q=j[r],U="prepare"===d?q.prepareDuration:q.workDuration,Y=0,J=0;return j.forEach((function(e,t){var a=e.prepareDuration+e.workDuration;t<r?Y+=a:t===r&&("work"===d&&(Y+=e.prepareDuration),Y+=f),J+=a})),Object(i.useEffect)((function(){setTimeout((function(){w(!0)}),0)}),[]),Object(i.useEffect)((function(){if(y){var e=null;return function(){t.apply(this,arguments)}(),function(){null!==e&&(e.release(),e=null)}}function t(){return(t=Object(Ce.a)(Ie.a.mark((function t(){return Ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("wakeLock"in navigator)){t.next=10;break}return t.prev=1,t.next=4,navigator.wakeLock.request("screen");case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error("".concat(t.t0.name,", ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}}),[y]),Object(i.useEffect)((function(){if(y){var e=setInterval((function(){g((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}}),[y]),Object(i.useEffect)((function(){if(f===U){if("prepare"===d)m("work");else{if(r===j.length-1)return t.goBack();c(r+1),m("prepare")}g(0),S(!1)}else if(y&&f===U-1){var e=setTimeout((function(){S(!0)}),650);return function(){clearTimeout(e)}}}),[t,r,d,f,U,y]),Object(i.useEffect)((function(){if(window.AudioContext){var e=new AudioContext;return R(e),function(){e.close()}}}),[]),Object(i.useEffect)((function(){var e=U-f;if(H&&y&&!(e>3)){var t=H.createOscillator();t.type="triangle",t.frequency.value=0===e?880:523.2511,t.connect(H.destination),t.start(),t.stop(H.currentTime+(0===e?.5:.3))}}),[f,U,y,H]),o.a.createElement(Te.a,{component:"div","aria-label":"pause",className:Object(Le.a)(e.root,!y&&"disabled"),disableTouchRipple:!y,onClick:function(){y&&(w(!1),S(!1))}},o.a.createElement(Be.a,{in:!y},o.a.createElement(W.a,{"aria-label":"back",className:e.backButton,color:"inherit",onClick:function(){return t.goBack()}},o.a.createElement(Ae.a,null))),o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{className:Object(Le.a)(e.intervalTime,y&&U-f<=3&&"countdown"),variant:"h1",color:"prepare"===d?"textSecondary":"textPrimary"},o.a.createElement(He.a,null,o.a.createElement(Me.a,{key:"".concat(N,"-").concat(f),timeout:500,exit:!1},o.a.createElement("span",{className:e.intervalTimeSeconds},U-f))),o.a.createElement("div",{className:e.intervalProgress},o.a.createElement(Pe.a,{className:e.intervalProgressTrack,variant:"determinate",color:"prepare"===d?"inherit":"primary",size:"100%",thickness:1.5,value:100}),o.a.createElement(Pe.a,{className:Object(Le.a)(e.intervalProgressIndicator,y&&"running",O&&"done"),variant:"static",color:"prepare"===d?"inherit":"primary",size:"100%",thickness:1.5,value:O?0:100*(y?f+1:f)/U}))),o.a.createElement("div",{className:e.exercise,style:{"--enter-translate-x":C===$e.Left?"200px":"-200px","--exit-translate-x":C===$e.Left?"-200px":"200px"}},o.a.createElement("div",{className:e.next},o.a.createElement(Ne.a,{in:"prepare"===d},o.a.createElement("div",null,"Next"))),o.a.createElement(He.a,null,o.a.createElement(Me.a,{key:r,timeout:100,appear:!0},o.a.createElement("span",{className:e.exerciseName},q.name))))),o.a.createElement(Ve,{exerciseIndex:r,exerciseCount:j.length,trainingCurrentTime:Y,trainingDuration:J,isTimerRunning:y,onPreviousClick:function(){"prepare"===d&&0===f?(c(r-1),T($e.Right)):(m("prepare"),g(0))},onPlayClick:function(){y||(T($e.Left),A(Date.now())),w(!y)},onNextClick:function(){c(r+1),m("prepare"),g(0),T($e.Left)}}))}for(var _e={byId:{0:{id:0,exerciseId:0,time:10},1:{id:1,exerciseId:2,time:30},2:{id:2,exerciseId:1,time:10}},ids:[0,1,2],nextId:3},et={byId:{0:{id:0,icon:"prepare",name:"Prepare"},1:{id:1,icon:"break",name:"Break"},2:{id:2,icon:"work",name:"Work"}},ids:[0,1,2],nextId:3},tt={byId:{},ids:[],nextId:0},at=0,nt=[{name:"Warm-up",description:"Improve fundamental movements",difficulty:1,exercises:[{name:"Wide Move Front",description:"Move the puck wide in front, side to side, shift weight, loose bottom hand"},{name:"Wide Move Side",description:"Move the puck wide on the forehand side, front to back, loose bottom hand"},{name:"Soft Touch Side",description:"Quick puck touches on the forehand side. Focus on an active top hand"},{name:"Soft Touch Front",description:"Quick puck touches in front, roll top hand to control puck"},{name:"Soft Touch Backhand",description:"Quick puck touches on the backhand, top hand does most of the work"},{name:"Soft Touch Around",description:"Quick puck touches while moving the puck around the body"},{name:"Slide Bottom Hand",description:"Stickhandling with the top hand, while sliding the bottom hand up and down"},{name:"Roll Puck Side",description:"Spin the puck by moving the blade around it (You can reverse directions)"},{name:"Roll Puck Front",description:"Spin the puck by moving the blade around it (You can reverse directions)"}]},{name:"Moves and Fakes",description:"Work on some standard fakes and moves",difficulty:1,exercises:[{name:"Backhand Fake",description:"A quick move to the backhand, then go forehand"},{name:"Fake Backhand to Forehand",description:"Double fake, backhand, forehand, finish on backhand"},{name:"Fake Forehand to Backhand",description:"Double fake, forehand, backhand, finish on forehand"},{name:"Fake Snapshot",description:"Step to inside leg, hands out, pump fake, catch on backhand"},{name:"Fake Wristshot",description:"Step to outside leg, hands out, catch puck on backhand"},{name:"Forehand fake",description:"Quick move to the forehand, go backhand"},{name:"Pump Fake",description:"Pump hands out, show blade, go to the backhand"},{name:"Stick Fake",description:"Wave stick over the puck quickly one way, move the puck the other way"}]},{name:"Use Your Feet",description:"Work on some standard fakes and moves",difficulty:2,exercises:[{name:"Backhand Drop Back",description:"Use the backhand to drop the puck between your legs, then recover behind you"},{name:"Backhand Kick Up",description:"Use the backhand to move the puck behind you, move it up through your legs"},{name:"Forehand to Backhand Kick Up",description:"Drop the puck back on forehand side, tap it through legs with back of the blade"},{name:"Forehand Drop Back",description:"Drop the puck through legs with the forehand, pick up behind on backhand"},{name:"Forehand Kick Up",description:"Bring puck behind on the forehand, use forehand to put it off inside foot and up"},{name:"Kick Ups",description:"Use forehand and backhand to drop puck to feet, then kick it back up"},{name:"Side Inside Foot",description:"Puck at side of body, pulled to far leg inside foot, kicked back"},{name:"Side of Foot",description:"Puck at side of body, pulled to closest leg, outside foot, kicked back"}]},{name:"Toe Drags",description:"Master the toe drag and backhand",difficulty:2,exercises:[{name:"Backhand Toey",description:"Puck starts at side, pushed forward, moved across body with back of blade"},{name:"Backhand to Forehand Toey",description:"Standard backhand toe drag, finished with a toe drag back"},{name:"Back to Front",description:"Puck behind body, toe drag it in, then move it in front of body"},{name:"Toe Drag Dribble",description:"Non-stop quick toe drags around the body, any direction"},{name:"Toe Drag Front",description:"Puck at side, push it to the front, toe drag it back"},{name:"Toe Drag Side",description:"Puck at side, push it out to the side, toe drag it back"},{name:"Toe Drag Through Legs",description:"Puck in front, toe drag it back through legs, tap it forwards"},{name:"Yo Yo Toe",description:"Continuous push puck front, toe drag back, push to the side, toe drag back"}]},{name:"Challenges",description:"Unique stickhandling challenges",difficulty:2,exercises:[{name:"Butt End Tap",description:"Continuous puck movement using the butt end of your stick to tap the puck"},{name:"Close Hands Tap",description:"Hands very close together, quick touches around body"},{name:"Mini Sticks",description:"Choke up both hands close to the blade, bend knees, quick stickhandling"},{name:"One Leg Balance",description:"Balance on one leg, freestyle stickhandling while holding balance"},{name:"One Hand Reach",description:"Move puck quickly to backhand, reach as far as possible with one hand"},{name:"One Hand Tap",description:"One hand only on top of stick, quick touches, focus on rolling wrist"},{name:"One Hand Toe Drag",description:"One handed toe drags in front"},{name:"On Your Knees",description:"Stickhandle while on knees"}]},{name:"Broken Stick",description:"A new use for your stick",difficulty:3,exercises:[{name:"Backhand Over",description:"Chip the puck over the stick using the back of your blade"},{name:"Balance on Stick",description:"Balance on the stick with one foot while quickly stickhandling"},{name:"Jump",description:"Jump left and right over the stick while stickhandling"},{name:"Stick in Front",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick in Front Long",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick to the Side",description:"With the stick lengthwise beside you, move the puck around the stick"},{name:"Stick Side Flick",description:"Pull the puck in with the toe and tap it over the stick at your side"},{name:"Stick Side Toey",description:"Continuously toe drag the puck in quickly around the stick"}]},{name:"Footwork",description:"Improve footwork used in games",difficulty:3,exercises:[{name:"Backward to Forward",description:"Focus on the proper footwork to turn from backwards to forwards"},{name:"Continuous Open Hip",description:"Made famous by Crosby, focus on heel to heel, knees bent"},{name:"Crossover 123",description:"The hands and feet move together, count the 1-2-3 rhythm"},{name:"Fast Hands Fast Feet",description:"Stutter steps while doing soft touch stickhandling, move all around"},{name:"Fast Jump",description:"Stutter step, jump and transfer weight, repeat"},{name:"Forward to Backward",description:"Focus on the footwork and stickwork for better transitions"},{name:"Separate Hands and Feet",description:"Feet go one way, the puck goes the other"},{name:"Toe Drag Jump",description:"Toe drag the puck in, then push it out and jump"}]},{name:"2 Pucks",description:"8 drills using 2 pucks",difficulty:3,exercises:[{name:"2 Puck Juggle",description:"Try to keep two pucks moving at once, move all around"},{name:"Juggle Through Legs",description:"Try to get a continuous through the legs cycle"},{name:"Puck Swap Front",description:"How fast can you continuously swap places with the pucks"},{name:"Puck Swap Side",description:"Make quick movements to swap the pucks"},{name:"Puck Swap Side",description:"Have the pucks spread wide, circle one puck, then swap and repeat"},{name:"Around the Puck Front",description:"Stickhandling around the puck, switch directions, freestyle for more of a challenge"},{name:"Around the Puck Side",description:"With the puck to the side, stickhandle around, switch directions periodically"},{name:"Snipe It",description:"Pass one puck to the other, quickly move and repeat"}]},{name:"Pucks",description:"Use pucks as obstacles",difficulty:2,exercises:[{name:"Vertical Figure 8"},{name:"Inifinity Front"}]},{name:"Datsyuk",description:"Stickhandling drills with a Pavel Datsyuk variation",difficulty:3,exercises:[{name:"Side Datsyuk"},{name:"Behind Datsyuk"},{name:"Side and Behind Datsyuk"},{name:"Side, 45, Behind Datsyuk"},{name:'Side Datsyuk "L" BH Over Puck 3'},{name:"Side Datsyuk to Wide BH Over Puck 3"},{name:"Side Datsyuk to Wide BH Over Puck 3 FH Over Puck 4"},{name:"Side Datsyuk FH Around Puck 3"},{name:"Side Datsyuk BH Around Puck 3"},{name:"Four Puck Outside In Slide"},{name:"Four Puck Infinity Slide"},{name:"Side Datsyuk to BH Through Vertical Figure 8"},{name:"Front Stickhandle Quick Pull to Side Datsyuk"},{name:"Side Datsyuk Pull Through the Legs"},{name:"Double Side Datsyuk Stack"}]}];at<nt.length;at++){var rt=nt[at],it=tt.nextId;tt.byId[it]={id:it,name:rt.name,description:rt.description,difficulty:rt.difficulty},tt.ids.push(it),tt.nextId++;var ot,ct=Object(u.a)(rt.exercises);try{for(ct.s();!(ot=ct.n()).done;){var st=ot.value,lt=et.nextId;et.byId[lt]={id:lt,icon:"work",name:st.name,description:st.description,category:it},et.ids.push(lt),et.nextId++}}catch(kt){ct.e(kt)}finally{ct.f()}}function ut(){var e=Object(i.useReducer)(je,_e),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(i.useReducer)(je,et),c=Object(l.a)(r,2),s=c[0],u=c[1];return o.a.createElement(d.a,{basename:"/i-coach"},o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/"},o.a.createElement(I,null)),o.a.createElement(p.a,{exact:!0,path:"/training"},o.a.createElement(Ze,null)),o.a.createElement(p.a,{exact:!0,path:"/training/legacy"},o.a.createElement(be.Provider,{value:n},o.a.createElement(ve.Provider,{value:u},o.a.createElement(De,{intervals:a,exercises:s})))),o.a.createElement(p.a,{exact:!0,path:"/exercises"},o.a.createElement(T,{exercises:s}))))}var dt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var mt=a(100),ht=Object(mt.a)({palette:{primary:{main:"#0256ee"},secondary:{main:"#ee0255"},background:{default:"#FFFFFF",paper:"#FFFFFF"}}});s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{theme:ht},o.a.createElement(n.a,null),o.a.createElement(ut,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/i-coach",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/i-coach","/service-worker.js");dt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pt(t,e)}))}}()}},[[115,1,2]]]);
//# sourceMappingURL=main.a336eede.chunk.js.map