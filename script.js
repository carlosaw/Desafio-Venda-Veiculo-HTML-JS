// SmoothScroll p/ um elemento específico
function smoothScrollTo(targetElement) {
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// Função que altera as versões dos carros
function changeCarVersion(imgSrc) {
  const versionImg = document.querySelector(".versions-left-area img");
  versionImg.src = imgSrc;
}

// SmoothScroll para os elementos de galeria..
const galleryButtons = document.querySelectorAll(".gallery-button");
const gallery = document.querySelector(".gallery");
galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideMobileMenu();
    smoothScrollTo(gallery);
  });
});

// SmoothScroll para os elementos de versões..
const versionsButtons = document.querySelectorAll(".versions-button");
const versions = document.querySelector(".versions");
versionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideMobileMenu();
    smoothScrollTo(versions);
  });
});

// Smooth scroll for email area
const interestButtons = document.querySelectorAll(".interest-button");
const email = document.querySelector(".email-area");
interestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    smoothScrollTo(email);
  });
});

// Change car versions
const ss = document.querySelector(".versions-buttons button:first-child");
const comodoro = document.querySelector(".versions-buttons button:nth-last-child(2)");
const diplo = document.querySelector(".versions-buttons button:last-child");
const price = document.querySelector(".versions-price span strong i");
const difer = document.querySelector(".versions-right-area h3");
const consumo = document.querySelector(".versions-features .consumo");
const km = document.querySelector(".versions-features .km");
const velocidade = document.querySelector(".versions-features .velo");
const potencia = document.querySelector(".versions-features .pot");

ss.addEventListener("click", () => {
  comodoro.classList.remove("active");
  diplo.classList.remove("active");
  ss.classList.add("active");
  price.innerHTML = "R$ 115.000,00";
  difer.innerHTML = "Diferenciais do Opala SS";
  consumo.innerHTML = "Consumo médio de 4.8 Km/l";
  km.innerHTML = "0 aos 100 km/h em 12.8 s";
  velocidade.innerHTML = "Velocidade máxima de 200 km/h";
  potencia.innerHTML = "Potência máxima de 140 CV";
  changeCarVersion("assets/img-carro-1-1.png");
});
comodoro.addEventListener("click", () => {
  ss.classList.remove("active");
  diplo.classList.remove("active");
  comodoro.classList.add("active");
  price.innerHTML = "R$ 70.000,00";
  difer.innerHTML = "Diferenciais do Diplomata";
  consumo.innerHTML = "Consumo médio de 6.1 Km/l";
  km.innerHTML = "0 aos 100 km/h em 15.3 s";
  velocidade.innerHTML = "Velocidade máxima de 165 km/h";
  potencia.innerHTML = "Potência máxima de 171 CV";
  changeCarVersion("assets/comodoro.png");
});
diplo.addEventListener("click", () => {
  ss.classList.remove("active");
  comodoro.classList.remove("active");
  diplo.classList.add("active");
  price.innerHTML = "R$ 85.000,00";
  difer.innerHTML = "Diferenciais do Comodoro";
  consumo.innerHTML = "Consumo médio de 7.0 Km/l";
  km.innerHTML = "0 aos 100 km/h em 12.5 s";
  velocidade.innerHTML = "Velocidade máxima de 182 km/h";
  potencia.innerHTML = "Potência máxima de 170 CV";
  changeCarVersion("assets/diplo.png");
});

const menuMobile = document.querySelector(".menu-right img");
const closeMenu = document.getElementById("close-mobile");
menuMobile.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);

// Função para exibir ou esconder o menu mobile, que pode ser chamada direto no onclick do html.
function toggleMobileMenu() {
  const menuMobile = document.querySelector(".menu-mobile-active");
  menuMobile.style.display =
    menuMobile.style.display === "flex" ? "none" : "flex";
}

// Envio de email
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const formData = new FormData();
  formData.append("email", email);

  if (email) {
    fetch("/sendemail", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response);
    });
  } else {
    alert("Preencha seu e-mail.");
  }
});
