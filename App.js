window.addEventListener('scroll',function(){
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
    
})

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-places', {
    scrollTrigger: '.animate-places',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});
