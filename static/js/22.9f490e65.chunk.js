(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{143:function(e,t,a){"use strict";var r=a(3),n=a(4),l=a(6),s=a(5),o=a(7),i=a(0),c=a.n(i),d=a(18),m=a.n(d),u=a(144),p=a.n(u),g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},c.a.createElement("div",{className:"block m-0"},c.a.createElement("div",{className:"block-content p-0"},c.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&c.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),this.props.goto_orders_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"}))),c.a.createElement("p",{className:"form-control search-input"},this.props.logo&&c.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?c.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&c.a.createElement(p.a,{left:!0},c.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?c.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},c.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),c.a.createElement("br",null),c.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},c.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,c.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&c.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},c.a.createElement("i",{className:"si si-magnifier"}),c.a.createElement(m.a,{duration:"500"}))))))))}}]),t}(i.Component);g.contextTypes={router:function(){return null}},t.a=g},154:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i});var r=a(57),n=a(14),l=a(11),s=a.n(l),o=function(e,t,a,l,o){return function(i){s.a.post(n.S,{token:e,user_id:t,delivery_lat:a,delivery_long:l,heading:o}).then(function(e){var t=e.data;return i({type:r.b,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t){return function(a){s.a.post(n.l,{token:e,order_id:t}).then(function(e){var t=e.data;return a({type:r.a,payload:t})}).catch(function(e){console.log(e)})}}},170:function(e,t,a){"use strict";var r=a(3),n=a(4),l=a(6),s=a(5),o=a(7),i=a(0),c=a.n(i),d=a(13),m=a(154),u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={gpsAccessError:!1,lat:null,lng:null},a.__sendGpsLocation=function(e){a.props.sendDeliveryGuyGpsLocation(a.props.delivery_user.data.auth_token,a.props.delivery_user.data.id,e.coords.latitude,e.coords.longitude,e.coords.heading)},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=navigator&&navigator.geolocation;t&&(navigator.permissions.query({name:"geolocation"}).then(function(t){"granted"===t.state?e.setState({gpsAccessError:!1}):"prompt"===t.state?e.setState({gpsAccessError:!1}):"denied"===t.state&&e.setState({gpsAccessError:!0})}),this.refreshSetInterval=setInterval(function(){t.getCurrentPosition(function(t){console.log("inside send postion api call"),e.__sendGpsLocation(t)},function(t){console.log("Inside error"),console.log(t),e.setState({gpsAccessError:!0})},{enableHighAccuracy:!0})},5e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshSetInterval),console.log("Cleared API CALL")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pt-50"},this.state.gpsAccessError&&c.a.createElement("div",{className:"auth-error location-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("allowLocationAccessMessage")))))}}]),t}(i.Component);t.a=Object(d.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{sendDeliveryGuyGpsLocation:m.b})(u)},231:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),l=a(6),s=a(5),o=a(7),i=a(0),c=a.n(i),d=a(64),m=a(73),u=a(14),p=a(11),g=a.n(p),v=a(143),h=a(25),y=a(26),_=a(149),b=a.n(_),E=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.item;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"display-flex pb-5"},c.a.createElement("span",{className:"order-item-quantity mr-10"},"x",e.quantity),c.a.createElement("div",{className:"flex-auto text-left"},e.name)))}}]),t}(i.Component),f=a(245),N=a(19),k=a.n(N),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.order;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"block-content block-content-full"},c.a.createElement(k.a,{src:e.restaurant.image,placeholder:e.restaurant.placeholder_image},function(t,a){return c.a.createElement("img",{src:t,alt:e.restaurant.name,className:"restaurant-image",style:{filter:a?"blur(1.2px) brightness(0.9)":"none"}})})),c.a.createElement("div",{className:"block-content block-content-full restaurant-info"},c.a.createElement("div",{className:"font-w600 mb-5"},e.restaurant.name),c.a.createElement("div",{className:"font-size-sm text-muted truncate-text"},e.restaurant.description)))}}]),t}(i.Component),O=a(13),w=a(170),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,already_accepted:!1,accepted_order:!1,picked_up:!1,delivered:!1,delivery_pin:"",delivery_pin_error:!1},a.__acceptToDeliver=function(){a.props.acceptToDeliverOrder(a.props.delivery_user.data.auth_token,a.props.delivery_user.data.id,a.props.single_delivery_order.id),a.setState({loading:!0})},a.__pickedUp=function(){a.props.pickupOrder(a.props.delivery_user.data.auth_token,a.props.single_delivery_order.id),a.setState({loading:!0})},a.__delivered=function(){a.props.deliverOrder(a.props.delivery_user.data.auth_token,a.props.single_delivery_order.id,a.state.delivery_pin),a.setState({loading:!0})},a.__getDirectionToRestaurant=function(e,t){var a="http://maps.google.com/maps?q="+e+","+t;window.open(a,"_blank")},a.__getDirectionToUser=function(e){try{JSON.parse(e);var t="http://maps.google.com/maps?q="+JSON.parse(e).lat+","+JSON.parse(e).lng;window.open(t,"_blank")}catch(r){JSON.parse(e);var a="http://maps.google.com/maps?q="+e;window.open(a,"_blank")}},a.__handleDeliveryPinInput=function(e){a.setState({delivery_pin:e.target.value})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.add("bg-grey"),this.props.delivery_user.success&&this.props.getSingleDeliveryOrder(this.props.delivery_user.data.auth_token,this.props.match.params.unique_order_id)}},{key:"componentWillReceiveProps",value:function(e){3===e.single_delivery_order.orderstatus_id&&(e.single_delivery_order.already_accepted&&this.setState({already_accepted:!0}),this.setState({accepted_order:!0}),this.setState({loading:!1})),4===e.single_delivery_order.orderstatus_id&&(this.setState({accepted_order:!0,picked_up:!0}),this.setState({loading:!1})),e.single_delivery_order.delivery_pin_error&&this.setState({delivery_pin_error:!0}),5===e.single_delivery_order.orderstatus_id&&(this.setState({loading:!1}),this.context.router.history.push("/delivery"))}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return c.a.createElement(f.a,{to:"/"});var t=this.props.single_delivery_order;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),c.a.createElement(v.a,{boxshadow:!0,has_title:!0,title:t.unique_order_id,disable_search:!0}),t.id?c.a.createElement(c.a.Fragment,null,this.state.loading&&c.a.createElement("div",{className:"height-100 overlay-loading"},c.a.createElement("div",null,c.a.createElement("img",{src:"/assets/img/loading-food.gif",alt:"Please Wait..."}))),!this.state.delivered&&c.a.createElement(c.a.Fragment,null,this.state.already_accepted?c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("deliveryAlreadyAccepted"))):c.a.createElement(c.a.Fragment,null,this.state.delivery_pin_error&&c.a.createElement("div",{className:"auth-error",style:{zIndex:"9",marginBottom:"4rem"}},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("deliveryInvalidDeliveryPin"))),c.a.createElement("button",{className:"btn btn-clock text-center"},c.a.createElement("i",{className:"si si-clock mr-5"})," ",localStorage.getItem("deliveryOrderPlacedText"),":"," ",c.a.createElement(b.a,{fromNow:!0,interval:5e3},t.updated_at)),c.a.createElement("div",{className:"view-delivery-order",style:{paddingBottom:"20rem"}},c.a.createElement(S,{order:t}),c.a.createElement("div",{className:"clearfix"}),c.a.createElement("hr",null),c.a.createElement("div",{className:"pt-15 px-15"},c.a.createElement("h3",null,localStorage.getItem("deliveryOrderItems")),t.orderitems.map(function(e){return c.a.createElement(E,{item:e,key:e.id})})),c.a.createElement("hr",null),!this.state.picked_up&&c.a.createElement("div",{className:"pt-15 px-15"},c.a.createElement("div",{className:"address restaurant-address"},c.a.createElement("h4",{className:"text-muted"},localStorage.getItem("deliveryRestaurantAddress")),c.a.createElement("p",{className:"m-0"},t.restaurant.address),c.a.createElement("p",{className:"m-0"},t.restaurant.pincode),c.a.createElement("div",{className:"pull-right",onClick:function(){return e.__getDirectionToRestaurant(t.restaurant.latitude,t.restaurant.longitude)}},c.a.createElement("button",{className:"btn btn-get-direction"},c.a.createElement("i",{className:"si si-action-redo mr-5"}),localStorage.getItem("deliveryGetDirectionButton"))),c.a.createElement("div",{className:"clearfix"}))),this.state.picked_up&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pt-15 px-15"},c.a.createElement("div",{className:"customer-address"},c.a.createElement("h4",{className:"text-muted"},localStorage.getItem("deliveryDeliveryAddress")),c.a.createElement("p",{className:"font-weight-bold mb-0"},t.user.name),c.a.createElement("p",{className:"mb-0"},t.user.phone),c.a.createElement("p",{className:"mb-2"},t.address),c.a.createElement("div",{className:"pull-left"},c.a.createElement("a",{className:"btn btn-get-direction",href:"tel:"+t.user.phone},c.a.createElement("i",{className:"si si-call-out mr-5"}),localStorage.getItem("callNowButton")," ")),c.a.createElement("div",{className:"pull-left"},c.a.createElement("button",{className:"btn btn-get-direction",onClick:function(){return e.__getDirectionToUser(t.location)}},c.a.createElement("i",{className:"si si-action-redo mr-5"}),localStorage.getItem("deliveryGetDirectionButton"))),c.a.createElement("div",{className:"clearfix"}))),c.a.createElement("div",{className:"pt-15 px-15"},"COD"===t.payment_mode?c.a.createElement("button",{className:"btn btn-cod"},localStorage.getItem("deliveryCashOnDelivery"),":"," ",localStorage.getItem("currencyFormat"),t.payable):c.a.createElement("button",{className:"btn btn-payed-online"},c.a.createElement("i",{className:"si si-check mr-5"})," ",localStorage.getItem("deliveryOnlinePayment"))),"true"===localStorage.getItem("enableDeliveryPin")&&c.a.createElement("div",{className:"pt-10 px-15 delivery-pin-block"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:localStorage.getItem("deliveryDeliveryPinPlaceholder"),onChange:this.__handleDeliveryPinInput})))))),c.a.createElement("div",{className:"delivery-action"},!this.state.accepted_order&&!this.state.picked_up&&!this.state.delivered&&c.a.createElement("button",{onClick:this.__acceptToDeliver,type:"button",className:"btn btn-accept",style:{backgroundColor:localStorage.getItem("storeColor")}},c.a.createElement("i",{className:"si si-check mr-5"}),localStorage.getItem("deliveryAcceptOrderButton")),this.state.accepted_order&&!this.state.picked_up&&!this.state.delivered&&c.a.createElement("button",{onClick:this.__pickedUp,type:"button",className:"btn btn-accept",style:{backgroundColor:localStorage.getItem("storeColor")}},c.a.createElement("i",{className:"si si-bag mr-5"}),localStorage.getItem("deliveryPickedUpButton")),this.state.accepted_order&&this.state.picked_up&&!this.state.delivered&&c.a.createElement("button",{onClick:this.__delivered,type:"button",className:"btn btn-accept",style:{backgroundColor:localStorage.getItem("storeColor")}},c.a.createElement("i",{className:"si si-check mr-5"}),localStorage.getItem("deliveryDeliveredButton")),this.state.accepted_order&&this.state.picked_up&&this.state.delivered&&c.a.createElement("button",{type:"button",className:"btn btn-accept",style:{backgroundColor:localStorage.getItem("storeColor")}},c.a.createElement("i",{className:"si si-check mr-5"}),localStorage.getItem("deliveryOrderCompletedButton"))))))):c.a.createElement("div",{className:"pt-50"},c.a.createElement(h.a,{height:150,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},c.a.createElement("rect",{x:"20",y:"70",rx:"4",ry:"4",width:"80",height:"78"}),c.a.createElement("rect",{x:"144",y:"85",rx:"0",ry:"0",width:"115",height:"18"}),c.a.createElement("rect",{x:"144",y:"115",rx:"0",ry:"0",width:"165",height:"16"}))),c.a.createElement(w.a,null))}}]),t}(i.Component);x.contextTypes={router:function(){return null}};t.default=Object(O.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,single_delivery_order:e.single_delivery_order.single_delivery_order,accepted_order:e.accepted_order.accepted_order}},{getSingleDeliveryOrder:function(e,t){return function(a){g.a.post(u.D,{token:e,unique_order_id:t}).then(function(e){var t=e.data;return a({type:m.a,payload:t})}).catch(function(e){console.log(e)})}},acceptToDeliverOrder:function(e,t,a){return function(r){g.a.post(u.a,{token:e,delivery_guy_id:t,order_id:a}).then(function(e){var t=e.data;r({type:d.a,payload:t}),r({type:m.a,payload:t})}).catch(function(e){console.log(e)})}},pickupOrder:function(e,t){return function(a){g.a.post(u.M,{token:e,order_id:t}).then(function(e){var t=e.data;a({type:d.c,payload:t}),a({type:m.a,payload:t})}).catch(function(e){console.log(e)})}},deliverOrder:function(e,t,a){return function(r){g.a.post(u.h,{token:e,order_id:t,delivery_pin:a}).then(function(e){var t=e.data;r({type:d.b,payload:t}),r({type:m.a,payload:t})}).catch(function(e){console.log(e)})}}})(x)}}]);