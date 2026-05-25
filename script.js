const themeBtn=document.getElementById('themeToggle');
const html=document.documentElement;
let dark=true;
themeBtn.addEventListener('click',()=>{
  dark=!dark;
  html.dataset.theme=dark?'dark':'light';
  themeBtn.textContent=dark?'🌙':'☀️';
});

const burger=document.getElementById('hamburger');
const mob=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>{
  mob.classList.toggle('open');
  burger.textContent=mob.classList.contains('open')?'✕':'☰';
});
function cm(){mob.classList.remove('open');burger.textContent='☰';}

const fadeEls=document.querySelectorAll('.fade-up');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});
fadeEls.forEach(el=>obs.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t)t.scrollIntoView({behavior:'smooth'});
  });
});

// function sendForm(){
//   const n=document.getElementById('fn').value.trim();
//   const em=document.getElementById('fe').value.trim();
//   if(!n||!em){alert('Please enter your name and email.');return;}
//   document.getElementById('fc').style.display='block';
//   ['fn','fe','fs','fm'].forEach(id=>document.getElementById(id).value='');
// }

function sendForm() {

  const n = document.getElementById('fn').value.trim();
  const em = document.getElementById('fe').value.trim();
  const sub = document.getElementById('fs').value.trim();
  const msg = document.getElementById('fm').value.trim();

  if (!n || !em) {
    alert('Please enter your name and email.');
    return;
  }

  const params = {
      name: n,
      email: em,
      title: sub,
      message: msg,
      to_email: 'anushruthii@gmail.com',
      reply_to: em
    };
    console.log(em)
    console.log(n);
    
  emailjs.send(
    "service_0d3gm9v",
    "template_wibxycb",
    params
  )
  .then(function () {

    document.getElementById('fc').style.display = 'block';

    ['fn', 'fe', 'fs', 'fm'].forEach(id =>
      document.getElementById(id).value = ''
    );

  })
  .catch(function (error) {

    alert('Failed to send message.');
    console.log(error);

  });
}