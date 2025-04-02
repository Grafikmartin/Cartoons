const presetCartoons = [
  
  { title: "Sicher ist sicher!", src: "cartoons/sicher_ist_sicher.png", description: "" },
  { title: "Durcheinander", src: "cartoons/Durcheinander.png", description: "" }, 
  { title: "Bürgerkrieg", src: "cartoons/Buergerkieg.png", description: "" },
  { title: "Diskutieren", src: "cartoons/Diskutieren.png", description: "" },
  { title: "Donuts", src: "cartoons/Donuts.png", description: "" },
  { title: "Dubai", src: "cartoons/Dubai.png", description: "" },
  { title: "Gesundheitsversorgung", src: "cartoons/Gesundheitsversorgung.png", description: "" },
  { title: "Go Away", src: "cartoons/go-away.png", description: "" },
  { title: "Gute Preise", src: "cartoons/gute_Preise.png", description: "" },
  { title: "Herbst", src: "cartoons/herbst.png", description: "" },
  { title: "Installateurmangel", src: "cartoons/Installateur.png", description: "" },
  { title: "Nikolaus", src: "cartoons/nikolaus.png", description: "" },
  { title: "Ostern", src: "cartoons/ostern.png", description: "" },
  { title: "Überraschung", src: "cartoons/pause.png", description: "" },
  { title: "Geschäftsidee", src: "cartoons/pruegelshop.png", description: "" },
  { title: "Rache", src: "cartoons/rache.png", description: "" },
  { title: "Selbstverwertung", src: "cartoons/Russia.png", description: "" },
  { title: "Streetfood", src: "cartoons/Streetfood.png", description: "" },
  { title: "Valentinstag", src: "cartoons/Valentinstag.png", description: "" },
  { title: "Besorgt", src: "cartoons/Besorgt.png", description: "" },
  { title: "Wäsche", src: "cartoons/Waesche.png", description: "" },
  { title: "Weihnachten", src: "cartoons/Weihnachten.png", description: "" },
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
  if (index < 0 || index >= currentCartoons.length) return;
  const cartoon = currentCartoons[index];
  lightboxImg.src = cartoon.imgSrc;
  lightboxTitle.textContent = cartoon.title;
  lightboxDescription.textContent = cartoon.description;
  currentIndex = index;
  lightbox.classList.add("active");
}
