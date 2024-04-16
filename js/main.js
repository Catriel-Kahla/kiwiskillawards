
const fechaObjetivo = new Date("2024-04-16T16:59:59");
let testReady = false;

document.getElementById("goHome").addEventListener('click', () => {
    location.href = "home.html";
});

const registerinlog = document.getElementById("registerinlog");
const loginreg = document.getElementById("loginreg")


const form = document.querySelector("form");
const user = document.getElementById("username");
const dni = document.getElementById("dni");
const email = document.getElementById("email");

let crtansw = [2,2,5,3,1,5,2,3,1,3,4,4,1,3,1];
let chosen = [];
let correct = 0;

let userIn;

if (localStorage.getItem('userIn') !== null) {
    console.log("001");
    
    userIn = JSON.parse(localStorage.getItem('userIn'));
    
} else if (window.location.href === "https://catriel-kahla.github.io/kiwiskillawards/pages/test.html") {
    console.log("000");
    location.href = "login.html";

} else if (window.location.href === "https://catriel-kahla.github.io/kiwiskillawards/pages/ex.html") {
    console.log("000");
    location.href = "login.html";

} else if (window.location.href === "https://catriel-kahla.github.io/kiwiskillawards/pages/control.html") {
    console.log("000");
    location.href = "login.html";

} else if (window.location.href === "https://catriel-kahla.github.io/kiwiskillawards/pages/home.html") {
    console.log("000");
    location.href = "login.html";

} else {
    console.log("000");
    userIn = {
        "user":"",
        "password":"",
        "checkIn":"false",
        "testDone":"false"
    }
}



const startingMinutes = 4.5;
let time = startingMinutes * 60;

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

function sendEmailAnswers(){
    const bodymessage = "User: " + userIn.user + " RTA elegidas: " + chosen + " Cantidad correctas: " + correct;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kiwinewsinform@gmail.com",
        Password : "029E61314A003469BCFA7AE4AC798B81A318",
        To : 'kiwinewsinform@gmail.com',
        From : "kiwinewsinform@gmail.com",
        Subject : userIn.user,
        Body : bodymessage
    }).then(
      message => {
        
      }
    );
}

function sendEmailNoAnswers(){
    const bodymessage = "User: " + userIn.user + " RTA elegidas: 0";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kiwinewsinform@gmail.com",
        Password : "029E61314A003469BCFA7AE4AC798B81A318",
        To : 'kiwinewsinform@gmail.com',
        From : "kiwinewsinform@gmail.com",
        Subject : userIn.user,
        Body : bodymessage
    }).then(
      message => {
        
      }
    );
}

function sendEmailStart(){
    const bodymessage = "User: " + userIn.user + " ha comenzado";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kiwinewsinform@gmail.com",
        Password : "029E61314A003469BCFA7AE4AC798B81A318",
        To : 'kiwinewsinform@gmail.com',
        From : "kiwinewsinform@gmail.com",
        Subject : userIn.user,
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
                { nombre: "FranBa", pass: "aEma" },
                { nombre: "Caminob5", pass: "5Cnb" },
                { nombre: "Dale don dale", pass: "DdDd" },
                { nombre: "Jeanu3000", pass: "Jnu3" },
                { nombre: "Agus", pass: "sUga" },
                { nombre: "Mil", pass: "1Mil" },
                { nombre: "China", pass: "naCh" },
                { nombre: "User1", pass: "1usx" },
                { nombre: "User2", pass: "usx2" },
                { nombre: "User3", pass: "us3x" },
                { nombre: "Ame", pass: "Roma" },
                { nombre: "User4", pass: "4usX" },
                { nombre: "User5", pass: "u5Sx" },
                { nombre: "Pixel", pass: "xPix" }
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
                userIn.user = userInputElement;
                userIn.password = passInputElement;
                userIn.checkIn = true;
                localStorage.setItem('userIn', JSON.stringify(userIn));
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
        location.href = "https://catriel-kahla.github.io/kiwiskillawards/pages/login.html";
    });
}

if (document.getElementById("loginhome")){
    document.getElementById("loginhome").addEventListener('click', () => {
        localStorage.removeItem('userIn');
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
        //clearInterval(temporizadorIntervalo);
        document.getElementById("temporizador").innerHTML = "Comenzar";
        testReady = true;
        document.getElementById("kiwitestbut").style.cursor = "pointer";
        document.getElementById("labelKB").style.cursor = "pointer";
        document.getElementById("temporizador").style.cursor = "pointer";
    }
}



if(document.getElementById("temporizador")){
    actualizarTemporizador();
    const temporizadorIntervalo = setInterval(actualizarTemporizador, 1000);
}

if(document.getElementById("kiwitestbut")){
    document.getElementById("kiwitestbut").addEventListener('click', () => {
        if(testReady==true){
            location.href = "explain.html";
        }
    });
    
}

if(document.getElementById("explainBut")){
    document.getElementById("explainBut").addEventListener('click', () => {
        sendEmailStart();
        setTimeout(() => {
            location.href = "test.html";
        }, 2000);
    });
    
}

function respuesta(num_preg, selected){
    chosen[num_preg] = selected.value;

    id="p" + num_preg;

    /*labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    selected.parentNode.style.backgroundColor = "rgba(125, 98, 9, 0.164)";*/

}

function correctAnswers(){
    correct = 0;
    for(i=0; i<crtansw.length;i++){
        if(crtansw[i]==chosen[i]){
            correct++;
        }
    }

    console.log("Done!");
    sendEmailAnswers();
}


if(document.getElementById("endTest")){
    document.getElementById("endTest").addEventListener('click', () => {
        // Obtener el radio button seleccionado
        var selected = document.querySelector('input[type="radio"]:checked');
        document.getElementById("endTest").style.display="none"
        time = -1;
        if(selected) {
            // Obtener el número de pregunta desde el id del div que contiene la pregunta
            var num_preg = selected.parentNode.parentNode.id.substring(1);
            
            // Llamar a la función respuesta con los parámetros adecuados
            respuesta(num_preg - 1, selected);
            correctAnswers();
            
        } else {
            // Manejar el caso donde ningún radio button está seleccionado
            console.error('Ninguna respuesta seleccionada.');
            sendEmailNoAnswers();
            
        }
    });
}

if(document.getElementById("timer")){
    

    const timer = document.getElementById("timer");

    setInterval(updateTimer, 1000);

    function updateTimer(){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        if(seconds<10){
            timer.innerHTML = "0" + minutes + ":0" + seconds;
        }else{
            timer.innerHTML = "0" + minutes + ":" + seconds;
        }

        
        if(time==0){
            var selected = document.querySelector('input[type="radio"]:checked');
            document.getElementById("endTest").style.display="none"
            if(selected) {
                // Obtener el número de pregunta desde el id del div que contiene la pregunta
                var num_preg = selected.parentNode.parentNode.id.substring(1);
            
                // Llamar a la función respuesta con los parámetros adecuados
                respuesta(num_preg - 1, selected);
                correctAnswers();
            } else {
                // Manejar el caso donde ningún radio button está seleccionado
                console.error('Ninguna respuesta seleccionada.');
                sendEmailNoAnswers();
            }
            time--;
        }else if(time==-1){
            timer.innerHTML = "00:00";
            document.getElementById("testMain").innerHTML = "<h2>Kiwi Skill Awards</h2><h3>El tiempo acabó</h3>";
        }else{
            time--;
        }

        
    }

}

