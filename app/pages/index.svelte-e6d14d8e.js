import{S as gl,i as yl,s as Tl,e as s,t as d,k as y,K as wl,c as i,a as c,d as l,h as _,m as T,b as f,L as bl,J as r,g as L,p as ll,q as Dl,r as al,o as Rl,f as Y,j as B,n as ut,M as ir,N as Al,O as nl,P as ur}from"../chunks/index-d8dea3be.js";function ol(v,e,t){const n=v.slice();return n[12]=e[t],n}function sl(v,e,t){const n=v.slice();return n[15]=e[t],n}function il(v,e,t){const n=v.slice();return n[18]=e[t],n}function Ml(v){let e,t=v[2].message+"",n;return{c(){e=s("p"),n=d(t),this.h()},l(a){e=i(a,"P",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"color","red")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&4&&t!==(t=a[2].message+"")&&B(n,t)},i:ut,o:ut,d(a){a&&l(e)}}}function Pl(v){let e,t,n,a,o,p,b,g,P,C,R,w,H,k,m,A,M,q,G,N,D,W,X,V,Z,De,$,me,be,ne,_e,ve,x,Re,Ee,ee,ge,He,te,J,Le,re,Q,Ne,le,z,K,I,U,F,E,qe,Ie,Ae,Me,Pe,se,Ce,Be,Et,ft,ye,fr,ct,pe,Ye,j,Xe,gt,yt,Je,Tt,wt,Qe,Dt,Rt,je,At,Mt,ze,Pt,Ct,We,Ht,Lt,Ze,Nt,qt,$e,It,Bt,xe,jt,St,et,Vt,Kt,Se,ie=[],cr=new Map,ht,dt,_t,ke,ae,tt,Ut,Ot,ue,rt,Gt,Ft,lt,Yt,Xt,at,Jt,Qt,Ve,zt,Wt,Ke,fe=[],hr=new Map,Zt,oe,nt,$t,xt,ce,ot,er,tr,st,rr,lr,it,ar,nr,Ue,or,sr,Oe,he=[],dr=new Map,pt=v[1];const _r=u=>u[18].music;for(let u=0;u<pt.length;u+=1){let h=il(v,pt,u),S=_r(h);cr.set(S,ie[u]=hl(S,h))}let mt=v[3];const pr=u=>u[15].player;for(let u=0;u<mt.length;u+=1){let h=sl(v,mt,u),S=pr(h);hr.set(S,fe[u]=dl(S,h))}let vt=v[4];const mr=u=>u[12].version;for(let u=0;u<vt.length;u+=1){let h=ol(v,vt,u),S=mr(h);dr.set(S,he[u]=_l(S,h))}return{c(){e=s("p"),t=s("b"),n=d("Anyone can edit the following rekidai data."),a=s("br"),o=d("If you want to update rekidai data, please fork "),p=s("a"),b=d("https://github.com/rekidai-info/rekidai-info.github.io"),g=d(", edit "),P=s("a"),C=d("rekidai.json"),R=d(", and submit a Pull Request."),w=s("br"),H=d("Don't have a GitHub account? Please submit a request form for "),k=s("a"),m=d("Rekidai Score Update Request"),A=d(" or "),M=s("a"),q=d("New Music Addition Request"),G=d("."),N=s("br"),D=s("a"),W=d("Rank"),X=d(" / "),V=s("a"),Z=d("KKM*"),De=d(" / "),$=s("a"),me=d("CHEPY"),be=d("("),ne=s("a"),_e=d("Donate"),ve=d(") / "),x=s("a"),Re=d("DON*"),Ee=d("("),ee=s("a"),ge=d("Donate1"),He=d(",  "),te=s("a"),J=d("Donate2"),Le=d(") / "),re=s("a"),Q=d("CHARM"),Ne=d("("),le=s("a"),z=d("Donate"),K=d(") / "),I=s("a"),U=d("Developer"),F=d("("),E=s("a"),qe=d("Donate"),Ie=d(")"),Ae=y(),Me=s("hr"),Pe=y(),se=s("input"),Ce=y(),Be=s("script"),Et=d(`const input = document.getElementById('search');\r
if (input != null) {\r
const search = () => {\r
const table = document.getElementById('rekidai');\r
if (table == null) {\r
return;\r
}\r

const rows = table.getElementsByTagName('tr');\r

Array.prototype.forEach.call(rows, (row, i) => {\r
if (i <= 0) {\r
return;\r
}\r

const textContent = row.textContent;\r

if (textContent.toUpperCase().indexOf(input.value.toUpperCase()) < 0) {\r
row.style.display = 'none';\r
} else {\r
row.style.display = '';\r
}\r
});\r
};\r

input.addEventListener('keypress', e => {\r
if (e.keyCode === 13) {\r
search();\r
}\r
});\r
}`),ft=y(),ye=s("script"),ct=y(),pe=s("table"),Ye=s("thead"),j=s("tr"),Xe=s("th"),gt=d("Music"),yt=y(),Je=s("th"),Tt=d("Player"),wt=y(),Qe=s("th"),Dt=d("Score"),Rt=y(),je=s("th"),At=d("Record"),Mt=y(),ze=s("th"),Pt=d("Rate"),Ct=y(),We=s("th"),Ht=d("Notes"),Lt=y(),Ze=s("th"),Nt=d("BPM"),qt=y(),$e=s("th"),It=d("Top Ver"),Bt=y(),xe=s("th"),jt=d("Version"),St=y(),et=s("th"),Vt=d("Date"),Kt=y(),Se=s("tbody");for(let u=0;u<ie.length;u+=1)ie[u].c();ht=y(),dt=s("hr"),_t=y(),ke=s("div"),ae=s("table"),tt=s("caption"),Ut=d("Top Ranker"),Ot=y(),ue=s("thead"),rt=s("th"),Gt=d("Rank"),Ft=y(),lt=s("th"),Yt=d("Player"),Xt=y(),at=s("th"),Jt=d("Count"),Qt=y(),Ve=s("th"),zt=d("Percentage"),Wt=y(),Ke=s("tbody");for(let u=0;u<fe.length;u+=1)fe[u].c();Zt=y(),oe=s("table"),nt=s("caption"),$t=d("Top Version"),xt=y(),ce=s("thead"),ot=s("th"),er=d("Rank"),tr=y(),st=s("th"),rr=d("Version"),lr=y(),it=s("th"),ar=d("Count"),nr=y(),Ue=s("th"),or=d("Percentage"),sr=y(),Oe=s("tbody");for(let u=0;u<he.length;u+=1)he[u].c();this.h()},l(u){e=i(u,"P",{});var h=c(e);t=i(h,"B",{});var S=c(t);n=_(S,"Anyone can edit the following rekidai data."),S.forEach(l),a=i(h,"BR",{}),o=_(h,"If you want to update rekidai data, please fork "),p=i(h,"A",{href:!0,target:!0,rel:!0});var vr=c(p);b=_(vr,"https://github.com/rekidai-info/rekidai-info.github.io"),vr.forEach(l),g=_(h,", edit "),P=i(h,"A",{href:!0,target:!0,rel:!0});var kr=c(P);C=_(kr,"rekidai.json"),kr.forEach(l),R=_(h,", and submit a Pull Request."),w=i(h,"BR",{}),H=_(h,"Don't have a GitHub account? Please submit a request form for "),k=i(h,"A",{href:!0,target:!0,rel:!0});var br=c(k);m=_(br,"Rekidai Score Update Request"),br.forEach(l),A=_(h," or "),M=i(h,"A",{href:!0,target:!0,rel:!0});var Er=c(M);q=_(Er,"New Music Addition Request"),Er.forEach(l),G=_(h,"."),N=i(h,"BR",{}),D=i(h,"A",{href:!0});var gr=c(D);W=_(gr,"Rank"),gr.forEach(l),X=_(h," / "),V=i(h,"A",{href:!0,target:!0,rel:!0});var yr=c(V);Z=_(yr,"KKM*"),yr.forEach(l),De=_(h," / "),$=i(h,"A",{href:!0,target:!0,rel:!0});var Tr=c($);me=_(Tr,"CHEPY"),Tr.forEach(l),be=_(h,"("),ne=i(h,"A",{href:!0,target:!0,rel:!0});var wr=c(ne);_e=_(wr,"Donate"),wr.forEach(l),ve=_(h,") / "),x=i(h,"A",{href:!0,target:!0,rel:!0});var Dr=c(x);Re=_(Dr,"DON*"),Dr.forEach(l),Ee=_(h,"("),ee=i(h,"A",{href:!0,target:!0,rel:!0});var Rr=c(ee);ge=_(Rr,"Donate1"),Rr.forEach(l),He=_(h,",  "),te=i(h,"A",{href:!0,target:!0,rel:!0});var Ar=c(te);J=_(Ar,"Donate2"),Ar.forEach(l),Le=_(h,") / "),re=i(h,"A",{href:!0,target:!0,rel:!0});var Mr=c(re);Q=_(Mr,"CHARM"),Mr.forEach(l),Ne=_(h,"("),le=i(h,"A",{href:!0,target:!0,rel:!0});var Pr=c(le);z=_(Pr,"Donate"),Pr.forEach(l),K=_(h,") / "),I=i(h,"A",{href:!0,target:!0,rel:!0});var Cr=c(I);U=_(Cr,"Developer"),Cr.forEach(l),F=_(h,"("),E=i(h,"A",{href:!0,target:!0,rel:!0});var Hr=c(E);qe=_(Hr,"Donate"),Hr.forEach(l),Ie=_(h,")"),h.forEach(l),Ae=T(u),Me=i(u,"HR",{}),Pe=T(u),se=i(u,"INPUT",{type:!0,id:!0,placeholder:!0,style:!0}),Ce=T(u),Be=i(u,"SCRIPT",{});var Lr=c(Be);Et=_(Lr,`const input = document.getElementById('search');\r
if (input != null) {\r
const search = () => {\r
const table = document.getElementById('rekidai');\r
if (table == null) {\r
return;\r
}\r

const rows = table.getElementsByTagName('tr');\r

Array.prototype.forEach.call(rows, (row, i) => {\r
if (i <= 0) {\r
return;\r
}\r

const textContent = row.textContent;\r

if (textContent.toUpperCase().indexOf(input.value.toUpperCase()) < 0) {\r
row.style.display = 'none';\r
} else {\r
row.style.display = '';\r
}\r
});\r
};\r

input.addEventListener('keypress', e => {\r
if (e.keyCode === 13) {\r
search();\r
}\r
});\r
}`),Lr.forEach(l),ft=T(u),ye=i(u,"SCRIPT",{src:!0});var El=c(ye);El.forEach(l),ct=T(u),pe=i(u,"TABLE",{id:!0,class:!0});var kt=c(pe);Ye=i(kt,"THEAD",{});var Nr=c(Ye);j=i(Nr,"TR",{class:!0});var O=c(j);Xe=i(O,"TH",{});var qr=c(Xe);gt=_(qr,"Music"),qr.forEach(l),yt=T(O),Je=i(O,"TH",{});var Ir=c(Je);Tt=_(Ir,"Player"),Ir.forEach(l),wt=T(O),Qe=i(O,"TH",{});var Br=c(Qe);Dt=_(Br,"Score"),Br.forEach(l),Rt=T(O),je=i(O,"TH",{class:!0});var jr=c(je);At=_(jr,"Record"),jr.forEach(l),Mt=T(O),ze=i(O,"TH",{});var Sr=c(ze);Pt=_(Sr,"Rate"),Sr.forEach(l),Ct=T(O),We=i(O,"TH",{});var Vr=c(We);Ht=_(Vr,"Notes"),Vr.forEach(l),Lt=T(O),Ze=i(O,"TH",{});var Kr=c(Ze);Nt=_(Kr,"BPM"),Kr.forEach(l),qt=T(O),$e=i(O,"TH",{});var Ur=c($e);It=_(Ur,"Top Ver"),Ur.forEach(l),Bt=T(O),xe=i(O,"TH",{});var Or=c(xe);jt=_(Or,"Version"),Or.forEach(l),St=T(O),et=i(O,"TH",{});var Gr=c(et);Vt=_(Gr,"Date"),Gr.forEach(l),O.forEach(l),Nr.forEach(l),Kt=T(kt),Se=i(kt,"TBODY",{});var Fr=c(Se);for(let de=0;de<ie.length;de+=1)ie[de].l(Fr);Fr.forEach(l),kt.forEach(l),ht=T(u),dt=i(u,"HR",{}),_t=T(u),ke=i(u,"DIV",{style:!0});var bt=c(ke);ae=i(bt,"TABLE",{id:!0,class:!0,style:!0});var Ge=c(ae);tt=i(Ge,"CAPTION",{});var Yr=c(tt);Ut=_(Yr,"Top Ranker"),Yr.forEach(l),Ot=T(Ge),ue=i(Ge,"THEAD",{});var Te=c(ue);rt=i(Te,"TH",{});var Xr=c(rt);Gt=_(Xr,"Rank"),Xr.forEach(l),Ft=T(Te),lt=i(Te,"TH",{});var Jr=c(lt);Yt=_(Jr,"Player"),Jr.forEach(l),Xt=T(Te),at=i(Te,"TH",{});var Qr=c(at);Jt=_(Qr,"Count"),Qr.forEach(l),Qt=T(Te),Ve=i(Te,"TH",{class:!0});var zr=c(Ve);zt=_(zr,"Percentage"),zr.forEach(l),Te.forEach(l),Wt=T(Ge),Ke=i(Ge,"TBODY",{});var Wr=c(Ke);for(let de=0;de<fe.length;de+=1)fe[de].l(Wr);Wr.forEach(l),Ge.forEach(l),Zt=T(bt),oe=i(bt,"TABLE",{id:!0,class:!0,style:!0});var Fe=c(oe);nt=i(Fe,"CAPTION",{});var Zr=c(nt);$t=_(Zr,"Top Version"),Zr.forEach(l),xt=T(Fe),ce=i(Fe,"THEAD",{});var we=c(ce);ot=i(we,"TH",{});var $r=c(ot);er=_($r,"Rank"),$r.forEach(l),tr=T(we),st=i(we,"TH",{});var xr=c(st);rr=_(xr,"Version"),xr.forEach(l),lr=T(we),it=i(we,"TH",{});var el=c(it);ar=_(el,"Count"),el.forEach(l),nr=T(we),Ue=i(we,"TH",{class:!0});var tl=c(Ue);or=_(tl,"Percentage"),tl.forEach(l),we.forEach(l),sr=T(Fe),Oe=i(Fe,"TBODY",{});var rl=c(Oe);for(let de=0;de<he.length;de+=1)he[de].l(rl);rl.forEach(l),Fe.forEach(l),bt.forEach(l),this.h()},h(){f(p,"href","https://github.com/rekidai-info/rekidai-info.github.io"),f(p,"target","_blank"),f(p,"rel","noopener noreferrer"),f(P,"href","https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json"),f(P,"target","_blank"),f(P,"rel","noopener noreferrer"),f(k,"href","https://forms.gle/wqrRh1ow6uaREy286"),f(k,"target","_blank"),f(k,"rel","noopener noreferrer"),f(M,"href","https://forms.gle/SDkmfUcTC5zLsGPD6"),f(M,"target","_blank"),f(M,"rel","noopener noreferrer"),f(D,"href","#rank"),f(V,"href","https://www.youtube.com/channel/UCKYQ3LNcSoxXJB6IlZiYU5A"),f(V,"target","_blank"),f(V,"rel","noopener noreferrer"),f($,"href","https://www.youtube.com/channel/UCoK-bEjP7R93N-rIz-4G9JA"),f($,"target","_blank"),f($,"rel","noopener noreferrer"),f(ne,"href","https://toon.at/donate/637741368394473819"),f(ne,"target","_blank"),f(ne,"rel","noopener noreferrer"),f(x,"href","https://www.youtube.com/c/MACAODIIDX"),f(x,"target","_blank"),f(x,"rel","noopener noreferrer"),f(ee,"href","https://streamlabs.com/macaodiidx"),f(ee,"target","_blank"),f(ee,"rel","noopener noreferrer"),f(te,"href","https://toon.at/donate/macaod_iidx"),f(te,"target","_blank"),f(te,"rel","noopener noreferrer"),f(re,"href","https://www.youtube.com/channel/UCGlQnUCwUI0kl31denBkrEQ"),f(re,"target","_blank"),f(re,"rel","noopener noreferrer"),f(le,"href","https://toon.at/donate/iidx_charm"),f(le,"target","_blank"),f(le,"rel","noopener noreferrer"),f(I,"href","https://twitter.com/rekidai_info"),f(I,"target","_blank"),f(I,"rel","noopener noreferrer"),f(E,"href","https://amzn.to/3jqk39S"),f(E,"target","_blank"),f(E,"rel","noopener noreferrer"),f(se,"type","text"),f(se,"id","search"),f(se,"placeholder","Search Rekidai in KR, EN or JP"),Y(se,"width","210px"),ye.async=!0,bl(ye.src,fr="table-sort.min.js")||f(ye,"src",fr),f(je,"class","data-sort"),f(j,"class","svelte-131xf4q"),f(pe,"id","rekidai"),f(pe,"class","table-sort table-arrows remember-sort svelte-131xf4q"),f(Ve,"class","data-sort"),f(ae,"id","rank"),f(ae,"class","table-sort table-arrows remember-sort svelte-131xf4q"),Y(ae,"float","left"),Y(ae,"margin-right","1em"),f(Ue,"class","data-sort"),f(oe,"id","version"),f(oe,"class","table-sort table-arrows remember-sort svelte-131xf4q"),Y(oe,"float","left"),Y(ke,"float","left")},m(u,h){L(u,e,h),r(e,t),r(t,n),r(e,a),r(e,o),r(e,p),r(p,b),r(e,g),r(e,P),r(P,C),r(e,R),r(e,w),r(e,H),r(e,k),r(k,m),r(e,A),r(e,M),r(M,q),r(e,G),r(e,N),r(e,D),r(D,W),r(e,X),r(e,V),r(V,Z),r(e,De),r(e,$),r($,me),r(e,be),r(e,ne),r(ne,_e),r(e,ve),r(e,x),r(x,Re),r(e,Ee),r(e,ee),r(ee,ge),r(e,He),r(e,te),r(te,J),r(e,Le),r(e,re),r(re,Q),r(e,Ne),r(e,le),r(le,z),r(e,K),r(e,I),r(I,U),r(e,F),r(e,E),r(E,qe),r(e,Ie),L(u,Ae,h),L(u,Me,h),L(u,Pe,h),L(u,se,h),L(u,Ce,h),L(u,Be,h),r(Be,Et),L(u,ft,h),L(u,ye,h),L(u,ct,h),L(u,pe,h),r(pe,Ye),r(Ye,j),r(j,Xe),r(Xe,gt),r(j,yt),r(j,Je),r(Je,Tt),r(j,wt),r(j,Qe),r(Qe,Dt),r(j,Rt),r(j,je),r(je,At),r(j,Mt),r(j,ze),r(ze,Pt),r(j,Ct),r(j,We),r(We,Ht),r(j,Lt),r(j,Ze),r(Ze,Nt),r(j,qt),r(j,$e),r($e,It),r(j,Bt),r(j,xe),r(xe,jt),r(j,St),r(j,et),r(et,Vt),r(pe,Kt),r(pe,Se);for(let S=0;S<ie.length;S+=1)ie[S].m(Se,null);L(u,ht,h),L(u,dt,h),L(u,_t,h),L(u,ke,h),r(ke,ae),r(ae,tt),r(tt,Ut),r(ae,Ot),r(ae,ue),r(ue,rt),r(rt,Gt),r(ue,Ft),r(ue,lt),r(lt,Yt),r(ue,Xt),r(ue,at),r(at,Jt),r(ue,Qt),r(ue,Ve),r(Ve,zt),r(ae,Wt),r(ae,Ke);for(let S=0;S<fe.length;S+=1)fe[S].m(Ke,null);r(ke,Zt),r(ke,oe),r(oe,nt),r(nt,$t),r(oe,xt),r(oe,ce),r(ce,ot),r(ot,er),r(ce,tr),r(ce,st),r(st,rr),r(ce,lr),r(ce,it),r(it,ar),r(ce,nr),r(ce,Ue),r(Ue,or),r(oe,sr),r(oe,Oe);for(let S=0;S<he.length;S+=1)he[S].m(Oe,null)},p(u,h){h&2&&(pt=u[1],ie=ir(ie,h,_r,1,u,pt,cr,Se,ur,hl,null,il)),h&8&&(mt=u[3],fe=ir(fe,h,pr,1,u,mt,hr,Ke,ur,dl,null,sl)),h&16&&(vt=u[4],he=ir(he,h,mr,1,u,vt,dr,Oe,ur,_l,null,ol))},i:ut,o:ut,d(u){u&&l(e),u&&l(Ae),u&&l(Me),u&&l(Pe),u&&l(se),u&&l(Ce),u&&l(Be),u&&l(ft),u&&l(ye),u&&l(ct),u&&l(pe);for(let h=0;h<ie.length;h+=1)ie[h].d();u&&l(ht),u&&l(dt),u&&l(_t),u&&l(ke);for(let h=0;h<fe.length;h+=1)fe[h].d();for(let h=0;h<he.length;h+=1)he[h].d()}}}function Cl(v){let e,t,n,a;return{c(){e=s("p"),t=d("Loading..."),this.h()},l(o){e=i(o,"P",{id:!0});var p=c(e);t=_(p,"Loading..."),p.forEach(l),this.h()},h(){f(e,"id","loading")},m(o,p){L(o,e,p),r(e,t),a=!0},p:ut,i(o){a||(Al(()=>{n||(n=nl(e,kl,{},!0)),n.run(1)}),a=!0)},o(o){n||(n=nl(e,kl,{},!1)),n.run(0),a=!1},d(o){o&&l(e),o&&n&&n.end()}}}function Hl(v){let e,t,n=v[18].music+"",a,o;return{c(){e=s("td"),t=s("a"),a=d(n),this.h()},l(p){e=i(p,"TD",{});var b=c(e);t=i(b,"A",{href:!0,target:!0,rel:!0});var g=c(t);a=_(g,n),g.forEach(l),b.forEach(l),this.h()},h(){f(t,"href",o=v[18].scoreResult),f(t,"target","_blank"),f(t,"rel","noopener noreferrer")},m(p,b){L(p,e,b),r(e,t),r(t,a)},p(p,b){b&2&&n!==(n=p[18].music+"")&&B(a,n),b&2&&o!==(o=p[18].scoreResult)&&f(t,"href",o)},d(p){p&&l(e)}}}function Ll(v){let e,t=v[18].music+"",n;return{c(){e=s("td"),n=d(t)},l(a){e=i(a,"TD",{});var o=c(e);n=_(o,t),o.forEach(l)},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].music+"")&&B(n,t)},d(a){a&&l(e)}}}function Nl(v){let e,t,n=v[18].notes+"",a,o;return{c(){e=s("td"),t=s("a"),a=d(n),this.h()},l(p){e=i(p,"TD",{style:!0});var b=c(e);t=i(b,"A",{href:!0,target:!0,rel:!0});var g=c(t);a=_(g,n),g.forEach(l),b.forEach(l),this.h()},h(){f(t,"href",o=v[18].textage),f(t,"target","_blank"),f(t,"rel","noopener noreferrer"),Y(e,"text-align","center")},m(p,b){L(p,e,b),r(e,t),r(t,a)},p(p,b){b&2&&n!==(n=p[18].notes+"")&&B(a,n),b&2&&o!==(o=p[18].textage)&&f(t,"href",o)},d(p){p&&l(e)}}}function ql(v){let e,t=v[18].notes+"",n;return{c(){e=s("td"),n=d(t),this.h()},l(a){e=i(a,"TD",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"text-align","center")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].notes+"")&&B(n,t)},d(a){a&&l(e)}}}function Il(v){let e,t,n=v[18].bpm.join("~")+"",a,o;return{c(){e=s("td"),t=s("a"),a=d(n),this.h()},l(p){e=i(p,"TD",{style:!0});var b=c(e);t=i(b,"A",{href:!0,target:!0,rel:!0});var g=c(t);a=_(g,n),g.forEach(l),b.forEach(l),this.h()},h(){f(t,"href",o=v[18].musicMovie),f(t,"target","_blank"),f(t,"rel","noopener noreferrer"),Y(e,"text-align","center")},m(p,b){L(p,e,b),r(e,t),r(t,a)},p(p,b){b&2&&n!==(n=p[18].bpm.join("~")+"")&&B(a,n),b&2&&o!==(o=p[18].musicMovie)&&f(t,"href",o)},d(p){p&&l(e)}}}function Bl(v){let e,t=v[18].bpm.join("~")+"",n;return{c(){e=s("td"),n=d(t),this.h()},l(a){e=i(a,"TD",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"text-align","center")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].bpm.join("~")+"")&&B(n,t)},d(a){a&&l(e)}}}function ul(v){let e,t=v[18].musicKR+"",n;return{c(){e=s("p"),n=d(t),this.h()},l(a){e=i(a,"P",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"display","none")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].musicKR+"")&&B(n,t)},d(a){a&&l(e)}}}function fl(v){let e,t=v[18].musicEN+"",n;return{c(){e=s("p"),n=d(t),this.h()},l(a){e=i(a,"P",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"display","none")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].musicEN+"")&&B(n,t)},d(a){a&&l(e)}}}function cl(v){let e,t=v[18].musicJP+"",n;return{c(){e=s("p"),n=d(t),this.h()},l(a){e=i(a,"P",{style:!0});var o=c(e);n=_(o,t),o.forEach(l),this.h()},h(){Y(e,"display","none")},m(a,o){L(a,e,o),r(e,n)},p(a,o){o&2&&t!==(t=a[18].musicJP+"")&&B(n,t)},d(a){a&&l(e)}}}function hl(v,e){let t,n,a,o=e[18].player+"",p,b,g,P=e[18].score+"",C,R,w,H=ml(e[18].notes,e[18].score)+"",k,m,A,M,q=pl(e[18].notes,e[18].score)+"",G,N,D,W,X,V=e[18].topVersion+"",Z,De,$,me=e[18].version+"",be,ne,_e,ve=e[18].date+"",x,Re,Ee,ee,ge;function He(F,E){return F[18].scoreResult==null?Ll:Hl}let te=He(e),J=te(e);function Le(F,E){return F[18].textage==null?ql:Nl}let re=Le(e),Q=re(e);function Ne(F,E){return F[18].musicMovie==null?Bl:Il}let le=Ne(e),z=le(e),K=e[18].musicKR!=null&&ul(e),I=e[18].musicEN!=null&&fl(e),U=e[18].musicJP!=null&&cl(e);return{key:v,first:null,c(){t=s("tr"),J.c(),n=y(),a=s("td"),p=d(o),b=y(),g=s("td"),C=d(P),R=y(),w=s("td"),k=d(H),A=y(),M=s("td"),G=d(q),N=y(),Q.c(),D=y(),z.c(),W=y(),X=s("td"),Z=d(V),De=y(),$=s("td"),be=d(me),ne=y(),_e=s("td"),x=d(ve),Re=y(),K&&K.c(),Ee=y(),I&&I.c(),ee=y(),U&&U.c(),ge=y(),this.h()},l(F){t=i(F,"TR",{class:!0});var E=c(t);J.l(E),n=T(E),a=i(E,"TD",{});var qe=c(a);p=_(qe,o),qe.forEach(l),b=T(E),g=i(E,"TD",{style:!0});var Ie=c(g);C=_(Ie,P),Ie.forEach(l),R=T(E),w=i(E,"TD",{style:!0,"data-sort":!0});var Ae=c(w);k=_(Ae,H),Ae.forEach(l),A=T(E),M=i(E,"TD",{style:!0});var Me=c(M);G=_(Me,q),Me.forEach(l),N=T(E),Q.l(E),D=T(E),z.l(E),W=T(E),X=i(E,"TD",{});var Pe=c(X);Z=_(Pe,V),Pe.forEach(l),De=T(E),$=i(E,"TD",{});var se=c($);be=_(se,me),se.forEach(l),ne=T(E),_e=i(E,"TD",{style:!0});var Ce=c(_e);x=_(Ce,ve),Ce.forEach(l),Re=T(E),K&&K.l(E),Ee=T(E),I&&I.l(E),ee=T(E),U&&U.l(E),ge=T(E),E.forEach(l),this.h()},h(){Y(g,"text-align","center"),Y(w,"text-align","center"),f(w,"data-sort",m=vl(e[18].notes,e[18].score)),Y(M,"text-align","center"),Y(_e,"text-align","center"),f(t,"class","svelte-131xf4q"),this.first=t},m(F,E){L(F,t,E),J.m(t,null),r(t,n),r(t,a),r(a,p),r(t,b),r(t,g),r(g,C),r(t,R),r(t,w),r(w,k),r(t,A),r(t,M),r(M,G),r(t,N),Q.m(t,null),r(t,D),z.m(t,null),r(t,W),r(t,X),r(X,Z),r(t,De),r(t,$),r($,be),r(t,ne),r(t,_e),r(_e,x),r(t,Re),K&&K.m(t,null),r(t,Ee),I&&I.m(t,null),r(t,ee),U&&U.m(t,null),r(t,ge)},p(F,E){e=F,te===(te=He(e))&&J?J.p(e,E):(J.d(1),J=te(e),J&&(J.c(),J.m(t,n))),E&2&&o!==(o=e[18].player+"")&&B(p,o),E&2&&P!==(P=e[18].score+"")&&B(C,P),E&2&&H!==(H=ml(e[18].notes,e[18].score)+"")&&B(k,H),E&2&&m!==(m=vl(e[18].notes,e[18].score))&&f(w,"data-sort",m),E&2&&q!==(q=pl(e[18].notes,e[18].score)+"")&&B(G,q),re===(re=Le(e))&&Q?Q.p(e,E):(Q.d(1),Q=re(e),Q&&(Q.c(),Q.m(t,D))),le===(le=Ne(e))&&z?z.p(e,E):(z.d(1),z=le(e),z&&(z.c(),z.m(t,W))),E&2&&V!==(V=e[18].topVersion+"")&&B(Z,V),E&2&&me!==(me=e[18].version+"")&&B(be,me),E&2&&ve!==(ve=e[18].date+"")&&B(x,ve),e[18].musicKR!=null?K?K.p(e,E):(K=ul(e),K.c(),K.m(t,Ee)):K&&(K.d(1),K=null),e[18].musicEN!=null?I?I.p(e,E):(I=fl(e),I.c(),I.m(t,ee)):I&&(I.d(1),I=null),e[18].musicJP!=null?U?U.p(e,E):(U=cl(e),U.c(),U.m(t,ge)):U&&(U.d(1),U=null)},d(F){F&&l(t),J.d(),Q.d(),z.d(),K&&K.d(),I&&I.d(),U&&U.d()}}}function dl(v,e){let t,n,a=e[15].rank+"",o,p,b,g=e[15].player+"",P,C,R,w=e[15].counts+"",H,k,m,A=Number(e[15].percentage).toFixed(2)+"%",M,q,G;return{key:v,first:null,c(){t=s("tr"),n=s("td"),o=d(a),p=y(),b=s("td"),P=d(g),C=y(),R=s("td"),H=d(w),k=y(),m=s("td"),M=d(A),G=y(),this.h()},l(N){t=i(N,"TR",{class:!0});var D=c(t);n=i(D,"TD",{});var W=c(n);o=_(W,a),W.forEach(l),p=T(D),b=i(D,"TD",{});var X=c(b);P=_(X,g),X.forEach(l),C=T(D),R=i(D,"TD",{});var V=c(R);H=_(V,w),V.forEach(l),k=T(D),m=i(D,"TD",{"data-sort":!0});var Z=c(m);M=_(Z,A),Z.forEach(l),G=T(D),D.forEach(l),this.h()},h(){f(m,"data-sort",q=e[15].percentage),f(t,"class","svelte-131xf4q"),this.first=t},m(N,D){L(N,t,D),r(t,n),r(n,o),r(t,p),r(t,b),r(b,P),r(t,C),r(t,R),r(R,H),r(t,k),r(t,m),r(m,M),r(t,G)},p(N,D){e=N,D&8&&a!==(a=e[15].rank+"")&&B(o,a),D&8&&g!==(g=e[15].player+"")&&B(P,g),D&8&&w!==(w=e[15].counts+"")&&B(H,w),D&8&&A!==(A=Number(e[15].percentage).toFixed(2)+"%")&&B(M,A),D&8&&q!==(q=e[15].percentage)&&f(m,"data-sort",q)},d(N){N&&l(t)}}}function _l(v,e){let t,n,a=e[12].rank+"",o,p,b,g=e[12].version+"",P,C,R,w=e[12].counts+"",H,k,m,A=Number(e[12].percentage).toFixed(2)+"%",M,q,G;return{key:v,first:null,c(){t=s("tr"),n=s("td"),o=d(a),p=y(),b=s("td"),P=d(g),C=y(),R=s("td"),H=d(w),k=y(),m=s("td"),M=d(A),G=y(),this.h()},l(N){t=i(N,"TR",{class:!0});var D=c(t);n=i(D,"TD",{});var W=c(n);o=_(W,a),W.forEach(l),p=T(D),b=i(D,"TD",{});var X=c(b);P=_(X,g),X.forEach(l),C=T(D),R=i(D,"TD",{});var V=c(R);H=_(V,w),V.forEach(l),k=T(D),m=i(D,"TD",{"data-sort":!0});var Z=c(m);M=_(Z,A),Z.forEach(l),G=T(D),D.forEach(l),this.h()},h(){f(m,"data-sort",q=e[12].percentage),f(t,"class","svelte-131xf4q"),this.first=t},m(N,D){L(N,t,D),r(t,n),r(n,o),r(t,p),r(t,b),r(b,P),r(t,C),r(t,R),r(R,H),r(t,k),r(t,m),r(m,M),r(t,G)},p(N,D){e=N,D&16&&a!==(a=e[12].rank+"")&&B(o,a),D&16&&g!==(g=e[12].version+"")&&B(P,g),D&16&&w!==(w=e[12].counts+"")&&B(H,w),D&16&&A!==(A=Number(e[12].percentage).toFixed(2)+"%")&&B(M,A),D&16&&q!==(q=e[12].percentage)&&f(m,"data-sort",q)},d(N){N&&l(t)}}}function jl(v){let e,t,n,a,o,p,b,g,P,C,R,w;const H=[Cl,Pl,Ml],k=[];function m(A,M){return A[0]?A[2]==null?1:2:0}return C=m(v),R=k[C]=H[C](v),{c(){e=s("html"),t=s("meta"),n=s("meta"),a=s("script"),p=s("script"),b=d(`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),g=y(),P=s("main"),R.c(),this.h()},l(A){const M=wl('[data-svelte="svelte-wh35mz"]',document.head);e=i(M,"HTML",{lang:!0}),c(e).forEach(l),t=i(M,"META",{name:!0,content:!0}),n=i(M,"META",{name:!0,content:!0}),a=i(M,"SCRIPT",{src:!0});var q=c(a);q.forEach(l),p=i(M,"SCRIPT",{});var G=c(p);b=_(G,`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),G.forEach(l),M.forEach(l),g=T(A),P=i(A,"MAIN",{class:!0});var N=c(P);R.l(N),N.forEach(l),this.h()},h(){f(e,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",f(t,"name","keywords"),f(t,"content","\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai"),f(n,"name","google-site-verification"),f(n,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),a.async=!0,bl(a.src,o="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||f(a,"src",o),f(P,"class","svelte-131xf4q")},m(A,M){r(document.head,e),r(document.head,t),r(document.head,n),r(document.head,a),r(document.head,p),r(p,b),L(A,g,M),L(A,P,M),k[C].m(P,null),w=!0},p(A,[M]){let q=C;C=m(A),C===q?k[C].p(A,M):(Rl(),ll(k[q],1,1,()=>{k[q]=null}),Dl(),R=k[C],R?R.p(A,M):(R=k[C]=H[C](A),R.c()),al(R,1),R.m(P,null))},i(A){w||(al(R),w=!0)},o(A){ll(R),w=!1},d(A){l(e),l(t),l(n),l(a),l(p),A&&l(g),A&&l(P),k[C].d()}}}async function Sl(){const v=await fetch("rekidai.min.json",{method:"GET",mode:"same-origin",cache:"no-cache",credentials:"same-origin"}),e=await v.json();if(v.ok)return e;throw new Error("Error Loading Rekidai Data.")}function pl(v,e){const t=v*2;return e>=t?"100%":Number(e/t*100).toFixed(2)+"%"}function ml(v,e){const t=v*2;if(e>=t)return"MAX";const n=Math.ceil(t*17/18),a=Math.ceil(t*8/9),o=Math.ceil(t*15/18),p=Math.ceil(t*7/9),b=Math.ceil(t*13/18),g=Math.ceil(t*6/9),P=Math.ceil(t*11/18),C=Math.ceil(t*5/9),R=Math.ceil(t*9/18),w=Math.ceil(t*4/9),H=Math.ceil(t*7/18),k=Math.ceil(t*3/9),m=Math.ceil(t*5/18),A=Math.ceil(t*2/9),M=Math.ceil(t*3/18);return e>=n?"MAX-"+(t-e):e>=a?"AAA+"+(e-a):e>=o?"AAA-"+(a-e):e>=p?"AA+"+(e-p):e>=b?"AA-"+(p-e):e>=g?"A+"+(e-g):e>=P?"A-"+(g-e):e>=C?"B+"+(e-C):e>=R?"B-"+(C-e):e>=w?"C+"+(e-w):e>=H?"C-"+(w-e):e>=k?"D+"+(e-k):e>=m?"D-"+(k-e):e>=A?"E+"+(e-A):e>=M?"E-"+(A-e):"F"}function vl(v,e){return v*2-e}function kl(v,{speed:e=50}){const t="Loading...";return{duration:1e3*t.length/e,tick:a=>{const o=Math.min(Math.trunc(t.length*a)%(t.length+1),t.length);v.textContent=t.slice(0,o)}}}function Vl(v,e,t){let n=!1,a=Sl(),o=[],p=null,b={},g=[],P=[],C=[],R={},w=[];return a.then(H=>{H.reduce((k,m)=>(b[m.player]==null?b[m.player]=1:++b[m.player],b),{}),H.reduce((k,m)=>(R[m.topVersion]==null?R[m.topVersion]=1:++R[m.topVersion],R),{}),Object.keys(b).forEach(k=>{g.push({player:k,counts:b[k],percentage:100*b[k]/H.length})}),Object.keys(R).forEach(k=>{w.push({version:k,counts:R[k],percentage:100*R[k]/H.length})}),g.sort((k,m)=>k.counts==m.counts?k.player==m.player?0:k.player<m.player?-1:1:k.counts<m.counts?1:-1),w.sort((k,m)=>k.counts==m.counts?k.version==m.version?0:k.version<m.version?-1:1:k.counts<m.counts?1:-1),g.forEach((k,m)=>{P.push(k.player),C.push(k.counts),m<=0?t(3,g[m].rank=1,g):g[m-1].counts==g[m].counts?t(3,g[m].rank=g[m-1].rank,g):t(3,g[m].rank=g[m-1].rank+1,g)}),w.forEach((k,m)=>{m<=0?t(4,w[m].rank=1,w):w[m-1].counts==w[m].counts?t(4,w[m].rank=w[m-1].rank,w):t(4,w[m].rank=w[m-1].rank+1,w)}),t(0,n=!0),t(1,o=H),t(2,p=null)}).catch(H=>{t(0,n=!0),t(1,o=[]),t(2,p=H)}),[n,o,p,g,w]}class Ul extends gl{constructor(e){super(),yl(this,e,Vl,jl,Tl,{})}}export{Ul as default};
