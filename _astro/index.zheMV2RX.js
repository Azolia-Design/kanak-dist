import{r as u}from"./index.068npczX.js";function y(e,t,i){let n=new Set([...t,void 0]);return e.listen((s,l,r)=>{n.has(r)&&i(s,l,r)})}function c(e,t={}){let i=u.useCallback(s=>t.keys?y(e,t.keys,s):e.listen(s),[t.keys,e]),n=e.get.bind(e);return u.useSyncExternalStore(i,n,n)}export{c as u};
