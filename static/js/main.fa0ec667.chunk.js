(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,a,t){e.exports=t(396)},198:function(e,a,t){},200:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},396:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),i=t.n(r),c=(t(198),t(32)),o=t(75),s=t(76),m=t(81),u=t(77),d=t(82),p=t(6),h=t.n(p),g=(t(200),t(188)),E=t.n(g),b=t(73),f=t.n(b),C=t(16),v=t.n(C),k=t(31),w=t.n(k),y=t(72),P=t.n(y),O=t(60),S=t.n(O),M=t(40),N=t.n(M),x=t(116),j=t.n(x),B=t(27),R=t(5),A=t.n(R),L=t(189),T=t.n(L),F=t(190),I=t.n(F),D=t(119),W=t.n(D),q=t(117),z=t.n(q),H=t(118),J=t.n(H),G=t(191),K=t.n(G),V=t(185),U=t.n(V),X=t(186),$=t.n(X),Q=t(23),Y=t.n(Q),Z=t(181),_=t.n(Z),ee=t(187),ae=t.n(ee),te=t(79),ne=t.n(te),le=t(182),re=t.n(le),ie=t(45),ce=t.n(ie),oe=t(57),se=t.n(oe),me=t(80),ue=t.n(me),de=t(183),pe=t.n(de),he=t(184),ge=t.n(he),Ee=t(108),be=t.n(Ee),fe=t(110),Ce=t.n(fe),ve=t(109),ke=t.n(ve),we=t(107),ye=t.n(we),Pe=t(399),Oe=t(398),Se=t(400),Me=t(112),Ne=t.n(Me),xe=t(115),je=t.n(xe),Be=t(111),Re=t.n(Be),Ae=t(58),Le=t.n(Ae),Te=t(114),Fe=t.n(Te),Ie=t(39),De=t.n(Ie),We=t(59),qe=t.n(We),ze=t(113),He=t.n(ze),Je=t(78),Ge=0;function Ke(e,a,t,n,l){return{id:Ge+=1,name:e,calories:a,fat:t,carbs:n,protein:l}}function Ve(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Ue=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}],Xe=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).handleFirstPageButtonClick=function(e){t.props.onChangePage(e,0)},t.handleBackButtonClick=function(e){t.props.onChangePage(e,t.props.page-1)},t.handleNextButtonClick=function(e){t.props.onChangePage(e,t.props.page+1)},t.handleLastPageButtonClick=function(e){t.props.onChangePage(e,Math.max(0,Math.ceil(t.props.count/t.props.rowsPerPage)-1))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.count,n=e.page,r=e.rowsPerPage,i=e.theme;return l.a.createElement("div",{className:a.root},l.a.createElement(v.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===i.direction?l.a.createElement(ye.a,null):l.a.createElement(be.a,null)),l.a.createElement(v.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===i.direction?l.a.createElement(ke.a,null):l.a.createElement(Ce.a,null)),l.a.createElement(v.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Next Page"},"rtl"===i.direction?l.a.createElement(Ce.a,null):l.a.createElement(ke.a,null)),l.a.createElement(v.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Last Page"},"rtl"===i.direction?l.a.createElement(be.a,null):l.a.createElement(ye.a,null)))}}]),a}(l.a.Component),$e=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).createSortHandler=function(e){return function(a){t.props.onRequestSort(a,e)}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.onSelectAllClick,n=a.order,r=a.orderBy,i=a.numSelected,c=a.rowCount;return l.a.createElement(_.a,null,l.a.createElement(ne.a,null,l.a.createElement(Y.a,{padding:"checkbox"},l.a.createElement(se.a,{indeterminate:i>0&&i<c,checked:i===c,onChange:t})),Ue.map(function(a){return l.a.createElement(Y.a,{key:a.id,numeric:a.numeric,padding:a.disablePadding?"none":"default",sortDirection:r===a.id&&n},l.a.createElement(ue.a,{title:"Sort",placement:a.numeric?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(re.a,{active:r===a.id,direction:n,onClick:e.createSortHandler(a.id)},a.label)))},this)))}}]),a}(l.a.Component),Qe=function(e){var a=e.numSelected,t=e.classes;return l.a.createElement(f.a,{className:h()(t.root,Object(c.a)({},t.highlight,a>0))},l.a.createElement("div",{className:t.title},a>0?l.a.createElement(w.a,{color:"inherit",variant:"subtitle1"},a," selected"):l.a.createElement(w.a,{variant:"h6",id:"tableTitle"},"Nutrition")),l.a.createElement("div",{className:t.spacer}),l.a.createElement("div",{className:t.actions},a>0?l.a.createElement(ue.a,{title:"Delete"},l.a.createElement(v.a,{"aria-label":"Delete"},l.a.createElement(pe.a,null))):l.a.createElement(ue.a,{title:"Filter list"},l.a.createElement(v.a,{"aria-label":"Filter list"},l.a.createElement(ge.a,null)))))};Qe=A()(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(B.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(Qe);var Ye=A()(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(Xe),Ze=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleProfileMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t.state={order:"asc",orderBy:"calories",selected:[],data:[Ke("Cupcake",305,3.7,67,4.3),Ke("Donut",452,25,51,4.9),Ke("Eclair",262,16,24,6),Ke("Frozen yoghurt",159,6,24,4),Ke("Gingerbread",356,16,49,3.9),Ke("Honeycomb",408,3.2,87,6.5),Ke("Ice cream sandwich",237,9,37,4.3),Ke("Jelly Bean",375,0,94,0),Ke("KitKat",518,26,65,7),Ke("Lollipop",392,.2,98,0),Ke("Marshmallow",318,0,81,2),Ke("Nougat",360,19,9,37),Ke("Oreo",437,18,63,4)],page:0,rowsPerPage:5},t.handleRequestSort=function(e,a){var n=a,l="desc";t.state.orderBy===a&&"desc"===t.state.order&&(l="asc"),t.setState({order:l,orderBy:n})},t.handleSelectAllClick=function(e){e.target.checked?t.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):t.setState({selected:[]})},t.handleClick=function(e,a){var n=t.state.selected,l=n.indexOf(a),r=[];-1===l?r=r.concat(n,a):0===l?r=r.concat(n.slice(1)):l===n.length-1?r=r.concat(n.slice(0,-1)):l>0&&(r=r.concat(n.slice(0,l),n.slice(l+1))),t.setState({selected:r})},t.handleChangePage=function(e,a){t.setState({page:a})},t.handleChangeRowsPerPage=function(e){t.setState({rowsPerPage:e.target.value})},t.isSelected=function(e){return-1!==t.state.selected.indexOf(e)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.anchorEl,n=a.mobileMoreAnchorEl,r=this.props.classes,i=Boolean(t),c=Boolean(n),o=this.state,s=o.data,m=o.order,u=o.orderBy,d=o.selected,p=o.rowsPerPage,h=o.page,g=p-Math.min(p,s.length-h*p),b=l.a.createElement(j.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},l.a.createElement(N.a,{onClick:this.handleClose},"Profile"),l.a.createElement(N.a,{onClick:this.handleClose},"My account")),C=l.a.createElement(j.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMobileMenuClose},l.a.createElement(N.a,null,l.a.createElement(v.a,{color:"inherit"},l.a.createElement(S.a,{className:r.margin,badgeContent:4,color:"secondary"},l.a.createElement(z.a,null))),l.a.createElement("p",null,"Messages")),l.a.createElement(N.a,null,l.a.createElement(v.a,{color:"inherit"},l.a.createElement(S.a,{className:r.margin,badgeContent:11,color:"secondary"},l.a.createElement(J.a,null))),l.a.createElement("p",null,"Notifications")),l.a.createElement(N.a,{onClick:this.handleProfileMenuOpen},l.a.createElement(v.a,{color:"inherit"},l.a.createElement(W.a,null)),l.a.createElement("p",null,"Profile"))),k=l.a.createElement(ce.a,{className:r.root},l.a.createElement(Qe,{numSelected:d.length}),l.a.createElement("div",{className:r.tableWrapper},l.a.createElement(U.a,{className:r.table,"aria-labelledby":"tableTitle"},l.a.createElement($e,{numSelected:d.length,order:m,orderBy:u,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:s.length}),l.a.createElement($.a,null,function(e,a){var t=e.map(function(e,a){return[e,a]});return t.sort(function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]}),t.map(function(e){return e[0]})}(s,function(e,a){return"desc"===e?function(e,t){return Ve(e,t,a)}:function(e,t){return-Ve(e,t,a)}}(m,u)).slice(h*p,h*p+p).map(function(a){var t=e.isSelected(a.id);return l.a.createElement(ne.a,{hover:!0,onClick:function(t){return e.handleClick(t,a.id)},role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t},l.a.createElement(Y.a,{padding:"checkbox"},l.a.createElement(se.a,{checked:t})),l.a.createElement(Y.a,{component:"th",scope:"row",padding:"none"},a.name),l.a.createElement(Y.a,{numeric:!0},a.calories),l.a.createElement(Y.a,{numeric:!0},a.fat),l.a.createElement(Y.a,{numeric:!0},a.carbs),l.a.createElement(Y.a,{numeric:!0},a.protein))}),g>0&&l.a.createElement(ne.a,{style:{height:49*g}},l.a.createElement(Y.a,{colSpan:6}))))),l.a.createElement(ae.a,{colSpan:3,count:s.length,rowsPerPage:p,page:h,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:Ye}));return Je.isMobile?l.a.createElement("div",null," This content is unavailable on mobile"):l.a.createElement("div",{className:r.root},l.a.createElement(Pe.a,null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(Oe.a,{to:"/reactmaterial/"},"Home")),l.a.createElement("li",null,l.a.createElement(Oe.a,{to:"/reactmaterial/about"},"About")),l.a.createElement("li",null,l.a.createElement(Oe.a,{to:"/reactmaterial/login"},"Login"))),l.a.createElement("hr",null),l.a.createElement(Se.a,{exact:!0,path:"/reactmaterial/",component:function(){return l.a.createElement("div",null,l.a.createElement(Je.BrowserView,null,l.a.createElement("h2",null,"Home"),l.a.createElement(E.a,{position:"static"},l.a.createElement(f.a,null,l.a.createElement(v.a,{className:r.menuButton,color:"inherit","aria-label":"Open drawer"},l.a.createElement(T.a,null)),l.a.createElement(w.a,{className:r.title,variant:"h6",color:"inherit",noWrap:!0},"Material-UI"),l.a.createElement("div",{className:r.search},l.a.createElement("div",{className:r.searchIcon},l.a.createElement(I.a,null)),l.a.createElement(P.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput}})),l.a.createElement("div",{className:r.grow}),l.a.createElement("div",{className:r.sectionDesktop},l.a.createElement(v.a,{color:"inherit"},l.a.createElement(S.a,{className:r.margin,badgeContent:4,color:"secondary"},l.a.createElement(z.a,null))),l.a.createElement(v.a,{color:"inherit"},l.a.createElement(S.a,{className:r.margin,badgeContent:17,color:"secondary"},l.a.createElement(J.a,null))),l.a.createElement(v.a,{"aria-owns":i?"material-appbar":null,"aria-haspopup":"true",onClick:e.handleProfileMenuOpen,color:"inherit"},l.a.createElement(W.a,null))),l.a.createElement("div",{className:r.sectionMobile},l.a.createElement(v.a,{"aria-haspopup":"true",onClick:e.handleMobileMenuOpen,color:"inherit"},l.a.createElement(K.a,null))))),b,C,k),l.a.createElement(Je.MobileView,null,l.a.createElement("h1",null," This is rendered only on mobile ")))}}),l.a.createElement(Se.a,{path:"/reactmaterial/about",component:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"))}}),l.a.createElement(Se.a,{path:"/reactmaterial/login",component:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Login"),l.a.createElement(l.a.Fragment,null,l.a.createElement(Re.a,null),l.a.createElement("main",{className:r.layout},l.a.createElement(ce.a,{className:r.paper},l.a.createElement(Ne.a,{className:r.avatar},l.a.createElement(He.a,null)),l.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:r.form},l.a.createElement(Le.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(qe.a,{htmlFor:"email"},"Email Address"),l.a.createElement(De.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),l.a.createElement(Le.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(qe.a,{htmlFor:"password"},"Password"),l.a.createElement(De.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(Fe.a,{control:l.a.createElement(se.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(je.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit},"Sign in"))))))}}))))}}]),a}(l.a.Component),_e=A()(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(c.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),layout:Object(c.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(Ze);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(365),t(395);i.a.render(l.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[193,2,1]]]);
//# sourceMappingURL=main.fa0ec667.chunk.js.map