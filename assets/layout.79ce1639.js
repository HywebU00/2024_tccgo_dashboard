import{p as Z,ac as V,ad as ee,ae as k,af as D,s as X,ag as te,ah as oe,o as a,B as ne,x as ae,ai as $,a5 as se,v as M,A as ue,aj as le}from"./index.e7b2ea3c.js";const A=Symbol.for("vuetify:layout"),q=Symbol.for("vuetify:layout-item"),U=1e3,ve=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),de=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ye(){const s=V(A);if(!s)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:s.getLayoutItem,mainRect:s.mainRect,mainStyles:s.mainStyles}}function fe(s){var y;const l=V(A);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=(y=s.id)!=null?y:`layout-item-${ee()}`,i=k("useLayoutItem");D(q,{id:d});const n=X(!1);te(()=>n.value=!0),oe(()=>n.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=l.register(i,{...s,active:a(()=>n.value?!1:s.active.value),id:d});return ne(()=>l.unregister(d)),{layoutItemStyles:r,layoutRect:l.layoutRect,layoutItemScrimStyles:c}}const ie=(s,l,d,i)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const c of s){const y=l.get(c),g=d.get(c),z=i.get(c);if(!y||!g||!z)continue;const h={...n,[y.value]:parseInt(n[y.value],10)+(z.value?parseInt(g.value,10):0)};r.push({id:c,layer:h}),n=h}return r};function pe(s){const l=V(A,null),d=a(()=>l?l.rootZIndex.value-100:U),i=ae([]),n=$(new Map),r=$(new Map),c=$(new Map),y=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=se(),F=a(()=>{var e;const t=new Map,u=(e=s.overlaps)!=null?e:[];for(const p of u.filter(o=>o.includes(":"))){const[o,v]=p.split(":");if(!i.value.includes(o)||!i.value.includes(v))continue;const m=n.get(o),S=n.get(v),w=r.get(o),R=r.get(v);!m||!S||!w||!R||(t.set(v,{position:m.value,amount:parseInt(w.value,10)}),t.set(o,{position:S.value,amount:-parseInt(R.value,10)}))}return t}),I=a(()=>{const t=[...new Set([...c.values()].map(e=>e.value))].sort((e,p)=>e-p),u=[];for(const e of t){const p=i.value.filter(o=>{var v;return((v=c.get(o))==null?void 0:v.value)===e});u.push(...p)}return ie(u,n,r,y)}),j=a(()=>!Array.from(g.values()).some(t=>t.value)),b=a(()=>I.value[I.value.length-1].layer),W=a(()=>({"--v-layout-left":M(b.value.left),"--v-layout-right":M(b.value.right),"--v-layout-top":M(b.value.top),"--v-layout-bottom":M(b.value.bottom),...j.value?void 0:{transition:"none"}})),x=a(()=>I.value.slice(1).map((t,u)=>{let{id:e}=t;const{layer:p}=I.value[u],o=r.get(e),v=n.get(e);return{id:e,...p,size:Number(o.value),position:v.value}})),B=t=>x.value.find(u=>u.id===t),O=k("createLayout"),H=X(!1);ue(()=>{H.value=!0}),D(A,{register:(t,u)=>{let{id:e,order:p,position:o,layoutSize:v,elementSize:m,active:S,disableTransitions:w,absolute:R}=u;c.set(e,p),n.set(e,o),r.set(e,v),y.set(e,S),w&&g.set(e,w);const T=le(q,O==null?void 0:O.vnode).indexOf(t);T>-1?i.value.splice(T,0,e):i.value.push(e);const K=a(()=>x.value.findIndex(L=>L.id===e)),C=a(()=>d.value+I.value.length*2-K.value*2),G=a(()=>{const L=o.value==="left"||o.value==="right",P=o.value==="right",Q=o.value==="bottom",N={[o.value]:0,zIndex:C.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(P||Q?-1:1)}%)`,position:R.value||d.value!==U?"absolute":"fixed",...j.value?void 0:{transition:"none"}};if(!H.value)return N;const f=x.value[K.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const E=F.value.get(e);return E&&(f[E.position]+=E.amount),{...N,height:L?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:P?void 0:`${f.left}px`,right:P?`${f.right}px`:void 0,top:o.value!=="bottom"?`${f.top}px`:void 0,bottom:o.value!=="top"?`${f.bottom}px`:void 0,width:L?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),J=a(()=>({zIndex:C.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:J,zIndex:C}},unregister:t=>{c.delete(t),n.delete(t),r.delete(t),y.delete(t),g.delete(t),i.value=i.value.filter(u=>u!==t)},mainRect:b,mainStyles:W,getLayoutItem:B,items:x,layoutRect:h,rootZIndex:d});const Y=a(()=>["v-layout",{"v-layout--full-height":s.fullHeight}]),_=a(()=>({zIndex:d.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:Y,layoutStyles:_,getLayoutItem:B,items:x,layoutRect:h,layoutRef:z}}export{de as a,ye as b,pe as c,ve as m,fe as u};