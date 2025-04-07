// Definiere zuerst die verfügbaren Kategorien
const categories = {
  "Beruf & Arbeit": [],
  "Gesellschaft & Politik": [],
  "Technik & Fortschritt": [],
  "Wirtschaft & Konsum": [],
  "Feiertage & Religion": [],
  "Umwelt & Klima": [],
  "Gesundheit & Körper": [],
  "Zwischenmenschliches": [],
  "Bildung & Intelligenz": [],
  "Service & Dienstleistung": [],
  "Höllisch gut": [],
  "Chef*innen & Clowns": [],
  "Systemkritisch charmant": [],
  "Sinnkrisen & Donuts": [],
  "Für Fortgeschrittene": [],
  "Randale & Romantik": [],
  "Unbequeme Wahrheiten": [],
  "Echte Klassiker": [],
  "Zukunftsängste": [],
  "Sport & Fitness": [],
  "Essen & Trinken": [],
};
const presetCartoons = [
  {
    title: "Burnout im Fegefeuer",
    src: "cartoons/lucifer.webp",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik", "Höllisch gut", "Sinnkrisen & Donuts"],
  },
  {
    title: "Profi, durch und durch",
    src: "cartoons/Prinzip.png",
    description: "",
    categories: ["Beruf & Arbeit", "Service & Dienstleistung"],
  },
 
  {
    title: "Produktvielfalt",
    src: "cartoons/Produkt.jpg",
    description: "",
    categories: ["Gesellschaft & Politik", "Technik & Fortschritt", "Umwelt & Klima"],
  },
  {
    title: "Der Fortschritt ist überall",
    src: "cartoons/Fortschritt.png",
    description: "",
    categories: ["Beruf & Arbeit", "Technik & Fortschritt", "Service & Dienstleistung", "Für Fortgeschrittene"],
  },
  {
    title: "Mitbewohnerstreit",
    src: "cartoons/Mitbewohnerstreit.png",
    description: "",
    categories: ["Technik & Fortschritt", "Service & Dienstleistung"],
  },
  {
    title: "Neue Führungskräfte",
    src: "cartoons/Fuehrungskraefte.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Service & Dienstleistung", "Systemkritisch charmant"],
  },
  {
    title: "Strategie",
    src: "cartoons/Strategie.png",
    description: "",
    categories: ["Sport & Fitness"],
  },
  {
    title: "Diagnostik",
    src: "cartoons/Diagnostik.png",
    description: "",
    categories: ["Gesundheit & Körper", "Technik & Fortschritt", "Zukunftsängste"],
  },
  {
    title: "Berufswunsch",
    src: "cartoons/Beste-Bilder-greve_katharina_28_ausbildungfachkraefte_bearb-625x375.jpg",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik", "Bildung & Intelligenz", "Sinnkrisen & Donuts"],
  },
  {
    title: "Sonnenbaden for Future",
    src: "cartoons/sonnenbaden_for_future.png",
    description: "",
    categories: ["Technik & Fortschritt", "Umwelt & Klima"],
  },
  {
    title: "Die Rettung",
    src: "cartoons/rettung.png",
    description: "",
    categories: ["Technik & Fortschritt", "Bildung & Intelligenz", "Zukunftsängste"],
  },
  {
    title: "Neues Showbusiness",
    src: "cartoons/33150878-waermepumpen-im-fokus-cartoon-von-nel-1r70.jpg",
    description: "",
    categories: ["Gesellschaft & Politik", "Technik & Fortschritt", "Umwelt & Klima"],
  },
  {
    title: "Bildung",
    src: "cartoons/SelteneErden.png",
    description: "",
    categories: ["Wirtschaft & Konsum", "Bildung & Intelligenz"],
  },
  {
    title: "Platzhirsch",
    src: "cartoons/Platzhirsch.png",
    description: "",
    categories: ["Beruf & Arbeit", "Zwischenmenschliches"],
  },
  {
    title: "Belagerung",
    src: "cartoons/Belagerung.jpg",
    description: "",
    categories: ["Unbequeme Wahrheiten", "Echte Klassiker"],
  },
  {
    title: "Sicher ist sicher!",
    src: "cartoons/sicher_ist_sicher.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Systemkritisch charmant"],
  },
  {
    title: "Durcheinander",
    src: "cartoons/Durcheinander.png",
    description: "",
    categories: ["Zwischenmenschliches", "Sinnkrisen & Donuts", "Echte Klassiker"],
  },
  {
    title: "Mehr als ein Spiel",
    src: "cartoons/Buergerkieg.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Sport & Fitness"],
  },
  {
    title: "Besser machen. Einfach so.",
    src: "cartoons/Diskutieren.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Zwischenmenschliches"],
  },
  {
    title: "Yummy!",
    src: "cartoons/Donuts.png",
    description: "",
    categories: ["Essen & Trinken", "Bildung & Intelligenz"],
  },
  {
    title: "Hype",
    src: "cartoons/Dubai.png",
    description: "",
    categories: ["Wirtschaft & Konsum"],
  },
  {
    title: "Gesundheitsversorgung",
    src: "cartoons/Gesundheitsversorgung.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Gesundheit & Körper"],
  },
  {
    title: "Retour",
    src: "cartoons/go-away.png",
    description: "",
    categories: ["Gesellschaft & Politik"],
  },
  {
    title: "Ein gutes Angebot",
    src: "cartoons/gute_Preise.png",
    description: "",
    categories: ["Gesundheit & Körper", "Zwischenmenschliches"],
  },
  {
    title: "Übergangsjacke",
    src: "cartoons/herbst.png",
    description: "",
    categories: ["Technik & Fortschritt", "Wirtschaft & Konsum"],
  },
  {
    title: "Installateurmangel",
    src: "cartoons/Installateur.png",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik", "Technik & Fortschritt", "Wirtschaft & Konsum"],
  },
  {
    title: "Architekturbanausin",
    src: "cartoons/nikolaus.png",
    description: "",
    categories: ["Feiertage & Religion", "Zwischenmenschliches"],
  },
  {
    title: "Ostern",
    src: "cartoons/ostern.png",
    description: "",
    categories: ["Feiertage & Religion"],
  },
  {
    title: "Natur",
    src: "cartoons/Hilbring_Hoden-600x600.jpg",
    description: "",
    categories: ["Zwischenmenschliches", "Echte Klassiker"],
  },
  {
    title: "Überraschung",
    src: "cartoons/pause.png",
    description: "",
    categories: ["Beruf & Arbeit", "Randale & Romantik"],
  },
  {
    title: "Geschäftsidee",
    src: "cartoons/pruegelshop.png",
    description: "",
    categories: ["Wirtschaft & Konsum"],
  },
  {
    title: "Wecker für Autofahrer",
    src: "cartoons/Wecker.png",
    description: "",
    categories: ["Technik & Fortschritt", "Gesundheit & Körper"],
  },
  {
    title: "Konferenz",
    src: "cartoons/Grolik_Webseite_Zoom-Konferenz-grolik.jpg",
    description: "",
    categories: ["Beruf & Arbeit", "Sinnkrisen & Donuts"],
  },
  {
    title: "Beratung",
    src: "cartoons/Beratung.png",
    description: "",
    categories: ["Gesundheit & Körper", "Essen & Trinken", "Service & Dienstleistung"],
  },
  {
    title: "Rache",
    src: "cartoons/rache.png",
    description: "",
    categories: ["Beruf & Arbeit", "Service & Dienstleistung"],
  },
  {
    title: "Selbstverwertung",
    src: "cartoons/Russia.png",
    description: "",
    categories: ["Gesellschaft & Politik"],
  },
  {
    title: "Lieferkette",
    src: "cartoons/Streetfood.png",
    description: "",
    categories: ["Wirtschaft & Konsum", "Umwelt & Klima"],
  },
  {
    title: "Christliche Nächstenliebe",
    src: "cartoons/Valentinstag.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Feiertage & Religion", "Für Fortgeschrittene"],
  },
  {
    title: "Trübsal",
    src: "cartoons/Besorgt.png",
    description: "",
    categories: ["Zwischenmenschliches", "Für Fortgeschrittene"],
  },
  {
    title: "Neuer Trend, KI-Tropfen",
    src: "cartoons/Trend.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Zwischenmenschliches", "Randale & Romantik"],
  },
  {
    title: "Zu Befehl!",
    src: "cartoons/Waesche.png",
    description: "",
    categories: ["Zwischenmenschliches", "Randale & Romantik"],
  },
  {
    title: "Neue Traditionen",
    src: "cartoons/Weihnachten.png",
    description: "",
    categories: ["Technik & Fortschritt", "Wirtschaft & Konsum", "Feiertage & Religion"],
  },
  {
    title: "Irrglaube und Konsequenzen",
    src: "cartoons/wennAFD.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Unbequeme Wahrheiten", "Zukunftsängste"],
  },
  {
    title: "Prioritäten ändern sich",
    src: "cartoons/PrioritaetenAendernSich.png",
    description: "",
    categories: ["Gesundheit & Körper", "Unbequeme Wahrheiten", "Zwischenmenschliches", "Randale & Romantik"],
  },
  {
    title: "Auch aus Gewohnheit!",
    src: "cartoons/Gewohnheit.png",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik"],
  },
  {
    title: "Hohe Kriminalitätsdichte",
    src: "cartoons/einarmigerBandit.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Wirtschaft & Konsum"],
  },
  {
    title: "Kafreitag",
    src: "cartoons/Kafreitag.png",
    description: "",
    categories: ["Feiertage & Religion", "Zwischenmenschliches"],
  },
  {
    title: "Kopfrechnen",
    src: "cartoons/4Bier.png",
    description: "",
    categories: ["Essen & Trinken", "Für Fortgeschrittene"],
  },
  {
    title: "Unterhopfung",
    src: "cartoons/Unterhopfung.png",
    description: "",
    categories: ["Essen & Trinken", "Gesundheit & Körper"],
  },
  {
    title: "Sonnenbrand",
    src: "cartoons/Sonnenbrand.png",
    description: "",
    categories: ["Essen & Trinken"],
  },
  {
    title: "Kundenwunsch",
    src: "cartoons/Kundenwunsch.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Service & Dienstleistung"],
  },
  {
    title: "weitsichtig",
    src: "cartoons/weitsichtig.png",
    description: "",
    categories: ["Randale & Romantik"],
  },
  {
    title: "Zaubermittel",
    src: "cartoons/Astra.png",
    description: "",
    categories: ["Essen & Trinken", "Wirtschaft & Konsum"],
  },
  {
    title: "Produktvorstellung",
    src: "cartoons/Entwuerdingung.png",
    description: "",
    categories: ["Technik & Fortschritt", "Gesundheit & Körper"],
  },
  {
    title: "Neue Wege",
    src: "cartoons/NeueWege.png",
    description: "",
    categories: ["Gesellschaft & Politik", "Unbequeme Wahrheiten", "Zukunftsängste"],
  },
  {
    title: "Freundlichkeit ist alles",
    src: "cartoons/Freundlichkeit.png",
    description: "",
    categories: ["Zwischenmenschliches", "Service & Dienstleistung"],
  },
  {
    title: "Andere Länder, andere Sitten",
    src: "cartoons/FALSTAFF.png",
    description: "",
    categories: ["Essen & Trinken", "Wirtschaft & Konsum", "Feiertage & Religion"],
  },
  {
    title: "Aber gern doch",
    src: "cartoons/neueZeiten.png",
    description: "",
    categories: ["Beruf & Arbeit", "Technik & Fortschritt"],
  },
  {
    title: "Spitzenservice",
    src: "cartoons/Gastro.png",
    description: "",
    categories: ["Essen & Trinken", "Service & Dienstleistung"],
  },
  {
    title: "Y-Chromosom-Challenge",
    src: "cartoons/zahnbuerste.png",
    description: "",
    categories: ["Technik & Fortschritt", "Gesundheit & Körper"],
  },
  {
    title: "Unter sich",
    src: "cartoons/Stalking.png",
    description: "",
    categories: ["Zwischenmenschliches"],
  },
  {
    title: "Deutungssache",
    src: "cartoons/Schimmelbildung.png",
    description: "",
    categories: ["Bildung & Intelligenz"],
  },
  {
    title: "Zukunft",
    src: "cartoons/zukunft.png",
    description: "",
    categories: ["Technik & Fortschritt"],
  },
  {
    title: "Mode mit Auswirkung",
    src: "cartoons/JAWS.png",
    description: "",
    categories: ["Wirtschaft & Konsum"],
  },
  {
    title: "Trumpismus",
    src: "cartoons/Trumpismus.png",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik", "Chef*innen & Clowns"],
  },
  {
    title: "Endziel",
    src: "cartoons/Endziel.png",
    description: "",
    categories: ["Gesundheit & Körper", "Zwischenmenschliches", "Höllisch gut"],
  },
  {
    title: "Kleine Hürden",
    src: "cartoons/KleineHuerden.png",
    description: "",
    categories: ["Beruf & Arbeit", "Gesellschaft & Politik", "Chef*innen & Clowns"],
  },
  {
    title: "Divergenz",
    src: "cartoons/Divergenz.png",
    description: "",
    categories: ["Beruf & Arbeit", "Technik & Fortschritt", "Wirtschaft & Konsum"],
  },
  {
    title: "Kollateralschaden",
    src: "cartoons/Kollateralschaden.png",
    description: "",
    categories: ["Randale & Romantik", "Essen & Trinken"],
  },
  {
    title: "Etikette",
    src: "cartoons/Etikette.png",
    description: "",
    categories: ["Randale & Romantik", "Zwischenmenschliches"],
  },
  {
    title: "Bildnis eines Unbekannten",
    src: "cartoons/BildnisEinesUnbekannten.png",
    description: "",
    categories: ["Bildung & Intelligenz", "Echte Klassiker"],
  },
  {
    title: "Zugeschnitten",
    src: "cartoons/Kunst.png",
    description: "",
    categories: ["Randale & Romantik"],
  },
  {
    title: "Berühmter Patient",
    src: "cartoons/BeruehmterPatient.png",
    description: "",
    categories: ["Service & Dienstleistung", "Für Fortgeschrittene", "Echte Klassiker"],
  },
  {
    title: "72 Jungfrauen",
    src: "cartoons/IMG-20240630-WA0005.jpg",
    description: "",
    categories: ["Gesellschaft & Politik", "Feiertage & Religion", "Für Fortgeschrittene"],
  },
  {
    title: "Alle Jahre wieder",
    src: "cartoons/AlleJahreWieder.png",
    description: "",
    categories: ["Zwischenmenschliches", "Unbequeme Wahrheiten"],
  },
  {
    title: "Fallschirm nicht vergessen!",
    src: "cartoons/wahrheitsgetreu.png",
    description: "",
    categories: ["Wirtschaft & Konsum", "Feiertage & Religion"],
  },
  {
    title: "Berufsrisiko",
    src: "cartoons/berufsrisiko.jpg",
    description: "",
    categories: ["Beruf & Arbeit", "Höllisch gut"],
  },
  {
    title: "Nur für Privilegierte",
    src: "cartoons/privilegierte.png",
    description: "",
    categories: ["Systemkritisch charmant", "Gesellschaft & Politik", "Wirtschaft & Konsum"],
  },
  {
    title: "Aber nicht verwechseln!",
    src: "cartoons/kurzwahl.jpg",
    description: "",
    categories: ["Gesellschaft & Politik", "Technik & Fortschritt", "Service & Dienstleistung", "Zukunftsängste"],
  },
  {
    title: "Service ist wichtig!",
    src: "cartoons/service.png",
    description: "",
    categories: ["Beruf & Arbeit", "Service & Dienstleistung"],
  },
  {
    title: "Senior Groupie Emerita",
    src: "cartoons/enkelkind.jpg",
    description: "",
    categories: ["Gesundheit & Körper", "Zwischenmenschliches"],
  },
];

// Funktion zum Initialisieren des Filters
function initializeFilter() {
  const filterSelect = document.getElementById('categoryFilter');
  filterSelect.innerHTML = '<option value="all">Alle Kategorien</option>';

  // Zähle Cartoons pro Kategorie
  const categoryCounts = {};
  Object.keys(categories).forEach(category => {
    categoryCounts[category] = presetCartoons.filter(cartoon =>
      cartoon.categories && cartoon.categories.includes(category)
    ).length;
  });

  // Füge Optionen zum Dropdown hinzu
  Object.entries(categories).forEach(([category, _]) => {
    if (categoryCounts[category] > 0) {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = `${category} (${categoryCounts[category]})`;
      filterSelect.appendChild(option);
    }
  });
}

// Funktion zum Filtern der Cartoons
function filterCartoons(selectedCategory) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ''; // Lösche aktuelle Anzeige

  const filteredCartoons = selectedCategory === 'all'
    ? presetCartoons
    : presetCartoons.filter(cartoon =>
      cartoon.categories && cartoon.categories.includes(selectedCategory)
    );

  filteredCartoons.forEach(cartoon => {
    addCartoonToGallery(cartoon.title, cartoon.src, cartoon.description);
  });

  // Update counter
  const counter = document.getElementById("cartoon-counter");
  counter.textContent = `${filteredCartoons.length} Cartoons angezeigt`;
}

let displayedCount = 15;
const incrementCount = 5;

// Event Listener für DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initializeFilter(); // Initialisiere den Filter

  // Füge Event Listener für Filter hinzu
  document.getElementById('categoryFilter').addEventListener('change', (e) => {
    filterCartoons(e.target.value);
  });

  // Zeige initial alle Cartoons
  filterCartoons('all');
});

function loadCartoons(start, end) {
  const cartoonsToLoad = presetCartoons.slice(start, end);
  cartoonsToLoad.forEach(cartoon => {
    addCartoonToGallery(cartoon.title, cartoon.src, cartoon.description);
  });
}

function addLoadMoreButton() {
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

let currentIndex = -1;
let currentCartoons = [];

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDescription = document.getElementById("lightbox-description");

// Event Listener für Lightbox
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

function showInLightbox(index) {
  if (index >= presetCartoons.length) {
    index = 0;
  }
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
