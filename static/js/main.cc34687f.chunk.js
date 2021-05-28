(this["webpackJsonpeasy-start-react"]=this["webpackJsonpeasy-start-react"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={input:"ContactForm_input__1Cn5A",from:"ContactForm_from__1y9OO"}},,function(t,e,n){t.exports={filter:"Filter_filter__2lQvT",filter__label:"Filter_filter__label__1ifZi",filter__input:"Filter_filter__input__2oqCu"}},,,function(t,e,n){t.exports={header:"Header_header__1mgMi"}},function(t,e,n){t.exports={main:"Main_main__2c5DA"}},function(t,e,n){t.exports={footer:"Footer_footer__1OXsS"}},function(t,e,n){t.exports={container:"Container_container__2E7KH"}},function(t,e,n){t.exports={title:"Section_title__2TWjs"}},function(t,e,n){t.exports={"contact-list":"ContactList_contact-list__12sUp"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(9),i=n.n(c),o=(n(22),n(10)),s=n(17),l=n(2),u=n(3),j=n(5),b=n(4),d=n(26),h=n(11),f=n.n(h),m=n(0),p=function(t){var e=t.children;return Object(m.jsx)("header",{className:f.a.header,children:e})},O=n(12),x=n.n(O),_=function(t){var e=t.children;return Object(m.jsx)("header",{className:x.a.main,children:e})},v=n(13),C=n.n(v),y=function(t){var e=t.children;return Object(m.jsx)("footer",{className:C.a.footer,children:e})},g=n(14),N=n.n(g),F=function(t){var e=t.children,n=(t.borderClass,[N.a.container]);return Object(m.jsx)("div",{className:n,children:e})},S=n(15),k=n.n(S),A=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{className:k.a.title,children:e}),n]})}}]),n}(r.Component),H=n(6),D=n.n(H),w=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onFormSubmit,n=t.inputHandler;return Object(m.jsxs)("form",{className:D.a.from,onSubmit:e,children:[Object(m.jsxs)("label",{children:["Name:",Object(m.jsx)("input",{className:D.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n,required:!0})]}),Object(m.jsxs)("label",{children:["Number:",Object(m.jsx)("input",{className:D.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:n,required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),I=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contactName,n=t.contactNumber,r=t.onDeleteContact,a=t.id;return Object(m.jsxs)("li",{children:[e," : ",n,Object(m.jsxs)("button",{type:"button",onClick:function(){return r(a)},children:[" ","Delete"]})]})}}]),n}(r.Component),J=n(16),M=n.n(J),z=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.contacts,r=t.deleteContactHandler;return Object(m.jsxs)("section",{children:[e,n.length?Object(m.jsx)("ul",{className:M.a["contact-list"],children:n.map((function(t){return Object(m.jsx)(I,{id:t.id,contactName:t.name,contactNumber:t.number,onDeleteContact:r},t.id)}))}):Object(m.jsx)("p",{children:"Nothing to see here"})]})}}]),n}(r.Component),T=n(8),Z=n.n(T),q=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.filterHandler;return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{className:Z.a.filter__label,children:["Find contacts by Name",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:Z.a.filter__input,type:"text",onChange:t})]})})}}]),n}(r.Component),L=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:"",name:"",number:""},t.onFormSubmit=function(e){if(e.preventDefault(),t.state.contacts.some((function(e){return e.name===t.state.name})))return alert("".concat(t.state.name," is already in contacts.")),void e.currentTarget.reset();var n={name:t.state.name,number:t.state.number,id:Object(d.a)()};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}})),e.currentTarget.reset()},t.handleInputChange=function(e){var n=e.target.name,r=e.target.value;t.setState(Object(o.a)({},n,r))},t.handleFilterChange=function(e){var n=e.target.value.toLowerCase();t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,r=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteConact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(_,{children:Object(m.jsxs)(A,{title:"Phonebook",children:[Object(m.jsx)(F,{children:Object(m.jsx)(w,{onFormSubmit:this.onFormSubmit,inputHandler:this.handleInputChange})}),Object(m.jsxs)(F,{children:[Object(m.jsx)("h2",{children:"Filter"}),Object(m.jsx)(F,{children:Object(m.jsx)(q,{filterHandler:this.handleFilterChange})}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(z,{contacts:this.getFilteredContacts(),deleteContactHandler:this.deleteConact})]})]})}),Object(m.jsx)(y,{})]})}}]),n}(r.Component);i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.cc34687f.chunk.js.map