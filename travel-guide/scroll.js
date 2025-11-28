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

