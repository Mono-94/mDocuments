"use strict";(self.webpackChunkmonodocs=self.webpackChunkmonodocs||[]).push([[9618],{2011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(4848),i=t(8453);const c={sidebar_position:1},r="Client",o={id:"mGarage/functions/client",title:"Client",description:"Vehicles.VehickeKeysMenu() Client",source:"@site/docs/mGarage/functions/client.md",sourceDirName:"mGarage/functions",slug:"/mGarage/functions/client",permalink:"/mDocuments/docs/mGarage/functions/client",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mGarage/functions/client.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/mDocuments/docs/category/functions-1"},next:{title:"Server",permalink:"/mDocuments/docs/mGarage/functions/server"}},l={},a=[];function u(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"client",children:"Client"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vehicles.VehickeKeysMenu() Client"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"--  all player vehicles\nVehicles.VehickeKeysMenu()\n\n--  Specific plate, \nVehicles.VehickeKeysMenu('MONO 420', function()\n  print('On Close menu or Set/remove key player')\nend)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vehicles.ItemCarKeysClient() Client"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"action = 'delete' or 'add' | string"}),"\n",(0,s.jsxs)(n.li,{children:["plate  =  vehicle plate    | string ",(0,s.jsx)(n.em,{children:"GetVehicleNumberPlateText()"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"  -- with shared import\n  Vehicles.ItemCarKeysClient(action, plate)\n\n    -- or \n  exports.mVehicle:ItemCarKeysClient(action, plate)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);