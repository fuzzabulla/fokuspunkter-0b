import{bz as m,aH as f,az as c,q as d,bu as p,bj as b,b7 as a,r as e,aa as w,bv as y,bA as h,m as S,z as u,a_ as _,bs as k,F as x,aK as g,e as $,aD as j,aA as L}from"./index-5bcdec6c.js";const V={class:"w-min flex flex-row border-white border-2 rounded-xl"},A=["onKeydown"],B={__name:"AddButton",setup(r){const l=m(),s=f("");function o(){s.value.length<1||(l.addStudent(s.value),s.value="")}return(t,n)=>(c(),d("div",V,[p(e("input",{name:"student-name","onUpdate:modelValue":n[0]||(n[0]=i=>w(s)?s.value=i:null),placeholder:"Skriv navn her...",minlength:"1",onKeydown:y(o,["enter"]),class:"px-3 py-1 bg-inherit rounded-l-xl placeholder:text-gray-200"},null,40,A),[[b,a(s)]]),e("button",{onClick:o,class:"bg-white text-emerald-500 p-2 rounded-r-lg border-0 border-l-2"},"Tilføj")]))}};const v=r=>(j("data-v-49bacc4c"),r=r(),L(),r),O={class:"mb-8 text-xl"},C=v(()=>e("p",{class:"text-3xl text-center mb-4"},"Elever",-1)),E={class:"flex flex-row gap-4 mb-4"},I={class:"grid place-content-center px-3 py-1 ml-auto bg-white text-emerald-500 border-white border-2 rounded-xl"},K={class:"w-full text-left border-spacing-0 border-separate"},U=v(()=>e("thead",{class:"bg-black bg-opacity-50"},[e("tr",null,[e("th",null,"Navn"),e("th",null,"Opgave"),e("th",null,"❌")])],-1)),z=["onClick"],D={__name:"StudentsList",setup(r){const l=m(),s=S(()=>{let o=[];return Object.values(l.objectives).forEach(t=>{t.students.forEach(n=>{o.push({...n,objective:t.title})})}),o.sort((t,n)=>t.name>n.name?1:-1),o});return(o,t)=>{const n=B;return c(),d("section",O,[C,e("div",E,[u(n),e("p",I,[e("span",null,"Antal elever: "+_(a(s).length),1)])]),e("table",K,[U,u($,{name:"students",tag:"tbody",class:"relative w-full"},{default:k(()=>[(c(!0),d(x,null,g(a(s),i=>(c(),d("tr",{key:i.id,class:"w-full bg-black bg-opacity-30"},[e("td",null,_(i.name),1),e("td",null,_(i.objective),1),e("td",{onClick:X=>a(l).removeStudent(i.id),class:"text-center cursor-pointer"},"❌",8,z)]))),128))]),_:1})])])}}},M=h(D,[["__scopeId","data-v-49bacc4c"]]),N={class:"mb-8"},T=e("p",{class:"text-3xl text-center mb-4"},"Mål",-1),F={class:"bg-black bg-opacity-50 text-2xl flex flex-col border-white border-2 rounded-xl p-2 mb-4"},q=e("p",{class:"text-center mb-2"},"Overordnet mål",-1),G={class:"grid grid-cols-3 gap-4"},H={class:"text-center mb-2"},R=["name","onUpdate:modelValue"],J={__name:"ObjectivesList",setup(r){const l=m();return(s,o)=>(c(),d("section",N,[T,e("div",F,[q,p(e("input",{name:"primary-goal","onUpdate:modelValue":o[0]||(o[0]=t=>a(l).objectives.goal.title=t),type:"text",placeholder:"Skriv overordnet mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg text-center"},null,512),[[b,a(l).objectives.goal.title]])]),e("div",G,[(c(),d(x,null,g(6,t=>e("div",{key:t,class:"bg-black bg-opacity-50 text-xl flex flex-col border-white border-2 rounded-xl p-2"},[e("p",H,"Mål "+_(t),1),p(e("textarea",{name:`goal-${t}`,"onUpdate:modelValue":n=>a(l).objectives[t].title=n,placeholder:"Skriv mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg"},`\r
        `,8,R),[[b,a(l).objectives[t].title]])])),64))])]))}},P={},Q={class:"max-w-7xl"};function W(r,l){const s=J,o=M;return c(),d("main",Q,[u(s),u(o)])}const Z=h(P,[["render",W]]);export{Z as default};
