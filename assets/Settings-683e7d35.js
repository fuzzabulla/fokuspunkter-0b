import{bz as b,az as a,q as c,F as f,aK as v,r as e,aj as m,b7 as r,aH as y,bu as x,bj as h,aa as k,bv as $,bA as g,m as S,z as i,a_ as p,bs as j,e as T,aD as B,aA as C}from"./index-b3b719f7.js";const A={class:"flex flex-row border-white border-2 rounded-xl overflow-hidden"},L=["onClick"],V={__name:"TextButton",setup(d){const o=b(),n=["capitalize","uppercase"];return(l,t)=>(a(),c("div",A,[(a(),c(f,null,v(n,s=>e("button",{key:s,onClick:_=>r(o).textTransform=s,class:m([[r(o).textTransform===s?"bg-white text-emerald-500":""],"grid place-content-center px-3 py-1 duration-200 hover:bg-white hover:text-emerald-500"])},[e("span",{class:m(s)},"Aaa",2)],10,L)),64))]))}},z={class:"w-min flex flex-row border-white border-2 rounded-xl"},O=["onKeydown"],E={__name:"AddButton",setup(d){const o=b(),n=y("");function l(){n.value.length<1||(o.addStudent(n.value),n.value="")}return(t,s)=>(a(),c("div",z,[x(e("input",{name:"student-name","onUpdate:modelValue":s[0]||(s[0]=_=>k(n)?n.value=_:null),placeholder:"Skriv navn her...",minlength:"1",onKeydown:$(l,["enter"]),class:"px-3 py-1 bg-inherit rounded-l-xl placeholder:text-gray-200"},null,40,O),[[h,r(n)]]),e("button",{onClick:l,class:"bg-white text-emerald-500 p-2 rounded-r-lg border-0 border-l-2"},"Tilføj")]))}};const w=d=>(B("data-v-dc61e81f"),d=d(),C(),d),I={class:"mb-8 text-xl"},K=w(()=>e("p",{class:"text-3xl text-center mb-4"},"Elever",-1)),U={class:"flex flex-row gap-4 mb-4"},D={class:"grid place-content-center px-3 py-1 ml-auto bg-white text-emerald-500 border-white border-2 rounded-xl"},M={class:"w-full text-left border-spacing-0 border-separate"},N=w(()=>e("thead",{class:"bg-black bg-opacity-50"},[e("tr",null,[e("th",null,"Navn"),e("th",null,"Opgave"),e("th",null,"❌")])],-1)),F=["onClick"],q={__name:"StudentsList",setup(d){const o=b(),n=S(()=>{let l=[];return Object.values(o.objectives).forEach(t=>{t.students.forEach(s=>{l.push({...s,objective:t.title})})}),l.sort((t,s)=>t.name>s.name?1:-1),l});return(l,t)=>{const s=E,_=V;return a(),c("section",I,[K,e("div",U,[i(s),i(_),e("p",D,[e("span",null,"Antal elever: "+p(r(n).length),1)])]),e("table",M,[N,i(T,{name:"students",tag:"tbody",class:"relative w-full"},{default:j(()=>[(a(!0),c(f,null,v(r(n),u=>(a(),c("tr",{key:u.id,class:"w-full bg-black bg-opacity-30"},[e("td",{class:m(r(o).textTransform)},p(u.name),3),e("td",null,p(u.objective),1),e("td",{onClick:se=>r(o).removeStudent(u.id),class:"text-center cursor-pointer"},"❌",8,F)]))),128))]),_:1})])])}}},G=g(q,[["__scopeId","data-v-dc61e81f"]]),H={class:"mb-8"},R=e("p",{class:"text-3xl text-center mb-4"},"Mål",-1),J={class:"bg-black bg-opacity-50 text-2xl flex flex-col border-white border-2 rounded-xl p-2 mb-4"},P=e("p",{class:"text-center mb-2"},"Overordnet mål",-1),Q={class:"grid grid-cols-3 gap-4"},W={class:"text-center mb-2"},X=["name","onUpdate:modelValue"],Y={__name:"ObjectivesList",setup(d){const o=b();return(n,l)=>(a(),c("section",H,[R,e("div",J,[P,x(e("input",{name:"primary-goal","onUpdate:modelValue":l[0]||(l[0]=t=>r(o).objectives.goal.title=t),type:"text",placeholder:"Skriv overordnet mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg text-center"},null,512),[[h,r(o).objectives.goal.title]])]),e("div",Q,[(a(),c(f,null,v(6,t=>e("div",{key:t,class:"bg-black bg-opacity-50 text-xl flex flex-col border-white border-2 rounded-xl p-2"},[e("p",W,"Mål "+p(t),1),x(e("textarea",{name:`goal-${t}`,"onUpdate:modelValue":s=>r(o).objectives[t].title=s,placeholder:"Skriv mål her...",class:"w-full h-full min-h-[5rem] bg-black bg-opacity-30 px-3 py-1 border-white border-2 rounded-lg"},`\r
        `,8,X),[[h,r(o).objectives[t].title]])])),64))])]))}},Z={},ee={class:"max-w-7xl"};function te(d,o){const n=Y,l=G;return a(),c("main",ee,[i(n),i(l)])}const ne=g(Z,[["render",te]]);export{ne as default};
