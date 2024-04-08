




console.log("001");

const fechaObjetivo = new Date("2024-04-12T23:59:59");

document.getElementById("goHome").addEventListener('click', () => {
    location.href = "index.html";
});

const registerinlog = document.getElementById("registerinlog");
const loginreg = document.getElementById("loginreg")


const form = document.querySelector("form");
const user = document.getElementById("username");
const dni = document.getElementById("dni");
const email = document.getElementById("email");

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
    const bodymessage = "User: " + user.value + " DNI: " + dni.value+ " Email: " + email.value;

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



if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        if (e.submitter.id === "register") {
            sendEmail();
            Swal.fire({
                title: 'Listo',
                text: 'Registrado!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } else if (e.submitter.id === "login") {
            let usuarios = [
                { nombre: "Chiara vasques", pass: "vasC" },
                { nombre: "Poncha07", pass: "P7ch" },
                { nombre: "Emateamo", pass: "aEma" },
                { nombre: "Caminob5", pass: "5Cnb" }
            ];
            
            function userExist(nombre) {
                let indiceUs;
                indiceUs = usuarios.findIndex(usuario => usuario.nombre === nombre);
                console.log(indiceUs);
                return indiceUs;
            }
            
            function passExist(pass) {
                let indicePs;
                indicePs = usuarios.findIndex(usuario => usuario.pass === pass);
                console.log(indicePs);
                return indicePs;
            }
            
            let userInputElement = document.getElementById("userlog").value;
            let passInputElement = document.getElementById("passlog").value;
            
            let userIndex = userExist(userInputElement);
            let passIndex = passExist(passInputElement);
            
            if (userIndex !== -1 && passIndex !== -1 && userIndex === passIndex) {
                window.location.href = "home.html";
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Usuario no encontrado o datos incorrectos',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }

            
        }
    
        
    });
}



if (registerinlog){
    registerinlog.addEventListener('click', () => {
        location.href = "../index.html";
    });
}

if (loginreg){
    loginreg.addEventListener('click', () => {
        location.href = "../pages/login.html";
    });
}

if (document.getElementById("loginhome")){
    document.getElementById("loginhome").addEventListener('click', () => {
        location.href = "login.html";
    });
}

if (document.getElementById("control")){
    document.getElementById("control").addEventListener('click', () => {
        location.href = "ex.html";
    });
}


function actualizarTemporizador() {
    // Fecha actual
    const fechaActual = new Date();

    // Calcula la diferencia entre la fecha actual y la fecha objetivo
    const diferencia = fechaObjetivo.getTime() - fechaActual.getTime();

    // Calcula los días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza el HTML con el tiempo restante
    document.getElementById("temporizador").innerHTML = `${dias} días, ${horas} horas, <br> ${minutos} minutos, ${segundos} segundos`;

    // Si la diferencia es menor o igual a 0, detiene el temporizador
    if (diferencia <= 0) {
        clearInterval(temporizadorIntervalo);
        document.getElementById("temporizador").innerHTML = "Test cargando...";
    }
}



if(document.getElementById("temporizador")){
    actualizarTemporizador();
    const temporizadorIntervalo = setInterval(actualizarTemporizador, 1000);
}
