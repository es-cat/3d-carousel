/* publish time Wednesday, July 19th, 2017, 10:51:10 PM*/!function t(e,n,r){function i(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n||t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(){"use strict";function t(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e}function r(e,n,r,i){return r-t(i-e,0,r,i)+n}function i(e,n,i,o){return e<o/2?.5*r(2*e,0,i,o)+n:.5*t(2*e-o,0,i,o)+.5*i+n}function o(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e}function a(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e}function u(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}function s(t,e,n,r){return n*(t/=r)*t*t+e}function c(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function l(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}function f(t,e,n,r){return 0===t?e:n*Math.pow(2,10*(t/r-1))+e}function p(t,e,n,r){return t===r?e+n:n*(1-Math.pow(2,-10*t/r))+e}function d(t,e,n,r){return 0===t?e:t===r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*(t-1)))+e}function m(t,e,n,r){return n*t/r+e}function h(t,e,n,r){return n*(t/=r)*t+e}function y(t,e,n,r){return-n*(t/=r)*(t-2)+e}function b(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*((t-=1)*(t-2)-1)+e}function v(t,e,n,r){return n*(t/=r)*t*t*t+e}function g(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e}function w(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}function O(t,e,n,r){return n*(t/=r)*t*t*t*t+e}function j(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}function _(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}function P(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e}function x(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e}function k(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}var M={bounceOut:t,bounceIn:r,bounceInOut:i,circIn:o,circOut:a,circInOut:u,cubicIn:s,cubicOut:c,cubicInOut:l,expoIn:f,expoOut:p,expoInOut:d,linear:m,quadIn:h,quadOut:y,quadInOut:b,quartIn:v,quartOut:g,quartInOut:w,quintIn:O,quintOut:j,quintInOut:_,sineIn:P,sineOut:x,sineInOut:k};"object"==typeof n?e.exports=M:"function"==typeof define&&define.amd?define(function(){return M}):this.Ease=M}).call(this)},{}],2:[function(t,e,n){"use strict";function r(t){return function(){return t}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},e.exports=i},{}],3:[function(t,e,n){"use strict";function r(t,e,n,r,o,a,u,s){if(i(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,u,s],f=0;c=new Error(e.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var i=function(t){};e.exports=r},{}],4:[function(t,e,n){"use strict";var r=t("./emptyFunction"),i=r;e.exports=i},{"./emptyFunction":2}],5:[function(t,e,n){"use strict";function r(t,e,n,r,i){}e.exports=r},{"./lib/ReactPropTypesSecret":9,"fbjs/lib/invariant":3,"fbjs/lib/warning":4}],6:[function(t,e,n){"use strict";var r=t("fbjs/lib/emptyFunction"),i=t("fbjs/lib/invariant"),o=t("./lib/ReactPropTypesSecret");e.exports=function(){function t(t,e,n,r,a,u){u!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=r,n.PropTypes=n,n}},{"./lib/ReactPropTypesSecret":9,"fbjs/lib/emptyFunction":2,"fbjs/lib/invariant":3}],7:[function(t,e,n){"use strict";var r=t("fbjs/lib/emptyFunction"),i=t("fbjs/lib/invariant"),o=t("fbjs/lib/warning"),a=t("./lib/ReactPropTypesSecret"),u=t("./checkPropTypes");e.exports=function(t,e){function n(t){var e=t&&(P&&t[P]||t[x]);if("function"==typeof e)return e}function s(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}function c(t){this.message=t,this.stack=""}function l(t){function n(n,r,o,u,s,l,f){if(u=u||k,l=l||o,f!==a)if(e)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[o]?n?new c(null===r[o]?"The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:t(r,o,u,s,l)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function f(t){function e(e,n,r,i,o,a){var u=e[n];if(w(u)!==t)return new c("Invalid "+i+" `"+o+"` of type `"+O(u)+"` supplied to `"+r+"`, expected `"+t+"`.");return null}return l(e)}function p(t){function e(e,n,r,i,o){if("function"!=typeof t)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=e[n];if(!Array.isArray(u)){return new c("Invalid "+i+" `"+o+"` of type `"+w(u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var l=t(u,s,r,i,o+"["+s+"]",a);if(l instanceof Error)return l}return null}return l(e)}function d(t){function e(e,n,r,i,o){if(!(e[n]instanceof t)){var a=t.name||k;return new c("Invalid "+i+" `"+o+"` of type `"+_(e[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return l(e)}function m(t){function e(e,n,r,i,o){for(var a=e[n],u=0;u<t.length;u++)if(s(a,t[u]))return null;return new c("Invalid "+i+" `"+o+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(t)+".")}return Array.isArray(t)?l(e):r.thatReturnsNull}function h(t){function e(e,n,r,i,o){if("function"!=typeof t)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=e[n],s=w(u);if("object"!==s)return new c("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var f=t(u,l,r,i,o+"."+l,a);if(f instanceof Error)return f}return null}return l(e)}function y(t){function e(e,n,r,i,o){for(var u=0;u<t.length;u++){if(null==(0,t[u])(e,n,r,i,o,a))return null}return new c("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(t))return r.thatReturnsNull;for(var n=0;n<t.length;n++){var i=t[n];if("function"!=typeof i)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",j(i),n),r.thatReturnsNull}return l(e)}function b(t){function e(e,n,r,i,o){var u=e[n],s=w(u);if("object"!==s)return new c("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in t){var f=t[l];if(f){var p=f(u,l,r,i,o+"."+l,a);if(p)return p}}return null}return l(e)}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||t(e))return!0;var r=n(e);if(!r)return!1;var i,o=r.call(e);if(r!==e.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function g(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function w(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":g(e,t)?"symbol":e}function O(t){if(void 0===t||null===t)return""+t;var e=w(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function j(t){var e=O(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function _(t){return t.constructor&&t.constructor.name?t.constructor.name:k}var P="function"==typeof Symbol&&Symbol.iterator,x="@@iterator",k="<<anonymous>>",M={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return l(r.thatReturnsNull)}(),arrayOf:p,element:function(){function e(e,n,r,i,o){var a=e[n];if(!t(a)){return new c("Invalid "+i+" `"+o+"` of type `"+w(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(e)}(),instanceOf:d,node:function(){function t(t,e,n,r,i){return v(t[e])?null:new c("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return l(t)}(),objectOf:h,oneOf:m,oneOfType:y,shape:b};return c.prototype=Error.prototype,M.checkPropTypes=u,M.PropTypes=M,M}},{"./checkPropTypes":5,"./lib/ReactPropTypesSecret":9,"fbjs/lib/emptyFunction":2,"fbjs/lib/invariant":3,"fbjs/lib/warning":4}],8:[function(t,e,n){e.exports=t("./factoryWithThrowingShims")()},{"./factoryWithThrowingShims":6,"./factoryWithTypeCheckers":7}],9:[function(t,e,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},{}],10:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=t("react"),c=r(s),l=t("prop-types"),f=r(l),p=t("../../util/util.js"),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(p),m=t("../..//util/layout.js"),h=r(m),y=t("../../util/depot.js"),b=r(y),v=new h.default,g=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.PropTypes={items:f.default.array.isRequired,current:f.default.number.isRequired,layout:f.default.string.isRequired,width:f.default.number.isRequired},n.state={current:0,rotationY:0,items:[{url:"https://placem.at/things?w=600&random",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"}],figures:[]},n}return a(e,t),u(e,[{key:"componentWillMount",value:function(){this.depot=(0,b.default)(this.state,this.props,this.setState.bind(this)),this.onRotate=this.depot.onRotate.bind(this),console.log(),this.setState({items:this.props.items,figures:v[this.props.layout].figures(this.props,this.props.items,0)})}},{key:"componentWillReceiveProps",value:function(t){this.depot.onNextProps(t),this.onRotate=this.depot.onRotate.bind(this)}},{key:"render",value:function(){var t=2*Math.PI/this.state.figures.length,e={perspective:this.props.perspective+"px",width:isNaN(this.props.width)?this.props.width:this.props.width+"px"},n=this.state.figures.map(function(t,e){var n={backgroundImage:"url("+t.image+")"};return c.default.createElement("div",{key:e,style:Object.assign({},n,d.figureStyle(t)),className:"mdBanner__item"},c.default.createElement("a",{title:t.title,href:t.link,target:"_blank"},c.default.createElement("img",{className:"image",src:t.image})))});return c.default.createElement("div",null,c.default.createElement("div",{className:"mdBanner"},c.default.createElement("div",{className:"mdBanner-list",ref:"bannerList",style:e},c.default.createElement("a",{className:"btnPrev",href:"#",onClick:d.partial(this.onRotate,-t)},"to PREV"),c.default.createElement("br",null),n,c.default.createElement("a",{className:"btnNext",href:"#",onClick:d.partial(this.onRotate,+t)},"to NEXT"),c.default.createElement("br",null))))}}]),e}(c.default.Component);n.default=g},{"../..//util/layout.js":13,"../../util/depot.js":12,"../../util/util.js":14,"prop-types":8,react:"react"}],11:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=t("./components/\bcarousel/Carousel"),c=r(s),l=t("prop-types"),f=r(l),p=t("react-dom"),d=r(p),m=t("react"),h=r(m),y=t("./util/util"),b=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(y),v=t("ease-functions"),g=r(v),w=[{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"},{url:"https://placem.at/things?w=600&random=some_seed",title:"this items title ",link:"http://dummyimage.com/"}],O=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.PropTypes={banner:f.default.object.isRequired,actions:f.default.object.isRequired};var r={layout:"itunes",perspective:960,width:"25%",diameter:960,zDistance:3,xDistance:3,opacity:!0,duration:300,ease:"linear"},a=n,u=[],s=new dat.GUI;return Object.keys(g.default).map(function(t,e){u.push(t.toString())}),n.controller={},n.controller.perspective=s.add(r,"perspective",0,3e3).step(50),n.controller.width=s.add(r,"width"),n.controller.diameter=s.add(r,"diameter",0,2e3).step(1),n.controller.zDistance=s.add(r,"zDistance",1,20).step(.05),n.controller.xDistance=s.add(r,"xDistance",1,20).step(.05),n.controller.opacity=s.add(r,"opacity"),n.controller.duration=s.add(r,"duration",0,2e3).step(300),n.controller.ease=s.add(r,"ease",u),b.mapObj(function(t){t.onFinishChange(function(t){a.setState(Object.assign({},a.state,r))})},n.controller),n.state=Object.assign({},r),n}return a(e,t),u(e,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(c.default,{items:w,current:this.state.current,layout:"itunes",duration:this.state.duration,perspective:this.state.perspective,diameter:this.state.diameter,width:this.state.width,zDistance:this.state.zDistance,xDistance:this.state.xDistance,ease:this.state.ease,opacity:this.state.opacity}))}}]),e}(h.default.Component);d.default.render(h.default.createElement(O,null),document.getElementById("react-index"))},{"./components/\bcarousel/Carousel":10,"./util/util":14,"ease-functions":1,"prop-types":8,react:"react","react-dom":"react-dom"}],12:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){function r(t,e,n,r){function o(a){i=requestAnimationFrame(o),t.figures=n(a),r(t),t.figures==e&&cancelAnimationFrame(i)}i&&window.cancelAnimationFrame(i),requestAnimationFrame(o)}var i,u={},s=t,c=e;return u.onNextProps=function(t){c=t;var e=g[c.layout].figures(c,c.items,s.rotationY),i=o(s.figures,e,m.default[c.ease],c.duration),u=a(i,e,c.duration);r(s,e,u,n),c=t},u.onRotate=function(t){var e=g[c.layout].figures(c,c.items,s.rotationY+t);s.rotationY+=t;var u=o(s.figures,e,m.default[c.ease],c.duration),l=a(u,e,c.duration);i&&cancelAnimationFrame(i),r(s,e,l,n)},u}function o(t,e,n){var r=v.uniq(v.pluck("key",t.concat(e))),i=[];return r.forEach(function(r){i.push(u(f(t[r],e[r]),p(t[r],e[r]),n))}),i}function a(t,e,n){var r,i,o=s(t),a=0;return function(t){return r||(r=t,i=t+n),t>=i?e:(a=t-r,l(a,o,n))}}function u(t,e,n){var r=v.uniq(Object.keys(t||{}).concat(Object.keys(e||{}))),i={};return r.forEach(function(r){i[r]={from:t[r],to:e[r]},i[r].ease=isNaN(i[r].from)?w:n}),i}function s(t){for(var e=t.length,n=new Array(e),r=0;r<e;++r)n[r]=c(t[r]);return n}function c(t){var e=Object.create(null);for(var n in t)e[n]=v.merge(t[n],{change:t[n].to-t[n].from});return e}function l(t,e,n){for(var r,i=e.length,o=new Array(i),a=0;a<i;++a){r=e[a];var u=Object.create(null);for(var s in r)u[s]=r[s].ease?r[s].ease(t,r[s].from,r[s].change,n):r[s].from;o[a]=u}return o}function f(t,e){return t||v.merge(e,{present:!0})}function p(t,e){return t&&!e?v.merge(t,{present:!1}):v.merge(e,{present:!0})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var d=t("ease-functions"),m=r(d),h=t("./layout"),y=r(h),b=t("./util"),v=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(b),g=new y.default,w=function(t,e){return e}},{"./layout":13,"./util":14,"ease-functions":1}],13:[function(t,e,n){"use strict";function r(){var t=this;return t.itunes={distance:function(t,e){},figures:function(t,e,n){function r(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function i(t,e,n,r){return n*(t/=r)*t*t+e}var a=e.length,u=Math.floor(t.diameter/2),s=2*Math.PI/a,c=Math.round(n/s)*s,l=t.zDistance,f=t.xDistance;return o.range(0,a).map(function(n){var o={},p=.5*Math.PI-(n*s+c),d=.5,m=0;return 1!=Math.abs(Math.cos(p))&&(o.easeOut=1+Math.round(10*r(a,0,.4,a-1)/10),o.easeIn=1+Math.round(10*i(a,0,.4,a-1)/10)),-1!=Math.sin(p)&&(d=.3*Math.sin(p+.5*Math.PI)),m=1!=Math.sin(p)?Math.max(1.1*Math.sin(p),.45):1,{rotateY:-1*(0-d*o.easeOut),translateX:u*Math.cos(p)*f,translateZ:0-u*Math.abs(1-Math.sin(p))*l*o.easeOut,opacity:t.opacity?m:1,zIndex:Math.round(100*Math.sin(p)),present:!0,key:n,image:e[n].url}})}},t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var i=t("./util"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(i)},{"./util":14}],14:[function(t,e,n){"use strict";function r(t){var e=Object.hasOwnProperty.call(t,"translateX")?t.translateX:0,n=Object.hasOwnProperty.call(t,"zIndex")?t.zIndex:0;return{transform:"rotateY("+t.rotateY+"rad)  translateX("+e+"px) translateZ("+t.translateZ+"px)",zIndex:n,boxShadow:"0 0 4444px 9999px rgba(0,0,0,"+(1-t.opacity)+") inset",opacity:t.opacity}}function i(t){var e=Array.prototype.slice.call(arguments,1);return function(){return t.apply(this,e.concat(Array.prototype.slice.call(arguments,0)))}}function o(t,e){for(var n=[],r=t;r<e;++r)n.push(r);return n}function a(t){var e={boolean:{},number:{},string:{}},n=[];return t.filter(function(t){var r=void 0===t?"undefined":l(t);return r in e?!e[r].hasOwnProperty(t)&&(e[r][t]=!0):!(n.indexOf(t)>=0)&&n.push(t)})}function u(t,e){var n,r={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function s(t,e){return e.map(function(e){return e[t]})}function c(t,e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}Object.defineProperty(n,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.figureStyle=r,n.partial=i,n.range=o,n.uniq=a,n.merge=u,n.pluck=s,n.mapObj=c},{}]},{},[11]);