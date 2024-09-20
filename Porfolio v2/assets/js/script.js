const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Contact Form

function sendMessage() {
    (function(){
         emailjs.init("19YZt0cTuvdX5zQfh");
    })();
 
    var serviceID = "service_p8kl3ki";
    var templateID = "template_a9xfkk5";
 
    var params = {
     sendername: document.querySelector("#fname").value,
     senderemail: document.querySelector("#email").value,
     subject: document.querySelector("#subject").value,
     message: document.querySelector("#message").value
    };
 
    emailjs.send(serviceID, templateID, params)
    .then (res => {
        Swal.fire({
            position: "center",
            icon: "success",
            text: `Thank you, '${params['sendername']}'! Your message has been sent.`,
            showConfirmButton: false,
            timer: 1500
        });
 
         document.querySelector("#fname").value = '';
         document.querySelector("#email").value = '';
         document.querySelector("#subject").value = '';
         document.querySelector("#message").value = '';
    })
    .catch(error => {
         alert('Sorry, something went wrong. Please try again later.');
     });
 
    
    const name = document.querySelector("#fname");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message =  document.querySelector("#message");
 }