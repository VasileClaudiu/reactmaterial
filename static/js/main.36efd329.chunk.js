(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,a,t){e.exports=t(400)},231:function(e,a,t){},233:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},400:function(e,a,t){"use strict";t.r(a);t(120),t(138),t(214),t(217),t(226);var n=t(0),l=t.n(n),r=t(20),o=t.n(r),i=(t(231),t(34)),c=t(77),s=t(78),m=t(82),u=t(79),d=t(83),h=t(5),p=t.n(h),g=(t(233),t(192)),E=t.n(g),b=t(75),f=t.n(b),k=t(15),C=t.n(k),v=t(33),w=t.n(v),y=t(74),P=t.n(y),O=t(62),N=t.n(O),S=t(24),M=t.n(S),B=t(116),j=t.n(B),x=t(28),R=t(6),I=t.n(R),A=t(193),L=t.n(A),F=t(194),D=t.n(F),T=t(119),W=t.n(T),q=t(117),z=t.n(q),H=t(41),J=t.n(H),G=t(183),K=t(118),U=t.n(K),X=t(195),$=t.n(X),Q=t(189),V=t.n(Q),Y=t(190),Z=t.n(Y),_=t(23),ee=t.n(_),ae=t(185),te=t.n(ae),ne=t(191),le=t.n(ne),re=t(80),oe=t.n(re),ie=t(186),ce=t.n(ie),se=t(46),me=t.n(se),ue=t(58),de=t.n(ue),he=t(81),pe=t.n(he),ge=t(187),Ee=t.n(ge),be=t(188),fe=t.n(be),ke=t(109),Ce=t.n(ke),ve=t(111),we=t.n(ve),ye=t(110),Pe=t.n(ye),Oe=t(108),Ne=t.n(Oe),Se=t(403),Me=t(405),Be=t(404),je=t(113),xe=t.n(je),Re=t(61),Ie=t.n(Re),Ae=t(112),Le=t.n(Ae),Fe=t(59),De=t.n(Fe),Te=t(115),We=t.n(Te),qe=t(40),ze=t.n(qe),He=t(60),Je=t.n(He),Ge=t(114),Ke=t.n(Ge),Ue=(t(234),0);function Xe(e,a,t,n,l){return{id:Ue+=1,name:e,calories:a,fat:t,carbs:n,protein:l}}function $e(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Qe=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}],Ve=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).handleFirstPageButtonClick=function(e){t.props.onChangePage(e,0)},t.handleBackButtonClick=function(e){t.props.onChangePage(e,t.props.page-1)},t.handleNextButtonClick=function(e){t.props.onChangePage(e,t.props.page+1)},t.handleLastPageButtonClick=function(e){t.props.onChangePage(e,Math.max(0,Math.ceil(t.props.count/t.props.rowsPerPage)-1))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.count,n=e.page,r=e.rowsPerPage,o=e.theme;return l.a.createElement("div",{className:a.root},l.a.createElement(C.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===o.direction?l.a.createElement(Ne.a,null):l.a.createElement(Ce.a,null)),l.a.createElement(C.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===o.direction?l.a.createElement(Pe.a,null):l.a.createElement(we.a,null)),l.a.createElement(C.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Next Page"},"rtl"===o.direction?l.a.createElement(we.a,null):l.a.createElement(Pe.a,null)),l.a.createElement(C.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Last Page"},"rtl"===o.direction?l.a.createElement(Ce.a,null):l.a.createElement(Ne.a,null)))}}]),a}(l.a.Component),Ye=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).createSortHandler=function(e){return function(a){t.props.onRequestSort(a,e)}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.onSelectAllClick,n=a.order,r=a.orderBy,o=a.numSelected,i=a.rowCount;return l.a.createElement(te.a,null,l.a.createElement(oe.a,null,l.a.createElement(ee.a,{padding:"checkbox"},l.a.createElement(de.a,{indeterminate:o>0&&o<i,checked:o===i,onChange:t})),Qe.map(function(a){return l.a.createElement(ee.a,{key:a.id,numeric:a.numeric,padding:a.disablePadding?"none":"default",sortDirection:r===a.id&&n},l.a.createElement(pe.a,{title:"Sort",placement:a.numeric?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(ce.a,{active:r===a.id,direction:n,onClick:e.createSortHandler(a.id)},a.label)))},this)))}}]),a}(l.a.Component),Ze=function(e){var a=e.numSelected,t=e.classes;return l.a.createElement(f.a,{className:p()(t.root,Object(i.a)({},t.highlight,a>0))},l.a.createElement("div",{className:t.title},a>0?l.a.createElement(w.a,{color:"inherit",variant:"subtitle1"},a," selected"):l.a.createElement(w.a,{variant:"h6",id:"tableTitle"},"Nutrition")),l.a.createElement("div",{className:t.spacer}),l.a.createElement("div",{className:t.actions},a>0?l.a.createElement(pe.a,{title:"Delete"},l.a.createElement(C.a,{"aria-label":"Delete"},l.a.createElement(Ee.a,null))):l.a.createElement(pe.a,{title:"Filter list"},l.a.createElement(C.a,{"aria-label":"Filter list"},l.a.createElement(fe.a,null)))))};Ze=I()(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(x.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(Ze);var _e=I()(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(Ve),ea=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleProfileMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t.state={order:"asc",orderBy:"calories",selected:[],data:[Xe("Cupcake",305,3.7,67,4.3),Xe("Donut",452,25,51,4.9),Xe("Eclair",262,16,24,6),Xe("Frozen yoghurt",159,6,24,4),Xe("Gingerbread",356,16,49,3.9),Xe("Honeycomb",408,3.2,87,6.5),Xe("Ice cream sandwich",237,9,37,4.3),Xe("Jelly Bean",375,0,94,0),Xe("KitKat",518,26,65,7),Xe("Lollipop",392,.2,98,0),Xe("Marshmallow",318,0,81,2),Xe("Nougat",360,19,9,37),Xe("Oreo",437,18,63,4)],page:0,rowsPerPage:5},t.handleRequestSort=function(e,a){var n=a,l="desc";t.state.orderBy===a&&"desc"===t.state.order&&(l="asc"),t.setState({order:l,orderBy:n})},t.handleSelectAllClick=function(e){e.target.checked?t.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):t.setState({selected:[]})},t.handleClick=function(e,a){var n=t.state.selected,l=n.indexOf(a),r=[];-1===l?r=r.concat(n,a):0===l?r=r.concat(n.slice(1)):l===n.length-1?r=r.concat(n.slice(0,-1)):l>0&&(r=r.concat(n.slice(0,l),n.slice(l+1))),t.setState({selected:r})},t.handleChangePage=function(e,a){t.setState({page:a})},t.handleChangeRowsPerPage=function(e){t.setState({rowsPerPage:e.target.value})},t.isSelected=function(e){return-1!==t.state.selected.indexOf(e)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){Object(G.loadCSS)("https://use.fontawesome.com/releases/v5.1.0/css/all.css",document.querySelector("#insertion-point-jss"))}},{key:"render",value:function(){var e=this,a=this.state,t=a.anchorEl,n=a.mobileMoreAnchorEl,r=this.props.classes,o=Boolean(t),i=Boolean(n),c=this.state,s=c.data,m=c.order,u=c.orderBy,d=c.selected,h=c.rowsPerPage,g=c.page,b=h-Math.min(h,s.length-g*h),k=l.a.createElement(j.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose},l.a.createElement(M.a,{onClick:this.handleClose},"Profile"),l.a.createElement(M.a,{onClick:this.handleClose},"My account")),v=l.a.createElement(j.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMobileMenuClose},l.a.createElement(M.a,null,l.a.createElement(Ie.a,{color:"inherit",component:Se.a,to:"/reactmaterial/",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-home"),colorInherit:!0}))),l.a.createElement(M.a,null,l.a.createElement(C.a,{color:"inherit",component:Se.a,to:"/reactmaterial/about",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-info-circle"),colorInherit:!0}))),l.a.createElement(M.a,null,l.a.createElement(C.a,{color:"inherit",component:Se.a,to:"/reactmaterial/login",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-sign-in-alt"),colorInherit:!0}))),l.a.createElement(M.a,null,l.a.createElement(C.a,{color:"inherit"},l.a.createElement(N.a,{className:r.margin,badgeContent:4,color:"secondary"},l.a.createElement(z.a,null))),l.a.createElement("p",null,"Messages")),l.a.createElement(M.a,null,l.a.createElement(C.a,{color:"inherit"},l.a.createElement(N.a,{className:r.margin,badgeContent:11,color:"secondary"},l.a.createElement(U.a,null))),l.a.createElement("p",null,"Notifications")),l.a.createElement(M.a,{onClick:this.handleProfileMenuOpen},l.a.createElement(C.a,{color:"inherit"},l.a.createElement(W.a,null)),l.a.createElement("p",null,"Profile"))),y=l.a.createElement(me.a,{className:r.root},l.a.createElement(Ze,{numSelected:d.length}),l.a.createElement("div",{className:r.tableWrapper},l.a.createElement(V.a,{className:r.table,"aria-labelledby":"tableTitle"},l.a.createElement(Ye,{numSelected:d.length,order:m,orderBy:u,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:s.length}),l.a.createElement(Z.a,null,function(e,a){var t=e.map(function(e,a){return[e,a]});return t.sort(function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]}),t.map(function(e){return e[0]})}(s,function(e,a){return"desc"===e?function(e,t){return $e(e,t,a)}:function(e,t){return-$e(e,t,a)}}(m,u)).slice(g*h,g*h+h).map(function(a){var t=e.isSelected(a.id);return l.a.createElement(oe.a,{hover:!0,onClick:function(t){return e.handleClick(t,a.id)},role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t},l.a.createElement(ee.a,{padding:"checkbox"},l.a.createElement(de.a,{checked:t})),l.a.createElement(ee.a,{component:"th",scope:"row",padding:"none"},a.name),l.a.createElement(ee.a,{numeric:!0},a.calories),l.a.createElement(ee.a,{numeric:!0},a.fat),l.a.createElement(ee.a,{numeric:!0},a.carbs),l.a.createElement(ee.a,{numeric:!0},a.protein))}),b>0&&l.a.createElement(oe.a,{style:{height:49*b}},l.a.createElement(ee.a,{colSpan:6})))),l.a.createElement(le.a,{colSpan:3,count:s.length,rowsPerPage:h,page:g,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:_e})));return l.a.createElement("div",{className:r.root},l.a.createElement(Me.a,null,l.a.createElement("div",null,l.a.createElement(E.a,{position:"static"},l.a.createElement(f.a,null,l.a.createElement(C.a,{className:r.menuButton,color:"inherit","aria-label":"Open drawer"},l.a.createElement(L.a,null)),l.a.createElement(w.a,{className:r.title,variant:"h6",color:"inherit",noWrap:!0},"Material-UI"),l.a.createElement("div",{className:r.search},l.a.createElement("div",{className:r.searchIcon},l.a.createElement(D.a,null)),l.a.createElement(P.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput}})),l.a.createElement("div",{className:r.grow}),l.a.createElement("div",{className:r.sectionDesktop},l.a.createElement(Ie.a,{color:"inherit",component:Se.a,to:"/reactmaterial/",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-home"),colorInherit:!0})),l.a.createElement(C.a,{color:"inherit",component:Se.a,to:"/reactmaterial/about",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-info-circle"),colorInherit:!0})),l.a.createElement(C.a,{color:"inherit",component:Se.a,to:"/reactmaterial/login",linkButton:!0},l.a.createElement(J.a,{className:p()(r.icon,"fa fa-sign-in-alt"),colorInherit:!0})),l.a.createElement(C.a,{color:"inherit"},l.a.createElement(N.a,{className:r.margin,badgeContent:4,color:"secondary"},l.a.createElement(z.a,null))),l.a.createElement(C.a,{color:"inherit"},l.a.createElement(N.a,{className:r.margin,badgeContent:17,color:"secondary"},l.a.createElement(U.a,null))),l.a.createElement(C.a,{"aria-owns":o?"material-appbar":null,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},l.a.createElement(W.a,null))),l.a.createElement("div",{className:r.sectionMobile},l.a.createElement(C.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement($.a,null))))),k,v,l.a.createElement(Be.a,{exact:!0,path:"/reactmaterial/",component:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"),l.a.createElement("hr",null),y)}}),l.a.createElement(Be.a,{path:"/reactmaterial/about",component:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"))}}),l.a.createElement(Be.a,{path:"/reactmaterial/login",component:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Login"),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement(Le.a,null),l.a.createElement("main",{className:r.layout},l.a.createElement(me.a,{className:r.paper},l.a.createElement(xe.a,{className:r.avatar},l.a.createElement(Ke.a,null)),l.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:r.form},l.a.createElement(De.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(Je.a,{htmlFor:"email"},"Email Address"),l.a.createElement(ze.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),l.a.createElement(De.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(Je.a,{htmlFor:"password"},"Password"),l.a.createElement(ze.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(We.a,{control:l.a.createElement(de.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(Ie.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit},"Sign in"))))))}}))))}}]),a}(l.a.Component),aa=I()(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(i.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(i.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),layout:Object(i.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(ea);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(aa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[197,2,1]]]);
//# sourceMappingURL=main.36efd329.chunk.js.map