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




    // Vanilla JavaScript solution
document.addEventListener('DOMContentLoaded', function() {
    var animateOnScrollElements = document.querySelectorAll('.animate-on-scroll-right');
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= -180 &&
        rect.left >= -180 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateOnScroll() {
      for (var i = 0; i < animateOnScrollElements.length; i++) {
        var element = animateOnScrollElements[i];
        if (isElementInViewport(element)) {
          element.classList.add('show');
        } else{
            element.classList.remove('show')
        }
      }
    }
  
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
    



  document.addEventListener('DOMContentLoaded', function() {
    var animateOnScrollElements = document.querySelectorAll('.animate-on-scroll-left');
    
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= -180 &&
        rect.left >= -180 &&
        rect.bottom <= ((window.innerHeight )|| document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateOnScroll() {
      for (var i = 0; i < animateOnScrollElements.length; i++) {
        var element = animateOnScrollElements[i];
        if (isElementInViewport(element)) {
          element.classList.add('show');
        } else {
            element.classList.remove('show')
            
           }
      }
    }
  
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
    




  document.addEventListener('DOMContentLoaded', function() {
    var animateOnScrollElements = document.querySelectorAll('.animate-on-scroll-scale');
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= -180 &&
        rect.left >= -180 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateOnScroll() {
      for (var i = 0; i < animateOnScrollElements.length; i++) {
        var element = animateOnScrollElements[i];
        if (isElementInViewport(element)) {
          element.classList.add('show');
          links.classList.toggle(".open")
        } else {
            element.classList.remove('show')
            
        }
      }
    }
  
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
    
