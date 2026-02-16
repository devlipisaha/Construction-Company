
/* Nav scroll */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>60),{passive:true});

/* Mobile menu */
function tm(){const h=document.getElementById('ham'),m=document.getElementById('mob');h.classList.toggle('open');m.classList.toggle('open')}
function cm(){document.getElementById('ham').classList.remove('open');document.getElementById('mob').classList.remove('open')}

/* Scroll reveal */
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* Animated counters */
const co=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target,t=+el.dataset.count,s=el.dataset.suf||'';
    let st=null;
    (function tick(ts){if(!st)st=ts;const p=Math.min((ts-st)/1800,1),ez=1-Math.pow(1-p,3);el.textContent=Math.round(ez*t)+s;if(p<1)requestAnimationFrame(tick)})(performance.now());
    co.unobserve(el);
  });
},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

/* Scroll to top */
const stb=document.getElementById('stb');
window.addEventListener('scroll',()=>stb.classList.toggle('show',scrollY>500),{passive:true});
stb.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Contact form */
document.getElementById('cf').addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.target.querySelector('button[type="submit"]');
  btn.textContent='Sending…';btn.disabled=true;
  setTimeout(()=>{
    btn.textContent='✓ Message Sent!';btn.style.background='#2a9d5c';
    e.target.reset();
    setTimeout(()=>{btn.textContent='Send Message';btn.style.background='';btn.disabled=false;},3500);
  },1400);
});
