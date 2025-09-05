document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: window.innerWidth < 768 ? 500 : 800,
        easing: 'ease-in-out',
        once: true,
        offset: window.innerWidth < 768 ? 50 : 100, 
        disable: false
    });
});

let bars = document.getElementById('bars');
let navbar = document.querySelector('.navbar ul');

let btnEvents = document.getElementById('btn-events');
let boxEvents = document.querySelectorAll('.box-events1');

let btnFaculty = document.getElementById('btn-faculty');
let boxFaculty = document.querySelectorAll('.box-faculty1');

let btnReviews = document.getElementById('btn-reviews');
let boxReviews = document.querySelectorAll('.box-reviews1');

let scrollToTopBtn = document.getElementById('scrollToTop');


bars.addEventListener("click" , () => {
    if (navbar.style.display === "none" || navbar.style.display === "") {
        bars.classList.remove('fa-bars');
        bars.classList.add('fa-xmark');
        navbar.style.display = "flex";
    }
    else {
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
        navbar.style.display = "none";
    }
})

btnEvents.addEventListener("click", () => {
     if ([...boxEvents].some(boxE => boxE.style.display === "none" || boxE.style.display === "")) {
        boxEvents.forEach(boxE => {
            boxE.style.display = "flex";
            btnEvents.textContent = "View Less Events";
        });
        
    } else {
        boxEvents.forEach(boxE => {
            boxE.style.display = "none";
            btnEvents.textContent = "View All Events";
        });
       
    }
});

btnFaculty.addEventListener("click", () => {
     if ([...boxFaculty].some(boxF => boxF.style.display === "none" || boxF.style.display === "")) {
        boxFaculty.forEach(boxF => {
            boxF.style.display = "flex";
            btnFaculty.textContent = "View Less Faculty";
        });
    
    } else {
        boxFaculty.forEach(boxF => {
            boxF.style.display = "none";
            btnFaculty.textContent = "View All Faculty";
        });
        
    }
});

btnReviews.addEventListener("click", () => {
     if ([...boxReviews].some(boxR => boxR.style.display === "none" || boxR.style.display === "")) {
        boxReviews.forEach(boxR => {
            boxR.style.display = "flex";
            btnReviews.textContent = "View Less Reviews";
        });
        
    } else {
        boxReviews.forEach(boxR => {
            boxR.style.display = "none";
            btnReviews.textContent = "View All Reviews";
        });
        
    }
});


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
