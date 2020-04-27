const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('ul');
  const navLinks = document.querySelectorAll('ul li');
  //Toggle Nav

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((li, index) => {
      if(li.style.animation) {
        li.style.animation = ""
      } else {
        li.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
      }

    });

  });

}

  navSlide();
