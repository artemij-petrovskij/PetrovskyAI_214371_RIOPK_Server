import{V as p}from"./vacancy.service-906fc0e3.js";import{_ as V,o as d,c as h,w as a,a4 as w,a as t,a8 as _,i as y,e as v,p as e,d as c,g as b,F as I,a9 as x,b as r,a5 as s,aa as k,h as C,V as u}from"./index-a1344df0.js";import{V as S}from"./index-9f9beae4.js";import{V as P}from"./VLayout-a5cfd26b.js";import{V as A,a as z}from"./VFooter-ebf9f8a1.js";import{V as B,a as M}from"./VTable-8d08e502.js";import{V as N}from"./VListItem-365efae1.js";import"./filter-e86975f2.js";const T={data:()=>({items:[],itemsPerPage:4,dialog:!1,overlay:!0,username:localStorage.getItem("email"),show:!1,roleId:""}),methods:{async loadMyAdverts(){let o={email:localStorage.getItem("email")},i=await p.allVacancies(o);i.err?console.log("Empty my_adverts list"):(this.items=i.vacancies.reverse(),this.roleId=i.roleId,console.log(i.roleId)),localStorage.getItem("roleId")==null&&location.reload(),localStorage.setItem("roleId",i.roleId),setTimeout(()=>{this.show=!0},300)},onClickSeeAll(){this.itemsPerPage=this.itemsPerPage===4?this.items.length:4},async deleteItem(o){this.dialog=!1;let i=await Advert.loadMyAdvertsTN(o);console.log(i),await this.loadMyAdverts()}},beforeCreate(){localStorage.getItem("jwt")==null&&this.$router.push("/")},async created(){await this.loadMyAdverts()}},$={key:0,class:"my-box"},F={class:"text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center"},j=e("div",{class:"text-truncate"},"Вакансии",-1),L={class:"d-flex align-center"},D=e("span",{class:"text-decoration-underline text-none"},"Посмотреть все",-1),E={class:"d-inline-flex"},R={class:"text-h6"},q={align:"right"},G=e("td",null,null,-1),H={align:"right"},J=e("td",null,null,-1),K={align:"right"},O=e("td",null,null,-1),Q={align:"right"},U=e("td",null,null,-1),W={align:"right"},X=e("td",null,null,-1);function Y(o,i,Z,ee,te,g){return d(),h(w,null,{default:a(()=>[t(S,null,{default:a(()=>[o.show?(d(),_("div",$,[t(y,null,{default:a(()=>[t(P,null,{default:a(()=>[t(v,null,{default:a(()=>[t(A,{items:o.items,"items-per-page":o.itemsPerPage,style:{padding:"40px"}},{header:a(({page:n,pageCount:l,prevPage:m,nextPage:f})=>[e("h1",F,[j,e("div",L,[t(c,{class:"me-8",variant:"text",onClick:g.onClickSeeAll},{default:a(()=>[D]),_:1},8,["onClick"]),e("div",E,[t(c,{disabled:n===1,class:"me-2",icon:"mdi-arrow-left",size:"small",variant:"tonal",onClick:m},null,8,["disabled","onClick"]),t(c,{disabled:n===l,icon:"mdi-arrow-right",size:"small",variant:"tonal",onClick:f},null,8,["disabled","onClick"])])])])]),default:a(({items:n})=>[t(b,null,{default:a(()=>[(d(!0),_(I,null,x(n,(l,m)=>(d(),h(C,{key:m,cols:"12",sm:"12",xl:"3"},{default:a(()=>[t(B,{border:""},{default:a(()=>[t(N,{title:l.raw.name,href:`/vacancy?id=${l.raw.id}`,density:"comfortable",lines:"two",subtitle:"Вакансия"},{title:a(()=>[e("strong",R,s(l.raw.title),1)]),_:2},1032,["title","href"]),t(M,{class:"text-caption",density:"compact"},{default:a(()=>[e("tbody",null,[r(s(l.raw)+" ",1),e("tr",q,[e("th",null,"Описание: "+s(l.raw.description),1),G]),e("tr",H,[e("th",null,[t(u,{icon:"mdi-cash",size:"large"}),r(" "+s(l.raw.salary),1)]),J]),e("tr",K,[e("th",null,[t(u,{icon:"mdi-account-group",size:"large"}),r(" "+s(l.raw.category.name),1)]),O]),e("tr",Q,[e("th",null,[t(u,{icon:"mdi-school",size:"large"}),r(" "+s(l.raw.requirements),1)]),U]),e("tr",W,[e("th",null,[t(u,{icon:"mdi-map-marker",size:"large"}),r(" "+s(l.raw.location),1)]),X]),t(c,{v:"",ariant:"outlined",class:"ma-4"},{default:a(()=>[r(" Откликнуться ")]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),footer:a(({page:n,pageCount:l})=>[t(z,{class:"justify-space-between text-body-2 mt-4",color:"surface-variant"},{default:a(()=>[r(" Всего вакансий: "+s(o.items.length)+" ",1),e("div",null,"Страница "+s(n)+" из "+s(l),1)]),_:2},1024)]),_:1},8,["items","items-per-page"])]),_:1})]),_:1})]),_:1})])):k("",!0)]),_:1})]),_:1})}const ce=V(T,[["render",Y]]);export{ce as default};
