let home = document.querySelector("#home");
let inicio = document.querySelector("#inicio");

home.addEventListener("click", scrollInicio, false);

function scrollInicio(e) {
  inicio.scrollIntoView({ behavior: "smooth" });
}

let about = document.querySelector("#about");
let aboutme = document.querySelector("#aboutme");

about.addEventListener("click", scrollAboutMe, false);

function scrollAboutMe(e) {
  aboutme.scrollIntoView({ behavior: "smooth" });
}

let contactNav = document.querySelector("#contactNav");
let redes = document.querySelector("#redes");

contactNav.addEventListener("click", scrollContact, false);

function scrollContact(e) {
  redes.scrollIntoView({ behavior: "smooth" });
}

let github = document.getElementById("github");
const configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
github.addEventListener("click", abrirGit);
function abrirGit() {
  github = window.open(
    "https://github.com/AliOlivera",
    "github.com",
    configuracion_ventana
  );
}

let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", abrirLink);
function abrirLink() {
  linkedin = window.open(
    "https://www.linkedin.com/in/alina-olivera/",
    "linkedin.com",
    configuracion_ventana
  );
}

let mail = document.getElementById("mail");
mail.addEventListener("click", abrirMail);
function abrirMail() {
  linkedin = window.open(
    "mailto:alinaoliverasaucedo@gmail.com",
    "gmail.com",
    configuracion_ventana
  );
}
