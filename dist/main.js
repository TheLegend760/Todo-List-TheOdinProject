(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>A});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,":root {\r\n    --bg-color: rgb(223, 223, 217);\r\n    --btnhover-color: rgb(142, 11, 26);\r\n    --mainbtn-color: rgb(249, 248, 244);\r\n    --note-color: rgb(141, 153, 174);\r\n    --side-bar: rgb(52, 55, 66);\r\n    --header-color: rgb(239, 35, 60);\r\n}\r\n\r\n\r\nhtml {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--bg-color);\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ======================== HEADER ====================== */\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: var(--header-color);\r\n    color: white;\r\n    padding: 16px;\r\n    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 70px;\r\n    z-index: 2;\r\n}\r\n\r\nheader button {\r\n    background-color: var(--mainbtn-color);\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    font-family: inherit;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\nheader button:hover {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\nheader button:active {\r\n    background-color: var(--mainbtn-color);\r\n}\r\n\r\n.controls {\r\n    margin-left: auto;\r\n}\r\n\r\n/* ======================== HEADER ====================== */\r\n\r\n/* ======================== SIDEBAR ====================== */\r\n.sidebar {\r\n    background-color: var(--side-bar);\r\n    position: absolute;\r\n    width: 200px;\r\n    height: 100%;\r\n    padding: 16px;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 1;\r\n    padding-top: 70px;\r\n}\r\n\r\n.sidebar h2 {\r\n    margin-top: 16px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.project-box {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 6px;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-box:hover, .active {\r\n    background-color: var(--note-color);\r\n    border-radius: 6px;\r\n\r\n}\r\n\r\n\r\n\r\n.delete-project {\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n/* ======================== SIDEBAR ====================== */\r\n\r\n/* ======================== CONTENT ====================== */\r\n\r\n.content {\r\nposition: absolute;\r\nmargin-left: 200px;\r\nmargin-top: 70px;\r\npadding: 16px;\r\ndisplay: flex;\r\nflex-direction: row;\r\nflex-wrap: wrap;\r\ngap: 10px;\r\n}\r\n\r\n\r\n.notebox {\r\n    background-color: var(--note-color);\r\n    height: 300px;\r\n    width: 220px;\r\n    padding: 14px;\r\n    border-radius: 12px;\r\n    border: grey solid 1px;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 3fr .5fr;\r\n    position: relative;\r\n}\r\n\r\n.notebox h2, h3 {\r\n    text-align: center;\r\n}\r\n\r\n.delete-task {\r\n    position: absolute;\r\n    font-size: 20px;\r\n    transform: rotate(45deg);\r\n    right: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.discription {\r\n    overflow: auto;\r\n}\r\n\r\n\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n\r\n.button-label {\r\n    display: inline-block;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority-box {\r\n    width: 100%;\r\n    height: 24px;\r\n    font-weight: bold;\r\n    background-color: tomato;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 6px;\r\n}\r\n\r\n#edit-btn, #status-btn {\r\n    width: 100%;\r\n    height: 24px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    margin-top: 6px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n/* ======================== CONTENT ====================== */\r\n\r\n/* ======================== TASK MODAL ====================== */\r\n.modal {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    z-index: 3;\r\n}\r\n\r\n.modal form {\r\n    width: 500px;\r\n    height: 400px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 24px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr .5fr 1fr 4fr .5fr 1fr 2fr;\r\n    gap: 5px;\r\n    position: relative;\r\n}\r\n\r\n.modal h1 {\r\n    text-align: center;\r\n}\r\n\r\n.modal form input, .modal textarea {\r\n    padding: 10px;\r\n}\r\n\r\n.modal button {\r\n    background-color: var(--header-color);\r\n    font-family: inherit;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 8px;\r\n}\r\n\r\n.modal button:hover {\r\nbackground-color: hsl(353, 86%, 30%);\r\n}\r\n\r\n.modal button:active {\r\n    background-color: var(--header-color);\r\n}\r\n\r\n.close-modal {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 2px;\r\n    font-size: 18px;\r\n    transform: rotate(45deg);\r\n    cursor: pointer;\r\n}\r\n\r\n/* ======================== TASK MODAL ====================== */\r\n\r\n\r\n/* ======================== EDIT TASK MODAL ====================== */\r\n\r\n\r\n.edit-task form {\r\n    grid-template-rows: 1fr 1fr 4fr .5fr 1fr 2fr;\r\n}\r\n\r\n/* ======================== EDIT TASK MODAL ====================== */\r\n\r\n\r\n\r\n\r\n/* ======================== PROJECT MODAL ====================== */\r\n\r\n\r\n\r\n.modal .project-form {\r\n    width: 400px;\r\n    height: 140px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 26px;\r\n    display: grid;\r\n    grid-template-rows: .2fr 2fr;\r\n    gap: 5px;\r\n    position: relative;\r\n}\r\n\r\n\r\n/* ======================== PROJECT MODAL ====================== */","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,8BAA8B;IAC9B,kCAAkC;IAClC,mCAAmC;IACnC,gCAAgC;IAChC,2BAA2B;IAC3B,gCAAgC;AACpC;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,2DAA2D;;AAE3D;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,2FAA2F;IAC3F,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,iBAAiB;AACrB;;AAEA,2DAA2D;;AAE3D,4DAA4D;AAC5D;IACI,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;;AAEtB;;;;AAIA;IACI,iBAAiB;IACjB,eAAe;IACf,wBAAwB;AAC5B;;AAEA,4DAA4D;;AAE5D,4DAA4D;;AAE5D;AACA,kBAAkB;AAClB,kBAAkB;AAClB,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,mBAAmB;AACnB,eAAe;AACf,SAAS;AACT;;;AAGA;IACI,mCAAmC;IACnC,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,4EAA4E;IAC5E,aAAa;IACb,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;AACjB;;;AAGA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA,4DAA4D;;AAE5D,+DAA+D;AAC/D;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,qDAAqD;IACrD,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;AACA,oCAAoC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB;;AAEA,+DAA+D;;;AAG/D,oEAAoE;;;AAGpE;IACI,4CAA4C;AAChD;;AAEA,oEAAoE;;;;;AAKpE,kEAAkE;;;;AAIlE;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,4BAA4B;IAC5B,QAAQ;IACR,kBAAkB;AACtB;;;AAGA,kEAAkE",sourcesContent:[":root {\r\n    --bg-color: rgb(223, 223, 217);\r\n    --btnhover-color: rgb(142, 11, 26);\r\n    --mainbtn-color: rgb(249, 248, 244);\r\n    --note-color: rgb(141, 153, 174);\r\n    --side-bar: rgb(52, 55, 66);\r\n    --header-color: rgb(239, 35, 60);\r\n}\r\n\r\n\r\nhtml {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--bg-color);\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ======================== HEADER ====================== */\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: var(--header-color);\r\n    color: white;\r\n    padding: 16px;\r\n    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 70px;\r\n    z-index: 2;\r\n}\r\n\r\nheader button {\r\n    background-color: var(--mainbtn-color);\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    font-family: inherit;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\nheader button:hover {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\nheader button:active {\r\n    background-color: var(--mainbtn-color);\r\n}\r\n\r\n.controls {\r\n    margin-left: auto;\r\n}\r\n\r\n/* ======================== HEADER ====================== */\r\n\r\n/* ======================== SIDEBAR ====================== */\r\n.sidebar {\r\n    background-color: var(--side-bar);\r\n    position: absolute;\r\n    width: 200px;\r\n    height: 100%;\r\n    padding: 16px;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 1;\r\n    padding-top: 70px;\r\n}\r\n\r\n.sidebar h2 {\r\n    margin-top: 16px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.project-box {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 6px;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-box:hover, .active {\r\n    background-color: var(--note-color);\r\n    border-radius: 6px;\r\n\r\n}\r\n\r\n\r\n\r\n.delete-project {\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n/* ======================== SIDEBAR ====================== */\r\n\r\n/* ======================== CONTENT ====================== */\r\n\r\n.content {\r\nposition: absolute;\r\nmargin-left: 200px;\r\nmargin-top: 70px;\r\npadding: 16px;\r\ndisplay: flex;\r\nflex-direction: row;\r\nflex-wrap: wrap;\r\ngap: 10px;\r\n}\r\n\r\n\r\n.notebox {\r\n    background-color: var(--note-color);\r\n    height: 300px;\r\n    width: 220px;\r\n    padding: 14px;\r\n    border-radius: 12px;\r\n    border: grey solid 1px;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 3fr .5fr;\r\n    position: relative;\r\n}\r\n\r\n.notebox h2, h3 {\r\n    text-align: center;\r\n}\r\n\r\n.delete-task {\r\n    position: absolute;\r\n    font-size: 20px;\r\n    transform: rotate(45deg);\r\n    right: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.discription {\r\n    overflow: auto;\r\n}\r\n\r\n\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n\r\n.button-label {\r\n    display: inline-block;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority-box {\r\n    width: 100%;\r\n    height: 24px;\r\n    font-weight: bold;\r\n    background-color: tomato;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 6px;\r\n}\r\n\r\n#edit-btn, #status-btn {\r\n    width: 100%;\r\n    height: 24px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    margin-top: 6px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n/* ======================== CONTENT ====================== */\r\n\r\n/* ======================== TASK MODAL ====================== */\r\n.modal {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    z-index: 3;\r\n}\r\n\r\n.modal form {\r\n    width: 500px;\r\n    height: 400px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 24px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr .5fr 1fr 4fr .5fr 1fr 2fr;\r\n    gap: 5px;\r\n    position: relative;\r\n}\r\n\r\n.modal h1 {\r\n    text-align: center;\r\n}\r\n\r\n.modal form input, .modal textarea {\r\n    padding: 10px;\r\n}\r\n\r\n.modal button {\r\n    background-color: var(--header-color);\r\n    font-family: inherit;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 8px;\r\n}\r\n\r\n.modal button:hover {\r\nbackground-color: hsl(353, 86%, 30%);\r\n}\r\n\r\n.modal button:active {\r\n    background-color: var(--header-color);\r\n}\r\n\r\n.close-modal {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 2px;\r\n    font-size: 18px;\r\n    transform: rotate(45deg);\r\n    cursor: pointer;\r\n}\r\n\r\n/* ======================== TASK MODAL ====================== */\r\n\r\n\r\n/* ======================== EDIT TASK MODAL ====================== */\r\n\r\n\r\n.edit-task form {\r\n    grid-template-rows: 1fr 1fr 4fr .5fr 1fr 2fr;\r\n}\r\n\r\n/* ======================== EDIT TASK MODAL ====================== */\r\n\r\n\r\n\r\n\r\n/* ======================== PROJECT MODAL ====================== */\r\n\r\n\r\n\r\n.modal .project-form {\r\n    width: 400px;\r\n    height: 140px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 26px;\r\n    display: grid;\r\n    grid-template-rows: .2fr 2fr;\r\n    gap: 5px;\r\n    position: relative;\r\n}\r\n\r\n\r\n/* ======================== PROJECT MODAL ====================== */"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],d=t.base?c[0]+t.base:c[0],l=a[d]||0,s="".concat(d," ").concat(l);a[d]=l+1;var p=e(s),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var m=o(u,t);t.byIndex=A,r.splice(A,0,{identifier:s,updater:m,references:1})}i.push(s)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);r[A].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),A=e(565),c=e.n(A),d=e(216),l=e.n(d),s=e(589),p=e.n(s),u=e(426),m={};function C(n,r){const e=document.createElement("option");e.value=n,e.innerText=n,r.append(e)}function f(n,r,e,t,o="false"){return{name:n,date:r,descript:e,priority:t,complete:o,completeTask(){this.complete="true"},uncompleteTask(){this.complete="false"}}}function b(n,r,e){const t=document.createElement("div");t.classList.add("notebox");const o=document.createElement("span");o.classList.add("delete-task"),o.innerText="+",o.addEventListener("click",(function(){const o=n.findIndex((n=>n[0]==r)),a=n[o].findIndex((n=>n.name==e.name));n[o].splice(a,1),t.remove()}));const a=document.createElement("h2");a.innerHTML=e.name;const i=document.createElement("h3");i.innerText=e.date;const A=document.createElement("p");A.classList.add("description"),A.innerText=e.descript;const c=document.createElement("button");c.id="edit-btn",c.innerText="Edit",c.addEventListener("click",(function(){!function(n,r,e){const t=document.createElement("div");t.classList.add("modal"),t.classList.add("edit-task");const o=document.createElement("form"),a=document.createElement("span");a.classList.add("close-modal"),a.innerText="+",a.addEventListener("click",(function(){t.style.display="none"}));const i=document.createElement("input");i.type="text",i.id="task",i.placeholder="Task",i.setAttribute("required",""),i.value=e.name;const A=document.createElement("input");A.type="date",A.id="date",A.setAttribute("required",""),A.value=e.date;const c=document.createElement("textarea");c.id="description",c.cols="30",c.rows="10",c.placeholder="Description",c.style.resize="none",c.setAttribute("required",""),c.value=e.descript;const d=document.createElement("label");d.for="priority",d.innerText="Priority:";const l=document.createElement("select");l.name="priority",l.id="priority";const s=document.createElement("option");s.value="low",s.innerText="Low";const p=document.createElement("option");p.value="mid",p.innerText="Mid";const u=document.createElement("option");u.value="high",u.innerText="High","high"==e.priority?u.selected="selected":"mid"==e.priority?p.selected="selected":s.selected="selected",l.append(s),l.append(p),l.append(u);const m=document.createElement("button");m.type="submit",m.innerText="Edit Task",m.addEventListener("click",(function(){const o=i.value,a=A.value,d=c.value,s=l.value,p=r,u=n.findIndex((n=>n[0]==p));if(i.value&&A.value&&""!=c.value){e.name=o,e.date=a,e.descript=d,e.priority=s,t.remove();let r=document.getElementsByClassName("active");r[0].className=r[0].className.replace(" active",""),document.querySelectorAll(".project-box")[u].classList.add("active");const i=document.querySelector(".content");i.innerHTML="";const A=n[u];for(let r=0;r<A.length;r++)"object"==typeof A[r]&&i.append(b(n,p,A[r]))}})),o.append(a),o.append(i),o.append(A),o.append(c),o.append(d),o.append(l),o.append(m),t.append(o),document.body.append(t)}(n,r,e)}));const d=document.createElement("div");d.classList.add("priority-box"),"low"==e.priority?(d.innerText="Low",d.style.backgroundColor="yellow"):"mid"==e.priority?(d.innerText="Mid",d.style.backgroundColor="orange"):(d.innerText="High",d.style.backgroundColor="tomato");const l=document.createElement("button");return l.id="status-btn",l.addEventListener("click",(function(){"false"==e.complete?(e.completeTask(),l.style.textDecoration="line-through",l.innerText="Completed"):(e.uncompleteTask(),l.style.textDecoration="none",l.innerText="Uncompleted")})),"false"==e.complete?l.innerText="Uncomplete":(l.innerText="Completed",l.style.textDecoration="line-through"),t.appendChild(o),t.appendChild(a),t.appendChild(i),t.appendChild(A),t.appendChild(c),t.appendChild(d),t.appendChild(l),t}function x(n,r,e,t,o,a,i){const A=f(e,t,o,a,"false"),c=n.findIndex((n=>n[0]==r));n[c].push(A)}function g(n){const r=document.querySelector(".sidebar"),e=document.querySelector(".content"),t=r.getElementsByClassName("project-box");for(let r=0;r<t.length;r++)t[r].addEventListener("click",(function(){let r=document.getElementsByClassName("active");r.length>0&&(r[0].className=r[0].className.replace(" active","")),e.innerHTML="",this.className+=" active";const o=this.children[0].innerText,a=n.findIndex((n=>n[0]==o));if("-1"==a){t[0].classList.add("active");const r=n[0];for(let t=0;t<r.length;t++)"object"==typeof r[t]&&e.append(b(n,"Main",r[t]))}else{const r=n[a];for(let t=0;t<r.length;t++)"object"==typeof r[t]&&e.append(b(n,o,r[t]))}}))}function h(n,r){r.push([n]),function(n,r){const e=document.querySelector(".sidebar"),t=r,o=document.createElement("div");o.classList.add("project-box");const a=document.createElement("p");a.classList.add("project-name"),a.innerText=n;const i=document.createElement("p");i.classList.add("delete-project"),i.innerText="+",i.addEventListener("click",(function(){const r=t.findIndex((r=>r==n));t.splice(r,1),i.parentElement.remove()})),o.appendChild(a),o.appendChild(i),e.appendChild(o)}(n,r),g(r)}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const I=[];var B;(B=I).push(["Main"]),function(n){const r=document.querySelector(".sidebar"),e=document.createElement("div");e.classList.add("project-box"),e.classList.add("active");const t=document.createElement("p");t.classList.add("project-name"),t.innerText="Main",e.appendChild(t),r.appendChild(e)}(),g(B),h("zero",I),h("one",I),h("two",I),x(I,"Main","rest","today","hello","low"),x(I,"Main","wake up","tomorrow","wake up yo","high"),function(n){const r=document.querySelector(".content"),e=n[0];for(let t=0;t<e.length;t++)"object"==typeof e[t]&&r.append(b(n,"Main",e[t]))}(I),function(n){document.querySelector("#newProject").addEventListener("click",(function(){!function(n){const r=document.createElement("div");r.classList.add("modal");const e=document.createElement("form");e.classList.add("project-form");const t=document.createElement("span");t.classList.add("close-modal"),t.innerText="+",t.addEventListener("click",(function(){r.remove()}));const o=document.createElement("input");o.type="text",o.id="project-text",o.placeholder="Project Name",o.setAttribute("required","");const a=document.createElement("button");a.type="submit",a.innerText="Add Project",a.addEventListener("click",(function(e){const t=o.value;""!=o.value&&(createFullProject(t,n),r.remove())})),e.append(t),e.append(o),e.append(a),r.append(e),document.body.append(r)}(n)}))}(I),function(n){document.querySelector("#newTask").addEventListener("click",(function(){!function(n){const r=document.createElement("div");r.classList.add("modal");const e=document.createElement("form"),t=document.createElement("span");t.classList.add("close-modal"),t.innerText="+",t.addEventListener("click",(function(){r.style.display="none"}));const o=document.createElement("input");o.type="text",o.id="task",o.placeholder="Task",o.setAttribute("required","");const a=document.createElement("input");a.type="date",a.id="date",a.setAttribute("required","");const i=document.createElement("textarea");i.id="description",i.cols="30",i.rows="10",i.placeholder="Description",i.style.resize="none",i.setAttribute("required","");const A=document.createElement("label");A.for="project-select",A.innerText="Project:";const c=document.createElement("select");c.id="select-project";for(let r=0;r<n.length;r++)C(n[r][0],c);const d=document.createElement("label");d.for="priority",d.innerText="Priority:";const l=document.createElement("select");l.name="priority",l.id="priority";const s=document.createElement("option");s.value="low",s.innerText="Low";const p=document.createElement("option");p.value="mid",p.innerText="Mid";const u=document.createElement("option");u.value="high",u.innerText="High",l.append(s),l.append(p),l.append(u);const m=document.createElement("button");m.type="submit",m.innerText="Add Task",m.addEventListener("click",(function(){const e=f(o.value,a.value,i.value,l.value),t=c.value,A=n.findIndex((n=>n[0]==t));if(o.value&&a.value&&""!=i.value){n[A].push(e),r.remove();let o=document.getElementsByClassName("active");o[0].className=o[0].className.replace(" active",""),document.querySelectorAll(".project-box")[A].classList.add("active");const a=document.querySelector(".content");a.innerHTML="";const i=n[A];for(let r=0;r<i.length;r++)"object"==typeof i[r]&&a.append(b(n,t,i[r]))}})),e.append(t),e.append(o),e.append(a),e.append(A),e.append(c),e.append(i),e.append(d),e.append(l),e.append(m),r.append(e),document.body.append(r)}(n)}))}(I),console.table(I)})()})();
//# sourceMappingURL=main.js.map