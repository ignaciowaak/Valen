const quotes = [
    
    "Hola valen esto es una boludes pero es para vos .",
    "espero que estes bien hoy y siempre que gracias por conocernos me alegra que nos hayamos conosidos Kjj la paso muy bien con vos hablando ya sea por mensaje o llamada aunque no me guata por que me gustaria poder hablar ingles como vos es lo unico que jo se hacer y me molesta por que seria god hablar en ingkes comk vos osea me motibas a aprender kjjj  ",
    "y quiero recordarte que tomas awita y tomes sol y hagas ejercicio si !! es bueno tenes que cuidarte .",
    "y ojala que algun dia podemos vernos te daria besitos muchos en esa boquita linda que tenes .",
    "Aca nose que poner kjjj ❤️❤️❤️.",
    "aaaaa VALENTINA (CERRA EL ORTO BLDA).",
    "JODAAAAAA kjjj sos muy linda chiquita .",
    "me gusta molestarte pero me gusta decirte lo bonita que sos y pienso en vos ya se que es algo rapido pero algun dia espero poder darte algun besito.",
    "yo y vos algun diaaa ❤️❤️❤️.",
    "MIRA ESTO SEGUI UNA VES MAS VALEN Y GRACIAS POR VER🌸."
];

let currentQuoteIndex = 0;

document.getElementById('change-quote').addEventListener('click', function() {
    if (currentQuoteIndex < quotes.length) {
        document.getElementById('quote').textContent = quotes[currentQuoteIndex];
        currentQuoteIndex++;
    } else {
        document.getElementById('quote').classList.add('hidden');
        document.getElementById('final-message').classList.remove('hidden');
        document.querySelector('.final-message').style.display = 'block';

        // Reproducir el video en pantalla completa
        const video = document.getElementById('valen-video');
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }
});