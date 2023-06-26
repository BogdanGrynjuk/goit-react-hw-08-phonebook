"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[425],{6425:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r=t(9434),o="NOT_FOUND";var i=function(n,e){return n===e};function a(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?i:r,c=t.maxSize,s=void 0===c?1:c,u=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(a),d=1===s?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return o}return{get:r,put:function(e,i){r(e)===o&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,l);function p(){var e=d.get(arguments);if(e===o){if(e=n.apply(null,arguments),u){var t=d.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return p.clearCache=function(){return d.clear()},p}function c(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,s={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(s=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=s,d=l.memoizeOptions,p=void 0===d?t:d,f=Array.isArray(p)?p:[p],x=c(r),h=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(f)),b=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(b,{resultFunc:u,memoizedResultFunc:h,dependencies:x,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),b};return o}var u,l,d,p,f=s(a),x=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},g=f([x,function(n){return n.filter},h],(function(n,e,t){return t?[]:e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),m=t(3634),v=t(168),y=t(4824),w=t(7322),Z=y.Z.li(u||(u=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;  \n"]))),j=y.Z.span(l||(l=(0,v.Z)(["\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;  \n  text-transform: capitalize;\n"]))),k=y.Z.button(d||(d=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;  \n  border: 1px solid black;\n  border-radius: 12px;\n  cursor: pointer; \n  transition: box-shadow 250ms linear;\n  \n  &:hover {\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };\n\n  &:active {\n    background-color: teal;\n    color: white;   \n  };\n\n  &:active > svg {\n    fill: white;\n  };\n"]))),C=(0,y.Z)(w.FU5)(p||(p=(0,v.Z)(["\n  fill: red;\n  width: 16px;\n  height: 16px;\n"]))),z=t(1634),A=t(5264);function F(n){for(var e=n.split(" "),t="",r=0;r<e.length;r++){var o=e[r];t+=o.substring(0,1).toUpperCase()+o.substring(1)+" "}return t}var N,_,E,P,R,L,q,I,O,S,T,U,B,D,J=t(3329),K=function(n){var e=n.id,t=n.name,o=n.number,i=(0,r.I0)();return(0,J.jsxs)(Z,{children:[(0,J.jsxs)(j,{children:[t,": ",o]}),(0,J.jsxs)(k,{type:"button",onClick:function(){i((0,m.GK)(e)),i((0,z.a)("")),A.Notify.info("".concat(F(t)," successfully removed from contacts"))},children:["Delete",(0,J.jsx)(C,{})]})]},e)},G=y.Z.ul(N||(N=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),M=function(){var n=(0,r.v9)(g);return(0,J.jsx)(G,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,J.jsx)(K,{id:e,name:t,number:r},e)}))})},V=y.Z.label(_||(_=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;  \n"]))),$=y.Z.input(E||(E=(0,v.Z)(["\n  padding: 4px 12px;\n  width: 250px;  \n  border: 1px solid black;\n  border-radius: 12px;\n  transition: box-shadow 250ms linear;\n\n  &::placeholder {\n    text-align: center;\n  }\n\n  &:hover,\n  &:focus {\n    outline: none;    \n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);    \n  };\n"]))),H=t(2791),Q=function(){var n=(0,r.I0)(),e=(0,H.useRef)(),t=(0,r.v9)(x);return(0,H.useEffect)((function(){e.current.value=""}),[t]),(0,J.jsxs)(V,{children:["Find contacts by name",(0,J.jsx)($,{ref:e,placeholder:"Please enter a name",onChange:function(e){n((0,z.a)(e.target.value))}})]})},W=y.Z.p(P||(P=(0,v.Z)(["\n  text-align: center;\n  font-weight: bold;\n  color: rgb(255, 0, 0);\n"]))),X=function(n){var e=n.message;return(0,J.jsx)(W,{children:e})},Y=t(9063),nn=y.Z.div(R||(R=(0,v.Z)(["\n  display: flex; \n  flex-direction: column;\n  gap: 8px;  \n  padding: 8px;  \n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: white;\n"]))),en=y.Z.h2(L||(L=(0,v.Z)(["\n  font-size: 24px;\n  text-align: center;\n"]))),tn=function(n){var e=n.children;return(0,J.jsxs)(nn,{children:[(0,J.jsx)(en,{children:"Contacts"}),e]})},rn=t(5705),on=(0,y.Z)(rn.l0)(q||(q=(0,v.Z)(["\n  display: flex; \n  flex-direction: column;\n  gap: 16px;  \n  padding: 8px;  \n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: white;  \n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;  \n"]))),an=(0,y.Z)(rn.gN)(I||(I=(0,v.Z)(["\n  padding: 4px 12px;\n  width: 250px;  \n  border: 1px solid black;\n  border-radius: 12px;\n  transition: box-shadow 250ms linear;\n\n  &::placeholder {\n    text-align: center;\n  }\n\n  &:hover,\n  &:focus {\n    outline: none;    \n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);    \n  };\n"]))),cn=y.Z.label(O||(O=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;  \n"]))),sn=y.Z.button(S||(S=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-left: auto;\n  padding: 4px;  \n  background-color: white;\n  border: none;\n  outline: none;  \n  font-size: 16px;\n  font-weight: normal;  \n  cursor: pointer; \n  \n  \n  &:hover > svg{\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),\n                0 5px 5px rgba(0, 0, 0, 0.25);\n  };\n\n  &:active > svg {\n    fill: white;\n    background-color: teal;\n  }\n"]))),un=(0,y.Z)(w.x06)(T||(T=(0,v.Z)(["\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: buttonface;\n  fill: blue;\n  width: 16px;\n  height: 16px;\n  transition: box-shadow 250ms linear;\n"]))),ln=function(){var n=(0,r.I0)(),e=(0,r.v9)(x);return(0,J.jsx)(rn.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=t.name,i=t.number,a=r.resetForm,c=e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()})),s=e.find((function(n){return n.number===i}));if(s||c)return J.Fragment,c&&A.Notify.failure("".concat(F(o)," is already in contacts")),void(s&&A.Notify.failure("Phone number ".concat(i," is already in your phone book")));n((0,m.uK)({name:o,number:i})),A.Notify.success("".concat(F(o)," successfully added to contact list")),a()},children:(0,J.jsxs)(on,{children:[(0,J.jsxs)(cn,{children:["Name",(0,J.jsx)(an,{id:"name",type:"text",name:"name",placeholder:"Please enter a name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,J.jsxs)(cn,{children:["Phone number",(0,J.jsx)(an,{id:"number",type:"tel",name:"number",placeholder:"Please enter a phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,J.jsxs)(sn,{type:"submit",children:["Add new contact",(0,J.jsx)(un,{})]})]})})},dn=y.Z.p(U||(U=(0,v.Z)(["\n  text-align: end;\n  font-weight: bold;\n"]))),pn=function(){var n=(0,r.v9)(x).length,e=(0,r.v9)(g).length;return(0,J.jsx)(dn,{children:n===e?"Total contacts: ".concat(n):"Found contacts: ".concat(e,"/").concat(n)})},fn=y.Z.div(B||(B=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 30%;  \n  padding: 16px;\n  border: 1px solid black;\n  border-radius: 4px;\n  text-align: start;\n  background-color: #ebebeb;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25),\n              0 10px 10px rgba(0, 0, 0, 0.25);\n"]))),xn=y.Z.h1(D||(D=(0,v.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),hn=function(n){var e=n.children;return(0,J.jsxs)(fn,{children:[(0,J.jsx)(xn,{children:"Phone Boock"}),e]})};function bn(){var n=(0,r.I0)(),e=(0,r.v9)(h),t=(0,r.v9)(b),o=(0,r.v9)(g).length,i=(0,r.v9)(x).length;return(0,H.useEffect)((function(){n((0,m.yF)())}),[n]),(0,J.jsxs)(hn,{children:[(0,J.jsx)(ln,{}),(0,J.jsxs)(tn,{children:[e&&(0,J.jsx)(Y.Z,{text:"Loading contacts..."}),t&&(0,J.jsx)(X,{message:t}),!e&&i>1&&(0,J.jsx)(Q,{}),!e&&i>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(pn,{visibleContacts:o,tatalContacts:i}),(0,J.jsx)(M,{})]}),!e&&0===i&&(0,J.jsx)(X,{message:"There are no contacts in your phone book"})]})]})}}}]);
//# sourceMappingURL=425.4d1df9cd.chunk.js.map