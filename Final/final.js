
setInterval(
  function(){
    var text = $("#emotion").val();
    $(".text_box").html(text);
  }
,50);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".information",{
  scrollTrigger: {
    trigger: ".information",
    start: "-140px 70px",
    end: "-130px 10px",
    markers: false,
    scrub: true
  },
  y: -500,
  duration: 1,
  alpha: 0
});

gsap.to(".choosebox",{
  scrollTrigger: {
    trigger: ".choosebox",
    start: "-440px 70px",
    end: "-200px 10px",
    markers: false,
    scrub: true,
    ease: "power2"
  },
  y: -300,
  duration: 1,
  alpha: 1
});



gsap.to(".whiteboard",{
  scrollTrigger: {
    trigger: ".whiteboard",
    start: "-300px 70px",
    end: "-200px 10px",
    markers: false,
    scrub: true
  },
  x: 480,
  duration: 0.5,
  alpha: 1
});

gsap.to(".box",{
  scrollTrigger: {
    trigger: "body",
    start: "top 70px",
    end: "bottom 10px",
    markers: false,
    scrub: true
  },
  x: 220,
  y: 220,
  duration: 0.5,
  alpha: 1
});