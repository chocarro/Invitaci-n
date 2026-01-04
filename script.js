// 1. CONFIGURACIÓN DE LA FECHA (15 de Noviembre de 2026)
const weddingDate = new Date('November 15, 2026 17:30:00').getTime();

// 2. FUNCIÓN DEL CONTADOR
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(timerInterval);
        const container = document.querySelector('.countdown-container');
        if (container) container.innerHTML = "<h3>¡Hoy es el gran día!</h3>";
        return;
    }

    // Cálculos de tiempo
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Inyectar en el HTML con formato de dos dígitos (01, 02, etc.)
    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

// Iniciar el intervalo del contador
const timerInterval = setInterval(updateCountdown, 1000);

// 3. FUNCIONES DE APERTURA Y ANIMACIÓN
function openInvitation() {
    const envelope = document.getElementById('envelope');
    
    // Desliza el sobre hacia arriba
    envelope.classList.add('open');
    
    // Habilita el scroll en el body
    document.body.classList.remove('no-scroll');
    
    // Activa la primera tanda de animaciones después de que el sobre empiece a subir
    setTimeout(() => {
        reveal();
    }, 500);
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Distancia para que se active la animación

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// 4. EVENTOS INICIALES
window.addEventListener('scroll', reveal);

// Ejecutamos el contador y el bloqueo de scroll nada más cargar el archivo
updateCountdown();

// Bloqueo preventivo de scroll al cargar la página (por si acaso no está en el CSS)
document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById('envelope').classList.contains('open')) {
        document.body.classList.add('no-scroll');
    }
});


function toggleFaq(btn) {
    // Seleccionamos el contenedor padre (faq-item)
    const item = btn.parentElement;
    const answer = btn.nextElementSibling; // El div faq-answer que está justo después

    // 1. Cerramos otros que estén abiertos (opcional)
    document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) {
            el.classList.remove('active');
            el.querySelector('.faq-answer').style.maxHeight = null;
        }
    });

    // 2. Alternamos la clase active en el item actual
    item.classList.toggle('active');

    // 3. Calculamos la altura real del texto para que la animación funcione
    if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = null;
    }
}


function openInvitation() {
    const envelope = document.getElementById('envelope');
    
    // 1. Desliza tu imagen de sobre hacia arriba
    envelope.classList.add('open');
    
    // 2. Permite el scroll en la invitación
    document.body.classList.remove('no-scroll');
    
    // 3. Inicia el video de fondo automáticamente
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play();
    }
}