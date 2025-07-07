import{A as P,B as mt,C as $e,D as Pe,E as M,F as Ht,a as Fe,b as et,c as De,d as Mt,e as Ft,f as Dt,g as ue,h as st,i as Ot,j as ye,k as we,l as lt,m as Pt,n as pe,o as ct,p as ut,q as Bt,r as At,s as Y,t as se,u as pt,v as dt,w as zt,x as Vt,y as le,z as Oe}from"./chunk-SJCDEGRW.js";import"./chunk-5G6ORXOL.js";import{f as Et,g as Ye,h as Je,i as Lt,k as ze}from"./chunk-RTUTSFU5.js";import{$ as v,$b as Ge,A as vt,Ab as ge,Bb as _e,Cb as W,Db as Ze,E as It,Eb as F,Fb as D,Ga as fe,Gb as te,Ha as Ie,Hb as z,Ib as G,Jb as Tt,Ka as c,La as j,Na as Ct,Nb as O,Ob as Ae,Pb as ae,Qb as Qe,Ra as We,Rb as ne,Ta as y,Ua as Z,V as L,Va as re,Vb as Ue,W as K,Xb as I,Yb as X,Zb as at,a as E,ab as wt,b as Ne,bb as Ke,db as _,eb as ee,fb as m,fc as Me,ga as ve,gb as b,ha as T,hb as s,ia as k,ib as $t,j as _t,ja as J,jb as je,kb as Le,la as g,lb as C,mb as St,mc as de,na as xt,nc as Xe,oc as me,pb as d,pc as xe,qb as p,qc as Ce,ra as N,rb as h,rc as Q,sa as qe,sb as V,tb as H,tc as ce,ua as he,ub as Be,uc as kt,va as ke,vb as U,xb as q,y as yt,za as Ee,zb as l}from"./chunk-XVIJS7YM.js";var tt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-header"]],decls:2,vars:0,template:function(e,n){e&1&&(d(0,"h1"),z(1,"Punishers S.A."),p())},styles:["h1[_ngcontent-%COMP%]{text-align:center;font-family:Euro-Caps!important}"]})};var nt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-footer"]],decls:3,vars:0,template:function(e,n){e&1&&(d(0,"div")(1,"p"),z(2,"\xA9 Spain 2024 Punishers Society\xAE. All rights reserved"),p()())},styles:["div[_ngcontent-%COMP%]{text-align:center;height:3em;margin:0;left:0;padding:0;width:100%;bottom:0}"]})};var Nt=(()=>{class t extends M{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),A=(()=>{class t{document=v(Me);platformId=v(Ee);el=v(ke);injector=v(xt);cd=v(Ue);renderer=v(We);config=v(Ht);baseComponentStyle=v(Nt);baseStyle=v(M);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=le("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return zt(e,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!kt(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>mt.off("theme:change",e))}_loadStyles(){let e=()=>{Pe.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Pe.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Pe.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Pe.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!$e.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,E({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,E({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,E({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},this.styleOptions),o),$e.setLoadedStyleName("common")}if(!$e.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,E({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(E({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),$e.setLoadedStyleName(this.componentStyle?.name)}if(!$e.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,E({name:"layer-order",first:!0},this.styleOptions)),$e.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,E({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Pe.clearLoadedStyleNames(),mt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:E({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=re({type:t,inputs:{dt:"dt"},features:[O([Nt,M]),ve]})}return t})();var bt=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)e.className+=" "+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].attributes&&i[r].attributes[n]&&i[r].nodeType==1&&o++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=Re=>{if(Re)return getComputedStyle(Re).getPropertyValue("position")==="relative"?Re:o(Re.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),u=n.offsetHeight,f=n.getBoundingClientRect(),w=this.getWindowScrollTop(),x=this.getWindowScrollLeft(),$=this.getViewport(),S=o(e)?.getBoundingClientRect()||{top:-1*w,left:-1*x},oe,be;f.top+u+r.height>$.height?(oe=f.top-S.top-r.height,e.style.transformOrigin="bottom",f.top+oe<0&&(oe=-1*f.top)):(oe=u+f.top-S.top,e.style.transformOrigin="top");let gt=f.left+r.width-$.width,fn=f.left-S.left;r.width>$.width?be=(f.left-S.left)*-1:gt>0?be=fn-gt:be=f.left-S.left,e.style.top=oe+"px",e.style.left=be+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=o.height,u=o.width,f=n.offsetHeight,w=n.offsetWidth,x=n.getBoundingClientRect(),$=this.getWindowScrollTop(),R=this.getWindowScrollLeft(),S=this.getViewport(),oe,be;x.top+f+r>S.height?(oe=x.top+$-r,e.style.transformOrigin="bottom",oe<0&&(oe=$)):(oe=f+x.top+$,e.style.transformOrigin="top"),x.left+u>S.width?be=Math.max(0,x.left+R+w-u):be=x.left+R,e.style.top=oe+"px",e.style.left=be+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,r=u=>{let f=window.getComputedStyle(u,null);return o.test(f.getPropertyValue("overflow"))||o.test(f.getPropertyValue("overflowX"))||o.test(f.getPropertyValue("overflowY"))};for(let u of i){let f=u.nodeType===1&&u.dataset.scrollselectors;if(f){let w=f.split(",");for(let x of w){let $=this.findSingle(u,x);$&&r($)&&n.push($)}}u.nodeType!==9&&r(u)&&n.push(u)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),u=r?parseFloat(r):0,f=e.getBoundingClientRect(),x=n.getBoundingClientRect().top+document.body.scrollTop-(f.top+document.body.scrollTop)-o-u,$=e.scrollTop,R=e.clientHeight,S=this.getOuterHeight(n);x<0?e.scrollTop=$+x:x+S>R&&(e.scrollTop=$+x-R+S)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,r=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(e,n){var i=1,o=50,r=n,u=o/r;let f=setInterval(()=>{i=i-u,i<=0&&(i=0,clearInterval(f)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],r=e.innerWidth||i.clientWidth||o.clientWidth,u=e.innerHeight||i.clientHeight||o.clientHeight;return{width:r,height:u}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var o=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let r of i){let u=getComputedStyle(r);this.isVisible(r)&&u.display!="none"&&u.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);n?r==-1||r===0?o=i.length-1:o=r-1:r!=-1&&r!==i.length-1&&(o=r+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(u=>!!(u&&u.constructor&&u.call&&u.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,r)=>{let u=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[r].flat().reduce((f,w)=>{if(w!=null){let x=typeof w;if(x==="string"||x==="number")f.push(w);else if(x==="object"){let $=Array.isArray(w)?i(o,w):Object.entries(w).map(([R,S])=>o==="style"&&(S||S===0)?`${R.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?R:void 0);f=$.length?f.concat($.filter(R=>!!R)):f}}return f},u)};Object.entries(n).forEach(([o,r])=>{if(r!=null){let u=o.match(/^on(.+)/);u?e.addEventListener(u[1].toLowerCase(),r):o==="pBind"?this.setAttributes(e,r):(r=o==="class"?[...new Set(i("class",r))].join(" ").trim():o==="style"?i("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),it=class{element;listener;scrollableParents;constructor(a,e=()=>{}){this.element=a,this.listener=e}bindScrollListener(){this.scrollableParents=bt.getScrollableParents(this.element);for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var qt=(()=>{class t extends A{autofocus=!1;_autofocus=!1;focused=!1;platformId=v(Ee);document=v(Me);host=v(ke);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ce(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=bt.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=re({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",I],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[ee,_]})}return t})();var gn=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,_n={root:({props:t,instance:a})=>["p-badge p-component",{"p-badge-circle":se(t.value)&&String(t.value).length===1,"p-badge-dot":Y(t.value)&&!a.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Wt=(()=>{class t extends M{name="badge";theme=gn;classes=_n;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ve=(()=>{class t extends A{styleClass=he();style=he();badgeSize=he();size=he();severity=he();value=he();badgeDisabled=he(!1,{transform:I});_componentStyle=v(Wt);containerClass=at(()=>{let e="p-badge p-component";return se(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Y(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(Le(i.style()),C(i.containerClass()),$t("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[O([Wt]),_],decls:1,vars:1,template:function(n,i){n&1&&z(0),n&2&&G(i.value())},dependencies:[Q,P],encapsulation:2,changeDetection:0})}return t})(),Se=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({imports:[Ve,P,P]})}return t})();var yn=["*"],vn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,In=(()=>{class t extends M{name="baseicon";inlineStyles=vn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ie=(()=>{class t extends A{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=Y(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",I],styleClass:"styleClass"},features:[O([In]),ee,_],ngContentSelectors:yn,decls:1,vars:0,template:function(n,i){n&1&&(ge(),_e(0))},encapsulation:2,changeDetection:0})}return t})();var jt=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["AngleDownIcon"]],features:[_],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(J(),d(0,"svg",0),h(1,"path",1),p()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Zt=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["AngleRightIcon"]],features:[_],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(J(),d(0,"svg",0),h(1,"path",1),p()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Qt=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["BarsIcon"]],features:[_],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(J(),d(0,"svg",0),h(1,"path",1),p()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Ut=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["ChevronRightIcon"]],features:[_],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,i){n&1&&(J(),d(0,"svg",0),h(1,"path",1),p()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Gt=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["HomeIcon"]],features:[_],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(J(),d(0,"svg",0)(1,"g"),h(2,"path",1),p(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),p()()()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),b("clip-path",i.pathId),c(3),s("id",i.pathId))},encapsulation:2})}return t})();var Xt=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["SpinnerIcon"]],features:[_],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(J(),d(0,"svg",0)(1,"g"),h(2,"path",1),p(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),p()()()),n&2&&(C(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),b("clip-path",i.pathId),c(3),s("id",i.pathId))},encapsulation:2})}return t})();var xn=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Cn={root:"p-ink"},Yt=(()=>{class t extends M{name="ripple";theme=xn;classes=Cn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ot=(()=>{class t extends A{zone=v(qe);_componentStyle=v(Yt);animationListener;mouseDownListener;timeout;constructor(){super(),Ge(()=>{ce(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(De(n,"p-ink-active"),!lt(n)&&!ct(n)){let u=Math.max(ue(this.el.nativeElement),pe(this.el.nativeElement));n.style.height=u+"px",n.style.width=u+"px"}let i=Pt(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-ct(n)/2,r=e.pageY-i.top+this.document.body.scrollLeft-lt(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),et(n,"p-ink-active"),this.timeout=setTimeout(()=>{let u=this.getInk();u&&De(u,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&De(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),De(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Bt(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=re({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[O([Yt]),_]})}return t})();var wn=["content"],$n=["loadingicon"],Sn=["icon"],Tn=["*"],en=t=>({class:t});function kn(t,a){t&1&&Be(0)}function En(t,a){if(t&1&&h(0,"span",8),t&2){let e=l(3);s("ngClass",e.iconClass()),b("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ln(t,a){if(t&1&&h(0,"SpinnerIcon",9),t&2){let e=l(3);s("styleClass",e.spinnerIconClass())("spin",!0),b("aria-hidden",!0)("data-pc-section","loadingicon")}}function Mn(t,a){if(t&1&&(V(0),m(1,En,1,3,"span",6)(2,Ln,1,4,"SpinnerIcon",7),H()),t&2){let e=l(2);c(),s("ngIf",e.loadingIcon),c(),s("ngIf",!e.loadingIcon)}}function Fn(t,a){}function Dn(t,a){if(t&1&&m(0,Fn,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function On(t,a){if(t&1&&(V(0),m(1,Mn,3,2,"ng-container",2)(2,Dn,1,1,null,5),H()),t&2){let e=l();c(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),c(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ae(3,en,e.iconClass()))}}function Pn(t,a){if(t&1&&h(0,"span",8),t&2){let e=l(2);C(e.icon),s("ngClass",e.iconClass()),b("data-pc-section","icon")}}function Bn(t,a){}function An(t,a){if(t&1&&m(0,Bn,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function zn(t,a){if(t&1&&(V(0),m(1,Pn,1,4,"span",11)(2,An,1,1,null,5),H()),t&2){let e=l();c(),s("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),c(),s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ae(3,en,e.iconClass()))}}function Vn(t,a){if(t&1&&(d(0,"span",12),z(1),p()),t&2){let e=l();b("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),c(),G(e.label)}}function Hn(t,a){if(t&1&&h(0,"p-badge",13),t&2){let e=l();s("value",e.badge)("severity",e.badgeSeverity)}}var Rn=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Nn={root:({instance:t,props:a})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-button-loading":a.loading,"p-button-link":a.link,[`p-button-${a.severity}`]:a.severity,"p-button-raised":a.raised,"p-button-rounded":a.rounded,"p-button-text":a.text,"p-button-outlined":a.outlined,"p-button-sm":a.size==="small","p-button-lg":a.size==="large","p-button-plain":a.plain,"p-button-fluid":a.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Jt=(()=>{class t extends M{name="button";theme=Rn;classes=Nn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var qn=(()=>{class t extends A{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new N;onFocus=new N;onBlur=new N;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Y(this.fluid)?!!n:this.fluid}_componentStyle=v(Jt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let o in i)this[o]=i[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&(W(o,wn,5),W(o,$n,5),W(o,Sn,5),W(o,Oe,4)),n&2){let r;F(r=D())&&(i.contentTemplate=r.first),F(r=D())&&(i.loadingIconTemplate=r.first),F(r=D())&&(i.iconTemplate=r.first),F(r=D())&&(i.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",I],loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],severity:"severity",outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",X],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],fluid:[2,"fluid","fluid",I],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([Jt]),ee,_,ve],ngContentSelectors:Tn,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(ge(),d(0,"button",0),q("click",function(r){return i.onClick.emit(r)})("focus",function(r){return i.onFocus.emit(r)})("blur",function(r){return i.onBlur.emit(r)}),_e(1),m(2,kn,1,0,"ng-container",1)(3,On,3,5,"ng-container",2)(4,zn,3,5,"ng-container",2)(5,Vn,2,3,"span",3)(6,Hn,1,2,"p-badge",4),p()),n&2&&(s("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),b("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),c(2),s("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),c(),s("ngIf",i.loading),c(),s("ngIf",!i.loading),c(),s("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),c(),s("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[Q,de,me,Ce,xe,ot,qt,Xt,Se,Ve,P],encapsulation:2,changeDetection:0})}return t})(),tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({imports:[Q,qn,P,P]})}return t})();var Wn=["*"];function Kn(t,a){if(t&1&&(d(0,"span",3),z(1),p()),t&2){let e=l();c(),G(e.label)}}function jn(t,a){if(t&1&&h(0,"span",5),t&2){let e=l(2);C(e.icon),s("ngClass","p-avatar-icon")}}function Zn(t,a){if(t&1&&m(0,jn,1,3,"span",4),t&2){let e=l(),n=te(5);s("ngIf",e.icon)("ngIfElse",n)}}function Qn(t,a){if(t&1){let e=U();d(0,"img",7),q("error",function(i){T(e);let o=l(2);return k(o.imageError(i))}),p()}if(t&2){let e=l(2);s("src",e.image,Ie),b("aria-label",e.ariaLabel)}}function Un(t,a){if(t&1&&m(0,Qn,1,2,"img",6),t&2){let e=l();s("ngIf",e.image)}}var Gn=({dt:t})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${t("avatar.width")};
    height: ${t("avatar.height")};
    font-size: ${t("avatar.font.size")};
    color: ${t("avatar.color")};
    background: ${t("avatar.background")};
    border-radius: ${t("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${t("avatar.icon.size")};
    width: ${t("avatar.icon.size")};
    height: ${t("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${t("avatar.lg.width")};
    height: ${t("avatar.lg.width")};
    font-size: ${t("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${t("avatar.lg.icon.size")};
    width: ${t("avatar.lg.icon.size")};
    height: ${t("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${t("avatar.xl.width")};
    height: ${t("avatar.xl.width")};
    font-size: ${t("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${t("avatar.xl.font.size")};
    width: ${t("avatar.xl.icon.size")};
    height: ${t("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${t("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${t("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${t("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${t("avatar.xl.group.offset")};
}
`,Xn={root:({props:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},nn=(()=>{class t extends M{name="avatar";theme=Gn;classes=Xn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Yn=(()=>{class t extends A{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new N;_componentStyle=v(nn);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(n,i){n&2&&(b("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),Le(i.style),C(i.hostClass),je("p-avatar",!0)("p-component",!0)("p-avatar-circle",i.shape==="circle")("p-avatar-lg",i.size==="large")("p-avatar-xl",i.size==="xlarge")("p-avatar-image",i.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[O([nn]),_],ngContentSelectors:Wn,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(ge(),_e(0),m(1,Kn,2,1,"span",2)(2,Zn,1,2,"ng-template",null,0,ne)(4,Un,1,1,"ng-template",null,1,ne)),n&2){let o=te(3);c(),s("ngIf",i.label)("ngIfElse",o)}},dependencies:[Q,de,me,P],encapsulation:2,changeDetection:0})}return t})(),on=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({imports:[Yn,P,P]})}return t})();var rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({})}return t})();function Jn(){let t=[],a=(o,r)=>{let u=t.length>0?t[t.length-1]:{key:o,value:r},f=u.value+(u.key===o?0:r)+2;return t.push({key:o,value:f}),f},e=o=>{t=t.filter(r=>r.value!==o)},n=()=>t.length>0?t[t.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,r,u)=>{r&&(r.style.zIndex=String(a(o,u)))},clear:o=>{o&&(e(i(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:a,revertZIndex:e}}var Te=Jn();var ei=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,ti={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},an=(()=>{class t extends M{name="tooltip";theme=ei;classes=ti;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var rt=(()=>{class t extends A{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:le("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=v(an);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),ce(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=E(E({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Fe(e.relatedTarget,"p-tooltip")||Fe(e.relatedTarget,"p-tooltip-text")||Fe(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?st(this.container,this.el.nativeElement):st(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Ot(this.container,250),this.getOption("tooltipZIndex")==="auto"?Te.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Te.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Ct){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,o]of n[e].entries())if(i===0)o.call(this);else if(this.isOutOfBounds())o.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+Ft(),i=e.top+Dt();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?ye(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=ue(e),i=(pe(e)-pe(this.container))/2;this.alignTooltip(n,i)}alignLeft(){this.preAlign("left");let e=ue(this.container),n=(pe(this.el.nativeElement)-pe(this.container))/2;this.alignTooltip(-e,n)}alignTop(){this.preAlign("top");let e=(ue(this.el.nativeElement)-ue(this.container))/2,n=pe(this.container);this.alignTooltip(e,-n)}alignBottom(){this.preAlign("bottom");let e=(ue(this.el.nativeElement)-ue(this.container))/2,n=pe(this.el.nativeElement);this.alignTooltip(e,n)}alignTooltip(e,n){let i=this.getHostOffset(),o=i.left+e,r=i.top+n;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=E(E({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Fe(e,"p-inputwrapper")?ye(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,o=ue(this.container),r=pe(this.container),u=Mt();return i+o>u.width||i<0||n<0||n+r>u.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new it(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):At(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Te.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(j(qe),j(wt))};static \u0275dir=re({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",I],showDelay:[2,"showDelay","showDelay",X],hideDelay:[2,"hideDelay","hideDelay",X],life:[2,"life","life",X],positionTop:[2,"positionTop","positionTop",X],positionLeft:[2,"positionLeft","positionLeft",X],autoHide:[2,"autoHide","autoHide",I],fitContent:[2,"fitContent","fitContent",I],hideOnEscape:[2,"hideOnEscape","hideOnEscape",I],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[O([an]),ee,_,ve]})}return t})(),He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({})}return t})();var ni=["menubar"],ii=(t,a)=>({"p-menubar-submenu":t,"p-menubar-root-list":a}),un=t=>({"p-menubar-item-link":!0,"p-disabled":t}),oi=()=>({exact:!1}),ri=(t,a)=>({$implicit:t,root:a}),ai=t=>({display:t});function si(t,a){if(t&1&&h(0,"li",8),t&2){let e=l().$implicit,n=l();Le(n.getItemProp(e,"style")),s("ngClass",n.getSeparatorItemClass(e)),b("id",n.getItemId(e))("data-pc-section","separator")}}function li(t,a){if(t&1&&h(0,"span",19),t&2){let e=l(4).$implicit,n=l();s("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function ci(t,a){if(t&1&&(d(0,"span",20),z(1),p()),t&2){let e=l(4).$implicit,n=l();s("id",n.getItemLabelId(e)),b("data-pc-section","label"),c(),Tt(" ",n.getItemLabel(e)," ")}}function ui(t,a){if(t&1&&h(0,"span",21),t&2){let e=l(4).$implicit,n=l();s("innerHTML",n.getItemLabel(e),fe)("id",n.getItemLabelId(e)),b("data-pc-section","label")}}function pi(t,a){if(t&1&&h(0,"p-badge",22),t&2){let e=l(4).$implicit,n=l();s("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function di(t,a){t&1&&h(0,"AngleDownIcon",25),t&2&&b("data-pc-section","submenuicon")}function mi(t,a){t&1&&h(0,"AngleRightIcon",25),t&2&&b("data-pc-section","submenuicon")}function bi(t,a){if(t&1&&(V(0),m(1,di,1,1,"AngleDownIcon",24)(2,mi,1,1,"AngleRightIcon",24),H()),t&2){let e=l(6);c(),s("ngIf",e.root),c(),s("ngIf",!e.root)}}function hi(t,a){}function fi(t,a){t&1&&m(0,hi,0,0,"ng-template",26),t&2&&s("data-pc-section","submenuicon")}function gi(t,a){if(t&1&&(V(0),m(1,bi,3,2,"ng-container",11)(2,fi,1,1,null,23),H()),t&2){let e=l(5);c(),s("ngIf",!e.submenuiconTemplate),c(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function _i(t,a){if(t&1&&(d(0,"a",15),m(1,li,1,4,"span",16)(2,ci,2,3,"span",17)(3,ui,1,3,"ng-template",null,2,ne)(5,pi,1,2,"p-badge",18)(6,gi,3,2,"ng-container",11),p()),t&2){let e=te(4),n=l(3).$implicit,i=l();s("target",i.getItemProp(n,"target"))("ngClass",ae(11,un,i.getItemProp(n,"disabled"))),b("href",i.getItemProp(n,"url"),Ie)("data-automationid",i.getItemProp(n,"automationId"))("data-pc-section","action")("tabindex",-1),c(),s("ngIf",i.getItemProp(n,"icon")),c(),s("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),c(3),s("ngIf",i.getItemProp(n,"badge")),c(),s("ngIf",i.isItemGroup(n))}}function yi(t,a){if(t&1&&h(0,"span",19),t&2){let e=l(4).$implicit,n=l();s("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function vi(t,a){if(t&1&&(d(0,"span",29),z(1),p()),t&2){let e=l(4).$implicit,n=l();c(),G(n.getItemLabel(e))}}function Ii(t,a){if(t&1&&h(0,"span",30),t&2){let e=l(4).$implicit,n=l();s("innerHTML",n.getItemLabel(e),fe),b("data-pc-section","label")}}function xi(t,a){if(t&1&&h(0,"p-badge",22),t&2){let e=l(4).$implicit,n=l();s("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function Ci(t,a){t&1&&h(0,"AngleDownIcon",25),t&2&&b("data-pc-section","submenuicon")}function wi(t,a){t&1&&h(0,"AngleRightIcon",25),t&2&&b("data-pc-section","submenuicon")}function $i(t,a){if(t&1&&(V(0),m(1,Ci,1,1,"AngleDownIcon",24)(2,wi,1,1,"AngleRightIcon",24),H()),t&2){let e=l(6);c(),s("ngIf",e.root),c(),s("ngIf",!e.root)}}function Si(t,a){}function Ti(t,a){t&1&&m(0,Si,0,0,"ng-template",26),t&2&&s("data-pc-section","submenuicon")}function ki(t,a){if(t&1&&(V(0),m(1,$i,3,2,"ng-container",11)(2,Ti,1,1,null,23),H()),t&2){let e=l(5);c(),s("ngIf",!e.submenuiconTemplate),c(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function Ei(t,a){if(t&1&&(d(0,"a",27),m(1,yi,1,4,"span",16)(2,vi,2,1,"span",28)(3,Ii,1,2,"ng-template",null,3,ne)(5,xi,1,2,"p-badge",18)(6,ki,3,2,"ng-container",11),p()),t&2){let e=te(4),n=l(3).$implicit,i=l();s("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||Ae(20,oi))("target",i.getItemProp(n,"target"))("ngClass",ae(21,un,i.getItemProp(n,"disabled")))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),b("data-automationid",i.getItemProp(n,"automationId"))("tabindex",-1)("data-pc-section","action"),c(),s("ngIf",i.getItemProp(n,"icon")),c(),s("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),c(3),s("ngIf",i.getItemProp(n,"badge")),c(),s("ngIf",i.isItemGroup(n))}}function Li(t,a){if(t&1&&(V(0),m(1,_i,7,13,"a",13)(2,Ei,7,23,"a",14),H()),t&2){let e=l(2).$implicit,n=l();c(),s("ngIf",!n.getItemProp(e,"routerLink")),c(),s("ngIf",n.getItemProp(e,"routerLink"))}}function Mi(t,a){}function Fi(t,a){t&1&&m(0,Mi,0,0,"ng-template")}function Di(t,a){if(t&1&&(V(0),m(1,Fi,1,0,null,31),H()),t&2){let e=l(2).$implicit,n=l();c(),s("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",Qe(2,ri,e.item,n.root))}}function Oi(t,a){if(t&1){let e=U();d(0,"p-menubarSub",32),q("itemClick",function(i){T(e);let o=l(3);return k(o.itemClick.emit(i))})("itemMouseEnter",function(i){T(e);let o=l(3);return k(o.onItemMouseEnter(i))}),p()}if(t&2){let e=l(2).$implicit,n=l();s("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("ariaLabelledBy",n.getItemLabelId(e))("inlineStyles",ae(10,ai,n.isItemActive(e)?"flex":"none"))}}function Pi(t,a){if(t&1){let e=U();d(0,"li",9,1)(2,"div",10),q("click",function(i){T(e);let o=l().$implicit,r=l();return k(r.onItemClick(i,o))})("mouseenter",function(i){T(e);let o=l().$implicit,r=l();return k(r.onItemMouseEnter({$event:i,processedItem:o}))}),m(3,Li,3,2,"ng-container",11)(4,Di,2,5,"ng-container",11),p(),m(5,Oi,1,12,"p-menubarSub",12),p()}if(t&2){let e=l(),n=e.$implicit,i=e.index,o=l();C(o.getItemProp(n,"styleClass")),s("ngStyle",o.getItemProp(n,"style"))("ngClass",o.getItemClass(n))("tooltipOptions",o.getItemProp(n,"tooltipOptions")),b("id",o.getItemId(n))("data-pc-section","menuitem")("data-p-highlight",o.isItemActive(n))("data-p-focused",o.isItemFocused(n))("data-p-disabled",o.isItemDisabled(n))("aria-label",o.getItemLabel(n))("aria-disabled",o.isItemDisabled(n)||void 0)("aria-haspopup",o.isItemGroup(n)&&!o.getItemProp(n,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(n)?o.isItemActive(n):void 0)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(i)),c(2),b("data-pc-section","content"),c(),s("ngIf",!o.itemTemplate),c(),s("ngIf",o.itemTemplate),c(),s("ngIf",o.isItemVisible(n)&&o.isItemGroup(n))}}function Bi(t,a){if(t&1&&m(0,si,1,5,"li",6)(1,Pi,6,20,"li",7),t&2){let e=a.$implicit,n=l();s("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),c(),s("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var Ai=["start"],zi=["end"],Vi=["item"],Hi=["menuicon"],Ri=["submenuicon"],Ni=["menubutton"],qi=["rootmenu"],Wi=["*"],Ki=(t,a)=>({"p-menubar p-component":!0,"p-menubar-mobile":t,"p-menubar-mobile-active":a});function ji(t,a){t&1&&Be(0)}function Zi(t,a){if(t&1&&(d(0,"div",8),m(1,ji,1,0,"ng-container",9),p()),t&2){let e=l();c(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Qi(t,a){t&1&&h(0,"BarsIcon")}function Ui(t,a){}function Gi(t,a){t&1&&m(0,Ui,0,0,"ng-template")}function Xi(t,a){if(t&1){let e=U();d(0,"a",10,2),q("click",function(i){T(e);let o=l();return k(o.menuButtonClick(i))})("keydown",function(i){T(e);let o=l();return k(o.menuButtonKeydown(i))}),m(2,Qi,1,0,"BarsIcon",11)(3,Gi,1,0,null,9),p()}if(t&2){let e=l();b("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),c(2),s("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),c(),s("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Yi(t,a){t&1&&Be(0)}function Ji(t,a){if(t&1&&(d(0,"div",12),m(1,Yi,1,0,"ng-container",9),p()),t&2){let e=l();c(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function eo(t,a){t&1&&(d(0,"div",12),_e(1),p())}var to=({dt:t})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${t("menubar.submenu.mobile.indent")};
}
`;var no={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:a})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ln=(()=>{class t extends M{name="menubar";theme=to;classes=no;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ft=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new _t;mouseLeft$=this.mouseLeaves.pipe(It(()=>yt(this.autoHideDelay)),vt(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),io=(()=>{class t extends A{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new N;itemMouseEnter=new N;menuFocus=new N;menuBlur=new N;menuKeydown=new N;menubarViewChild;mouseLeaveSubscriber;menubarService=v(ft);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?dt(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemClass(e){return Ne(E({},this.getItemProp(e,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return Ne(E({},this.getItemProp(e,"class")),{"p-menubar-separator":!0})}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(n=>n.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return se(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(e){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(n,i){if(n&1&&Ze(ni,7),n&2){let o;F(o=D())&&(i.menubarViewChild=o.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",I],autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",X],mobileActive:[2,"mobileActive","mobileActive",I],autoDisplay:[2,"autoDisplay","autoDisplay",I],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",X],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[ee,_],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(n,i){if(n&1){let o=U();d(0,"ul",4,0),q("focus",function(u){return T(o),k(i.menuFocus.emit(u))})("blur",function(u){return T(o),k(i.menuBlur.emit(u))})("keydown",function(u){return T(o),k(i.menuKeydown.emit(u))}),m(2,Bi,2,2,"ng-template",5),p()}n&2&&(s("ngClass",Qe(9,ii,!i.root,i.root))("tabindex",0)("ngStyle",i.inlineStyles),b("data-pc-section","menu")("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId),c(2),s("ngForOf",i.items))},dependencies:[t,Q,de,Xe,me,Ce,xe,ze,Je,Lt,ot,He,rt,jt,Zt,Se,Ve,P],encapsulation:2})}return t})(),pn=(()=>{class t extends A{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new N;onBlur=new N;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=Ke([]);number=Ke(0);focusedItemInfo=Ke({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=v(ln);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${se(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,o,r,u){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=o,this.cd=r,this.menubarService=u,Ge(()=>{let f=this.activeItemPath();se(f)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||le("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},o=""){let r=[];return e&&e.forEach((u,f)=>{let w=(o!==""?o+"_":"")+f,x={item:u,index:f,level:n,key:w,parent:i,parentKey:o};x.items=this.createProcessedItems(u.items,n+1,x,w),r.push(x)}),r}bindMatchMediaListener(){if(ce(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?dt(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:n,processedItem:i}=e,o=this.isProcessedItemGroup(i),r=Y(i.parent);if(this.isSelected(i)){let{index:f,key:w,level:x,parentKey:$,item:R}=i;this.activeItemPath.set(this.activeItemPath().filter(S=>w!==S.key&&w.startsWith(S.key))),this.focusedItemInfo.set({index:f,level:x,parentKey:$,item:R}),this.dirty=!r,we(this.rootmenu.menubarViewChild.nativeElement)}else if(o)this.onItemChange(e);else{let f=r?i:this.activeItemPath().find(w=>w.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,f?f.index:-1),this.mobileActive=!1,we(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(e){ut()||this.mobileActive||this.onItemChange(e)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let o=this.focusedItemInfo();this.focusedItemInfo.set(Ne(E({},o),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=ye(this.rootmenu.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e){let{processedItem:n,isFocus:i}=e;if(Y(n))return;let{index:o,key:r,level:u,parentKey:f,items:w,item:x}=n,$=se(w),R=this.activeItemPath().filter(S=>S.parentKey!==f&&S.parentKey!==r);$&&R.push(n),this.focusedItemInfo.set({index:o,level:u,parentKey:f,item:x}),this.activeItemPath.set(R),$&&(this.dirty=!0),i&&we(this.rootmenu.menubarViewChild.nativeElement)}toggle(e){this.mobileActive?(this.mobileActive=!1,Te.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Te.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{we(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&we(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),we(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&Vt(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return se(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&se(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&se(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,o=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(o=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?Y(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(o=>o.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(Y(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let o=this.activeItemPath().find(r=>r.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(u=>u.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(o=>o.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let o=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=ye(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&ye(n,'a[data-pc-section="action"]');i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return pt(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?pt(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){ce(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{ut()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){ce(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),i=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(j(Me),j(Ee),j(ke),j(We),j(Ue),j(ft))};static \u0275cmp=y({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,o){if(n&1&&(W(o,Ai,4),W(o,zi,4),W(o,Vi,4),W(o,Hi,4),W(o,Ri,4),W(o,Oe,4)),n&2){let r;F(r=D())&&(i.startTemplate=r.first),F(r=D())&&(i.endTemplate=r.first),F(r=D())&&(i.itemTemplate=r.first),F(r=D())&&(i.menuIconTemplate=r.first),F(r=D())&&(i.submenuIconTemplate=r.first),F(r=D())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&(Ze(Ni,5),Ze(qi,5)),n&2){let o;F(o=D())&&(i.menubutton=o.first),F(o=D())&&(i.rootmenu=o.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",X],autoDisplay:[2,"autoDisplay","autoDisplay",I],autoHide:[2,"autoHide","autoHide",I],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",X],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[O([ft,ln]),ee,_],ngContentSelectors:Wi,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(n,i){if(n&1){let o=U();ge(),d(0,"div",3),m(1,Zi,2,1,"div",4)(2,Xi,4,7,"a",5),d(3,"p-menubarSub",6,0),q("itemClick",function(u){return T(o),k(i.onItemClick(u))})("menuFocus",function(u){return T(o),k(i.onMenuFocus(u))})("menuBlur",function(u){return T(o),k(i.onMenuBlur(u))})("menuKeydown",function(u){return T(o),k(i.onKeyDown(u))})("itemMouseEnter",function(u){return T(o),k(i.onItemMouseEnter(u))}),p(),m(5,Ji,2,1,"div",7)(6,eo,2,0,"ng-template",null,1,ne),p()}if(n&2){let o=te(7);C(i.styleClass),s("ngClass",Qe(23,Ki,i.queryMatches,i.mobileActive))("ngStyle",i.style),b("data-pc-section","root")("data-pc-name","menubar"),c(),s("ngIf",i.startTemplate||i._startTemplate),c(),s("ngIf",i.model&&i.model.length>0),c(),s("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("ariaLabel",i.ariaLabel)("ariaLabelledBy",i.ariaLabelledBy)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),c(2),s("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",o)}},dependencies:[Q,de,me,Ce,xe,ze,io,He,Qt,Se,P],encapsulation:2,changeDetection:0})}return t})();var oo=["item"],ro=["separator"],ao=t=>({"p-breadcrumb-home-item":!0,"p-disabled":t}),mn=()=>({exact:!1}),so=t=>({"p-breadcrumb-item":!0,"p-disabled":t}),lo=t=>({$implicit:t});function co(t,a){if(t&1&&h(0,"span",16),t&2){let e=l(3);s("ngClass",e.home.icon)("ngStyle",e.home==null?null:e.home.style)}}function uo(t,a){t&1&&h(0,"HomeIcon",17),t&2&&s("styleClass","p-breadcrumb-item-icon")}function po(t,a){if(t&1&&(d(0,"span",19),z(1),p()),t&2){let e=l(4);c(),G(e.home.label)}}function mo(t,a){if(t&1&&h(0,"span",20),t&2){let e=l(4);s("innerHTML",e.home.label,fe)}}function bo(t,a){if(t&1&&(V(0),m(1,po,2,1,"span",18)(2,mo,1,1,"ng-template",null,0,ne),H()),t&2){let e=te(3),n=l(3);c(),s("ngIf",n.home.escape!==!1)("ngIfElse",e)}}function ho(t,a){if(t&1){let e=U();d(0,"a",12),q("click",function(i){T(e);let o=l(2);return k(o.onClick(i,o.home))}),m(1,co,1,2,"span",13)(2,uo,1,1,"HomeIcon",14)(3,bo,4,2,"ng-container",15),p()}if(t&2){let e=l(2);s("href",e.home.url?e.home.url:null,Ie)("target",e.home.target),b("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:"0"),c(),s("ngIf",e.home.icon),c(),s("ngIf",!e.home.icon),c(),s("ngIf",e.home.label)}}function fo(t,a){if(t&1&&h(0,"span",16),t&2){let e=l(3);s("ngClass",e.home.icon)("ngStyle",e.home.iconStyle)}}function go(t,a){t&1&&h(0,"HomeIcon",17),t&2&&s("styleClass","p-breadcrumb-item-icon")}function _o(t,a){if(t&1&&(d(0,"span",19),z(1),p()),t&2){let e=l(4);c(),G(e.home.label)}}function yo(t,a){if(t&1&&h(0,"span",20),t&2){let e=l(4);s("innerHTML",e.home.label,fe)}}function vo(t,a){if(t&1&&(V(0),m(1,_o,2,1,"span",18)(2,yo,1,1,"ng-template",null,1,ne),H()),t&2){let e=te(3),n=l(3);c(),s("ngIf",n.home.escape!==!1)("ngIfElse",e)}}function Io(t,a){if(t&1){let e=U();d(0,"a",21),q("click",function(i){T(e);let o=l(2);return k(o.onClick(i,o.home))}),m(1,fo,1,2,"span",13)(2,go,1,1,"HomeIcon",14)(3,vo,4,2,"ng-container",15),p()}if(t&2){let e=l(2);s("routerLink",e.home.routerLink)("queryParams",e.home.queryParams)("routerLinkActiveOptions",e.home.routerLinkActiveOptions||Ae(16,mn))("target",e.home.target)("fragment",e.home.fragment)("queryParamsHandling",e.home.queryParamsHandling)("preserveFragment",e.home.preserveFragment)("skipLocationChange",e.home.skipLocationChange)("replaceUrl",e.home.replaceUrl)("state",e.home.state),b("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:"0"),c(),s("ngIf",e.home.icon),c(),s("ngIf",!e.home.icon),c(),s("ngIf",e.home.label)}}function xo(t,a){if(t&1&&(d(0,"li",9),m(1,ho,4,8,"a",10)(2,Io,4,17,"a",11),p()),t&2){let e=l();C(e.home.styleClass),s("ngClass",ae(9,ao,e.home.disabled))("ngStyle",e.home.style)("tooltipOptions",e.home.tooltipOptions),b("id",e.home.id)("data-pc-section","home"),c(),s("ngIf",!e.home.routerLink),c(),s("ngIf",e.home.routerLink)}}function Co(t,a){t&1&&h(0,"ChevronRightIcon")}function wo(t,a){}function $o(t,a){t&1&&m(0,wo,0,0,"ng-template")}function So(t,a){if(t&1&&(d(0,"li",22),m(1,Co,1,0,"ChevronRightIcon",15)(2,$o,1,0,null,23),p()),t&2){let e=l();b("data-pc-section","separator"),c(),s("ngIf",!e.separatorTemplate&&!e._separatorTemplate),c(),s("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function To(t,a){}function ko(t,a){t&1&&m(0,To,0,0,"ng-template")}function Eo(t,a){if(t&1&&m(0,ko,1,0,null,26),t&2){let e=l(2).$implicit,n=l();s("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",ae(2,lo,e))}}function Lo(t,a){if(t&1&&h(0,"span",16),t&2){let e=l(5).$implicit;s("ngClass",e==null?null:e.icon)("ngStyle",e==null?null:e.iconStyle)}}function Mo(t,a){if(t&1&&(d(0,"span",19),z(1),p()),t&2){let e=l(6).$implicit;c(),G(e==null?null:e.label)}}function Fo(t,a){if(t&1&&h(0,"span",20),t&2){let e=l(6).$implicit;s("innerHTML",e==null?null:e.label,fe)}}function Do(t,a){if(t&1&&(V(0),m(1,Mo,2,1,"span",18)(2,Fo,1,1,"ng-template",null,2,ne),H()),t&2){let e=te(3),n=l(5).$implicit;c(),s("ngIf",(n==null?null:n.escape)!==!1)("ngIfElse",e)}}function Oo(t,a){if(t&1&&(V(0),m(1,Lo,1,2,"span",13)(2,Do,4,2,"ng-container",15),H()),t&2){let e=l(4).$implicit;c(),s("ngIf",e==null?null:e.icon),c(),s("ngIf",e==null?null:e.label)}}function Po(t,a){if(t&1){let e=U();d(0,"a",28),q("click",function(i){T(e);let o=l(3).$implicit,r=l();return k(r.onClick(i,o))}),m(1,Oo,3,2,"ng-container",15),p()}if(t&2){let e=l(3).$implicit,n=l();s("target",e==null?null:e.target),b("href",e!=null&&e.url?e==null?null:e.url:null,Ie)("title",e==null?null:e.title)("tabindex",e!=null&&e.disabled?null:"0"),c(),s("ngIf",!n.itemTemplate&&!n._itemTemplate)}}function Bo(t,a){if(t&1&&h(0,"span",16),t&2){let e=l(4).$implicit;s("ngClass",e==null?null:e.icon)("ngStyle",e==null?null:e.iconStyle)}}function Ao(t,a){if(t&1&&(d(0,"span",19),z(1),p()),t&2){let e=l(5).$implicit;c(),G(e==null?null:e.label)}}function zo(t,a){if(t&1&&h(0,"span",20),t&2){let e=l(5).$implicit;s("innerHTML",e==null?null:e.label,fe)}}function Vo(t,a){if(t&1&&(V(0),m(1,Ao,2,1,"span",18)(2,zo,1,1,"ng-template",null,3,ne),H()),t&2){let e=te(3),n=l(4).$implicit;c(),s("ngIf",(n==null?null:n.escape)!==!1)("ngIfElse",e)}}function Ho(t,a){if(t&1){let e=U();d(0,"a",21),q("click",function(i){T(e);let o=l(3).$implicit,r=l();return k(r.onClick(i,o))}),m(1,Bo,1,2,"span",13)(2,Vo,4,2,"ng-container",15),p()}if(t&2){let e=l(3).$implicit;s("routerLink",e==null?null:e.routerLink)("queryParams",e==null?null:e.queryParams)("routerLinkActiveOptions",(e==null?null:e.routerLinkActiveOptions)||Ae(14,mn))("target",e==null?null:e.target)("fragment",e==null?null:e.fragment)("queryParamsHandling",e==null?null:e.queryParamsHandling)("preserveFragment",e==null?null:e.preserveFragment)("skipLocationChange",e==null?null:e.skipLocationChange)("replaceUrl",e==null?null:e.replaceUrl)("state",e==null?null:e.state),b("title",e==null?null:e.title)("tabindex",e!=null&&e.disabled?null:"0"),c(),s("ngIf",e==null?null:e.icon),c(),s("ngIf",e==null?null:e.label)}}function Ro(t,a){if(t&1&&m(0,Po,2,5,"a",27)(1,Ho,3,15,"a",11),t&2){let e=l(2).$implicit;s("ngIf",!(e!=null&&e.routerLink)),c(),s("ngIf",e==null?null:e.routerLink)}}function No(t,a){if(t&1&&(d(0,"li",25),m(1,Eo,1,4)(2,Ro,2,2),p()),t&2){let e=l().$implicit,n=l();C(e.styleClass),s("ngStyle",e.style)("ngClass",ae(8,so,e.disabled))("tooltipOptions",e.tooltipOptions),b("id",e.id)("data-pc-section","menuitem"),c(),St(n.itemTemplate||n._itemTemplate?1:2)}}function qo(t,a){t&1&&h(0,"ChevronRightIcon")}function Wo(t,a){}function Ko(t,a){t&1&&m(0,Wo,0,0,"ng-template")}function jo(t,a){if(t&1&&(d(0,"li",22),m(1,qo,1,0,"ChevronRightIcon",15)(2,Ko,1,0,null,23),p()),t&2){let e=l(2);b("data-pc-section","separator"),c(),s("ngIf",!e.separatorTemplate&&!e._separatorTemplate),c(),s("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function Zo(t,a){if(t&1&&m(0,No,3,10,"li",24)(1,jo,3,3,"li",7),t&2){let e=a.$implicit,n=a.last;s("ngIf",e.visible!==!1),c(),s("ngIf",!n&&e.visible!==!1)}}var Qo=({dt:t})=>`
.p-breadcrumb {
    background: ${t("breadcrumb.background")};
    padding: ${t("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${t("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${t("breadcrumb.separator.color")};
}

.p-breadcrumb-separator .p-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${t("breadcrumb.item.gap")};
    transition: background ${t("breadcrumb.transition.duration")}, color ${t("breadcrumb.transition.duration")}, outline-color ${t("breadcrumb.transition.duration")}, box-shadow ${t("breadcrumb.transition.duration")};
    border-radius: ${t("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${t("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${t("breadcrumb.item.focus.ring.shadow")};
    outline: ${t("breadcrumb.item.focus.ring.width")} ${t("breadcrumb.item.focus.ring.style")} ${t("breadcrumb.item.focus.ring.color")};
    outline-offset: ${t("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${t("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${t("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${t("breadcrumb.item.icon.hover.color")};
}
`,Uo={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:({instance:t})=>["p-breadcrumb-item",{"p-disabled":t.disabled()}],itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},dn=(()=>{class t extends M{name="breadcrumb";theme=Qo;classes=Uo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Go=(()=>{class t extends A{router;model;style;styleClass;home;homeAriaLabel;onItemClick=new N;_componentStyle=v(dn);constructor(e){super(),this.router=e}onClick(e,n){if(n.disabled){e.preventDefault();return}!n.url&&!n.routerLink&&e.preventDefault(),n.command&&n.command({originalEvent:e,item:n}),this.onItemClick.emit({originalEvent:e,item:n})}itemTemplate;separatorTemplate;templates;_separatorTemplate;_itemTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"separator":this._separatorTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}static \u0275fac=function(n){return new(n||t)(j(Ye))};static \u0275cmp=y({type:t,selectors:[["p-breadcrumb"]],contentQueries:function(n,i,o){if(n&1&&(W(o,oo,5),W(o,ro,5),W(o,Oe,4)),n&2){let r;F(r=D())&&(i.itemTemplate=r.first),F(r=D())&&(i.separatorTemplate=r.first),F(r=D())&&(i.templates=r)}},inputs:{model:"model",style:"style",styleClass:"styleClass",home:"home",homeAriaLabel:"homeAriaLabel"},outputs:{onItemClick:"onItemClick"},features:[O([dn]),_],decls:5,vars:10,consts:[["htmlHomeLabel",""],["htmlHomeRouteLabel",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[1,"p-breadcrumb-list"],["pTooltip","",3,"class","ngClass","ngStyle","tooltipOptions",4,"ngIf"],["class","p-breadcrumb-separator",4,"ngIf"],["ngFor","",3,"ngForOf"],["pTooltip","",3,"ngClass","ngStyle","tooltipOptions"],["class","p-breadcrumb-item-link",3,"href","target","click",4,"ngIf"],["class","p-breadcrumb-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click",4,"ngIf"],[1,"p-breadcrumb-item-link",3,"click","href","target"],["class","p-breadcrumb-item-icon",3,"ngClass","ngStyle",4,"ngIf"],[3,"styleClass",4,"ngIf"],[4,"ngIf"],[1,"p-breadcrumb-item-icon",3,"ngClass","ngStyle"],[3,"styleClass"],["class","p-breadcrumb-item-label",4,"ngIf","ngIfElse"],[1,"p-breadcrumb-item-label"],[1,"p-breadcrumb-item-label",3,"innerHTML"],[1,"p-breadcrumb-item-link",3,"click","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[1,"p-breadcrumb-separator"],[4,"ngTemplateOutlet"],["pTooltip","",3,"class","ngStyle","ngClass","tooltipOptions",4,"ngIf"],["pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-breadcrumb-item-link",3,"target","click",4,"ngIf"],[1,"p-breadcrumb-item-link",3,"click","target"]],template:function(n,i){n&1&&(d(0,"nav",4)(1,"ol",5),m(2,xo,3,11,"li",6)(3,So,3,3,"li",7)(4,Zo,2,2,"ng-template",8),p()()),n&2&&(C(i.styleClass),s("ngStyle",i.style)("ngClass","p-breadcrumb p-component"),b("data-pc-name","breadcrumb")("data-pc-section","root"),c(),b("data-pc-section","menu"),c(),s("ngIf",i.home&&i.home.visible!==!1),c(),s("ngIf",i.model&&i.home),c(),s("ngForOf",i.model))},dependencies:[Q,de,Xe,me,Ce,xe,ze,Je,He,rt,Ut,Gt,P],encapsulation:2,changeDetection:0})}return t})(),bn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=K({imports:[Go,P,P]})}return t})();var hn=class t{constructor(a){this.router=a}items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home",routerLink:"/"},{label:"Targoides",icon:"pi pi-search",command:()=>{this.router.navigate(["/targoids"])}}]}static \u0275fac=function(e){return new(e||t)(j(Ye))};static \u0275cmp=y({type:t,selectors:[["app-layout"]],decls:6,vars:1,consts:[[1,"card","m-2"],[3,"model"]],template:function(e,n){e&1&&(h(0,"app-header"),d(1,"div",0),h(2,"p-menubar",1),p(),h(3,"router-outlet"),d(4,"footer"),h(5,"app-footer"),p()),e&2&&(c(2),s("model",n.items))},dependencies:[Et,tt,nt,tn,pn,Se,on,rn,Q,bn],encapsulation:2})};export{hn as LayoutComponent};
