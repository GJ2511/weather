(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{32:function(e,t,i){e.exports=i(45)},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),d=i(11),l=i.n(d),s=(i(37),i(16));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=i(6),p=i(30),m=i(5),o=i.n(m),c=i(8),u=i(9),_=i(28),h=i(23),v=i(14),y=i(15),f="".concat("http://api.openweathermap.org","/data/2.5/forecast"),g="ee84d7dc82a78d615bb769e17b0f594c",k={"Content-Type":"application/json;charset=utf-8"},w=(new(function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"getWeather",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t,i,n,a,d,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t=l.length>0&&void 0!==l[0]?l[0]:{},i="".concat(f,"?APPID=").concat(g,"&"),t)i+="".concat(n,"=").concat(t[n],"&");return e.next=5,fetch(i,{headers:k});case 5:return a=e.sent,e.next=8,a.json();case 8:return d=e.sent,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),o.a.mark(N)),x=o.a.mark(T),b={loading:!1,weather:{},cards:[],error:{}},E="".concat("WEATHER","//GET_WEATHER_REQUESTED"),C="".concat("WEATHER","//GET_WEATHER_SUCCESS"),O="".concat("WEATHER","//GET_WEATHER_ERROR"),R="".concat("WEATHER","//RESET"),j=function(e){var t=e.list,i={};t.forEach((function(e){var t=e.dt_txt.split(" "),n=Object(_.a)(t,2),a=n[0],d=n[1],l=e.main.temp-32;void 0===i[a]&&(i[a]=[]),i[a].push({time:d,Celcius:l,Farenhite:e.main.temp})}));var n=Object.keys(i).map((function(e){var t=i[e].length,n=i[e].reduce((function(e,t){return e+t.Farenhite}),0);return{d:e,AvgFarenhite:n/t,AvgCelcius:(n-32*t)/t}}));return{weather:i,cards:n}};function N(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e={cod:"200",message:0,cnt:40,list:[{dt:1597989600,main:{temp:292.69,feels_like:294.02,temp_min:292.69,temp_max:293.68,pressure:1015,sea_level:1015,grnd_level:956,humidity:83,temp_kf:-.99},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:1.25,deg:187},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-21 06:00:00"},{dt:1598000400,main:{temp:298.95,feels_like:300.85,temp_min:298.95,temp_max:300.93,pressure:1015,sea_level:1015,grnd_level:957,humidity:60,temp_kf:-1.98},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:.94,deg:192},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-21 09:00:00"},{dt:1598011200,main:{temp:304.25,feels_like:305.7,temp_min:304.25,temp_max:305.1,pressure:1015,sea_level:1015,grnd_level:958,humidity:43,temp_kf:-.85},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:1.34,deg:43},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-21 12:00:00"},{dt:1598022e3,main:{temp:303.72,feels_like:304.72,temp_min:303.72,temp_max:303.82,pressure:1014,sea_level:1014,grnd_level:957,humidity:47,temp_kf:-.1},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:2.54,deg:61},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-21 15:00:00"},{dt:1598032800,main:{temp:297.81,feels_like:300.04,temp_min:297.81,temp_max:297.81,pressure:1015,sea_level:1015,grnd_level:957,humidity:74,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:1.89,deg:96},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-21 18:00:00"},{dt:1598043600,main:{temp:294.8,feels_like:296.79,temp_min:294.8,temp_max:294.8,pressure:1017,sea_level:1017,grnd_level:958,humidity:80,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}],clouds:{all:0},wind:{speed:1.18,deg:145},visibility:1e4,pop:.02,sys:{pod:"n"},dt_txt:"2020-08-21 21:00:00"},{dt:1598054400,main:{temp:293.25,feels_like:295.01,temp_min:293.25,temp_max:293.25,pressure:1017,sea_level:1017,grnd_level:958,humidity:85,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}],clouds:{all:6},wind:{speed:1.17,deg:256},visibility:1e4,pop:0,sys:{pod:"n"},dt_txt:"2020-08-22 00:00:00"},{dt:1598065200,main:{temp:292.08,feels_like:291.95,temp_min:292.08,temp_max:292.08,pressure:1017,sea_level:1017,grnd_level:958,humidity:80,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04n"}],clouds:{all:67},wind:{speed:2.7,deg:262},visibility:1e4,pop:.1,sys:{pod:"n"},dt_txt:"2020-08-22 03:00:00"},{dt:1598076e3,main:{temp:292.24,feels_like:291.54,temp_min:292.24,temp_max:292.24,pressure:1019,sea_level:1019,grnd_level:959,humidity:87,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:71},wind:{speed:4.32,deg:286},visibility:1e4,pop:.87,rain:{"3h":1.15},sys:{pod:"d"},dt_txt:"2020-08-22 06:00:00"},{dt:1598086800,main:{temp:294.01,feels_like:295.71,temp_min:294.01,temp_max:294.01,pressure:1019,sea_level:1019,grnd_level:960,humidity:84,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:98},wind:{speed:1.59,deg:323},visibility:1e4,pop:.89,rain:{"3h":2.02},sys:{pod:"d"},dt_txt:"2020-08-22 09:00:00"},{dt:1598097600,main:{temp:296.12,feels_like:297.95,temp_min:296.12,temp_max:296.12,pressure:1018,sea_level:1018,grnd_level:960,humidity:73,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:98},wind:{speed:1.3,deg:350},visibility:1e4,pop:.83,rain:{"3h":.16},sys:{pod:"d"},dt_txt:"2020-08-22 12:00:00"},{dt:1598108400,main:{temp:296.99,feels_like:299.01,temp_min:296.99,temp_max:296.99,pressure:1018,sea_level:1018,grnd_level:959,humidity:69,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:98},wind:{speed:.99,deg:78},visibility:1e4,pop:.68,rain:{"3h":.36},sys:{pod:"d"},dt_txt:"2020-08-22 15:00:00"},{dt:1598119200,main:{temp:293.43,feels_like:294.46,temp_min:293.43,temp_max:293.43,pressure:1019,sea_level:1019,grnd_level:960,humidity:84,temp_kf:0},weather:[{id:501,main:"Rain",description:"moderate rain",icon:"10d"}],clouds:{all:98},wind:{speed:2.21,deg:296},visibility:1e4,pop:1,rain:{"3h":6.47},sys:{pod:"d"},dt_txt:"2020-08-22 18:00:00"},{dt:159813e4,main:{temp:291.02,feels_like:291.75,temp_min:291.02,temp_max:291.02,pressure:1021,sea_level:1021,grnd_level:961,humidity:88,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10n"}],clouds:{all:38},wind:{speed:1.71,deg:283},visibility:1e4,pop:.73,rain:{"3h":1.26},sys:{pod:"n"},dt_txt:"2020-08-22 21:00:00"},{dt:1598140800,main:{temp:290.18,feels_like:290.81,temp_min:290.18,temp_max:290.18,pressure:1020,sea_level:1020,grnd_level:960,humidity:86,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10n"}],clouds:{all:37},wind:{speed:1.24,deg:268},visibility:1e4,pop:.68,rain:{"3h":.36},sys:{pod:"n"},dt_txt:"2020-08-23 00:00:00"},{dt:1598151600,main:{temp:290.18,feels_like:290.77,temp_min:290.18,temp_max:290.18,pressure:1020,sea_level:1020,grnd_level:960,humidity:86,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10n"}],clouds:{all:83},wind:{speed:1.29,deg:242},visibility:1e4,pop:.42,rain:{"3h":.28},sys:{pod:"n"},dt_txt:"2020-08-23 03:00:00"},{dt:1598162400,main:{temp:290.2,feels_like:290.4,temp_min:290.2,temp_max:290.2,pressure:1019,sea_level:1019,grnd_level:959,humidity:84,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:{all:81},wind:{speed:1.68,deg:249},visibility:1e4,pop:.36,sys:{pod:"d"},dt_txt:"2020-08-23 06:00:00"},{dt:1598173200,main:{temp:291.04,feels_like:291.36,temp_min:291.04,temp_max:291.04,pressure:1019,sea_level:1019,grnd_level:959,humidity:82,temp_kf:0},weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:{all:93},wind:{speed:1.73,deg:238},visibility:1e4,pop:.28,sys:{pod:"d"},dt_txt:"2020-08-23 09:00:00"},{dt:1598184e3,main:{temp:294.03,feels_like:293.37,temp_min:294.03,temp_max:294.03,pressure:1018,sea_level:1018,grnd_level:959,humidity:62,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:91},wind:{speed:2.42,deg:243},visibility:1e4,pop:.4,rain:{"3h":.12},sys:{pod:"d"},dt_txt:"2020-08-23 12:00:00"},{dt:1598194800,main:{temp:292.61,feels_like:291.8,temp_min:292.61,temp_max:292.61,pressure:1017,sea_level:1017,grnd_level:958,humidity:70,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:98},wind:{speed:2.88,deg:222},visibility:1e4,pop:.34,rain:{"3h":.16},sys:{pod:"d"},dt_txt:"2020-08-23 15:00:00"},{dt:1598205600,main:{temp:290.29,feels_like:289.84,temp_min:290.29,temp_max:290.29,pressure:1018,sea_level:1018,grnd_level:958,humidity:80,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:58},wind:{speed:2.28,deg:269},visibility:1e4,pop:.51,rain:{"3h":.59},sys:{pod:"d"},dt_txt:"2020-08-23 18:00:00"},{dt:1598216400,main:{temp:288.26,feels_like:287.86,temp_min:288.26,temp_max:288.26,pressure:1019,sea_level:1019,grnd_level:959,humidity:84,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10n"}],clouds:{all:1},wind:{speed:1.65,deg:288},visibility:1e4,pop:.59,rain:{"3h":.35},sys:{pod:"n"},dt_txt:"2020-08-23 21:00:00"},{dt:1598227200,main:{temp:288.07,feels_like:287.5,temp_min:288.07,temp_max:288.07,pressure:1018,sea_level:1018,grnd_level:958,humidity:83,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10n"}],clouds:{all:25},wind:{speed:1.72,deg:290},visibility:1e4,pop:.42,rain:{"3h":.32},sys:{pod:"n"},dt_txt:"2020-08-24 00:00:00"},{dt:1598238e3,main:{temp:286.78,feels_like:285.98,temp_min:286.78,temp_max:286.78,pressure:1018,sea_level:1018,grnd_level:957,humidity:84,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04n"}],clouds:{all:56},wind:{speed:1.59,deg:278},visibility:1e4,pop:.22,sys:{pod:"n"},dt_txt:"2020-08-24 03:00:00"},{dt:1598248800,main:{temp:287.78,feels_like:287.33,temp_min:287.78,temp_max:287.78,pressure:1018,sea_level:1018,grnd_level:957,humidity:80,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:{all:74},wind:{speed:1.19,deg:299},visibility:1e4,pop:.18,sys:{pod:"d"},dt_txt:"2020-08-24 06:00:00"},{dt:1598259600,main:{temp:292.14,feels_like:291.61,temp_min:292.14,temp_max:292.14,pressure:1017,sea_level:1017,grnd_level:957,humidity:61,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:{all:72},wind:{speed:1.34,deg:353},visibility:1e4,pop:.1,sys:{pod:"d"},dt_txt:"2020-08-24 09:00:00"},{dt:1598270400,main:{temp:293.87,feels_like:292.5,temp_min:293.87,temp_max:293.87,pressure:1015,sea_level:1015,grnd_level:956,humidity:53,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:{all:64},wind:{speed:2.33,deg:8},visibility:1e4,pop:.09,sys:{pod:"d"},dt_txt:"2020-08-24 12:00:00"},{dt:1598281200,main:{temp:292.78,feels_like:291.92,temp_min:292.78,temp_max:292.78,pressure:1015,sea_level:1015,grnd_level:956,humidity:63,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:99},wind:{speed:2.29,deg:355},visibility:1e4,pop:.34,rain:{"3h":.11},sys:{pod:"d"},dt_txt:"2020-08-24 15:00:00"},{dt:1598292e3,main:{temp:289.51,feels_like:288.99,temp_min:289.51,temp_max:289.51,pressure:1016,sea_level:1016,grnd_level:956,humidity:74,temp_kf:0},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:99},wind:{speed:1.5,deg:326},visibility:1e4,pop:.28,rain:{"3h":.18},sys:{pod:"d"},dt_txt:"2020-08-24 18:00:00"},{dt:1598302800,main:{temp:288.39,feels_like:287.37,temp_min:288.39,temp_max:288.39,pressure:1018,sea_level:1018,grnd_level:957,humidity:75,temp_kf:0},weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],clouds:{all:100},wind:{speed:1.85,deg:312},visibility:1e4,pop:.18,sys:{pod:"n"},dt_txt:"2020-08-24 21:00:00"},{dt:1598313600,main:{temp:286.84,feels_like:285.88,temp_min:286.84,temp_max:286.84,pressure:1018,sea_level:1018,grnd_level:957,humidity:81,temp_kf:0},weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],clouds:{all:100},wind:{speed:1.63,deg:277},visibility:1e4,pop:.2,sys:{pod:"n"},dt_txt:"2020-08-25 00:00:00"},{dt:1598324400,main:{temp:284.88,feels_like:283.87,temp_min:284.88,temp_max:284.88,pressure:1019,sea_level:1019,grnd_level:957,humidity:86,temp_kf:0},weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"03n"}],clouds:{all:42},wind:{speed:1.3,deg:258},visibility:1e4,pop:.02,sys:{pod:"n"},dt_txt:"2020-08-25 03:00:00"},{dt:1598335200,main:{temp:286.69,feels_like:286.01,temp_min:286.69,temp_max:286.69,pressure:1019,sea_level:1019,grnd_level:958,humidity:80,temp_kf:0},weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02d"}],clouds:{all:23},wind:{speed:1.1,deg:242},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-25 06:00:00"},{dt:1598346e3,main:{temp:293.01,feels_like:292.93,temp_min:293.01,temp_max:293.01,pressure:1018,sea_level:1018,grnd_level:959,humidity:56,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:0},wind:{speed:.51,deg:106},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-25 09:00:00"},{dt:1598356800,main:{temp:295.1,feels_like:294,temp_min:295.1,temp_max:295.1,pressure:1017,sea_level:1017,grnd_level:958,humidity:48,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:3},wind:{speed:1.81,deg:62},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-25 12:00:00"},{dt:1598367600,main:{temp:294.59,feels_like:293.17,temp_min:294.59,temp_max:294.59,pressure:1016,sea_level:1016,grnd_level:957,humidity:53,temp_kf:0},weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02d"}],clouds:{all:11},wind:{speed:2.68,deg:71},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-25 15:00:00"},{dt:1598378400,main:{temp:289.97,feels_like:289.03,temp_min:289.97,temp_max:289.97,pressure:1016,sea_level:1016,grnd_level:956,humidity:75,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:{all:5},wind:{speed:2.39,deg:92},visibility:1e4,pop:0,sys:{pod:"d"},dt_txt:"2020-08-25 18:00:00"},{dt:1598389200,main:{temp:287.58,feels_like:286.5,temp_min:287.58,temp_max:287.58,pressure:1017,sea_level:1017,grnd_level:957,humidity:81,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}],clouds:{all:0},wind:{speed:2.09,deg:119},visibility:1e4,pop:0,sys:{pod:"n"},dt_txt:"2020-08-25 21:00:00"},{dt:15984e5,main:{temp:286.76,feels_like:286.08,temp_min:286.76,temp_max:286.76,pressure:1017,sea_level:1017,grnd_level:956,humidity:86,temp_kf:0},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}],clouds:{all:4},wind:{speed:1.57,deg:173},visibility:1e4,pop:0,sys:{pod:"n"},dt_txt:"2020-08-26 00:00:00"},{dt:1598410800,main:{temp:286.98,feels_like:285.99,temp_min:286.98,temp_max:286.98,pressure:1016,sea_level:1016,grnd_level:956,humidity:84,temp_kf:0},weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04n"}],clouds:{all:78},wind:{speed:1.95,deg:214},visibility:1e4,pop:0,sys:{pod:"n"},dt_txt:"2020-08-26 03:00:00"}],city:{id:2867714,name:"Munich",coord:{lat:48.1374,lon:11.5755},country:"DE",population:1260391,timezone:7200,sunrise:1597983417,sunset:1598033818}}).errors){t.next=7;break}return t.next=5,Object(c.b)({type:O,payload:e.errors});case 5:t.next=9;break;case 7:return t.next=9,Object(c.b)({type:C,payload:e});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log(t.t0),t.next=16,Object(c.b)({type:O,payload:{Error:["Something went wrong"]}});case 16:case"end":return t.stop()}}),w,null,[[0,11]])}function T(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)(E,N);case 2:case"end":return e.stop()}}),x)}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.type,n=t.payload;switch(i){case E:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case C:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:{}},j(n));case O:case R:return Object(u.a)({},b);default:return e}},A=o.a.mark(I);function I(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)([T()]);case 2:case"end":return e.stop()}}),A)}var S=function(){return Object(r.c)({weather:D})},W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})||r.d,H=Object(p.a)(),F=[Object(r.a)(H)],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.e)(S(),e,W.apply(void 0,F));return H.run(I),t}(),M=(i(44),i(31)),P=i(27),X=function(){return a.a.createElement("div",{className:"loader-container mt-5"},a.a.createElement("div",{className:"d-flex  flex-column justify-content-center align-items-center vh-100"},a.a.createElement("div",{className:"spinner-grow",role:"status"}),a.a.createElement("p",{className:"font-weight-bold"},"Loading ...")))},G=function(e){var t=e.value,i=e.unit,n=e.handleChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{className:"form-check-input  hover-hand",type:"radio",value:t,checked:i===t,onChange:n}),a.a.createElement("label",{className:"form-check-label"},t))},L=function(e){var t=e.direction,i=e.handleClick,n=e.children;return a.a.createElement("span",{className:"text-primary font-size-70 hover-hand",onClick:function(){return i(t)}},n)},q=i(24),z=i.n(q),B=function(e){var t=e.cards,i=e.unit,n=e.startIndex,d=e.endIndex,l=e.handleClick,s=e.selectDate,r=i.charAt(0);return a.a.createElement("div",{className:"card-deck col-12"},t.map((function(e,t){var p=z()("card col-4",{"border-primary":s===e.d,"border-dark":s!==e.d});if(t>=n&&t<=d)return a.a.createElement("div",{className:p,key:e.d,onClick:function(){return l(e.d)}},a.a.createElement("div",{className:"card-body"},a.a.createElement("p",null,"Temp: ",e["Avg".concat(i)].toFixed(2),r),a.a.createElement("p",null,"Date: ",e.d)))})))},J=i(29),V=i(25),Q=function(e){var t=e.unit,i=e.weatherData,n=e.dates,d=[["Date","Temperature (in ".concat(t,")")]];return n.forEach((function(e){var n=i[e].map((function(i){return["".concat(e," ").concat(i.time),i[t]]}));d.push.apply(d,Object(J.a)(n))})),a.a.createElement(V.a,{chartType:"ColumnChart",width:"100%",data:d})},$=function(e){Object(M.a)(i,e);var t=Object(P.a)(i);function i(){var e;Object(v.a)(this,i);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(e=t.call.apply(t,[this].concat(a))).state={unit:"Celcius",startIndex:0,endIndex:2,selectDate:""},e.onArrowClick=function(t){var i=e.state,n=i.startIndex,a=i.endIndex;n="left"===t?n-1:n+1,a="left"===t?a-1:a+1,e.setState({startIndex:n,endIndex:a})},e.onTemperatureChange=function(t){e.setState({unit:t.target.value})},e.onCardClick=function(t){var i="";e.state.selectDate!==t&&(i=t),e.setState({selectDate:i})},e}return Object(y.a)(i,[{key:"componentDidMount",value:function(){(0,this.props.getWeatherRequest)()}},{key:"componentWillUnmount",value:function(){(0,this.props.reset)()}},{key:"render",value:function(){var e=this.props,t=e.loading,i=e.cards,n=e.weatherData,d=this.state,l=d.unit,s=d.startIndex,r=d.endIndex,p=d.selectDate;if(t)return a.a.createElement("div",{className:"mt-5"},a.a.createElement(X,null));var m=""!==p?[p]:i.filter((function(e,t){return t>=s&&t<=r})).map((function(e){return e.d}));return a.a.createElement("div",{className:"m-1 p-1"},a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-2"},a.a.createElement(G,{unit:l,value:"Celcius",handleChange:this.onTemperatureChange})),a.a.createElement("div",{className:"col-2 offset-8"},a.a.createElement(G,{unit:l,value:"Farenhite",handleChange:this.onTemperatureChange}))),a.a.createElement("div",{className:"row mt-2"},a.a.createElement("div",{className:"col-2"},s>0&&a.a.createElement(L,{direction:"left",handleClick:this.onArrowClick},"\u2190")),a.a.createElement("div",{className:" col-2 offset-8"},r<i.length&&a.a.createElement(L,{direction:"right",handleClick:this.onArrowClick},"\u2192")),a.a.createElement(B,{unit:l,cards:i,startIndex:s,endIndex:r,handleClick:this.onCardClick,selectDate:p})),a.a.createElement("div",{className:"row mt-5"},a.a.createElement(Q,{unit:l,weatherData:n,dates:m})))}}]),i}(n.Component),K=Object(s.b)((function(e){var t=e.weather;return{cards:t.cards,weatherData:t.weather,error:t.error,loading:t.loading}}),{reset:function(){return{type:R}},getWeatherRequest:function(){return{type:E}}})($),Y=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(K,null))};l.a.render(a.a.createElement(s.a,{store:U},a.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0a59343c.chunk.js.map