const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

const container = document.getElementById('page5');
        const scrollingText = container.querySelector('.scrolling-text');
        const containerWidth = container.offsetWidth;
        const textWidth = scrollingText.scrollWidth;
        
        function animate() {
            let startPos = containerWidth;
            function step() {
                startPos -= 1; // Adjust the value to control the speed
                if (startPos <= -textWidth) {
                    startPos = containerWidth;
                }
                scrollingText.style.transform = `translateX(${startPos}px)`;
                requestAnimationFrame(step);
            }
            step();
        }

animate();