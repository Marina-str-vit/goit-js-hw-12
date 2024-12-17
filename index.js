import{a as S,i as c,S as w}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",L="47392107-146a4706033000661fe0e92fb";async function A(t,r=1){try{return(await S.get(`https://pixabay.com/api/?key=${L}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`)).data}catch{c.error({title:"Error",message:"Error while receiving images!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),document.querySelector("input").value=""}}function v(){const t=document.createElement("form");t.classList.add("search-form");const r=document.createElement("input");r.classList.add("search-input"),r.type="text",r.id="search-input",r.placeholder="Search images...";const o=document.createElement("button");return o.classList.add("search-button"),o.type="submit",o.textContent="Search",t.appendChild(r),t.appendChild(o),t}function C(t){return t.map(r=>{const o=document.createElement("a");o.href=r.largeImageURL,o.classList.add("image-card");const a=document.createElement("img");a.src=r.webformatURL,a.alt=r.tags,o.appendChild(a);const e=document.createElement("div");e.classList.add("info");const n=document.createElement("p");n.textContent=`Likes ${r.likes}`,e.appendChild(n);const l=document.createElement("p");l.textContent=`Views ${r.views}`,e.appendChild(l);const g=document.createElement("p");g.textContent=`Comments ${r.comments}`,e.appendChild(g);const f=document.createElement("p");return f.textContent=`Downloads ${r.downloads}`,e.appendChild(f),o.appendChild(e),o})}function B(){const t=document.createElement("button");return t.classList.add("search-button"),t.textContent="Load more",t.disabled=!0,t.style.display="none",t}function x(){const t=document.createElement("span");return t.classList.add("loader"),t}const p=document.querySelector("main"),E=v();p.appendChild(E);const u=document.createElement("div");u.classList.add("gallery");p.appendChild(u);const s=B();p.appendChild(s);s.style.display="none";const i=x();p.appendChild(i);i.style.display="none";s.addEventListener("click",q);const h=new w(".gallery a",{captions:!0});let d=1,b="";const y=15;E.addEventListener("submit",async t=>{t.preventDefault(),i.style.display="block";const r=document.querySelector("#search-input").value.trim();if(r===""){i.style.display="none",s.style.display="none",c.error({title:"Error",titleColor:"white",message:"Please enter your search query!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3});return}d=1,u.innerHTML="",s.style.display="block",s.disabled=!0,b=r;try{const o=await A(r,d);C(o.hits).forEach(n=>{u.appendChild(n),h.refresh()});const e=document.querySelector(".loader");if(o.hits.length===0&&(c.error({title:"No results",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),s.style.display="none",i.style.display="none",document.querySelector("#search-input").value=""),e&&(e.remove(),s.style.display="none",i.style.display="none",document.querySelector("#search-input").value="",h.refresh()),o.totalHits<=d*y&&o.totalHits>0){c.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),s.style.display="none",document.querySelector("#search-input").value="";return}s.disabled=o.hits.length<y,o.hits.length>0&&(s.style.display="block",i.style.display="none")}catch(o){c.error({message:o.message})}finally{document.querySelector("#search-input").value=""}});async function q(){i.style.display="block",s.style.display="block",d+=1;try{const t=await A(b,d);C(t.hits).forEach(e=>{u.appendChild(e)});const a=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({left:0,top:a*.9,behavior:"smooth"}),h.refresh(),i.style.display="none",s.disabled=t.hits.length<y}catch(t){c.error({message:t.message})}}
//# sourceMappingURL=index.js.map