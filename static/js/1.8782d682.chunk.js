(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,a){"use strict";var r=a(3),n=a(4),s=a(6),l=a(5),i=a(7),c=a(0),o=a.n(c),m=a(18),d=a.n(m),u=a(144),p=a.n(u),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},o.a.createElement("div",{className:"block m-0"},o.a.createElement("div",{className:"block-content p-0"},o.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&o.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&o.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},o.a.createElement("i",{className:"si si-arrow-left"}),o.a.createElement(d.a,{duration:"500"})),this.props.goto_orders_page&&o.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},o.a.createElement("i",{className:"si si-arrow-left"}),o.a.createElement(d.a,{duration:"500"})),this.props.goto_accounts_page&&o.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},o.a.createElement("i",{className:"si si-arrow-left"}),o.a.createElement(d.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&o.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},o.a.createElement("i",{className:"si si-arrow-left"}),o.a.createElement(d.a,{duration:"500"}))),o.a.createElement("p",{className:"form-control search-input"},this.props.logo&&o.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?o.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&o.a.createElement(p.a,{left:!0},o.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?o.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},o.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),o.a.createElement("br",null),o.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},o.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,o.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&o.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},o.a.createElement("i",{className:"si si-magnifier"}),o.a.createElement(d.a,{duration:"500"}))))))))}}]),t}(c.Component);h.contextTypes={router:function(){return null}},t.a=h},160:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return m});var r=a(36),n=a(14),s=a(11),l=a.n(s),i=function(e,t){return function(a){l.a.post(n.J,{email:e,password:t}).then(function(e){var t=e.data;return a({type:r.a,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){e=[],t({type:r.b,payload:e})}},o=function(e,t){return function(a){l.a.post(n.W,{token:t,user_id:e}).then(function(e){var t={delivery_user:e.data,order_history:e.data.data.orders};return a({type:r.d,payload:t})}).catch(function(e){console.log(e)})}},m=function(e){return function(t){t({type:r.c,payload:e})}}},170:function(e,t,a){"use strict";var r=a(3),n=a(4),s=a(6),l=a(5),i=a(7),c=a(0),o=a.n(c),m=a(149),d=a.n(m),u=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.transaction;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"slider-wrapper transaction-wrapper"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"mr-4"},"deposit"===e.type&&o.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-success min-width-125"},localStorage.getItem("walletDepositText")),"withdraw"===e.type&&o.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-danger min-width-125"},localStorage.getItem("walletWithdrawText"))),o.a.createElement("div",{className:"mr-4 font-w700"},localStorage.getItem("currencyFormat"),e.amount/100),o.a.createElement("div",{className:"mr-4"},e.meta.description),o.a.createElement("div",{className:"mr-4"},o.a.createElement(d.a,{fromNow:!0},e.created_at)))))}}]),t}(c.Component);t.a=u},219:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),s=a(6),l=a(5),i=a(7),c=a(0),o=a.n(c),m=a(143),d=a(25),u=a(26),p=a(246),h=a(13),y=a(88),g=a(14),v=a(11),b=a.n(v),E=a(160),f=a(18),N=a.n(f),w=a(149),_=a.n(w),x=a(33),k=a(55),O=a.n(k),S=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.add("bg-grey")}},{key:"render",value:function(){var e=this.props.new_orders;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"delivery mb-100",style:{paddingTop:"4rem"}},o.a.createElement("h3",{className:"text-center p-3 bg-dark text-light mb-0"},localStorage.getItem("deliveryNewOrdersTitle")),0===e.length?o.a.createElement("p",{className:"text-center text-muted py-15 mb-10 bg-white"},localStorage.getItem("deliveryNoNewOrders")):o.a.createElement("div",{className:"px-15 mt-20"},e.map(function(e,t){return o.a.createElement(O.a,{top:!0,delay:50*t,key:e.id},o.a.createElement(x.a,{to:"/delivery/orders/".concat(e.unique_order_id),className:"block delivery",style:{position:"relative"}},o.a.createElement("div",{className:"block-header block-header-default new-order"},o.a.createElement("h3",{className:"block-title"},"#",e.unique_order_id.substr(e.unique_order_id.length-6)),o.a.createElement("div",{className:"block-options"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-light"},o.a.createElement(_.a,{fromNow:!0},e.updated_at)))),o.a.createElement("div",{className:"block-content"},o.a.createElement("p",{className:""},o.a.createElement("b",null,e.restaurant.name)," ",o.a.createElement("span",{className:"pull-right d-flex align-items-center"}," ",o.a.createElement("i",{className:"si si-pointer mr-2"}),o.a.createElement("span",{style:{maxWidth:"100px",display:"block"},className:"truncate-text"},e.address)))),o.a.createElement(N.a,{duration:"500",hasTouch:"true"})))}))))}}]),t}(c.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.add("bg-grey")}},{key:"render",value:function(){var e=this.props.accepted_orders;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"delivery mb-100",style:{paddingTop:"4rem"}},o.a.createElement("h3",{className:"text-center p-3 bg-dark text-light mb-0"},localStorage.getItem("deliveryAcceptedOrdersTitle")),0===e.length?o.a.createElement("p",{className:"text-center text-muted py-15 mb-10 bg-white"},localStorage.getItem("deliveryNoOrdersAccepted")):o.a.createElement("div",{className:"px-15 mt-20"},e.map(function(e,t){return o.a.createElement(O.a,{top:!0,delay:50*t,key:e.id},o.a.createElement(x.a,{to:"/delivery/orders/".concat(e.unique_order_id),className:"block delivery",style:{position:"relative"}},o.a.createElement("div",{className:"block-header block-header-default accepted"},o.a.createElement("h3",{className:"block-title"},"#",e.unique_order_id.substr(e.unique_order_id.length-6)),o.a.createElement("div",{className:"block-options"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-light"},o.a.createElement(_.a,{fromNow:!0},e.updated_at)))),o.a.createElement("div",{className:"block-content"},o.a.createElement("p",{className:""},o.a.createElement("b",null,e.restaurant.name)," ",o.a.createElement("span",{className:"pull-right d-flex align-items-center"}," ",o.a.createElement("i",{className:"si si-pointer mr-2"}),o.a.createElement("span",{style:{maxWidth:"100px",display:"block"},className:"truncate-text"},e.address)))),o.a.createElement(N.a,{duration:"500",hasTouch:"true"})))}))))}}]),t}(c.Component),I=a(214),T=a.n(I),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.order;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"slider-wrapper transaction-wrapper"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"mr-4 font-w700 min-width-75"},"#",e.order.unique_order_id.substr(e.order.unique_order_id.length-6)),o.a.createElement("div",{className:"mr-4"},e.is_complete?o.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-success min-width-125"},localStorage.getItem("deliveryCompletedText")):o.a.createElement("span",{className:"btn btn-square btn-sm  btn-outline-danger  min-width-125"},localStorage.getItem("deliveryOnGoingText"))),"COD"===e.order.payment_mode?o.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-success min-width-175 mr-4"},localStorage.getItem("deliveryCashOnDelivery"),": ",localStorage.getItem("currencyFormat"),e.order.payable):o.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-success min-width-175 mr-4"},o.a.createElement("i",{className:"si si-check mr-5"})," ",localStorage.getItem("deliveryOnlinePayment")),o.a.createElement("div",{className:"mr-4"},e.order.address),o.a.createElement("div",{className:"mr-4"},o.a.createElement(_.a,{fromNow:!0},e.updated_at)))))}}]),t}(c.Component),D=a(170),q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={show_orderhistory:!0,show_earnings:!1},a.filterOnGoingOrders=function(){a.props.updateDeliveryOrderHistory(a.props.delivery_user.data.orders.filter(function(e){return 0===e.is_complete})),a.setState({show_orderhistory:!0,show_earnings:!1})},a.filterCompletedOrders=function(){a.props.updateDeliveryOrderHistory(a.props.delivery_user.data.orders.filter(function(e){return 1===e.is_complete})),a.setState({show_orderhistory:!0,show_earnings:!1})},a.showEarningsTable=function(){a.setState({show_orderhistory:!1,show_earnings:!0})},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.delivery_user;this.props.updateDeliveryUserInfo(e.data.id,e.data.auth_token),document.getElementsByTagName("body")[0].classList.remove("bg-grey")}},{key:"render",value:function(){var e=this,t=this.props,a=t.delivery_user,r=t.logoutDeliveryUser,n=t.order_history;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-get-direction mr-15",onClick:function(){return r(a)}},localStorage.getItem("deliveryLogoutDelivery")," ",o.a.createElement("i",{className:"si si-logout"}))),o.a.createElement("div",{className:"mb-100",style:{paddingTop:"4rem"}},o.a.createElement("h3",{className:"text-center p-3 bg-dark text-light mb-0",style:{fontSize:"1.2rem"}},localStorage.getItem("deliveryWelcomeMessage")," ",a.data.name),o.a.createElement("div",{className:"row gutters-tiny px-15 mt-20"},"true"===localStorage.getItem("enableDeliveryGuyEarning")&&o.a.createElement("div",{className:"col-12",onClick:function(){return e.showEarningsTable()}},o.a.createElement("div",{className:"block shadow-light delivery-block-earning",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"float-right mt-10"},o.a.createElement("i",{className:"si si-wallet fa-3x"})),o.a.createElement("div",{className:"font-size-h3 font-w600"},localStorage.getItem("currencyFormat"),o.a.createElement(T.a,{to:a.data.wallet_balance,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},digits:2}),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryEarningsText")))),o.a.createElement(N.a,{duration:"500",hasTouch:"true"}))),o.a.createElement("div",{className:"col-6 col-xl-3",onClick:function(){return e.filterOnGoingOrders()}},o.a.createElement("div",{className:"block shadow-medium delivery-block-ongoing",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"float-right mt-10"},o.a.createElement("i",{className:"si si-control-forward fa-3x"})),o.a.createElement(T.a,{to:a.data.onGoingCount,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryOnGoingText"))),o.a.createElement(N.a,{duration:"500",hasTouch:"true"}))),o.a.createElement("div",{className:"col-6 col-xl-3",onClick:function(){return e.filterCompletedOrders()}},o.a.createElement("div",{className:"block shadow-medium delivery-block-completed",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"float-right mt-10"},o.a.createElement("i",{className:"si si-check fa-3x"})),o.a.createElement(T.a,{to:a.data.completedCount,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryCompletedText"))),o.a.createElement(N.a,{duration:"500",hasTouch:"true"})))),this.state.show_orderhistory&&o.a.createElement("div",{className:"orders-history px-15 mt-20"},n&&n.length>0?n.map(function(e){return o.a.createElement(C,{order:e,key:e.id})}):null),this.state.show_earnings&&o.a.createElement("div",{className:"delivery-earnings"},a.data.earnings&&a.data.earnings.map(function(e){return o.a.createElement(D.a,{key:e.id,transaction:e})}))))}}]),t}(c.Component),F=Object(h.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,order_history:e.delivery_user.order_history}},{updateDeliveryUserInfo:E.d,updateDeliveryOrderHistory:E.c})(q),L=a(218),W=(a(215),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={play:!1},a.audio=new Audio("/assets/audio/notification1.mp3"),a.__refreshOrders=function(){a.props.delivery_user.success&&(a.refs.btnSpinner&&a.refs.btnSpinner.classList.add("fa-spin"),setTimeout(function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.remove("fa-spin")},2e3),a.props.getDeliveryOrders(a.props.delivery_user.data.auth_token))},a.getLocationName=function(e){try{return console.log("Came to try"),o.a.createElement("span",{style:{maxWidth:"100px",display:"block"},className:"truncate-text"},JSON.parse(e).address)}catch(t){return null}},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.delivery_user.success&&this.props.getDeliveryOrders(this.props.delivery_user.data.auth_token),this.refreshSetInterval=setInterval(function(){e.__refreshOrders()},15e3)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.delivery_orders;t.new_orders&&e.delivery_orders.new_orders.length>t.new_orders.length&&(this.audio.play(),"vibrate"in navigator&&navigator.vibrate(["100","120","100"]))}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshSetInterval)}},{key:"render",value:function(){return window.innerWidth>768?o.a.createElement(p.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),o.a.createElement(m.a,{logo:!0,boxshadow:!0,has_title:!0,disable_search:!0,disable_back_button:!0,has_delivery_icon:!0}),o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-get-direction mr-15",onClick:this.__refreshOrders},localStorage.getItem("deliveryOrdersRefreshBtn")," ",o.a.createElement("i",{ref:"btnSpinner",className:"fa fa-refresh"}))),o.a.createElement(L.d,null,o.a.createElement("div",{className:"content font-size-xs clearfix footer-fixed",style:{display:"block",width:"100%",padding:"0",height:"5rem"}},o.a.createElement(L.b,null,o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-bell fa-2x"})," ",o.a.createElement("br",null),localStorage.getItem("deliveryFooterNewTitle"),o.a.createElement(N.a,{duration:"500",hasTouch:"true"}))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-grid fa-2x"})," ",o.a.createElement("br",null),localStorage.getItem("deliveryFooterAcceptedTitle"),o.a.createElement(N.a,{duration:"500",hasTouch:"true"}))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-user fa-2x"})," ",o.a.createElement("br",null)," ",localStorage.getItem("deliveryFooterAccount"),o.a.createElement(N.a,{duration:"500",hasTouch:"true"}))))),o.a.createElement(L.c,null,this.props.delivery_orders.new_orders?o.a.createElement(S,{getLocationName:this.getLocationName,new_orders:this.props.delivery_orders.new_orders}):o.a.createElement("div",{className:"pt-50"},o.a.createElement(d.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#fafafa",secondaryColor:"#eee"},o.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"30",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"70",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"173",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"173",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"213",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"316",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"316",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"356",rx:"0",ry:"0",width:"250",height:"23"})))),o.a.createElement(L.c,null,this.props.delivery_orders.accepted_orders?o.a.createElement(j,{getLocationName:this.getLocationName,accepted_orders:this.props.delivery_orders.accepted_orders}):o.a.createElement("div",{className:"pt-50"},o.a.createElement(d.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#fafafa",secondaryColor:"#eee"},o.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"30",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"70",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"173",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"173",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"213",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"316",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"316",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"356",rx:"0",ry:"0",width:"250",height:"23"})))),o.a.createElement(L.c,null,o.a.createElement(F,{delivery_user:this.props.delivery_user,logoutDeliveryUser:this.props.logoutDeliveryUser}))))}}]),t}(c.Component));t.default=Object(h.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,delivery_orders:e.delivery_orders.delivery_orders}},{getDeliveryOrders:function(e){return function(t){b.a.post(g.m,{token:e}).then(function(e){var a=e.data;return t({type:y.a,payload:a})}).catch(function(e){console.log(e)})}},logoutDeliveryUser:E.b})(W)}}]);