(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=a(15),m=a.n(u),d=a(149),p=a.n(d),g=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},i.a.createElement("div",{className:"block m-0"},i.a.createElement("div",{className:"block-content p-0"},i.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&i.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),this.props.goto_orders_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"}))),i.a.createElement("p",{className:"form-control search-input"},this.props.logo&&i.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?i.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&i.a.createElement(p.a,{left:!0},i.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?i.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},i.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),i.a.createElement("br",null),i.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},i.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,i.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&i.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},i.a.createElement("i",{className:"si si-magnifier"}),i.a.createElement(m.a,{duration:"500"}))))))))}}]),t}(s.Component);g.contextTypes={router:function(){return null}},t.a=g},149:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,c=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(m.hasOwnProperty(c))return m[c];if(!r!=!(e&&o)){var l=[n,a];a=l[0],n=l[1]}var s=a?"-100%":n?"100%":"0",u=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return m[c]=(0,i.animation)(u),m[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,c=void 0===o?i.defaults.duration:o,s=e.delay,u=void 0===s?i.defaults.delay:s,m=e.count,d=void 0===m?i.defaults.count:m,p=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),g={make:n,duration:void 0===r?c:r,delay:u,forever:a,count:d,style:{animationFillMode:"both"}};return p.left,p.right,p.mirror,p.opposite,(0,l.default)(p,g,g,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,c=a(54),l=(o=c)&&o.__esModule?o:{default:o},s=a(1),i=a(39),u={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m={};r.propTypes=u,t.default=r,e.exports=t.default},151:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){if(e){var t=parseFloat(e);return t=t.toFixed(2)}return 0}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c});var n=a(42),r=function(e){return{type:n.b,payload:e}},o=function(e){return{type:n.a,payload:e}},c=function(e){return function(t){return console.log("From action",e),t({type:n.c,payload:e})}}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(70),r=a(151),o=function(e){return function(t){var a={productQuantity:e.reduce(function(e,t){return++e},0),totalPrice:e.reduce(function(e,t){var a=0;return t.selectedaddons&&t.selectedaddons.map(function(e){return a+=parseFloat(e.price)}),e+=t.price*t.quantity+a*t.quantity,e=parseFloat(e),Object(r.a)(e),e},0)};t({type:n.a,payload:a})}}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return u}),a.d(t,"e",function(){return m}),a.d(t,"g",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"h",function(){return g}),a.d(t,"a",function(){return f});var n=a(67),r=a(20),o=a(11),c=a(10),l=a.n(c),s=function(e){return function(t){return l.a.post(o.B+"/"+e).then(function(e){var a=e.data;return t({type:r.b,payload:a})}).catch(function(e){console.log(e)})}},i=function(e){return function(t){l.a.post(o.A+"/"+e).then(function(e){var a=e.data;return t({type:r.c,payload:a})}).catch(function(e){console.log(e)})}},u=function(e){return function(t){l.a.post(o.C+"/"+e).then(function(e){var a=e.data;return t({type:r.d,payload:a})}).catch(function(e){console.log(e)})}},m=function(e){return function(t){l.a.post(o.G,{id:e}).then(function(e){var a=e.data;return t({type:r.h,payload:a})}).catch(function(e){console.log(e)})}},d=function(){return function(e){return e({type:r.f,payload:[]})}},p=function(){return function(e){return e({type:r.e,payload:[]})}},g=function(e,t,a,o){return function(c,l){var s=a+t,i=o+t,u=[],m=[];return e&&[e].length>=0&&Object.keys(e).forEach(function(a){e[a].forEach(function(e){u.push(e),m=u.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})})}),m.length>0?c({type:r.g,payload:{items:Object(n.a)({},s,m)}}):m.length<=0?c({type:r.g,payload:{items:Object(n.a)({},i,m)}}):void 0}},f=function(e){return function(t){return t({type:r.a,payload:e})}}},162:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=a(15),m=a.n(u),d=a(144),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a._processAddons=function(e){var t=[];t.selectedaddons=[];for(var n=document.querySelectorAll("input[type=radio]:checked"),r=0;r<n.length;r++)t.selectedaddons.push({addon_category_name:n[r].name,addon_id:n[r].getAttribute("data-addon-id"),addon_name:n[r].getAttribute("data-addon-name"),price:n[r].value});for(var o=document.querySelectorAll("input[type=checkbox]:checked"),c=0;c<o.length;c++)t.selectedaddons.push({addon_category_name:o[c].name,addon_id:o[c].getAttribute("data-addon-id"),addon_name:o[c].getAttribute("data-addon-name"),price:o[c].value});a.props.addProduct(Object.assign(t,e))},a.handlePopupOpen=function(){a.setState({open:!0})},a.handlePopupClose=function(){a.setState({open:!1}),a.props.forceUpdate()},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:this.handlePopupOpen},i.a.createElement("span",{className:"btn-inc"},"+"),i.a.createElement(m.a,{duration:"500"})),i.a.createElement(d.a,{open:this.state.open,onClose:this.handlePopupClose,closeIconSize:32},i.a.createElement("div",{style:{marginTop:"5rem",textAlign:"left"}},i.a.createElement("h3",null,localStorage.getItem("customizationHeading")),t.addon_categories.map(function(e){return i.a.createElement("div",{key:e.id,className:"addon-category-block"},i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"addon-category-name"},e.name),e.addons.length&&i.a.createElement(i.a.Fragment,null,e.addons.map(function(t,a){return i.a.createElement(i.a.Fragment,{key:t.id},i.a.createElement("div",{className:"form-group addon-list"},i.a.createElement("input",{type:"SINGLE"===e.type?"radio":"checkbox",className:"SINGLE"===e.type?"magic-radio":"magic-checkbox",name:e.name,"data-addon-id":t.id,"data-addon-name":t.name,value:t.price,defaultChecked:"SINGLE"===e.type&&0===a&&!0}),"SINGLE"===e.type&&i.a.createElement("label",{htmlFor:t.name}),i.a.createElement("label",{className:"text addon-label",htmlFor:t.name},t.name," ","true"===localStorage.getItem("hidePriceWhenZero")&&"0.00"===t.price?null:i.a.createElement(i.a.Fragment,null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),t.price," ","right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")))))})),i.a.createElement("hr",null)))}),i.a.createElement("button",{className:"btn btn-lg btn-customization-done",onClick:function(){e._processAddons(t),e.handlePopupClose()},style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},localStorage.getItem("customizationDoneBtnText")))))}}]),t}(s.Component);t.a=p},167:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=a(152),m=a(31),d=a(32),p=a.n(d),g=a(15),f=a.n(g),h=a(14),y=a(151),v=a(153),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1,removeProductFromPreviousRestaurant:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart;localStorage.setItem("activeRestaurant",e.restaurant_id);var o=!1;n.forEach(function(t){t.restaurant_id===e.restaurant_id?t.id===e.id&&JSON.stringify(t.selectedaddons)===JSON.stringify(e.selectedaddons)&&(t.quantity+=1,o=!0):(a.setState({removeProductFromPreviousRestaurant:!0}),setTimeout(function(){a.setState({removeProductFromPreviousRestaurant:!1})},4e3),n.splice(0,n.length))}),o||n.push(e),r(n),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,o=n.findIndex(function(t){return t.id===e.id});o>=0&&(n.forEach(function(t){t.id===e.id&&(1===t.quantity?n.splice(o,1):t.quantity-=e.quantity)}),r(n),n.length<1&&(a.closeFloatCart(),localStorage.removeItem("activeRestaurant")))},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.cartProducts.length&&this.setState({isOpen:!0})}},{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove)}},{key:"render",value:function(){var e=this.props,t=e.cartTotal,a=e.cartProducts,n=["float-cart"];return this.state.isOpen&&n.push("float-cart--open"),i.a.createElement("div",{className:n.join(" "),style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},this.state.removeProductFromPreviousRestaurant&&i.a.createElement(p.a,{duration:250,bottom:!0},i.a.createElement("div",{className:"auth-error going-different-restaurant-notify"},i.a.createElement("div",{className:""},localStorage.getItem("itemsRemovedMsg")))),a.length?i.a.createElement(m.a,{to:"/cart",delay:200,className:"text-white"},i.a.createElement("span",null,t.productQuantity," ",localStorage.getItem("floatCartItemsText")),i.a.createElement("span",{className:"pl-5 pr-5"},"\xa0|\xa0"),i.a.createElement("span",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),Object(y.a)(t.totalPrice),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),i.a.createElement("span",{className:"pull-right"},localStorage.getItem("floatCartViewCartText")," ",i.a.createElement("i",{className:"si si-basket"})),i.a.createElement(f.a,{duration:"500"})):i.a.createElement("span",null,"\xa0"))}}]),t}(s.Component);t.a=Object(h.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,cartTotal:e.total.data}},{loadCart:u.b,updateCart:v.a,removeProduct:u.c})(b)},169:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,1===this.props.item.is_recommended?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("recommendedBadgeColor")}},localStorage.getItem("recommendedBadgeText")):null,1===this.props.item.is_popular?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("popularBadgeColor")}},localStorage.getItem("popularBadgeText")):null,1===this.props.item.is_new?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("newBadgeColor")}},localStorage.getItem("newBadgeText")):null))}}]),t}(s.Component);t.a=u},170:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=a(148),m=a(30),d=a(129),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={withLinkToRestaurant:!1},a.fixedRestaurantInfo=function(e){a.child&&(e?a.child.heading.classList.add("hidden"):a.child.heading.classList.remove("hidden"))},a.scrollFunc=function(){if(document.documentElement.scrollTop>55){a.fixedRestaurantInfo(!1)}if(document.documentElement.scrollTop<55){a.fixedRestaurantInfo(!0)}},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({withLinkToRestaurant:this.props.withLinkToRestaurant}),this.props.history.location.state&&this.props.history.location.state.fromExplorePage&&this.setState({withLinkToRestaurant:this.props.history.location.state.fromExplorePage}),this.registerScrollEvent()}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"registerScrollEvent",value:function(){window.addEventListener("scroll",this.scrollFunc)}},{key:"removeScrollEvent",value:function(){window.removeEventListener("scroll",this.scrollFunc)}},{key:"render",value:function(){var e=this,t=this.props,a=t.history,n=t.restaurant;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"height-25 bg-white"},i.a.createElement(u.a,{ref:function(t){e.child=t},history:a,boxshadow:!1,has_restaurant_info:!0,restaurant:n,disable_search:!0}),0===n.length?i.a.createElement(m.a,{height:170,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"70",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"85",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"115",rx:"0",ry:"0",width:"165",height:"16"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{to:"../../stores/"+n.slug,className:this.state.withLinkToRestaurant?"":"no-click"},i.a.createElement("div",{className:"pt-50"},i.a.createElement("div",{className:"block-content block-content-full pt-2"},i.a.createElement("img",{src:n.image,alt:n.name,className:"restaurant-image mt-0"})),i.a.createElement("div",{className:"block-content block-content-full restaurant-info"},i.a.createElement("h4",{className:"font-w600 mb-5 text-dark"},n.name),i.a.createElement("div",{className:"font-size-sm text-muted truncate-text text-muted"},n.description),1===n.is_pureveg&&i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"font-size-sm pr-1 text-muted"},localStorage.getItem("pureVegText")),i.a.createElement("img",{src:"/assets/img/various/pure-veg.png",alt:"PureVeg",style:{width:"20px"}})),i.a.createElement("div",{className:"text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"},i.a.createElement("div",{className:"col-2 p-0 text-left"},i.a.createElement("i",{className:"fa fa-star",style:{color:localStorage.getItem("storeColor")}})," ",n.rating),i.a.createElement("div",{className:"col-4 p-0 text-center"},i.a.createElement("i",{className:"si si-clock"})," ",n.delivery_time," ",localStorage.getItem("homePageMinsText")),i.a.createElement("div",{className:"col-6 p-0 text-center"},i.a.createElement("i",{className:"si si-wallet"})," ","left"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,localStorage.getItem("currencyFormat"),n.price_range," "),"right"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,n.price_range,localStorage.getItem("currencyFormat")," "),localStorage.getItem("homePageForTwoText")))))))))}}]),t}(s.Component);t.a=p},227:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(6),c=a(5),l=a(7),s=a(0),i=a.n(s),u=a(152),m=a(156),d=a(162),p=a(32),g=a.n(p),f=a(167),h=a(15),y=a.n(h),v=a(169),b=a(27),E=a.n(b),S=a(248),N=a(170),_=a(14),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={update:!0,is_active:1,loading:!0},a.forceStateUpdate=function(){setTimeout(function(){a.forceUpdate(),a.state.update?a.setState({update:!1}):a.setState({update:!0})},100)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getRestaurantInfo(this.props.match.params.restaurant),this.props.getSingleItem(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){"undefined"===e.restaurant_info.is_active&&this.setState({loading:!0}),1!==e.restaurant_info.is_active&&0!==e.restaurant_info.is_active||(this.setState({loading:!1}),this.setState({is_active:e.restaurant_info.is_active})),this.state.is_active||document.getElementsByTagName("html")[0].classList.add("page-inactive")}},{key:"componentWillUnmount",value:function(){document.getElementsByTagName("html")[0].classList.remove("page-inactive")}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return i.a.createElement(S.a,{to:"/"});if(null===localStorage.getItem("storeColor"))return i.a.createElement(S.a,{to:"/"});var t=this.props,a=t.addProduct,n=t.removeProduct,r=t.cartProducts,o=t.single_item;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{history:this.props.history,restaurant:this.props.restaurant_info,withLinkToRestaurant:!0}),o.id&&i.a.createElement("div",{className:"single-item px-15 mt-20"},i.a.createElement("span",{className:"hidden"},o.quantity=1),i.a.createElement("div",{className:"category-list-item single-item-img",style:{display:"flex",justifyContent:"space-between"}},""!==o.image&&i.a.createElement(E.a,null,i.a.createElement("img",{src:o.image,alt:o.name,style:{width:"100%",height:"auto"}}),i.a.createElement(i.a.Fragment,null,void 0!==r.find(function(e){return e.id===o.id})&&i.a.createElement(g.a,{duration:150},i.a.createElement("div",{className:"quantity-badge-list",style:{backgroundColor:localStorage.getItem("storeColor")}},i.a.createElement("span",null,o.addon_categories.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"si si-check",style:{lineHeight:"1.3rem"}})):i.a.createElement(i.a.Fragment,null,r.find(function(e){return e.id===o.id}).quantity))))))),i.a.createElement("div",{className:"single-item-meta"},i.a.createElement("div",{className:"item-actions pull-right pb-0"},i.a.createElement("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"btnGroupIcons1"},o.addon_categories.length?i.a.createElement("button",{disabled:!0,type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")}},i.a.createElement("span",{className:"btn-dec"},"-"),i.a.createElement(y.a,{duration:"500"})):i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:function(){o.quantity=1,n(o),e.forceStateUpdate()}},i.a.createElement("span",{className:"btn-dec"},"-"),i.a.createElement(y.a,{duration:"500"})),o.addon_categories.length?i.a.createElement(d.a,{product:o,addProduct:a,forceUpdate:this.forceStateUpdate}):i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:function(){a(o),e.forceStateUpdate()}},i.a.createElement("span",{className:"btn-inc"},"+"),i.a.createElement(y.a,{duration:"500"})))),i.a.createElement("div",{className:"item-name font-w600 mt-2"},"true"===localStorage.getItem("showVegNonVegBadge")&&null!==o.is_veg&&i.a.createElement(i.a.Fragment,null,o.is_veg?i.a.createElement("img",{src:"/assets/img/various/veg-icon.png",alt:"Veg",style:{width:"1rem"},className:"mr-1"}):i.a.createElement("img",{src:"/assets/img/various/non-veg-icon.png",alt:"Non-Veg",style:{width:"1rem"},className:"mr-1"})),o.name),i.a.createElement("div",{className:"item-price"},"true"===localStorage.getItem("hidePriceWhenZero")&&"0.00"===o.price?null:i.a.createElement(i.a.Fragment,null,o.old_price>0&&i.a.createElement("span",{className:"strike-text mr-1"}," ","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")," ",o.old_price,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),i.a.createElement("span",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")," ",o.price,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),o.old_price>0&&"true"===localStorage.getItem("showPercentageDiscount")&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"price-percentage-discount mb-0 ml-1",style:{color:localStorage.getItem("cartColorBg")}},parseFloat((parseFloat(o.old_price)-parseFloat(o.price))/parseFloat(o.old_price)*100).toFixed(0),localStorage.getItem("itemPercentageDiscountText")))),o.addon_categories.length>0&&i.a.createElement("span",{className:"ml-2 customizable-item-text",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("customizableItemText"))),i.a.createElement(v.a,{item:o}),null!==o.desc?i.a.createElement("div",{className:"mt-2 mb-100"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.desc}})):i.a.createElement("br",null))),!this.state.loading&&i.a.createElement(i.a.Fragment,null,this.state.is_active?i.a.createElement(f.a,null):i.a.createElement("div",{className:"auth-error no-click"},i.a.createElement("div",{className:"error-shake"},localStorage.getItem("notAcceptingOrdersMsg")))))}}]),t}(s.Component);t.default=Object(_.b)(function(e){return{restaurant_info:e.items.restaurant_info,cartProducts:e.cart.products,single_item:e.items.single_item}},{getRestaurantInfo:m.b,getRestaurantItems:m.d,resetItems:m.g,resetInfo:m.f,getSingleItem:m.e,addProduct:u.a,removeProduct:u.c})(I)}}]);