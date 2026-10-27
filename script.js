document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
const chips=[...document.querySelectorAll('.chip')], products=[...document.querySelectorAll('.product')];
function filterProducts(category){chips.forEach(c=>c.classList.toggle('active',c.dataset.filter===category));products.forEach(p=>p.hidden=!(category==='all'||p.dataset.category===category));}
chips.forEach(chip=>chip.addEventListener('click',()=>filterProducts(chip.dataset.filter)));
document.getElementById('finderForm')?.addEventListener('submit',e=>{
 e.preventDefault();const q=document.getElementById('need').value.trim();if(!q)return;
 let category='all';
 if(/home|storage|organ|decor|kitchen|closet|plant|bath|laundry/i.test(q))category='home';
 else if(/tech|phone|charger|headphone|computer|gadget|cable|desk/i.test(q))category='tech';
 else if(/beauty|skin|makeup|self.?care|bath|hair/i.test(q))category='beauty';
 else if(/gift|birthday|toy|fun|holiday|present/i.test(q))category='gifts';
 else if(/budget|cheap|basic|household|essential|tool/i.test(q))category='budget';
 filterProducts(category);
 const msg=document.getElementById('resultMsg');msg.hidden=false;
 msg.textContent='Showing '+(category==='all'?'all categories':category.replace(/^./,s=>s.toUpperCase())+' ideas')+' for “'+q+'”. This is a keyword-based demo, not a connected AI model. Always compare sellers, shipping, and return policies before buying.';
 msg.scrollIntoView({behavior:'smooth',block:'nearest'});
});
