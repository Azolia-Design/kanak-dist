import{j as e}from"./jsx-runtime.KYujgZxC.js";/* empty css                            */import"./index.068npczX.js";import"./react.ykkgeo-1.js";/* empty css                             */function m({...t}){return console.log(t),e.jsxs("a",{href:`/kase-studies/${t.data.uid}`,className:"keen-slider__slide kustomer-kasestu-main-item",children:[e.jsx("div",{className:"txt txt-20 txt-med kustomer-kasestu-main-item-label",children:t.data.data.category}),e.jsx("h2",{className:"heading h3 txt-black txt-up kustomer-kasestu-main-item-title",children:t.data.data.title[0].text}),e.jsxs("div",{className:"kustomer-kasestu-main-item-bot",children:[e.jsx("div",{className:"kustomer-kasestu-main-item-bot-img",children:e.jsx("img",{src:t.data.data.images[0].image_item.url,alt:t.data.data.images[0].image_item.alt,className:"img img-fill"})}),e.jsxs("div",{className:"txt txt-18 txt-bold kustomer-kasestu-main-item-bot-readmore",children:["Read more",e.jsx("div",{className:"ic ic-20",children:t.icArrowExt})]})]}),e.jsx("div",{className:"line line-top"}),e.jsx("div",{className:"line line-bot"}),e.jsx("div",{className:"line line-ver"}),t.lastItem==="lastItem"&&e.jsx("div",{className:"line line-ver"})]})}function l({...t}){const s=t.list;return e.jsx("div",{className:"kustomer-kasestu-main",children:e.jsx("div",{className:"keen-slider kustomer-kasestu-main-wrapper",children:s.map((i,a)=>e.jsx(m,{data:i,icArrowExt:t.icArrowExt,lastItem:`${a==s.length-1?"lastItem":""}`},a))})})}function x({...t}){return e.jsx("section",{className:"kustomer-kasestu",children:e.jsxs("div",{className:"container grid",children:[e.jsx("div",{className:"heading h4 txt-black txt-up kustomer-kasestu-label",children:"KASE STUDIES"}),e.jsx("h1",{className:"heading h0 txt-black txt-up kustomer-kasestu-title",children:"REAL STORIES, REAL IMPACT"}),e.jsxs("div",{className:"kustomer-kasestu-des",children:[e.jsx("p",{className:"txt txt-18 txt-med kustomer-kasestu-des-content",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("a",{href:"/kase-studies",className:"txt txt-18 txt-med kustomer-kasestu-des-link",children:"View all kase studies"})]}),e.jsx(l,{list:t.list,icArrowExt:t.icArrowExt})]})})}export{x as default};
