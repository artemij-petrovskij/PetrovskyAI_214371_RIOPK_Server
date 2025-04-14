import{V as me}from"./index-9f9beae4.js";import{q as P,a1 as w,Q as k,M as B,x as M,y as f,bG as R,aT as K,L as E,aj as W,aR as A,ao as F,I as ve,bH as T,b1 as z,C as $,D as H,aW as fe,u as q,z as Q,a as x,W as ge,bw as ye,at as Se,au as he,bE as pe,av as Pe,E as be,G as Ie,a0 as we,ay as ke,aA as xe,aB as Be,K as Te,aO as De,aU as Ve,X as Ce,bF as Ae,aQ as Fe}from"./index-a1344df0.js";import{m as Re,u as Ee}from"./filter-e86975f2.js";const Oe=P({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ge=Symbol.for("vuetify:datatable:expanded");function Le(e){const r=w(e,"expandOnClick"),a=k(e,"expanded",e.expanded,l=>new Set(l),l=>[...l.values()]);function t(l,o){const c=new Set(a.value);o?c.add(l.value):c.delete(l.value),a.value=c}function n(l){return a.value.has(l.value)}function m(l){t(l,!n(l))}const u={expand:t,expanded:a,expandOnClick:r,isExpanded:n,toggleExpand:m};return B(Ge,u),u}const Ne=P({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),je=Symbol.for("vuetify:data-table-group");function ze(e){const{disableSort:r,groupBy:a,sortBy:t}=e,n=M(new Set),m=f(()=>a.value.map(s=>({...s,order:s.order??!1})).concat(r!=null&&r.value?[]:t.value));function u(s){return n.value.has(s.id)}function l(s){const i=new Set(n.value);u(s)?i.delete(s.id):i.add(s.id),n.value=i}function o(s){function i(y){const h=[];for(const g of y.items)"type"in g&&g.type==="group"?h.push(...i(g)):h.push(g);return h}return i({type:"group",items:s,id:"dummy",key:"dummy",value:"dummy",depth:0})}const c={sortByWithGroups:m,toggleGroup:l,opened:n,groupBy:a,extractRows:o,isGroupOpen:u};return B(je,c),c}function Me(e,r){if(!e.length)return[];const a=new Map;for(const t of e){const n=R(t.raw,r);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function U(e,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!r.length)return[];const n=Me(e,r[0]),m=[],u=r.slice(1);return n.forEach((l,o)=>{const c=r[0],s=`${t}_${c}_${o}`;m.push({depth:a,id:s,key:c,value:o,items:u.length?U(l,u,a+1,s):l,type:"group"})}),m}function _(e,r){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(r.has(t.id)||t.value==null)&&a.push(..._(t.items,r))):a.push(t);return a}function Ke(e,r,a){return{flatItems:f(()=>{if(!r.value.length)return e.value;const n=U(e.value,r.value.map(m=>m.key));return _(n,a.value)})}}function We(e){let{page:r,itemsPerPage:a,sortBy:t,groupBy:n,search:m}=e;const u=K("VDataTable"),l=f(()=>({page:r.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:m.value}));let o=null;E(l,()=>{W(o,l.value)||(o&&o.search!==l.value.search&&(r.value=1),u.emit("update:options",l.value),o=l.value)},{deep:!0,immediate:!0})}const $e=P({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),He=Symbol.for("vuetify:data-table-pagination");function qe(e){const r=k(e,"page",void 0,t=>+(t??1)),a=k(e,"itemsPerPage",void 0,t=>+(t??10));return{page:r,itemsPerPage:a}}function Qe(e){const{page:r,itemsPerPage:a,itemsLength:t}=e,n=f(()=>a.value===-1?0:a.value*(r.value-1)),m=f(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),u=f(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));E([r,u],()=>{r.value>u.value&&(r.value=u.value)});function l(y){a.value=y,r.value=1}function o(){r.value=A(r.value+1,1,u.value)}function c(){r.value=A(r.value-1,1,u.value)}function s(y){r.value=A(y,1,u.value)}const i={page:r,itemsPerPage:a,startIndex:n,stopIndex:m,pageCount:u,itemsLength:t,nextPage:o,prevPage:c,setPage:s,setItemsPerPage:l};return B(He,i),i}function Ue(e){const r=K("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:m}=e,u=f(()=>m.value<=0?a.value:a.value.slice(t.value,n.value));return E(u,l=>{r.emit("update:currentItems",l)}),{paginatedItems:u}}const _e={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:r,value:a}=e;return new Set(a?[(t=r[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:r}=e;return r}},X={showSelectAll:!0,allSelected:e=>{let{currentPage:r}=e;return r},select:e=>{let{items:r,value:a,selected:t}=e;for(const n of r)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:r,currentPage:a,selected:t}=e;return X.select({items:a,value:r,selected:t})}},J={showSelectAll:!0,allSelected:e=>{let{allItems:r}=e;return r},select:e=>{let{items:r,value:a,selected:t}=e;for(const n of r)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:r,allItems:a,selected:t}=e;return J.select({items:a,value:r,selected:t})}},Xe=P({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:W}},"DataTable-select"),Je=Symbol.for("vuetify:data-table-selection");function Ye(e,r){let{allItems:a,currentPage:t}=r;const n=k(e,"modelValue",e.modelValue,d=>new Set(F(d).map(v=>{var b;return((b=a.value.find(D=>e.valueComparator(v,D.value)))==null?void 0:b.value)??v})),d=>[...d.values()]),m=f(()=>a.value.filter(d=>d.selectable)),u=f(()=>t.value.filter(d=>d.selectable)),l=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return _e;case"all":return J;case"page":default:return X}});function o(d){return F(d).every(v=>n.value.has(v.value))}function c(d){return F(d).some(v=>n.value.has(v.value))}function s(d,v){const b=l.value.select({items:d,value:v,selected:new Set(n.value)});n.value=b}function i(d){s([d],!o([d]))}function y(d){const v=l.value.selectAll({value:d,allItems:m.value,currentPage:u.value,selected:new Set(n.value)});n.value=v}const h=f(()=>n.value.size>0),g=f(()=>{const d=l.value.allSelected({allItems:m.value,currentPage:u.value});return!!d.length&&o(d)}),S=f(()=>l.value.showSelectAll),p={toggleSelect:i,select:s,selectAll:y,isSelected:o,isSomeSelected:c,someSelected:h,allSelected:g,showSelectAll:S};return B(Je,p),p}const Ze=P({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),et=Symbol.for("vuetify:data-table-sort");function tt(e){const r=k(e,"sortBy"),a=w(e,"mustSort"),t=w(e,"multiSort");return{sortBy:r,mustSort:a,multiSort:t}}function at(e){const{sortBy:r,mustSort:a,multiSort:t,page:n}=e,m=o=>{if(o.key==null)return;let c=r.value.map(i=>({...i}))??[];const s=c.find(i=>i.key===o.key);s?s.order==="desc"?a.value?s.order="asc":c=c.filter(i=>i.key!==o.key):s.order="desc":t.value?c=[...c,{key:o.key,order:"asc"}]:c=[{key:o.key,order:"asc"}],r.value=c,n&&(n.value=1)};function u(o){return!!r.value.find(c=>c.key===o.key)}const l={sortBy:r,toggleSort:m,isSorted:u};return B(et,l),l}function rt(e,r,a,t){const n=ve();return{sortedItems:f(()=>{var u,l;return a.value.length?lt(r.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(u=t==null?void 0:t.sortFunctions)==null?void 0:u.value},sortRawFunctions:(l=t==null?void 0:t.sortRawFunctions)==null?void 0:l.value}):r.value})}}function lt(e,r,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,t!=null&&t.transform?t.transform(u):u]).sort((u,l)=>{var o,c;for(let s=0;s<r.length;s++){let i=!1;const y=r[s].key,h=r[s].order??"asc";if(h===!1)continue;let g=R(u[1],y),S=R(l[1],y),p=u[0].raw,d=l[0].raw;if(h==="desc"&&([g,S]=[S,g],[p,d]=[d,p]),(o=t==null?void 0:t.sortRawFunctions)!=null&&o[y]){const v=t.sortRawFunctions[y](p,d);if(v==null)continue;if(i=!0,v)return v}if((c=t==null?void 0:t.sortFunctions)!=null&&c[y]){const v=t.sortFunctions[y](g,S);if(v==null)continue;if(i=!0,v)return v}if(!i){if(g instanceof Date&&S instanceof Date)return g.getTime()-S.getTime();if([g,S]=[g,S].map(v=>v!=null?v.toString().toLocaleLowerCase():v),g!==S)return T(g)&&T(S)?0:T(g)?-1:T(S)?1:!isNaN(g)&&!isNaN(S)?Number(g)-Number(S):n.compare(g,S)}}return 0}).map(u=>{let[l]=u;return l})}const nt=P({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function ut(e,r){const a=e.returnObject?r:z(r,e.itemValue),t=z(r,e.itemSelectable,!0);return{type:"item",value:a,selectable:t,raw:r}}function st(e,r){const a=[];for(const t of r)a.push(ut(e,t));return a}function ot(e){return{items:f(()=>st(e,e.items))}}const ct=P({search:String,loading:Boolean,...$(),...nt(),...Xe(),...Ze(),...$e({itemsPerPage:5}),...Oe(),...Ne(),...Re(),...H(),...fe({transition:{component:me,hideOnLeave:!0}})},"VDataIterator"),ft=q()({name:"VDataIterator",props:ct(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,r){let{slots:a}=r;const t=k(e,"groupBy"),n=w(e,"search"),{items:m}=ot(e),{filteredItems:u}=Ee(e,m,n,{transform:I=>I.raw}),{sortBy:l,multiSort:o,mustSort:c}=tt(e),{page:s,itemsPerPage:i}=qe(e),{toggleSort:y}=at({sortBy:l,multiSort:o,mustSort:c,page:s}),{sortByWithGroups:h,opened:g,extractRows:S,isGroupOpen:p,toggleGroup:d}=ze({groupBy:t,sortBy:l}),{sortedItems:v}=rt(e,u,h,{transform:I=>I.raw}),{flatItems:b}=Ke(v,t,g),D=f(()=>b.value.length),{startIndex:Y,stopIndex:Z,pageCount:ee,prevPage:te,nextPage:ae,setItemsPerPage:re,setPage:le}=Qe({page:s,itemsPerPage:i,itemsLength:D}),{paginatedItems:V}=Ue({items:b,startIndex:Y,stopIndex:Z,itemsPerPage:i}),O=f(()=>S(V.value)),{isSelected:ne,select:ue,selectAll:se,toggleSelect:oe}=Ye(e,{allItems:m,currentPage:O}),{isExpanded:ce,toggleExpand:ie}=Le(e);We({page:s,itemsPerPage:i,sortBy:l,groupBy:t,search:n});const C=f(()=>({page:s.value,itemsPerPage:i.value,sortBy:l.value,pageCount:ee.value,toggleSort:y,prevPage:te,nextPage:ae,setPage:le,setItemsPerPage:re,isSelected:ne,select:ue,selectAll:se,toggleSelect:oe,isExpanded:ce,toggleExpand:ie,isGroupOpen:p,toggleGroup:d,items:O.value,groupedItems:V.value}));return Q(()=>x(e.tag,{class:["v-data-iterator",{"v-data-iterator--loading":e.loading},e.class],style:e.style},{default:()=>{var I,G;return[(I=a.header)==null?void 0:I.call(a,C.value),x(ge,{transition:e.transition},{default:()=>{var L,N;return[e.loading?x(ye,{key:"loader",name:"v-data-iterator",active:!0},{default:de=>{var j;return(j=a.loader)==null?void 0:j.call(a,de)}}):x("div",{key:"items"},[V.value.length?(N=a.default)==null?void 0:N.call(a,C.value):(L=a["no-data"])==null?void 0:L.call(a)])]}}),(G=a.footer)==null?void 0:G.call(a,C.value)]}})),{}}});const it=P({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Se(),...$(),...he(),...pe(),...Pe(),...H({tag:"footer"}),...be()},"VFooter"),gt=q()({name:"VFooter",props:it(),setup(e,r){let{slots:a}=r;const t=M(),{themeClasses:n}=Ie(e),{backgroundColorClasses:m,backgroundColorStyles:u}=we(w(e,"color")),{borderClasses:l}=ke(e),{elevationClasses:o}=xe(e),{roundedClasses:c}=Be(e),s=Te(32),{resizeRef:i}=De(h=>{h.length&&(s.value=h[0].target.clientHeight)}),y=f(()=>e.height==="auto"?s.value:parseInt(e.height,10));return Ve(()=>e.app,()=>{const h=Ae({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:y,elementSize:f(()=>e.height==="auto"?void 0:y.value),active:f(()=>e.app),absolute:w(e,"absolute")});Fe(()=>{t.value=h.layoutItemStyles.value})}),Q(()=>x(e.tag,{ref:i,class:["v-footer",n.value,m.value,l.value,o.value,c.value,e.class],style:[u.value,e.app?t.value:{height:Ce(e.height)},e.style]},a)),{}}});export{ft as V,gt as a};
