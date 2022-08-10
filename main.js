// Scrollreveal =  Animação ao descer e subir a pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal('#services .card', { interval: 300 })

const scrollRevealLeft = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 700,
  reset: true
})

scrollRevealLeft.reveal(
  `#home .img-fluid, 
  #about .col, 
  .section-2 .col,
  #whoWeAre .col, 
  #cta h1, 
  #contact .form-box
  `,
  { interval: 300 }
)

const scrollRevealRight = ScrollReveal({
  origin: 'right',
  distance: '60px',
  duration: 700,
  reset: true
})

scrollRevealRight.reveal(
  ` #home .text,
  #about .text,
  .section-2 .text, 
  #cta .btn-cta,
 #whoWeAre .text,
  #cta .btn-cta,
  #contact .map,
  footer form
  `,
  { interval: 300 }
)
