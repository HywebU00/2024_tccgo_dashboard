import{p as b,m as p,bb as v,g as F,bc as V,x as y,c as h,d as R,bd as P}from"./index.6a9c1362.js";const k=b({...p(),...v()},"VForm"),x=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:c}=i;const r=V(o),s=y();function f(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),c("submit",a),a.defaultPrevented||e.then(u=>{var m;let{valid:d}=u;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return R("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:f,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{x as V};
