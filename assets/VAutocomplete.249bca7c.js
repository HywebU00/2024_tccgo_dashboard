import{p as we,be as Se,bf as Fe,W as xe,bg as Ie,bh as Pe,g as Ae,aQ as De,x as j,s as I,C as z,o as C,bi as Re,Y as _e,bj as Me,bk as Te,bl as G,bm as Le,z as J,c as Ue,b5 as X,d as o,Q as U,aC as Ee,F as L,aj as Ke,al as Z,bn as Ne,b4 as Oe,a7 as ee,bo as Be,r as je,S as ze,bp as He,bd as Qe,bq as $e,br as le,at as te}from"./index.6a9c1362.js";function qe(l,h,t){if(h==null)return l;if(Array.isArray(h))throw new Error("Multiple matches is not implemented");return typeof h=="number"&&~h?o(U,null,[o("span",{class:"v-autocomplete__unmask"},[l.substr(0,h)]),o("span",{class:"v-autocomplete__mask"},[l.substr(h,t)]),o("span",{class:"v-autocomplete__unmask"},[l.substr(h+t)])]):l}const We=we({autoSelectFirst:{type:[Boolean,String]},search:String,...Se({filterKeys:["title"]}),...Fe(),...xe(Ie({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Pe({transition:!1})},"VAutocomplete"),Ge=Ae()({name:"VAutocomplete",props:We(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,h){let{slots:t}=h;const{t:ae}=De(),f=j(),y=I(!1),V=I(!0),P=I(!1),H=j(),E=z(l,"menu"),d=C({get:()=>E.value,set:e=>{var a;E.value&&!e&&((a=H.value)==null?void 0:a.\u03A8openChildren)||(E.value=e)}}),i=I(-1),ue=C(()=>{var e;return(e=f.value)==null?void 0:e.color}),{items:A,transformIn:ne,transformOut:oe}=Re(l),{textColorClasses:ie,textColorStyles:se}=_e(ue),v=z(l,"search",""),m=z(l,"modelValue",[],e=>ne(e===null?[null]:$e(e)),e=>{var u;const a=oe(e);return l.multiple?a:(u=a[0])!=null?u:null}),S=Me(),{filteredItems:D,getMatches:re}=Te(l,A,()=>V.value?"":v.value),g=C(()=>m.value.map(e=>A.value.find(a=>{const u=G(a.raw,l.itemValue),p=G(e.raw,l.itemValue);return u===void 0||p===void 0?!1:l.returnObject?l.valueComparator(u,p):l.valueComparator(a.value,e.value)})||e)),k=C(()=>l.hideSelected?D.value.filter(e=>!g.value.some(a=>a.value===e.value)):D.value),K=C(()=>g.value.map(e=>e.props.value)),Q=C(()=>g.value[i.value]),R=C(()=>{var a;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((a=k.value[0])==null?void 0:a.title))&&k.value.length>0&&!V.value&&!P.value}),N=C(()=>l.hideNoData&&!A.value.length||l.readonly||(S==null?void 0:S.isReadonly.value)),O=j(),{onListScroll:ce,onListKeydown:ve}=Le(O,f);function de(e){l.openOnClear&&(d.value=!0),v.value=""}function fe(){N.value||(d.value=!0)}function me(e){N.value||(y.value&&(e.preventDefault(),e.stopPropagation()),d.value=!d.value)}function pe(e){var p,n,s;if(l.readonly||(S==null?void 0:S.isReadonly.value))return;const a=f.value.selectionStart,u=K.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(d.value=!0),["Escape"].includes(e.key)&&(d.value=!1),R.value&&["Enter","Tab"].includes(e.key)&&w(D.value[0]),e.key==="ArrowDown"&&R.value&&((p=O.value)==null||p.focus("next")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(i.value<0){e.key==="Backspace"&&!v.value&&(i.value=u-1);return}const r=i.value;Q.value&&w(Q.value),i.value=r>=u-1?u-2:r}if(e.key==="ArrowLeft"){if(i.value<0&&a>0)return;const r=i.value>-1?i.value-1:u-1;g.value[r]?i.value=r:(i.value=-1,f.value.setSelectionRange((n=v.value)==null?void 0:n.length,(s=v.value)==null?void 0:s.length))}if(e.key==="ArrowRight"){if(i.value<0)return;const r=i.value+1;g.value[r]?i.value=r:(i.value=-1,f.value.setSelectionRange(0,0))}}}function he(e){v.value=e.target.value}function ge(e){if(le(f.value,":autofill")||le(f.value,":-webkit-autofill")){const a=A.value.find(u=>u.title===e.target.value);a&&w(a)}}function ye(){var e;y.value&&(V.value=!0,(e=f.value)==null||e.focus())}function Ve(e){y.value=!0,setTimeout(()=>{P.value=!0})}function be(e){P.value=!1}function Ce(e){(e==null||e===""&&!l.multiple)&&(m.value=[])}const F=I(!1);function w(e){if(l.multiple){const a=K.value.findIndex(u=>l.valueComparator(u,e.value));if(a===-1)m.value=[...m.value,e];else{const u=[...m.value];u.splice(a,1),m.value=u}}else m.value=[e],F.value=!0,v.value=e.title,d.value=!1,V.value=!0,te(()=>F.value=!1)}return J(y,(e,a)=>{var u,p;e!==a&&(e?(F.value=!0,v.value=l.multiple?"":String((p=(u=g.value.at(-1))==null?void 0:u.props.title)!=null?p:""),V.value=!0,te(()=>F.value=!1)):(!l.multiple&&!v.value?m.value=[]:R.value&&!P.value&&!g.value.some(n=>{let{value:s}=n;return s===k.value[0].value})&&w(k.value[0]),d.value=!1,v.value="",i.value=-1))}),J(v,e=>{!y.value||F.value||(e&&(d.value=!0),V.value=!e)}),Ue(()=>{const e=!!(l.chips||t.chip),a=!!(!l.hideNoData||k.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),u=m.value.length>0,[p]=X.filterProps(l);return o(X,L({ref:f},p,{modelValue:v.value,"onUpdate:modelValue":Ce,focused:y.value,"onUpdate:focused":n=>y.value=n,validationValue:m.externalValue,dirty:u,onInput:he,onChange:ge,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":i.value>-1},l.class],style:l.style,readonly:l.readonly,placeholder:u?void 0:l.placeholder,"onClick:clear":de,"onMousedown:control":fe,onKeydown:pe}),{...t,default:()=>o(U,null,[o(Ee,L({ref:H,modelValue:d.value,"onUpdate:modelValue":n=>d.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:ye},l.menuProps),{default:()=>{var n;return[a&&o(Ke,{ref:O,selected:K.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:ve,onFocusin:Ve,onFocusout:be,onScrollPassive:ce,tabindex:"-1",color:(n=l.itemColor)!=null?n:l.color},{default:()=>{var s,r,b,x;return[(s=t["prepend-item"])==null?void 0:s.call(t),!k.value.length&&!l.hideNoData&&((b=(r=t["no-data"])==null?void 0:r.call(t))!=null?b:o(Z,{title:ae(l.noDataText)},null)),o(Ne,{renderless:!0,items:k.value},{default:_=>{var q,W;let{item:c,index:B,itemRef:ke}=_;const $=L(c.props,{ref:ke,key:B,active:R.value&&B===0?!0:void 0,onClick:()=>w(c)});return(W=(q=t.item)==null?void 0:q.call(t,{item:c,index:B,props:$}))!=null?W:o(Z,$,{prepend:M=>{let{isSelected:T}=M;return o(U,null,[l.multiple&&!l.hideSelected?o(Oe,{key:c.value,modelValue:T,ripple:!1,tabindex:"-1"},null):void 0,c.props.prependIcon&&o(ee,{icon:c.props.prependIcon},null)])},title:()=>{var M,T,Y;return V.value?c.title:qe(c.title,(M=re(c))==null?void 0:M.title,(Y=(T=v.value)==null?void 0:T.length)!=null?Y:0)}})}}),(x=t["append-item"])==null?void 0:x.call(t)]}})]}}),g.value.map((n,s)=>{var x,_;function r(c){c.stopPropagation(),c.preventDefault(),w(n)}const b={"onClick:close":r,onMousedown(c){c.preventDefault(),c.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:n.value,class:["v-autocomplete__selection",s===i.value&&["v-autocomplete__selection--selected",ie.value]],style:s===i.value?se.value:{}},[e?t.chip?o(je,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:n.title}}},{default:()=>{var c;return[(c=t.chip)==null?void 0:c.call(t,{item:n,index:s,props:b})]}}):o(Be,L({key:"chip",closable:l.closableChips,size:"small",text:n.title},b),null):(_=(x=t.selection)==null?void 0:x.call(t,{item:n,index:s}))!=null?_:o("span",{class:"v-autocomplete__selection-text"},[n.title,l.multiple&&s<g.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var b;for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return o(U,null,[(b=t["append-inner"])==null?void 0:b.call(t,...s),l.menuIcon?o(ee,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:me,onClick:He},null):void 0])}})}),Qe({isFocused:y,isPristine:V,menu:d,search:v,filteredItems:D,select:w},f)}});export{Ge as V};
