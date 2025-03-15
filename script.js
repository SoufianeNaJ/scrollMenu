let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
let nav_center = document.querySelector('.nav-center');

let links = document.querySelector('.links');
console.log(links)

// scroll
window.addEventListener('scroll',function(){
    if (window.pageYOffset > 0) {
        nav_center.style.background = "#fff"
        nav_center.style.boxShadow = "5px 5px 5px 5px gray"
        links.style.background = "#fff"
    }
    else{
        nav_center.style.background = "transparent"
        nav_center.style.boxShadow = "none"
        links.style.background = "transparent"
    }
})

// Responsive menu
let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle('active');
})


function scrOllTo(){
    window.scrollTo(0,750)
}