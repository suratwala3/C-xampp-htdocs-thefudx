(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{148:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),s=a(5),c=a(7),i=a(0),l=a.n(i),u=a(15),d=a.n(u),p=a(149),m=a.n(p),h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},l.a.createElement("div",{className:"block m-0"},l.a.createElement("div",{className:"block-content p-0"},l.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&l.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(d.a,{duration:"500"})),this.props.goto_orders_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(d.a,{duration:"500"})),this.props.goto_accounts_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(d.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(d.a,{duration:"500"}))),l.a.createElement("p",{className:"form-control search-input"},this.props.logo&&l.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?l.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&l.a.createElement(m.a,{left:!0},l.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?l.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},l.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),l.a.createElement("br",null),l.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},l.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,l.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&l.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},l.a.createElement("i",{className:"si si-magnifier"}),l.a.createElement(d.a,{duration:"500"}))))))))}}]),t}(i.Component);h.contextTypes={router:function(){return null}},t.a=h},149:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,s=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(d.hasOwnProperty(s))return d[s];if(!r!=!(e&&o)){var c=[n,a];a=c[0],n=c[1]}var i=a?"-100%":n?"100%":"0",u=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+i+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+i+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return d[s]=(0,l.animation)(u),d[s]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,s=void 0===o?l.defaults.duration:o,i=e.delay,u=void 0===i?l.defaults.delay:i,d=e.count,p=void 0===d?l.defaults.count:d,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),h={make:n,duration:void 0===r?s:r,delay:u,forever:a,count:p,style:{animationFillMode:"both"}};return m.left,m.right,m.mirror,m.opposite,(0,c.default)(m,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=a(54),c=(o=s)&&o.__esModule?o:{default:o},i=a(1),l=a(39),u={out:i.bool,left:i.bool,right:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},d={};r.propTypes=u,t.default=r,e.exports=t.default},150:function(e,t,a){"use strict";a.d(t,"d",function(){return c}),a.d(t,"f",function(){return i}),a.d(t,"e",function(){return l}),a.d(t,"i",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"g",function(){return p}),a.d(t,"j",function(){return m}),a.d(t,"c",function(){return h}),a.d(t,"h",function(){return f}),a.d(t,"k",function(){return g}),a.d(t,"a",function(){return y});var n=a(17),r=a(11),o=a(10),s=a.n(o),c=function(e,t,a,o,c,i,l){return function(u){s.a.post(r.M,{name:e,email:t,password:a,accessToken:o,phone:c,provider:i,address:l}).then(function(e){var t=e.data;return u({type:n.c,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,o,c){return function(i){s.a.post(r.T,{name:e,email:t,phone:a,password:o,address:c}).then(function(e){var t=e.data;return i({type:n.e,payload:t})}).catch(function(e){console.log(e)})}},l=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),localStorage.removeItem("lastSavedNotificationToken"),t({type:n.d,payload:e}),t({type:n.f,payload:!1}),t({type:n.b,payload:[]})}},u=function(e,t,a){return function(o){return s.a.post(r.bb,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return o({type:n.i,payload:t})}).catch(function(e){console.log(e)})}},d=function(e,t){return function(a){s.a.post(r.g,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:n.f,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t,a,o){return function(c){return s.a.post(r.X,{email:e,phone:t,accessToken:a,provider:o}).then(function(e){var t=e.data;return c({type:n.g,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(a){s.a.post(r.cb,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:n.j,payload:t})}).catch(function(e){console.log(e)})}},h=function(e,t){return function(a){s.a.post(r.K,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:n.b,payload:t})}).catch(function(e){console.log(e)})}},f=function(e){return function(t){s.a.post(r.Y,{email:e}).then(function(e){var a=e.data;return t({type:n.h,payload:a})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){s.a.post(r.db,{email:e,code:t}).then(function(e){var t=e.data;return a({type:n.k,payload:t})}).catch(function(e){console.log(e)})}},y=function(e,t,a){return function(o){s.a.post(r.d,{email:e,code:t,password:a}).then(function(e){var t=e.data;return o({type:n.a,payload:t})}).catch(function(e){console.log(e)})}}},158:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return u});var n=a(33),r=a(11),o=a(10),s=a.n(o),c=function(e,t,a){return function(o){s.a.post(r.j,{user_id:e,token:t,restaurant_id:a}).then(function(e){var t=e.data;return o({type:n.b,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,o,c,i,l,u){return function(d){s.a.post(r.U,{token:t,user_id:e,latitude:a,longitude:o,address:c,house:i,tag:l,get_only_default_address:u}).then(function(e){var t=e.data;return d({type:n.c,payload:t})}).catch(function(e){console.log(e)})}},l=function(e,t,a){return function(o){s.a.post(r.h,{token:a,user_id:e,address_id:t}).then(function(e){var t=e.data;return o({type:n.a,payload:t})}).catch(function(e){console.log(e)})}},u=function(e,t,a){return function(o){return s.a.post(r.Z,{token:a,user_id:e,address_id:t}).then(function(e){var t=e.data;return o({type:n.d,payload:t})}).catch(function(e){console.log(e)})}}},166:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),s=a(5),c=a(7),i=a(0),l=a.n(i),u=a(15),d=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.address;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:!n.is_operational&&this.props.fromCartPage?"address-not-usable":" "},a.data.default_address_id===n.id?l.a.createElement("button",{className:"btn btn-lg pull-right btn-address-default selected"},l.a.createElement("i",{className:"si si-check",style:{color:localStorage.getItem("storeColor")}}),l.a.createElement(d.a,{duration:200})):l.a.createElement(l.a.Fragment,null,this.props.fromCartPage?l.a.createElement(l.a.Fragment,null,n.is_operational?l.a.createElement("button",{className:"btn btn-lg pull-right btn-address-default",onClick:function(){return e.props.handleSetDefaultAddress(n.id,n)}},l.a.createElement("i",{className:"si si-check"}),l.a.createElement(d.a,{duration:200})):l.a.createElement("span",{className:"text-danger text-uppercase font-w600 text-sm08"}," ",l.a.createElement("i",{className:"si si-close"})," ",localStorage.getItem("addressDoesnotDeliverToText"))):l.a.createElement("button",{className:"btn btn-lg pull-right btn-address-default",onClick:function(){return e.props.handleSetDefaultAddress(n.id,n)}},l.a.createElement("i",{className:"si si-check"}),l.a.createElement(d.a,{duration:200}))),null!==n.tag&&l.a.createElement("h6",{className:"m-0 text-uppercase"},n.tag),l.a.createElement("div",{className:"mb-10",style:{minHeight:"50px"}},null!==n.house&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"m-0 text-capitalize"},n.house)),l.a.createElement("p",{className:"m-0 text-capitalize text-sm08"},n.address)),!this.props.fromCartPage&&this.props.deleteButton&&l.a.createElement(l.a.Fragment,null,a.data.default_address_id!==n.id&&l.a.createElement("span",{className:"btn-edit-address",style:{color:localStorage.getItem("storeColor")},onClick:function(){return e.props.handleDeleteAddress(n.id)}},localStorage.getItem("deleteAddressText"))),l.a.createElement("hr",null)))}}]),t}(i.Component);t.a=p},224:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(6),s=a(5),c=a(7),i=a(0),l=a.n(i),u=a(158),d=a(166),p=a(148),m=a(30),h=a(31),f=a(15),g=a.n(f),y=a(248),b=a(14),v=a(150),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={no_address:!1,loading:!1,restaurant_id:null},a.handleSaveNewAddress=function(e){var t=a.props.user;t.success&&(a.setState({loading:!0}),a.props.saveAddress(t.data.id,t.data.auth_token,e))},a.handleSetDefaultAddress=function(e,t){var n=a.props.user;n.success&&a.props.setDefaultAddress(n.data.id,e,n.data.auth_token).then(function(){new Promise(function(e){var a={lat:t.latitude,lng:t.longitude,address:t.address,house:t.house,tag:t.tag};localStorage.setItem("userSetAddress",JSON.stringify(a)),e("Address Saved")}).then(function(){a.context.router.history.goBack()})})},a.handleDeleteAddress=function(e){var t=a.props.user;t.success&&(a.setState({loading:!0}),a.props.deleteAddress(t.data.id,e,t.data.auth_token))},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user;"undefined"!==typeof this.props.location.state?this.setState({restaurant_id:this.props.location.state.restaurant_id},function(){null!==localStorage.getItem("storeColor")&&t.success&&(e.props.getAddresses(t.data.id,t.data.auth_token,e.state.restaurant_id),e.props.updateUserInfo(t.data.id,t.data.auth_token))}):null!==localStorage.getItem("storeColor")&&t.success&&(this.props.getAddresses(t.data.id,t.data.auth_token,this.state.restaurant_id),this.props.updateUserInfo(t.data.id,t.data.auth_token))}},{key:"componentWillReceiveProps",value:function(e){0===e.addresses.length&&this.setState({no_address:!0,loading:!1}),this.setState({loading:!1})}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return l.a.createElement(y.a,{to:"/"});if(null===localStorage.getItem("storeColor"))return l.a.createElement(y.a,{to:"/"});var t=this.props,a=t.addresses,n=t.user;return n.success?l.a.createElement(l.a.Fragment,null,this.state.loading?l.a.createElement("div",{className:"height-100 overlay-loading"},l.a.createElement("div",null,l.a.createElement("img",{src:"/assets/img/loading-food.gif",alt:localStorage.getItem("pleaseWaitText")}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{boxshadow:!0,has_title:!0,title:localStorage.getItem("accountManageAddress"),disable_search:!0}),l.a.createElement("div",{className:"block-content block-content-full bg-white pt-80 pb-80 height-100-percent"},0===a.length&&!this.state.no_address&&l.a.createElement(m.a,{height:600,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:"30",rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:"60",rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:"90",rx:"0",ry:"0",width:"100",height:"18"}),l.a.createElement("rect",{x:"0",y:170,rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:200,rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:230,rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:260,rx:"0",ry:"0",width:"100",height:"18"}),l.a.createElement("rect",{x:"0",y:340,rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:370,rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:400,rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:430,rx:"0",ry:"0",width:"100",height:"18"})),0===a.length&&l.a.createElement("div",{className:"text-center mt-50 font-w600 text-muted"},localStorage.getItem("noAddressText")),a.length&&a.map(function(t){return l.a.createElement(d.a,{handleDeleteAddress:e.handleDeleteAddress,deleteButton:!0,key:t.id,address:t,user:n,fromCartPage:null!==e.state.restaurant_id,handleSetDefaultAddress:e.handleSetDefaultAddress})})),l.a.createElement(h.a,{to:"/search-location",className:"btn-new-address",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("buttonNewAddress"),l.a.createElement(g.a,{duration:200})))):l.a.createElement(y.a,{to:"/login"})}}]),t}(i.Component);E.contextTypes={router:function(){return null}};t.default=Object(b.b)(function(e){return{user:e.user.user,addresses:e.addresses.addresses}},{getAddresses:u.b,saveAddress:u.c,deleteAddress:u.a,updateUserInfo:v.i,setDefaultAddress:u.d})(E)}}]);