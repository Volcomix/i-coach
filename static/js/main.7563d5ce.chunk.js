(this["webpackJsonpi-coach"]=this["webpackJsonpi-coach"]||[]).push([[0],{111:function(e,t,a){e.exports=a(123)},123:function(e,t,a){"use strict";a.r(t);var n=a(185),i=a(184),r=a(0),o=a.n(r),c=a(9),s=a.n(c),l=a(11),d=a(83),u=a(44),m=a(30),p=a(169),h=a(171),k=a(165),f=a(124),g=a(168),b=a(167),v=a(162),y=a(188),T=a(170),w=a(40),E=a(57),S=a.n(E),x=a(55),O=a.n(x),F=[{name:"Soft Touch Front",prepareTime:10,workTime:30},{name:"Soft Touch Side",prepareTime:10,workTime:30},{name:"Soft Touch Backhand",prepareTime:10,workTime:30},{name:"Soft Touch Around Side",prepareTime:10,workTime:30},{name:"Soft Touch Around Backhand",prepareTime:10,workTime:30},{name:"Slide Bottom Hand",prepareTime:10,workTime:30},{name:"Roll Puck Front",prepareTime:10,workTime:30},{name:"Roll Puck Side",prepareTime:10,workTime:30},{name:"Wide Move Front",prepareTime:10,workTime:30},{name:"Wide Move Side",prepareTime:10,workTime:30},{name:"Wide Move To Soft Touch",prepareTime:10,workTime:30},{name:"Forehand Ls",prepareTime:10,workTime:30},{name:"Backhand Ls",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Shoot",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Fake To Slide",prepareTime:10,workTime:30},{name:"Backhand Fake",prepareTime:10,workTime:30},{name:"Forehand Fake",prepareTime:10,workTime:30},{name:"Fake Snapshot",prepareTime:10,workTime:30},{name:"Fake Wristshot",prepareTime:10,workTime:30},{name:"Pump Fake",prepareTime:10,workTime:30},{name:"Backhand Toe Pull",prepareTime:10,workTime:30},{name:"Backhand Toe Drag",prepareTime:10,workTime:30},{name:"Backhand To Forehand Toey",prepareTime:10,workTime:30},{name:"5-Points Toe Drag",prepareTime:10,workTime:30},{name:"Back To Front Toe Drag",prepareTime:10,workTime:30},{name:"Toe Drag Front",prepareTime:10,workTime:30},{name:"Toe Drag Side",prepareTime:10,workTime:30},{name:"Yo Yo Toe",prepareTime:10,workTime:30},{name:"8 Start Forehand",prepareTime:20,workTime:40},{name:"8 Start Backhand",prepareTime:20,workTime:40},{name:"Infinity",prepareTime:20,workTime:40},{name:"Infinity Toe",prepareTime:20,workTime:40},{name:"Side Datsyuk",prepareTime:20,workTime:40},{name:"Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side And Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side Datsyuk L",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide + L",prepareTime:20,workTime:40},{name:"4 Pucks Slide",prepareTime:20,workTime:40},{name:"4 Pucks Infinity Slide",prepareTime:20,workTime:40},{name:"Side Datsyuk To 8",prepareTime:20,workTime:40},{name:"Double Side Datsyuk Stack",prepareTime:20,workTime:40}],P=Object(v.a)((function(e){return Object(y.a)({list:{marginBottom:e.spacing(9)},appBar:{top:"auto",bottom:0},totalTime:{justifyContent:"center","& > *:not(:first-child)":{marginLeft:e.spacing(2)}},startButton:{position:"absolute",zIndex:1,top:"-50%",right:e.spacing(2)}})}));function j(){var e=P(),t=F.reduce((function(e,t){return e+t.prepareTime+t.workTime}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{className:e.list},F.map((function(e,t){var a=e.prepareTime+e.workTime;return o.a.createElement(f.a,{key:t},o.a.createElement(b.a,{primary:e.name}),o.a.createElement(g.a,null,o.a.createElement(w.a,{variant:"body2",color:"textSecondary"},I(a))))}))),o.a.createElement(p.a,{className:e.appBar,position:"fixed",color:"inherit"},o.a.createElement(T.a,{className:e.totalTime},o.a.createElement(O.a,{color:"primary"}),o.a.createElement(w.a,null,"Total time"),o.a.createElement(w.a,null,I(t)),o.a.createElement(h.a,{className:e.startButton,color:"primary",component:u.b,to:"/training"},o.a.createElement(S.a,null)))))}function I(e){var t=String(Math.floor(e/60)).padStart(2,"0"),a=String(e%60).padStart(2,"0");return"".concat(t,":").concat(a)}var B,C=a(72),D=a.n(C),N=a(85),W=a(16),A=a(64),H=a(174),M=a(172),L=a(173),q=a(175),R=a(12),U=a(86),J=a.n(U),Y=a(88),z=a.n(Y),Q=a(89),K=a.n(Q),V=a(87),$=a.n(V),G=a(63);!function(e){e[e.Prepare=0]="Prepare",e[e.Work=1]="Work"}(B||(B={}));var X=Object(v.a)((function(e){return Object(y.a)({root:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&.disabled":{cursor:"auto"}},backButton:{position:"absolute",top:e.spacing(1),left:e.spacing(1)},intervalTime:{marginTop:-e.spacing(12),width:"min(100vw, 70vh)",height:"min(100vw, 70vh)",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"calc(0.4 * min(100vw, 70vh))",fontWeight:500},intervalProgress:{position:"absolute",top:e.spacing(3),right:e.spacing(3),bottom:e.spacing(3),left:e.spacing(3)},intervalProgressTrack:{position:"absolute",opacity:.1},intervalProgressIndicator:{"&.running .MuiCircularProgress-circle":{transitionDuration:"1s",transitionTimingFunction:"linear"},"&.running.done .MuiCircularProgress-circle":{transitionDuration:"300ms",transitionTimingFunction:e.transitions.easing.easeInOut}},exercise:{marginLeft:e.spacing(1),marginRight:e.spacing(1),display:"flex",flexDirection:"column",textAlign:"center"},next:Object(W.a)({},e.typography.h4,{height:"calc(".concat(e.typography.h4.lineHeight," * ").concat(e.typography.h4.fontSize,")"),color:e.palette.text.secondary}),exerciseName:Object(W.a)({},e.typography.h3,{height:"calc(".concat(e.typography.h3.lineHeight," * ").concat(e.typography.h3.fontSize,")"),fontWeight:500}),trainingProgress:{height:e.spacing(1)},appBar:{top:"auto",bottom:-e.spacing(9),transition:"bottom ".concat(e.transitions.duration.short,"ms ").concat(e.transitions.easing.easeInOut),"&.open":{bottom:0}},controlBar:{minHeight:e.spacing(9),justifyContent:"center"},playPauseButton:{backgroundColor:e.palette.text.primary,color:e.palette.background.paper,boxShadow:e.shadows[0],"&:hover":{backgroundColor:Object(R.d)(e.palette.text.primary,e.palette.action.hoverOpacity)}}})}));function Z(){var e=X(),t=Object(m.f)(),a=Object(r.useState)(0),n=Object(l.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(B.Prepare),d=Object(l.a)(s,2),u=d[0],k=d[1],f=Object(r.useState)(0),g=Object(l.a)(f,2),b=g[0],v=g[1],y=Object(r.useState)(!1),E=Object(l.a)(y,2),x=E[0],O=E[1],P=Object(r.useState)(!1),j=Object(l.a)(P,2),I=j[0],C=j[1],W=Object(r.useState)(!1),R=Object(l.a)(W,2),U=R[0],Y=R[1],Q=F[i],V=u===B.Prepare?Q.prepareTime:Q.workTime,Z=0,_=0;return F.forEach((function(e,t){var a=e.prepareTime+e.workTime;t<i?Z+=a:t===i&&(u===B.Work&&(Z+=e.prepareTime),Z+=b),_+=a})),Object(r.useEffect)((function(){setTimeout((function(){C(!0)}),0)}),[]),Object(r.useEffect)((function(){if(I){var e=null;return function(){t.apply(this,arguments)}(),function(){null!==e&&(e.release(),e=null)}}function t(){return(t=Object(N.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("wakeLock"in navigator)){t.next=10;break}return t.prev=1,t.next=4,navigator.wakeLock.request("screen");case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error("".concat(t.t0.name,", ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}}),[I]),Object(r.useEffect)((function(){if(I){var e=setInterval((function(){v((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}}),[I]),Object(r.useEffect)((function(){if(b===V){if(u===B.Prepare)k(B.Work);else{if(i===F.length-1)return t.goBack();c(i+1),k(B.Prepare)}v(0)}else b===V-1&&setTimeout((function(){I&&Y(!0)}),650);Y(!1)}),[t,i,u,b,V,I]),o.a.createElement(A.a,{component:"div",className:Object(G.a)(e.root,x&&"disabled"),disableTouchRipple:x,onClick:function(){x||(C(!1),O(!0))}},o.a.createElement(M.a,{in:x},o.a.createElement(L.a,{className:e.backButton,color:"inherit",onClick:function(){return t.goBack()}},o.a.createElement(J.a,null))),o.a.createElement(w.a,{className:e.intervalTime,variant:"h1",color:V-b>3?"textPrimary":u===B.Prepare?"primary":"secondary"},V-b,o.a.createElement("div",{className:e.intervalProgress},o.a.createElement(H.a,{className:e.intervalProgressTrack,variant:"determinate",color:u===B.Prepare?"primary":"secondary",size:"100%",thickness:1.5,value:100}),o.a.createElement(H.a,{className:Object(G.a)(e.intervalProgressIndicator,I&&"running",U&&"done"),variant:"static",color:u===B.Prepare?"primary":"secondary",size:"100%",thickness:1.5,value:I&&U?0:100*(I?b+1:b)/V}))),o.a.createElement("div",{className:e.exercise},o.a.createElement("span",{className:e.next},u===B.Prepare&&"Next"),o.a.createElement("span",{className:e.exerciseName},Q.name)),o.a.createElement(p.a,{className:Object(G.a)(e.appBar,x&&"open"),position:"fixed",color:"inherit"},o.a.createElement(q.a,{className:e.trainingProgress,variant:"determinate",value:100*Z/_}),o.a.createElement(T.a,{className:e.controlBar},o.a.createElement(L.a,{color:"inherit",disabled:0===i&&u===B.Prepare&&0===b,onClick:function(){u===B.Prepare&&0===b?c(i-1):(k(B.Prepare),v(0))}},o.a.createElement($.a,null)),o.a.createElement(h.a,{className:e.playPauseButton,onClick:function(){I||O(!1),C(!I)}},I?o.a.createElement(z.a,null):o.a.createElement(S.a,null)),o.a.createElement(L.a,{color:"inherit",disabled:i===F.length-1,onClick:function(){c(i+1),k(B.Prepare),v(0)}},o.a.createElement(K.a,null)))))}function _(e){return o.a.createElement(k.a,null,e.exercises.ids.map((function(t){var a=e.exercises.byId[t];return o.a.createElement(f.a,{key:t},o.a.createElement(b.a,{primary:a.name,secondary:a.description}))})))}var ee=Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"column",marginBottom:e.spacing(2),"& > *, & > .MuiFormControl-root":{marginTop:e.spacing(2)},"& .MuiFab-root":{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}}}));function te(e){var t=ee();return o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},e.children)}var ae=a(183),ne=a(186),ie=a(177),re=a(178),oe=a(189),ce=a(179),se=a(176),le=a(92),de=a.n(le),ue=a(91),me=a.n(ue),pe=a(90),he=a.n(pe),ke={prepare:o.a.createElement(he.a,null),work:o.a.createElement(me.a,null),break:o.a.createElement(O.a,null)},fe=Object(v.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},iconField:{alignSelf:"flex-start",minWidth:80}}})),ge=Object(r.forwardRef)((function(e,t){return o.a.createElement(se.a,Object.assign({direction:"up",ref:t},e))}));function be(e){var t=fe(),a=Object(r.useState)(""),n=Object(l.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(""),d=Object(l.a)(s,2),u=d[0],m=d[1],h=Object(r.useState)(""),k=Object(l.a)(h,2),f=k[0],g=k[1];function b(){e.onClose()}return o.a.createElement(oe.a,{fullScreen:!0,open:e.open,onClose:b,TransitionComponent:ge},o.a.createElement(p.a,{className:t.appBar},o.a.createElement(T.a,null,o.a.createElement(L.a,{edge:"start",color:"inherit",onClick:b},o.a.createElement(de.a,null)),o.a.createElement(w.a,{variant:"h6",className:t.title},"New exercise"),o.a.createElement(ie.a,{autoFocus:!0,color:"inherit",onClick:function(){e.onClose({id:e.exercises.nextId,icon:i,name:u,description:f})}},"Save"))),o.a.createElement(re.a,{maxWidth:"sm"},o.a.createElement(te,null,o.a.createElement(ne.a,{select:!0,label:"Icon",className:t.iconField,value:i,onChange:function(e){c(e.target.value)}},Object.entries(ke).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return o.a.createElement(ce.a,{key:a,value:a},n)}))),o.a.createElement(ne.a,{label:"Name",value:u,onChange:function(e){m(e.target.value)}}),o.a.createElement(ne.a,{label:"Description",value:f,onChange:function(e){g(e.target.value)}}))))}var ve=a(180),ye=a(99),Te=a(95),we=a.n(Te),Ee=a(94),Se=a.n(Ee),xe=a(96),Oe=a.n(xe),Fe=a(93),Pe=a.n(Fe);function je(e){var t=Object(r.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Boolean(n);return o.a.createElement("div",null,o.a.createElement(L.a,{onClick:function(e){i(e.currentTarget)}},o.a.createElement(Pe.a,null)),o.a.createElement(ye.a,{anchorEl:n,keepMounted:!0,open:c,onClose:function(){i(null)}},o.a.createElement(ce.a,{onClick:function(){e.onAddBeforeClick(),i(null)}},o.a.createElement(ve.a,null,o.a.createElement(Se.a,null)),o.a.createElement(b.a,{primary:"Add interval before"})),o.a.createElement(ce.a,{onClick:function(){e.onAddAfterClick(),i(null)}},o.a.createElement(ve.a,null,o.a.createElement(we.a,null)),o.a.createElement(b.a,{primary:"Add interval after"})),o.a.createElement(ce.a,{onClick:function(){e.onDeleteClick(),i(null)}},o.a.createElement(ve.a,null,o.a.createElement(Oe.a,null)),o.a.createElement(b.a,{primary:"Delete interval"}))))}var Ie=a(190),Be=a(62),Ce=a(181),De=a(182),Ne=a(97),We=a.n(Ne),Ae=Object(v.a)({avatar:{backgroundColor:Be.a[100],color:Be.a[600]}});function He(e){var t=Ae();function a(t){e.onClose(t)}return o.a.createElement(oe.a,{open:e.open,onClose:function(){e.onClose()}},o.a.createElement(Ce.a,null,"Exercise"),o.a.createElement(k.a,null,e.exercises.ids.map((function(n){var i=e.exercises.byId[n];return o.a.createElement(f.a,{key:i.id,button:!0,onClick:function(){return a(i)}},o.a.createElement(De.a,null,o.a.createElement(Ie.a,{className:t.avatar},ke[i.icon])),o.a.createElement(b.a,{primary:i.name}))})),o.a.createElement(f.a,{autoFocus:!0,button:!0,onClick:function(){return a("create")}},o.a.createElement(De.a,null,o.a.createElement(Ie.a,null,o.a.createElement(We.a,null))),o.a.createElement(b.a,{primary:"Add exercise"}))))}var Me=Object(r.createContext)(null),Le=Object(r.createContext)(null),qe=(Object(r.createContext)(null),Object(v.a)((function(){return{root:{display:"flex",alignItems:"center"},time:{flex:1}}})));function Re(e){var t=e.exercises.byId[e.interval.exerciseId],a=qe(),n=Object(r.useContext)(Me),i=Object(r.useContext)(Le),c=Object(r.useState)({type:null,isNewInterval:!1,newIntervalPosition:null}),s=Object(l.a)(c,2),d=s[0],u=s[1],m="select"===d.type,p="create"===d.type;return o.a.createElement("div",{className:a.root},o.a.createElement(L.a,{onClick:function(){u({type:"select",isNewInterval:!1,newIntervalPosition:null})}},ke[t.icon]),o.a.createElement(ne.a,{label:t.name,type:"number",className:a.time,value:e.interval.time,onChange:function(t){n({type:"update",item:Object(W.a)({},e.interval,{time:Number(t.target.value)})})},InputProps:{endAdornment:o.a.createElement(ae.a,{position:"end"},"sec")}}),o.a.createElement(je,{onAddBeforeClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"before"})},onAddAfterClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"after"})},onDeleteClick:function(){n({type:"delete",item:e.interval})}}),o.a.createElement(He,{exercises:e.exercises,open:m,onClose:function(t){if("create"!==t){if(u(Object(W.a)({},d,{type:null})),t)if(d.isNewInterval){var a=Object(W.a)({},e.interval);a.id=e.intervals.nextId,a.exerciseId=t.id;var i={type:"add",item:a};d.newIntervalPosition&&(i[d.newIntervalPosition]=e.interval),n(i)}else n({type:"update",item:Object(W.a)({},e.interval,{exerciseId:t.id})})}else u(Object(W.a)({},d,{type:"create"}))}}),o.a.createElement(be,{open:p,exercises:e.exercises,onClose:function(t){if(u(Object(W.a)({},d,{type:null})),t){var a=e.exercises.nextId;if(i({type:"add",item:t}),d.isNewInterval){var r=Object(W.a)({},e.interval);r.id=e.intervals.nextId,r.exerciseId=a;var o={type:"add",item:r};d.newIntervalPosition&&(o[d.newIntervalPosition]=e.interval),n(o)}else n({type:"update",item:Object(W.a)({},e.interval,{exerciseId:a})})}}}))}function Ue(e){return o.a.createElement(te,null,e.intervals.ids.map((function(t){return o.a.createElement(Re,{key:t,interval:e.intervals.byId[t],intervals:e.intervals,exercises:e.exercises})})))}var Je=a(101),Ye=a(100),ze=a(73),Qe=a(47);function Ke(e,t){switch(t.type){case"add":var a=t.before?e.ids.indexOf(t.before.id):t.after?e.ids.indexOf(t.after.id)+1:e.ids.length;return{byId:Object(W.a)({},e.byId,Object(Qe.a)({},t.item.id,t.item)),ids:[].concat(Object(ze.a)(e.ids.slice(0,a)),[t.item.id],Object(ze.a)(e.ids.slice(a))),nextId:e.nextId+1};case"update":return{byId:Object(W.a)({},e.byId,Object(Qe.a)({},t.item.id,t.item)),ids:e.ids,nextId:e.nextId};case"delete":var n=e.byId,i=t.item.id;n[i];return{byId:Object(Je.a)(n,[i].map(Ye.a)),ids:e.ids.filter((function(e){return e!==t.item.id})),nextId:e.nextId};default:return e}}for(var Ve={byId:{0:{id:0,exerciseId:0,time:10},1:{id:1,exerciseId:2,time:30},2:{id:2,exerciseId:1,time:10}},ids:[0,1,2],nextId:3},$e={byId:{0:{id:0,icon:"prepare",name:"Prepare"},1:{id:1,icon:"break",name:"Break"},2:{id:2,icon:"work",name:"Work"}},ids:[0,1,2],nextId:3},Ge={byId:{},ids:[],nextId:0},Xe=0,Ze=[{name:"Warm-up",description:"Improve fundamental movements",difficulty:1,exercises:[{name:"Wide Move Front",description:"Move the puck wide in front, side to side, shift weight, loose bottom hand"},{name:"Wide Move Side",description:"Move the puck wide on the forehand side, front to back, loose bottom hand"},{name:"Soft Touch Side",description:"Quick puck touches on the forehand side. Focus on an active top hand"},{name:"Soft Touch Front",description:"Quick puck touches in front, roll top hand to control puck"},{name:"Soft Touch Backhand",description:"Quick puck touches on the backhand, top hand does most of the work"},{name:"Soft Touch Around",description:"Quick puck touches while moving the puck around the body"},{name:"Slide Bottom Hand",description:"Stickhandling with the top hand, while sliding the bottom hand up and down"},{name:"Roll Puck Side",description:"Spin the puck by moving the blade around it (You can reverse directions)"},{name:"Roll Puck Front",description:"Spin the puck by moving the blade around it (You can reverse directions)"}]},{name:"Moves and Fakes",description:"Work on some standard fakes and moves",difficulty:1,exercises:[{name:"Backhand Fake",description:"A quick move to the backhand, then go forehand"},{name:"Fake Backhand to Forehand",description:"Double fake, backhand, forehand, finish on backhand"},{name:"Fake Forehand to Backhand",description:"Double fake, forehand, backhand, finish on forehand"},{name:"Fake Snapshot",description:"Step to inside leg, hands out, pump fake, catch on backhand"},{name:"Fake Wristshot",description:"Step to outside leg, hands out, catch puck on backhand"},{name:"Forehand fake",description:"Quick move to the forehand, go backhand"},{name:"Pump Fake",description:"Pump hands out, show blade, go to the backhand"},{name:"Stick Fake",description:"Wave stick over the puck quickly one way, move the puck the other way"}]},{name:"Use Your Feet",description:"Work on some standard fakes and moves",difficulty:2,exercises:[{name:"Backhand Drop Back",description:"Use the backhand to drop the puck between your legs, then recover behind you"},{name:"Backhand Kick Up",description:"Use the backhand to move the puck behind you, move it up through your legs"},{name:"Forehand to Backhand Kick Up",description:"Drop the puck back on forehand side, tap it through legs with back of the blade"},{name:"Forehand Drop Back",description:"Drop the puck through legs with the forehand, pick up behind on backhand"},{name:"Forehand Kick Up",description:"Bring puck behind on the forehand, use forehand to put it off inside foot and up"},{name:"Kick Ups",description:"Use forehand and backhand to drop puck to feet, then kick it back up"},{name:"Side Inside Foot",description:"Puck at side of body, pulled to far leg inside foot, kicked back"},{name:"Side of Foot",description:"Puck at side of body, pulled to closest leg, outside foot, kicked back"}]},{name:"Toe Drags",description:"Master the toe drag and backhand",difficulty:2,exercises:[{name:"Backhand Toey",description:"Puck starts at side, pushed forward, moved across body with back of blade"},{name:"Backhand to Forehand Toey",description:"Standard backhand toe drag, finished with a toe drag back"},{name:"Back to Front",description:"Puck behind body, toe drag it in, then move it in front of body"},{name:"Toe Drag Dribble",description:"Non-stop quick toe drags around the body, any direction"},{name:"Toe Drag Front",description:"Puck at side, push it to the front, toe drag it back"},{name:"Toe Drag Side",description:"Puck at side, push it out to the side, toe drag it back"},{name:"Toe Drag Through Legs",description:"Puck in front, toe drag it back through legs, tap it forwards"},{name:"Yo Yo Toe",description:"Continuous push puck front, toe drag back, push to the side, toe drag back"}]},{name:"Challenges",description:"Unique stickhandling challenges",difficulty:2,exercises:[{name:"Butt End Tap",description:"Continuous puck movement using the butt end of your stick to tap the puck"},{name:"Close Hands Tap",description:"Hands very close together, quick touches around body"},{name:"Mini Sticks",description:"Choke up both hands close to the blade, bend knees, quick stickhandling"},{name:"One Leg Balance",description:"Balance on one leg, freestyle stickhandling while holding balance"},{name:"One Hand Reach",description:"Move puck quickly to backhand, reach as far as possible with one hand"},{name:"One Hand Tap",description:"One hand only on top of stick, quick touches, focus on rolling wrist"},{name:"One Hand Toe Drag",description:"One handed toe drags in front"},{name:"On Your Knees",description:"Stickhandle while on knees"}]},{name:"Broken Stick",description:"A new use for your stick",difficulty:3,exercises:[{name:"Backhand Over",description:"Chip the puck over the stick using the back of your blade"},{name:"Balance on Stick",description:"Balance on the stick with one foot while quickly stickhandling"},{name:"Jump",description:"Jump left and right over the stick while stickhandling"},{name:"Stick in Front",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick in Front Long",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick to the Side",description:"With the stick lengthwise beside you, move the puck around the stick"},{name:"Stick Side Flick",description:"Pull the puck in with the toe and tap it over the stick at your side"},{name:"Stick Side Toey",description:"Continuously toe drag the puck in quickly around the stick"}]},{name:"Footwork",description:"Improve footwork used in games",difficulty:3,exercises:[{name:"Backward to Forward",description:"Focus on the proper footwork to turn from backwards to forwards"},{name:"Continuous Open Hip",description:"Made famous by Crosby, focus on heel to heel, knees bent"},{name:"Crossover 123",description:"The hands and feet move together, count the 1-2-3 rhythm"},{name:"Fast Hands Fast Feet",description:"Stutter steps while doing soft touch stickhandling, move all around"},{name:"Fast Jump",description:"Stutter step, jump and transfer weight, repeat"},{name:"Forward to Backward",description:"Focus on the footwork and stickwork for better transitions"},{name:"Separate Hands and Feet",description:"Feet go one way, the puck goes the other"},{name:"Toe Drag Jump",description:"Toe drag the puck in, then push it out and jump"}]},{name:"2 Pucks",description:"8 drills using 2 pucks",difficulty:3,exercises:[{name:"2 Puck Juggle",description:"Try to keep two pucks moving at once, move all around"},{name:"Juggle Through Legs",description:"Try to get a continuous through the legs cycle"},{name:"Puck Swap Front",description:"How fast can you continuously swap places with the pucks"},{name:"Puck Swap Side",description:"Make quick movements to swap the pucks"},{name:"Puck Swap Side",description:"Have the pucks spread wide, circle one puck, then swap and repeat"},{name:"Around the Puck Front",description:"Stickhandling around the puck, switch directions, freestyle for more of a challenge"},{name:"Around the Puck Side",description:"With the puck to the side, stickhandle around, switch directions periodically"},{name:"Snipe It",description:"Pass one puck to the other, quickly move and repeat"}]},{name:"Pucks",description:"Use pucks as obstacles",difficulty:2,exercises:[{name:"Vertical Figure 8"},{name:"Inifinity Front"}]},{name:"Datsyuk",description:"Stickhandling drills with a Pavel Datsyuk variation",difficulty:3,exercises:[{name:"Side Datsyuk"},{name:"Behind Datsyuk"},{name:"Side and Behind Datsyuk"},{name:"Side, 45, Behind Datsyuk"},{name:'Side Datsyuk "L" BH Over Puck 3'},{name:"Side Datsyuk to Wide BH Over Puck 3"},{name:"Side Datsyuk to Wide BH Over Puck 3 FH Over Puck 4"},{name:"Side Datsyuk FH Around Puck 3"},{name:"Side Datsyuk BH Around Puck 3"},{name:"Four Puck Outside In Slide"},{name:"Four Puck Infinity Slide"},{name:"Side Datsyuk to BH Through Vertical Figure 8"},{name:"Front Stickhandle Quick Pull to Side Datsyuk"},{name:"Side Datsyuk Pull Through the Legs"},{name:"Double Side Datsyuk Stack"}]}];Xe<Ze.length;Xe++){var _e=Ze[Xe],et=Ge.nextId;Ge.byId[et]={id:et,name:_e.name,description:_e.description,difficulty:_e.difficulty},Ge.ids.push(et),Ge.nextId++;var tt,at=Object(d.a)(_e.exercises);try{for(at.s();!(tt=at.n()).done;){var nt=tt.value,it=$e.nextId;$e.byId[it]={id:it,icon:"work",name:nt.name,description:nt.description,category:et},$e.ids.push(it),$e.nextId++}}catch(dt){at.e(dt)}finally{at.f()}}function rt(){var e=Object(r.useReducer)(Ke,Ve),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(r.useReducer)(Ke,$e),c=Object(l.a)(i,2),s=c[0],d=c[1];return o.a.createElement(u.a,{basename:"/i-coach"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/"},o.a.createElement(j,null)),o.a.createElement(m.a,{exact:!0,path:"/training"},o.a.createElement(Z,null)),o.a.createElement(m.a,{exact:!0,path:"/training/legacy"},o.a.createElement(Me.Provider,{value:n},o.a.createElement(Le.Provider,{value:d},o.a.createElement(Ue,{intervals:a,exercises:s})))),o.a.createElement(m.a,{exact:!0,path:"/exercises"},o.a.createElement(_,{exercises:s}))))}var ot=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var st=a(98),lt=Object(st.a)({palette:{primary:{main:"#0256ee"},secondary:{main:"#ee0255"},background:{default:"#FFFFFF",paper:"#FFFFFF"}}});s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{theme:lt},o.a.createElement(n.a,null),o.a.createElement(rt,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/i-coach",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/i-coach","/service-worker.js");ot?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ct(t,e)}))}}()}},[[111,1,2]]]);
//# sourceMappingURL=main.7563d5ce.chunk.js.map