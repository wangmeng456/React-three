(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{157:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),c=a(16),o=a(17),s=a(19),p=a(18),g=a(20),m=a(10),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={data:["1","2"],imgHeight:176},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2"]})}),100)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.d,{style:{backgroundColor:"#3fcccb",color:"#fff"}},"\u4f4f\u5427\u5bb6\u5c45"),i.a.createElement(m.h,{style:{margin:0}},i.a.createElement(m.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return i.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},i.a.createElement("img",{src:"images/".concat(t,".jpg"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},i.a.createElement("div",{style:{width:"30%",height:"110px",marginTop:"10px",marginLeft:"10px",background:"url(images/hotbrands_03.jpg)",color:"#fff",textAlign:"center",lineHeight:"110px"}},"\u70ed\u95e8\u54c1\u724c"),i.a.createElement("div",{style:{width:"30%",height:"110px",marginTop:"10px",marginLeft:"8px",background:"url(images/privatecollocation_05.jpg)",color:"#fff",textAlign:"center",lineHeight:"110px"}},"\u79c1\u4eba\u642d\u914d\u5e08"),i.a.createElement("div",{style:{width:"30%",height:"110px",marginTop:"10px",marginLeft:"8px",background:"url(images/shoppingguide_07.jpg)",color:"#fff",textAlign:"center",lineHeight:"110px"}},"\u9009\u8d2d\u6307\u5357"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"sub-title",style:{marginTop:"10px",marginBottom:"10px",width:"40%",height:"14px",borderLeft:"4px #3fcccb solid",paddingLeft:"6px"}},"\u70ed\u95e8\u63a8\u8350"),i.a.createElement(m.b,{wrap:"wrap"},i.a.createElement("div",{style:{width:"100%",height:"200px",background:"url(images/homefooter_02.jpg)",color:"#fff",textAlign:"center",lineHeight:"360px"}},"\u4ec0\u4e48\u662f\u82f1\u4f26\u88c5\u4fee\u98ce\u683c \u82f1\u4f26\u98ce\u5bb6\u88c5 \u82f1\u4f26\u98ce\u683c\u88c5\u4fee\u6548\u679c\u56fe"))))}}]),t}(n.Component),d=[{title:"\u63a8\u8350"},{title:"\u51ac\u5b63"},{title:"\u5b9c\u5bb6"},{title:"\u5c0f\u6e05\u65b0"},{title:"\u5c0f\u6237\u578b"},{title:"\u4e2a\u6027\u8272\u5f69"}],f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={data:["1","2","3","4","5","6"]},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:["1","2","3","4","1","2"]})}},{key:"render",value:function(){var e=["\u6a59\u8272\u5f8b\u52a8","\u513f\u7ae5\u623f","\u7ffb\u6eda\u5427\uff0c\u5730\u644a\u541b","\u89d2\u843d\u91cc\u7684\u9050\u60f3"];return i.a.createElement("div",null,i.a.createElement(m.d,{style:{backgroundColor:"#3fcccb",color:"#fff"},rightContent:[i.a.createElement(m.c,{key:"0",type:"search",style:{color:"#fff",marginRight:"16px"}})]},"\u7075\u611f"),i.a.createElement(m.g,{tabs:d,initialPage:0,tabBarActiveTextColor:"#3fcccb",tabBarUnderlineStyle:{border:"0px solid #fff"},onChange:function(e,t){console.log("onChange",t,e)},onTabClick:function(e,t){console.log("onTabClick",t,e)}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}},i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},this.state.data.map((function(t){return i.a.createElement("div",{style:{backgroundColor:"#fff",width:"44%",height:"200px",margin:"10px 10px",fontSize:"14px",color:"#686868",position:"relative"}},i.a.createElement("img",{src:"images/1".concat(t,".jpg"),style:{width:"100%",height:"160px",position:"relative"}}),i.a.createElement("div",{style:{width:"100%",left:"4%",top:"156px",position:"absolute"}},i.a.createElement("img",{src:"images/head.png",style:{width:"30px",height:"30px"}}),e["".concat(t)-1],i.a.createElement("img",{src:"images/shoucang.png",style:{float:"right",marginTop:"16px",marginRight:"8px"}})))})))))))}}]),t}(n.Component),u=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={data:["1","2","3","4"],item:["1","2","3","4","5","6","7","8","9","10"],imgHeight:176},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({item:["1","2","3","4","5","6","7","8","9","10"]}),setTimeout((function(){e.setState({data:["3","3","3","3"]})}),100)}},{key:"render",value:function(){var e=this,t=["\u684c","\u5e8a","\u6905","\u51e0","\u67dc","\u4e66\u67b6","\u6c99\u53d1","\u5bb6\u5c45\u9970\u54c1","\u6237\u5916\u5bb6\u5177","\u5168\u90e8\u5206\u7c7b"];return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(m.d,{style:{backgroundColor:"#3fcccb",color:"#fff"},rightContent:[i.a.createElement("img",{src:"images/shopping.png",style:{marginRight:"16px"}})]},"\u5546\u57ce"),i.a.createElement("div",{style:{width:"100%",position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.3)",top:"45px",zIndex:999}},i.a.createElement("img",{src:"images/anniu.png",style:{float:"left",marginTop:"10px",marginLeft:"10px"}}),i.a.createElement(m.e,{placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u641c\u7d22",style:{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"90%",float:"left"}})),i.a.createElement(m.h,{style:{margin:0,position:"relative",zIndex:1}},i.a.createElement(m.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return i.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},i.a.createElement("img",{src:"images/".concat(t,".jpg"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),i.a.createElement("div",{className:"flex-container",style:{backgroundColor:"#fff"}},i.a.createElement(m.b,{wrap:"wrap",style:{margin:"0"}},this.state.item.map((function(e){return i.a.createElement("div",{style:{fontSize:"11px",backgroundColor:"#fff",width:"13%",height:"60px",marginTop:"20px",marginLeft:"20px",textAlign:"center"}},i.a.createElement("img",{src:"images/2".concat(e,".png"),style:{width:"90%",height:"40px"}}),t["".concat(e)-1])})))),i.a.createElement("div",{className:"flex-container"},i.a.createElement(m.b,{wrap:"wrap"},i.a.createElement("div",{style:{width:"44%",height:"140px",margin:"14px 10px",fontSize:"14px",color:"#686868"}},i.a.createElement("img",{src:"images/cup_03.jpg",style:{width:"100%",height:"120px",position:"relative"}}),i.a.createElement("span",{style:{fontSize:"11px",color:"#686868",textAlign:"center"}},"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6..."),i.a.createElement("br",null),i.a.createElement("span",{style:{fontSize:"12px",color:"#000",textAlign:"center"}},"\uffe539.95")),i.a.createElement("div",{style:{width:"44%",height:"140px",margin:"14px 10px",fontSize:"14px",color:"#686868"}},i.a.createElement("img",{src:"images/cup2_03.jpg",style:{width:"100%",height:"120px",position:"relative"}}),i.a.createElement("span",{style:{fontSize:"11px",color:"#686868",textAlign:"center"}},"\u987a\u987a\u5de5\u827a\u6b27\u5f0f\u98ce\u683c\u5851\u6599\u5916\u6846\u9ed1..."),i.a.createElement("br",null),i.a.createElement("span",{style:{fontSize:"12px",color:"#000",textAlign:"center"}},"\uffe583.99")))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={selectedTab:"blueTab"},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},i.a.createElement(m.f,{unselectedTintColor:"#686868",tintColor:"#64d3d2",barTintColor:"white"},i.a.createElement(m.f.Item,{title:"\u9996\u9875",key:"Life",icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/AppHome.png) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/apphome2.png) center center /  21px 21px no-repeat"}}),selected:"blueTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"blueTab"})}},i.a.createElement(h,null)),i.a.createElement(m.f.Item,{icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/appint.png) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/appint2.png) center center /  21px 21px no-repeat"}}),title:"\u7075\u611f",key:"Koubei",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})}},i.a.createElement(f,null)),i.a.createElement(m.f.Item,{icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/appshop.png) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(images/appshop2.png) center center /  21px 21px no-repeat"}}),title:"\u5546\u57ce",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab"})}},i.a.createElement(u,null)),i.a.createElement(m.f.Item,{icon:{uri:"images/appmy.png"},selectedIcon:{uri:"images/appmy2.png"},title:"\u6211\u7684",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}},"\u6211\u7684")))}}]),t}(i.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(x,null))}}]),t}(n.Component);a(157),a(158);l.a.render(i.a.createElement(y,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(159)}},[[82,1,2]]]);
//# sourceMappingURL=main.6a90b0f6.chunk.js.map