(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"UJ/Q":function(e,t,a){"use strict";a.r(t);a("14J3");var l=a("BMrR"),n=(a("+L6B"),a("2/Rp")),r=(a("jCWc"),a("kPKH")),s=(a("5Dmo"),a("3S7+")),i=(a("qVdP"),a("jsC+")),o=(a("Q9mQ"),a("diRs")),c=(a("Mwp2"),a("VXEj")),m=(a("miYZ"),a("tsqr")),d=(a("lUTK"),a("BvKs")),h=a("qIgq"),p=a.n(h),u=(a("2qtc"),a("kLXV")),g=(a("5NDa"),a("5rEg")),f=(a("B9cy"),a("Ol7k")),E=a("q1tI"),b=a.n(E),v=a("/MKj"),y=a("Ty5D"),_=a("jehZ"),w=a.n(_),j=a("Y/ft"),C=a.n(j),M=a("p0pE"),x=a.n(M),S=a("TSYQ"),N=a.n(S),O=a("mcBY"),T=a.n(O),k=void 0!==document.body.style.webkitLineClamp,F={overflowWrap:"break-word",wordWrap:"break-word"},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((e,t)=>{var a=t.charCodeAt(0);return a>=0&&a<=128?e+1:e+2},0)},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=0;return e.split("").reduce((e,l)=>{var n=l.charCodeAt(0);return a+=n>=0&&n<=128?1:2,a<=t?e+l:e},"")},L=e=>{var t=e.tooltip,a=e.overlayStyle,l=e.title,n=e.children;if(t){var r=!0===t?{overlayStyle:a,title:l}:x()({},t,{overlayStyle:a,title:l});return b.a.createElement(s["a"],r,n)}return n},R=e=>{var t=e.text,a=e.length,l=e.tooltip,n=e.fullWidthRecognition,r=C()(e,["text","length","tooltip","fullWidthRecognition"]);if("string"!==typeof t)throw new Error("Ellipsis children must be string.");var s=n?W(t):t.length;if(s<=a||a<0)return b.a.createElement("span",r,t);var i,o="...";i=a-o.length<=0?"":n?H(t,a):t.slice(0,a);var c=l?{}:x()({},r);return L({tooltip:l,overlayStyle:F,title:t,children:b.a.createElement("span",c,i,o)})};class z extends E["Component"]{constructor(){super(...arguments),this.state={text:"",targetCount:0},this.computeLine=(()=>{var e=this.props.lines;if(e&&!k){var t=this.shadowChildren.innerText||this.shadowChildren.textContent,a=parseInt(getComputedStyle(this.root).lineHeight,10),l=e*a;this.content.style.height="".concat(l,"px");var n=this.shadowChildren.offsetHeight,r=this.shadow.firstChild;if(n<=l)return void this.setState({text:t,targetCount:t.length});var s=t.length,i=Math.ceil(s/2),o=this.bisection(l,i,0,s,t,r);this.setState({text:t,targetCount:o})}}),this.bisection=((e,t,a,l,n,r)=>{var s="...",i=t,o=l,c=a;r.innerHTML=n.substring(0,i)+s;var m=r.offsetHeight;return m<=e?(r.innerHTML=n.substring(0,i+1)+s,m=r.offsetHeight,m>e||i===c?i:(c=i,i=o-c===1?1+c:Math.floor((o-c)/2)+c,this.bisection(e,i,c,o,n,r))):i-1<0?i:(r.innerHTML=n.substring(0,i-1)+s,m=r.offsetHeight,m<=e?i-1:(o=i,i=Math.floor((o-c)/2)+c,this.bisection(e,i,c,o,n,r)))}),this.handleRoot=(e=>{this.root=e}),this.handleContent=(e=>{this.content=e}),this.handleNode=(e=>{this.node=e}),this.handleShadow=(e=>{this.shadow=e}),this.handleShadowChildren=(e=>{this.shadowChildren=e})}componentDidMount(){this.node&&this.computeLine()}componentDidUpdate(e){var t=this.props.lines;t!==e.lines&&this.computeLine()}render(){var e=this.state,t=e.text,a=e.targetCount,l=this.props,n=l.children,r=l.lines,s=l.length,i=l.className,o=l.tooltip,c=l.fullWidthRecognition,m=C()(l,["children","lines","length","className","tooltip","fullWidthRecognition"]),d=N()(T.a.ellipsis,i,{[T.a.lines]:r&&!k,[T.a.lineClamp]:r&&k});if(!r&&!s)return b.a.createElement("span",w()({className:d},m),n);if(!r)return b.a.createElement(R,w()({className:d,length:s,text:n||"",tooltip:o,fullWidthRecognition:c},m));var h="antd-pro-ellipsis-".concat("".concat((new Date).getTime()).concat(Math.floor(100*Math.random())));if(k){var p="#".concat(h,"{-webkit-line-clamp:").concat(r,";-webkit-box-orient: vertical;}"),u=b.a.createElement("div",w()({id:h,className:d},m),b.a.createElement("style",null,p),n);return L({tooltip:o,overlayStyle:F,title:n,children:u})}var g=b.a.createElement("span",{ref:this.handleNode},a>0&&t.substring(0,a),a>0&&a<t.length&&"...");return b.a.createElement("div",w()({},m,{ref:this.handleRoot,className:d}),b.a.createElement("div",{ref:this.handleContent},L({tooltip:o,overlayStyle:F,title:t,children:g}),b.a.createElement("div",{className:T.a.shadow,ref:this.handleShadowChildren},n),b.a.createElement("div",{className:T.a.shadow,ref:this.handleShadow},b.a.createElement("span",null,t))))}}var I=a("RCxd"),Y=a("Ue1A"),q=a("0NbB"),D=a("wd/R"),A=a.n(D),B=a("3a4m"),J=a.n(B),U=a("ygAv"),Q=a("jQ3y"),K=a.n(Q),V=a("RotF"),X=a.n(V),Z=a("LLXN"),P=(a("LvDl"),a("nOxK")),G=a("Wj66"),$=a("U5+n"),ee=a("r/Hq"),te=a("rYDG"),ae=(f["a"].Header,f["a"].Sider,f["a"].Content),le=(f["a"].Footer,g["a"].Search),ne=u["a"].confirm,re=/(?!^)(?=(\d{3})+$)/g,se=()=>{var e=Object(E["useState"])(!1),t=p()(e,2),a=t[0],h=t[1],u=Object(E["useState"])(!0),g=p()(u,2),y=g[0],_=g[1],w=Object(v["d"])(),j=Object(v["e"])(e=>e.datasetlist.data),C=Object(v["e"])(e=>e.datasetlist.pagination),M=Array.from(new Set(j.map(JSON.stringify))).map(JSON.parse);Object(E["useEffect"])(()=>{w({type:"datasetlist/queryTableFirstPage",payload:{}})},[w]);var x={c:b.a.createElement(P["default"],null),e:b.a.createElement(G["default"],null),f:b.a.createElement($["default"],null),d:b.a.createElement(ee["default"],null),g:b.a.createElement(te["default"],null),p:b.a.createElement(te["default"],null)},S=e=>{var t="upload"===e.source_type?"".concat(Object(Z["formatMessage"])({id:"datasetlist.uploadFile"})):"".concat(Object(Z["formatMessage"])({id:"datasetlist.systemImport"}));return b.a.createElement("div",null,b.a.createElement("p",null,b.a.createElement("label",{style:{fontWeight:"bold"}},"".concat(Object(Z["formatMessage"])({id:"datasetlist.name"})),"\uff1a"),b.a.createElement("span",null,e.name)),b.a.createElement("p",null,b.a.createElement("label",{style:{fontWeight:"bold"}},"".concat(Object(Z["formatMessage"])({id:"datasetlist.address"})),"\uff1a"),b.a.createElement("span",null,e.file_path)),b.a.createElement("p",null,b.a.createElement("label",{style:{fontWeight:"bold"}},"".concat(Object(Z["formatMessage"])({id:"datasetlist.date"})),"\uff1a"),b.a.createElement("span",null,A()(e.create_datetime).format("MMMM Do YYYY, h:mm:ss a"))),b.a.createElement("p",null,b.a.createElement("label",{style:{fontWeight:"bold"}},"".concat(Object(Z["formatMessage"])({id:"datasetlist.source"})),"\uff1a"),b.a.createElement("span",null,t)))},N=e=>{ne({title:Object(Z["formatMessage"])({id:"datasetlist.confirm"}),icon:b.a.createElement(I["a"],null),content:"",okText:Object(Z["formatMessage"])({id:"datasetlist.ok"}),okType:"danger",cancelText:Object(Z["formatMessage"])({id:"datasetlist.cancel"}),onOk(){w({type:"datasetlist/deleteRows",payload:{name:e.name}})},onCancel(){console.log("Cancel")}})},O=e=>{w({type:"datasetlist/changeFilter",payload:{type:"keyWords",value:e.target.value}})},T=e=>{localStorage.setItem("tab","d"),w({type:"train/save",payload:{defaultTab:"d"}}),J.a.push("/lab?datasetName=".concat(e.name))},k=e=>{return b.a.createElement(d["a"],null,b.a.createElement(d["a"].Item,null,b.a.createElement("span",{style:{color:"#1890ff",cursor:"pointer"},onClick:()=>N(e)},Object(Z["formatMessage"])({id:"datasetlist.del"}))))},F=b.a.createElement(d["a"],null,b.a.createElement(d["a"].Item,null,b.a.createElement("a",{href:"###",onClick:()=>J.a.push("/uploadFile?sourceType=upload")},Object(Z["formatMessage"])({id:"datasetlist.upload"}))),b.a.createElement(d["a"].Item,null,b.a.createElement("a",{href:"###",onClick:()=>J.a.push("/importFile?sourceType=import")},Object(Z["formatMessage"])({id:"datasetlist.import"})))),W=[{status:"",name:Object(Z["formatMessage"])({id:"datasetlist.name"}),rows:Object(Z["formatMessage"])({id:"datasetlist.rows"}),cols:Object(Z["formatMessage"])({id:"datasetlist.cols"}),size:Object(Z["formatMessage"])({id:"datasetlist.size"}),experimentTime:Object(Z["formatMessage"])({id:"datasetlist.time"}),date:Object(Z["formatMessage"])({id:"datasetlist.date"}),option:Object(Z["formatMessage"])({id:"datasetlist.option"})}],H=()=>{if(j.length>=C.total)return m["b"].warning(Object(Z["formatMessage"])({id:"datasetlist.nomore"})),_(!1),void h(!1);w({type:"datasetlist/queryTable",payload:{pagination:{current:C.current+1}}})},L=e=>{return b.a.createElement(c["b"].Item,{key:e.name,style:{backgroundColor:"rgb(249, 249, 249)",color:"rgba(0,0,0,0.85)",fontWeight:500}},b.a.createElement("div",{className:K.a.status},e.status),b.a.createElement("div",{className:K.a.name},e.name),b.a.createElement("div",{className:K.a.rows},e.rows),b.a.createElement("div",{className:K.a.cols},e.cols),b.a.createElement("div",{className:K.a.fileSize},e.size),b.a.createElement("div",{className:K.a.experimentTime},e.experimentTime),b.a.createElement("div",{className:K.a.createTime},e.date),b.a.createElement("div",{className:K.a.option},e.option))},R=Object(E["useState"])(!1),D=p()(R,2),B=(D[0],D[1],Object(E["useState"])("a")),Q=p()(B,2),V=Q[0],se=(Q[1],e=>{var t=null,a=b.a.createElement(o["a"],{content:S(e),trigger:"hover",placement:"bottom"},b.a.createElement("span",{style:{color:"#1890ff",cursor:"pointer"},onClick:()=>J.a.push("/lab?datasetName=".concat(e.name))},b.a.createElement(z,{length:20},e.name))),l=b.a.createElement("span",{style:{color:"#1890ff",cursor:"pointer"},onClick:()=>T(e)},e.n_experiments),n=b.a.createElement(i["a"],{overlay:k(e),placement:"bottomCenter"},b.a.createElement("a",null,"..."));if(0!==e.hints.length){if("Warning"===e.hints[0].type||"Error"===e.hints[0].type)if(0===e.hints.length)t=b.a.createElement(s["a"],{title:e.hints[0].message,placement:"bottom"},b.a.createElement(I["a"],{style:{fontSize:20,color:"rgb(255, 174, 43)"}}));else{var r=[];e.hints.forEach(e=>{r.push(e.message)});var m=r.join(", ");t=b.a.createElement(s["a"],{title:m,placement:"bottom"},b.a.createElement(I["a"],{style:{fontSize:20,color:"rgb(255, 174, 43)"}}))}}else t=b.a.createElement("span",null,b.a.createElement(Y["a"],{style:{fontSize:20,color:"green"}}));return b.a.createElement(c["b"].Item,null,b.a.createElement("div",{className:K.a.status},t),b.a.createElement("div",{className:K.a.name},a),b.a.createElement("div",{className:K.a.rows},String(e.n_rows).replace(re,",")),b.a.createElement("div",{className:K.a.cols},e.n_cols),b.a.createElement("div",{className:K.a.fileSize},Object(U["b"])(e.file_size)),b.a.createElement("div",{className:K.a.experimentTime},l),b.a.createElement("div",{className:K.a.createTime},A()(e.create_datetime).fromNow()),b.a.createElement("div",{className:K.a.option},n))});return b.a.createElement(f["a"],null,b.a.createElement(f["a"],{className:"site-layout",style:{marginTop:"0px",width:"100vh",height:"100vh"}},b.a.createElement(ae,{className:"site-layout-background",style:{marginTop:"30px",marginLeft:"-150px",minHeight:980}},"a"===V?b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{marginLeft:"170px"}},b.a.createElement(l["a"],null,b.a.createElement(r["a"],{span:12},b.a.createElement(le,{placeholder:Object(Z["formatMessage"])({id:"datasetlist.placeholder"}),onChange:e=>O(e),style:{width:300,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}})),b.a.createElement(r["a"],{span:12},b.a.createElement(i["a"],{overlay:F,placement:"bottomRight",arrow:!0},b.a.createElement(n["a"],{style:{float:"right"},type:"primary"},Object(Z["formatMessage"])({id:"datasetlist.new"}),b.a.createElement(q["a"],null))))),b.a.createElement(l["a"],{style:{marginTop:16}},b.a.createElement(r["a"],{span:24},b.a.createElement(c["b"],{dataSource:W,renderItem:e=>L(e),style:{backgroundColor:"#FFFFFF",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}),b.a.createElement("div",{className:K.a.infiniteContainer,style:{height:"200px"}},b.a.createElement(X.a,{initialLoad:!1,pageStart:0,loadMore:H,hasMore:!a&&y,useWindow:!1},b.a.createElement(c["b"],{dataSource:M,renderItem:e=>se(e),style:{backgroundColor:"#FFFFFF",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}))))))):b.a.createElement(b.a.Fragment,null),x[V])))};t["default"]=Object(y["o"])(se)},jQ3y:function(e,t,a){e.exports={label:"label___uT74H",tableHeader:"tableHeader___2aHrV",status:"status___1jdce",name:"name___8EWn9",rows:"rows___2eiZH",cols:"cols___38kLX",fileSize:"fileSize___3U3ji",experimentTime:"experimentTime___3c1AR",createTime:"createTime___nW3Np",option:"option___U8H9F",infiniteContainer:"infiniteContainer___38kL1",loadingContainer:"loadingContainer___3piqO"}},mcBY:function(e,t,a){e.exports={ellipsis:"ellipsis___1TzA1",lines:"lines___2Zug-",shadow:"shadow___2WsYJ",lineClamp:"lineClamp___1lMy3"}}}]);