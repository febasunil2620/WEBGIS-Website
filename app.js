/**
 * Sulthan Bathery Municipality - WebGIS Platform Engine
 * Coordinates: 11.6664° N, 76.2573° E | Elevation: 930m MSL
 * Source: Official Delimitation GIS Survey Dataset (warddetails.xlsx)
 */

// Official Municipal Wards Dataset (Sulthan Bathery Municipality - 36 Delimited Wards)
const BATHERY_WARDS = [
  {
    "id": 1,
    "name": "Aram Mile",
    "name_ml": "ആറാം മൈൽ",
    "councilor": "Ward Office 1",
    "type": "Highway Corridor / Forest Fringe",
    "pop": 1270,
    "landmark": "Kozhikode Highway Gate (NH 766)",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 2,
    "name": "Chethalayam",
    "name_ml": "ചേതലയം",
    "councilor": "Ward Office 2",
    "type": "Eco-Agricultural Zone",
    "pop": 1240,
    "landmark": "Chethalayam Eco Route & Forest Buffer",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 3,
    "name": "Chenad",
    "name_ml": "ചേനാട്",
    "councilor": "Ward Office 3",
    "type": "Agricultural & Riverine",
    "pop": 1210,
    "landmark": "Chenad Stream & Farmlands",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 4,
    "name": "Vengoor North",
    "name_ml": "വേങ്ങൂർ നോർത്ത്",
    "councilor": "Ward Office 4",
    "type": "Semi-Urban Residential",
    "pop": 1330,
    "landmark": "Vengoor North Junction",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 5,
    "name": "Odappallam",
    "name_ml": "ഓടപ്പള്ളം",
    "councilor": "Ward Office 5",
    "type": "Reserve Forest Buffer",
    "pop": 1310,
    "landmark": "Odappallam School & Sanctuary Border",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 6,
    "name": "Vengoor South",
    "name_ml": "വേങ്ങൂർ സൗത്ത്",
    "councilor": "Ward Office 6",
    "type": "Agro-Residential Valley",
    "pop": 1250,
    "landmark": "Vengoor South Stream Valley",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 7,
    "name": "Pazhery",
    "name_ml": "പഴേരി",
    "councilor": "Ward Office 7",
    "type": "Agro-Urban Zone",
    "pop": 1280,
    "landmark": "Pazhery Agricultural Zone",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 8,
    "name": "Karuvallikunnu",
    "name_ml": "കരുവള്ളിക്കുന്ന്",
    "councilor": "Ward Office 8",
    "type": "Reserve Forest Highland",
    "pop": 1190,
    "landmark": "Karuvallikunnu Reserve Ridge",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 9,
    "name": "Armad",
    "name_ml": "ആർമാട്",
    "councilor": "Ward Office 9",
    "type": "Forest Buffer / Plantation",
    "pop": 1180,
    "landmark": "Armad Plantation Belt",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 10,
    "name": "Kottakunnu",
    "name_ml": "കോട്ടക്കുന്ന്",
    "councilor": "Ward Office 10",
    "type": "Elevated Residential / Forest",
    "pop": 1290,
    "landmark": "Kottakunnu Water Reservoir & Hill",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 11,
    "name": "Kidangil",
    "name_ml": "കിടങ്ങിൽ",
    "councilor": "Ward Office 11",
    "type": "Sanctuary Perimeter Buffer",
    "pop": 1160,
    "landmark": "Kidangil Forest Perimeter",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 12,
    "name": "Kuppadi",
    "name_ml": "കുപ്പാടി",
    "councilor": "Ward Office 12",
    "type": "Forest Buffer & Urban Gate",
    "pop": 1350,
    "landmark": "Kuppadi Forest Buffer & Town Approach",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 13,
    "name": "Thirunelly",
    "name_ml": "തിരുനെല്ലി",
    "councilor": "Ward Office 13",
    "type": "Residential Settlement",
    "pop": 1260,
    "landmark": "Thirunelly Residential Center",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 14,
    "name": "Manthandikunnu",
    "name_ml": "മന്തണ്ടിക്കുന്ന്",
    "councilor": "Ward Office 14",
    "type": "Highland Residential",
    "pop": 1220,
    "landmark": "Manthandikunnu Highland Ridge",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 15,
    "name": "Sathramkunnu",
    "name_ml": "സത്രംകുന്ന്",
    "councilor": "Ward Office 15",
    "type": "Commercial & Residential",
    "pop": 1380,
    "landmark": "Sathramkunnu Commercial Junction",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 16,
    "name": "Cheroorkunnu",
    "name_ml": "ചേരൂർകുന്ന്",
    "councilor": "Ward Office 16",
    "type": "Residential Suburb",
    "pop": 1310,
    "landmark": "Palakkara Anganwadi & Cheroorkunnu",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 17,
    "name": "Palakkara",
    "name_ml": "പാലക്കര",
    "councilor": "Ward Office 17",
    "type": "Agricultural & Settlement",
    "pop": 1270,
    "landmark": "Palakkara Agro Plain",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 18,
    "name": "Thelambatta",
    "name_ml": "തെലമ്പറ്റ",
    "councilor": "Ward Office 18",
    "type": "Plantation & Residential",
    "pop": 1240,
    "landmark": "Thelambatta Highway Approach",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 19,
    "name": "Thoduvetty",
    "name_ml": "തൊടുവെട്ടി",
    "councilor": "Ward Office 19",
    "type": "Urban Residential Corridor",
    "pop": 1390,
    "landmark": "Thoduvetty Commercial Route",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 20,
    "name": "Kaippancheri",
    "name_ml": "കൈപ്പഞ്ചേരി",
    "councilor": "Ward Office 20",
    "type": "Hospital & Institutional Core",
    "pop": 1420,
    "landmark": "Taluk Hospital Approach & Kaippancheri",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 21,
    "name": "Maithanikunnu",
    "name_ml": "മൈതാനിക്കുന്ന്",
    "councilor": "Ward Office 21",
    "type": "Elevated Urban Zone",
    "pop": 1360,
    "landmark": "Maithanikunnu Municipal Ground",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 22,
    "name": "Fairland",
    "name_ml": "ഫെയർലാൻഡ്",
    "councilor": "Ward Office 22",
    "type": "Residential & Institutional Hub",
    "pop": 1450,
    "landmark": "Assumption Forane & Fairland Center",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 23,
    "name": "C-Kunnu",
    "name_ml": "സി-കുന്ന്",
    "councilor": "Ward Office 23",
    "type": "Delimited Urban Sector",
    "pop": 1230,
    "landmark": "C-Kunnu Hillock Sector",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 24,
    "name": "Kattayad",
    "name_ml": "കാട്ടയാട്",
    "councilor": "Ward Office 24",
    "type": "Semi-Urban Residential",
    "pop": 1300,
    "landmark": "Kattayad Link Corridor",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 25,
    "name": "Sulthan Bathery",
    "name_ml": "സുൽത്താൻ ബത്തേരി ടൗൺ",
    "councilor": "Ward Office 25",
    "type": "Commercial City Core",
    "pop": 1540,
    "landmark": "Chungam PS, Mysore Rd & Ganapathivattam",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 26,
    "name": "Pallikandi",
    "name_ml": "പള്ളിക്കണ്ടി",
    "councilor": "Ward Office 26",
    "type": "Transit & Commercial Arterial",
    "pop": 1410,
    "landmark": "Chulliode Rd & Pallikkandi Mavadi",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 27,
    "name": "Manichira",
    "name_ml": "മണിച്ചിറ",
    "councilor": "Ward Office 27",
    "type": "Heritage Lake & Residential",
    "pop": 1370,
    "landmark": "Historic Manichira Lake & Mavadi Rd",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 28,
    "name": "Kalluvayal",
    "name_ml": "കല്ലുവയൽ",
    "councilor": "Ward Office 28",
    "type": "Agricultural Plain",
    "pop": 1280,
    "landmark": "Kalluvayal Stream Basin & Paddy Fields",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 29,
    "name": "Poomala",
    "name_ml": "പൂമാല",
    "councilor": "Ward Office 29",
    "type": "Agro-Urban Highland",
    "pop": 1340,
    "landmark": "Poomala Hill View & Mavadi Rd",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 30,
    "name": "Dhottappankulam",
    "name_ml": "ദോട്ടപ്പൻകുളം",
    "councilor": "Ward Office 30",
    "type": "Commercial Arterial Corridor",
    "pop": 1430,
    "landmark": "Dhottappankulam & Achuthan Nair Rd",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 31,
    "name": "Beenachi",
    "name_ml": "ബീനാച്ചി",
    "councilor": "Ward Office 31",
    "type": "Tea Estate & Residential",
    "pop": 1320,
    "landmark": "Beenachi Estate Corridor",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 32,
    "name": "Poothikkadu",
    "name_ml": "പൂതിക്കാട്",
    "councilor": "Ward Office 32",
    "type": "Mixed Residential & Agro",
    "pop": 1260,
    "landmark": "Poothikkadu Residential Center",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 33,
    "name": "Cheenapullu",
    "name_ml": "ചീനപ്പുല്ല്",
    "councilor": "Ward Office 33",
    "type": "Plantation Fringe",
    "pop": 1190,
    "landmark": "Cheenapullu East Buffer",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 34,
    "name": "Manthamkolli",
    "name_ml": "മന്തംകൊല്ലി",
    "councilor": "Ward Office 34",
    "type": "Tribal Settlement & Agro",
    "pop": 1220,
    "landmark": "Manthamkolli Tribal Resource Center",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 35,
    "name": "Pazhuppathur",
    "name_ml": "പാഴുപ്പത്തൂർ",
    "councilor": "Ward Office 35",
    "type": "Agricultural & Stream Basin",
    "pop": 1250,
    "landmark": "Pazhuppathur Stream & Temple",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  },
  {
    "id": 36,
    "name": "Kaivettamoola",
    "name_ml": "കൈവെട്ടമൂല",
    "councilor": "Ward Office 36",
    "type": "Civic Junction & Commercial",
    "pop": 1297,
    "landmark": "Kaivettamoola Junction Hub",
    "lsgd": "Sulthan Bathery (Municipality)",
    "district": "Wayanad"
  }
];

// State Management
const DEFAULT_MAP_SOURCE = "https://febasunil2620.github.io/WEBGIS-SULTHAN-BATHERY/";
let currentMapSource = DEFAULT_MAP_SOURCE;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initMapControls();
  renderWardGrid(BATHERY_WARDS);
  initWardSearch();
  initStatsCounter();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   MAP CONTROLS & IFRAME HANDLING
   -------------------------------------------------------------------------- */
function initMapControls() {
  const mapIframe = document.getElementById("gis-iframe");
  const pathDisplay = document.getElementById("gis-path-display");
  const btnOpenTab = document.getElementById("btn-open-tab");
  const btnFullscreen = document.getElementById("btn-fullscreen");
  const btnReload = document.getElementById("btn-reload");
  const gisWrapper = document.getElementById("gis-wrapper");

  currentMapSource = DEFAULT_MAP_SOURCE;

  if (mapIframe && pathDisplay) {
    mapIframe.src = currentMapSource;
    pathDisplay.textContent = currentMapSource;
  }

  // Open in New Tab
  if (btnOpenTab) {
    btnOpenTab.addEventListener("click", () => {
      window.open(currentMapSource, "_blank");
    });
  }

  // Reload iframe
  if (btnReload) {
    btnReload.addEventListener("click", () => {
      if (mapIframe) {
        const temp = mapIframe.src;
        mapIframe.src = "";
        setTimeout(() => { mapIframe.src = temp; }, 100);
      }
    });
  }

  // Fullscreen Toggle
  if (btnFullscreen && gisWrapper) {
    btnFullscreen.addEventListener("click", () => {
      gisWrapper.classList.toggle("fullscreen-mode");
      if (gisWrapper.classList.contains("fullscreen-mode")) {
        btnFullscreen.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg> Exit Fullscreen`;
      } else {
        btnFullscreen.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg> Fullscreen`;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   WARD EXPLORER & SEARCH
   -------------------------------------------------------------------------- */
function renderWardGrid(wards) {
  const container = document.getElementById("ward-grid");
  if (!container) return;

  if (wards.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; color: #94a3b8; background: rgba(0,0,0,0.2); border-radius: 8px;">No wards found matching the search criteria.</div>`;
    return;
  }

  container.innerHTML = wards.map(w => `
    <div class="ward-tile" data-ward="${w.id}">
      <div class="ward-tile-top">
        <span class="ward-num-badge">WARD ${w.id < 10 ? '0' + w.id : w.id}</span>
        <span class="ward-category">${w.type}</span>
      </div>
      <div class="ward-name">${w.name}</div>
      <div class="ward-ml-name">${w.name_ml}</div>
      <div class="ward-meta">
        <div class="ward-detail-row">
          <span class="ward-detail-label">Key Zone:</span>
          <span>${w.landmark}</span>
        </div>
        <div class="ward-detail-row">
          <span class="ward-detail-label">Population:</span>
          <span>~${w.pop.toLocaleString()} · ${w.councilor}</span>
        </div>
        ${w.remarks ? `
        <div class="ward-remarks-box" title="${w.remarks.replace(/"/g, '&quot;')}">
          <span class="ward-remarks-tag">Survey Note:</span> ${w.remarks}
        </div>` : ''}
      </div>
    </div>
  `).join("");

  // Add click to focus
  container.querySelectorAll(".ward-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      const wardId = tile.getAttribute("data-ward");
      const ward = BATHERY_WARDS.find(item => item.id == wardId);
      if (ward) {
        highlightWard(ward);
      }
    });
  });
}

function initWardSearch() {
  const searchInput = document.getElementById("ward-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = BATHERY_WARDS.filter(w =>
      w.name.toLowerCase().includes(term) ||
      w.name_ml.includes(term) ||
      (w.landmark && w.landmark.toLowerCase().includes(term)) ||
      (w.surveyor && w.surveyor.toLowerCase().includes(term)) ||
      (w.remarks && w.remarks.toLowerCase().includes(term)) ||
      (w.type && w.type.toLowerCase().includes(term)) ||
      (w.phone && w.phone.includes(term)) ||
      ("ward " + w.id).includes(term) ||
      ("" + w.id) === term
    );
    renderWardGrid(filtered);
  });
}

function highlightWard(ward) {
  // Smooth scroll up to map if user clicked a ward
  const mapSection = document.getElementById("webgis-viewport");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* --------------------------------------------------------------------------
   DYNAMIC METRIC COUNTERS
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".counter-val");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(num => {
          const target = parseFloat(num.getAttribute("data-target"));
          const decimals = parseInt(num.getAttribute("data-decimals") || 0);
          const duration = 1800;
          const start = 0;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (target - start) * easeProgress;

            num.textContent = decimals > 0
              ? currentVal.toFixed(decimals)
              : Math.floor(currentVal).toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              num.textContent = decimals > 0
                ? target.toFixed(decimals)
                : target.toLocaleString();
            }
          };

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector(".hero-stats-band");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* --------------------------------------------------------------------------
   NAV SCROLL SPY & ACTIVE STATE
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}
