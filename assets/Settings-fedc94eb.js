import{bA as h,bz as m,aH as w,m as y,az as i,q as u,r as e,bu as p,bj as b,b7 as r,aa as S,bv as k,a_ as _,z as x,bs as j,F as v,aK as f,e as $,aD as L,aA as V}from"./index-b0c59b2b.js";const g=c=>(L("data-v-412f5868"),c=c(),V(),c),O={class:"mb-8 text-xl"},C=g(()=>e("p",{class:"text-3xl text-center mb-4"},"Elever",-1)),E={class:"flex flex-row justify-between mb-4"},I={class:"w-min flex flex-row border-white border-2 rounded-xl"},U={class:"grid place-content-center px-3 py-1 bg-white text-emerald-500 border-white border-2 rounded-xl"},z={class:"w-full text-left border-spacing-0 border-separate"},A=g(()=>e("thead",{class:"bg-black bg-opacity-50"},[e("tr",null,[e("th",null,"Navn"),e("th",null,"Opgave"),e("th",null,"❌")])],-1)),B=["onClick"],D={__name:"StudentsList",setup(c){const l=m(),o=w(""),a=y(()=>{let d=[];return Object.values(l.objectives).forEach(s=>{s.students.forEach(t=>{d.push({...t,objective:s.title})})}),d.sort((s,t)=>s.name>t.name?1:-1),d});function n(){o.value.length<1||(l.addStudent(o.value),o.value="")}return(d,s)=>(i(),u("section",O,[C,e("div",E,[e("div",I,[p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>S(o)?o.value=t:null),placeholder:"Skriv navn her...",minlength:"1",onKeydown:s[1]||(s[1]=k(t=>n(),["enter"])),class:"px-3 py-1 bg-inherit rounded-l-xl placeholder:text-gray-200"},null,544),[[b,r(o)]]),e("button",{onClick:s[2]||(s[2]=t=>n()),class:"bg-white text-emerald-500 p-2 rounded-r-lg border-0 border-l-2"},"Tilføj")]),e("p",U,[e("span",null,"Antal elever: "+_(r(a).length),1)])]),e("table",z,[A,x($,{name:"students",tag:"tbody",class:"relative w-full"},{default:j(()=>[(i(!0),u(v,null,f(r(a),t=>(i(),u("tr",{key:t.id,class:"w-full bg-black bg-opacity-30"},[e("td",null,_(t.name),1),e("td",null,_(t.objective),1),e("td",{onClick:Q=>r(l).removeStudent(t.id),class:"text-center cursor-pointer"},"❌",8,B)]))),128))]),_:1})])]))}},K=h(D,[["__scopeId","data-v-412f5868"]]),M={class:"mb-8"},N=e("p",{class:"text-3xl text-center mb-4"},"Mål",-1),T={class:"bg-black bg-opacity-50 text-2xl flex flex-col border-white border-2 rounded-xl p-2 mb-4"},F=e("p",{class:"text-center mb-2"},"Overordnet mål",-1),q={class:"grid grid-cols-3 gap-4"},G={class:"text-center mb-2"},H=["onUpdate:modelValue"],R={__name:"ObjectivesList",setup(c){const l=m();return(o,a)=>(i(),u("section",M,[N,e("div",T,[F,p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>r(l).objectives.goal.title=n),type:"text",placeholder:"Skriv overordnet mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg text-center"},null,512),[[b,r(l).objectives.goal.title]])]),e("div",q,[(i(),u(v,null,f(6,n=>e("div",{key:n,class:"bg-black bg-opacity-50 text-xl flex flex-col border-white border-2 rounded-xl p-2"},[e("p",G,"Mål "+_(n),1),p(e("textarea",{"onUpdate:modelValue":d=>r(l).objectives[n].title=d,placeholder:"Skriv mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg"},`\r
        `,8,H),[[b,r(l).objectives[n].title]])])),64))])]))}},J={};function P(c,l){const o=R,a=K;return i(),u("main",null,[x(o),x(a)])}const X=h(J,[["render",P]]);export{X as default};
