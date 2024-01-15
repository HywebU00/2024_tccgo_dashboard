import{p as F,m as q,e as Z,g as U,E as j,c as Q,d as S,s as p,o as w,v as oe,A as G,z as H,B as J,an as le,f as ue,h as ie,i as re,a as se,u as ce,b as ve,k as de,j as O,t as $,l as me,a2 as fe,n as ge,ao as he,C as ye,ap as we,x as be,aq as Se,q as Me,F as X,ar as ke,Q as Ee,as as Te,at as xe}from"./index.7eeb83ab.js";import{b as Be,a as Ve,u as Ce}from"./layout.bff157ea.js";const pe=F({scrollable:Boolean,...q(),...Z({tag:"main"})},"VMain"),Oe=U()({name:"VMain",props:pe(),setup(e,s){let{slots:o}=s;const{mainStyles:u}=Be(),{ssrBootStyles:a}=j();return Q(()=>S(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,a.value,e.style]},{default:()=>{var t,d;return[e.scrollable?S("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(d=o.default)==null?void 0:d.call(o)]}})),{}}});function Pe(e){let{rootEl:s,isSticky:o,layoutItemStyles:u}=e;const a=p(!1),t=p(0),d=w(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:oe(t.value)}:{top:u.value.top}]});G(()=>{H(o,g=>{g?window.addEventListener("scroll",M,{passive:!0}):window.removeEventListener("scroll",M)},{immediate:!0})}),J(()=>{window.removeEventListener("scroll",M)});let y=0;function M(){var E;const g=y>window.scrollY?"up":"down",r=s.value.getBoundingClientRect(),c=parseFloat((E=u.value.top)!=null?E:0),v=window.scrollY-Math.max(0,t.value-c),m=r.height+Math.max(t.value,c)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;r.height<window.innerHeight-c?(a.value="top",t.value=c):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+r.top-f,a.value=!0):g==="down"&&m<=0?(t.value=0,a.value="bottom"):g==="up"&&v<=0&&(f?a.value!=="top"&&(t.value=-v+f+c,a.value="top"):(t.value=r.top+v,a.value="top")),y=window.scrollY}return{isStuck:a,stickyStyles:d}}const Re=100,He=20;function z(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function A(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const u=z(s),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);s+=(a-u)*Math.abs(a),o===e.length-1&&(s*=.5)}return z(s)*1e3}function Ye(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{var y;((y=e[t.identifier])!=null?y:e[t.identifier]=new le(He)).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const d=t[0],y=[],M=[];for(const r of t){if(d[0]-r[0]>Re)break;y.push({t:r[0],d:r[1].clientX}),M.push({t:r[0],d:r[1].clientY})}return{x:A(y),y:A(M),get direction(){const{x:r,y:c}=this,[v,m]=[Math.abs(r),Math.abs(c)];return v>m&&r>=0?"right":v>m&&r<=0?"left":m>v&&c>=0?"down":m>v&&c<=0?"up":Le()}}}return{addMovement:s,endTouch:o,getVelocity:u}}function Le(){throw new Error}function Ne(e){let{isActive:s,isTemporary:o,width:u,touchless:a,position:t}=e;G(()=>{window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),J(()=>{window.removeEventListener("touchstart",R),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",B)});const d=w(()=>["left","right"].includes(t.value)),{addMovement:y,endTouch:M,getVelocity:g}=Ye();let r=!1;const c=p(!1),v=p(0),m=p(0);let f;function E(n,i){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:C())-(i?u.value:0)}function P(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=t.value==="left"?(n-m.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-n-m.value)/u.value:t.value==="top"?(n-m.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-n-m.value)/u.value:C();return i?Math.max(0,Math.min(1,l)):l}function R(n){if(a.value)return;const i=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,h=25,k=t.value==="left"?i<h:t.value==="right"?i>document.documentElement.clientWidth-h:t.value==="top"?l<h:t.value==="bottom"?l>document.documentElement.clientHeight-h:C(),x=s.value&&(t.value==="left"?i<u.value:t.value==="right"?i>document.documentElement.clientWidth-u.value:t.value==="top"?l<u.value:t.value==="bottom"?l>document.documentElement.clientHeight-u.value:C());(k||x||s.value&&o.value)&&(r=!0,f=[i,l],m.value=E(d.value?i:l,s.value),v.value=P(d.value?i:l),M(n),y(n))}function T(n){const i=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(r){if(!n.cancelable){r=!1;return}const k=Math.abs(i-f[0]),x=Math.abs(l-f[1]);(d.value?k>x&&k>3:x>k&&x>3)?(c.value=!0,r=!1):(d.value?x:k)>3&&(r=!1)}if(!c.value)return;n.preventDefault(),y(n);const h=P(d.value?i:l,!1);v.value=Math.max(0,Math.min(1,h)),h>1?m.value=E(d.value?i:l,!0):h<0&&(m.value=E(d.value?i:l,!1))}function B(n){if(r=!1,!c.value)return;y(n),c.value=!1;const i=g(n.changedTouches[0].identifier),l=Math.abs(i.x),h=Math.abs(i.y);(d.value?l>h&&l>400:h>l&&h>3)?s.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||C()):s.value=v.value>.5}const V=w(()=>c.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*u.value}px))`:C(),transition:"none"}:void 0);return{isDragging:c,dragProgress:v,dragStyles:V}}function C(){throw new Error}const Ie=["start","end","left","right","top","bottom"],_e=F({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ie.includes(e)},sticky:Boolean,...ue(),...q(),...ie(),...Ve(),...re(),...Z({tag:"nav"}),...se()},"VNavigationDrawer"),$e=U()({name:"VNavigationDrawer",props:_e(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:o,emit:u,slots:a}=s;const{isRtl:t}=ce(),{themeClasses:d}=ve(e),{borderClasses:y}=de(e),{backgroundColorClasses:M,backgroundColorStyles:g}=O($(e,"color")),{elevationClasses:r}=me(e),{mobile:c}=fe(),{roundedClasses:v}=ge(e),m=he(),f=ye(e,"modelValue",null,b=>!!b),{ssrBootStyles:E}=j(),{scopeId:P}=we(),R=be(),T=p(!1),B=w(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),V=w(()=>Te(e.location,t.value)),n=w(()=>!e.permanent&&(c.value||e.temporary)),i=w(()=>e.sticky&&!n.value&&V.value!=="bottom");e.expandOnHover&&e.rail!=null&&H(T,b=>u("update:rail",!b)),e.disableResizeWatcher||H(n,b=>!e.permanent&&xe(()=>f.value=!b)),!e.disableRouteWatcher&&m&&H(m.currentRoute,()=>n.value&&(f.value=!1)),H(()=>e.permanent,b=>{b&&(f.value=!0)}),Se(()=>{e.modelValue!=null||n.value||(f.value=e.permanent||!c.value)});const{isDragging:l,dragProgress:h,dragStyles:k}=Ne({isActive:f,isTemporary:n,width:B,touchless:$(e,"touchless"),position:V}),x=w(()=>{const b=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return l.value?b*h.value:b}),{layoutItemStyles:Y,layoutItemScrimStyles:K}=Ce({id:e.name,order:w(()=>parseInt(e.order,10)),position:V,layoutSize:x,elementSize:B,active:w(()=>f.value||l.value),disableTransitions:w(()=>l.value),absolute:w(()=>e.absolute||i.value&&typeof L.value!="string")}),{isStuck:L,stickyStyles:ee}=Pe({rootEl:R,isSticky:i,layoutItemStyles:Y}),N=O(w(()=>typeof e.scrim=="string"?e.scrim:null)),te=w(()=>({...l.value?{opacity:h.value*.2,transition:"none"}:void 0,...K.value}));Me({VList:{bgColor:"transparent"}});function ae(){T.value=!0}function ne(){T.value=!1}return Q(()=>{const b=a.image||e.image;return S(Ee,null,[S(e.tag,X({ref:R,onMouseenter:ae,onMouseleave:ne,class:["v-navigation-drawer",`v-navigation-drawer--${V.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":i.value},d.value,M.value,y.value,r.value,v.value,e.class],style:[g.value,Y.value,k.value,E.value,ee.value,e.style]},P,o),{default:()=>{var I,_,D,W;return[b&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(I=a.image)==null?void 0:I.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),S("div",{class:"v-navigation-drawer__content"},[(D=a.default)==null?void 0:D.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[(W=a.append)==null?void 0:W.call(a)])]}}),S(ke,{name:"fade-transition"},{default:()=>[n.value&&(l.value||f.value)&&!!e.scrim&&S("div",X({class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[te.value,N.backgroundColorStyles.value],onClick:()=>f.value=!1},P),null)]})])}),{isStuck:L}}});export{$e as V,Oe as a};
