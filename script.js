let bars = document.getElementById('bars');
let navbar = document.querySelector('.navbar ul');

let btnEvents = document.getElementById('btn-events');
let boxEvents = document.querySelectorAll('.box-events1');

let btnFaculty = document.getElementById('btn-faculty');
let boxFaculty = document.querySelectorAll('.box-faculty1');

let btnReviews = document.getElementById('btn-reviews');
let boxReviews = document.querySelectorAll('.box-reviews1');

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
