(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){var n={"./es2015/arrowFunctions.md":348,"./es2015/classes.md":349,"./es2015/destructuring.md":350,"./es2015/enhancedObjects.md":351,"./es2015/forOfLoop.md":352,"./es2015/map.md":353,"./es2015/modules.md":354,"./es2015/set.md":355,"./es2015/spreadOperator.md":356,"./es2015/stringsObjects.md":357,"./es2015/templateLiterals.md":358,"./es2015/variables.md":359,"./es2016/exponientationOperator.md":360,"./es2016/includes.md":361,"./es2017/awaitAsync.md":362,"./es2017/objectValuesEntries.md":363,"./es2017/padding.md":364,"./es2018/asyncIteration.md":365,"./es2018/extendedSpreadOperator.md":366,"./es2019/catch.md":367,"./es2019/flat.md":368,"./es2019/objectFromEntries.md":369,"./es2019/symbol.md":370,"./es2019/trim.md":371,"./summary.md":53};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=347},348:function(e,t,a){e.exports=a.p+"static/media/arrowFunctions.10f102bf.md"},349:function(e,t,a){e.exports=a.p+"static/media/classes.e024272e.md"},350:function(e,t,a){e.exports=a.p+"static/media/destructuring.b8109eaa.md"},351:function(e,t,a){e.exports=a.p+"static/media/enhancedObjects.46d62bc7.md"},352:function(e,t,a){e.exports=a.p+"static/media/forOfLoop.f3c0ac12.md"},353:function(e,t,a){e.exports=a.p+"static/media/map.b39cd6a0.md"},354:function(e,t,a){e.exports=a.p+"static/media/modules.29774511.md"},355:function(e,t,a){e.exports=a.p+"static/media/set.b5931501.md"},356:function(e,t,a){e.exports=a.p+"static/media/spreadOperator.f90578d6.md"},357:function(e,t,a){e.exports=a.p+"static/media/stringsObjects.50156169.md"},358:function(e,t,a){e.exports=a.p+"static/media/templateLiterals.91d180cb.md"},359:function(e,t,a){e.exports=a.p+"static/media/variables.803f4879.md"},360:function(e,t,a){e.exports=a.p+"static/media/exponientationOperator.831378ed.md"},361:function(e,t,a){e.exports=a.p+"static/media/includes.58d2b727.md"},362:function(e,t,a){e.exports=a.p+"static/media/awaitAsync.e225acf5.md"},363:function(e,t,a){e.exports=a.p+"static/media/objectValuesEntries.603f1d66.md"},364:function(e,t,a){e.exports=a.p+"static/media/padding.6743d586.md"},365:function(e,t,a){e.exports=a.p+"static/media/asyncIteration.3b88014b.md"},366:function(e,t,a){e.exports=a.p+"static/media/extendedSpreadOperator.f3d5c5fc.md"},367:function(e,t,a){e.exports=a.p+"static/media/catch.384ce6d1.md"},368:function(e,t,a){e.exports=a.p+"static/media/flat.400382bf.md"},369:function(e,t,a){e.exports=a.p+"static/media/objectFromEntries.e5260d63.md"},370:function(e,t,a){e.exports=a.p+"static/media/symbol.4fe9a52b.md"},371:function(e,t,a){e.exports=a.p+"static/media/trim.431c6d03.md"},374:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(56),i=a.n(r),o=(a(71),a(65)),c=a(21),m=a(22),l=a(33),d=a(23),p=a(34),u=a(63),f=a.n(u),h=a(57),b=a.n(h),x=a(24),g=a.n(x),E=a(382),w=function(e){if(e&&0!==e.length)return s.a.createElement("ul",{className:"features-list"},e.map(function(e){return s.a.createElement("li",{key:e.title},s.a.createElement("a",{href:"#".concat(e.tag)},e.title))}))},O=function(e){var t=e.data;if(t)return s.a.createElement(n.Fragment,null,s.a.createElement("h2",null,"Table of contents"),s.a.createElement("ul",{className:"section-list"},t.map(function(e){return s.a.createElement("li",{key:e.title},s.a.createElement("a",{href:"#".concat(e.tag)},e.title),w(e.features))})))},v=(a(155),function(e){var t=e.hash,a=e.name;return s.a.createElement("p",{className:"codepen","data-height":"280","data-theme-id":"0","data-default-tab":"js,result","data-slug-hash":t,"data-pen-title":"variables"},s.a.createElement("span",null,"See the Pen"," ",s.a.createElement("a",{href:"https://codepen.io/sanders-vag/pen/".concat(t)},a)," by mimacom on ",s.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."))}),j=a(384),k=function(e){var t=e.value;return s.a.createElement(j.a,{language:"javascript"},t)},y=a(64),F=a(383),H=function(e){return Object(y.a)(fetch(e)).pipe(Object(F.a)(function(e){return e.text()}))},S=(a(346),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={description:"",bla:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.feature){var t=this.props.feature.markdownFile,n=a(347)("./".concat(t));H(n).pipe(Object(E.a)(function(t){return e.setState({description:t})})).subscribe()}}},{key:"render",value:function(){var e=this.props.feature,t=this.state.description;if(e)return s.a.createElement("div",{className:"feature"},s.a.createElement("h3",{id:e.tag,name:e.tag},e.title),s.a.createElement("hr",null),t&&s.a.createElement(n.Fragment,null,s.a.createElement("h4",null,"Description"),s.a.createElement(g.a,{source:t,renderers:{code:k}})),e.exampleHash&&s.a.createElement(n.Fragment,null,s.a.createElement("h4",null,"Try it online"),s.a.createElement("div",{className:"example"},s.a.createElement(v,{hash:e.exampleHash,name:e.title}))))}}]),t}(n.Component)),N=a(60),L=a(61),U=function(e){var t=e.section;if(t)return s.a.createElement("div",{className:"section"},s.a.createElement("h2",{id:t.tag,name:t.tag},t.title," ",t.specUrl&&s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"Go to specification",href:t.specUrl},s.a.createElement(N.a,{icon:L.a}))),t.features&&t.features.map(function(e){return s.a.createElement(S,{key:e.title,feature:e})}))},q=function(e){var t=e.sections;if(t)return s.a.createElement("div",{className:"section-list"},t.map(function(e){return s.a.createElement(U,{section:e,key:e.title})}))},M=(a(374),a(62)),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={summary:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=a(53);H(t).pipe(Object(E.a)(function(t){return e.setState({summary:t})})).subscribe()}},{key:"render",value:function(){var e=new Map(Object.entries(M)),t=Object(o.a)(e.values()),a=this.state.summary;return s.a.createElement(f.a,null,s.a.createElement(b.a,null),s.a.createElement(g.a,{source:a}),s.a.createElement(O,{data:t}),s.a.createElement(q,{sections:t}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(378);i.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){e.exports=a.p+"static/media/summary.9b3059e8.md"},62:function(e){e.exports={es2015:{title:"ES2015/ES6",tag:"es2015",specUrl:"https://www.ecma-international.org/ecma-262/6.0/",features:[{title:"Variables",markdownFile:"es2015/variables.md",exampleHash:"ZPrOew",tag:"variables"},{title:"Arrow functions",markdownFile:"es2015/arrowFunctions.md",exampleHash:"xBYgYG",tag:"arrow-functions"},{title:"Classes",markdownFile:"es2015/classes.md",exampleHash:"eXVgLq",tag:"classes"},{title:"Template literals",markdownFile:"es2015/templateLiterals.md",exampleHash:"eXVGXj",tag:"template-literals"},{title:"Destructuring",markdownFile:"es2015/destructuring.md",exampleHash:"LaQORE",tag:"destructuring"},{title:"Enhanced objects",markdownFile:"es2015/enhancedObjects.md",exampleHash:"aMqEOZ",tag:"enhanced-objects"},{title:"ES modules syntax",markdownFile:"es2015/modules.md",exampleHash:"",tag:"es-modules"},{title:"For-of loop",markdownFile:"es2015/forOfLoop.md",exampleHash:"GewKPv",tag:"loop"},{title:"Strings and Objects",markdownFile:"es2015/stringsObjects.md",exampleHash:"WmMdWv",tag:"strings-objects"},{title:"Spread Operator",markdownFile:"es2015/spreadOperator.md",exampleHash:"OqQQmV",tag:"spread-operator"},{title:"Set",markdownFile:"es2015/set.md",exampleHash:"bZLxbm",tag:"set"},{title:"Map",markdownFile:"es2015/map.md",exampleHash:"qvoZwv",tag:"map"}]},es2016:{title:"ES2016/ES7",tag:"es2016",specUrl:"https://www.ecma-international.org/ecma-262/7.0/",features:[{title:"Array.prototype.includes()",markdownFile:"es2016/includes.md",exampleHash:"pYLEYj",tag:"includes"},{title:"Exponientation operator",markdownFile:"es2016/exponientationOperator.md",exampleHash:"WmzGqN",tag:"exponientation"}]},es2017:{title:"ES2017/ES8",tag:"es2017",specUrl:"https://www.ecma-international.org/ecma-262/8.0/index.html",features:[{title:"String padding",markdownFile:"es2017/padding.md",exampleHash:"jJzVPb",tag:"padding"},{title:"Object.values() & Object.entries()",markdownFile:"es2017/objectValuesEntries.md",exampleHash:"KEoNzz",tag:"values-entries"},{title:"Asyncrhonous execution",markdownFile:"es2017/awaitAsync.md",exampleHash:"XGENaz",tag:"await-async"}]},es2018:{title:"ES2018/ES9",tag:"es2018",specUrl:"https://www.ecma-international.org/ecma-262/9.0/index.html",features:[{title:"Extended spread operator",markdownFile:"es2018/extendedSpreadOperator.md",exampleHash:"bZvBOw",tag:"extended-spread"},{title:"Asyncrhonous iteration",markdownFile:"es2018/asyncIteration.md",exampleHash:"drmOEB",tag:"async-loop"}]},es2019:{title:"ES2019",tag:"es2019",specUrl:"",features:[{title:"Flat & flatMap",markdownFile:"es2019/flat.md",exampleHash:"xBWqzq",tag:"flat"},{title:"Catch",markdownFile:"es2019/catch.md",exampleHash:"bZvqKZ",tag:"catch"},{title:"Object.fromEntries()",markdownFile:"es2019/objectFromEntries.md",exampleHash:"",tag:"from-entries"},{title:"Trim",markdownFile:"es2019/trim.md",exampleHash:"NJYjNP",tag:"trim"},{title:"Symbol",markdownFile:"es2019/symbol.md",exampleHash:"drQPQE",tag:"symbol"}]}}},66:function(e,t,a){e.exports=a(379)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.7eac81d8.chunk.js.map