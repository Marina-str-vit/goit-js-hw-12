import{a as w,i as l,S}from"./assets/vendor-BDaiwwc1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",v="47392107-146a4706033000661fe0e92fb";async function A(t,o=1){try{return(await w.get(`https://pixabay.com/api/?key=${v}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`)).data}catch{l.error({title:"Error",message:"Error while receiving images!",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),document.querySelector("input").value=""}}function L(){const t=document.createElement("form");t.classList.add("search-form");const o=document.createElement("input");o.classList.add("search-input"),o.type="text",o.id="search-input",o.placeholder="Search images...";const r=document.createElement("button");return r.classList.add("search-button"),r.type="submit",r.textContent="Search",t.appendChild(o),t.appendChild(r),t}function C(t){return t.map(o=>{const r=document.createElement("a");r.href=o.largeImageURL,r.classList.add("image-card");const a=document.createElement("img");a.src=o.webformatURL,a.alt=o.tags,r.appendChild(a);const e=document.createElement("div");e.classList.add("info");const n=document.createElement("p");n.textContent=`Likes ${o.likes}`,e.appendChild(n);const c=document.createElement("p");c.textContent=`Views ${o.views}`,e.appendChild(c);const g=document.createElement("p");g.textContent=`Comments ${o.comments}`,e.appendChild(g);const f=document.createElement("p");return f.textContent=`Downloads ${o.downloads}`,e.appendChild(f),r.appendChild(e),r})}function B(){const t=document.createElement("button");return t.classList.add("search-button"),t.textContent="Load more",t.style.display="none",t}function x(){const t=document.createElement("span");return t.classList.add("loader"),t}const p=document.querySelector("main"),E=L();p.appendChild(E);const m=document.createElement("div");m.classList.add("gallery");p.appendChild(m);const s=B();p.appendChild(s);s.style.display="none";const i=x();p.appendChild(i);i.style.display="none";s.addEventListener("click",q);const h=new S(".gallery a",{captions:!0});let u=1,b="";const y=15;E.addEventListener("submit",async t=>{t.preventDefault(),i.style.display="block",s.style.display="none";const o=document.querySelector("#search-input").value.trim();if(o===""){i.style.display="none",l.error({title:"Error",titleColor:"white",message:"Please enter your search query!",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3});return}u=1,m.innerHTML="",b=o;try{const r=await A(o,u);s.style.display="block",C(r.hits).forEach(n=>{m.appendChild(n),h.refresh()});const e=document.querySelector(".loader");if(r.hits.length<y&&(s.style.display="none"),r.hits.length===0&&(l.error({title:"No results",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),i.style.display="none",document.querySelector("#search-input").value=""),e&&(e.remove(),s.style.display="none",i.style.display="none",document.querySelector("#search-input").value="",h.refresh()),r.totalHits<=u*y&&r.totalHits>0){l.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),s.style.display="none",document.querySelector("#search-input").value="";return}r.hits.length>0&&(s.style.display="block",i.style.display="none")}catch(r){l.error({message:r.message}),s.style.display="none"}finally{document.querySelector("#search-input").value=""}});async function q(){i.style.display="block",s.style.display="block",u+=1;try{const t=await A(b,u);C(t.hits).forEach(e=>{m.appendChild(e)});const a=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({left:0,top:a*.9,behavior:"smooth"}),h.refresh(),i.style.display="none",t.hits.length<y&&(l.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),s.style.display="none")}catch(t){l.error({message:t.message}),s.style.display="none"}}
//# sourceMappingURL=index.js.map
