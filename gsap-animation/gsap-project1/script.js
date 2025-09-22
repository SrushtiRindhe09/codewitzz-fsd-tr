var ex = gsap.timeline()
ex.from(".nav", {
    y: -70,
    duration: 1,
    delay: 0.2,
    opacity: 0

})
ex.from(".nav2 h3", {
    y: -70,
    duration: 0.8,
    opacity: 0,
    stagger: 1

})
ex.from("#hero h1", {
    x: -500,
    duration: 1,
    opacity: 0,
    stagger: 1

})
ex.from("#hero img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duartion: 1.5,
    delay: 0.8

})