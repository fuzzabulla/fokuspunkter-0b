import{M as p,bE as h,aE as a,u as c,F as v,aP as f,v as e,ao as u,bc as l,aM as $,bz as m,bo as g,af as S,bA as j,q as C,I as d,b3 as x,bx as B,h as E,aI as T,aF as I,bF as y}from"./index-77c864dc.js";const V={class:"flex flex-row border-white border-2 rounded-xl overflow-hidden"},A=["onClick"],L=p({__name:"TextButton",setup(i){const o=h(),t=["capitalize","uppercase"];return(r,n)=>(a(),c("div",V,[(a(),c(v,null,f(t,s=>e("button",{key:s,onClick:b=>l(o).textTransform=s,class:u([[l(o).textTransform===s?"bg-white text-emerald-500":""],"grid place-content-center px-3 py-1 duration-200 hover:bg-white hover:text-emerald-500"])},[e("span",{class:u(s)},"Aaa",2)],10,A)),64))]))}}),z=e("span",null,"Eksportér",-1),M=[z],O=p({__name:"ExportButton",setup(i){function o(){const t=localStorage.getItem("store");t&&navigator.clipboard.writeText(t)}return(t,r)=>(a(),c("button",{onClick:o,class:"grid place-content-center px-3 py-1 text-white border-white border-2 rounded-xl duration-200 hover:bg-white hover:text-emerald-500 active:scale-90 outline-none"},M))}}),F={class:"w-min flex flex-row border-white border-2 rounded-xl"},U=p({__name:"AddButton",setup(i){const o=h(),t=$("");function r(){t.value.length<1||(o.addStudent(t.value),t.value="")}return(n,s)=>(a(),c("div",F,[m(e("input",{name:"student-name","onUpdate:modelValue":s[0]||(s[0]=b=>S(t)?t.value=b:null),placeholder:"Skriv navn her...",minlength:"1",onKeydown:j(r,["enter"]),class:"px-3 py-1 bg-inherit rounded-l-xl placeholder:text-gray-200"},null,544),[[g,l(t)]]),e("button",{onClick:r,class:"bg-white text-emerald-500 p-2 rounded-r-lg border-0 border-l-2"},"Tilføj")]))}}),w=i=>(T("data-v-06e519f4"),i=i(),I(),i),N={class:"mb-8 text-xl"},D=w(()=>e("p",{class:"text-3xl text-center mb-4"},"Elever",-1)),K={class:"flex flex-row gap-4 mb-4"},q={class:"grid place-content-center px-3 py-1 ml-auto bg-white text-emerald-500 border-white border-2 rounded-xl"},G={class:"w-full text-left border-spacing-0 border-separate"},P={class:"bg-black bg-opacity-50"},R=w(()=>e("th",null,"Navn",-1)),H=w(()=>e("th",null,"Opgave",-1)),J=["onClick"],Q=p({__name:"StudentsList",setup(i){const o=h(),t=C(()=>{let r=[];return Object.values(o.objectives).forEach(n=>{n.students.forEach(s=>{r.push({...s,objective:n.title})})}),r.sort((n,s)=>n.name>s.name?1:-1),r});return(r,n)=>{const s=U,b=O,k=L;return a(),c("section",N,[D,e("div",K,[d(s),d(b),d(k),e("p",q,[e("span",null,"Antal elever: "+x(l(t).length),1)])]),e("table",G,[e("thead",P,[e("tr",null,[R,H,e("th",{onClick:n[0]||(n[0]=_=>l(o).removeAllStudents()),class:u([l(t).length===0?"pointer-events-none":"cursor-pointer"])},[e("span",{class:u([{"opacity-0":l(t).length===0},"duration-200"])},"❌",2)],2)])]),d(E,{name:"students",tag:"tbody",class:"relative w-full"},{default:B(()=>[(a(!0),c(v,null,f(l(t),_=>(a(),c("tr",{key:_.id,class:"w-full bg-black bg-opacity-30"},[e("td",{class:u(l(o).textTransform)},x(_.name),3),e("td",null,x(_.objective),1),e("td",{onClick:ce=>l(o).removeStudent(_.id),class:"text-center cursor-pointer"},"❌",8,J)]))),128))]),_:1})])])}}});const W=y(Q,[["__scopeId","data-v-06e519f4"]]),X={class:"mb-8"},Y=e("p",{class:"text-3xl text-center mb-4"},"Mål",-1),Z={class:"bg-black bg-opacity-50 text-2xl flex flex-col border-white border-2 rounded-xl p-2 mb-4"},ee=e("p",{class:"text-center mb-2"},"Overordnet mål",-1),te={class:"grid grid-cols-3 gap-4"},oe={class:"text-center mb-2"},ne=["name","onUpdate:modelValue"],se=p({__name:"ObjectivesList",setup(i){const o=h();return(t,r)=>(a(),c("section",X,[Y,e("div",Z,[ee,m(e("input",{name:"primary-goal","onUpdate:modelValue":r[0]||(r[0]=n=>l(o).objectives.goal.title=n),type:"text",placeholder:"Skriv overordnet mål her...",class:"size-full min-h-20 bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg text-center"},null,512),[[g,l(o).objectives.goal.title]])]),e("div",te,[(a(),c(v,null,f(6,n=>e("div",{key:n,class:"bg-black bg-opacity-50 text-xl flex flex-col border-white border-2 rounded-xl p-2"},[e("p",oe,"Mål "+x(n),1),m(e("textarea",{name:`goal-${n}`,"onUpdate:modelValue":s=>l(o).objectives[n].title=s,placeholder:"Skriv mål her...",class:"size-full min-h-20 bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg"},`\r
        `,8,ne),[[g,l(o).objectives[n].title]])])),64))])]))}}),re={},le={class:"max-w-7xl"};function ae(i,o){const t=se,r=W;return a(),c("main",le,[d(t),d(r)])}const de=y(re,[["render",ae]]);export{de as default};
