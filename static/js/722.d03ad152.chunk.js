"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[722],{2722:function(n,e,t){t.r(e),t.d(e,{default:function(){return he}});var r,o,i,a,s=t(9434),c=t(2791),d=t(3634),l=t(6916),x=function(n){return n.contacts.items},u=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},f=(0,l.P1)([x,function(n){return n.filter},u],(function(n,e,t){return t?[]:e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),b=t(9439),h=t(1634),m=t(5264),g=t(4164),w=t(168),v=t(1783),Z=t(7322),y=v.Z.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n"]))),j=v.Z.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: calc(320px - 64px);\n  padding: 16px;\n  background-color: rgb(235, 235, 235);;\n  border: 1px solid black;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n              0 5px 5px rgba(0, 0, 0, 0.25);\n\n   @media screen and (min-width: 768px) {\n    width: 100%;\n    max-width: calc(768px - 64px);    \n  }\n\n  & > h1 {\n    font-size: 28px;\n    text-align: center;\n  }\n"]))),k=v.Z.button(i||(i=(0,w.Z)(["\nposition: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  align-items: center; \n  padding: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;  \n  cursor: pointer;  \n  \n  &:hover > svg {\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };\n\n  &:active > svg {\n    background-color: rgb(181, 245, 254);\n  };  \n"]))),C=(0,v.Z)(Z.FU5)(a||(a=(0,w.Z)(["  \n  width: 16px;\n  height: 16px;\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: buttonface;\n  transition: box-shadow 250ms linear;\n"]))),F=t(3329),E=document.querySelector("#modal-root"),z=function(n){var e=n.onClose,t=n.children,r=function(n){"Escape"===n.code&&e()};return(0,c.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}})),(0,g.createPortal)((0,F.jsx)(y,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,F.jsxs)(j,{children:[(0,F.jsx)(k,{onClick:e,children:(0,F.jsx)(C,{})}),t]})}),E)},L=t(5861),N=t(4687),_=t.n(N),P=t(5705);function R(n){for(var e=n.split(" "),t="",r=0;r<e.length;r++){var o=e[r];t+=o.substring(0,1).toUpperCase()+o.substring(1)+" "}return t}var q,B,I,A,M,S,J,T,X,K,U,V,W,$,D,G,H,Y,O,Q,nn,en,tn,rn,on,an,sn,cn,dn,ln,xn,un,pn,fn,bn,hn=t(2797),mn=hn.Z_().required("Name is required").matches(/^[A-Za-z\u0406\u0407\u0410-\u044F\u0456\u0457\u0490\u0491]+(([ '\x2D][ A-Za-z\u0406\u0407\u0410-\u044F\u0456\u0457\u0490\u0491])?[A-Za-z\u0406\u0407\u0410-\u044F\u0456\u0457\u0490\u0491]*)*$/,"Name may contain only letters, apostrophe, dash and spaces"),gn=hn.Z_().required("Phone number is required").matches(/^\+?\d{1,4}[-\s()]?(\(\d{1,3}\)[- \s]?)?\d{1,4}[- \s]?\d{1,4}[- \s]?\d{1,9}$/,"Phone number must be between 7 and 15 digits and can contain spaces, dashes, parentheses, and an optional leading +"),wn=hn.Ry().shape({name:mn,number:gn}),vn=(0,v.Z)(P.l0)(q||(q=(0,w.Z)(["\n  display: flex; \n  flex-direction: column;\n  gap: 16px;  \n  padding: 8px;  \n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);  \n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;  \n"]))),Zn=v.Z.div(B||(B=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),yn=(0,v.Z)(P.gN)(I||(I=(0,w.Z)(["\n  padding: 4px 12px;\n  width: calc(100% - 24px);\n  max-width: 400px;  \n  border: 1px solid black;\n  border-radius: 12px;\n  transition: box-shadow 250ms linear;  \n\n  &:hover,\n  &:focus {\n    outline: none;    \n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);    \n  };\n"]))),jn=v.Z.label(A||(A=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  \n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }  \n"]))),kn=v.Z.div(M||(M=(0,w.Z)(["\n  font-size: 11px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: normal;  \n"]))),Cn=v.Z.button(S||(S=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-left: auto;\n  padding: 4px;  \n  background-color: rgb(255, 255, 255);\n  border: none;\n  outline: none;  \n  font-size: 16px;\n  font-weight: normal;  \n  cursor: pointer;  \n  \n  &:hover > svg {\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };\n\n  &:active > svg {    \n    background-color: rgb(181, 245, 254);\n  }\n"]))),Fn=(0,v.Z)(Z.rnx)(J||(J=(0,w.Z)(["\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: buttonface;\n  fill: rgb(0, 0, 255);\n  width: 16px;\n  height: 16px;\n  transition: box-shadow 250ms linear;\n"]))),En=function(n){var e=n.index,t=(0,s.I0)(),r=(0,s.v9)(x),o=(0,s.v9)(f)[e],i=function(){var n=(0,L.Z)(_().mark((function n(e,i){var a,s,c,l,x;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.name,s=e.number,c=i.resetForm,n.prev=2,n.next=5,wn.validate({name:a,number:s},{abortEarly:!1});case 5:if(l=r.find((function(n){return o.name.toLowerCase()!==a.toLowerCase()&&n.name.toLowerCase()===a.toLowerCase()})),!(x=r.find((function(n){return o.number!==s&&n.number===s})))&&!l){n.next=10;break}return F.Fragment,l&&m.Notify.failure("".concat(R(a)," is already in contacts")),x&&m.Notify.failure("".concat(s," is already in contacts")),n.abrupt("return");case 10:t((0,d.Tk)({name:a,number:s,id:o.id})),t((0,h.a)("")),m.Notify.success("Contact ".concat(R(o.name)," successfully changed")),c(),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(2),n.t0.inner.forEach((function(n){m.Notify.failure(n.message)}));case 20:case"end":return n.stop()}}),n,null,[[2,17]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,F.jsx)(P.J9,{initialValues:{name:o.name,number:o.number},onSubmit:i,children:(0,F.jsxs)(vn,{children:[(0,F.jsxs)(Zn,{children:[(0,F.jsxs)(jn,{children:["Edit name",(0,F.jsx)(yn,{id:"name",type:"text",name:"name",autoComplete:"name",autoFocus:!0})]}),(0,F.jsx)(kn,{children:"For example: Adrian, Jacob Mercer"})]}),(0,F.jsxs)(Zn,{children:[(0,F.jsxs)(jn,{children:["Edit phone number",(0,F.jsx)(yn,{id:"number",type:"tel",name:"number",autoComplete:"tel"})]}),(0,F.jsx)(kn,{children:"For example: +38 067 1234567"})]}),(0,F.jsxs)(Cn,{type:"submit",children:["Change contact",(0,F.jsx)(Fn,{})]})]})})},zn=t(1413),Ln=t(4925),Nn=t(2554),_n=["isEditIcon"],Pn=(0,Nn.F4)(T||(T=(0,w.Z)(["\n  0% { transform: translateX(0); }\n  50% { transform: translateX(-100%); }\n  50.01% { transform: translateX(0); }\n  100% { transform: translateX(-100%); }\n"]))),Rn=v.Z.li(X||(X=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;  \n"]))),qn=v.Z.div(K||(K=(0,w.Z)(["\n  flex-grow: 1;  \n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;   \n  font-family: 'Roboto', sans-serif;  \n  color: ",";\n  text-shadow: ",";\n  text-decoration: ",";      \n  transition: color 250ms linear,\n              text-shadow 250ms linear;\n  \n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 8px;\n  } \n"])),(function(n){return"edit"===n.activeButton?"rgb(0, 0, 255)":"delete"===n.activeButton?"rgb(255, 0, 0)":void 0}),(function(n){if("edit"===n.activeButton||"delete"===n.activeButton)return"0 3px 3px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.25);"}),(function(n){if("delete"===n.activeButton)return"line-through"})),Bn=v.Z.div(U||(U=(0,w.Z)(["\n  flex-basis: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n  width: 100%;\n"]))),In=v.Z.p(V||(V=(0,w.Z)(["\n  display: flex;\n  max-width: max-content;\n  font-weight: bold;  \n  font-size: 16px;\n  text-transform: capitalize;  \n  white-space: nowrap;\n\n  &.marquee {\n    animation: "," 40s linear infinite;\n    animation-delay: 1s;\n  }\n"])),Pn),An=v.Z.p(W||(W=(0,w.Z)(["\n  flex-basis: 50%;\n  font-size: 11px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (min-width: 768px){\n    font-size: 16px;\n  }\n"]))),Mn=v.Z.div($||($=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n\n  @media screen and (min-width: 768px){\n    gap: 16px;\n  }\n"]))),Sn=v.Z.button(D||(D=(0,w.Z)(["\n  display: flex;\n  align-items: center; \n  padding: 0;\n  background-color: rgb(255, 255, 255);\n  border: none;\n  outline: none;  \n  cursor: pointer;  \n  \n  &:hover > svg {\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };  \n\n  &:active > svg {\n    background-color: rgb(181, 245, 254);       \n  };  \n"]))),Jn=(0,v.Z)((H=Z.rnx,function(n){n.isEditIcon;var e=(0,Ln.Z)(n,_n);return(0,F.jsx)(H,(0,zn.Z)({},e))}))(G||(G=(0,w.Z)(["\n  fill: rgb(0, 0, 255);\n  width: 16px;\n  height: 16px;\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: buttonface;\n  transition: box-shadow 250ms linear;\n  \n  &.icon_delete {\n    fill: rgb(255, 0, 0);\n  }\n\n"]))),Tn=Jn.withComponent(Z.FH3),Xn=function(n){var e=n.id,t=n.name,r=n.number,o=n.index,i=(0,c.useState)(!1),a=(0,b.Z)(i,2),l=a[0],x=a[1],u=(0,c.useState)(null),p=(0,b.Z)(u,2),f=p[0],g=p[1],w=(0,c.useRef)(null),v=(0,s.I0)(),Z=function(){return x(!l)};return(0,c.useEffect)((function(){var n=w.current;n.scrollWidth>n.clientWidth?n.classList.add("marquee"):n.classList.remove("marquee")}),[t,r]),(0,F.jsxs)(Rn,{children:[(0,F.jsxs)(qn,{activeButton:f,children:[(0,F.jsx)(Bn,{children:(0,F.jsx)(In,{ref:w,children:(0,F.jsx)("span",{children:t})})}),(0,F.jsx)(An,{children:r})]}),(0,F.jsxs)(Mn,{children:[(0,F.jsx)(Sn,{type:"button",onClick:Z,onMouseEnter:function(){return g("edit")},onMouseLeave:function(){return g(null)},children:(0,F.jsx)(Jn,{className:"icon_edit"})}),(0,F.jsx)(Sn,{type:"button",onClick:function(){v((0,d.GK)(e)),v((0,h.a)("")),m.Notify.info("".concat(R(t)," successfully removed from contacts"))},onMouseEnter:function(){return g("delete")},onMouseLeave:function(){return g(null)},children:(0,F.jsx)(Tn,{className:"icon_delete"})})]}),l&&(0,F.jsxs)(z,{onClose:Z,children:[(0,F.jsx)("h1",{children:"Edit contact"}),(0,F.jsx)(En,{index:o})]})]},e)},Kn=v.Z.ul(Y||(Y=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),Un=function(){var n=(0,s.v9)(f);return(0,F.jsx)(Kn,{children:n.map((function(n,e){var t=n.id,r=n.name,o=n.number;return(0,F.jsx)(Xn,{id:t,name:r,number:o,index:e},t)}))})},Vn=v.Z.label(O||(O=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;  \n"]))),Wn=v.Z.input(Q||(Q=(0,w.Z)(["\n  padding: 4px 12px;\n  width: calc(100% - 24px);\n  border: 1px solid black;\n  border-radius: 12px;\n  transition: box-shadow 250ms linear;\n\n  &::placeholder {\n    text-align: center;\n  }\n\n  &:hover,\n  &:focus {\n    outline: none;    \n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);    \n  };\n"]))),$n=function(){var n=(0,s.I0)(),e=(0,c.useRef)(),t=(0,s.v9)(x);return(0,c.useEffect)((function(){e.current.value=""}),[t]),(0,F.jsxs)(Vn,{children:["Find contacts by name",(0,F.jsx)(Wn,{ref:e,placeholder:"Please enter a name",onChange:function(e){n((0,h.a)(e.target.value))}})]})},Dn=v.Z.p(nn||(nn=(0,w.Z)(["\n  text-align: center;\n  font-weight: bold;\n  color: rgb(255, 0, 0);\n"]))),Gn=function(n){var e=n.message;return(0,F.jsx)(Dn,{children:e})},Hn=t(2881),Yn=v.Z.div(en||(en=(0,w.Z)(["\n  display: flex; \n  flex-direction: column;\n  gap: 8px;  \n  padding: 8px;  \n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n\n   @media screen and (min-width: 1280px) {    \n    gap: 24px;\n    width: calc(100% / 2 - 12px);\n    max-width: calc(1280px / 2 - 12px);\n  }\n"]))),On=v.Z.h2(tn||(tn=(0,w.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),Qn=function(n){var e=n.children;return(0,F.jsxs)(Yn,{children:[(0,F.jsx)(On,{children:"List of contacts"}),e]})},ne=(0,v.Z)(P.l0)(rn||(rn=(0,w.Z)(["\n  display: flex; \n  flex-direction: column;\n  gap: 16px;  \n  padding: 8px;  \n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);  \n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;  \n"]))),ee=v.Z.div(on||(on=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),te=(0,v.Z)(P.gN)(an||(an=(0,w.Z)(["\n  padding: 4px 12px;\n  width: calc(100% - 24px);\n  max-width: 400px;\n  border: 1px solid black;\n  border-radius: 12px;\n  transition: box-shadow 250ms linear;  \n\n  &:hover,\n  &:focus {\n    outline: none;    \n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);    \n  };\n\n  @media screen and (min-width: 768px) {\n    &::placeholder{\n      text-align: center;\n    }\n  }\n"]))),re=v.Z.label(sn||(sn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  \n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }  \n"]))),oe=v.Z.div(cn||(cn=(0,w.Z)(["\n  font-size: 11px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: normal;  \n"]))),ie=v.Z.button(dn||(dn=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-left: auto;\n  padding: 4px;  \n  background-color: transparent;\n  border: none;\n  outline: none;  \n  font-size: 16px;\n  font-weight: normal;  \n  cursor: pointer; \n  \n  \n  &:hover > svg{\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };\n\n  &:active > svg {\n    background-color: rgb(181, 245, 254);\n  }\n"]))),ae=(0,v.Z)(Z.x06)(ln||(ln=(0,w.Z)(["\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: buttonface;\n  fill: blue;\n  width: 16px;\n  height: 16px;\n  transition: box-shadow 250ms linear;\n"]))),se=function(){var n=(0,s.I0)(),e=(0,s.v9)(x),t=function(){var t=(0,L.Z)(_().mark((function t(r,o){var i,a,s,c,l;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.name,a=r.number,s=o.resetForm,t.prev=2,t.next=5,wn.validate({name:i,number:a},{abortEarly:!1});case 5:if(c=e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})),!(l=e.find((function(n){return n.number===a})))&&!c){t.next=10;break}return F.Fragment,c&&m.Notify.failure("".concat(R(i)," is already in contacts")),l&&m.Notify.failure("Phone number ".concat(a," is already in your phone book")),t.abrupt("return");case 10:n((0,d.uK)({name:i,number:a})),m.Notify.success("".concat(R(i)," successfully added to contact list")),s(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),t.t0.inner.forEach((function(n){m.Notify.failure(n.message)}));case 19:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(n,e){return t.apply(this,arguments)}}();return(0,F.jsx)(P.J9,{initialValues:{name:"",number:""},onSubmit:t,children:(0,F.jsxs)(ne,{children:[(0,F.jsxs)(ee,{children:[(0,F.jsxs)(re,{children:["Name",(0,F.jsx)(te,{id:"name",type:"text",name:"name",placeholder:"Please enter a name",autoComplete:"name"})]}),(0,F.jsx)(oe,{children:"For example: Adrian, Jacob Mercer"})]}),(0,F.jsxs)(ee,{children:[(0,F.jsxs)(re,{children:["Phone number",(0,F.jsx)(te,{id:"number",type:"tel",name:"number",placeholder:"Please enter a phone number",autoComplete:"tel"})]}),(0,F.jsx)(oe,{children:"For example: +38 067 1234567"})]}),(0,F.jsxs)(ie,{type:"submit",children:["Add new contact",(0,F.jsx)(ae,{})]})]})})},ce=v.Z.div(xn||(xn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: calc(320px - 64px);  \n  padding: 16px;\n  border: 1px solid black;\n  border-radius: 4px;\n  text-align: start;\n  background-color: rgb(235, 235, 235);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25),\n              0 10px 10px rgba(0, 0, 0, 0.25);\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    max-width: calc(768px - 64px);    \n  }\n\n  @media screen and (min-width: 1280px) {    \n    max-width: calc(100% - 32px); \n  }\n"]))),de=v.Z.h1(un||(un=(0,w.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),le=v.Z.div(pn||(pn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n   @media screen and (min-width: 1280px) {    \n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 24px;\n  }\n\n"]))),xe=function(n){var e=n.children;return(0,F.jsxs)(ce,{children:[(0,F.jsx)(de,{children:"Your Phone Book"}),(0,F.jsx)(le,{children:e})]})},ue=v.Z.p(fn||(fn=(0,w.Z)(["\n  text-align: end;\n  font-weight: bold;\n"]))),pe=function(){var n=(0,s.v9)(x).length,e=(0,s.v9)(f).length;return(0,F.jsx)(ue,{children:n===e?"Total contacts: ".concat(n):"Found contacts: ".concat(e,"/").concat(n)})},fe=v.Z.div(bn||(bn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n \n  @media screen and (min-width: 1280px) {    \n    gap: 24px;\n    width: calc(100% / 2 - 12px);\n    max-width: calc(1280px / 2 - 12px);\n  }\n"]))),be=function(n){var e=n.children;return(0,F.jsx)(fe,{children:e})};function he(){var n=(0,s.I0)(),e=(0,s.v9)(u),t=(0,s.v9)(p),r=(0,s.v9)(f).length,o=(0,s.v9)(x).length;return(0,c.useEffect)((function(){n((0,d.yF)())}),[n]),(0,F.jsxs)(xe,{children:[(0,F.jsxs)(be,{children:[(0,F.jsx)(se,{}),!e&&o>1&&(0,F.jsx)($n,{})]}),(0,F.jsxs)(Qn,{children:[e&&(0,F.jsx)(Hn.Z,{text:"Loading contacts..."}),t&&(0,F.jsx)(Gn,{message:t}),!e&&o>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pe,{visibleContacts:r,tatalContacts:o}),(0,F.jsx)(Un,{})]}),!e&&0===o&&(0,F.jsx)(Gn,{message:"There are no contacts in your phone book"})]})]})}}}]);
//# sourceMappingURL=722.d03ad152.chunk.js.map