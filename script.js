var tl=gsap.timeline();


function breaktext() {
    var h1 = document.querySelector("#h12");
    var h1text = h1.textContent;
    var splittext = h1text.split("");
    var halfval = Math.floor(splittext.length / 2);
    var clutter = "";

    splittext.forEach(function (elem, idx) {
        if (idx < halfval) {
            clutter += `<span class="a">${elem}</span>`;
        } else {
            clutter += `<span class="b">${elem}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breaktext();

gsap.from(".a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
});


gsap.from(".b", {
    y: -50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
});


let links = document.querySelectorAll("#part2 a");

gsap.from(links, {
    y: -50,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
});

let img=document.querySelector(".content img");

gsap.from(img, {
    y: 50,
    duration: 1.5,
    delay: 0.5,
    opacity: 0,
   
});

let left=document.querySelector(".left h1");
let p=document.querySelector(".left p");
let but=document.querySelector(".left button");
tl.from(left, {
    y: 50,
    duration: 1.5,

    opacity: 0,
});

tl.from(p, {
    y: -50,
    duration: 0.9,

    opacity: 0,
});
