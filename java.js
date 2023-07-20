const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const form = document.querySelector("form");
const popUpEmail = document.querySelector(".email-sent")




function submitDone(){
    form.style.display = "none";
    popUpEmail.style.display = "flex"
}


popUpEmail.addEventListener("click", () => {
    form.style.display = "block";
    popUpEmail.style.display = "none"
})


function sendEmail(){
    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <br>
    <b>Email: </b>${email.value}
    <br>
    <br>
    <b>Message: </b>${message.value}
    `
  
    Email.send({
        SecureToken : "4c85d3fa-45be-4a90-95ae-1d08e22c32dd",
        To : 'korpasdarius911@gmail.com',
        From : "korpasdarius911@gmail.com",
        Subject : "Email via personal website from " + email.value,
        Body : ebody
    }).then(
     submitDone()
    );

    }




    document.addEventListener('DOMContentLoaded', function() {
      var animateOnScrollElements = document.querySelectorAll('.animate-on-scroll-scale, .animate-on-scroll-left, .animate-on-scroll-right');
    
      function animateOnScroll(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      }
    
      var observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });
    
      animateOnScrollElements.forEach(function(element) {
        observer.observe(element);
      });
    });
    


     // Function to scroll to the top of the page
     function scrollToTop() {
      window.scrollTo(0, 0);
    }

    // Add an event listener to the page load event
    window.addEventListener('load', scrollToTop);

    const hamburger = document.querySelector(".hamburger")
    const hamburgerNav = document.querySelector(".hamburger-nav")

    hamburger.addEventListener("click",  () => {
      hamburger.classList.toggle("active");
      hamburgerNav.classList.toggle("active")
    })

    document.querySelectorAll(".hamburger-link").forEach(n => 
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        hamburgerNav.classList.remove("active")
      }))



window.addEventListener("resize", adjustNavbarDisplay);

function adjustNavbarDisplay() {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    hamburgerNav.classList.remove("active")
  }
}