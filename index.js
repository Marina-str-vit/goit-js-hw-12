import{a as w,i as u,S}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",L="47392107-146a4706033000661fe0e92fb";async function A(o,t=1){try{return(await w.get(`https://pixabay.com/api/?key=${L}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`)).data}catch{u.error({title:"Error",message:"Error while receiving images!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),document.querySelector("input").value=""}}function v(){const o=document.createElement("form");o.classList.add("search-form");const t=document.createElement("input");t.classList.add("search-input"),t.type="text",t.id="search-input",t.placeholder="Search images...";const r=document.createElement("button");return r.classList.add("search-button"),r.type="submit",r.textContent="Search",o.appendChild(t),o.appendChild(r),o}function C(o){return o.map(t=>{const r=document.createElement("a");r.href=t.largeImageURL,r.classList.add("image-card");const a=document.createElement("img");a.src=t.webformatURL,a.alt=t.tags,r.appendChild(a);const e=document.createElement("div");e.classList.add("info");const n=document.createElement("p");n.textContent=`Likes ${t.likes}`,e.appendChild(n);const l=document.createElement("p");l.textContent=`Views ${t.views}`,e.appendChild(l);const y=document.createElement("p");y.textContent=`Comments ${t.comments}`,e.appendChild(y);const f=document.createElement("p");return f.textContent=`Downloads ${t.downloads}`,e.appendChild(f),r.appendChild(e),r})}function B(){const o=document.createElement("button");return o.classList.add("search-button"),o.textContent="Load more",o.disabled=!0,o}function x(){const o=document.createElement("span");return o.classList.add("loader"),o}const p=document.querySelector("main"),E=v();p.appendChild(E);const c=document.createElement("div");c.classList.add("gallery");p.appendChild(c);const s=B();p.appendChild(s);s.style.display="none";const i=x();p.appendChild(i);i.style.display="none";const h=new S(".gallery a",{captions:!0});let d=1,b="";const g=15;E.addEventListener("submit",async o=>{o.preventDefault(),i.style.display="block";const t=document.querySelector("#search-input").value.trim();if(t===""){i.style.display="none",u.error({title:"Error",titleColor:"white",message:"Please enter your search query!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3});return}d=1,c.innerHTML="",s.style.display="none",s.disabled=!0,b=t;const r=await A(t,d);C(r.hits).forEach(n=>{c.appendChild(n),h.refresh()});const e=document.querySelector(".loader");if(r.hits.length===0&&(u.error({title:"No results",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:3e3}),s.style.display="none",i.style.display="none"),e)e.remove();else{if(r.totalHits<=d*g){u.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",messageColor:"white",timeout:5e3}),s.style.display="none",i.style.display="none",document.querySelector("#search-input").value="",h.refresh();return}s.disabled=r.hits.length<g,r.hits.length>0&&(s.style.display="block",i.style.display="none")}document.querySelector("#search-input").value=""});s.addEventListener("click",async()=>{i.style.display="block",d+=1;const o=await A(b,d);C(o.hits).forEach(e=>{c.appendChild(e)});const a=c.children[0].getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),h.refresh(),i.style.display="none",s.disabled=o.hits.length<g});
//# sourceMappingURL=index.js.map
