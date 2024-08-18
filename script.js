function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    .from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    .from("nav", {
        opacity: 0,
        delay: -1
    })
    .from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    });
}

// Call the function after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    loadingAnimation();
});


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof LocomotiveScroll !== 'undefined') {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });

        // Sync ScrollTrigger with LocomotiveScroll
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        // Refresh ScrollTrigger and update LocomotiveScroll
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    } else {
        console.error('LocomotiveScroll is not loaded or defined.');
    }
}

// Initialize Locomotive Scroll after page load
document.addEventListener("DOMContentLoaded", () => {
    locomotiveAnimation();
});


// Call the function to activate the animations
navAnimation();
locomotiveAnimation();
loadingAnimation();