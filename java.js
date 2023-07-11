const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const form = document.querySelector("form");
const popUpEmail = document.querySelector(".email-sent")

function submitDone(){
    form.style.display = "none";
    popUpEmail.style.display = "block"
}

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
