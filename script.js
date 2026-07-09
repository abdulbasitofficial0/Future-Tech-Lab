

// Future Tech Lab

console.log("Future Tech Lab Loaded Successfully");

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,0.85)";

}else{

navbar.style.background =
"rgba(0,0,0,0.4)";

}

});

// Hero buttons animation

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =
"translateY(-5px)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =
"translateY(0)";

});

});

// ===============================
// FUTURE TECH STATISTICS COUNTER
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    function startCounters() {

        counters.forEach(counter => {

            if (counter.dataset.started) return;

            counter.dataset.started = "true";

            const target = parseInt(counter.dataset.target);

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 50));

            const timer = setInterval(() => {

                count += increment;

                if (count >= target) {

                    counter.innerText = target;

                    clearInterval(timer);

                } else {

                    counter.innerText = count;

                }

            }, 30);

        });

    }

    const statsSection = document.querySelector("#future-stats");

    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(statsSection);

});

// ===============================
// FUTURE TIMELINE ANIMATION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const timelineItems =
    document.querySelectorAll(".timeline-item");

    const timelineObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    timelineItems.forEach((item) => {

        timelineObserver.observe(item);

    });

});

// Privacy Policy Scroll Animation

document.addEventListener("DOMContentLoaded", () => {

    const policySection =
    document.querySelector(".policy-section");

    if(!policySection) return;

    const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show-policy");

            }

        });

    }, {
        threshold:0.2
    });

    observer.observe(policySection);

});


// ===============================
// FAQ ACCORDION
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const faqQuestions =
    document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const currentItem =
            question.parentElement;

            // Sirf ek FAQ open rakhne ke liye
            document.querySelectorAll(".faq-item")
            .forEach(item => {

                if(item !== currentItem){

                    item.classList.remove("active");

                }

            });

            currentItem.classList.toggle("active");

        });

    });

});


const moreBtn = document.getElementById("loadMoreFaq");
const lessBtn = document.getElementById("showLessFaq");

moreBtn.addEventListener("click", () => {

    document.querySelectorAll(".hidden-faq").forEach(item => {
        item.style.display = "block";
    });

    moreBtn.style.display = "none";
    lessBtn.style.display = "inline-block";

});

lessBtn.addEventListener("click", () => {

    document.querySelectorAll(".hidden-faq").forEach(item => {
        item.style.display = "none";
    });

    lessBtn.style.display = "none";
    moreBtn.style.display = "inline-block";

});

let holdTimer;

window.startHold = function(id){

holdTimer = setTimeout(()=>{

document.getElementById(
`menu-${id}`
).style.display = "block";

},2000);

}

window.cancelHold = function(){

clearTimeout(holdTimer);

}

// Contact Form

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

// Footer Current Year

const footerText =
document.querySelector(".footer-bottom p");

if(footerText){

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Future Tech Lab | All Rights Reserved.`;

}