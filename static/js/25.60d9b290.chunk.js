(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{143:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),i=a(5),s=a(7),l=a(0),c=a.n(l),u=a(18),m=a.n(u),p=a(144),d=a.n(p),h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},c.a.createElement("div",{className:"block m-0"},c.a.createElement("div",{className:"block-content p-0"},c.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&c.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),this.props.goto_orders_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"}))),c.a.createElement("p",{className:"form-control search-input"},this.props.logo&&c.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?c.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&c.a.createElement(d.a,{left:!0},c.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?c.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},c.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),c.a.createElement("br",null),c.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},c.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,c.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&c.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},c.a.createElement("i",{className:"si si-magnifier"}),c.a.createElement(m.a,{duration:"500"}))))))))}}]),t}(l.Component);h.contextTypes={router:function(){return null}},t.a=h},144:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,i=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(m.hasOwnProperty(i))return m[i];if(!r!=!(e&&o)){var s=[n,a];a=s[0],n=s[1]}var l=a?"-100%":n?"100%":"0",u=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+l+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+l+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return m[i]=(0,c.animation)(u),m[i]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,i=void 0===o?c.defaults.duration:o,l=e.delay,u=void 0===l?c.defaults.delay:l,m=e.count,p=void 0===m?c.defaults.count:m,d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),h={make:n,duration:void 0===r?i:r,delay:u,forever:a,count:p,style:{animationFillMode:"both"}};return d.left,d.right,d.mirror,d.opposite,(0,s.default)(d,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,i=a(32),s=(o=i)&&o.__esModule?o:{default:o},l=a(1),c=a(27),u={out:l.bool,left:l.bool,right:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},m={};r.propTypes=u,t.default=r,e.exports=t.default},168:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"a",function(){return c});var n=a(46),r=a(14),o=a(11),i=a.n(o),s=function(){return function(e){i.a.post(r.r).then(function(t){var a=t.data;return e({type:n.b,payload:a})}).catch(function(e){console.log(e)})}},l=function(e){return function(t){i.a.post(r.H,{slug:e}).then(function(e){var a=e.data;return t({type:n.c,payload:a})}).catch(function(e){console.log(e)})}},c=function(){return function(e){return e({type:n.a,payload:[]})}}},229:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(6),i=a(5),s=a(7),l=a(0),c=a.n(l),u=a(168),m=a(13),p=a(26),d=a(74),h=a(143),g=a(25),f=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.clearSinglePage(),this.props.getSinglePage(this.props.match.params.slug)}},{key:"render",value:function(){var e=this.props.single_page;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{boxshadow:!0,has_title:!1,disable_search:!0}),0===e.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid p-0 pb-50"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 pt-80"},c.a.createElement(g.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},c.a.createElement("rect",{x:"20",y:"25",rx:"0",ry:"0",width:"155",height:"22"}),c.a.createElement("rect",{x:"20",y:"120",rx:"0",ry:"0",width:"180",height:"18"}),c.a.createElement("rect",{x:"20",y:"145",rx:"0",ry:"0",width:"380",height:"18"}),c.a.createElement("rect",{x:"20",y:"170",rx:"0",ry:"0",width:"300",height:"18"}),c.a.createElement("rect",{x:"20",y:"195",rx:"0",ry:"0",width:"150",height:"18"}),c.a.createElement("rect",{x:"20",y:"220",rx:"0",ry:"0",width:"350",height:"18"}),c.a.createElement("rect",{x:"20",y:"245",rx:"0",ry:"0",width:"150",height:"18"}))))))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{seotitle:e.name,seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:e.name,ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:e.name,twitterdescription:localStorage.getItem("seoTwitterDescription")}),c.a.createElement("div",{className:"container-fluid p-0 pb-50"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{className:"text-muted pt-80"},e.name),c.a.createElement("hr",null),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body}})))))),window.innerWidth>=768?c.a.createElement(d.a,null):null)}}]),t}(l.Component);t.default=Object(m.b)(function(e){return{single_page:e.pages.single_page}},{getSinglePage:u.c,clearSinglePage:u.a})(f)}}]);