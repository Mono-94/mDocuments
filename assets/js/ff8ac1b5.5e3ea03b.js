"use strict";(self.webpackChunkmonodocs=self.webpackChunkmonodocs||[]).push([[2825],{5751:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"mGarage/functions/client","title":"Client","description":"OpenGarage","source":"@site/docs/mGarage/functions/client.mdx","sourceDirName":"mGarage/functions","slug":"/mGarage/functions/client","permalink":"/mDocuments/docs/mGarage/functions/client","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Functions"},"next":{"title":"Server","permalink":"/mDocuments/docs/mGarage/functions/server"}}');var a=r(4848),l=r(8453),s=r(1470),i=r(9365);const c={sidebar_position:1},d="Client",o={},h=[{value:"OpenGarage",id:"opengarage",level:2},{value:"SaveCar",id:"savecar",level:2},{value:"Impound",id:"impound",level:2},{value:"CopyCoords",id:"copycoords",level:2},{value:"CreateZone",id:"createzone",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"client",children:"Client"})}),"\n",(0,a.jsx)(n.h2,{id:"opengarage",children:"OpenGarage"}),"\n",(0,a.jsx)(n.p,{children:"Function to open a garage with specified parameters."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"data"})," table should contain the following keys:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"name"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The name of the garage"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"garagetype"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The type of the garage (e.g., 'garage')"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"intocar"})}),(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"Whether to automatically enter the car upon spawn"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"carType"})}),(0,a.jsx)(n.td,{children:"table"}),(0,a.jsx)(n.td,{children:"A list of car types allowed in the garage (e.g., 'automobile', 'bike')"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"spawnpos"})}),(0,a.jsx)(n.td,{children:"table"}),(0,a.jsxs)(n.td,{children:["A list of spawn positions in ",(0,a.jsx)(n.code,{children:"vec4"})," format (coordinates with heading)"]})]})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"code",label:"Code",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  exports.mGarage:OpenGarage(data)\n"})})}),(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:" RegisterCommand('mGarage:opengarage', function(source, args, raw)\n     local ped = PlayerPedId()\n     local coords, heading = GetEntityCoords(ped), GetEntityHeading(ped)\n     exports.mGarage:OpenGarage({\n         name = 'Pillbox Hill',\n         garagetype = 'garage',              \n         intocar = true,                     \n         carType = { 'automobile', 'bike' }, \n         spawnpos = {\n             vec4(coords.x, coords.y, coords.z, heading),\n         }\n     })\n end)\n"})})}),(0,a.jsxs)(i.A,{value:"esx_propoerty",label:"ESX PROPERTY",children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"esx_property/client/main.lua"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Search StoreVehicle / AccessGarage"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"replace with this"}),"\n"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:" function StoreVehicle(PropertyId)\n   exports.mGarage:SaveCar({\n     name = Properties[PropertyId].Name,\n     garagetype = 'garage',\n     entity = false,\n     carType = { 'automobile', 'bike' },\n   })\n end\n\n function AccessGarage(PropertyId)\n   exports.mGarage:OpenGarage({\n     name = Properties[PropertyId].Name,\n     garagetype = 'garage',\n     intocar = true,\n     carType = { 'automobile', 'bike' },\n     spawnpos = { vector4(Properties[PropertyId].garage.pos.x, Properties[PropertyId].garage.pos.y, Properties[PropertyId].garage.pos.z, Properties[PropertyId].garage.Heading) }\n   })\n end\n"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"savecar",children:"SaveCar"}),"\n",(0,a.jsx)(n.p,{children:"Store Vehicle by entity"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"data"})," table should contain the following keys:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"name"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The name of the garage"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"garagetype"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The type of the garage (e.g., 'garage')"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"entity"})}),(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"Whether to automatically enter the car upon spawn"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"carType"})}),(0,a.jsx)(n.td,{children:"table"}),(0,a.jsx)(n.td,{children:"A list of car types allowed in the garage (e.g., 'automobile', 'bike')"})]})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"code",label:"Code",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  exports.mGarage:SaveCar(data)\n"})})}),(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  RegisterCommand('mGarage:savecar', function(source, args, raw)\n      local ped = PlayerPedId()\n      local vehicleEntity = GetVehiclePedIsIn(ped, false)\n      if DoesEntityExist(vehicleEntity) then\n          exports.mGarage:SaveCar({\n              name = 'Pillbox Hill',\n              garagetype = 'garage',             \n              entity = vehicleEntity,             \n              carType = { 'automobile', 'bike' }, \n          })\n      else\n          print('No Vehicle')\n      end\n  end)\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"impound",children:"Impound"}),"\n",(0,a.jsx)(n.p,{children:"Function to impound a vehicle"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"data"})," table should contain the following keys:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"entity"})}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"impoundName"})}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"code",label:"Code",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  exports.mGarage:ImpoundVehicle(data)\n"})})}),(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  RegisterCommand('mGarage:impound', function(source, args, raw)\n      local ped = PlayerPedId()\n      local vehicleEntity = GetVehiclePedIsIn(ped, false)\n      if DoesEntityExist(vehicleEntity) then\n       exports.mGarage:ImpoundVehicle({\n          vehicle = vehicleEntity,\n          impoundName = 'Impound'\n      })\n      else\n          print('No Vehicle')\n      end\n  end)\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"copycoords",children:"CopyCoords"}),"\n",(0,a.jsx)(n.p,{children:"Function to copy single/multiple coords."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"action"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The action type, either 'single' or 'multi'."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"entityType"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The entity type, either 'ped', 'car', 'prop', or 'none'."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"textui"})}),(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"Whether to show text UI."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"callBack"})}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"Callback function to execute with the copied coordinates."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"data"})}),(0,a.jsx)(n.td,{children:"table"}),(0,a.jsx)(n.td,{children:"Additional data for vehicle or prop models."})]})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"code",label:"Code",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  exports.mGarage:CopyCoords(action, entityType, textui, callBack, data)\n"})})}),(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  RegisterCommand('copycoords', function()\n    CopyCoords('multi', 'ped', true, function(table, tableString)\n      print(json.encode(table, { indent = true }))\n      print(tableString)\n    end, { carModel = 'adder', propModel = 'prop_bin_05a' })\n  end)\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"createzone",children:"CreateZone"}),"\n",(0,a.jsx)(n.p,{children:"Function to create a zone using ox_lib."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"polyzoneName"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The name of the polyzone."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"textui"})}),(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"Whether to show text UI."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Callback"})}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"Callback function to execute with the created zone."})]})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"code",label:"Code",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  exports.mGarage:CreateZone(polyzoneName, texui, callBack)\n"})})}),(0,a.jsx)(i.A,{value:"example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"  RegisterCommand('czone', function(source, args, raw)\n     CreateZone('test', true, function(zone)\n         print(json.encode(zone, { indent = true }))\n     end)\n  nd)\n"})})})]}),"\n",(0,a.jsx)(n.hr,{})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>C});var t=r(6540),a=r(4164),l=r(3104),s=r(6347),i=r(205),c=r(7485),d=r(1682),o=r(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=u(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[d,h]=p({queryString:r,groupId:a}),[j,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,o.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),m=(()=>{const e=d??j;return x({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,l]),tabValues:l}}var g=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),o=e=>{const n=e.currentTarget,r=c.indexOf(n),a=i[r].value;a!==t&&(d(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...l,className:(0,a.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function C(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);