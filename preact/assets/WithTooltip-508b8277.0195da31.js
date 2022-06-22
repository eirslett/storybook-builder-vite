import{ab as wt,X as Jt,Y as Se,ac as ue,ad as pe,W as Kt,$ as Ue,R as H,a0 as ve,a1 as Ne,aa as re,ae as Qt,af as I,ag as Zt,a9 as He,ah as ot,T as bt,ai as Re,aj as Ot,ak as _t,al as er,am as xt,an as Ce,ao as j,ap as $,aq as W,ar as M,as as Tt,at as Ve,au as Le,av as ce,aw as nt,ax as Rt,ay as tr,az as rr}from"./iframe.42768b7f.js";var it,at;function or(t,e){return sr(t)||ar(t,e)||ir(t,e)||nr()}function nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(t,e){if(!!t){if(typeof t=="string")return st(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return st(t,e)}}function st(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function ar(t,e){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r=[],n=!0,i=!1,s,a;try{for(o=o.call(t);!(n=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));n=!0);}catch(l){i=!0,a=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw a}}return r}}function sr(t){if(Array.isArray(t))return t}function Ct(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Pe(t){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(t)}function V(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oe(t){var e=F(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=F(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot=="undefined")return!1;var e=F(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function lr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!V(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function cr(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!L(n)||!V(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var ur={name:"applyStyles",enabled:!0,phase:"write",fn:lr,effect:cr,requires:["computeStyles"]};function N(t){return t.split("-")[0]}var _=Math.max,Ee=Math.min,ne=Math.round;function ie(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(L(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ne(o.width)/s||1),i>0&&(n=ne(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ie(t){var e=ie(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function Et(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&Pt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Y(t){return F(t).getComputedStyle(t)}function pr(t){return["table","td","th"].indexOf(V(t))>=0}function J(t){return((oe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ae(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||J(t)}function lt(t){return!L(t)||Y(t).position==="fixed"?null:t.offsetParent}function fr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&L(t)){var r=Y(t);if(r.position==="fixed")return null}for(var n=Ae(t);L(n)&&["html","body"].indexOf(V(n))<0;){var i=Y(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ge(t){for(var e=F(t),o=lt(t);o&&pr(o)&&Y(o).position==="static";)o=lt(o);return o&&(V(o)==="html"||V(o)==="body"&&Y(o).position==="static")?e:o||fr(t)||e}function Ye(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,o){return _(t,Ee(e,o))}function dr(t,e,o){var r=fe(t,e,o);return r>o?o:r}function St(){return{top:0,right:0,bottom:0,left:0}}function At(t){return Object.assign({},St(),t)}function kt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var vr=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,At(typeof e!="number"?e:kt(e,Ve))};function hr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=N(o.placement),l=Ye(a),u=[M,$].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var d=vr(n.padding,o),m=Ie(i),p=l==="y"?j:M,v=l==="y"?W:$,h=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],g=s[l]-o.rects.reference[l],O=ge(i),T=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],w=T-m[c]-d[v],b=T/2-m[c]/2+y,x=fe(f,b,w),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function gr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Et(e.elements.popper,n)||(e.elements.arrow=n))}var mr={name:"arrow",enabled:!0,phase:"main",fn:hr,effect:gr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(t){return t.split("-")[1]}var yr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ne(e*n)/n||0,y:ne(o*n)/n||0}}function ct(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),y=M,f=j,w=window;if(u){var b=ge(o),x="clientHeight",R="clientWidth";if(b===F(o)&&(b=J(o),Y(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===j||(n===M||n===$)&&i===Le){f=W;var E=d&&w.visualViewport?w.visualViewport.height:b[x];h-=E-r.height,h*=l?1:-1}if(n===M||(n===j||n===W)&&i===Le){y=$;var P=d&&w.visualViewport?w.visualViewport.width:b[R];p-=P-r.width,p*=l?1:-1}}var C=Object.assign({position:a},u&&yr),k=c===!0?wr({x:p,y:h}):{x:p,y:h};if(p=k.x,h=k.y,l){var S;return Object.assign({},C,(S={},S[f]=T?"0":"",S[y]=O?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",S))}return Object.assign({},C,(e={},e[f]=T?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function br(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:N(e.placement),variation:ae(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ct(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ct(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Or={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:br,data:{}},Oe={passive:!0};function xr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,Oe)}),a&&l.addEventListener("resize",o.update,Oe),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,Oe)}),a&&l.removeEventListener("resize",o.update,Oe)}}var Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xr,data:{}},Rr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(t){return t.replace(/left|right|bottom|top/g,function(e){return Rr[e]})}var Cr={start:"end",end:"start"};function ut(t){return t.replace(/start|end/g,function(e){return Cr[e]})}function Xe(t){var e=F(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function ze(t){return ie(J(t)).left+Xe(t).scrollLeft}function Pr(t){var e=F(t),o=J(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+ze(t),y:a}}function Er(t){var e,o=J(t),r=Xe(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=_(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=_(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+ze(t),l=-r.scrollTop;return Y(n||o).direction==="rtl"&&(a+=_(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function qe(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Bt(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:L(t)&&qe(t)?t:Bt(Ae(t))}function de(t,e){var o;e===void 0&&(e=[]);var r=Bt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=F(r),s=n?[i].concat(i.visualViewport||[],qe(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(de(Ae(s)))}function $e(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Sr(t){var e=ie(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function pt(t,e){return e===Rt?$e(Pr(t)):oe(e)?Sr(e):$e(Er(J(t)))}function Ar(t){var e=de(Ae(t)),o=["absolute","fixed"].indexOf(Y(t).position)>=0,r=o&&L(t)?ge(t):t;return oe(r)?e.filter(function(n){return oe(n)&&Et(n,r)&&V(n)!=="body"}):[]}function kr(t,e,o){var r=e==="clippingParents"?Ar(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=pt(t,l);return a.top=_(u.top,a.top),a.right=Ee(u.right,a.right),a.bottom=Ee(u.bottom,a.bottom),a.left=_(u.left,a.left),a},pt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function jt(t){var e=t.reference,o=t.element,r=t.placement,n=r?N(r):null,i=r?ae(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case j:l={x:s,y:e.y-o.height};break;case W:l={x:s,y:e.y+e.height};break;case $:l={x:e.x+e.width,y:a};break;case M:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?Ye(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Ce:l[u]=l[u]-(e[c]/2-o[c]/2);break;case Le:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function he(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?rr:i,a=o.rootBoundary,l=a===void 0?Rt:a,u=o.elementContext,c=u===void 0?ce:u,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=At(typeof v!="number"?v:kt(v,Ve)),g=c===ce?tr:ce,O=t.rects.popper,T=t.elements[m?g:c],y=kr(oe(T)?T:T.contextElement||J(t.elements.popper),s,l),f=ie(t.elements.reference),w=jt({reference:f,element:O,strategy:"absolute",placement:n}),b=$e(Object.assign({},O,w)),x=c===ce?b:f,R={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},E=t.modifiersData.offset;if(c===ce&&E){var P=E[n];Object.keys(R).forEach(function(C){var k=[$,W].indexOf(C)>=0?1:-1,S=[j,W].indexOf(C)>=0?"y":"x";R[C]+=P[S]*k})}return R}function Br(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?Tt:l,c=ae(r),d=c?a?nt:nt.filter(function(v){return ae(v)===c}):Ve,m=d.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=he(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[N(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function jr(t){if(N(t)===xt)return[];var e=xe(t);return[ut(t),e,ut(e)]}function Mr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=N(g),T=O===g,y=l||(T||!v?[xe(g)]:jr(g)),f=[g].concat(y).reduce(function(te,q){return te.concat(N(q)===xt?Br(e,{placement:q,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:h}):q)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,E=f[0],P=0;P<f.length;P++){var C=f[P],k=N(C),S=ae(C)===Ce,X=[j,W].indexOf(k)>=0,z=X?"width":"height",A=he(e,{placement:C,boundary:c,rootBoundary:d,altBoundary:m,padding:u}),B=X?S?$:M:S?W:j;w[z]>b[z]&&(B=xe(B));var ee=xe(B),K=[];if(i&&K.push(A[k]<=0),a&&K.push(A[B]<=0,A[ee]<=0),K.every(function(te){return te})){E=C,R=!1;break}x.set(C,K)}if(R)for(var me=v?3:1,ke=function(q){var le=f.find(function(we){var Q=x.get(we);if(Q)return Q.slice(0,q).every(function(Be){return Be})});if(le)return E=le,"break"},se=me;se>0;se--){var ye=ke(se);if(ye==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}var Dr={name:"flip",enabled:!0,phase:"main",fn:Mr,requiresIfExists:["offset"],data:{_skip:!1}};function ft(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function dt(t){return[j,$,W,M].some(function(e){return t[e]>=0})}function Hr(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=he(e,{elementContext:"reference"}),a=he(e,{altBoundary:!0}),l=ft(s,r),u=ft(a,n,i),c=dt(l),d=dt(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var Lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Hr};function $r(t,e,o){var r=N(t),n=[M,j].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[M,$].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Wr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=Tt.reduce(function(c,d){return c[d]=$r(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Wr};function Ur(t){var e=t.state,o=t.name;e.modifiersData[o]=jt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Nr={name:"popperOffsets",enabled:!0,phase:"read",fn:Ur,data:{}};function Vr(t){return t==="x"?"y":"x"}function Ir(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=he(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),O=N(e.placement),T=ae(e.placement),y=!T,f=Ye(O),w=Vr(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,E=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,P=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(!!b){if(i){var S,X=f==="y"?j:M,z=f==="y"?W:$,A=f==="y"?"height":"width",B=b[f],ee=B+g[X],K=B-g[z],me=p?-R[A]/2:0,ke=T===Ce?x[A]:R[A],se=T===Ce?-R[A]:-x[A],ye=e.elements.arrow,te=p&&ye?Ie(ye):{width:0,height:0},q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:St(),le=q[X],we=q[z],Q=fe(0,x[A],te[A]),Be=y?x[A]/2-me-Q-le-P.mainAxis:ke-Q-le-P.mainAxis,It=y?-x[A]/2+me+Q+we+P.mainAxis:se+Q+we+P.mainAxis,je=e.elements.arrow&&ge(e.elements.arrow),Yt=je?f==="y"?je.clientTop||0:je.clientLeft||0:0,Ge=(S=C==null?void 0:C[f])!=null?S:0,Xt=B+Be-Ge-Yt,zt=B+It-Ge,Je=fe(p?Ee(ee,Xt):ee,B,p?_(K,zt):K);b[f]=Je,k[f]=Je-B}if(a){var Ke,qt=f==="x"?j:M,Gt=f==="x"?W:$,Z=b[w],be=w==="y"?"height":"width",Qe=Z+g[qt],Ze=Z-g[Gt],Me=[j,M].indexOf(O)!==-1,_e=(Ke=C==null?void 0:C[w])!=null?Ke:0,et=Me?Qe:Z-x[be]-R[be]-_e+P.altAxis,tt=Me?Z+x[be]+R[be]-_e-P.altAxis:Ze,rt=p&&Me?dr(et,Z,tt):fe(p?et:Qe,Z,p?tt:Ze);b[w]=rt,k[w]=rt-Z}e.modifiersData[r]=k}}var Yr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"]};function Xr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function zr(t){return t===F(t)||!L(t)?Xe(t):Xr(t)}function qr(t){var e=t.getBoundingClientRect(),o=ne(e.width)/t.offsetWidth||1,r=ne(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Gr(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&qr(e),i=J(e),s=ie(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((V(e)!=="body"||qe(i))&&(a=zr(e)),L(e)?(l=ie(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=ze(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Jr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Kr(t){var e=Jr(t);return er.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function Qr(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Zr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var vt={placement:"bottom",modifiers:[],strategy:"absolute"};function ht(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function _r(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?vt:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},vt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:c,setOptions:function(O){var T=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},i,c.options,T),c.scrollParents={reference:oe(a)?de(a):a.contextElement?de(a.contextElement):[],popper:de(l)};var y=Kr(Zr([].concat(r,c.options.modifiers)));return c.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=c.elements,T=O.reference,y=O.popper;if(!!ht(T,y)){c.rects={reference:Gr(T,ge(y),c.options.strategy==="fixed"),popper:Ie(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var w=c.orderedModifiers[f],b=w.fn,x=w.options,R=x===void 0?{}:x,E=w.name;typeof b=="function"&&(c=b({state:c,options:R,name:E,instance:p})||c)}}}},update:Qr(function(){return new Promise(function(g){p.forceUpdate(),g(c)})}),destroy:function(){h(),m=!0}};if(!ht(a,l))return p;p.setOptions(u).then(function(g){!m&&u.onFirstUpdate&&u.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var O=g.name,T=g.options,y=T===void 0?{}:T,f=g.effect;if(typeof f=="function"){var w=f({state:c,name:O,instance:p,options:y}),b=function(){};d.push(w||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var eo=[Tr,Nr,Or,ur,Fr,Dr,Yr,mr,Lr],to=_r({defaultModifiers:eo});function We(t,e){return We=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},We(t,e)}function Mt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,We(t,e)}var Dt=wt(),Ht=wt();function ro(t){var e=t.children,o=ve(null),r=o[0],n=o[1],i=He(!1);re(function(){return function(){i.current=!0}},[]);var s=Ne(function(a){i.current||n(a)},[]);return ot(Dt.Provider,{value:r},ot(Ht.Provider,{value:s},e))}var Lt=function(e){return Array.isArray(e)?e[0]:e},$t=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Fe=function(e,o){if(typeof e=="function")return $t(e,o);e!=null&&(e.current=o)},gt=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},mt=typeof window!="undefined"&&window.document&&window.document.createElement?_t:re,oo=typeof Element!="undefined",no=typeof Map=="function",io=typeof Set=="function",ao=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Te(t,e){if(t===e)return!0;if(t&&e&&Pe(t)=="object"&&Pe(e)=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Te(t[r],e[r]))return!1;return!0}var i;if(no&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Te(r.value[1],e.get(r.value[0])))return!1;return!0}if(io&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ao&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(oo&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Te(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var so=function(e,o){try{return Te(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},lo=[],co=function(e,o,r){r===void 0&&(r={});var n=He(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||lo},s=ve({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=Re(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:gt(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:gt(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),c=Re(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return so(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=He();return mt(function(){d.current&&d.current.setOptions(c)},[c]),mt(function(){if(!(e==null||o==null)){var m=r.createPopper||to,p=m(e,o,c);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},uo=function(){},po=function(){return Promise.resolve(null)},fo=[];function vo(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?fo:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,d=bt(Dt),m=ve(null),p=m[0],v=m[1],h=ve(null),g=h[0],O=h[1];re(function(){Fe(u,p)},[u,p]);var T=Re(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=co(a||d,p,T),f=y.state,w=y.styles,b=y.forceUpdate,x=y.update,R=Re(function(){return{ref:v,style:w.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||uo,update:x||po}},[v,O,o,f,w,x,b]);return Lt(c)(R)}function ho(t){var e=t.children,o=t.innerRef,r=bt(Ht),n=Ne(function(i){Fe(o,i),$t(r,i)},[o,r]);return re(function(){return function(){return Fe(o,null)}}),re(function(){},[r]),Lt(e)({ref:n})}var Wt=H.createContext({}),U=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},go=function(){},yt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},mo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Ft=function(t){Mt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,mo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),I({},a,{style:I({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),I({},a,r.isTriggeredBy("hover")&&{onMouseEnter:U(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:U(r.props.hideTooltip,a.onMouseLeave)},{style:I({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return H.createElement(Wt.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(Ot);Ft.contextType=Wt;var yo={childList:!0,subtree:!0},Ut=function(t){Mt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=I({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),I({},a,r.isTriggeredBy("click")&&{onClick:U(r.clickToggle,a.onClick),onTouchEnd:U(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:U(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&I({onMouseEnter:U(r.showTooltip,a.onMouseEnter),onMouseLeave:U(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:U(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:U(r.showTooltip,a.onFocus),onBlur:U(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,T=Qt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=H.createElement(vo,I({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(d)},T),function(f){var w=f.ref,b=f.style,x=f.placement,R=f.arrowProps,E=f.isReferenceHidden,P=f.update;if(h&&n.popperOffset){var C=n.state,k=C.pageX,S=C.pageY,X=n.popperOffset,z=X.width,A=X.height,B=k+z>window.pageXOffset+document.body.offsetWidth?k-z:k,ee=S+A>window.pageYOffset+document.body.offsetHeight?S-A:S;b.transform="translate3d("+B+"px, "+ee+"px, 0"}return H.createElement(Ft,I({arrowProps:R,closeOnReferenceHidden:m,isReferenceHidden:E,placement:x,update:P,style:b,tooltip:a,trigger:u,mutationObserverOptions:O},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w}))});return H.createElement(ro,null,H.createElement(ho,{innerRef:c},function(f){var w=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}),this.getState()&&(p?Zt(y,v):y))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(Ot);Ut.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:go,placement:"right",portalContainer:yt()?document.body:null,trigger:"hover",usePortal:yt(),mutationObserverOptions:yo,modifiers:[]};var wo=Ut,D=Jt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),G=8,bo=Se.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(D("top",r,G*-1,"auto"),"px"),top:"".concat(D("bottom",r,G*-1,"auto"),"px"),right:"".concat(D("left",r,G*-1,"auto"),"px"),left:"".concat(D("right",r,G*-1,"auto"),"px"),borderBottomWidth:"".concat(D("top",r,"0",G),"px"),borderTopWidth:"".concat(D("bottom",r,"0",G),"px"),borderRightWidth:"".concat(D("left",r,"0",G),"px"),borderLeftWidth:"".concat(D("right",r,"0",G),"px"),borderTopColor:D("top",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderBottomColor:D("bottom",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderLeftColor:D("left",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderRightColor:D("right",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent")}}),Oo=Se.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Nt=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=Ue(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return H.createElement(Oo,Object.assign({hasChrome:r,placement:o,ref:s},u,{color:l}),r&&H.createElement(bo,Object.assign({placement:o,ref:a},i,{color:l})),n)};Nt.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var De=Kt.document,xo=Se.div(it||(it=Ct([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),To=Se.g(at||(at=Ct([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Vt=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,d=Ue(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?To:xo;return H.createElement(wo,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,T=v.arrowRef,y=v.placement;return H.createElement(Nt,Object.assign({hasChrome:s,placement:y,tooltipRef:O,arrowRef:T,arrowProps:g()},h()),typeof a=="function"?a({onHide:function(){return c(!1)}}):a)}},function(p){var v=p.getTriggerProps,h=p.triggerRef;return H.createElement(m,Object.assign({ref:h},v(),d),l)})};Vt.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Co=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Ue(e,["startOpen","onVisibilityChange"]),i=ve(o||!1),s=or(i,2),a=s[0],l=s[1],u=Ne(function(c){r&&r(c)===!1||l(c)},[r]);return re(function(){var c=function(){return u(!1)};De.addEventListener("keydown",c,!1);var d=Array.from(De.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",c),m.push(function(){try{p.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){De.removeEventListener("keydown",c),m.forEach(function(p){p()})}}),H.createElement(Vt,Object.assign({},n,{tooltipShown:a,onVisibilityChange:u}))};export{Co as WithToolTipState,Co as WithTooltip,Vt as WithTooltipPure};
//# sourceMappingURL=WithTooltip-508b8277.0195da31.js.map
