!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sal=t():e.sal=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",l={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},u=[],c=null,f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},d=function(){document.body.classList.add(l.disabledClassName)},b=function(){return l.disabled||"function"==typeof l.disabled&&l.disabled()},p=function(e,t){e.forEach((function(e){e.intersectionRatio>=l.threshold?(!function(e){e.target.classList.add(l.animateClassName),f(l.enterEventName,e)}(e),l.once&&t.unobserve(e.target)):l.once||function(e){e.target.classList.remove(l.animateClassName),f(l.exitEventName,e)}(e)}))},m=function(){d(),c.disconnect(),c=null},y=function(){document.body.classList.remove(l.disabledClassName),c=new IntersectionObserver(p,{rootMargin:l.rootMargin,threshold:l.threshold}),(u=[].filter.call(document.querySelectorAll(l.selector),(function(e){return!function(e){return e.classList.contains(l.animateClassName)}(e,l.animateClassName)}))).forEach((function(e){return c.observe(e)}))};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;if(e!==l&&(l=o({},l,{},e)),"undefined"==typeof window)return console.warn(a),{elements:u,disable:m,enable:y};if(!window.IntersectionObserver)throw d(),Error(s);return b()?d():y(),{elements:u,disable:m,enable:y}}},function(e,t,n){}]).default}));
//# sourceMappingURL=sal.js.map