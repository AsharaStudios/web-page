(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{165:function(e){e.exports={marcoMobile:"/img/AboutUs/HeroesMarco.png",marco1Desktop:"/img/AboutUs/HeroesMarcoEstatico.png",marco2Desktop:"/img/AboutUs/HeroesMarcoEscala.png",marcoText:"/img/AboutUs/HeroesMarcoSencillo.png",lineas:"/img/AboutUs/HeroesLineas.png",heroes:[{photo:"/img/AboutUs/Hero/AndresRodriguez.png",name:"Yuel Wolf",description:"heroes.yuelwolf",url:"https://twitter.com/yuelwolf"},{photo:"/img/AboutUs/Hero/Tom.png",name:"Tom P",description:"heroes.tomThePurple",url:"https://www.instagram.com/tom_p001/"},{photo:"/img/AboutUs/Hero/AndreaRamirez.png",name:"Grumysh",description:"heroes.grumysh",url:"https://www.instagram.com/grumysh/"},{photo:"/img/AboutUs/Hero/CarlosBecerra.png",name:"Raideos",description:"heroes.raideos",url:"https://twitter.com/Raideos"},{photo:"/img/AboutUs/Hero/sukutrulumRumble.png",name:"SukutrulumRumble",description:"heroes.sukutrulumRumble",url:"https://www.instagram.com/sukutrulum_3d/"},{photo:"/img/AboutUs/Hero/Jose.png",name:"JoseMPT",description:"heroes.JoseMPT",url:"https://twitter.com/jp46_jose"},{photo:"/img/AboutUs/Hero/Gio.png",name:"Gio",description:"heroes.xXGioXx",url:"https://www.instagram.com/gio_oart/"},{photo:"/img/AboutUs/Hero/inari.png",name:"Inari",description:"heroes.inari",url:"https://www.instagram.com/inari.artist/"},{photo:"/img/AboutUs/Hero/dave.png",name:"PCMDAVE",description:"heroes.dave",url:"https://twitter.com/pcmdave"}]}},53:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(9),i=o(165);o(149);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t,o=e.hero;return n.a.createElement("div",{className:"Hero"},n.a.createElement("div",{className:"Hero-mobile-container"},n.a.createElement("img",{className:"Hero-marco",src:this.props.marcoMobile,alt:"marcoHero"}),n.a.createElement("img",{className:"Hero-marco-desktop",src:this.props.marco1Desktop,alt:"marcoHero"}),n.a.createElement("img",{className:"Hero-marco2-desktop",src:this.props.marco2Desktop,alt:"marcoHero"}),n.a.createElement("img",{className:"Hero-lineas",src:this.props.lineas,alt:"marcoHero"}),n.a.createElement("a",{href:o.url,target:"_blank"},n.a.createElement("img",{className:"Hero-photo",src:o.photo,alt:"photoHero"})),n.a.createElement("p",{className:"Hero-name"},o.name,n.a.createElement("img",{className:"Hero-marco-text",src:this.props.marcoText,alt:"marcoTextHero"}))),n.a.createElement("p",{className:"Hero-description"},t(o.description)))}}])&&l(o.prototype,a),i&&l(o,i),t}(),m=Object(a.d)()(f);o(150);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,g(t).apply(this,arguments))}var o,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props.t;return n.a.createElement("div",null,n.a.createElement("p",{className:"philosophy-text ourheroes"},e("about.heroesTitle")),n.a.createElement("div",{className:"Heroes-container"},i.heroes.map(function(e,t){return n.a.createElement(m,{key:t,index:t,marcoMobile:i.marcoMobile,marco1Desktop:i.marco1Desktop,marco2Desktop:i.marco2Desktop,lineas:i.lineas,marcoText:i.marcoText,hero:e})})))}}])&&b(o.prototype,a),c&&b(o,c),t}();t.default=Object(a.d)()(v)},55:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(9),i=o(30);o(151);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t;e.i18n;return n.a.createElement("div",{className:"description"},n.a.createElement("div",{className:"unit-container"},n.a.createElement("img",{className:"puntos",src:this.props.unity.puntos,alt:this.props.unity.name}),n.a.createElement("div",{className:"logo-container"},n.a.createElement("img",{className:"logo",src:this.props.unity.logo,alt:this.props.unity.name})),n.a.createElement("p",{style:{color:this.props.unity.style.general},className:"description-text"}," ",t(this.props.unity.description)),n.a.createElement("img",{className:"icon",src:this.props.unity.icon,alt:this.props.unity.name})))}}])&&l(o.prototype,a),i&&l(o,i),t}(),m=Object(a.d)()(f);o(152);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,g(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){return n.a.createElement("div",{className:"Client"},n.a.createElement("div",{className:"Client-container"},n.a.createElement("div",{className:"Client-marcoContainer"},n.a.createElement("p",{style:{color:this.props.color},className:"Client-title"},this.props.client.title,n.a.createElement("img",{className:"Client-title-marco",src:"/img/Soft/Marco.png",alt:""})),n.a.createElement("a",{href:this.props.client.link,target:"_blank"},n.a.createElement("img",{className:"Client-logo",src:this.props.client.icon,alt:this.props.client.title})))))}}])&&b(o.prototype,a),i&&b(o,i),t}();o(153);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,k(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t,o=e.style;return n.a.createElement("div",{className:"portfolio-completed"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"marcoContainer"},n.a.createElement("p",{style:{color:o.title},className:"title"},t(this.props.portfolioCompleted.title),n.a.createElement("img",{className:"title-marco",id:"marco-".concat(this.props.index),src:this.props.marcoServices,alt:t(this.props.portfolioCompleted.title)}))),n.a.createElement("p",{style:{color:o.title},className:"link"}," ",this.props.portfolioCompleted.link)))}}])&&w(o.prototype,a),i&&w(o,i),t}(),N=Object(a.d)()(j);o(154);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,x(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t,o=e.style,r=e.portfolioOngoing;return n.a.createElement("div",{className:"portfolio-ongoing"},n.a.createElement("div",{className:"portfolio-container"},r.backgroundLarge||r.background?n.a.createElement("img",{className:"portfolio-background",src:r.backgroundLarge?r.backgroundLarge:r.background,alt:r.title}):"",n.a.createElement("div",{className:"logoContainer",id:"001"},n.a.createElement("img",{className:"marco2",src:r.marcoDesktop?r.marcoDesktop:r.marco,alt:""}),n.a.createElement("img",{className:"logo2",src:r.icon,alt:r.title}),r.background?n.a.createElement("img",{className:"background-mobile",src:r.background,alt:r.title}):"",n.a.createElement("img",{className:"marco",src:r.marco,alt:""}),n.a.createElement("li",{className:"backgroundLogoContainer"},n.a.createElement("img",{className:"logo",src:r.icon,alt:r.title})),r.iconSmall?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"backgroundLogoContainer",href:r.link,rel:"noreferrer noopener",target:"_blank",style:{display:"block"}},n.a.createElement("img",{className:"logo3",src:r.iconSmall,alt:r.title})),n.a.createElement("p",{style:{color:o.link},className:"txtLink"},t(this.props.portfolioOngoing.txtLink))):""),n.a.createElement("div",{className:"textContainer"},n.a.createElement("p",{style:{color:o.title},className:"title"},t(r.title)),n.a.createElement("p",{className:"description-text"}," ",t(r.description)),r.link?n.a.createElement("a",{style:{color:o.link},href:r.link,target:"_blank",rel:"noreferrer noopener",className:"link"}," ",r.linkTitle):"")))}}])&&P(o.prototype,a),i&&P(o,i),t}(),R=Object(a.d)()(T);o(155);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,M(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t;e.i18n;return n.a.createElement("div",{className:"RedesUnity"},n.a.createElement("img",{className:"RedesUnity-background",src:this.props.redes.puntos,alt:"background redes"}),n.a.createElement("div",{className:"RedesUnity-container"},n.a.createElement("div",{className:"RedesUnity-logoContainer"},n.a.createElement("p",{style:{color:this.props.redes.color},className:"RedesUnity-followUs"},t("misc.followus")),n.a.createElement("div",null,n.a.createElement("a",{href:this.props.redes.facebook,target:"_blank"},n.a.createElement("i",{className:"fab fa-facebook-f fa-3x",style:{color:this.props.redes.color}})),n.a.createElement("a",{href:this.props.redes.twitter,target:"_blank"},n.a.createElement("i",{className:"fab fa-twitter fa-3x",style:{color:this.props.redes.color}})),n.a.createElement("a",{href:this.props.redes.instagram,target:"_blank"},n.a.createElement("i",{className:"fab fa-instagram fa-3x",style:{color:this.props.redes.color}})),n.a.createElement("a",{href:this.props.redes.youtube,target:"_blank"},n.a.createElement("i",{className:"fab fa-youtube fa-3x",style:{color:this.props.redes.color}})),n.a.createElement("a",{href:this.props.redes.linkedin,target:"_blank"},n.a.createElement("i",{className:"fab fa-linkedin fa-3x",style:{color:this.props.redes.color}}))))))}}])&&A(o.prototype,a),i&&A(o,i),t}(),G=Object(a.d)()(J),z=o(53);o(156),o(157),o(158),o(159),o(160),o(161),o(162);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,I(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this.props,t=e.t,o=e.data;return n.a.createElement("div",{className:"Unit ".concat(o.unit),style:{background:"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%)"}},n.a.createElement(m,{unity:o}),o.clients&&o.clients.active?n.a.createElement("div",null," ",n.a.createElement("p",{style:{color:o.style.title},className:"title-services"},t("unit.clients")),n.a.createElement("div",{className:"container-clients"},o.clients.list.map(function(e,t){return n.a.createElement(v,{key:t,client:e,color:o.style.general})}))):"",o.portfolio&&o.portfolio.active?n.a.createElement("div",null," ",n.a.createElement("p",{style:{color:o.style.title},className:"title-services"},t("unit.portfolio")),n.a.createElement("div",{className:"container-portfolioCompleted"},o.portfolio.completed.map(function(e,t){return n.a.createElement(N,{key:t,index:t,portfolioCompleted:e,style:o.style,marcoServices:o.marcoServices})})),n.a.createElement("div",{className:"container-portfolioOngoing"},o.portfolio.ongoing.map(function(e,t){return n.a.createElement(R,{key:t,index:t,portfolioOngoing:e,marcoLargelOngoing:o.marcoLargelOngoing,style:o.style})}))):"",n.a.createElement(z.default,null),n.a.createElement(G,{redes:o.redes}))}}])&&B(o.prototype,a),i&&B(o,i),t}();t.default=Object(i.withRouteData)(Object(a.d)()(W))}}]);
//# sourceMappingURL=src-views-units-Unit.117d2424.js.map