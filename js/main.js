console.log("001");


document.getElementById("goHome").addEventListener('click', () => {
    location.href = "index.html";
});

const form = document.querySelector("form");
const user = document.getElementById("username");
const dni = document.getElementById("dni");

/*
document.getElementById("njan").addEventListener('click', () => {
    location.href = "pages/n_jan.html";
});

document.getElementById("nfeb").addEventListener('click', () => {
    location.href = "pages/n_feb.html";
});

document.getElementById("nmar").addEventListener('click', () => {
    location.href = "pages/n_mar.html";
});
*/

function sendEmail(){
    const bodymessage = "User: " + user.value + " DNI: " + dni.value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kiwinewsinform@gmail.com",
        Password : "029E61314A003469BCFA7AE4AC798B81A318",
        To : 'kiwinewsinform@gmail.com',
        From : "kiwinewsinform@gmail.com",
        Subject : dni.value,
        Body : bodymessage
    }).then(
      message => {
        
      }
    );
}




form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});