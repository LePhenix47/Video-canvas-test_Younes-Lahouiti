(()=>{"use strict";(()=>{const{log:n,error:e,table:t,time:r,timeEnd:o,timeStamp:a,timeLog:i,assert:c,clear:s,count:l,countReset:p,group:h,groupCollapsed:u,groupEnd:b,profile:d,profileEnd:g,trace:m,warn:v,debug:y,info:f,dir:w,dirxml:k}=console,x=document.createElement("template");x.innerHTML='\n  <style>\n    \n/* \n    Hides the element and all its descendants from view\n */\n.hide {\n    display: none !important;\n}\n\n/* \n    Hides the element from view except for screen readers \n    \n    - Good for accessibilty and by consequence SEO\n*/\n.screen-readers-only {\n    /*    \n    Positions the element off the screen \n    */ \n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n\n    /*    \n    Sets the dimensions of the element to 1×1 px \n    */ \n    height: 1px;\n    width: 1px;\n\n    /*    \n    Hides any content that overflows the element \n    */ \n    overflow: hidden;\n\n    /*    \n    Positions the element absolutely \n    */ \n    position: absolute;\n\n    /*    \n    Prevents line breaks in the element \n    */ \n    white-space: nowrap;\n}\n\n/* \n    Disables pointer (click on desktop and tap on mobile) events for the element and its descendants \n*/\n.no-pointer-events {\n    pointer-events: none;\n}\n\n\n    \n@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap);\n@media(prefers-reduced-motion:reduce) {\n    *, :after, :before {\n        animation: none !important;\n        transition: none !important\n    }\n}\n\n*, :after, :before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0\n}\n\n::-moz-selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: var(--selection-color)\n}\n\n::selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: var(--selection-color)\n}\n\nhtml {\n    color-scheme: dark light;\n    scroll-behavior: smooth\n}\n\nbody {\n    background-color: var(--bg-primary);\n    color: var(--color-primary);\n    min-height: 100vh;\n    overflow-x: hidden;\n    transition: background-color .65s ease-in-out, color .35s ease-in-out\n}\n\n:is(ul, ol) {\n    list-style-type: none\n}\n\nbutton {\n    background-color: transparent;\n    border-color: transparent;\n    color: inherit;\n    font-family: inherit\n}\n\nbutton:hover {\n    cursor: pointer\n}\n\nbutton:hover:disabled {\n    cursor: not-allowed\n}\n\ninput {\n    border-color: transparent;\n    font-family: inherit;\n    outline-color: transparent\n}\n\ninput:hover {\n    cursor: pointer\n}\n\ninput:focus {\n    border-color: transparent;\n    outline: transparent\n}\n\ninput:disabled {\n    cursor: not-allowed\n}\n\ntextarea {\n    font-family: inherit\n}\n\ntextarea, textarea:focus {\n    border-color: transparent\n}\n\ntextarea:focus {\n    outline: transparent\n}\n\na {\n    color: inherit;\n    text-decoration: none\n}\n\na:visited {\n    color: currentColor\n}\n\nlabel:hover {\n    cursor: pointer\n}\n\nfieldset {\n    border-color: transparent\n}\n\nlegend {\n    position: static\n}\n\ndialog {\n    inset: 50%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    translate: -50% -50%;\n    z-index: 0\n}\n\ndialog, select {\n    border: transparent\n}\n\nselect {\n    font-family: inherit\n}\n\nselect:hover {\n    cursor: pointer\n}\n\noption {\n    font-family: inherit\n}\n\n:is(p, h1, h2, h3, h4, h5, h6, span):empty {\n    display: none !important\n}\ninput[type=text]:hover {\n  cursor: text;\n}\ninput[type=button]:hover {\n  cursor: pointer;\n}\ninput[type=date]:hover {\n  cursor: text;\n}\ninput[type=datetime]:hover {\n  cursor: text;\n}\ninput[type=datetime-local]:hover {\n  cursor: text;\n}\ninput[type=email]:hover {\n  cursor: text;\n}\ninput[type=month]:hover {\n  cursor: text;\n}\ninput[type=week]:hover {\n  cursor: text;\n}\ninput[type=password]:hover {\n  cursor: text;\n}\ninput[type=tel]:hover {\n  cursor: text;\n}\ninput[type=time]:hover {\n  cursor: text;\n}\ninput[type=url]:hover {\n  cursor: text;\n}\ninput[type=submit]:hover {\n  cursor: pointer;\n}\ninput[type=reset]:hover {\n  cursor: pointer;\n}\ninput[type=image]:hover {\n  cursor: pointer;\n}\ninput[type=hidden]:hover {\n  cursor: pointer;\n}\ninput[type=file] {\n  --file-selector-display: initial;\n  --file-selector-width: 80px;\n  --file-selector-height: 21px;\n}\ninput[type=file]:hover {\n  cursor: pointer;\n}\ninput[type=file]::file-selector-button {\n  display: var(--file-selector-display);\n  height: var(--file-selector-height);\n  width: var(--file-selector-width);\n}\ninput[type=color] {\n  background-color: transparent;\n  --color-swatch-display: inline-block;\n  --color-swatch-height: 100%;\n  --color-swatch-border-width: 1px;\n  --color-swatch-border-color: currentColor;\n}\ninput[type=color]:hover {\n  cursor: pointer;\n}\ninput[type=color]::-moz-color-swatch {\n  display: var(--color-swatch-display);\n  height: var(--color-swatch-height);\n  border: var(--color-swatch-border-width) solid var(--color-swatch-border-color);\n}\ninput[type=color]::-webkit-color-swatch {\n  display: var(--color-swatch-display);\n  height: var(--color-swatch-height);\n  border: var(--color-swatch-border-width) solid var(--color-swatch-border-color);\n}\ninput[type=search] {\n  --cancel-button-display: initial;\n  --results-button-display: initial;\n}\ninput[type=search]:hover {\n  cursor: text;\n}\ninput[type=search]::-webkit-search-cancel-button {\n  display: var(--cancel-button-display);\n}\ninput[type=search]::-webkit-search-results-button {\n  display: var(--results-button-display);\n}\ninput[type=number] {\n  --inner-spin-appearance: auto;\n  --outer-spin-appearance: auto;\n  --moz-appearance: initial;\n  /*\n      Ignore the warning, this is to reset the input on Firefox\n      */\n  -moz-appearance: var(--moz-appearance);\n}\ninput[type=number]:hover {\n  cursor: text;\n}\ninput[type=number]::-webkit-inner-spin-button {\n  appearance: var(--inner-spin-appearance);\n}\ninput[type=number]::-webkit-outer-spin-button {\n  appearance: var(--outer-spin-appearance);\n}\ninput[type=range] {\n  border-radius: var(--thumb-border-radius);\n  --track-width: 160px;\n  --track-height: 20px;\n  --track-bg: #e9e9ed;\n  --track-appearance: none;\n  background-color: var(--track-bg);\n  appearance: var(--track-appearance);\n  overflow: hidden;\n  --thumb-appearance: none;\n  --thumb-bg: #484851;\n  --thumb-border-color: white;\n  --thumb-border-width: 0px;\n  --thumb-border-radius: 100vmax;\n  --thumb-width: 15px;\n  --thumb-height: 15px;\n  --inner-track-size: calc(var(--track-width));\n  --inner-track-offset: calc(\n    -1 * var(--track-width) - var(--thumb-width) / 2\n  );\n  --inner-track-bg: #2374ff;\n}\ninput[type=range]:hover {\n  cursor: grab;\n}\ninput[type=range]:active {\n  cursor: grabbing;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  background-color: var(--track-bg);\n  width: var(--track-width);\n  height: var(--track-bg);\n}\ninput[type=range]::-moz-range-track {\n  background-color: var(--track-bg);\n  width: var(--track-width);\n  height: var(--track-bg);\n}\ninput[type=range]::-webkit-slider-thumb {\n  appearance: var(--thumb-appearance);\n  -webkit-appearance: var(--thumb-appearance);\n  background-color: var(--thumb-bg);\n  color: var(--thumb-bg);\n  border: var(--thumb-border-width) solid var(--thumb-border-color);\n  border-radius: var(--thumb-border-radius);\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  box-shadow: var(--inner-track-offset) 0 0 var(--inner-track-size) var(--inner-track-bg);\n}\ninput[type=range]::-moz-range-thumb {\n  appearance: var(--thumb-appearance) !important;\n  background-color: var(--thumb-bg);\n  border: var(--thumb-border-width) solid var(--thumb-border-color);\n  border-radius: var(--thumb-border-radius);\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  box-shadow: var(--inner-track-offset) 0 0 var(--inner-track-size) var(--inner-track-bg);\n}\n\n    \n:host {\n    --bg-primary: rgb(255, 255, 255);\n    --bg-secondary: #f0efef;\n    --bg-tertiary: #676767;\n\n    --semi-transparent-bg: rgba(255, 255, 255, 50%);\n\n    --color-primary: black;\n    --color-secondary: gray;\n\n    --scrollbar-track-bg-color: white;\n\n    --disabled-button-bg: #afafaf;\n\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0;\n\n    --selection-bg-color: hwb(240 0% 0%);\n    --selection-color: white;\n}\n\n::backdrop {\n    --backdrop-bg-color: rgba(255, 255, 255, 0.5);\n\n    --scrollbar-track-bg-color: white;\n\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0;\n}\n\n    \n@media (prefers-color-scheme: dark) {\n    :host {\n        --bg-primary: black;\n        --bg-secondary: #232323;\n        --bg-tertiary: #7a7a7a;\n\n        --color-primary: white;\n\n        --semi-transparent-bg: rgba(0, 0, 0, 50%);\n\n        --scrollbar-track-bg-color: black;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n\n        --selection-bg: #838383;\n        --selection-color: white;\n\n        --selection-bg-color: orange;\n        --selection-color: black;\n    }\n\n\n    ::backdrop {\n        --backdrop-bg-color: rgba(0, 0, 0, 0.5);\n\n        --scrollbar-track-bg-color: black;\n\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n    }\n}\n\n\n    /* Actual CSS style for the web component*/\n    \n user-component{\n  isolation: isolate;\n  /* Other CSS styles here */\n }\n\n  </style>\n  \n  \n <figure>\n  <slot name="title" />\n  <slot name="image" />\n </figure>\n\n';class C extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),e=x.content.cloneNode(!0);n.appendChild(e)}static get observedAttributes(){return[]}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(n,e,t){n}}function S(n,e){var t;if(!e)return document.querySelector(n);return(null===(t=null==e?void 0:e.tagName)||void 0===t?void 0:t.includes("-"))?e.shadowRoot.querySelector(n):e.querySelector(n)}function z(n,e){n.classList.add(e)}customElements.define("web-component",C);const{abs:E,acos:A,acosh:D,asin:L,asinh:q,atan:M,atan2:I,atanh:H,cbrt:R,ceil:N,clz32:O,cos:F,cosh:P,exp:T,expm1:U,floor:_,fround:j,hypot:G,imul:W,log:B,log1p:J,log10:K,log2:Q,max:V,min:X,pow:Y,random:Z,round:$,sign:nn,sin:en,sinh:tn,sqrt:rn,tan:on,tanh:an,trunc:cn}=Math;const sn={red:0,green:0,blue:255};function ln(n){const e=n.currentTarget,t=e.id;hn(e,e.valueAsNumber),sn[t]=e.valueAsNumber}function pn(e){const t=e.currentTarget;n(t.value);hn(t,function(n,e){switch(e.toLowerCase().trim()){case"lowercase":return n.toLowerCase();case"uppercase":return n.toUpperCase();case"titlecase":{let e=n.split(" ");for(let n=0;n<e.length;n++){const t=e[n].substring(0,1).toUpperCase(),r=e[n].slice(1).toLowerCase();e[n]=t+r}return e=e.concat(),e.toString()}case"titlecase2":return n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();default:throw new Error("Formatting text error: unknown option passed in argument")}}(t.value,"uppercase"))}function hn(n,e){S("span",n.parentElement).textContent=e.toString()}var un=function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function i(n){try{s(r.next(n))}catch(n){a(n)}}function c(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}s((r=r.apply(n,e||[])).next())}))};const bn=S("canvas");!function(){const n=(e="input[type=range]",t?t.tagName.includes("-")?Array.from(t.shadowRoot.querySelectorAll(e)):Array.from(t.querySelectorAll(e)):Array.from(document.querySelectorAll(e)));var e,t;for(const e of n)e.addEventListener("input",ln)}(),S("input[type=color]").addEventListener("input",pn);const dn=S("video");function gn(n){!function(n,e,t){n.width=e,n.height=t}(bn,dn.clientWidth,dn.clientHeight),z(dn,"hide"),mn()}function mn(){vn.drawImageOnCanvas(),vn.analyzeImage(sn),requestAnimationFrame(mn)}!function(){un(this,void 0,void 0,(function*(){try{const n=yield navigator.mediaDevices.getUserMedia({video:!0});dn.srcObject=n,function(n){n.play()}(dn),dn.addEventListener("loadeddata",gn);z(S(".index__not-allowed-icon"),"hide")}catch(n){e(n),z(dn,"hide")}}))}();let vn=new class{constructor(n,e){this.canvas=n,this.context=function(n,e){return n.getContext("2d",e)}(this.canvas,{willReadFrequently:!0}),this.video=e}drawImageOnCanvas(){this.context.drawImage(this.video,0,0),this.pixelsData=this.context.getImageData(0,0,this.canvas.width,this.canvas.height)}analyzeImage(n={red:0,green:0,blue:255}){for(let e=0;e<this.pixelsData.data.length;e+=4){const t=e/4,r=t%this.pixelsData.width,o=_(t/this.pixelsData.width),a=this.pixelsData.data[e+0],i=this.pixelsData.data[e+1],c=this.pixelsData.data[e+2],s=(this.pixelsData.data[e+3],{red:a,green:i,blue:c});this.checkColorMatch(n,s,190)&&(this.context.fillStyle="yellow",this.context.fillRect(r,o,2,2))}}checkColorMatch(n,e,t=160){return Math.pow(n.red-e.red,2)+Math.pow(n.green-e.green,2)+Math.pow(n.blue-e.blue,2)<(t=Math.pow(t,2))}}(bn,dn)})()})();