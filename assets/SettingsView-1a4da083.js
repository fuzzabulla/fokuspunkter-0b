import{M as x,bE as m,aE as a,u as c,F as g,aP as f,v as e,ao as _,bc as r,aM as k,bz as h,bo as v,af as S,bA as $,q as j,I as u,b3 as b,bx as C,h as T,aI as B,aF as V,bF as y}from"./index-0e4043b5.js";const A={class:"flex flex-row border-white border-2 rounded-xl overflow-hidden"},E=["onClick"],I=x({__name:"TextButton",setup(d){const o=m(),s=["capitalize","uppercase"];return(l,t)=>(a(),c("div",A,[(a(),c(g,null,f(s,n=>e("button",{key:n,onClick:p=>r(o).textTransform=n,class:_([[r(o).textTransform===n?"bg-white text-emerald-500":""],"grid place-content-center px-3 py-1 duration-200 hover:bg-white hover:text-emerald-500"])},[e("span",{class:_(n)},"Aaa",2)],10,E)),64))]))}}),L={class:"w-min flex flex-row border-white border-2 rounded-xl"},z=x({__name:"AddButton",setup(d){const o=m(),s=k("");function l(){s.value.length<1||(o.addStudent(s.value),s.value="")}return(t,n)=>(a(),c("div",L,[h(e("input",{name:"student-name","onUpdate:modelValue":n[0]||(n[0]=p=>S(s)?s.value=p:null),placeholder:"Skriv navn her...",minlength:"1",onKeydown:$(l,["enter"]),class:"px-3 py-1 bg-inherit rounded-l-xl placeholder:text-gray-200"},null,544),[[v,r(s)]]),e("button",{onClick:l,class:"bg-white text-emerald-500 p-2 rounded-r-lg border-0 border-l-2"},"Tilføj")]))}}),w=d=>(B("data-v-16b13277"),d=d(),V(),d),M={class:"mb-8 text-xl"},O=w(()=>e("p",{class:"text-3xl text-center mb-4"},"Elever",-1)),F={class:"flex flex-row gap-4 mb-4"},U={class:"grid place-content-center px-3 py-1 ml-auto bg-white text-emerald-500 border-white border-2 rounded-xl"},N={class:"w-full text-left border-spacing-0 border-separate"},D={class:"bg-black bg-opacity-50"},K=w(()=>e("th",null,"Navn",-1)),q=w(()=>e("th",null,"Opgave",-1)),G=["onClick"],P=x({__name:"StudentsList",setup(d){const o=m(),s=j(()=>{let l=[];return Object.values(o.objectives).forEach(t=>{t.students.forEach(n=>{l.push({...n,objective:t.title})})}),l.sort((t,n)=>t.name>n.name?1:-1),l});return(l,t)=>{const n=z,p=I;return a(),c("section",M,[O,e("div",F,[u(n),u(p),e("p",U,[e("span",null,"Antal elever: "+b(r(s).length),1)])]),e("table",N,[e("thead",D,[e("tr",null,[K,q,e("th",{onClick:t[0]||(t[0]=i=>r(o).removeAllStudents()),class:_([r(s).length===0?"pointer-events-none":"cursor-pointer"])},[e("span",{class:_([{"opacity-0":r(s).length===0},"duration-200"])},"❌",2)],2)])]),u(T,{name:"students",tag:"tbody",class:"relative w-full"},{default:C(()=>[(a(!0),c(g,null,f(r(s),i=>(a(),c("tr",{key:i.id,class:"w-full bg-black bg-opacity-30"},[e("td",{class:_(r(o).textTransform)},b(i.name),3),e("td",null,b(i.objective),1),e("td",{onClick:ne=>r(o).removeStudent(i.id),class:"text-center cursor-pointer"},"❌",8,G)]))),128))]),_:1})])])}}});const R=y(P,[["__scopeId","data-v-16b13277"]]),H={class:"mb-8"},J=e("p",{class:"text-3xl text-center mb-4"},"Mål",-1),Q={class:"bg-black bg-opacity-50 text-2xl flex flex-col border-white border-2 rounded-xl p-2 mb-4"},W=e("p",{class:"text-center mb-2"},"Overordnet mål",-1),X={class:"grid grid-cols-3 gap-4"},Y={class:"text-center mb-2"},Z=["name","onUpdate:modelValue"],ee=x({__name:"ObjectivesList",setup(d){const o=m();return(s,l)=>(a(),c("section",H,[J,e("div",Q,[W,h(e("input",{name:"primary-goal","onUpdate:modelValue":l[0]||(l[0]=t=>r(o).objectives.goal.title=t),type:"text",placeholder:"Skriv overordnet mål her...",class:"size-full min-h-20 bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg text-center"},null,512),[[v,r(o).objectives.goal.title]])]),e("div",X,[(a(),c(g,null,f(6,t=>e("div",{key:t,class:"bg-black bg-opacity-50 text-xl flex flex-col border-white border-2 rounded-xl p-2"},[e("p",Y,"Mål "+b(t),1),h(e("textarea",{name:`goal-${t}`,"onUpdate:modelValue":n=>r(o).objectives[t].title=n,placeholder:"Skriv mål her...",class:"size-full min-h-20 bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg"},`\r
        `,8,Z),[[v,r(o).objectives[t].title]])])),64))])]))}}),te={},se={class:"max-w-7xl"};function oe(d,o){const s=ee,l=R;return a(),c("main",se,[u(s),u(l)])}const le=y(te,[["render",oe]]);export{le as default};
