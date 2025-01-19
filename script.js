function page1Animation(){
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button",{
        y:-40,
        opacity : 0,
        duration : 0.5,
        stagger : 0.15
    })
    tl.from(".center-part1 h1",{
        x : -200,
        opacity : 0,
        duration : 0.5
    }, "-=0.3")
    tl.from(".center-part1 p",{
        x : -100,
        opacity : 0,
        duration : 0.4
    })
    tl.from(".center-part1 button",{
        opacity : 0,
        duration : 0.4
    })
    tl.from(".center-part2 img",{
        y: -20,
        opacity : 0,
        duration : 0.5,
    }, "-=1")
    tl.from(".section1bottom img",{
        y : 30,
        opacity : 0,
        duration : 0.3,
        stagger : 0.15
    })
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger : {
            trigger : ".section2",
            scroller : "body",
            start : "top 60%",
            end : "top 30%",
            scrub : 2,
        }
    })
    tl2.from(".services",{
        y : 30,
        opacity : 0,
        duration : 0.2
    })

    tl2.from(".elem.line1.left",{
        x : -300,
        opacity : 0,
        duration : 1
    },"anim1")
    tl2.from(".elem.line1.right",{
        x : 300,
        opacity : 0,
        duration : 1
    },"anim1")

    tl2.from(".elem.line2.left",{
        x : -300,
        opacity : 0,
    },"anim2")
    tl2.from(".elem.line2.right",{
        x : 300,
        opacity : 0,
    },"anim2")
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger : {
            trigger : ".section3",
            scroller : "body",
            start : "top 60%",
            end : "top 30%",
            scrub : 2,
        }
    })
    tl3.from(".contact",{
        y : 50,
        opacity : 0,
        duration : 0.1
    })
    tl3.from(".caseStudy",{
        x : 500,
        opacity : 0.2,
        duration : 0.2
    })
    tl3.from(".footer",{
        y : 50,
        opacity : 0,
        duration : 0.1
    })
}

page1Animation();
page2Animation();
page3Animation();
