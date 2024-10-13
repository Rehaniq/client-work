
var links = document.querySelectorAll('nav a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (function(targetId) {
        return function(e) {
            e.preventDefault();
            var targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        };
    })(links[i].getAttribute('href')));
}


var sections = document.querySelectorAll('section');

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, options);

for (var j = 0; j < sections.length; j++) {
    observer.observe(sections[j]); 
}

let lastScrollTop = 0; 
const navbar = document.getElementById("navbar"); 

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if we are scrolling down
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-100px"; 
    } else {
        navbar.style.top = "0"; 
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
