(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports={message:"Message_message__200Wj",avatar:"Message_avatar__1Iv50",alterMessage:"Message_alterMessage__2MJYN",messageBubble:"Message_messageBubble__HCys9",alterTime:"Message_alterTime__PAOHx",alterAvatar:"Message_alterAvatar__3U2RL",alterMessageBubble:"Message_alterMessageBubble__iPDCu"}},function(e,a,t){e.exports={closeButton:"Affairs_closeButton__OolDF",taskList:"Affairs_taskList__1OfQT",taskListItem:"Affairs_taskListItem__vc8mT",sortButton:"Affairs_sortButton__3RkrA"}},,function(e,a,t){e.exports={notfound:"Error404_notfound__1-idy","notfound-404":"Error404_notfound-404__3fACq",title:"Error404_title__3nq9L",subtitle:"Error404_subtitle__Kk7kh",link:"Error404_link__1IO6Y"}},,,,,,,,function(e,a,t){e.exports={success:"Greeting_success__2zlWK",form:"Greeting_form__1MOWY",total:"Greeting_total__f2re5",error:"Greeting_error__2j7xs"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2ti5T",input:"SuperInputText_input__3tFGf",errorInput:"SuperInputText_errorInput__2kzEJ",error:"SuperInputText_error__2pVfS"}},function(e,a,t){e.exports={textLoad:"HW10_textLoad__14ZnY",loader:"HW10_loader__1asjY",square:"HW10_square__1HB-p",motion:"HW10_motion__2ZZm-",path:"HW10_path__2fJ4y",dynamic:"HW10_dynamic__21CYp"}},,,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1gU4E",spanClassName:"SuperCheckbox_spanClassName__yY2VM"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__3o8n6",column:"HW4_column__nrsJz"}},function(e,a,t){e.exports={default:"SuperButton_default__3wolc",red:"SuperButton_red__121Vv"}},,,,function(e,a,t){e.exports={App:"App_App__3I2Vy"}},function(e,a,t){e.exports={nav:"Nav_nav__mUZ4M"}},,function(e,a,t){e.exports={range:"SuperRange_range__OnOx5"}},,,function(e,a,t){e.exports=t(60)},,,,,function(e,a,t){},,,,,function(e,a,t){e.exports={imgG:"PreJunior_imgG__2E3uT"}},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(51),t(40)),u=t.n(o),i=t(16),s=t(41),m=t.n(s);var d=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:m.a.nav},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/pre-junior"},"PRE_JUNIOR"),r.a.createElement(i.b,{to:"/Junior"},"Junior"),r.a.createElement(i.b,{to:"/JuniorPlus"},"JuniorPlus")))},E=t(6),p=t(17),f=t.n(p);var v=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:f.a.notfound},r.a.createElement("div",{className:f.a.notfound},r.a.createElement("div",{className:f.a.notfound404},r.a.createElement("h1",{className:f.a.title},"4",r.a.createElement("span",null,"0"),"4")),r.a.createElement("p",{className:f.a.subtitle},"The page you are looking for might have been removed had its name changed or is temporarily unavailable."),r.a.createElement("a",{href:f.a.link},"home page"))))},g=t(14),h=t.n(g);var _=function(e){return r.a.createElement("div",{className:h.a.messageBubble},r.a.createElement("div",{className:h.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"img"})),r.a.createElement("div",{className:"messageBlocks"},r.a.createElement("div",{className:h.a.message},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:h.a.time},r.a.createElement("time",null,e.time))))};var b=function(e){return r.a.createElement("div",{className:h.a.alterMessageBubble},r.a.createElement("div",{className:h.a.alterAvatar},r.a.createElement("img",{src:e.avatar,alt:"img"})),r.a.createElement("div",null,r.a.createElement("div",{className:h.a.alterMessage},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:h.a.alterTime},r.a.createElement("time",null,e.time))))},k="https://proza.ru/pics/2017/01/14/1314.jpg",C="Some Name",O="some text",j="22:00";var y=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:k,name:C,message:O,time:j}),r.a.createElement("hr",null),r.a.createElement(b,{avatar:k,name:C,message:O,time:j}),r.a.createElement("hr",null))},N=t(20),x=t(15),w=t.n(x);var S=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:w.a.taskList},r.a.createElement("button",{className:w.a.closeButton,onClick:function(){e.deleteAffairCallback(e.affair._id)}}),r.a.createElement("li",{className:w.a.taskListItem,key:e.affair._id},e.affair.name)))};var T=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:w.a.sortButton,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:w.a.sortButton,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:w.a.sortButton,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:w.a.sortButton,onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(n.useState)(I),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(T,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(10),M=t(3),J=t(25),L=t.n(J),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.setOnClick,u=l?L.a.error:L.a.success;return r.a.createElement("div",{className:L.a.form},r.a.createElement("input",{value:a,onClick:o,onChange:t,className:u,placeholder:l}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:L.a.total},"Total Users: ",c))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(M.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(M.a)(i,2),m=s[0],d=s[1],E=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){u(e.currentTarget.value),""===e.currentTarget.value&&d("Input field must not be empty")},addUser:function(){o?(t(o),alert("Hello ".concat(o))):d("Input field must not be empty"),u("")},error:m,setOnClick:function(){d("")},totalUsers:E})};var H=function(){var e=Object(n.useState)([]),a=Object(M.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e){l([{_id:12,name:e}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},R=t(5),U=t(26),W=t.n(U),G=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(u||""),m="".concat(i.value?W.a.superInput:W.a.errorInput," ").concat(o," ").concat(W.a.input);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},V=t(35),z=t.n(V),D=t(36),K=t.n(D),Y=function(e){var a=e.className,t=Object(R.a)(e,["className"]),n="".concat(t.children?K.a.red:K.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:n},t))},q=t(30),Z=t.n(q),Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(R.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(l.value?Z.a.superInput:Z.a.errorInput);return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:Z.a.spanClassName},n))};var $=function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(M.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c,className:z.a.blue}),r.a.createElement(Y,{red:!0,onClick:o},"delete "),r.a.createElement(Q,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Q,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},X=(t(56),function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(R.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(M.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,f=Object(R.a)(m,["children","onDoubleClick","className"]),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:v},f),d||c.value))});function ee(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ae(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ee("test",{x:"A",y:1});ae("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(X,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Y,{onClick:function(){ee("editable-span-value",t)}},"save"),r.a.createElement(Y,{onClick:function(){l(ae("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ne=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(R.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{value:e,key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.currentTarget.value),t&&t(e)}},l),c)},re=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(R.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){c&&c(e.currentTarget.value),l&&l(e)},i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",onChange:u,checked:e===n,name:a,value:e},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},le=["x","y","z"];var ce=function(){var e=Object(n.useState)(le[1]),a=Object(M.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ne,{options:le,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(re,{name:"radio",options:le,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(B,null),r.a.createElement(H,null),r.a.createElement($,null),r.a.createElement(te,null),r.a.createElement(ce,null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"JuniorPlus Page"))},ie=function(e,a){var t=Object(A.a)(e);return"sort"===a.type?t.sort((function(e,t){return"up"===a.payload?e.name<=t.name?-1:1:e.name>=t.name?-1:1})):"check"===a.type?e.filter((function(e){return e.age>=a.payload})):e},se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=[].concat(se),a=Object(n.useState)(e),t=Object(M.a)(a,2),l=t[0],c=t[1],o=l.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",o,r.a.createElement("div",null,r.a.createElement(Y,{onClick:function(){return c(ie(se,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(Y,{onClick:function(){return c(ie(se,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(Y,{onClick:function(){return c(ie(se,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var de=function(){var e=Object(n.useState)(0),a=Object(M.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(M.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(M.a)(s,2),d=m[0],E=m[1],p=function(){clearInterval(t)},f=u.toTimeString().split(" ")[0],v=u.toJSON().slice(0,10).replace(/-/g,"/");return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),d&&r.a.createElement("div",null,v),r.a.createElement(Y,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(Y,{onClick:p},"stop"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(de,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(24),fe=t(1),ve={loading:!1},ge=function(e){return{type:"SET_CRUTILKA",loading:e}},he=t(27),_e=t.n(he);var be=function(e){var a=Object.assign({},e);console.log(a);var t=Object(pe.b)(),n=Object(pe.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",n?r.a.createElement("div",{className:_e.a.loader},r.a.createElement("div",{className:_e.a.square}),r.a.createElement("div",{className:_e.a.path},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("p",{className:_e.a.textLoad},"Loading")):r.a.createElement("div",null,r.a.createElement(Y,{onClick:function(){t(ge(!0)),setTimeout((function(){t(ge(!1))}),1e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ke=t(29),Ce=t(43),Oe=t.n(Ce),je=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=e.value,c=Object(ke.a)(e,["type","onChange","onChangeRange","className","value"]),o="".concat(Oe.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",value:l,onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:o},c)))},ye=t(45),Ne=(t(59),function(e){e.onChange;var a=e.values,t=(e.onChangeRange,e.min),n=e.max,l=(e.step,e.disable,Object(ke.a)(e,["onChange","values","onChangeRange","min","max","step","disable"]));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{className:"slider",min:t,max:n,step:.5,onChange:function(e){l.setValue1(e[0]),l.setValue2(e[1])},draggableTrack:!0,value:a}))});var xe=function(){var e=Object(n.useState)(0),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(N.a)(c,2),u=o[0],i=o[1],s=0,m=100;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(je,{value:t,onChangeRange:l})),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Ne,{values:[t,u],min:s,max:m,onChangeRange:i,step:10,setValue1:l,setValue2:i}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var we=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Junior Page"),r.a.createElement("hr",null),r.a.createElement(me,null),r.a.createElement(Ee,null),r.a.createElement(be,null),r.a.createElement(xe,null))};var Se=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"imgG",sizes:"(max-width: 540px) 100vw, 540px",srcSet:"https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=135&h=135&fit=crop 135w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=270&h=270&fit=crop 270w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&h=540&fit=crop 540w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=810&h=810&fit=crop 810w",src:"https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&h=540&fit=crop",alt:"A brass instrument with lots of twists and turns",loading:"lazy",style:{margin:"auto",display:"block"}}))},Te="/",Ie="/pre-junior",Be="/JuniorPlus",Ae="/junior";var Me=function(){return r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:Te,exact:!0,render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(E.a,{path:Ie,exact:!0,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(E.a,{path:Be,exact:!0,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(E.a,{path:Ae,exact:!0,render:function(){return r.a.createElement(we,null)}}),r.a.createElement(E.a,{render:function(){return r.a.createElement(v,null)}})))};var Je=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(Me,null)))};var Le=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=t(23),Fe=Object(Pe.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CRUTILKA":return Object(fe.a)({},e,{loading:a.loading});default:return e}}}),He=Object(Pe.c)(Fe),Re=He;window.store=He,c.a.render(r.a.createElement(pe.a,{store:Re},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.ecc3d88f.chunk.js.map