(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),l=a.n(i),s=(a(65),a(8)),o=a(9),c=a(11),u=a(10),m=a(12),p=a(121),d=a(5),h=a.n(d),g=a(15),v=a(2),E=a.n(v),f=a(124),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stuff:"",dropdownOpen:!1},a.onClickData=function(){a.props.history.push("../listingcreate")},a.logout=function(){a.props.history.push("/")},a.onClickGuardage=function(){a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:[E.a.rootMenu,E.a.menuBar].join(" ")},r.a.createElement("div",{className:E.a.menuLogo},r.a.createElement("button",{className:E.a.btnGuardage,onClick:this.onClickGuardage},"GUARDAGE")),r.a.createElement("div",{className:E.a.navbar},r.a.createElement("div",{className:E.a.menuButtonRow},r.a.createElement("button",{className:E.a.btnLink},"Search"),r.a.createElement("button",{className:E.a.btnLink},"Resources"),r.a.createElement("div",{className:E.a.dropdown},r.a.createElement("button",{className:E.a.dropbtn},"Data ",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:E.a.dropdownContent},r.a.createElement("div",{className:E.a.dropdownItem,onClick:this.onClickData},"Create Listing"),r.a.createElement("div",{className:E.a.dropdownItem,onClick:this.onClickData},"Create Seller"),r.a.createElement("div",{className:E.a.dropdownItem},"Seller List"))))),r.a.createElement("ul",{className:E.a.menuLoginItems},r.a.createElement("li",{className:E.a.right},r.a.createElement("button",{className:E.a.btn,onClick:this.logout},"Logout ",r.a.createElement("i",{className:"fa fa-power-off "}))),r.a.createElement("li",{className:E.a.registerBtn},r.a.createElement("button",{className:E.a.btn},r.a.createElement("span",null,"John Smith")))))}}]),t}(r.a.Component),_=Object(f.a)(b),C=a(4),y=a.n(C),N=a(26),k=a.n(N);function S(e){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(h.a.mark(function e(t){var a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a="/api/listings/search/?q="+t.searchString+"&pageIndex="+t.pageIndex+"&pageSize="+t.pageSize+"&nonList="+t.nonList+"&whiteList="+t.whiteList+"&blackList="+t.blackList+"&prevNone="+t.prevNone+"&prevTakeDown="+t.prevTakeDown+"&prevApproved="+t.prevApproved+"&prevNotMyProperty="+t.prevNotMyProperty+"&prevIgnore="+t.prevIgnore+"&liveUrl="+t.liveUrl+"&deadUrl="+t.deadUrl,e.next=4,k.a.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function L(e){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/listings/"+t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function I(e,t){return j.apply(this,arguments)}function j(){return(j=Object(g.a)(h.a.mark(function e(t,a){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("/api/listings/"+t,a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e){return U.apply(this,arguments)}function U(){return(U=Object(g.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/listings",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function M(){return(M=Object(g.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/listings/email",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(e){return T.apply(this,arguments)}function T(){return(T=Object(g.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/sellers",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function B(){return D.apply(this,arguments)}function D(){return(D=Object(g.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/sellers");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var P=a(123),R=a(116),H=a(22),q=a(23),F=a.n(q),W=a(16),G=(a(30),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stuff:""},a.onSendEmail=function(){var e=a.props;(function(e){return M.apply(this,arguments)})({infringingHost:e.infringingHost,infringingUrl:e.infringingUrl,infringingEmail:e.infringingEmail}).then(function(e){e.status>=200&&e.status<=299?(W.NotificationManager.success("Email Sent to Seller"),console.log("Email Successfully Sent")):(W.NotificationManager.error("Email Error"),console.log("Email Sending Error")),a.props.onCloseModalAfterSendingEmail()})},a.onChange=function(e){a.setState(Object(H.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.root},r.a.createElement("div",{className:F.a.infringingEmail},r.a.createElement("label",{htmlFor:"infringingEmail"},"Infringing Email "),r.a.createElement("input",{type:"text",name:"infringingEmail",value:this.props.infringingEmail,style:{width:"100%"},onChange:this.onChange})),r.a.createElement("div",{className:F.a.infringingHost},r.a.createElement("label",{htmlFor:"infringingHost"},"Infringing Host"),r.a.createElement("input",{type:"text",name:"infringingHost",value:this.props.infringingHost,style:{width:"100%"},onChange:this.onChange})),r.a.createElement("div",{className:F.a.infringingUrl},r.a.createElement("label",{htmlFor:"infringingUrl"},"Infringing URL"),r.a.createElement("textarea",{id:"infringingUrl",name:"infringingUrl",rows:"5",cols:"33",value:this.props.infringingUrl,onChange:this.onChange,style:{width:"100%"}})),r.a.createElement("div",{className:F.a.btnRow},r.a.createElement("button",{className:F.a.btn,onClick:function(){return e.onSendEmail()}},"Submit")),r.a.createElement("div",{className:F.a.templateTitle},"Email Template"),r.a.createElement("div",{className:F.a.template},r.a.createElement("p",null,"NOTICE OF DMCA VIOLATION AND REQUEST FOR TAKE-DOWN"),"Re: Your listing at: ",r.a.createElement("b",null,this.props.infringingUrl),r.a.createElement("p",null,"To: ",r.a.createElement("b",null,this.props.infringingHost)),r.a.createElement("p",null,'The subject listing infringes upon my property rights as the owner of the "Milo" caricature (US Copyright Office reg no VA 2-059-772), which is used exclusively under license by the rock band "Descendents". (Parent company: the All Group).'),r.a.createElement("p",null,"Please remove the listing from your website immediately. Authorized use of my copyrighted image and Descendents copyright-protected images can be found on the Kings Road Merch website: https://kingsroadmerch.com/descendents/."),r.a.createElement("p",null,"I have a good faith belief that the disputed use is not authorized by the copyright, or its owner, or agents, or the law, and that the information in this notice is accurate. I state under penalty of perjury that I am the copyright or intellectual property owner of the Milo caricature. Additionally, I am authorized to act on behalf of the All Group/Descendents for intellectual property matters related to merchandise."),"Regards,",r.a.createElement("br",null),r.a.createElement("br",null)," Rodger Deuerlein",r.a.createElement("br",null),r.a.createElement("br",null),' Owner/Licensor of the "Milo" caricature',r.a.createElement("br",null),"Agent for Merchandise Integrity, All Group/Descendents",r.a.createElement("br",null)," 2012 Springfield Avenue",r.a.createElement("br",null)," Hermosa Beach, CA 90254 ",r.a.createElement("br",null),"tel: 310-245-8954",r.a.createElement("br",null),"rodger.deuerlein@gmail.com")))}}]),t}(r.a.Component)),z=Object(f.a)(G),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",listingUrl:"",imageUrl:"",title:" ",sellerID:0,price:0,dateCreated:"",dateModified:"",Status:"",modal:!1,dateToday:"",history:"",liveDead:"",host:"",dmcaEmail:"",listId:0},a.componentDidMount=function(){a.loadPage()},a.componentDidUpdate=function(){a.props.match.params.id!==a.state.id.toString()&&a.loadPage()},a.onClose=function(){a.props.history.push("../homepage")},a.onChangeStatus=function(e){var t=a.getDate();a.setState({dateToday:t},function(){var n=e+" "+t+" ";a.onUpdateStatus(e,n)})},a.onSubmitTakeDown=function(){a.onToggleDMCAModal()},a.onCloseModalAfterSendingEmail=function(){var e=a.state.modal;a.setState({modal:!e},function(){a.onChangeStatus("DMCA")})},a.getDate=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1;return t<10&&(t="0"+t),a<10&&(a="0"+a),a+"/"+t+"/"+e.getFullYear().toString().substr(-2)},a.onToggleDMCAModal=function(){var e=a.state.modal;a.setState({modal:!e})},a.handleWhiteList=function(){alert("add to white List")},a.handleBlackList=function(){alert("add to blacklist")},a.handleBtnRight=function(){a.props.history.push("../listingedit/1")},a.handleBtnLeft=function(){alert("left button")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loadPage",value:function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,L(t);case 3:a=e.sent,this.setState({id:a.id,listingUrl:a.listingUrl,imageUrl:a.imageUrl,title:a.title,sellerId:a.sellerId,dateCreated:a.dateCreated,dateModified:a.dateModified,price:a.price,status:a.status,history:a.history,liveDead:a.liveDead,host:a.host,dmcaEmail:a.dmcaEmail,listId:a.listId});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onUpdateStatus",value:function(){var e=Object(g.a)(h.a.mark(function e(t,a){var n,r,i,l,s,o,c,u,m,p,d,g,v,E,f;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state,r=n.id,i=n.listingUrl,l=n.imageUrl,s=n.title,o=n.sellerId,c=n.price,u=n.liveDead,m=n.host,p=n.dmcaEmail,d=n.listId,g=t,v=this.state.history,E={id:r,listingUrl:i,imageUrl:l,title:s,sellerId:o,price:c,status:g,history:v=v?v+", "+a:a,liveDead:u,host:m,dmcaEmail:p,listId:d},e.next=7,I(r,E);case 7:(f=e.sent).status>=200&&f.status<=299?(W.NotificationManager.success("Status Updated"),this.setState({status:g,history:v})):alert("Update Error");case 9:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.listingUrl,n=t.imageUrl,i=t.title,l=t.price,s=t.status,o=t.liveDead,c=t.history,u=t.host,m=t.listId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:y.a.root},r.a.createElement("div",{className:y.a.upperHost},r.a.createElement("div",null," ",u),2===m&&r.a.createElement("div",{className:y.a.listTypeBlack},"(Blacklist)"),1===m&&r.a.createElement("div",{className:y.a.listTypeWhite},"(White List)")),r.a.createElement("div",{className:y.a.upperActions+" "+y.a.parent},r.a.createElement("div",{className:y.a.column},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:y.a.outdent},"Site Priors"),r.a.createElement("td",{className:y.a.priorNumber},"4")),r.a.createElement("tr",null,r.a.createElement("td",null," Adverse:"),r.a.createElement("td",{className:y.a.adverse},"3")),r.a.createElement("tr",null,r.a.createElement("td",null," Approved:"),r.a.createElement("td",{className:y.a.priorNumber},"0"))))),r.a.createElement("div",{className:y.a.column},r.a.createElement("button",{className:y.a.btnWhiteList,onClick:this.handleWhiteList},"Add Site to White List"),r.a.createElement("br",null),r.a.createElement("button",{className:y.a.btnBlackList,onClick:this.handleBlackList},"Add Site to Black List")),r.a.createElement("div",{className:y.a.column},r.a.createElement("button",{className:y.a.btnClose,onClick:function(){return e.onClose()}},r.a.createElement("i",{className:"fa fa-times"})))),r.a.createElement("div",{className:y.a.leftArrow},r.a.createElement("button",{className:y.a.btnLeftArrow,onClick:this.handleBtnLeft},r.a.createElement("i",{className:"fas fa-chevron-left"})," ")),r.a.createElement("div",{className:y.a.middleImage},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:y.a.middleActions},r.a.createElement("dl",null,r.a.createElement("dt",null,"Listing URL:"),r.a.createElement("dd",null,r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement("dt",null,"Image URL:"),r.a.createElement("dd",null,r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),r.a.createElement("dt",null,"Title:")," ",r.a.createElement("dd",null," ",i),r.a.createElement("dt",null,"Price:")," ",r.a.createElement("dd",null," ",l)," ",r.a.createElement("dt",null,"History:"),r.a.createElement("dd",null,c),r.a.createElement("dt",null,"URL Status:"),/dmca/i.test(s)?r.a.createElement(r.a.Fragment,null,r.a.createElement("dd",{style:{color:"red"}},s)):r.a.createElement(r.a.Fragment,null,r.a.createElement("dd",null,s)),r.a.createElement("dt",{style:{fontSize:".9em",marginTop:"3px"}},"Live/Dead URL?"),r.a.createElement("dd",null,r.a.createElement("i",{className:"fa fa-circle",style:{color:"live"===o?"rgb(54, 234, 123)":"red",marginRight:"10px",marginBottom:"2px",fontSize:".75em"}}),o)),r.a.createElement("div",{className:y.a.btnGroup},r.a.createElement("button",{className:y.a.btnThree,onClick:function(){return e.onChangeStatus("Approved-Use")}},r.a.createElement("i",{className:"fa fa-check"}),r.a.createElement("br",null),"Approved Use"),r.a.createElement("button",{className:y.a.btnThree,onClick:function(){return e.onChangeStatus("Non-Property")}},r.a.createElement("i",{className:"fa fa-times"}),r.a.createElement("br",null),"Not my property"),r.a.createElement("button",{className:y.a.btnThree,onClick:function(){return e.onChangeStatus("Ignore")}},r.a.createElement("i",{className:"fa fa-minus"}),r.a.createElement("br",null),"Ignore"),r.a.createElement("button",{className:y.a.btnTakedown,onClick:this.onSubmitTakeDown},"SUBMIT",r.a.createElement("br",null),"TAKE DOWN"))),r.a.createElement("div",{className:y.a.rightArrow},r.a.createElement("button",{className:y.a.btnRightArrow,onClick:this.handleBtnRight},r.a.createElement("i",{className:"fas fa-chevron-right"}))),r.a.createElement("div",{className:y.a.lowerActions})),r.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.onToggleDMCAModal,className:y.a.modal},r.a.createElement("div",{className:y.a.modalRoot},r.a.createElement("div",{className:y.a.modalTitle},r.a.createElement("h2",null,"Send Take-down email")),r.a.createElement("div",{className:y.a.modalClose},r.a.createElement(R.a,{className:y.a.modalBtnClose,onClick:this.onToggleDMCAModal},r.a.createElement("i",{className:"fa fa-times"}))),r.a.createElement("div",{className:y.a.modalEmailSender},r.a.createElement(z,{infringingHost:a.split("/")[2],infringingUrl:a,infringingEmail:"rodger.deuerlein@gmail.com",onCloseModalAfterSendingEmail:this.onCloseModalAfterSendingEmail})))))}}]),t}(r.a.Component),Y=(a(56),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," This is the Login page ")}}]),t}(r.a.Component)),V=a(18),Q=a.n(V),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",nonList:!0,blackList:!0,whiteList:!1,prevNone:!0,prevTakeDown:!0,prevApproved:!1,prevNotMyProperty:!1,prevIgnore:!1,liveUrl:!0,deadUrl:!1},a.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState(Object(H.a)({},e.target.name,t))},a.handleSearchBtn=function(){var e={searchString:a.state.searchString,pageIndex:0,pageSize:8,nonList:a.state.nonList,whiteList:a.state.whiteList,blackList:a.state.blackList,prevNone:a.state.prevNone,prevTakeDown:a.state.prevTakeDown,prevApproved:a.state.prevApproved,prevNotMyProperty:a.state.prevNotMyProperty,prevIgnore:a.state.prevIgnore,liveUrl:a.state.liveUrl,deadUrl:a.state.deadUrl};a.props.handleSearchClick(e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchString,a=e.nonList,n=e.blackList,i=e.whiteList,l=e.prevNone,s=e.prevTakeDown,o=e.prevApproved,c=e.prevNotMyProperty,u=e.prevIgnore,m=e.liveUrl,p=e.deadUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Q.a.searchbar+" "+Q.a.root},r.a.createElement("div",{className:Q.a.search},r.a.createElement("input",{className:Q.a.inputSearch,type:"text",name:"searchString",value:t,onChange:this.onChange}),r.a.createElement("button",{className:Q.a.btnSearch,value:"",onClick:this.handleSearchBtn},"Search")),r.a.createElement("div",{className:Q.a.sellers},r.a.createElement("div",{className:Q.a.filterCategory},"Sellers:"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"nonList",checked:a,value:a,onChange:this.onChange}),"Non-list"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"blackList",checked:n,value:n,onChange:this.onChange}),"Blacklist"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"whiteList",checked:i,value:i,onChange:this.onChange}),"Whitelist")),r.a.createElement("div",{className:Q.a.priors1},r.a.createElement("div",{className:Q.a.filterCategory},"Previous action on URL:"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"prevNone",checked:l,value:l,onChange:this.onChange}),"None"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"prevTakeDown",checked:s,value:s,onChange:this.onChange}),"Take-Down actions"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"prevApproved",checked:o,value:o,onChange:this.onChange}),'marked "approved use"')),r.a.createElement("div",{className:Q.a.priors2},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"prevNotMyProperty",checked:c,value:c,onChange:this.onChange}),'marked "not my property"'),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"prevIgnore",checked:u,value:u,onChange:this.onChange}),'marked "ignore"')),r.a.createElement("div",{className:Q.a.deadlive},r.a.createElement("div",{className:Q.a.filterCategory},"Live/Dead URL"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"liveUrl",checked:m,value:m,onChange:this.onChange}),"Live"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"deadUrl",checked:p,value:p,onChange:this.onChange}),"Dead"))))}}]),t}(r.a.Component),Z=a(28),X=a.n(Z),$=a(117),ee=a(118),te=a(119),ae=a(35),ne=a.n(ae),re=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.totalPages,n=t.currentPage,i=t.buttonCount,l=0,s=n-Math.floor(i/2);s>l&&(l=s);var o=Math.min(l+i-1,a-1);l=Math.max(l,o-i+1);for(var c=[],u=function(t){c.push(r.a.createElement($.a,{key:t},r.a.createElement(ee.a,{onClick:function(){return e.props.goTo(t)},className:e.props.currentPage===t?"bg-primary":"",style:e.props.currentPage===t?{color:"white"}:{}},t+1)))},m=l;m<=o;m++)u(m);return r.a.createElement(r.a.Fragment,null,this.props.totalPages?r.a.createElement("div",{className:ne.a.paginator,style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:ne.a.counts},"Records found: ",this.props.totalCount),r.a.createElement(te.a,{"aria-label":"Page navigation example"},r.a.createElement($.a,null,r.a.createElement(ee.a,{previous:!0,onClick:function(){return e.props.goTo(0)}})),c,r.a.createElement($.a,null,r.a.createElement(ee.a,{next:!0,onClick:function(){return e.props.goTo(e.props.totalPages-1)}})))):null)}}]),t}(r.a.Component);re.defaultProps={totalPages:0,currentPage:0,buttonCount:9};var ie=re,le=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={listings:[],totalCount:0,totalPages:0,searchString:"",pageIndex:0,pageSize:8,nonList:!0,whiteList:!1,blackList:!0,prevNone:!0,prevTakeDown:!0,prevApproved:!1,prevNotMyProperty:!1,prevIgnore:!1,liveUrl:!0,deadUrl:!1},a.handleSearchClick=function(e){console.log(e),S(e).then(function(t){var n=t.totalCount,r=Math.floor(n/e.pageSize+1);a.setState({listings:t.pagedItems,totalCount:n,totalPages:r,buttonCount:9,searchString:e.searchString,pageIndex:e.pageIndex,pageSize:e.pageSize,nonList:e.nonList,whiteList:e.whiteList,blackList:e.blackList,prevNone:e.prevNone,prevTakeDown:e.prevTakeDown,prevApproved:e.prevApproved,prevNotMyProperty:e.prevNotMyProperty,prevIgnore:e.prevIgnore,liveUrl:e.liveUrl,deadUrl:e.deadUrl})})},a.goTo=function(e){console.log("GoTo clicked: "+e);var t={searchString:a.state.searchString,pageIndex:e,pageSize:a.state.pageSize,nonList:a.state.nonList,whiteList:a.state.whiteList,blackList:a.state.blackList,prevNone:a.state.prevNone,prevTakeDown:a.state.prevTakeDown,prevApproved:a.state.prevApproved,prevNotMyProperty:a.state.prevNotMyProperty,prevIgnore:a.state.prevIgnore,liveUrl:a.state.liveUrl,deadUrl:a.state.deadUrl};S(t).then(function(n){var r=n.totalCount,i=Math.floor(r/t.pageSize+1);a.setState({listings:n.pagedItems,totalCount:r,totalPages:i,currentPage:e,buttonCount:9})})},a.handleListingClick=function(e){a.props.history.push("./listingedit/"+e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark(function e(){var t,a,n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={searchString:"",pageIndex:0,pageSize:8,nonList:this.state.nonList,whiteList:this.state.whiteList,blackList:this.state.blackList,prevNone:this.state.prevNone,prevTakeDown:this.state.prevTakeDown,prevApproved:this.state.prevApproved,prevNotMyProperty:this.state.prevNotMyProperty,prevIgnore:this.state.prevIgnore,liveUrl:this.state.liveUrl,deadUrl:this.state.deadUrl},e.next=3,S(t);case 3:a=e.sent,n=a.totalCount,r=Math.floor(n/8+1),this.setState({listings:a.pagedItems,totalCount:n,totalPages:r,buttonCount:9,currentPage:0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.listings,n=t.totalPages,i=t.totalCount,l=t.buttonCount,s=t.currentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menubar"},r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement(K,{handleSearchClick:this.handleSearchClick})),r.a.createElement("div",null,r.a.createElement(ie,{buttonCount:l,totalCount:i,totalPages:n,goTo:this.goTo,currentPage:s})),r.a.createElement("div",{className:X.a.resultContainer},a.map(function(t){return r.a.createElement("div",{key:t.id,className:"dead"===t.liveDead?X.a.resultCard+" "+X.a.dead:X.a.resultCard,onClick:function(){return e.handleListingClick(t.id)}},r.a.createElement("img",{className:X.a.resultImage,src:t.imageUrl,alt:""}),r.a.createElement("div",{className:X.a.resultHost},r.a.createElement("div",null," ",t.host," "),r.a.createElement("div",null," ",2===t.listId&&"Blacklist"," "),r.a.createElement("div",null," ",1===t.listId&&"Whitelist"," ")))})))}}]),t}(r.a.Component),se=Object(f.a)(le),oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onLoggedIn=function(){a.props.history.push("./homepage")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:[E.a.rootMenu,E.a.menuBar].join(" ")},r.a.createElement("div",{className:E.a.menuLogo},r.a.createElement("button",{className:E.a.btnGuardage,onClick:this.onClickGuardage},"GUARDAGE")),r.a.createElement("div",{className:E.a.navbar},r.a.createElement("div",{className:E.a.menuButtonRow},r.a.createElement("button",{className:E.a.btnLink},"Services"),r.a.createElement("button",{className:E.a.btnLink},"Your Rights"),r.a.createElement("div",{className:E.a.dropdown},r.a.createElement("button",{className:E.a.dropbtn},"Pricing ",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:E.a.dropdownContent},r.a.createElement("div",{className:E.a.dropdownItem},"Free Services"),r.a.createElement("div",{className:E.a.dropdownItem},"Subscription Services"),r.a.createElement("div",{className:E.a.dropdownItem},"Legal Services"))))),r.a.createElement("ul",{className:E.a.menuLoginItems},r.a.createElement("li",{className:E.a.right},r.a.createElement("button",{className:E.a.btn,onClick:this.onLoggedIn},r.a.createElement("span",null,"Login",r.a.createElement("i",{className:"fas fa-user"})))),r.a.createElement("li",{className:E.a.right},r.a.createElement("button",{className:E.a.btn},r.a.createElement("span",null,"Register"))))),r.a.createElement("div",{className:E.a.jumbotron},"Protect what's yours."))}}]),t}(r.a.Component),ce=a(36),ue=a(120),me=a(6),pe=a.n(me),de=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={reqListing:{listingUrl:"",imageUrl:"",title:"",sellerId:0,price:0,dateCreated:"",dateModified:"",status:"pending",history:"",liveDead:"live"},reqSeller:{host:"",dmcaEmail:"",listId:0,otherEmail:"",phone:"",street:"",street2:"",city:"",state:"",postalCode:"",country:""},sellers:[]},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return{reqListing:Object(ce.a)({},e.reqListing,Object(H.a)({},n,r))}})},a.onChangeSeller=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return{reqSeller:Object(ce.a)({},e.reqSeller,Object(H.a)({},n,r))}})},a.onClose=function(){a.props.history.push("../homepage")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark(function e(){var t,a=this;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:(t=e.sent).sort(function(e,t){return e.host>t.host?1:t.host>e.host?-1:0}),this.setState({sellers:t},function(){console.log(a.state.sellers)});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onSubmitListing",value:function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.reqListing,e.next=3,x(t);case 3:a=e.sent,console.log(a),a.status>=200&&a.status<=299?W.NotificationManager.success("New Listing Created"):W.NotificationManager.error("Database Insert Error");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onSubmitSeller",value:function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.reqSeller,e.next=3,A(t);case 3:(a=e.sent).status>=200&&a.status<300?W.NotificationManager.success("New Seller Created"):W.NotificationManager.error("Database Insert Error");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.sellers.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.host,"  (",e.id,")")});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:pe.a.root},r.a.createElement("div",{className:pe.a.topArea},r.a.createElement("button",{className:pe.a.btnClose,onClick:this.onClose},r.a.createElement("i",{className:"fa fa-times"}))),r.a.createElement("div",{className:pe.a.listingContainer},r.a.createElement("h3",null,"Create Listing"),r.a.createElement("div",null,"Listing Url:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"listingUrl",value:this.state.reqListing.listingUrl,onChange:this.onChange})),r.a.createElement("div",null,"Image Url:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"imageUrl",value:this.state.reqListing.imageUrl,onChange:this.onChange})),r.a.createElement("div",null,"Title:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"title",value:this.state.reqListing.title,onChange:this.onChange})),r.a.createElement("div",null,"Price:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"number",name:"price",value:this.state.reqListing.price,onChange:this.onChange})),r.a.createElement("div",null,"Seller Id:"),r.a.createElement("div",null,r.a.createElement(ue.a,{className:pe.a.input,type:"select",name:"sellerId",value:this.state.reqListing.sellerId,onChange:this.onChange},t)),r.a.createElement("div",null,"Status:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"status",value:this.state.reqListing.status,onChange:this.onChange})),r.a.createElement("button",{className:pe.a.btnSubmit,onClick:function(){return e.onSubmitListing()}},"Submit")),r.a.createElement("div",{className:pe.a.sellerContainer},r.a.createElement("h3",null,"Create Seller")," ",r.a.createElement("div",null,"Host:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"host",value:this.state.reqSeller.host,onChange:this.onChangeSeller})),r.a.createElement("div",null,"DMCA Email:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"dmcaEmail",value:this.state.reqSeller.dmcaEmail,onChange:this.onChangeSeller})),r.a.createElement("div",null,"List ID:"),r.a.createElement("div",null,r.a.createElement(ue.a,{className:pe.a.input,type:"select",name:"listId",value:this.state.reqSeller.listId,onChange:this.onChangeSeller},r.a.createElement("option",{value:"0"},"No List"),r.a.createElement("option",{value:"1'"},"Whitelist"),r.a.createElement("option",{value:"2"},"Blacklist"),r.a.createElement("option",{value:"5"},"Testing"))),r.a.createElement("div",null,"Other Email:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"otherEmail",value:this.state.reqSeller.otherEmail,onChange:this.onChangeSeller})),r.a.createElement("div",null,"Phone:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"phone",value:this.state.reqSeller.phone,onChange:this.onChangeSeller})),r.a.createElement("div",null,"Street:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"street",value:this.state.reqSeller.street,onChange:this.onChangeSeller})),r.a.createElement("div",null,"Street2:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"street2",value:this.state.reqSeller.street2,onChange:this.onChangeSeller})),r.a.createElement("div",null,"City:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"city",value:this.state.reqSeller.city,onChange:this.onChangeSeller})),r.a.createElement("div",null,"state:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"state",value:this.state.reqSeller.state,onChange:this.onChangeSeller})),r.a.createElement("div",null,"Postal Code:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"postalCode",value:this.state.reqSeller.postalCode,onChange:this.onChangeSeller})),r.a.createElement("div",null,"Country:"),r.a.createElement("div",null,r.a.createElement("input",{className:pe.a.input,type:"text",name:"country",value:this.state.reqSeller.country,onChange:this.onChangeSeller})),r.a.createElement("button",{className:pe.a.btnSubmit,onClick:function(){return e.onSubmitSeller()}},"Submit"))))}}]),t}(r.a.Component),he=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).createNotification=function(e){return function(){switch(e){case"info":W.NotificationManager.info("Info message");break;case"success":W.NotificationManager.success("Success message","Title here");break;case"warning":W.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":W.NotificationManager.error("Error message","Click me!",5e3,function(){alert("callback")});break;default:W.NotificationManager.warning("Reached Default Switch Case")}}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W.NotificationContainer,null))}}]),t}(r.a.Component),ge=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/login",component:Y}),r.a.createElement(p.a,{exact:!0,path:"/homepage",component:se}),r.a.createElement(p.a,{path:"/listingedit/:id",component:J}),r.a.createElement(p.a,{exact:!0,path:"/listingcreate",component:de}),r.a.createElement(p.a,{exact:!0,path:"/emailsender",component:z}),r.a.createElement(he,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(122);l.a.render(r.a.createElement(ve.a,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},18:function(e,t,a){e.exports={searchbar:"SearchBar_searchbar__3w4dY",root:"SearchBar_root__1sCtl",search:"SearchBar_search__1PYzQ",sellers:"SearchBar_sellers__3wOpw",priors1:"SearchBar_priors1__3jtTl",priors2:"SearchBar_priors2__38ciP",deadlive:"SearchBar_deadlive__uUmUk",filterCategory:"SearchBar_filterCategory__2kPcm",btnSearch:"SearchBar_btnSearch__COaVt",inputSearch:"SearchBar_inputSearch__1m65J"}},2:function(e,t,a){e.exports={menuBar:"MenuBar_menuBar__3WIhv",rootMenu:"MenuBar_rootMenu__ApeJh",menuLogo:"MenuBar_menuLogo__MOPCd",btnGuardage:"MenuBar_btnGuardage__1pk3F",menuButtonRow:"MenuBar_menuButtonRow__1aSpA",menuLoginItems:"MenuBar_menuLoginItems__I1M7k",right:"MenuBar_right__1bu_A",registerBtn:"MenuBar_registerBtn__3MZMy",btn:"MenuBar_btn__bamYh",jumbotron:"MenuBar_jumbotron__3sHwu",navbar:"MenuBar_navbar__DeQno",btnLink:"MenuBar_btnLink__2f2dw",dropdown:"MenuBar_dropdown__3sjQH",dropbtn:"MenuBar_dropbtn__tMC8-",dropdownContent:"MenuBar_dropdownContent__1HKBL",dropdownItem:"MenuBar_dropdownItem__3VvXI"}},23:function(e,t,a){e.exports={root:"EmailSender_root__3f_dx",btn:"EmailSender_btn__17cEm",btnRow:"EmailSender_btnRow__2w3UA",infringingEmail:"EmailSender_infringingEmail__3okoa",infringingHost:"EmailSender_infringingHost__3EJ02",infringingUrl:"EmailSender_infringingUrl__28nm6",templateTitle:"EmailSender_templateTitle__1h74Z",template:"EmailSender_template__3VpcQ"}},28:function(e,t,a){e.exports={resultContainer:"HomePage_resultContainer__2FSRW",resultCard:"HomePage_resultCard__3JdAw",dead:"HomePage_dead__xI6u4",resultImage:"HomePage_resultImage__EGeIG",resultHost:"HomePage_resultHost__2Rivg"}},35:function(e,t,a){e.exports={paginator:"Paginator_paginator__1g4Rk",counts:"Paginator_counts__3c4u8"}},4:function(e,t,a){e.exports={root:"ListingEdit_root__sTNMr",btnWhiteList:"ListingEdit_btnWhiteList__2HZHw",btnBlackList:"ListingEdit_btnBlackList__1lJXN",btnClose:"ListingEdit_btnClose__1WOG3",upperHost:"ListingEdit_upperHost__I8U-J",listTypeBlack:"ListingEdit_listTypeBlack__15iUc",listTypeWhite:"ListingEdit_listTypeWhite__2Jwuj",upperActions:"ListingEdit_upperActions__TWyou",middleImage:"ListingEdit_middleImage__2wbLL",middleActions:"ListingEdit_middleActions__rO33U",rightArrow:"ListingEdit_rightArrow__2gIZ1",btnRightArrow:"ListingEdit_btnRightArrow__8e4vU",leftArrow:"ListingEdit_leftArrow__3gnxa",btnLeftArrow:"ListingEdit_btnLeftArrow__2nY6C",lowerActions:"ListingEdit_lowerActions___5Cxo",btnThree:"ListingEdit_btnThree__1yTcw",btnTakedown:"ListingEdit_btnTakedown__Au0lu",parent:"ListingEdit_parent__pYU1q",column:"ListingEdit_column__H6jgd",priorNumber:"ListingEdit_priorNumber__1_wE-",adverse:"ListingEdit_adverse__pwXSp",outdent:"ListingEdit_outdent__3iohF",btnGroup:"ListingEdit_btnGroup__w36Vb",modal:"ListingEdit_modal__3F3k9",modalRoot:"ListingEdit_modalRoot__jOLYS",modalTitle:"ListingEdit_modalTitle__2HyCm",modalClose:"ListingEdit_modalClose__3tuUy",modalEmailSender:"ListingEdit_modalEmailSender__pxyBg",modalBtnClose:"ListingEdit_modalBtnClose__2IjLn"}},56:function(e,t,a){},6:function(e,t,a){e.exports={root:"ListingCreate_root__2FbUg",topArea:"ListingCreate_topArea__29YOt",btnClose:"ListingCreate_btnClose__2aTkN",listingContainer:"ListingCreate_listingContainer__1avFz",sellerContainer:"ListingCreate_sellerContainer__3bNy2",input:"ListingCreate_input__3M-td",btnSubmit:"ListingCreate_btnSubmit__1k_0h"}},60:function(e,t,a){e.exports=a(115)},65:function(e,t,a){}},[[60,2,1]]]);
//# sourceMappingURL=main.d34cc64f.chunk.js.map