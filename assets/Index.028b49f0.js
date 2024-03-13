import{a as G}from"./axios.3560a3fb.js";import{p as T,m as E,a as D,g as P,b as M,u as j,c as L,d as l,e as q,f as J,h as K,i as Q,j as Y,t as N,k as X,l as Z,n as ee,s as S,o as d,q as te,V as ae,r as A,v as w,w as le,x as R,y as oe,z as x,A as ne,B as se,C as ie,D as re,E as ue,F as ce,G as de,H as ve,_ as me,I as z,J as he,K as I,L as F,M as B,N as ge,O as fe,P as be,Q as ye,R as C,S as $,T as pe,U as Se}from"./index.04fa779c.js";import{p as Ve}from"./storage.2a4e29a5.js";import{_ as ke}from"./logo.24fa1388.js";import{m as Te,c as _e,a as we,u as xe}from"./layout.94743a6a.js";import{V as Be,a as Ce}from"./VTabs.bce26374.js";const Pe=T({...E(),...Te({fullHeight:!0}),...D()},"VApp"),Le=P()({name:"VApp",props:Pe(),setup(e,v){let{slots:t}=v;const u=M(e),{layoutClasses:o,layoutStyles:a,getLayoutItem:c,items:i,layoutRef:m}=_e(e),{rtlClasses:g}=j();return L(()=>{var s;return l("div",{ref:m,class:["v-application",u.themeClasses.value,o.value,g.value,e.class],style:[a.value,e.style]},[l("div",{class:"v-application__wrap"},[(s=t.default)==null?void 0:s.call(t)])])}),{getLayoutItem:c,items:i,theme:u}}});const Ae=T({text:String,...E(),...q()},"VToolbarTitle"),Ie=P()({name:"VToolbarTitle",props:Ae(),setup(e,v){let{slots:t}=v;return L(()=>{const u=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[u&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Ne=[null,"prominent","default","comfortable","compact"],O=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ne.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...J(),...E(),...K(),...Q(),...q({tag:"header"}),...D()},"VToolbar"),U=P()({name:"VToolbar",props:O(),setup(e,v){var r;let{slots:t}=v;const{backgroundColorClasses:u,backgroundColorStyles:o}=Y(N(e,"color")),{borderClasses:a}=X(e),{elevationClasses:c}=Z(e),{roundedClasses:i}=ee(e),{themeClasses:m}=M(e),{rtlClasses:g}=j(),s=S(!!(e.extended||((r=t.extension)==null?void 0:r.call(t)))),b=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=d(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return te({VBtn:{variant:"text"}}),L(()=>{var n;const y=!!(e.title||t.title),V=!!(t.image||e.image),_=(n=t.extension)==null?void 0:n.call(t);return s.value=!!(e.extended||_),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,a.value,c.value,i.value,m.value,g.value,e.class],style:[o.value,e.style]},{default:()=>[V&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ae,{key:"image-img",cover:!0,src:e.image},null)]),l(A,{defaults:{VTabs:{height:w(b.value)}}},{default:()=>{var p,f,k;return[l("div",{class:"v-toolbar__content",style:{height:w(b.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(p=t.prepend)==null?void 0:p.call(t)]),y&&l(Ie,{key:"title",text:e.title},{text:t.title}),(f=t.default)==null?void 0:f.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),l(A,{defaults:{VTabs:{height:w(h.value)}}},{default:()=>[l(le,null,{default:()=>[s.value&&l("div",{class:"v-toolbar__extension",style:{height:w(h.value)}},[_])]})]})]})}),{contentHeight:b,extensionHeight:h}}}),Ee=T({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Re(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=v;let u=0;const o=R(null),a=S(0),c=S(0),i=S(0),m=S(!1),g=S(!1),s=d(()=>Number(e.scrollThreshold)),b=d(()=>oe((s.value-a.value)/s.value||0)),h=()=>{const r=o.value;!r||t&&!t.value||(u=a.value,a.value="window"in r?r.pageYOffset:r.scrollTop,g.value=a.value<u,i.value=Math.abs(a.value-s.value))};return x(g,()=>{c.value=c.value||a.value}),x(m,()=>{c.value=0}),ne(()=>{x(()=>e.scrollTarget,r=>{var V;const y=r?document.querySelector(r):window;!y||y!==o.value&&((V=o.value)==null||V.removeEventListener("scroll",h),o.value=y,o.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),se(()=>{var r;(r=o.value)==null||r.removeEventListener("scroll",h)}),t&&x(t,h,{immediate:!0}),{scrollThreshold:s,currentScroll:a,currentThreshold:i,isScrollActive:m,scrollRatio:b,isScrollingUp:g,savedScroll:c}}const We=T({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...O(),...we(),...Ee(),height:{type:[Number,String],default:64}},"VAppBar"),He=P()({name:"VAppBar",props:We(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const u=R(),o=ie(e,"modelValue"),a=d(()=>{var p,f;const n=new Set((f=(p=e.scrollBehavior)==null?void 0:p.split(" "))!=null?f:[]);return{hide:n.has("hide"),inverted:n.has("inverted"),collapse:n.has("collapse"),elevate:n.has("elevate"),fadeImage:n.has("fade-image")}}),c=d(()=>{const n=a.value;return n.hide||n.inverted||n.collapse||n.elevate||n.fadeImage||!o.value}),{currentScroll:i,scrollThreshold:m,isScrollingUp:g,scrollRatio:s}=Re(e,{canScroll:c}),b=d(()=>e.collapse||a.value.collapse&&(a.value.inverted?s.value>0:s.value===0)),h=d(()=>e.flat||a.value.elevate&&(a.value.inverted?i.value>0:i.value===0)),r=d(()=>a.value.fadeImage?a.value.inverted?1-s.value:s.value:void 0),y=d(()=>{var f,k,W,H;if(a.value.hide&&a.value.inverted)return 0;const n=(k=(f=u.value)==null?void 0:f.contentHeight)!=null?k:0,p=(H=(W=u.value)==null?void 0:W.extensionHeight)!=null?H:0;return n+p});re(d(()=>!!e.scrollBehavior),()=>{de(()=>{a.value.hide?a.value.inverted?o.value=i.value>m.value:o.value=g.value||i.value<m.value:o.value=!0})});const{ssrBootStyles:V}=ue(),{layoutItemStyles:_}=xe({id:e.name,order:d(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:y,elementSize:S(void 0),active:o,absolute:N(e,"absolute")});return L(()=>{const[n]=U.filterProps(e);return l(U,ce({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":r.value,height:void 0,...V.value},e.style]},n,{collapse:b.value,flat:h.value}),t)}),{}}}),ze=ve("v-spacer","div","VSpacer"),Fe=Ve(),$e={data:()=>({ps:Fe,camFunAry:R([]),tab:null,drawer:!0,value:0,windowWidth:"",railWidth:"1",open:["Users"],theme:"default",themeDark:"false",navList:{},opened:["\u6848\u4EF6\u7BA1\u7406"],overlay:!1,isSmallScreen:window.innerWidth<768,list:[{name:"\u4E2D\u592E\u6B0A\u9650\u7BA1\u7406",link:"ui"},{name:"\u529F\u80FD\u8A2D\u5B9A",link:"system"},{name:"\u516C\u5831\u7BA1\u7406",link:"ui"},{name:"\u66F8\u9762\u8CEA\u8A62",link:"ui"},{name:"\u5C08\u6848\u5831\u544A",link:"ui"},{name:"\u7DB2\u7AD9\u7BA1\u7406",link:"ui"},{name:"\u7CFB\u7D71\u7BA1\u7406",link:"ui"}]}),created(){G.post("/api/cam/cam-menu.json").then(e=>{this.camFunAry=e.data,console.log(this.camFunAry)})},methods:{goHome(){z.push({name:"my-index"})},goLink(e){console.log(e),z.push({name:e})},handleResize(){this.windowWidth=window.innerWidth,this.windowWidth<991?this.railWidth=1:this.railWidth=70,this.isSmallScreen=window.innerWidth<991},menuTarget(e){this.opened=e.slice(-1)}},mounted(){this.windowWidth=window.innerWidth,this.handleResize(),window.addEventListener("resize",this.handleResize)}},Ue=C("div",{class:"logo"},[C("img",{src:ke,alt:""})],-1),De={class:"userName"},Me=C("span",null,"\u4F01\u5283\u8655",-1);function je(e,v,t,u,o,a){const c=he("router-view");return I(),F(Le,{id:"inspire",class:ge(["layout",{isSmallScreen:e.isSmallScreen}])},{default:B(()=>[l(He,{class:"elevation-3",height:"72"},{default:B(()=>[Ue,l(ze),l(Be,{"center-active":"",centered:"","show-arrows":""},{default:B(()=>[(I(!0),fe(ye,null,be(e.list,i=>(I(),F(Ce,{key:i.name,text:i.name,onClick:m=>a.goLink(i.link)},null,8,["text","onClick"]))),128))]),_:1}),C("div",De,[$(" Elle Wang /"),Me,l(pe,{variant:"outlined",density:"compact","hide-details":"none",color:"export",items:["Elle Wang","Long Li","Nyrie Lin"]})]),l(Se,{class:"loginBtn"},{default:B(()=>[$(" \u767B\u5165 ")]),_:1})]),_:1}),l(c)]),_:1},8,["class"])}const Ye=me($e,[["render",je]]);export{Ye as default};
