import{r as u,o as r,c as i,a as m,u as n,i as v,b as f,d as t,w as _,e as l,v as d,f as y,F as g,g as x,L as w,t as b}from"./index-083ebdb1.js";import{u as h}from"./useGrades-cfcfbbbc.js";const V={class:"min-h-screen"},U={class:"grid h-screen place-items-center"},k={class:"flex flex-col"},L=t("div",{class:"text-lg font-bold tracking-wide text-center mb-2"},"donut",-1),N=t("option",{disabled:"",selected:"",value:null},"Selecciona un año",-1),S=["value"],B=t("button",{class:"btn-primary w-full",type:"submit"},"Entrar",-1),F=t("p",{class:"text-center mt-4 text-slate-500",style:{"font-size":"0.7rem"}}," Copyrigth 2023 ",-1),G={__name:"Home",setup(M){const{getGrades:p,isLoading:o}=h(),a=u({id:"16-01275-0",password:"FIPHU1",year:null}),c=[2022,2021,2020,2019,2018,2017,2016];return(C,s)=>(r(),i("div",V,[m(n(w),{active:n(o),"onUpdate:active":s[0]||(s[0]=e=>v(o)?o.value=e:null),"is-full-page":!0},null,8,["active"]),f(" a "),t("div",U,[t("div",k,[L,t("form",{onSubmit:s[4]||(s[4]=_(e=>n(p)(a),["prevent"])),class:"w-48"},[l(t("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>a.id=e),class:"input-primary",placeholder:"Carnet"},null,512),[[d,a.id]]),l(t("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>a.password=e),class:"input-primary",placeholder:"PIN"},null,512),[[d,a.password]]),l(t("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>a.year=e),class:"select-primary appearance-none"},[N,(r(),i(g,null,x(c,e=>t("option",{value:e,key:e},b(e),9,S)),64))],512),[[y,a.year]]),B],32),F])])]))}};export{G as default};