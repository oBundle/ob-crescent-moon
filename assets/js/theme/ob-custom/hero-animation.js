import anime from 'animejs/lib/anime.es.js';

export default function() {

  

  anime({
    targets: '.ob-hero-img-1',
    translateX: -100,
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
    translateX: 100,
    easing: 'linear',
    duration: 10000
  })

  anime({
    targets: '.ob-hero-img-4',
    translateX: -100,
    easing: 'linear',
    duration: 10000
  })

  setTimeout(() => $('#ob-hero-heading').fadeIn("slow"), 1000)
  setTimeout(() => $('#ob-hero-ctas').fadeIn("slow"), 1500)

}

