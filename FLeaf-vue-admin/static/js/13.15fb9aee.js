(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{176:function(e,n){!function(){"use strict";var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=void 0!==e&&e.exports,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,a=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=0,a=t.length,i={};o<a;o++)if((e=t[o])&&e[1]in n){for(o=0;o<e.length;o++)i[t[0][o]]=e[o];return i}return!1}(),i={change:a.fullscreenchange,error:a.fullscreenerror},s={request:function(e){var t=a.requestFullscreen;e=e||n.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[t]():e[t](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){n[a.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var o=i[e];o&&n.addEventListener(o,t,!1)},off:function(e,t){var o=i[e];o&&n.removeEventListener(o,t,!1)},raw:a};a?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(n[a.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[a.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(n[a.fullscreenEnabled])}}}),t?e.exports=s:window.screenfull=s):t?e.exports=!1:window.screenfull=!1}()},380:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.footer[data-v-27de9f97] {\n  padding: 10px;\n  line-height: 23px;\n  font-size: 14px;\n  text-align: center;\n  color: #495060;\n  background-color: #e7e7e7;\n}\n.footer span[data-v-27de9f97] {\n  margin: 0 12px;\n}\n",""])},381:function(e,n,t){var o=t(380);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("49f5db7e",o,!0,{})},382:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"\n.body[data-v-5bd3338f] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.body > div[data-v-5bd3338f] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.body-scroll[data-v-5bd3338f] {\n  position: relative;\n}\n.body-scroll > div[data-v-5bd3338f] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  height: calc(100vh - 103px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n",""])},383:function(e,n,t){var o=t(382);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("6a93e0fe",o,!0,{})},384:function(e,n,t){var o=t(171);(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.layout-logo[data-v-4dba6e51] {\n  display: block;\n  width: 100%;\n  height: 60px;\n  padding: 8px 0 8px 66px;\n  line-height: 42px;\n  font-size: 22px;\n  font-family: cursive;\n  font-weight: 600;\n  background: url("+o(t(170))+") left center no-repeat;\n  background-size: contain;\n  border-radius: 6px;\n}\n.layout-logo .layout-logo-title[data-v-4dba6e51] {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-transition: width .2s ease .2s;\n  -o-transition: width .2s ease .2s;\n  transition: width .2s ease .2s;\n}\n.layout-logo-collapsed[data-v-4dba6e51] {\n  background: url("+o(t(170))+") center no-repeat;\n  background-size: contain;\n  -webkit-transition: all .2s base;\n  -o-transition: all .2s base;\n  transition: all .2s base;\n}\n.layout-logo-collapsed .layout-logo-title[data-v-4dba6e51] {\n  width: 0px;\n  -webkit-transition: width .2s ease;\n  -o-transition: width .2s ease;\n  transition: width .2s ease;\n}\n",""])},385:function(e,n,t){var o=t(384);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("2b5cc21a",o,!0,{})},386:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.header[data-v-0e3ce32f] {\n  height: 60px;\n  padding: 0 16px;\n  font-size: 14px;\n  line-height: 60px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.header .header-title[data-v-0e3ce32f] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.header .header-user[data-v-0e3ce32f] {\n  margin-left: 16px;\n  font-size: 14px;\n}\n.header .header-user .header-log-icon[data-v-0e3ce32f] {\n  cursor: pointer;\n}\n.header .menu-icon[data-v-0e3ce32f] {\n  -webkit-transition: all .3s;\n  -o-transition: all .3s;\n  transition: all .3s;\n  cursor: pointer;\n}\n.header .rotate-icon[data-v-0e3ce32f] {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.header-theme-dark[data-v-0e3ce32f] {\n  color: #fff;\n}\n.header-theme-light[data-v-0e3ce32f] {\n  background-color: #fff;\n}\n",""])},387:function(e,n,t){var o=t(386);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("2d7ff12e",o,!0,{})},388:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"",""])},389:function(e,n,t){var o=t(388);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("1ffa70ec",o,!0,{})},390:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"\n.dropdown-menu-title[data-v-511732f8] {\n  margin: 0 24px;\n}\n",""])},391:function(e,n,t){var o=t(390);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("6c2fd680",o,!0,{})},392:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.shrink-menu[data-v-4fe7452f] {\n  padding: 8px 0;\n}\n.shrink-menu .ivu-dropdown[data-v-4fe7452f] {\n  display: block;\n}\n.shrink-menu .pd-content[data-v-4fe7452f] {\n  padding: 12px 8px;\n  text-align: center;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.shrink-menu .pd-content i[data-v-4fe7452f] {\n  font-size: 20px;\n}\n.shrink-menu .pd-content[data-v-4fe7452f]:hover {\n  background-color: #54d6fc;\n  color: #fff;\n}\n.shrink-menu-dark[data-v-4fe7452f] {\n  color: #fff;\n  background-color: #495060;\n}\n.shrink-menu-dark *[data-v-4fe7452f] {\n  color: #fff;\n}\n.shrink-menu-dark .pd-content[data-v-4fe7452f]:hover {\n  background-color: #212630;\n  color: #fff;\n}\n.shrink-menu-light[data-v-4fe7452f] {\n  background-color: #fff;\n}\n",""])},393:function(e,n,t){var o=t(392);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("01e9134c",o,!0,{})},394:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"",""])},395:function(e,n,t){var o=t(394);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("7835247a",o,!0,{})},396:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.nav-theme-dark[data-v-2bd2e87d] {\n  color: #fff;\n  background-color: #495060;\n}\n.nav-theme-light[data-v-2bd2e87d] {\n  background-color: #fff;\n}\n",""])},397:function(e,n,t){var o=t(396);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("bb382128",o,!0,{})},398:function(e,n,t){(e.exports=t(11)(!1)).push([e.i,"/*\n* less 全局变量\n*/\n/*\n  layout\n*/\n.dropdown-theme-dark {\n  color: #fff;\n  background-color: #495060;\n}\n.dropdown-theme-dark > div,\n.dropdown-theme-dark li {\n  color: #fff;\n  background-color: #495060;\n}\n.dropdown-theme-dark li:hover {\n  background-color: #212630;\n}\n.dropdown-theme-dark li::before {\n  background-color: #495060;\n}\n.dropdown-theme-dark .ivu-dropdown-item-divided {\n  border-top-color: #fff;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown {\n  color: #fff;\n  background-color: #495060;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown li {\n  color: #fff !important;\n  background-color: #495060;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown li:hover {\n  background-color: #212630 !important;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown li::before {\n  background-color: #495060;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown .ivu-dropdown-item-divided {\n  border-top-color: #fff;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown .ivu-dropdown-item:hover {\n  background-color: #212630;\n}\n.dropdown-submenu-theme-dark .ivu-select-dropdown .ivu-dropdown-item .ivu-menu-item {\n  padding: 8px 0;\n}\n.spin-fix {\n  position: relative;\n}\n::-webkit-scrollbar {\n  width: 8px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.4);\n  margin-right: 5px;\n}\n::-webkit-scrollbar-thumb:hover {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: #777;\n  opacity: .8;\n}\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n  margin-top: 1.3em;\n  margin-bottom: 1em;\n}\nh1 {\n  font-size: 24px;\n}\nh2 {\n  font-size: 18px;\n}\nh3 {\n  font-size: 16px;\n}\na {\n  color: #54d6fc;\n  text-decoration: none;\n}\na:hover {\n  color: #fbbc05;\n  text-decoration: none;\n}\nimg {\n  border-style: none;\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-size: 12px;\n  line-height: 1.5;\n}\ninput::-ms-clear {\n  display: none;\n}\ninput::-ms-reveal {\n  display: none;\n}\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.default-color {\n  color: #54d6fc;\n}\n.warn-color {\n  color: #fbbc05;\n}\n.error-color {\n  color: #ea4335;\n}\n.success-color {\n  color: #34a853;\n}\n.disabled-color {\n  color: #e5e5e5;\n}\n.default-bg {\n  background-color: #54d6fc;\n  color: #fff;\n}\n.warn-bg {\n  background-color: #fbbc05;\n  color: #fff;\n}\n.error-bg {\n  background-color: #ea4335;\n  color: #fff;\n}\n.success-bg {\n  background-color: #34a853;\n  color: #fff;\n}\n.t-center {\n  text-align: center;\n}\n.t-left {\n  text-align: left;\n}\n.t-right {\n  text-align: right;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clear-float:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.display-table-middle {\n  display: table;\n  height: 100%;\n}\n.display-table-middle > div {\n  display: table-cell;\n  vertical-align: middle;\n}\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n}\n.hide {\n  display: none;\n}\n.show {\n  display: block;\n}\n.v-hide {\n  visibility: hidden;\n}\n.v-show {\n  visibility: visible;\n}\n.o-hide {\n  opacity: 0;\n}\n.o-show {\n  opacity: 1;\n}\n.show-opacity {\n  opacity: 1;\n}\n.hide-opacity {\n  opacity: 0;\n}\n.inline-div {\n  display: inline-block;\n}\n.chart-box {\n  height: 300px;\n}\n.chart-box2 {\n  height: 600px;\n}\n.margin-t-1 {\n  margin-top: 8px;\n}\n.margin-t-2 {\n  margin-top: 16px;\n}\n.margin-b-1 {\n  margin-bottom: 8px;\n}\n.margin-b-2 {\n  margin-bottom: 16px;\n}\n.pointer {\n  cursor: pointer;\n}\n.tooltips {\n  position: absolute;\n  max-width: 200px;\n  height: auto;\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1';\n  font-size: 14px;\n  color: #fff;\n  text-align: left;\n  /*border: 1px solid #999;*/\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  /*box-shadow: 3px 3px 1px #999;*/\n  padding: 8px;\n  display: none;\n  word-wrap: break-word;\n  word-break: break-all;\n  z-index: 4;\n}\n.prop-name--required {\n  position: relative;\n  padding-left: 8px;\n}\n.prop-name--required:after {\n  content: ' *';\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #ea4335;\n}\n.error-border {\n  border: 1px solid #ea4335;\n}\n.wrapper {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  -webkit-animation: wrapper--fade 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n          animation: wrapper--fade 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n.wrapper .app-layout {\n  -ms-flex: 1;\n      flex: 1;\n}\n@-webkit-keyframes wrapper--fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes wrapper--fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n.sider-logo {\n  overflow: hidden;\n}\n.sider-dark {\n  background-color: #495060;\n  color: #fff;\n}\n.sider-light {\n  position: relative;\n  background-color: #fff !important;\n  color: #333 ;\n}\n.sider-light::after {\n  content: '';\n  height: calc(100% - 60px);\n  width: 1px;\n  position: absolute;\n  top: 60px;\n  right: 0;\n  background: #dddee1;\n}\n.body-content {\n  padding: 8px;\n}\n.body-content > div {\n  padding: 8px;\n  border-radius: 6px;\n  border: 1px solid #efefef;\n  background-color: #fff;\n}\n",""])},399:function(e,n,t){var o=t(398);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(10).default)("1c5c1cd2",o,!0,{})},412:function(e,n,t){"use strict";t.r(n);var o=t(7),a=t.n(o),i=t(36),s=t(41),r=t(19),l=t.n(r),d=t(1),c=t.n(d),u=t(3),p=t(13),h={name:"Menu",mixins:[p.a],props:{mode:{validator:function(e){return Object(u.l)(e,["horizontal","vertical"])},default:"vertical"},theme:{validator:function(e){return Object(u.l)(e,["light","dark","primary"])},default:"light"},activeName:{type:[String,Number]},openNames:{type:Array,default:function(){return[]}},accordion:{type:Boolean,default:!1},width:{type:String,default:"240px"}},data:function(){return{currentActiveName:this.activeName,openedNames:[]}},computed:{classes:function(){var e=this.theme;return"vertical"===this.mode&&"primary"===this.theme&&(e="light"),["ivu-menu","ivu-menu-"+e,c()({},"ivu-menu-"+this.mode,this.mode)]},styles:function(){var e={};return"vertical"===this.mode&&(e.width=this.width),e}},methods:{updateActiveName:function(){void 0===this.currentActiveName&&(this.currentActiveName=-1),this.broadcast("Submenu","on-update-active-name",!1),this.broadcast("MenuItem","on-update-active-name",this.currentActiveName)},updateOpenKeys:function(e){var n=[].concat(l()(this.openedNames)).indexOf(e);if(this.accordion&&Object(u.g)(this,"Submenu").forEach(function(e){e.opened=!1}),n>=0){var t=null;Object(u.g)(this,"Submenu").forEach(function(n){n.name===e&&(t=n,n.opened=!1)}),Object(u.h)(t,"Submenu").forEach(function(e){e.opened=!0}),Object(u.g)(t,"Submenu").forEach(function(e){e.opened=!1})}else if(this.accordion){var o=null;Object(u.g)(this,"Submenu").forEach(function(n){n.name===e&&(o=n,n.opened=!0)}),Object(u.h)(o,"Submenu").forEach(function(e){e.opened=!0})}else Object(u.g)(this,"Submenu").forEach(function(n){n.name===e&&(n.opened=!0)});var a=Object(u.g)(this,"Submenu").filter(function(e){return e.opened}).map(function(e){return e.name});this.openedNames=[].concat(l()(a)),this.$emit("on-open-change",a)},updateOpened:function(){var e=this,n=Object(u.g)(this,"Submenu");n.length&&n.forEach(function(n){e.openedNames.indexOf(n.name)>-1?n.opened=!0:n.opened=!1})}},mounted:function(){var e=this;this.updateActiveName(),this.openedNames=[].concat(l()(this.openNames)),this.updateOpened(),this.$on("on-menu-item-select",function(n){e.currentActiveName=n,e.$emit("on-select",n)})},watch:{openNames:function(e){this.openedNames=e},activeName:function(e){this.currentActiveName=e},currentActiveName:function(){this.updateActiveName()}}},m=t(2),f=Object(m.a)(h,function(){var e=this.$createElement;return(this._self._c||e)("ul",{class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports,v={data(){return{menu:Object(u.f)(this,"Menu")}},computed:{hasParentSubmenu(){return!!Object(u.f)(this,"Submenu")},parentSubmenuNum(){return Object(u.h)(this,"Submenu").length},mode(){return this.menu.mode}}},b={name:"MenuGroup",mixins:[v],props:{title:{type:String,default:""}},data:function(){return{prefixCls:"ivu-menu"}},computed:{groupStyle:function(){return this.hasParentSubmenu&&"horizontal"!==this.mode?{paddingLeft:43+28*(this.parentSubmenuNum-1)+"px"}:{}}}},g=Object(m.a)(b,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{class:[e.prefixCls+"-item-group"]},[t("div",{class:[e.prefixCls+"-item-group-title"],style:e.groupStyle},[e._v(e._s(e.title))]),e._v(" "),t("ul",[e._t("default")],2)])},[],!1,null,null,null).exports,y={name:"MenuItem",mixins:[p.a,v],props:{name:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1}},data:function(){return{active:!1}},computed:{classes:function(){var e;return["ivu-menu-item",(e={},c()(e,"ivu-menu-item-active",this.active),c()(e,"ivu-menu-item-selected",this.active),c()(e,"ivu-menu-item-disabled",this.disabled),e)]},itemStyle:function(){return this.hasParentSubmenu&&"horizontal"!==this.mode?{paddingLeft:43+24*(this.parentSubmenuNum-1)+"px"}:{}}},methods:{handleClick:function(){this.disabled||(Object(u.f)(this,"Submenu")?this.dispatch("Submenu","on-menu-item-select",this.name):this.dispatch("Menu","on-menu-item-select",this.name))}},mounted:function(){var e=this;this.$on("on-update-active-name",function(n){e.name===n?(e.active=!0,e.dispatch("Submenu","on-update-active-name",n)):e.active=!1})}},w=Object(m.a)(y,function(){var e=this,n=e.$createElement;return(e._self._c||n)("li",{class:e.classes,style:e.itemStyle,on:{click:function(n){return n.stopPropagation(),e.handleClick(n)}}},[e._t("default")],2)},[],!1,null,null,null).exports,x=t(69),k=t(46);const C={beforeEnter(e){Object(u.a)(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){Object(u.m)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(Object(u.a)(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){Object(u.m)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};var _={name:"CollapseTransition",functional:!0,render:(e,{children:n})=>e("transition",{on:C},n)},S={name:"Submenu",mixins:[p.a,v],components:{Icon:k.a,Drop:x.a,CollapseTransition:_},props:{name:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1}},data:function(){return{prefixCls:"ivu-menu",active:!1,opened:!1,dropWidth:parseFloat(Object(u.k)(this.$el,"width"))}},computed:{classes:function(){var e;return["ivu-menu-submenu",(e={},c()(e,"ivu-menu-item-active",this.active&&!this.hasParentSubmenu),c()(e,"ivu-menu-opened",this.opened),c()(e,"ivu-menu-submenu-disabled",this.disabled),c()(e,"ivu-menu-submenu-has-parent-submenu",this.hasParentSubmenu),c()(e,"ivu-menu-child-item-active",this.active),e)]},accordion:function(){return this.menu.accordion},dropStyle:function(){var e={};return this.dropWidth&&(e.minWidth=this.dropWidth+"px"),e},titleStyle:function(){return this.hasParentSubmenu&&"horizontal"!==this.mode?{paddingLeft:43+24*(this.parentSubmenuNum-1)+"px"}:{}}},methods:{handleMouseenter:function(){var e=this;this.disabled||"vertical"!==this.mode&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.menu.updateOpenKeys(e.name),e.opened=!0},250))},handleMouseleave:function(){var e=this;this.disabled||"vertical"!==this.mode&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.menu.updateOpenKeys(e.name),e.opened=!1},150))},handleClick:function(){if(!this.disabled&&"horizontal"!==this.mode){var e=this.opened;this.accordion&&this.$parent.$children.forEach(function(e){"Submenu"===e.$options.name&&(e.opened=!1)}),this.opened=!e,this.menu.updateOpenKeys(this.name)}}},watch:{mode:function(e){"horizontal"===e&&this.$refs.drop.update()},opened:function(e){"vertical"!==this.mode&&(e?(this.dropWidth=parseFloat(Object(u.k)(this.$el,"width")),this.$refs.drop.update()):this.$refs.drop.destroy())}},mounted:function(){var e=this;this.$on("on-menu-item-select",function(n){return"horizontal"===e.mode&&(e.opened=!1),e.dispatch("Menu","on-menu-item-select",n),!0}),this.$on("on-update-active-name",function(n){Object(u.f)(e,"Submenu")&&e.dispatch("Submenu","on-update-active-name",n),Object(u.g)(e,"Submenu")&&Object(u.g)(e,"Submenu").forEach(function(e){e.active=!1}),e.active=n})}},L=Object(m.a)(S,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{class:e.classes,on:{mouseenter:e.handleMouseenter,mouseleave:e.handleMouseleave}},[t("div",{ref:"reference",class:[e.prefixCls+"-submenu-title"],style:e.titleStyle,on:{click:function(n){return n.stopPropagation(),e.handleClick(n)}}},[e._t("title"),e._v(" "),t("Icon",{class:[e.prefixCls+"-submenu-title-icon"],attrs:{type:"ios-arrow-down"}})],2),e._v(" "),"vertical"===e.mode?t("collapse-transition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],class:[e.prefixCls]},[e._t("default")],2)]):t("transition",{attrs:{name:"slide-up"}},[t("Drop",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],ref:"drop",style:e.dropStyle,attrs:{placement:"bottom"}},[t("ul",{class:[e.prefixCls+"-drop-list"]},[e._t("default")],2)])],1)],1)},[],!1,null,null,null).exports;f.Group=g,f.Item=w,f.Sub=L;var F=f,I=[{title:"概览",name:"home",url:"/home",icon:"home",isFLIcon:!1},{title:"布局",name:"layout",url:"/layout",icon:"layout",isFLIcon:!0,children:[{title:"Flex",name:"flex",url:"/layout/flex",icon:"leaf",isFLIcon:!1},{title:"Grid",name:"grid",url:"/layout/grid",icon:"leaf",isFLIcon:!1}]},{title:"iview",name:"iview",url:"/iview",icon:"ios-play-outline",isFLIcon:!1,children:[{title:"填坑",name:"pits",url:"/iview/pits",icon:"ios-paw",isFLIcon:!1}]},{title:"组件",name:"componentsview",url:"/componentsview",icon:"cube",isFLIcon:!1,children:[{title:"提示Message",name:"CMessage",url:"/componentsview/Message",icon:"chatbox-working",isFLIcon:!1}]},{title:"vue",name:"vue",url:"/vue",icon:"play",isFLIcon:!1},{title:"FLicons",name:"flicons",url:"/flicons",icon:"travel",isFLIcon:!0}],O=60,M=78,E=t(15),N=t(9),j={name:"ExpandMenu",components:{MenuItem:F.Item,Submenu:F.Sub,Icon:E.a,FLIcon:N.e},data:function(){return{}},props:{data:{type:[Object,Array]},theme:{type:String,default:"dark"},childrenKey:{type:String,default:"children"}},computed:{isChildren:function(){return this.data[this.childrenKey]&&this.data[this.childrenKey].length}}};var $=function(e){t(395)},D=Object(m.a)(j,function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isChildren?t("Submenu",{attrs:{name:e.data.name}},[t("template",{slot:"title"},[[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],e._v(" "),t("span",[e._v(e._s(e.data.title))])],2),e._v(" "),e._l(e.data.children,function(n,o){return t("ExpandMenu",{key:o,attrs:{data:n,"children-key":e.childrenKey}})})],2):t("MenuItem",{attrs:{name:e.data.name}},[[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],e._v(" "),t("span",[e._v(e._s(e.data.title))])],2)},[],!1,$,"data-v-6b0d3570",null).exports,z=t(51),B=t(63),P=t(62),A=t(61),T={name:"PDropdownMenu",components:{Dropdown:A.a,DropdownMenu:P.a,DropdownItem:B.a,Icon:E.a,FLIcon:N.e},data:function(){return{}},props:{data:{type:[Object,Array]},theme:{type:String,default:"dark"},childrenKey:{type:String,default:"children"}},computed:{dropdownClass:function(){return"dropdown-theme-"+this.theme}},methods:{handleMenuClick:function(e){this.$emit("on-select",e)}}};var K=function(e){t(391)},R=Object(m.a)(T,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Dropdown",{class:e.dropdownClass,attrs:{placement:"right-start"},on:{"on-click":e.handleMenuClick}},[e._t("dropContent"),e._v(" "),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e._l(e.data,function(n,o){return[n.children&&n.children.length?t("PDropdownMenu",{key:"dpchildren"+o,attrs:{data:n.children,"children-key":e.childrenKey},on:{"on-select":e.handleMenuClick}},[t("template",{slot:"dropContent"},[[n.isFLIcon?t("FLIcon",{attrs:{type:n.icon}}):t("Icon",{attrs:{type:n.icon}})],e._v(" "),t("span",{staticClass:"dropdown-menu-title"},[e._v(e._s(n.title))]),e._v(" "),t("Icon",{staticClass:"right",attrs:{type:"ios-arrow-right"}})],2)],2):t("DropdownItem",{key:"dpchild"+o,attrs:{name:n.name}},[[n.isFLIcon?t("FLIcon",{attrs:{type:n.icon}}):t("Icon",{attrs:{type:n.icon}})],e._v(" "),t("span",{staticClass:"dropdown-menu-title"},[e._v(e._s(n.title))])],2)]})],2)],2)},[],!1,K,"data-v-511732f8",null).exports,W={name:"ShrinkMenu",components:{MenuItem:F.Item,Submenu:F.Sub,Icon:E.a,FLIcon:N.e,PDropdownMenu:R,Dropdown:A.a,DropdownMenu:P.a,DropdownItem:B.a,Button:z.a},data:function(){return{}},props:{data:{type:[Object,Array]},theme:{type:String,default:"dark"},childrenKey:{type:String,default:"children"}},computed:{pdClass:function(){return["shrink-menu","shrink-menu-"+this.theme]},dropdownClass:function(){return"dropdown-theme-"+this.theme},isChildren:function(){return this.data[this.childrenKey]&&this.data[this.childrenKey].length}},methods:{handleClick:function(e){this.$emit("on-select",e)},handleMenuClick:function(e){this.$emit("on-select",e)}}};var H=function(e){t(393)},q=Object(m.a)(W,function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isChildren?t("div",{class:e.pdClass},[t("PDropdownMenu",{attrs:{data:e.data.children,"children-key":e.childrenKey,theme:e.theme},on:{"on-select":e.handleMenuClick}},[t("div",{staticClass:"pd-content",attrs:{slot:"dropContent"},on:{click:function(n){e.handleClick(e.data.name)}},slot:"dropContent"},[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],1)])],1):t("div",{class:e.pdClass},[t("Dropdown",{class:e.dropdownClass,attrs:{placement:"right-start"},on:{"on-click":e.handleMenuClick}},[t("div",{staticClass:"pd-content",on:{click:function(n){e.handleClick(e.data.name)}}},[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],1),e._v(" "),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:e.data.name}},[e._v(e._s(e.data.title))])],1)],1)],1)},[],!1,H,"data-v-4fe7452f",null).exports,G={name:"LevelMenu",components:{MenuItem:F.Item,Submenu:F.Sub,Icon:E.a,FLIcon:N.e},data:function(){return{}},props:{data:{type:Object,default:function(){return{}}},theme:{type:String,default:"dark"},childrenKey:{type:String,default:"children"}},computed:{isChildren:function(){return this.data[this.childrenKey]&&this.data[this.childrenKey].length},dropdownSubmenuClass:function(){return"dropdown-submenu-theme-"+this.theme}}};var Y=function(e){t(389)},U={name:"NavMenu",data:function(){return{navsData:I,childrenKey:"children",activeName:"",openNames:[]}},components:{Menu:F,ExpandMenu:D,ShrinkMenu:q,LevelMenu:Object(m.a)(G,function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isChildren?t("Submenu",{class:e.dropdownSubmenuClass,attrs:{name:e.data.name}},[t("template",{slot:"title"},[[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],e._v(" "),t("span",[e._v(e._s(e.data.name))])],2),e._v(" "),e._l(e.data.children,function(n,o){return t("LevelMenu",{key:o,attrs:{data:n,"children-key":e.childrenKey}})})],2):t("MenuItem",{attrs:{name:e.data.name}},[[e.data.isFLIcon?t("FLIcon",{attrs:{type:e.data.icon}}):t("Icon",{attrs:{type:e.data.icon}})],e._v(" "),t("span",[e._v(e._s(e.data.name))])],2)},[],!1,Y,"data-v-0ed3af42",null).exports},props:{isCollapsed:{type:Boolean,default:!1},layout:{type:String,default:"left"},theme:{type:String,default:"dark"}},watch:{$route:function(){this.setMenuName()}},created:function(){this.setMenuName()},computed:{navThemeClass:function(){return["nav-theme-"+this.theme]},menuitemClasses:function(){return["nav-expand-menu",this.isCollapsed?"collapsed-menu":""]}},methods:{setMenuName:function(){var e=this.$route,n=e.name,t=e.matched[1].name;this.activeName=n,this.openNames=[t]},handleMenuClick:function(e){e.indexOf("/")<0?this.$router.push({name:e}):this.$router.push(e)}}};var V=function(e){t(397)},J=Object(m.a)(U,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav-box"},["left"==e.layout?[t("div",{class:e.navThemeClass},[t("Menu",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!isCollapsed"}],class:e.menuitemClasses,attrs:{mode:"vertical",width:"auto",theme:e.theme,"active-name":e.activeName,"open-names":e.openNames},on:{"on-select":e.handleMenuClick}},e._l(e.navsData,function(n,o){return t("ExpandMenu",{key:"expand"+o,attrs:{data:n,"children-key":e.childrenKey}})})),e._v(" "),e._l(e.navsData,function(n,o){return t("ShrinkMenu",{directives:[{name:"show",rawName:"v-show",value:e.isCollapsed,expression:"isCollapsed"}],key:"shrink"+o,attrs:{data:n,theme:e.theme,"children-key":e.childrenKey},on:{"on-select":e.handleMenuClick}})})],2)]:[t("div",{class:e.navThemeClass,attrs:{id:"sd"}},[t("Menu",{class:e.menuitemClasses,attrs:{mode:"horizontal",width:"auto",theme:e.theme,"active-name":e.activeName,"open-names":e.openNames},on:{"on-select":e.handleMenuClick}},e._l(e.navsData,function(n,o){return t("LevelMenu",{key:"level"+o,attrs:{data:n,theme:e.theme,"children-key":e.childrenKey}})}))],1)]],2)},[],!1,V,"data-v-2bd2e87d",null).exports,Q=t(133),X=t(132),Z=t(136),ee=t(130),ne=t(30),te=t(31),oe={name:"Logo",props:{isCollapsed:{type:Boolean,default:!1}},computed:{logoClasses:function(){return["layout-logo",this.isCollapsed?"layout-logo-collapsed":""]}}};var ae=function(e){t(385)},ie=Object(m.a)(oe,function(){var e=this.$createElement,n=this._self._c||e;return n("router-link",{class:this.logoClasses,attrs:{to:"/"}},[n("span",{staticClass:"layout-logo-title"},[this._v("FLVadmin")])])},[],!1,ae,"data-v-4dba6e51",null).exports,se=t(176),re=t.n(se),le={name:"FLHeader",data:function(){return{}},components:{Header:i.a.Header,Row:te.a,Col:ne.a,Avatar:ee.a,Icon:E.a,Dropdown:A.a,DropdownMenu:P.a,DropdownItem:B.a,RadioGroup:Z.a,Radio:X.a,Logo:ie,NavMenu:J,iSwitch:Q.a},computed:a()({},Object(s.c)("login",{user:"getUser"}),Object(s.c)({isFix:"isFix",theme:"theme",layout:"layout",isCollapsed:"isCollapsed"}),{headerClass:function(){return"header header-theme-"+this.theme},dropdownClass:function(){return"dropdown-theme-"+this.theme},isLogin:function(){return this.user&&this.user.userName},isLogo:function(){return"top"==this.layout},rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]}}),methods:a()({},Object(s.b)("login",["toLogout"]),Object(s.b)(["handleThemeChange","handleLayoutChange","handleLayoutFixChange"]),{setLayoutChange:function(e){var n=this,t={layout:e};this.$Loading.start(),this.handleLayoutChange(t).then(function(){n.$Loading.finish()}).catch(function(e){n.$Message.error(e)})},setThemeChange:function(e){var n=this,t={theme:e};this.$Loading.start(),this.handleThemeChange(t).then(function(){n.$Loading.finish()})},handleFixChange:function(e){var n=this,t={isFix:e};this.$Loading.start(),this.handleLayoutFixChange(t).then(function(){n.$Loading.finish()})},handleLogin:function(){this.handleLoginOut()},handleLoginOut:function(){var e=this;this.toLogout().then(function(n){e.$Message.success(n||"success!"),e.$router.push("/login")}).catch(function(){e.$Message.error("error!")})},collapsedSider:function(){this.$store.commit("handleCollapsedSider",{isCollapsed:!this.isCollapsed})},handleScreenFull:function(){re.a.enabled&&re.a.request()}})};var de=function(e){t(387)},ce=Object(m.a)(le,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Header",{class:e.headerClass},[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{xs:12,sm:12,md:4,lg:4}},[e.isLogo?t("Logo"):t("Icon",{class:e.rotateIcon,style:{margin:"20px 20px 0"},attrs:{type:"navicon-round",size:"24"},nativeOn:{click:function(n){return e.collapsedSider(n)}}})],1),e._v(" "),t("Col",{attrs:{xs:0,sm:0,md:14,lg:14}},[t("div",{directives:[{name:"show",rawName:"v-show",value:"left"==e.layout,expression:"layout == 'left'"}],staticClass:"t-center default-color header-title"},[e._v("FireLeaf-Vue-Admin")]),e._v(" "),t("NavMenu",{directives:[{name:"show",rawName:"v-show",value:"top"==e.layout,expression:"layout == 'top'"}],attrs:{layout:e.layout,theme:e.theme}})],1),e._v(" "),t("Col",{staticClass:"t-center",attrs:{xs:12,sm:12,md:6,lg:6}},[t("Row",{staticClass:"header-config",attrs:{type:"flex",justify:"end"}},[t("Col",{attrs:{span:"3"}},[t("Icon",{staticClass:"pointer",attrs:{type:"arrow-resize",title:"全屏"},nativeOn:{click:function(n){return e.handleScreenFull(n)}}})],1),e._v(" "),t("Col",{attrs:{span:"6"}},[t("Dropdown",{class:e.dropdownClass},[t("div",[t("Icon",{attrs:{type:"gear-a"}}),e._v(" 设置")],1),e._v(" "),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",[t("dl",[t("dt",[e._v("菜单布局")]),e._v(" "),t("dd",[t("RadioGroup",{attrs:{value:e.layout},on:{"on-change":e.setLayoutChange}},[t("Radio",{attrs:{label:"left"}},[t("Icon",{attrs:{type:"arrow-left-a"}}),e._v(" "),t("span",[e._v("左侧")])],1),e._v(" "),t("Radio",{attrs:{label:"top"}},[t("Icon",{attrs:{type:"arrow-up-a"}}),e._v(" "),t("span",[e._v("顶部")])],1)],1)],1)])]),e._v(" "),t("DropdownItem",[t("dl",[t("dt",[e._v("主题")]),e._v(" "),t("dd",[t("RadioGroup",{attrs:{value:e.theme},on:{"on-change":e.setThemeChange}},[t("Radio",{attrs:{label:"dark"}},[t("span",[e._v("夜空")])]),e._v(" "),t("Radio",{attrs:{label:"light"}},[t("span",[e._v("明亮")])])],1)],1)])]),e._v(" "),t("DropdownItem",[t("dl",[t("dt",[e._v("布局固定")]),e._v(" "),t("dd",[t("iSwitch",{attrs:{value:e.isFix},on:{"on-change":e.handleFixChange}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("是")]),e._v(" "),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("否")])])],1)])]),e._v(" "),t("DropdownItem",{attrs:{divided:""}},[e._v("系统配置")])],1)],1)],1),e._v(" "),t("Col",{attrs:{span:"12"}},[t("div",{staticClass:" header-user "},[t("Dropdown",{class:e.dropdownClass},[t("div",[t("Avatar",{staticClass:"default-bg",attrs:{src:"https://i.loli.net/2018/05/12/5af662c33a177.jpg"}}),e._v("  "+e._s(e.user?e.user.userName:""))],1),e._v(" "),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",[e.isLogin?[t("div",{on:{click:e.handleLoginOut}},[t("Icon",{staticClass:"header-log-icon",attrs:{type:"log-out",title:"登出"}}),e._v(" 登出")],1)]:[t("div",{on:{click:e.handleLogin}},[t("Icon",{staticClass:"header-log-icon",attrs:{type:"log-in",title:"登录"}}),e._v(" 登录\n                    ")],1)]],2)],1)],1)],1)])],1)],1)],1)],1)},[],!1,de,"data-v-0e3ce32f",null).exports,ue={name:"Body",components:{Content:i.a.Content},computed:a()({},Object(s.c)({isFix:"isFix"}),{bodyClass:function(){return["body",this.isFix?"body-scroll":""]}})};var pe=function(e){t(383)},he=Object(m.a)(ue,function(){var e=this.$createElement,n=this._self._c||e;return n("Content",{class:this.bodyClass},[n("div",[this._t("default")],2)])},[],!1,pe,"data-v-5bd3338f",null).exports,me={name:"FLFooter",components:{Footer:i.a.Footer}};var fe=function(e){t(381)},ve=Object(m.a)(me,function(){var e=this.$createElement,n=this._self._c||e;return n("Footer",{staticClass:"footer"},[n("footer",[this._v("© 2018 \n    "),n("span",{staticClass:"error-color"},[this._v("Follow Your Heart 💖")]),this._v(" "),n("span",{staticClass:"warn-color"},[this._v("迷路的缘 🐌")]),this._v(" "),n("span",{staticClass:"default-color"},[this._v("火舞的叶 🍂")])])])},[],!1,fe,"data-v-27de9f97",null).exports,be=t(49),ge=i.a.Sider,ye=M,we=O,xe={name:"App",components:{Layout:i.a,Sider:ge,FLHeader:ce,Body:he,FLFooter:ve,NavMenu:J,Logo:ie,PBreadcrump:N.g},data:function(){return{COLLAPSED_SIDER_W:ye,HEADER_H:we,isLogin:!0,isCollapsedSider:!1,bodyWidth:0}},created:function(){this.checkRouter()},mounted:function(){var e=this;if(be.a.user&&be.a.isLoginIn()){var n=be.a.user;this.$store.commit("login/LOGIN_SUCCESS",n),this.renderBodyWidth()}else this.$router.push("/login");window.onresize=function(){e.renderBodyWidth()}},computed:a()({},Object(s.c)({isCollapsed:"isCollapsed",layout:"layout",theme:"theme"}),{isShowSider:function(){return"left"==this.layout&&this.isLogin},siderClass:function(){return"sider-"+this.theme}}),watch:{$route:"checkRouter",isCollapsed:"collapsedSider",isShowSider:"renderBodyWidth",isCollapsedSider:"renderBodyWidth"},methods:{renderBodyWidth:function(){var e=0,n=window.innerWidth;e=this.isShowSider?this.isCollapsedSider?n-ye:n-200:n,this.bodyWidth=e},checkRouter:function(){var e=this.$route.path;this.isLogin="/login"!==e&&"/*"!==e},collapsedSider:function(){this.$refs.sider.toggleCollapse()}}};var ke=function(e){t(399)},Ce=Object(m.a)(xe,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("Layout",{staticClass:"app-layout"},[t("Sider",{directives:[{name:"show",rawName:"v-show",value:e.isShowSider,expression:"isShowSider"}],ref:"sider",class:e.siderClass,attrs:{"hide-trigger":"",collapsible:"",width:200,"collapsed-width":e.COLLAPSED_SIDER_W},model:{value:e.isCollapsedSider,callback:function(n){e.isCollapsedSider=n},expression:"isCollapsedSider"}},[t("div",{staticClass:"sider-logo",style:{height:e.HEADER_H+"px"}},[t("Logo",{attrs:{isCollapsed:e.isCollapsed}})],1),e._v(" "),t("NavMenu",{attrs:{isCollapsed:e.isCollapsed,layout:e.layout,theme:e.theme}})],1),e._v(" "),[e.isLogin?t("Layout",[t("FLHeader"),e._v(" "),t("Body",{style:{width:e.bodyWidth+"px"}},[t("PBreadcrump"),e._v(" "),t("div",{staticClass:"body-content"},[t("router-view")],1)],1),e._v(" "),t("FLFooter")],1):t("Layout",[t("Body",{style:{width:e.bodyWidth+"px"}},[t("router-view")],1)],1)]],2)],1)])},[],!1,ke,null,null);n.default=Ce.exports}}]);