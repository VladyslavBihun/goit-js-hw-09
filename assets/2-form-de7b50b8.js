const e=document.querySelector(".feedback-form"),o=e.querySelector("input"),s=e.querySelector("textarea"),t="feedback-form-state";e.addEventListener("input",m);function m(a){const r=o.value.trim(),n=s.value.trim(),l={email:r,message:n};localStorage.setItem(t,JSON.stringify(l))}const i=localStorage.getItem(t),c=JSON.parse(i)||{},{email:u,message:d}=c;o.value=u??"";s.value=d??"";e.addEventListener("submit",f);function f(a){a.preventDefault(),console.log(c),localStorage.removeItem(t),e.reset()}
//# sourceMappingURL=2-form-de7b50b8.js.map