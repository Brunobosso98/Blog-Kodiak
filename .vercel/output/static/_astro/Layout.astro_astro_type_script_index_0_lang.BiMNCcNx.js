document.getElementById("search-form");const h=document.getElementById("search-input"),l=document.getElementById("search-results");let p;h?.addEventListener("input",n=>{const o=n.target;if(clearTimeout(p),o.value.trim()===""){l&&l.classList.add("hidden");return}p=setTimeout(async()=>{try{const t=await(await fetch(`/api/search?q=${encodeURIComponent(o.value)}`)).json();t.success&&l&&(l.innerHTML=t.results.length>0?t.results.map(s=>`
                <a href="/posts/${s.slug}" class="block p-4 hover:bg-gray-50 rounded-lg">
                  <h4 class="font-semibold text-gray-900">${s.title}</h4>
                  <p class="text-sm text-gray-600 mt-1">${s.excerpt}</p>
                  <span class="text-xs text-blue-600 mt-2 block">${s.category} • ${s.date}</span>
                </a>
              `).join(""):'<p class="text-gray-500 text-center p-4">Nenhum resultado encontrado</p>',l.classList.remove("hidden"))}catch(e){console.error("Search error:",e)}},300)});const g=localStorage.getItem("user"),d=g?JSON.parse(g).id:"";document.querySelectorAll(".like-button").forEach(n=>{const o=n,e=o.dataset.slug;if(!e){console.error("⚠️ postSlug não encontrado para um dos botões!");return}console.log(`📌 postSlug encontrado: ${e}`);const t=async()=>{try{console.log("🔄 Buscando status do like...");const r=await(await fetch(`/api/likes?postSlug=${e}&userId=${d}`)).json();if(r.success){console.log("✅ Resposta da API:",r);const a=o.querySelector(".like-count");a&&(a.textContent=r.likesCount.toString()),o.classList.toggle("text-red-500",r.isLiked)}}catch(s){console.error("❌ Erro ao obter status do like:",s)}};o.addEventListener("click",async s=>{if(s.preventDefault(),!d){b(o,e);return}try{const a=await(await fetch("/api/likes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:d,postSlug:e})})).json();if(a.success){const i=n.querySelector(".like-count");i&&(i.textContent=a.likesCount.toString()),n.classList.toggle("text-red-500")}else throw new Error(a.message)}catch(r){console.error("Erro ao processar like:",r),alert("Erro ao processar sua curtida. Tente novamente.")}}),t()});function b(n,o){const e=document.createElement("div");e.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",e.innerHTML=`
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 class="text-xl font-semibold mb-4">Login para curtir</h3>
      <form id="login-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Nome completo</label>
          <input type="text" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
        </div>
        <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Entrar
        </button>
      </form>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("#login-form");t.addEventListener("submit",async s=>{s.preventDefault();const r=new FormData(t);try{console.log("📩 Enviando requisição de login...");const i=await(await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.get("name"),email:r.get("email")})})).json();console.log("✅ Resposta da API após login:",i),i.success?(localStorage.setItem("user",JSON.stringify(i.user)),e.remove(),await y(n,o),setTimeout(()=>{location.reload()},100)):alert("Erro ao fazer login. Tente novamente.")}catch(a){console.error("❌ Erro ao fazer login:",a),alert("Erro ao autenticar usuário.")}}),e.addEventListener("click",s=>{s.target===e&&e.remove()})}async function y(n,o){try{const e=localStorage.getItem("user"),t=e?JSON.parse(e).id:"";if(!t)return;console.log("📩 Enviando like automaticamente...");const r=await(await fetch("/api/likes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t,postSlug:o})})).json();console.log("✅ Resposta da API após like automático:",r)}catch(e){console.error("❌ Erro ao curtir automaticamente:",e)}}const u=document.querySelector(".fa-share-alt");if(u){const n=window.location.href,o=document.title;u.parentElement?.addEventListener("click",e=>{if(e.preventDefault(),navigator.share)navigator.share({title:o,url:n});else{const t=document.createElement("div");t.className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50",t.innerHTML=`
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            <i class="fab fa-facebook mr-2"></i> Facebook
          </a>
          <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(n)}&text=${encodeURIComponent(o)}" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            <i class="fab fa-twitter mr-2"></i> Twitter
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(n)}&title=${encodeURIComponent(o)}" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            <i class="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(o+" "+n)}" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            <i class="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
          <button class="block w-full text-left px-4 py-2 hover:bg-gray-100" onclick="navigator.clipboard.writeText('${n}'); alert('Link copiado!')">
            <i class="fas fa-link mr-2"></i> Copiar Link
          </button>
        `;const s=u.getBoundingClientRect();t.style.position="fixed",t.style.top=s.bottom+"px",t.style.right=window.innerWidth-s.right+"px",document.body.appendChild(t);const r=a=>{t.contains(a.target)||(t.remove(),document.removeEventListener("click",r))};setTimeout(()=>{document.addEventListener("click",r)},0)}})}const f=document.getElementById("newsletter-form"),m=document.getElementById("newsletter-email"),c=document.getElementById("newsletter-message");f&&m&&c&&f.addEventListener("submit",async n=>{n.preventDefault();const o=m.value.trim();if(!o){c.textContent="Por favor, insira um e-mail válido.",c.classList.add("text-red-600");return}try{const t=await(await fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})})).json();c.textContent=t.message,t.success?(c.classList.add("text-green-600"),m.value=""):c.classList.add("text-red-600")}catch(e){console.error("Erro ao se inscrever na newsletter:",e),c.textContent="Erro ao processar inscrição.",c.classList.add("text-red-600")}});
