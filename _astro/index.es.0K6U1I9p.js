import{_ as I}from"./tslib.es6.uVCKAQsh.js";import{r as L,a as N,A as W,w as G,k as V,g as z,d as w,i as H,b as J}from"./stagger.es.BRmkkqSD.js";import{b as P,m as Q,g as R,a as U,r as X,d as Y,f as Z,p as $}from"./resolve-elements.es.Ib2ShY-y.js";var q=function(){};function B(e,t,a,i){var n;return P(t)?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?a:(n=i.get(t))!==null&&n!==void 0?n:e}function tt(e,t,a){for(let i=0;i<e.length;i++){const n=e[i];n.at>t&&n.at<a&&(L(e,n),i--)}}function et(e,t,a,i,n,f){tt(e,n,f);for(let u=0;u<t.length;u++)e.push({value:t[u],at:Q(n,f,i[u]),easing:R(a,u)})}function nt(e,t){return e.at===t.at?e.value===null?1:-1:e.at-t.at}function ft(e,t={}){var a;const i=at(e,t),n=i.map(f=>N(...f,W)).filter(Boolean);return G(n,t,(a=i[0])===null||a===void 0?void 0:a[3].duration)}function at(e,t={}){var{defaultOptions:a={}}=t,i=I(t,["defaultOptions"]);const n=[],f=new Map,u={},O=new Map;let A=0,m=0,S=0;for(let c=0;c<e.length;c++){const l=e[c];if(U(l)){O.set(l,m);continue}else if(!Array.isArray(l)){O.set(l.name,B(m,l.at,A,O));continue}const[k,g,o={}]=l;o.at!==void 0&&(m=B(m,o.at,A,O));let s=0;const h=X(k,u),p=h.length;for(let d=0;d<p;d++){const D=h[d],M=it(D,f);for(const v in g){const C=st(v,M);let r=V(g[v]);const F=z(o,v);let{duration:E=a.duration||w.duration,easing:b=a.easing||w.easing}=F;if(H(b)){q(v==="opacity"||r.length>1);const T=b.createAnimation(r,v!=="opacity",()=>0,v);b=T.easing,r=T.keyframes||r,E=T.duration||E}const _=J(o.delay,d,p)||0,j=m+_,K=j+E;let{offset:y=Y(r.length)}=F;y.length===1&&y[0]===0&&(y[1]=1);const x=y.length-r.length;x>0&&Z(y,x),r.length===1&&r.unshift(null),et(C,r,b,y,j,K),s=Math.max(_+E,s),S=Math.max(K,S)}}A=m,m+=s}return f.forEach((c,l)=>{for(const k in c){const g=c[k];g.sort(nt);const o=[],s=[],h=[];for(let p=0;p<g.length;p++){const{at:d,value:D,easing:M}=g[p];o.push(D),s.push($(0,S,d)),h.push(M||w.easing)}s[0]!==0&&(s.unshift(0),o.unshift(o[0]),h.unshift("linear")),s[s.length-1]!==1&&(s.push(1),o.push(null)),n.push([l,k,o,Object.assign(Object.assign(Object.assign({},a),{duration:S,easing:h,offset:s}),i)])}}),n}function it(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function st(e,t){return t[e]||(t[e]=[]),t[e]}export{ft as t};
