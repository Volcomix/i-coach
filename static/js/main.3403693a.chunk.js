(this["webpackJsonpi-coach"]=this["webpackJsonpi-coach"]||[]).push([[0],{104:function(e,t,a){e.exports=a(116)},116:function(e,t,a){"use strict";a.r(t);var n=a(179),i=a(178),r=a(0),o=a.n(r),c=a(9),s=a.n(c),l=a(13),d=a(78),u=a(44),m=a(30),p=a(164),h=a(166),k=a(160),f=a(117),g=a(163),v=a(162),b=a(157),y=a(183),T=a(165),w=a(40),S=a(80),E=a.n(S),x=a(54),F=a.n(x),O=[{name:"Soft Touch Front",prepareTime:10,workTime:30},{name:"Soft Touch Side",prepareTime:10,workTime:30},{name:"Soft Touch Backhand",prepareTime:10,workTime:30},{name:"Soft Touch Around Side",prepareTime:10,workTime:30},{name:"Soft Touch Around Backhand",prepareTime:10,workTime:30},{name:"Slide Bottom Hand",prepareTime:10,workTime:30},{name:"Roll Puck Front",prepareTime:10,workTime:30},{name:"Roll Puck Side",prepareTime:10,workTime:30},{name:"Wide Move Front",prepareTime:10,workTime:30},{name:"Wide Move Side",prepareTime:10,workTime:30},{name:"Wide Move To Soft Touch",prepareTime:10,workTime:30},{name:"Forehand Ls",prepareTime:10,workTime:30},{name:"Backhand Ls",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Shoot",prepareTime:10,workTime:30},{name:"Soft Touch, Pull To Fake To Slide",prepareTime:10,workTime:30},{name:"Backhand Fake",prepareTime:10,workTime:30},{name:"Forehand Fake",prepareTime:10,workTime:30},{name:"Fake Snapshot",prepareTime:10,workTime:30},{name:"Fake Wristshot",prepareTime:10,workTime:30},{name:"Pump Fake",prepareTime:10,workTime:30},{name:"Stick Fake",prepareTime:10,workTime:30},{name:"Backhand Toe Pull",prepareTime:10,workTime:30},{name:"Backhand Toe Drag",prepareTime:10,workTime:30},{name:"Backhand To Forehand Toey",prepareTime:10,workTime:30},{name:"5-Points Toe Drag",prepareTime:10,workTime:30},{name:"Back To Front Toe Drag",prepareTime:10,workTime:30},{name:"Toe Drag Front",prepareTime:10,workTime:30},{name:"Toe Drag Side",prepareTime:10,workTime:30},{name:"Yo Yo Toe",prepareTime:10,workTime:30},{name:"8 Start Forehand",prepareTime:20,workTime:40},{name:"8 Start Backhand",prepareTime:20,workTime:40},{name:"Infinity",prepareTime:20,workTime:40},{name:"Infinity Toe",prepareTime:20,workTime:40},{name:"Side Datsyuk",prepareTime:20,workTime:40},{name:"Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side And Behind Datsyuk",prepareTime:20,workTime:40},{name:"Side Datsyuk L",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide",prepareTime:20,workTime:40},{name:"Side Datsyuk To Wide + L",prepareTime:20,workTime:40},{name:"4 Pucks Slide",prepareTime:20,workTime:40},{name:"4 Pucks Infinity Slide",prepareTime:20,workTime:40},{name:"Side Datsyuk To 8",prepareTime:20,workTime:40},{name:"Double Side Datsyuk Stack",prepareTime:20,workTime:40}],I=Object(b.a)((function(e){return Object(y.a)({list:{marginBottom:e.spacing(9)},appBar:{top:"auto",bottom:0},totalTime:{justifyContent:"center","& > *:not(:first-child)":{marginLeft:e.spacing(2)}},startButton:{position:"absolute",zIndex:1,top:"-50%",right:e.spacing(2)}})}));function P(){var e=I(),t=O.reduce((function(e,t){return e+t.prepareTime+t.workTime}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{className:e.list},O.map((function(e,t){var a=e.prepareTime+e.workTime;return o.a.createElement(f.a,{key:t},o.a.createElement(v.a,{primary:e.name}),o.a.createElement(g.a,null,o.a.createElement(w.a,{variant:"body2",color:"textSecondary"},j(a))))}))),o.a.createElement(p.a,{className:e.appBar,position:"fixed",color:"inherit"},o.a.createElement(T.a,{className:e.totalTime},o.a.createElement(F.a,{color:"primary"}),o.a.createElement(w.a,null,"Total time"),o.a.createElement(w.a,null,j(t)),o.a.createElement(h.a,{className:e.startButton,color:"primary",component:u.b,to:"/training"},o.a.createElement(E.a,null)))))}function j(e){var t=String(Math.floor(e/60)).padStart(2,"0"),a=String(e%60).padStart(2,"0");return"".concat(t,":").concat(a)}var B,C=a(69),D=a.n(C),W=a(81),N=a(15),A=a(167),H=a(168);!function(e){e[e.Prepare=0]="Prepare",e[e.Work=1]="Work"}(B||(B={}));var M=Object(b.a)((function(e){return Object(y.a)({root:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},intervalTime:{marginTop:-e.spacing(12),width:"min(100vw, 70vh)",height:"min(100vw, 70vh)",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"calc(0.4 * min(100vw, 70vh))",fontWeight:500},intervalProgressTrack:{position:"absolute",opacity:.1},intervalProgress:{position:"absolute",top:e.spacing(3),right:e.spacing(3),bottom:e.spacing(3),left:e.spacing(3)},exercise:{marginLeft:e.spacing(1),marginRight:e.spacing(1),display:"flex",flexDirection:"column",textAlign:"center"},next:Object(N.a)({},e.typography.h4,{height:"calc(".concat(e.typography.h4.lineHeight," * ").concat(e.typography.h4.fontSize,")"),color:e.palette.text.secondary}),exerciseName:Object(N.a)({},e.typography.h3,{height:"calc(".concat(e.typography.h3.lineHeight," * ").concat(e.typography.h3.fontSize,")"),fontWeight:500}),trainingProgress:{position:"absolute",right:0,bottom:0,left:0,height:e.spacing(1)}})}));function L(){var e=M(),t=Object(m.f)(),a=Object(r.useState)(0),n=Object(l.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(B.Prepare),d=Object(l.a)(s,2),u=d[0],p=d[1],h=Object(r.useState)(0),k=Object(l.a)(h,2),f=k[0],g=k[1],v=O[i],b=u===B.Prepare?v.prepareTime:v.workTime,y=0,T=0;return O.forEach((function(e,t){var a=e.prepareTime+e.workTime;t<i?y+=a:t===i&&(u===B.Work&&(y+=e.prepareTime),y+=f),T+=a})),Object(r.useEffect)((function(){var e=null;function t(){return(t=Object(W.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("wakeLock"in navigator)){t.next=12;break}return t.prev=1,t.next=4,navigator.wakeLock.request("screen");case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error("".concat(t.t0.name,", ").concat(t.t0.message));case 10:t.next=13;break;case 12:console.warn("Wake lock API is not supported");case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}();var a=setInterval((function(){g((function(e){return e+1}))}),1e3);return function(){clearInterval(a),null!==e&&(e.release(),e=null)}}),[]),Object(r.useEffect)((function(){if(f===b){if(u===B.Prepare)p(B.Work);else{if(i===O.length-1)return t.goBack();c(i+1),p(B.Prepare)}g(0)}}),[t,i,u,f,b]),o.a.createElement("div",{className:e.root},o.a.createElement(w.a,{className:e.intervalTime,variant:"h1"},b-f,o.a.createElement("div",{className:e.intervalProgress},o.a.createElement(A.a,{className:e.intervalProgressTrack,variant:"determinate",size:"100%",thickness:1.5,value:100}),o.a.createElement(A.a,{variant:"static",size:"100%",thickness:1.5,value:100*f/b}))),o.a.createElement("div",{className:e.exercise},o.a.createElement("span",{className:e.next},u===B.Prepare&&"Next"),o.a.createElement("span",{className:e.exerciseName},v.name)),o.a.createElement(H.a,{className:e.trainingProgress,variant:"determinate",value:100*y/T}))}function q(e){return o.a.createElement(k.a,null,e.exercises.ids.map((function(t){var a=e.exercises.byId[t];return o.a.createElement(f.a,{key:t},o.a.createElement(v.a,{primary:a.name,secondary:a.description}))})))}var U=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column",marginBottom:e.spacing(2),"& > *, & > .MuiFormControl-root":{marginTop:e.spacing(2)},"& .MuiFab-root":{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}}}));function R(e){var t=U();return o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},e.children)}var J=a(170),Y=a(177),z=a(180),Q=a(171),K=a(172),V=a(182),$=a(173),G=a(169),X=a(84),Z=a.n(X),_=a(83),ee=a.n(_),te=a(82),ae=a.n(te),ne={prepare:o.a.createElement(ae.a,null),work:o.a.createElement(ee.a,null),break:o.a.createElement(F.a,null)},ie=Object(b.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},iconField:{alignSelf:"flex-start",minWidth:80}}})),re=Object(r.forwardRef)((function(e,t){return o.a.createElement(G.a,Object.assign({direction:"up",ref:t},e))}));function oe(e){var t=ie(),a=Object(r.useState)(""),n=Object(l.a)(a,2),i=n[0],c=n[1],s=Object(r.useState)(""),d=Object(l.a)(s,2),u=d[0],m=d[1],h=Object(r.useState)(""),k=Object(l.a)(h,2),f=k[0],g=k[1];function v(){e.onClose()}return o.a.createElement(V.a,{fullScreen:!0,open:e.open,onClose:v,TransitionComponent:re},o.a.createElement(p.a,{className:t.appBar},o.a.createElement(T.a,null,o.a.createElement(J.a,{edge:"start",color:"inherit",onClick:v},o.a.createElement(Z.a,null)),o.a.createElement(w.a,{variant:"h6",className:t.title},"New exercise"),o.a.createElement(Q.a,{autoFocus:!0,color:"inherit",onClick:function(){e.onClose({id:e.exercises.nextId,icon:i,name:u,description:f})}},"Save"))),o.a.createElement(K.a,{maxWidth:"sm"},o.a.createElement(R,null,o.a.createElement(z.a,{select:!0,label:"Icon",className:t.iconField,value:i,onChange:function(e){c(e.target.value)}},Object.entries(ne).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return o.a.createElement($.a,{key:a,value:a},n)}))),o.a.createElement(z.a,{label:"Name",value:u,onChange:function(e){m(e.target.value)}}),o.a.createElement(z.a,{label:"Description",value:f,onChange:function(e){g(e.target.value)}}))))}var ce=a(174),se=a(91),le=a(87),de=a.n(le),ue=a(86),me=a.n(ue),pe=a(88),he=a.n(pe),ke=a(85),fe=a.n(ke);function ge(e){var t=Object(r.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Boolean(n);return o.a.createElement("div",null,o.a.createElement(J.a,{onClick:function(e){i(e.currentTarget)}},o.a.createElement(fe.a,null)),o.a.createElement(se.a,{anchorEl:n,keepMounted:!0,open:c,onClose:function(){i(null)}},o.a.createElement($.a,{onClick:function(){e.onAddBeforeClick(),i(null)}},o.a.createElement(ce.a,null,o.a.createElement(me.a,null)),o.a.createElement(v.a,{primary:"Add interval before"})),o.a.createElement($.a,{onClick:function(){e.onAddAfterClick(),i(null)}},o.a.createElement(ce.a,null,o.a.createElement(de.a,null)),o.a.createElement(v.a,{primary:"Add interval after"})),o.a.createElement($.a,{onClick:function(){e.onDeleteClick(),i(null)}},o.a.createElement(ce.a,null,o.a.createElement(he.a,null)),o.a.createElement(v.a,{primary:"Delete interval"}))))}var ve=a(184),be=a(60),ye=a(175),Te=a(176),we=a(89),Se=a.n(we),Ee=Object(b.a)({avatar:{backgroundColor:be.a[100],color:be.a[600]}});function xe(e){var t=Ee();function a(t){e.onClose(t)}return o.a.createElement(V.a,{open:e.open,onClose:function(){e.onClose()}},o.a.createElement(ye.a,null,"Exercise"),o.a.createElement(k.a,null,e.exercises.ids.map((function(n){var i=e.exercises.byId[n];return o.a.createElement(f.a,{key:i.id,button:!0,onClick:function(){return a(i)}},o.a.createElement(Te.a,null,o.a.createElement(ve.a,{className:t.avatar},ne[i.icon])),o.a.createElement(v.a,{primary:i.name}))})),o.a.createElement(f.a,{autoFocus:!0,button:!0,onClick:function(){return a("create")}},o.a.createElement(Te.a,null,o.a.createElement(ve.a,null,o.a.createElement(Se.a,null))),o.a.createElement(v.a,{primary:"Add exercise"}))))}var Fe=Object(r.createContext)(null),Oe=Object(r.createContext)(null),Ie=(Object(r.createContext)(null),Object(b.a)((function(){return{root:{display:"flex",alignItems:"center"},time:{flex:1}}})));function Pe(e){var t=e.exercises.byId[e.interval.exerciseId],a=Ie(),n=Object(r.useContext)(Fe),i=Object(r.useContext)(Oe),c=Object(r.useState)({type:null,isNewInterval:!1,newIntervalPosition:null}),s=Object(l.a)(c,2),d=s[0],u=s[1],m="select"===d.type,p="create"===d.type;return o.a.createElement("div",{className:a.root},o.a.createElement(J.a,{onClick:function(){u({type:"select",isNewInterval:!1,newIntervalPosition:null})}},ne[t.icon]),o.a.createElement(z.a,{label:t.name,type:"number",className:a.time,value:e.interval.time,onChange:function(t){n({type:"update",item:Object(N.a)({},e.interval,{time:Number(t.target.value)})})},InputProps:{endAdornment:o.a.createElement(Y.a,{position:"end"},"sec")}}),o.a.createElement(ge,{onAddBeforeClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"before"})},onAddAfterClick:function(){u({type:"select",isNewInterval:!0,newIntervalPosition:"after"})},onDeleteClick:function(){n({type:"delete",item:e.interval})}}),o.a.createElement(xe,{exercises:e.exercises,open:m,onClose:function(t){if("create"!==t){if(u(Object(N.a)({},d,{type:null})),t)if(d.isNewInterval){var a=Object(N.a)({},e.interval);a.id=e.intervals.nextId,a.exerciseId=t.id;var i={type:"add",item:a};d.newIntervalPosition&&(i[d.newIntervalPosition]=e.interval),n(i)}else n({type:"update",item:Object(N.a)({},e.interval,{exerciseId:t.id})})}else u(Object(N.a)({},d,{type:"create"}))}}),o.a.createElement(oe,{open:p,exercises:e.exercises,onClose:function(t){if(u(Object(N.a)({},d,{type:null})),t){var a=e.exercises.nextId;if(i({type:"add",item:t}),d.isNewInterval){var r=Object(N.a)({},e.interval);r.id=e.intervals.nextId,r.exerciseId=a;var o={type:"add",item:r};d.newIntervalPosition&&(o[d.newIntervalPosition]=e.interval),n(o)}else n({type:"update",item:Object(N.a)({},e.interval,{exerciseId:a})})}}}))}function je(e){return o.a.createElement(R,null,e.intervals.ids.map((function(t){return o.a.createElement(Pe,{key:t,interval:e.intervals.byId[t],intervals:e.intervals,exercises:e.exercises})})))}var Be=a(93),Ce=a(92),De=a(70),We=a(47);function Ne(e,t){switch(t.type){case"add":var a=t.before?e.ids.indexOf(t.before.id):t.after?e.ids.indexOf(t.after.id)+1:e.ids.length;return{byId:Object(N.a)({},e.byId,Object(We.a)({},t.item.id,t.item)),ids:[].concat(Object(De.a)(e.ids.slice(0,a)),[t.item.id],Object(De.a)(e.ids.slice(a))),nextId:e.nextId+1};case"update":return{byId:Object(N.a)({},e.byId,Object(We.a)({},t.item.id,t.item)),ids:e.ids,nextId:e.nextId};case"delete":var n=e.byId,i=t.item.id;n[i];return{byId:Object(Be.a)(n,[i].map(Ce.a)),ids:e.ids.filter((function(e){return e!==t.item.id})),nextId:e.nextId};default:return e}}for(var Ae={byId:{0:{id:0,exerciseId:0,time:10},1:{id:1,exerciseId:2,time:30},2:{id:2,exerciseId:1,time:10}},ids:[0,1,2],nextId:3},He={byId:{0:{id:0,icon:"prepare",name:"Prepare"},1:{id:1,icon:"break",name:"Break"},2:{id:2,icon:"work",name:"Work"}},ids:[0,1,2],nextId:3},Me={byId:{},ids:[],nextId:0},Le=0,qe=[{name:"Warm-up",description:"Improve fundamental movements",difficulty:1,exercises:[{name:"Wide Move Front",description:"Move the puck wide in front, side to side, shift weight, loose bottom hand"},{name:"Wide Move Side",description:"Move the puck wide on the forehand side, front to back, loose bottom hand"},{name:"Soft Touch Side",description:"Quick puck touches on the forehand side. Focus on an active top hand"},{name:"Soft Touch Front",description:"Quick puck touches in front, roll top hand to control puck"},{name:"Soft Touch Backhand",description:"Quick puck touches on the backhand, top hand does most of the work"},{name:"Soft Touch Around",description:"Quick puck touches while moving the puck around the body"},{name:"Slide Bottom Hand",description:"Stickhandling with the top hand, while sliding the bottom hand up and down"},{name:"Roll Puck Side",description:"Spin the puck by moving the blade around it (You can reverse directions)"},{name:"Roll Puck Front",description:"Spin the puck by moving the blade around it (You can reverse directions)"}]},{name:"Moves and Fakes",description:"Work on some standard fakes and moves",difficulty:1,exercises:[{name:"Backhand Fake",description:"A quick move to the backhand, then go forehand"},{name:"Fake Backhand to Forehand",description:"Double fake, backhand, forehand, finish on backhand"},{name:"Fake Forehand to Backhand",description:"Double fake, forehand, backhand, finish on forehand"},{name:"Fake Snapshot",description:"Step to inside leg, hands out, pump fake, catch on backhand"},{name:"Fake Wristshot",description:"Step to outside leg, hands out, catch puck on backhand"},{name:"Forehand fake",description:"Quick move to the forehand, go backhand"},{name:"Pump Fake",description:"Pump hands out, show blade, go to the backhand"},{name:"Stick Fake",description:"Wave stick over the puck quickly one way, move the puck the other way"}]},{name:"Use Your Feet",description:"Work on some standard fakes and moves",difficulty:2,exercises:[{name:"Backhand Drop Back",description:"Use the backhand to drop the puck between your legs, then recover behind you"},{name:"Backhand Kick Up",description:"Use the backhand to move the puck behind you, move it up through your legs"},{name:"Forehand to Backhand Kick Up",description:"Drop the puck back on forehand side, tap it through legs with back of the blade"},{name:"Forehand Drop Back",description:"Drop the puck through legs with the forehand, pick up behind on backhand"},{name:"Forehand Kick Up",description:"Bring puck behind on the forehand, use forehand to put it off inside foot and up"},{name:"Kick Ups",description:"Use forehand and backhand to drop puck to feet, then kick it back up"},{name:"Side Inside Foot",description:"Puck at side of body, pulled to far leg inside foot, kicked back"},{name:"Side of Foot",description:"Puck at side of body, pulled to closest leg, outside foot, kicked back"}]},{name:"Toe Drags",description:"Master the toe drag and backhand",difficulty:2,exercises:[{name:"Backhand Toey",description:"Puck starts at side, pushed forward, moved across body with back of blade"},{name:"Backhand to Forehand Toey",description:"Standard backhand toe drag, finished with a toe drag back"},{name:"Back to Front",description:"Puck behind body, toe drag it in, then move it in front of body"},{name:"Toe Drag Dribble",description:"Non-stop quick toe drags around the body, any direction"},{name:"Toe Drag Front",description:"Puck at side, push it to the front, toe drag it back"},{name:"Toe Drag Side",description:"Puck at side, push it out to the side, toe drag it back"},{name:"Toe Drag Through Legs",description:"Puck in front, toe drag it back through legs, tap it forwards"},{name:"Yo Yo Toe",description:"Continuous push puck front, toe drag back, push to the side, toe drag back"}]},{name:"Challenges",description:"Unique stickhandling challenges",difficulty:2,exercises:[{name:"Butt End Tap",description:"Continuous puck movement using the butt end of your stick to tap the puck"},{name:"Close Hands Tap",description:"Hands very close together, quick touches around body"},{name:"Mini Sticks",description:"Choke up both hands close to the blade, bend knees, quick stickhandling"},{name:"One Leg Balance",description:"Balance on one leg, freestyle stickhandling while holding balance"},{name:"One Hand Reach",description:"Move puck quickly to backhand, reach as far as possible with one hand"},{name:"One Hand Tap",description:"One hand only on top of stick, quick touches, focus on rolling wrist"},{name:"One Hand Toe Drag",description:"One handed toe drags in front"},{name:"On Your Knees",description:"Stickhandle while on knees"}]},{name:"Broken Stick",description:"A new use for your stick",difficulty:3,exercises:[{name:"Backhand Over",description:"Chip the puck over the stick using the back of your blade"},{name:"Balance on Stick",description:"Balance on the stick with one foot while quickly stickhandling"},{name:"Jump",description:"Jump left and right over the stick while stickhandling"},{name:"Stick in Front",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick in Front Long",description:"Stickhandle twice around the stick, then change directions"},{name:"Stick to the Side",description:"With the stick lengthwise beside you, move the puck around the stick"},{name:"Stick Side Flick",description:"Pull the puck in with the toe and tap it over the stick at your side"},{name:"Stick Side Toey",description:"Continuously toe drag the puck in quickly around the stick"}]},{name:"Footwork",description:"Improve footwork used in games",difficulty:3,exercises:[{name:"Backward to Forward",description:"Focus on the proper footwork to turn from backwards to forwards"},{name:"Continuous Open Hip",description:"Made famous by Crosby, focus on heel to heel, knees bent"},{name:"Crossover 123",description:"The hands and feet move together, count the 1-2-3 rhythm"},{name:"Fast Hands Fast Feet",description:"Stutter steps while doing soft touch stickhandling, move all around"},{name:"Fast Jump",description:"Stutter step, jump and transfer weight, repeat"},{name:"Forward to Backward",description:"Focus on the footwork and stickwork for better transitions"},{name:"Separate Hands and Feet",description:"Feet go one way, the puck goes the other"},{name:"Toe Drag Jump",description:"Toe drag the puck in, then push it out and jump"}]},{name:"2 Pucks",description:"8 drills using 2 pucks",difficulty:3,exercises:[{name:"2 Puck Juggle",description:"Try to keep two pucks moving at once, move all around"},{name:"Juggle Through Legs",description:"Try to get a continuous through the legs cycle"},{name:"Puck Swap Front",description:"How fast can you continuously swap places with the pucks"},{name:"Puck Swap Side",description:"Make quick movements to swap the pucks"},{name:"Puck Swap Side",description:"Have the pucks spread wide, circle one puck, then swap and repeat"},{name:"Around the Puck Front",description:"Stickhandling around the puck, switch directions, freestyle for more of a challenge"},{name:"Around the Puck Side",description:"With the puck to the side, stickhandle around, switch directions periodically"},{name:"Snipe It",description:"Pass one puck to the other, quickly move and repeat"}]},{name:"Pucks",description:"Use pucks as obstacles",difficulty:2,exercises:[{name:"Vertical Figure 8"},{name:"Inifinity Front"}]},{name:"Datsyuk",description:"Stickhandling drills with a Pavel Datsyuk variation",difficulty:3,exercises:[{name:"Side Datsyuk"},{name:"Behind Datsyuk"},{name:"Side and Behind Datsyuk"},{name:"Side, 45, Behind Datsyuk"},{name:'Side Datsyuk "L" BH Over Puck 3'},{name:"Side Datsyuk to Wide BH Over Puck 3"},{name:"Side Datsyuk to Wide BH Over Puck 3 FH Over Puck 4"},{name:"Side Datsyuk FH Around Puck 3"},{name:"Side Datsyuk BH Around Puck 3"},{name:"Four Puck Outside In Slide"},{name:"Four Puck Infinity Slide"},{name:"Side Datsyuk to BH Through Vertical Figure 8"},{name:"Front Stickhandle Quick Pull to Side Datsyuk"},{name:"Side Datsyuk Pull Through the Legs"},{name:"Double Side Datsyuk Stack"}]}];Le<qe.length;Le++){var Ue=qe[Le],Re=Me.nextId;Me.byId[Re]={id:Re,name:Ue.name,description:Ue.description,difficulty:Ue.difficulty},Me.ids.push(Re),Me.nextId++;var Je,Ye=Object(d.a)(Ue.exercises);try{for(Ye.s();!(Je=Ye.n()).done;){var ze=Je.value,Qe=He.nextId;He.byId[Qe]={id:Qe,icon:"work",name:ze.name,description:ze.description,category:Re},He.ids.push(Qe),He.nextId++}}catch(Ze){Ye.e(Ze)}finally{Ye.f()}}function Ke(){var e=Object(r.useReducer)(Ne,Ae),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(r.useReducer)(Ne,He),c=Object(l.a)(i,2),s=c[0],d=c[1];return o.a.createElement(u.a,{basename:"/i-coach"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/"},o.a.createElement(P,null)),o.a.createElement(m.a,{exact:!0,path:"/training"},o.a.createElement(L,null)),o.a.createElement(m.a,{exact:!0,path:"/training/legacy"},o.a.createElement(Fe.Provider,{value:n},o.a.createElement(Oe.Provider,{value:d},o.a.createElement(je,{intervals:a,exercises:s})))),o.a.createElement(m.a,{exact:!0,path:"/exercises"},o.a.createElement(q,{exercises:s}))))}var Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ge=a(90),Xe=Object(Ge.a)({palette:{primary:{main:"#0256ee"},secondary:{main:"#ee9b02"},background:{default:"#FFFFFF",paper:"#FFFFFF"}}});s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{theme:Xe},o.a.createElement(n.a,null),o.a.createElement(Ke,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/i-coach",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/i-coach","/service-worker.js");Ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$e(t,e)}))}}()}},[[104,1,2]]]);
//# sourceMappingURL=main.3403693a.chunk.js.map