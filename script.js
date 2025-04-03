const presetCartoons = [
  
  { title: "Platzhirsch", src: "cartoons/Platzhirsch.png", description: "" },
  { title: "Belagerung", src: "cartoons/Belagerung.png", description: "" },
  { title: "Sicher ist sicher!", src: "cartoons/sicher_ist_sicher.png", description: "" },
  { title: "Durcheinander", src: "cartoons/Durcheinander.png", description: "" }, 
  { title: "Mehr als ein Spiel", src: "cartoons/Buergerkieg.png", description: "" },
  { title: "Besser machen. Einfach so.", src: "cartoons/Diskutieren.png", description: "" },
  { title: "Yummy!", src: "cartoons/Donuts.png", description: "" },
  { title: "Hype", src: "cartoons/Dubai.png", description: "" },
  { title: "Gesundheitsversorgung", src: "cartoons/Gesundheitsversorgung.png", description: "" },
  { title: "Retour", src: "cartoons/go-away.png", description: "" },
  { title: "Ein gutes Angebot", src: "cartoons/gute_Preise.png", description: "" },
  { title: "Übergangsjacke", src: "cartoons/herbst.png", description: "" },
  { title: "Installateurmangel", src: "cartoons/Installateur.png", description: "" },
  { title: "Architekturbanausin", src: "cartoons/nikolaus.png", description: "" },
  { title: "Ostern", src: "cartoons/ostern.png", description: "" },
  { title: "Überraschung", src: "cartoons/pause.png", description: "" },
  { title: "Geschäftsidee", src: "cartoons/pruegelshop.png", description: "" },
  { title: "Beratung", src: "cartoons/Beratung.png", description: "" },
  { title: "Rache", src: "cartoons/rache.png", description: "" },
  { title: "Selbstverwertung", src: "cartoons/Russia.png", description: "" },
  { title: "Lieferkette", src: "cartoons/Streetfood.png", description: "" },
  { title: "Christliche Nächstenliebe", src: "cartoons/Valentinstag.png", description: "" },
  { title: "Trübsal", src: "cartoons/Besorgt.png", description: "" },
  { title: "Zu Befehl!", src: "cartoons/Waesche.png", description: "" },
  { title: "Neue Traditionen", src: "cartoons/Weihnachten.png", description: "" },
  { title: "Irrglaube", src: "cartoons/wennAFD.png", description: "" }
];

window.addEventListener("DOMContentLoaded", () => {
  presetCartoons.reverse().forEach(cartoon => {
    addCartoonToGallery(cartoon.title, cartoon.src, cartoon.description);
  });
});

let currentIndex = -1;
let currentCartoons = [];

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDescription = document.getElementById("lightbox-description");

document.getElementById("prev").addEventListener("click", () => showInLightbox(currentIndex - 1));
document.getElementById("next").addEventListener("click", () => showInLightbox(currentIndex + 1));
document.getElementById("close").addEventListener("click", () => lightbox.classList.remove("active"));
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") lightbox.classList.remove("active");
  if (e.key === "ArrowLeft") showInLightbox(currentIndex - 1);
  if (e.key === "ArrowRight") showInLightbox(currentIndex + 1);
});

function addCartoonToGallery(title, imgSrc, description) {
  const gallery = document.getElementById("gallery");
  const index = currentCartoons.length;

  const div = document.createElement("div");
  div.className = "gallery-item";
  div.innerHTML = `
    <img src="${imgSrc}" alt="${title}" />
    <p><strong>${title}</strong><br>${description}</p>
  `;
  div.querySelector("img").addEventListener("click", () => showInLightbox(index));

  gallery.prepend(div);
  currentCartoons.push({ title, imgSrc, description });
}

function showInLightbox(index) {
  // Wenn wir über das Ende hinausgehen, springen wir zum Anfang
  if (index >= currentCartoons.length) {
      index = 0;
  }
  // Wenn wir unter den Anfang gehen, springen wir zum Ende
  if (index < 0) {
      index = currentCartoons.length - 1;
  }

  const cartoon = currentCartoons[index];
  lightboxImg.src = cartoon.imgSrc;
  lightboxTitle.textContent = cartoon.title;
  lightboxDescription.textContent = cartoon.description;
  currentIndex = index;
  lightbox.classList.add("active");
}
