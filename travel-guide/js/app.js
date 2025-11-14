
(function(){
  const w = document.getElementById('welcome');
  const inLink = document.getElementById('signin-link');
  const outLink = document.getElementById('signout-link');
  const user = localStorage.getItem('wl_user');
  if (w){
    if (user){
      w.textContent = 'Hi, ' + user;
      if (inLink) inLink.style.display = 'none';
      if (outLink) outLink.style.display = 'inline-flex';
    } else {
      w.textContent = 'Guest';
      if (inLink) inLink.style.display = 'inline-flex';
      if (outLink) outLink.style.display = 'none';
    }
  }
  const form = document.querySelector('form[data-auth="signin"]');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = (form.querySelector('input[name="name"]').value || '').trim();
      const email = (form.querySelector('input[name="email"]').value || '').trim();
      if(!name || !email){
        alert('Please fill in your name and email.');
        return;
      }
      localStorage.setItem('wl_user', name);
      window.location.href = 'index.html';
    });
  }
  if (window.location.pathname.endsWith('signout.html')){
    localStorage.removeItem('wl_user');
    setTimeout(()=>{ window.location.href = 'index.html'; }, 500);
  }
})();


// Scroll-driven nav transparency
(function(){
  function toggleScrolled(){
    var nav = document.querySelector('.nav');
    if(!nav) return;
    if (window.scrollY > 24){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', toggleScrolled, {passive:true});
  window.addEventListener('load', toggleScrolled);
  document.addEventListener('DOMContentLoaded', toggleScrolled);
})();
