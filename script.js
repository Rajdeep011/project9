
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink", {
    stagger: .1,
    y: 10,
    duration: 4,
    ease: Power2,
    opacity: 0
});

Shery.textAnimate("#headings h1",{
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.to(".anim2" , {
    y: 50,
    sstagger: .3,
    opacity: 1,
    ease: Power4,
    duration: 4
  });

Shery.imageEffect(".imgntext img" , {
    style: 3,
    config: {"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":35.54,"range":[0,100]},"geoVertex":{"range":[1,64],"value":15.06},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7142885797941747},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

});


Shery.imageEffect(".imgeff" , {
 style: 5,
 config: {"a":{"value":1.98,"range":[0,30]},"b":{"value":-0.77,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666292012863831},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 debug: true,

});


gsap.from(".imgntext img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});


