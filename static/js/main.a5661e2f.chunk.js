(this["webpackJsonpi-coach"]=this["webpackJsonpi-coach"]||[]).push([[0],{102:function(e,t,a){e.exports=a(113)},113:function(e,t,a){"use strict";a.r(t);var n=a(174),i=a(173),r=a(0),o=a.n(r),c=a(9),s=a.n(c),d=a(12),l=a(77),u=a(55),m=a(30),p=a(160),h=a(162),k=a(156),f=a(114),g=a(159),v=a(158),b=a(153),y=a(178),T=a(161),w=a(40),S=a(79),E=a.n(S),x=a(53),F=a.n(x),O=[{name:"Soft Touch Front",prepareTime:10,workTime:30},{name:"Soft Touch Side",prepareTime:10,workTime:30},{name:"Soft Touch Backhand",prepareTime:10,workTime:30},{name:"Soft Touch Around Side",prepareTime:10,workTime:30},{name:"Soft Touch Around Backhand",prepareTime:10,workTime:30},{name:"Slide Bottom Hand",prepareTime:10,workTime:30},{name:"Roll Puck Front",prepareTime:10,workTime:30},{name:"Roll Puck Side",prepareTime:10,workTime:30},{name:"Wide Move Front",prepareTime:10,workTime:30},{name:"Wide Move Side",prepareTime:10,workTime:30},{name:"Wide Move To Soft Touch",prepareTime:10,workTime:30},{name:"Forehand Ls",prepareTime:10,workTime:30},{name:"Backhand Ls",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Shoot",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Fake To Slide",prepareTime:10,workTime:30},{name:"Backhand Fake",prepareTime:10,workTime:30},{name:"Forehand Fake",prepareTime:10,workTime:30},{name:"Fake Snapshot",prepareTime:10,workTime:30},{name:"Fake Wristshot",prepareTime:10,workTime:30},{name:"Pump Fake",prepareTime:10,workTime:30},{name:"Stick Fake",prepareTime:10,workTime:30},{name:"Backhand Toe Pull",prepareTime:10,workTime:30},{name:"Backhand Toe Drag",prepareTime:10,workTime:30},{name:"Backhand To Forehand Toey",prepareTime:10,workTime:30},{name:"5-Points Toe Drag",prepareTime:10,workTime:30},{name:"Back To Front Toe Drag",prepareTime:10,workTime:30},{name:"Toe Drag Front",prepareTime:10,workTime:30},{name:"Toe Drag Side",prepareTime:10,workTime:30},{name:"Yo Yo Toe",prepareTime:10,workTime:30},{name:"8 Start Forehand",prepareTime:20,workTime:40},{name:"8 Start Backhand",prepareTime:20,workTime:40},{name:"Infinity",prepareTime:20,workTime:40},{name:"Infinity Toe",prepareTime:20,workTime:40},{name:"Side Datsyuk",prepareTime:20,workTime:40},{name:"Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side And Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side Datsyuk L",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide + L",prepareTime:20,workTime:40},{name:"4 Pucks Slide",prepareTime:20,workTime:40},{name:"4 Pucks Infinity Slide",prepareTime:20,workTime:40},{name:"Side Datsyuk To 8",prepareTime:20,workTime:40},{name:"Double Side Datsyuk Stack",prepareTime:20,workTime:40}],I=Object(b.a)((function(e){return Object(y.a)({list:{marginBottom:e.spacing(9)},appBar:{top:"auto",bottom:0},totalTime:{justifyContent:"center","& > *:not(:first-child)":{marginLeft:e.spacing(2)}},startButton:{position:"absolute",zIndex:1,top:"-50%",right:e.spacing(2)}})}));function j(){var e=I(),t=O.reduce((function(e,t){return e+t.prepareTime+t.workTime}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{className:e.list},O.map((function(e,t){var a=e.prepareTime+e.workTime;return o.a.createElement(f.a,{key:t},o.a.createElement(v.a,{primary:e.name}),o.a.createElement(g.a,null,o.a.createElement(w.a,{variant:"body2",color:"textSecondary"},P(a))))}))),o.a.createElement(p.a,{className:e.appBar,position:"fixed",color:"inherit"},o.a.createElement(T.a,{className:e.totalTime},o.a.createElement(F.a,{color:"primary"}),o.a.createElement(w.a,null,"Total time"),o.a.createElement(w.a,null,P(t)),o.a.createElement(h.a,{className:e.startButton,color:"primary",component:u.b,to:"/training"},o.a.createElement(E.a,null)))))}function P(e){var t=String(Math.floor(e/60)).padStart(2,"0"),a=String(e%60).padStart(2,"0");return"".concat(t,":").concat(a)}var B,C=a(15),D=a(163);!function(e){e[e.Prepare=0]="Prepare",e[e.Work=1]="Work"}(B||(B={}));var W=Object(b.a)((function(e){return Object(y.a)({root:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},intervalTime:{marginTop:-e.spacing(12),width:"100vw",height:"100vw",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"40vw",fontWeight:500},intervalProgress:{position:"absolute",top:e.spacing(3),right:e.spacing(3),bottom:e.spacing(3),left:e.spacing(3)},exercise:{marginLeft:e.spacing(2),marginRight:e.spacing(2),display:"flex",flexDirection:"column",textAlign:"center"},next:Object(C.a)({},e.typography.h4,{height:"calc(".concat(e.typography.h4.lineHeight," * ").concat(e.typography.h4.fontSize,")"),color:e.palette.text.secondary}),exerciseName:Object(C.a)({},e.typography.h3,{height:"calc(".concat(e.typography.h3.lineHeight," * ").concat(e.typography.h3.fontSize,")"),fontWeight:500})})}));function N(){var e=W(),t=Object(r.useState)(0),a=Object(d.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)(B.Prepare),s=Object(d.a)(c,2),l=s[0],u=s[1],m=Object(r.useState)(0),p=Object(d.a)(m,2),h=p[0],k=p[1],f=O[n],g=l===B.Prepare?f.prepareTime:f.workTime;return Object(r.useEffect)((function(){var e=setInterval((function(){k((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]),Object(r.useEffect)((function(){h===g&&(l===B.Prepare?u(B.Work):(i(n+1),u(B.Prepare)),k(0))}),[n,l,h,g]),o.a.createElement("div",{className:e.root},o.a.createElement(w.a,{className:e.intervalTime,variant:"h1"},g-h,o.a.createElement("div",{className:e.intervalProgress},o.a.createElement(D.a,{variant:"static",size:"100%",thickness:1.5,value:100*h/g}))),o.a.createElement("div",{className:e.exercise},o.a.createElement("span",{className:e.next},l===B.Prepare&&"Next"),o.a.createElement("span",{className:e.exerciseName},f.name)))}function A(e){return o.a.createElement(k.a,null,e.exercises.ids.map((function(t){var a=e.exercises.byId[t];return o.a.createElement(f.a,{key:t},o.a.createElement(v.a,{primary:a.name,secondary:a.description}))})))}var H=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column",marginBottom:e.spacing(2),"& > *, & > .MuiFormControl-root":{marginTop:e.spacing(2)},"& .MuiFab-root":{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}}}));function M(e){var t=H();return o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},e.children)}var L=a(165),U=a(172),q=a(175),R=a(166),J=a(167),Y=a(177),Q=a(168),z=a(164),K=a(82),V=a.n(K),$=a(81),G=a.n($),X=a(80),Z=a.n(X),_={prepare:o.a.createElement(Z.a,null),work:o.a.createElement(G.a,null),break:o.a.createElement(F.a,null)},ee=Object(b.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},iconField:{alignSelf:"flex-start",minWidth:80}}})),te=Object(r.forwardRef)((function(e,t){return o.a.createElement(z.a,Object.assign({direction:"up",ref:t},e))}));function ae(e){var t=ee(),a=Object(r.useState)(""),n=Object(d.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),u=l[0],m=l[1],h=Object(r.useState)(""),k=Object(d.a)(h,2),f=k[0],g=k[1];function v(){e.onClose()}return o.a.createElement(Y.a,{fullScreen:!0,open:e.open,onClose:v,TransitionComponent:te},o.a.createElement(p.a,{className:t.appBar},o.a.createElement(T.a,null,o.a.createElement(L.a,{edge:"start",color:"inherit",onClick:v},o.a.createElement(V.a,null)),o.a.createElement(w.a,{variant:"h6",className:t.title},"New exercise"),o.a.createElement(R.a,{autoFocus:!0,color:"inherit",onClick:function(){e.onClose({id:e.exercises.nextId,icon:i,name:u,description:f})}},"Save"))),o.a.createElement(J.a,{maxWidth:"sm"},o.a.createElement(M,null,o.a.createElement(q.a,{select:!0,label:"Icon",className:t.iconField,value:i,onChange:function(e){c(e.target.value)}},Object.entries(_).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return o.a.createElement(Q.a,{key:a,value:a},n)}))),o.a.createElement(q.a,{label:"Name",value:u,onChange:function(e){m(e.target.value)}}),o.a.createElement(q.a,{label:"Description",value:f,onChange:function(e){g(e.target.value)}}))))}var ne=a(169),ie=a(89),re=a(85),oe=a.n(re),ce=a(84),se=a.n(ce),de=a(86),le=a.n(de),ue=a(83),me=a.n(ue);function pe(e){var t=Object(r.useState)(null),a=Object(d.a)(t,2),n=a[0],i=a[1],c=Boolean(n);return o.a.createElement("div",null,o.a.createElement(L.a,{onClick:function(e){i(e.currentTarget)}},o.a.createElement(me.a,null)),o.a.createElement(ie.a,{anchorEl:n,keepMounted:!0,open:c,onClose:function(){i(null)}},o.a.createElement(Q.a,{onClick:function(){e.onAddBeforeClick(),i(null)}},o.a.createElement(ne.a,null,o.a.createElement(se.a,null)),o.a.createElement(v.a,{primary:"Add interval before"})),o.a.createElement(Q.a,{onClick:function(){e.onAddAfterClick(),i(null)}},o.a.createElement(ne.a,null,o.a.createElement(oe.a,null)),o.a.createElement(v.a,{primary:"Add interval after"})),o.a.createElement(Q.a,{onClick:function(){e.onDeleteClick(),i(null)}},o.a.createElement(ne.a,null,o.a.createElement(le.a,null)),o.a.createElement(v.a,{primary:"Delete interval"}))))}var he=a(179),ke=a(60),fe=a(170),ge=a(171),ve=a(87),be=a.n(ve),ye=Object(b.a)({avatar:{backgroundColor:ke.a[100],color:ke.a[600]}});function Te(e){var t=ye();function a(t){e.onClose(t)}return o.a.createElement(Y.a,{open:e.open,onClose:function(){e.onClose()}},o.a.createElement(fe.a,null,"Exercise"),o.a.createElement(k.a,null,e.exercises.ids.map((function(n){var i=e.exercises.byId[n];return o.a.createElement(f.a,{key:i.id,button:!0,onClick:function(){return a(i)}},o.a.createElement(ge.a,null,o.a.createElement(he.a,{className:t.avatar},_[i.icon])),o.a.createElement(v.a,{primary:i.name}))})),o.a.createElement(f.a,{autoFocus:!0,button:!0,onClick:function(){return a("create")}},o.a.createElement(ge.a,null,o.a.createElement(he.a,null,o.a.createElement(be.a,null))),o.a.createElement(v.a,{primary:"Add exercise"}))))}var we=Object(r.createContext)(null),Se=Object(r.createContext)(null),Ee=(Object(r.createContext)(null),Object(b.a)((function(){return{root:{display:"flex",alignItems:"center"},time:{flex:1}}})));function xe(e){var t=e.exercises.byId[e.interval.exerciseId],a=Ee(),n=Object(r.useContext)(we),i=Object(r.useContext)(Se),c=Object(r.useState)({type:null,isNewInterval:!1,newIntervalPosition:null}),s=Object(d.a)(c,2),l=s[0],u=s[1],m="select"===l.type,p="create"===l.type;return o.a.createElement("div",{className:a.root},o.a.createElement(L.a,{onClick:function(){u({type:"select",isNewInterval:!1,newIntervalPosition:null})}},_[t.icon]),o.a.createElement(q.a,{label:t.name,type:"number",className:a.time,value:e.interval.time,onChange:function(t){n({type:"update",item:Object(C.a)({},e.interval,{time:Number(t.target.value)})})},InputProps:{endAdornment:o.a.createElement(U.a,{position:"end"},"sec")}}),o.a.createElement(pe,{onAddBeforeClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"before"})},onAddAfterClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"after"})},onDeleteClick:function(){n({type:"delete",item:e.interval})}}),o.a.createElement(Te,{exercises:e.exercises,open:m,onClose:function(t){if("create"!==t){if(u(Object(C.a)({},l,{type:null})),t)if(l.isNewInterval){var a=Object(C.a)({},e.interval);a.id=e.intervals.nextId,a.exerciseId=t.id;var i={type:"add",item:a};l.newIntervalPosition&&(i[l.newIntervalPosition]=e.interval),n(i)}else n({type:"update",item:Object(C.a)({},e.interval,{exerciseId:t.id})})}else u(Object(C.a)({},l,{type:"create"}))}}),o.a.createElement(ae,{open:p,exercises:e.exercises,onClose:function(t){if(u(Object(C.a)({},l,{type:null})),t){var a=e.exercises.nextId;if(i({type:"add",item:t}),l.isNewInterval){var r=Object(C.a)({},e.interval);r.id=e.intervals.nextId,r.exerciseId=a;var o={type:"add",item:r};l.newIntervalPosition&&(o[l.newIntervalPosition]=e.interval),n(o)}else n({type:"update",item:Object(C.a)({},e.interval,{exerciseId:a})})}}}))}function Fe(e){return o.a.createElement(M,null,e.intervals.ids.map((function(t){return o.a.createElement(xe,{key:t,interval:e.intervals.byId[t],intervals:e.intervals,exercises:e.exercises})})))}var Oe=a(91),Ie=a(90),je=a(69),Pe=a(46);function Be(e,t){switch(t.type){case"add":var a=t.before?e.ids.indexOf(t.before.id):t.after?e.ids.indexOf(t.after.id)+1:e.ids.length;return{byId:Object(C.a)({},e.byId,Object(Pe.a)({},t.item.id,t.item)),ids:[].concat(Object(je.a)(e.ids.slice(0,a)),[t.item.id],Object(je.a)(e.ids.slice(a))),nextId:e.nextId+1};case"update":return{byId:Object(C.a)({},e.byId,Object(Pe.a)({},t.item.id,t.item)),ids:e.ids,nextId:e.nextId};case"delete":var n=e.byId,i=t.item.id;n[i];return{byId:Object(Oe.a)(n,[i].map(Ie.a)),ids:e.ids.filter((function(e){return e!==t.item.id})),nextId:e.nextId};default:return e}}for(var Ce={byId:{0:{id:0,exerciseId:0,time:10},1:{id:1,exerciseId:2,time:30},2:{id:2,exerciseId:1,time:10}},ids:[0,1,2],nextId:3},De={byId:{0:{id:0,icon:"prepare",name:"Prepare"},1:{id:1,icon:"break",name:"Break"},2:{id:2,icon:"work",name:"Work"}},ids:[0,1,2],nextId:3},We={byId:{},ids:[],nextId:0},Ne=0,Ae=[{name:"Warm-up",description:"Improve fundamental movements",difficulty:1,exercises:[{name:"Wide Move Front",description:"Move the puck wide in front, side to side, shift weight, loose bottom hand"},{name:"Wide Move Side",description:"Move the puck wide on the forehand side, front to back, loose bottom hand"},{name:"Soft Touch Side",description:"Quick puck touches on the forehand side. Focus on an active top hand"},{name:"Soft Touch Front",description:"Quick puck touches in front, roll top hand to control puck"},{name:"Soft Touch Backhand",description:"Quick puck touches on the backhand, top hand does most of the work"},{name:"Soft Touch Around",description:"Quick puck touches while moving the puck around the body"},{name:"Slide Bottom Hand",description:"Stickhandling with the top hand, while sliding the bottom hand up and down"},{name:"Roll Puck Side",description:"Spin the puck by moving the blade around it (You can reverse directions)"},{name:"Roll Puck Front",description:"Spin the puck by moving the blade around it (You can reverse directions)"}]},{name:"Moves and Fakes",description:"Work on some standard fakes and moves",difficulty:1,exercises:[{name:"Backhand Fake",description:"A quick move to the backhand, then go forehand"},{name:"Fake Backhand to Forehand",description:"Double fake, backhand, forehand, finish on backhand"},{name:"Fake Forehand to Backhand",description:"Double fake, forehand, backhand, finish on forehand"},{name:"Fake Snapshot",description:"Step to inside leg, hands out, pump fake, catch on backhand"},{name:"Fake Wristshot",description:"Step to outside leg, hands out, catch puck on backhand"},{name:"Forehand fake",description:"Quick move to the forehand, go backhand"},{name:"Pump Fake",description:"Pump hands out, show blade, go to the backhand"},{name:"Stick Fake",description:"Wave stick over the puck quickly one way, move the puck the other way"}]},{name:"Use Your Feet",description:"Work on some standard fakes and moves",difficulty:2,exercises:[{name:"Backhand Drop Back",description:"Use the backhand to drop the puck between your legs, then recover behind you"},{name:"Backhand Kick Up",description:"Use the backhand to move the puck behind you, move it up through your legs"},{name:"Forehand to Backhand Kick Up",description:"Drop the puck back on forehand side, tap it through legs with back of the blade"},{name:"Forehand Drop Back",description:"Drop the puck through legs with the forehand, pick up behind on backhand"},{name:"Forehand Kick Up",description:"Bring puck behind on the forehand, use forehand to put it off inside foot and up"},{name:"Kick Ups",description:"Use forehand and backhand to drop puck to feet, then kick it back up"},{name:"Side Inside Foot",description:"Puck at side of body, pulled to far leg inside foot, kicked back"},{name:"Side of Foot",description:"Puck at side of body, pulled to closest leg, outside foot, kicked back"}]},{name:"Toe Drags",description:"Master the toe drag and backhand",difficulty:2,exercises:[{name:"Backhand Toey",description:"Puck starts at side, pushed forward, moved across body with back of blade"},{name:"Backhand to Forehand Toey",description:"Standard backhand toe drag, finished with a toe drag back"},{name:"Back to Front",description:"Puck behind body, toe drag it in, then move it in front of body"},{name:"Toe Drag Dribble",description:"Non-stop quick toe drags around the body, any direction"},{name:"Toe Drag Front",description:"Puck at side, push it to the front, toe drag it back"},{name:"Toe Drag Side",description:"Puck at side, push it out to the side, toe drag it back"},{name:"Toe Drag Through Legs",description:"Puck in front, toe drag it back through legs, tap it forwards"},{name:"Yo Yo Toe",description:"Continuous push puck front, toe drag back, push to the side, toe drag back"}]},{name:"Challenges",description:"Unique stickhandling challenges",difficulty:2,exercises:[{name:"Butt End Tap",description:"Continuous puck movement using the butt end of your stick to tap the puck"},{name:"Close Hands Tap",description:"Hands very close together, quick touches around body"},{name:"Mini Sticks",description:"Choke up both hands close to the blade, bend knees, quick stickhandling"},{name:"One Leg Balance",description:"Balance on one leg, freestyle stickhandling while holding balance"},{name:"One Hand Reach",description:"Move puck quickly to backhand, reach as far as possible with one hand"},{name:"One Hand Tap",description:"One hand only on top of stick, quick touches, focus on rolling wrist"},{name:"One Hand Toe Drag",description:"One handed toe drags in front"},{name:"On Your Knees",description:"Stickhandle while on knees"}]},{name:"Broken Stick",description:"A new use for your stick",difficulty:3,exercises:[{name:"Backhand Over",description:"Chip the puck over the stick using the back of your blade"},{name:"Balance on Stick",description:"Balance on the stick with one foot while quickly stickhandling"},{name:"Jump",description:"Jump left and right over the stick while stickhandling"},{name:"Stick in Front",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick in Front Long",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick to the Side",description:"With the stick lengthwise beside you, move the puck around the stick"},{name:"Stick Side Flick",description:"Pull the puck in with the toe and tap it over the stick at your side"},{name:"Stick Side Toey",description:"Continuously toe drag the puck in quickly around the stick"}]},{name:"Footwork",description:"Improve footwork used in games",difficulty:3,exercises:[{name:"Backward to Forward",description:"Focus on the proper footwork to turn from backwards to forwards"},{name:"Continuous Open Hip",description:"Made famous by Crosby, focus on heel to heel, knees bent"},{name:"Crossover 123",description:"The hands and feet move together, count the 1-2-3 rhythm"},{name:"Fast Hands Fast Feet",description:"Stutter steps while doing soft touch stickhandling, move all around"},{name:"Fast Jump",description:"Stutter step, jump and transfer weight, repeat"},{name:"Forward to Backward",description:"Focus on the footwork and stickwork for better transitions"},{name:"Separate Hands and Feet",description:"Feet go one way, the puck goes the other"},{name:"Toe Drag Jump",description:"Toe drag the puck in, then push it out and jump"}]},{name:"2 Pucks",description:"8 drills using 2 pucks",difficulty:3,exercises:[{name:"2 Puck Juggle",description:"Try to keep two pucks moving at once, move all around"},{name:"Juggle Through Legs",description:"Try to get a continuous through the legs cycle"},{name:"Puck Swap Front",description:"How fast can you continuously swap places with the pucks"},{name:"Puck Swap Side",description:"Make quick movements to swap the pucks"},{name:"Puck Swap Side",description:"Have the pucks spread wide, circle one puck, then swap and repeat"},{name:"Around the Puck Front",description:"Stickhandling around the puck, switch directions, freestyle for more of a challenge"},{name:"Around the Puck Side",description:"With the puck to the side, stickhandle around, switch directions periodically"},{name:"Snipe It",description:"Pass one puck to the other, quickly move and repeat"}]},{name:"Pucks",description:"Use pucks as obstacles",difficulty:2,exercises:[{name:"Vertical Figure 8"},{name:"Inifinity Front"}]},{name:"Datsyuk",description:"Stickhandling drills with a Pavel Datsyuk variation",difficulty:3,exercises:[{name:"Side Datsyuk"},{name:"Behind Datsyuk"},{name:"Side and Behind Datsyuk"},{name:"Side, 45, Behind Datsyuk"},{name:'Side Datsyuk "L" BH Over Puck 3'},{name:"Side Datsyuk to Wide BH Over Puck 3"},{name:"Side Datsyuk to Wide BH Over Puck 3 FH Over Puck 4"},{name:"Side Datsyuk FH Around Puck 3"},{name:"Side Datsyuk BH Around Puck 3"},{name:"Four Puck Outside In Slide"},{name:"Four Puck Infinity Slide"},{name:"Side Datsyuk to BH Through Vertical Figure 8"},{name:"Front Stickhandle Quick Pull to Side Datsyuk"},{name:"Side Datsyuk Pull Through the Legs"},{name:"Double Side Datsyuk Stack"}]}];Ne<Ae.length;Ne++){var He=Ae[Ne],Me=We.nextId;We.byId[Me]={id:Me,name:He.name,description:He.description,difficulty:He.difficulty},We.ids.push(Me),We.nextId++;var Le,Ue=Object(l.a)(He.exercises);try{for(Ue.s();!(Le=Ue.n()).done;){var qe=Le.value,Re=De.nextId;De.byId[Re]={id:Re,icon:"work",name:qe.name,description:qe.description,category:Me},De.ids.push(Re),De.nextId++}}catch(Ve){Ue.e(Ve)}finally{Ue.f()}}function Je(){var e=Object(r.useReducer)(Be,Ce),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(r.useReducer)(Be,De),c=Object(d.a)(i,2),s=c[0],l=c[1];return o.a.createElement(u.a,{basename:"/i-coach"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/"},o.a.createElement(j,null)),o.a.createElement(m.a,{exact:!0,path:"/training"},o.a.createElement(N,null)),o.a.createElement(m.a,{exact:!0,path:"/training/legacy"},o.a.createElement(we.Provider,{value:n},o.a.createElement(Se.Provider,{value:l},o.a.createElement(Fe,{intervals:a,exercises:s})))),o.a.createElement(m.a,{exact:!0,path:"/exercises"},o.a.createElement(A,{exercises:s}))))}var Ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ze=a(88),Ke=Object(ze.a)({palette:{primary:{main:"#6200EE"},secondary:{main:"#03DAC6"},background:{default:"#FFFFFF",paper:"#FFFFFF"}}});s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{theme:Ke},o.a.createElement(n.a,null),o.a.createElement(Je,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/i-coach",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/i-coach","/service-worker.js");Ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qe(t,e)}))}}()}},[[102,1,2]]]);
//# sourceMappingURL=main.a5661e2f.chunk.js.map