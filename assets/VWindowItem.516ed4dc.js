import{aP as Y,p as R,m as V,e as A,a as j,g as W,b as G,u as O,aQ as z,a3 as F,x as S,o as h,s as x,z as D,ae as U,d as m,R as w,c as _,aL as H,aM as Q,aR as q,aS as J,ab as K,aT as Z,E as N,aU as p,aV as ee,aW as te,v as X,at as ne}from"./index.1868c1bb.js";const oe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function se(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ae(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),oe(o)}function ie(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>se(t,o),touchend:t=>ae(t,o),touchmove:t=>ie(t,o)}}function ce(e,o){var d,v,c;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(d=t==null?void 0:t.options)!=null?d:{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ue(o.value);n._touchHandlers=(c=n._touchHandlers)!=null?c:Object.create(null),n._touchHandlers[u]=s,Y(s).forEach(g=>{n.addEventListener(g,s[g],a)})}function le(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];Y(a).forEach(d=>{t.removeEventListener(d,a[d])}),delete t._touchHandlers[n]}const k={mounted:ce,unmounted:le},re=k,L=Symbol.for("vuetify:v-window"),$=Symbol.for("vuetify:v-window-group"),ve=R({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...V(),...A(),...j()},"VWindow"),he=W()({name:"VWindow",directives:{Touch:k},props:ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=G(e),{isRtl:a}=O(),{t:u}=z(),s=F(e,$),d=S(),v=h(()=>a.value?!e.reverse:e.reverse),c=x(!1),g=h(()=>{const i=e.direction==="vertical"?"y":"x",f=(v.value?!c.value:c.value)?"-reverse":"";return`v-window-${i}${f}-transition`}),b=x(0),T=S(void 0),y=h(()=>s.items.value.findIndex(i=>s.selected.value.includes(i.id)));D(y,(i,r)=>{const f=s.items.value.length,I=f-1;f<=2?c.value=i<r:i===I&&r===0?c.value=!0:i===0&&r===I?c.value=!1:c.value=i<r}),U(L,{transition:g,isReversed:c,transitionCount:b,transitionHeight:T,rootRef:d});const l=h(()=>e.continuous||y.value!==0),B=h(()=>e.continuous||y.value!==s.items.value.length-1);function C(){l.value&&s.prev()}function E(){B.value&&s.next()}const P=h(()=>{const i=[],r={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};i.push(l.value?t.prev?t.prev({props:r}):m(w,r,null):m("div",null,null));const f={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return i.push(B.value?t.next?t.next({props:f}):m(w,f,null):m("div",null,null)),i}),M=h(()=>e.touch===!1?e.touch:{...{left:()=>{v.value?C():E()},right:()=>{v.value?E():C()},start:r=>{let{originalEvent:f}=r;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return _(()=>H(m(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var i,r;return[m("div",{class:"v-window__container",style:{height:T.value}},[(i=t.default)==null?void 0:i.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[P.value])]),(r=t.additional)==null?void 0:r.call(t,{group:s})]}}),[[Q("touch"),M.value]])),{group:s}}}),de=R({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...V(),...q(),...J()},"VWindowItem"),me=W()({name:"VWindowItem",directives:{Touch:re},props:de(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K(L),a=Z(e,$),{isBooted:u}=N();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=x(!1),d=h(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function v(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var l;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((l=n.rootRef.value)==null?void 0:l.clientHeight)),n.transitionCount.value+=1)}function g(){v()}function b(l){!s.value||ne(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=X(l.clientHeight))})}const T=h(()=>{const l=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof l!="string"?n.transition.value:l,onBeforeEnter:c,onAfterEnter:v,onEnterCancelled:g,onBeforeLeave:c,onAfterLeave:v,onLeaveCancelled:g,onEnter:b}:!1}),{hasContent:y}=p(e,a.isSelected);return _(()=>m(te,{transition:T.value,disabled:!u.value},{default:()=>{var l;return[H(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[y.value&&((l=t.default)==null?void 0:l.call(t))]),[[ee,a.isSelected.value]])]}})),{groupItem:a}}});export{he as V,me as a,de as b,ve as m};