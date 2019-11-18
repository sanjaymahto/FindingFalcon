(this["webpackJsonpfinding-falcon"]=this["webpackJsonpfinding-falcon"]||[]).push([[0],{127:function(e,t,n){e.exports=n(197)},189:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setPlanetsData",(function(){return Z})),n.d(a,"setVehiclesData",(function(){return ee})),n.d(a,"setAuthenticationToken",(function(){return te})),n.d(a,"findFalconCall",(function(){return ne}));var r=n(0),c=n(2),i=n.n(c),s=n(47),o=n(123),l=n(17),u=n(24),p=n(115),d=n(116),f="SET_PLANET_METADATA",h="SET_VEHICLE_METADATA",_="SET_AUTHENTICATION_TOKEN",m="SHOW_FALCON_FIND_LOADER",v="SET_TOTAL_TIME_TAKEN",b="SET_FIND_FALCON_RESULT",O=Object(d.a)({planets_metadata:[],vehicles_metadata:[],authentication_token:null,falcon_finding_loader:!1,total_time_taken:null,falcon_finding_response:{}});var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return function(e,t){return e.set("planets_metadata",t)}(e,a);case h:return function(e,t){return e.set("vehicles_metadata",t)}(e,a);case _:return function(e,t){return e.set("authentication_token",t.token)}(e,a);case m:return function(e,t){return e.set("falcon_finding_loader",t)}(e,a);case v:return function(e,t){return e.set("total_time_taken",t)}(e,a);case b:return function(e,t){return e.set("falcon_finding_response",t)}(e,a);default:return e}},g=Object(u.c)({falconSearchReducer:y}),j=Object(u.a)(p.a);var E=n(13),S=n.n(E),k=n(36),T=n(22),w=n(65),C=n(66),A=n(74),N=n(67),x=n(75),P=n(202),D=n(204),F=n(201),L=n(26),R=n(203),V=n(198),H=V.a.Option,I=function(e){return r.createElement(V.a,{showSearch:!0,loading:!(!e.loading||e.planets.length),style:{width:200},placeholder:"Select a planet",optionFilterProp:"children",onChange:e.onOptionChange,onSearch:e.OnSearchChange,disabled:e.disabled,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e.planets.map((function(e,t){return r.createElement(H,{key:t,value:e.name},e.name)})))},M=n(199),J={display:"block",height:"30px",lineHeight:"30px"},B=function(e){return r.createElement(M.a.Group,{value:e.value,onChange:e.onOptionChange,disabled:e.disabled},e.vehicles.map((function(e,t){return r.createElement(M.a,{key:t,style:J,value:e.name,disabled:!e.total_no},"".concat(e.name,"(").concat(e.total_no,")"))})))},K="https://findfalcone.herokuapp.com",U="/planets",X="/vehicles",G="/token",W="/find";function Y(e){return{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e}}function $(){return fetch("".concat(K).concat(U),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}function q(){return fetch("".concat(K).concat(X),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}function z(){return function(){var e=JSON.stringify({});return fetch("".concat(K).concat(G),Y(e))}().then((function(e){return e.json()})).then((function(e){return e}))}function Q(e){return function(e){var t=JSON.stringify(e);return fetch("".concat(K).concat(W),Y(t))}(e).then((function(e){return e.json()})).then((function(e){return e}))}var Z=function(){return function(){var e=Object(k.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m,payload:!0}),e.next=3,$();case 3:n=e.sent,t({type:f,payload:n}),t({type:m,payload:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(k.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:n=e.sent,t({type:h,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(){return function(){var e=Object(k.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,t({type:_,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(k.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:v,payload:e.total_time}),n({type:m,payload:!0}),t.next=4,Q(e);case 4:a=t.sent,n({type:b,payload:a}),n({type:m,payload:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};n(189);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach((function(t){Object(T.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(A.a)(this,Object(N.a)(t).call(this,e))).total_time=void 0,n.onPlanetSelect=function(e,t){n.setState((function(n){return{selected_planets:Object.assign(n.selected_planets,Object(T.a)({},t,e)),disabled_planets:Object.assign(n.disabled_planets,Object(T.a)({},t,!0)),vehicles_options_visibility:Object.assign(n.vehicles_options_visibility,Object(T.a)({},t,!0))}}),(function(){n.filterPlanetsArray(t)}))},n.onVehicleSelect=function(e,t){n.setState((function(n){return{selected_vehicles:Object.assign(n.selected_vehicles,Object(T.a)({},t,e.target.value)),disabled_vehicles:Object.assign(n.disabled_vehicles,Object(T.a)({},t,!0))}}),(function(){var e=n.state.selected_planets[t],a=n.props.planets_metadata.find((function(t){return t.name===e})),r=!0;n.state.vehicles.forEach((function(e){e.max_distance>=a.distance&&e.total_no&&(r=!1)})),r?(P.a.destroy(),P.a.error("Selected Planet Can't be reached by any available vehicles. Please Select another Planet."),n.setState((function(e){return{disabled_planets:Object.assign(e.disabled_planets,Object(T.a)({},t,!1)),disabled_vehicles:Object.assign(e.disabled_vehicles,Object(T.a)({},t,!1)),selected_vehicles:Object.assign(e.selected_vehicles,Object(T.a)({},t,null))}}))):(n.filterVehiclesArray(t),n.calculateTimeTaken(t))}))},n.filterPlanetsArray=function(e){var t=n.state.planets.filter((function(t){return n.state.selected_planets[e]!==t.name?t:null}));n.setState({planets:t})},n.filterVehiclesArray=function(e){var t=n.state.vehicles.filter((function(t){return t.name===n.state.selected_vehicles[e]?Object.assign(re({},t),{total_no:--t.total_no}):t}));n.setState({vehicles:t})},n.calculateTimeTaken=function(e){var t=n.state.selected_vehicles[e],a=n.props.vehicles_metadata.find((function(e){return e.name===t})),r=n.state.selected_planets[e],c=n.props.planets_metadata.find((function(e){return e.name===r}));if(c.distance>a.max_distance)P.a.error("Sorry! This vehicle can't reach the planet you selected"),n.setState((function(t){return{disabled_vehicles:Object.assign(t.disabled_vehicles,Object(T.a)({},e,!1))}}),(function(){var t=n.state.vehicles.filter((function(t){return t.name===n.state.selected_vehicles[e]?Object.assign(re({},t),{total_no:++t.total_no}):t}));n.setState({vehicles:t})}));else{var i=c.distance/a.speed;n.total_time+=i}},n.planetAndVehicleSelectionList=function(){return Array.apply(null,Array(4)).map((function(e,t){return r.createElement(D.a,{span:4,key:t},r.createElement("div",null,r.createElement("p",null,"Destination ".concat(++t)),r.createElement(I,{planets:n.state.planets,loading:n.props.falcon_finding_loader,onOptionChange:function(e){n.onPlanetSelect(e,t)},disabled:n.state.disabled_planets[t]}),n.state.vehicles_options_visibility[t]?r.createElement(B,{value:n.state.selected_vehicles[t]||null,vehicles:n.state.vehicles,onOptionChange:function(e){n.onVehicleSelect(e,t)},disabled:n.state.disabled_vehicles[t]}):null))}))},n.resetData=function(){window.location.reload()},n.total_time=0,n.state={selected_planets:{},disabled_planets:{},selected_vehicles:{},disabled_vehicles:{1:!1,2:!1,3:!1,4:!1},vehicles_options_visibility:{1:!1,2:!1,3:!1,4:!1},vehicles:[],planets:[]},n}return Object(x.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.setPlanetsData();case 2:return e.next=4,this.props.setVehiclesData();case 4:return e.next=6,this.props.setAuthenticationToken();case 6:this.setState({planets:this.props.planets_metadata,vehicles:this.props.vehicles_metadata});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"HomeContainer"},r.createElement("h1",{className:"HomeContainer_heading"},r.createElement("span",{style:{marginLeft:"8.5%"}},"Finding Falcone!"),r.createElement("span",{style:{float:"right",marginRight:"32px"}},r.createElement(F.a,{onClick:this.resetData},r.createElement(L.a,{type:"reload"}),"\xa0Reset"))),r.createElement("h4",{className:"HomeContainer_subHeading"},"Select planets you want to search in:"),r.createElement(R.a,{type:"flex",justify:"space-around"},this.planetAndVehicleSelectionList()),r.createElement("div",null,r.createElement("p",{className:"TimeCalculator"},"Time Taken: ",this.total_time)),r.createElement("div",{className:"Button_find"},r.createElement(F.a,{onClick:Object(k.a)(S.a.mark((function t(){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.keys(e.state.selected_vehicles).map((function(t){return e.state.selected_vehicles[t]})),a=Object.keys(e.state.selected_planets).map((function(t){return e.state.selected_planets[t]})),t.next=4,e.props.findFalconCall({token:e.props.authentication_token,planet_names:a,vehicle_names:n,total_time:e.total_time});case 4:e.props.history.push("/result");case 5:case"end":return t.stop()}}),t)})))},this.props.falcon_finding_loader?r.createElement(L.a,{type:"loading"}):null,"Find Falcon!")))}}]),t}(r.Component),ie=Object(l.f)(Object(s.b)((function(e){return{planets_metadata:(e=e.falconSearchReducer.toJS()).planets_metadata,vehicles_metadata:e.vehicles_metadata,authentication_token:e.authentication_token,falcon_finding_loader:e.falcon_finding_loader}}),(function(e){return Object(u.b)(re({},a),e)}))(ce)),se=(n(195),function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){Object.keys(this.props.falcon_finding_response).length||this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"ResultContainer"},r.createElement("h1",{className:"ResultContainer_heading"},"Finding Falcone!"),r.createElement("h4",{className:"ResultContainer_subHeading"},this.props.falcon_finding_response.error?"Error: ".concat(this.props.falcon_finding_response.error):"success"===this.props.falcon_finding_response.status?"Success! Congratulation on finding Falcone. King shan is mighty pleased.":"Sorry! You didn't able to save King Shan."),this.props.falcon_finding_response.error?null:r.createElement("div",null,r.createElement("p",{className:"FoundTime"},"Time Taken: ","".concat(this.props.total_time_taken)),r.createElement("p",{className:"FoundPlanetText"},"Planet Found:"," ","success"===this.props.falcon_finding_response.status?this.props.falcon_finding_response.planet_name:"Not found!")),r.createElement("div",{className:"Button_restart"},r.createElement(F.a,{onClick:function(){e.props.history.push("/")}},"Start Again")))}}]),t}(r.PureComponent)),oe=Object(l.f)(Object(s.b)((function(e){return{falcon_finding_response:(e=e.falconSearchReducer.toJS()).falcon_finding_response,total_time_taken:e.total_time_taken}}),null)(se));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(196);i.a.render(r.createElement(s.a,{store:function(){var e=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d)(j);return Object(u.e)(g,{},e)}()},r.createElement(o.a,null,r.createElement("div",null,r.createElement(l.c,null,r.createElement(l.a,{exact:!0,path:"/",component:ie}),r.createElement(l.a,{exact:!0,path:"/result",component:oe}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[127,1,2]]]);
//# sourceMappingURL=main.9d042d94.chunk.js.map