AOS.init();
let textElem = document.getElementById("halo");
let texts = ["Hai","Hola", "Bonjour", "Ciao", "Hej", "Shalom", "Ni Hao", "Hallo", "Ola", "Salaam"];
let speed = 150;
let currentIndex = 0;

function typeWriter() {
    let text = texts[currentIndex];
    let length = text.length;
    let currentChar = 0;

    let typingInterval = setInterval(function() {
    textElem.textContent += text[currentChar];
    currentChar++;

    if (currentChar === length) {
        clearInterval(typingInterval);
        setTimeout(eraseText, 2000);
    }
    }, speed);
}

function eraseText() {
    let length = textElem.textContent.length;

    let erasingInterval = setInterval(function() {
    textElem.textContent = textElem.textContent.slice(0, -1);
    length--;

    if (length === 0) {
        clearInterval(erasingInterval);
        currentIndex++;
        if (currentIndex === texts.length) {
        currentIndex = 0;
        }
        setTimeout(typeWriter, 1000);
    }
    }, speed / 2);
}

typeWriter();

let dark = document.getElementById("dark-mode")
dark.addEventListener('change', function () {
    let body = document.getElementsByTagName('body')[0];
    let nav = document.getElementsByTagName('nav')[0];
    let currentTheme = body.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
        nav.setAttribute('data-bs-theme', 'light');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
        nav.setAttribute('data-bs-theme', 'dark');
    }
});

