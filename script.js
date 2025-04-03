const presetCartoons = [

  
  { title: "Profi, durch und durch", src: "cartoons/Prinzip.png", description: "" },
  { title: "Produktvielfalt", src: "cartoons/Produkt.jpg", description: "" },
  { title: "Der Fortschritt ist überall", src: "cartoons/Fortschritt.png", description: "" },
  { title: "Mitbewohnerstreit", src: "cartoons/Mitbewohnerstreit.png", description: "" },
  { title: "Neue Führungskräfte", src: "cartoons/Fuehrungskraefte.png", description: "" },
  { title: "Strategie", src: "cartoons/Strategie.png", description: "" },
  { title: "Diagnostik", src: "cartoons/Diagnostik.png", description: "" },
  { title: "Berufswunsch", src: "cartoons/Beste-Bilder-greve_katharina_28_ausbildungfachkraefte_bearb-625x375.jpg", description: "" },
  { title: "Sonnenbaden for Future", src: "cartoons/sonnenbaden_for_future.png", description: "" },
  { title: "Die Rettung", src: "cartoons/rettung.png", description: "" },
  { title: "Neues Showbusiness", src: "33150878-waermepumpen-im-fokus-cartoon-von-nel-1r70.jpg", description: "" },
  { title: "Bildung", src: "cartoons/SelteneErden.png", description: "" },
  { title: "Platzhirsch", src: "cartoons/Platzhirsch.png", description: "" },
  { title: "Belagerung", src: "cartoons/Belagerung.jpg", description: "" },
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
  { title: "Natur", src: "cartoons/Hilbring_Hoden-600x600.jpg", description: "" },
  { title: "Überraschung", src: "cartoons/pause.png", description: "" },
  { title: "Geschäftsidee", src: "cartoons/pruegelshop.png", description: "" },
  { title: "Wecker für Autofahrer", src: "cartoons/Wecker.png", description: "" },
  { title: "Konferenz", src: "cartoons/Grolik_Webseite_Zoom-Konferenz-grolik.jpg", description: "" },
  { title: "Beratung", src: "cartoons/Beratung.png", description: "" },
  { title: "Rache", src: "cartoons/rache.png", description: "" },
  { title: "Selbstverwertung", src: "cartoons/Russia.png", description: "" },
  { title: "Lieferkette", src: "cartoons/Streetfood.png", description: "" },
  { title: "Christliche Nächstenliebe", src: "cartoons/Valentinstag.png", description: "" },
  { title: "Trübsal", src: "cartoons/Besorgt.png", description: "" },
  { title: "Neuer Trend, KI-Tropfen", src: "cartoons/Trend.png", description: "" },
  { title: "Zu Befehl!", src: "cartoons/Waesche.png", description: "" },
  { title: "Neue Traditionen", src: "cartoons/Weihnachten.png", description: "" },
  { title: "Irrglaube und Konsequenzen", src: "cartoons/wennAFD.png", description: "" }
];

let displayedCount = 15;
const incrementCount = 5;

window.addEventListener("DOMContentLoaded", () => {
  // Initial nur die ersten 25 Bilder laden
  loadCartoons(0, displayedCount);
  addLoadMoreButton();
});

function loadCartoons(start, end) {
  const cartoonsToLoad = presetCartoons.slice(start, end);
  cartoonsToLoad.reverse().forEach(cartoon => {
    addCartoonToGallery(cartoon.title, cartoon.src, cartoon.description);
  });
}

function addLoadMoreButton() {
  // Entfernen Sie zuerst einen möglicherweise vorhandenen Button
  const existingButton = document.querySelector('.cssbuttons-io-button');
  if (existingButton) {
    existingButton.remove();
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.style.width = "100%";
  buttonContainer.style.textAlign = "center";
  buttonContainer.style.margin = "2em 0";

  const loadMoreButton = document.createElement("button");
  loadMoreButton.className = "cssbuttons-io-button";
  loadMoreButton.innerHTML = `
    Weitere Cartoons anzeigen
    <div class="icon">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="2" fill="none"></path>
      </svg>
    </div>
  `;

  loadMoreButton.addEventListener("click", () => {
    const start = displayedCount;
    displayedCount = Math.min(displayedCount + incrementCount, presetCartoons.length);
    loadCartoons(start, displayedCount);

    if (displayedCount >= presetCartoons.length) {
      loadMoreButton.style.display = "none";
    }
  });

  buttonContainer.appendChild(loadMoreButton);
  document.querySelector('main').appendChild(buttonContainer);
}


// Ändern Sie die loadCartoons Funktion
function loadCartoons(start, end) {
  const cartoonsToLoad = presetCartoons.slice(start, end);
  cartoonsToLoad.forEach(cartoon => {  // Entfernen Sie .reverse()
    addCartoonToGallery(cartoon.title, cartoon.src, cartoon.description);
  });
}

// Initialisierung
window.addEventListener("DOMContentLoaded", () => {
  // Lösche zuerst alle vorhandenen Cartoons
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = '';
  currentCartoons = [];

  // Lade die ersten 15 Bilder
  loadCartoons(0, displayedCount);
  addLoadMoreButton();
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

  gallery.appendChild(div);  // Hier wurde prepend durch appendChild ersetzt
  currentCartoons.push({ title, imgSrc, description });
}

// Ersetze die showInLightbox Funktion mit dieser Version:
function showInLightbox(index) {
  // Wenn wir über das Ende hinausgehen, springen wir zum Anfang
  if (index >= presetCartoons.length) {
    index = 0;
  }
  // Wenn wir unter den Anfang gehen, springen wir zum Ende
  if (index < 0) {
    index = presetCartoons.length - 1;
  }

  const cartoon = presetCartoons[index];
  lightboxImg.src = cartoon.src;
  lightboxTitle.textContent = cartoon.title;
  lightboxDescription.textContent = cartoon.description;
  currentIndex = index;
  lightbox.classList.add("active");
}

// Ändere die addCartoonToGallery Funktion:
function addCartoonToGallery(title, imgSrc, description) {
  const gallery = document.getElementById("gallery");
  // Finde den Index im presetCartoons Array
  const index = presetCartoons.findIndex(cartoon => cartoon.src === imgSrc);

  const div = document.createElement("div");
  div.className = "gallery-item";
  div.innerHTML = `
    <img src="${imgSrc}" alt="${title}" />
    <p><strong>${title}</strong><br>${description}</p>
  `;
  div.querySelector("img").addEventListener("click", () => showInLightbox(index));

  gallery.appendChild(div);
}
