(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(34),c=a.n(l),i=a(5),o=a(10),m=(a(95),a(80)),u=a(81),s=a(84),h=a(82),b=a(85),d=(a(96),a(198)),p=a(197),f="underweight",g="healthy weight",E="overweight",w="heavily overweight",v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).renderError=function(e){var t=e.error,a=e.touched;if(t&&a)return n.a.createElement("div",{className:"ui error message"},n.a.createElement("div",{className:"header"},t))},a.renderInput=function(e){var t=e.input,r=e.meta,l=e.label,c=e.placeholder,i="field ".concat(r.error&&r.touched?"error":"");return n.a.createElement("div",{className:i},n.a.createElement("label",null,l),n.a.createElement("input",Object.assign({},t,{type:"number",placeholder:c,autoComplete:"off"}))," ",a.renderError(r))},a.onSubmit=function(e){a.props.calculateBmi(e)},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"form bmi"},n.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},n.a.createElement(d.a,{name:"height",component:this.renderInput,label:"Height",placeholder:"cm"}),n.a.createElement(d.a,{name:"weight",component:this.renderInput,label:"Weight",placeholder:"kg"}),n.a.createElement("button",{className:"ui button"},"Calculate BMI")))}}]),t}(n.a.Component),y=Object(p.a)({form:"bmiForm",validate:function(e){var t={};return e.height||(t.height="You must enter your height"),e.weight||(t.weight="You must enter your weight"),t}})(Object(o.b)(null,{calculateBmi:function(e){var t=e.weight/Math.pow(e.height/100,2),a="";return a=t<18.5?f:t<25?g:t<30?E:w,{type:"CALC_BMI",payload:{bmi:t=t.toFixed(2),category:a}}}})(v)),O=(a(194),Object(o.b)(function(e){return{bmi:e.bmi.bmi,category:e.bmi.category}})(function(e){var t=e.bmi,a=e.category;return null===t?null:n.a.createElement("div",{className:"results ui message"},n.a.createElement("div",null,"Your BMI is:\xa0",n.a.createElement("strong",null,t)),n.a.createElement("div",null,"You are:\xa0",n.a.createElement("strong",null,a)))})),C=(a(195),function(){return n.a.createElement("div",{className:"attribution"},"Icons made by\u205f",n.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik"),"\u205ffrom\u205f",n.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"),"\u205fis licensed by\u205f",n.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY"))}),N=a(199),j={bmi:null,category:""},_=Object(i.b)({form:N.a,bmi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CALC_BMI":return{bmi:t.payload.bmi,category:t.payload.category};default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,k=Object(i.d)(_,I());c.a.render(n.a.createElement(o.a,{store:k},n.a.createElement(function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"ui segment"},n.a.createElement("h1",null,"bmi calculator",n.a.createElement("img",{src:"bmi-calc/img/scale.png",alt:"scale"})),n.a.createElement(y,null),n.a.createElement(O,null)),n.a.createElement(C,null))},null)),document.querySelector("#root"))},87:function(e,t,a){e.exports=a(196)},95:function(e,t,a){},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.a74b08cd.chunk.js.map