(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){},201:function(e,a,t){e.exports=t(381)},210:function(e,a,t){},335:function(e,a,t){},378:function(e,a,t){},381:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(10),s=t.n(r),c=t(67),i=t(391),u=(t(210),t(57)),o=t(56),m=t(198),p={employee:[],employees:[]},h="ALL_EMPLOYEES",d=Object(o.c)({employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCHED_EMPLOYEE":return function(e,a){var t=Object(u.a)({},e);if(void 0!=a.value){var n=[];for(var l in e.employees)e.employees[l].firstName.match(a.value)&&n.push(e.employees[l]);t=Object.assign({},e,{employee:n})}return Object(u.a)({},t)}(e,a);case h:return function(e,a){var t=Object(u.a)({},e);return void 0!=a.employees&&(t=Object.assign({},e,{employees:a.employees})),Object(u.a)({},t)}(e,a);default:return e}}}),E=t(40),g=t.n(E),b=t(35),y="https://swag-api.herokuapp.com",v=function(){return new Promise(function(e,a){fetch("".concat(y,"/products")).then(function(a){e(a.json())})})},f=g.a.mark(k);function k(){var e;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.a)(v);case 3:return e=a.sent,a.next=6,Object(b.c)({type:h,employees:e});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(b.c)({type:"SEARCH_EMPLOYEE_ERROR",error:a.t0});case 12:case"end":return a.stop()}},f,this,[[0,8]])}var O=g.a.mark(j);function j(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(h,k);case 2:case"end":return e.stop()}},O,this)}var I=g.a.mark(C);function C(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(j);case 2:case"end":return e.stop()}},I,this)}var S=function(){var e=Object(m.a)();return Object(u.a)({},Object(o.d)(d,Object(o.a)(e)),{runSaga:e.run(C)})},M=t(46),w=t(47),P=t(50),x=t(48),N=t(49),q=(t(380),t(93)),A=t(30),D=(t(222),t(174)),L=t(176),T=t(387),R=t(384),B=t(385),Y=t(383),J=t(388),H=t(175),z=(t(144),D.a.Option),U=L.a.Group,W=T.a.Item,_=[{value:"India",label:"India"},{value:"United States",label:"United States"}],F=function(e){function a(e){var t;return Object(M.a)(this,a),(t=Object(P.a)(this,Object(x.a)(a).call(this,e))).onChange=function(e){console.log("radio checked",e.target.value),t.setState({value:e.target.value})},t.state={value:0},t.handleMessageInput=t.handleMessageInput.bind(Object(A.a)(Object(A.a)(t))),t.handleSubmitMessage=t.handleSubmitMessage.bind(Object(A.a)(Object(A.a)(t))),t}return Object(N.a)(a,e),Object(w.a)(a,[{key:"handleMessageInput",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"handleSubmitMessage",value:function(e){e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,a){e||console.log("values"+JSON.stringify(a))})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},t=e("prefix",{initialValue:"1"})(l.a.createElement(D.a,{style:{width:70}},l.a.createElement(z,{value:"1"},"+1"),l.a.createElement(z,{value:"91"},"+91")));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"Add Applicant"),l.a.createElement(R.a,{gutter:80},l.a.createElement(B.a,{span:4},l.a.createElement("div",{className:"picture"},l.a.createElement("img",{src:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png",default:"image",height:"200px",width:"200px"}))),l.a.createElement(B.a,{span:10},l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"First-Name"}),e("firstName",{rules:[{required:!0,message:"Please input your username!"}]})(l.a.createElement(Y.a,{name:"firstName",type:"text",value:this.state.firstName,onChange:this.handleMessageInput,placeholder:"first name"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Last-Name"}),e("lastName",{rules:[{required:!0,message:"Please input your lastName!"}]})(l.a.createElement(Y.a,{name:"lastName",type:"value",value:this.state.lastName,onChange:this.handleMessageInput,placeholder:"last name"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"email"}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(l.a.createElement(Y.a,{name:"emailAddress",type:"value",value:this.state.homePhone,onChange:this.handleMessageInput,placeholder:"Email Address"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Work-Phone"}),e("workphone",{rules:[{required:!0,message:"Please input your number!"}]})(l.a.createElement(Y.a,{type:"number",addonBefore:t,style:{width:"100%"},placeholder:"work-phone",name:"workPhone",value:this.state.workPhone,onChange:this.handleMessageInput})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"SSN"}),e("SSN",{rules:[{required:!0,message:"Please input your SSN number!"}]})(l.a.createElement(Y.a,{name:"SSN",type:"number",value:this.state.workPhone,onChange:this.handleMessageInput,placeholder:"xx-xxx-xxxx"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Skype-ID"}),e("skype-ID",{rules:[{required:!0,message:"Please input your skype-ID!"}]})(l.a.createElement(Y.a,{name:"skypeID",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"skype-ID"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"facebook-ID"}),e("facebook",{rules:[{required:!0,message:"Please input your facebook ID!"}]})(l.a.createElement(Y.a,{name:"facebook",type:"value",value:this.state.workPhone,onChange:this.handleMessageInput,placeholder:"Facebook profile URL"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Address"}),e("address",{rules:[{required:!0,message:"Please input your address!"}]})(l.a.createElement(Y.a,{name:"address",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Apt or unit no."})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Clearance"}),e("Clearance",{rules:[{required:!0,message:"Please select your clearance!"}]})(l.a.createElement(U,{onChange:this.onChange,value:this.state.value},l.a.createElement(L.a,{value:1},"YES"),l.a.createElement(L.a,{value:2},"NO"))))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:" Residence"}),e("residence",{initialValue:["United States"],rules:[{type:"array",required:!0,message:"Please select your country of residence!"}]})(l.a.createElement(J.a,{options:_})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"State"}),e("State",{rules:[{required:!0,message:"Please input your State!"}]})(l.a.createElement(Y.a,{name:"State",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"State"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Technology"}),e("Technology",{rules:[{required:!0,message:"Please input your Technology!"}]})(l.a.createElement(Y.a,{name:"technology",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Technology"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Primary-skills"}),e("Primary-skills",{rules:[{required:!0,message:"Please input your Primary skills!"}]})(l.a.createElement(Y.a,{name:"primary-skills",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Primary-skills"})))),l.a.createElement(R.a,null,l.a.createElement(W,{style:{float:"right",width:"66.5%"}},l.a.createElement(H.a,{type:"Submit",onClick:this.handleSubmitMessage},"Submit")))),l.a.createElement(B.a,{span:10},l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Middle-Name"}),e("middleName",{rules:[{required:!1}]})(l.a.createElement(Y.a,{name:"middleName",type:"text",value:this.state.firstName,onChange:this.handleMessageInput,placeholder:"middle name"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Nick-Name"}),e("Nick-Name",{rules:[{required:!1}]})(l.a.createElement(Y.a,{name:"nickname",type:"value",value:this.state.lastName,onChange:this.handleMessageInput,placeholder:"nick name"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Date-Of-Birth"}),e("DOB",{rules:[{required:!0,message:"please input your date of birth"}]})(l.a.createElement(Y.a,{name:"dob",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"MM-DD-YYYY"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Home-Phone"}),e("homePhone",{rules:[{required:!1}]})(l.a.createElement(Y.a,{type:"number",addonBefore:t,style:{width:"100%"},placeholder:"home-phone"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Linked-In"}),e("Linked-In",{rules:[{required:!1}]})(l.a.createElement(Y.a,{name:"linkedIn",type:"value",value:this.state.workPhone,onChange:this.handleMessageInput,placeholder:"linkedIn profile URL"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Twitter"}),e("twitter",{rules:[{required:!1}]})(l.a.createElement(Y.a,{name:"twitter",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Twitter Profile URL"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Work-Authorization"}),e("work-authorization",{rules:[{required:!0,message:"please input your work authorization"}]})(l.a.createElement(Y.a,{name:"work Authorization",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Work-Authorization"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"City"}),e("City",{rules:[{required:!0,message:"please input your City"}]})(l.a.createElement(Y.a,{name:"city",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"City"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Relocation"}),e("relocation",{rules:[{required:!0,message:"Please select your relocation!"}]})(l.a.createElement(U,{onChange:this.onChange,value:this.state.value},l.a.createElement(L.a,{value:1},"YES"),l.a.createElement(L.a,{value:2},"NO"))))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Postal-Code"}),e("Postal-Code",{rules:[{required:!0,message:"Please enter your Postal Code!"}]})(l.a.createElement(Y.a,{name:"postal-code",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"postal-code"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Job-Title"}),e("Job-Title",{rules:[{required:!0,message:"Please enter your Job-Title!"}]})(l.a.createElement(Y.a,{name:"Job-title",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"Job-title"})))),l.a.createElement(R.a,null,l.a.createElement(W,Object.assign({},a,{label:"Skills"}),e("Skills",{rules:[{required:!1}]})(l.a.createElement(Y.a,{name:"skills",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"skills"})))))))))}}]),a}(n.Component),V=T.a.create()(F),G=(t(335),t(386)),K=function(e){function a(e){var t;return Object(M.a)(this,a),(t=Object(P.a)(this,Object(x.a)(a).call(this,e))).empdata=function(){return 0!=t.props.searchedEmployee.length?t.props.searchedEmployee:t.props.employees},t.state={value:""},t.handleSubmitMessage=t.handleSubmitMessage.bind(Object(A.a)(Object(A.a)(t))),t.handleMessageInput=t.handleMessageInput.bind(Object(A.a)(Object(A.a)(t))),t}return Object(N.a)(a,e),Object(w.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch({type:h})}},{key:"handleSubmitMessage",value:function(e){e.preventDefault();this.state.value}},{key:"handleMessageInput",value:function(e){this.setState({value:e.target.value}),this.props.dispatch({type:"SEARCHED_EMPLOYEE",value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"input-form"},l.a.createElement(T.a,{onSubmit:this.handleSubmitMessage},l.a.createElement(Y.a,{type:"text",placeholder:"search employee here",value:this.state.value,onChange:this.handleMessageInput}),l.a.createElement(H.a,null,"search"))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(G.a,{columns:[{title:"first name",dataIndex:"firstName"},{title:"lastName",dataIndex:"lastName"},{title:"homePhone",dataIndex:"homePhone"}],dataSource:this.empdata(),size:"middle"}))))}}]),a}(n.Component),$=Object(c.b)(function(e){return{searchedEmployee:e.employee.employee,employees:e.employee.employees}})(K),Q=t(389),X=t(382),Z=t(15),ee=Q.a.Header,ae=Q.a.Content,te=Q.a.Footer,ne=Q.a.Sider,le=(Q.a.Row,Q.a.Col,X.a.SubMenu),re=function(e){function a(e){var t;return Object(M.a)(this,a),(t=Object(P.a)(this,Object(x.a)(a).call(this,e))).onButtonClicked=function(e){"add"===e?t.setState({isAddEmp:!0,isSearchEmp:!1}):t.setState({isSearchEmp:!0,isAddEmp:!1})},t.state={isAddEmp:!1,isSearchEmp:!1},t}return Object(N.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.isAddEmp,n=a.isSearchEmp;return l.a.createElement(Q.a,{style:{minHeight:"100vh"}},l.a.createElement(ne,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(X.a,{defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",alt:"image",width:"200px",height:"70px"}),l.a.createElement(le,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(Z.a,{type:"user"}),l.a.createElement("span",null,"Perosnal Details"))},l.a.createElement(X.a.Item,{key:"1",onClick:function(){return e.onButtonClicked("add")}},"Add Applicant"),l.a.createElement(X.a.Item,{key:"2",onClick:function(){return e.onButtonClicked("")}},"Search Applicant")),l.a.createElement(X.a.Item,{key:"3"},l.a.createElement(Z.a,{type:"desktop"}),l.a.createElement("span",null,"Documents")),l.a.createElement(le,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(Z.a,{type:"user"}),l.a.createElement("span",null,"Education Details"))},l.a.createElement(X.a.Item,{key:"4"},"Tom"),l.a.createElement(X.a.Item,{key:"5"},"Bill"),l.a.createElement(X.a.Item,{key:"6"},"Alex")),l.a.createElement(le,{key:"sub3",title:l.a.createElement("span",null,l.a.createElement(Z.a,{type:"team"}),l.a.createElement("span",null,"Certifications"))},l.a.createElement(X.a.Item,{key:"7"},"Team 1"),l.a.createElement(X.a.Item,{key:"8"},"Team 2")),l.a.createElement(X.a.Item,{key:"9"},l.a.createElement(Z.a,{type:"file"}),l.a.createElement("span",null,"Language")),l.a.createElement(X.a.Item,{key:"10"},l.a.createElement(Z.a,{type:"file"}),l.a.createElement("span",null,"Work Experience")))),l.a.createElement(Q.a,null,l.a.createElement(ee,{style:{background:"#fff",padding:0}}),l.a.createElement(ae,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},t?l.a.createElement(V,this.props):"",n?l.a.createElement($,this.props):""),l.a.createElement(te,{style:{textAlign:"center"}})))}}]),a}(n.Component),se=t(392),ce=t(393),ie=t(390),ue=(S(),function(){return l.a.createElement(i.a,null,l.a.createElement(se.a,null,l.a.createElement(ce.a,{exact:!0,path:"/DashBoard",render:function(e){return l.a.createElement(re,e)}}),l.a.createElement(ce.a,{exact:!0,path:"/AddEmployee",render:function(e){return l.a.createElement(V,e)}}),l.a.createElement(ce.a,{exact:!0,path:"/SearchEmployee",render:function(e){return l.a.createElement($,e)}}),l.a.createElement(ie.a,{to:"/dashboard"})))}),oe=(t(378),S(),function(e){function a(){return Object(M.a)(this,a),Object(P.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ue,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=S();s.a.render(l.a.createElement(i.a,null,l.a.createElement(c.a,{store:me},l.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,2,1]]]);
//# sourceMappingURL=main.7130e8e5.chunk.js.map