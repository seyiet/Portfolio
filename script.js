const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classlist.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '30px',
    duration: 5000,
    reset: true
})

sr.reveal('.home-text',{delay:300, origin:'bottom'})

sr.reveal('.about, .services, .contact',{delay:200, origin:'bottom'})