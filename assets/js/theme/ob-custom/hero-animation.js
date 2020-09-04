import anime from 'animejs/lib/anime.es.js';

export default function() {

  $('.ob-hero-img-white-overlay').fadeOut("slow")

  anime({
    targets: '.ob-hero-img-bg',
    translateX: 25,
    easing: 'linear',
    duration: 10000
  })
  
  anime({
    targets: '.ob-hero-img-1',
    translateX: -50,
    easing: 'linear',
    duration: 10000
  })

  anime({
    targets: '.ob-hero-img-2',
    translateX: 50,
    easing: 'linear',
    duration: 10000
  })

  anime({
    targets: '.ob-hero-img-3',
    translateX: -100,
    easing: 'linear',
    duration: 10000
  })

  anime({
    targets: '.ob-hero-img-4',
    translateX: 100,
    easing: 'linear',
    duration: 10000
  })

  
  setTimeout(() => $('#ob-hero-heading').fadeIn(1500), 1500)
  setTimeout(() => $('#ob-hero-ctas').fadeIn(1500), 2500)
  setTimeout(() => $('#hero-cta-btn').fadeIn(1500), 2500)
  setTimeout(() => $('#hero-cta-link').fadeIn(2000), 5000)


}

