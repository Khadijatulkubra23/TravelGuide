const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-menu");
const searchForm = document.querySelector(".search");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filters button");
const cardGrid = document.getElementById("card-grid");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("no-results");
const savedList = document.getElementById("saved-list");
const savedCount = document.getElementById("saved-count");
const savedEmpty = document.getElementById("saved-empty");

let activeFilter = "all";
let saved = loadSaved();

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem("savedTrips")) || [];
  } catch {
    return [];
  }
}

function storeSaved() {
  try {
    localStorage.setItem("savedTrips", JSON.stringify(saved));
  } catch {}
}

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const country = card.querySelector(".card-meta").textContent.split("·")[0];
    const text = `${card.dataset.name} ${country}`.toLowerCase();
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    card.hidden = !(matchesCategory && text.includes(query));
    if (!card.hidden) visible++;
  });
  noResults.hidden = visible > 0;
}

function renderSaved() {
  savedCount.textContent = saved.length;
  savedEmpty.hidden = saved.length > 0;
  savedList.innerHTML = "";
  saved.forEach(name => {
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.textContent = "Remove";
    remove.dataset.name = name;
    remove.setAttribute("aria-label", `Remove ${name} from saved trips`);
    li.append(label, remove);
    savedList.append(li);
  });
  cards.forEach(card => {
    const btn = card.querySelector(".save-btn");
    const isSaved = saved.includes(card.dataset.name);
    btn.setAttribute("aria-pressed", isSaved);
    btn.textContent = isSaved ? "Saved" : "Save";
  });
  storeSaved();
}

function toggleSave(name) {
  saved = saved.includes(name) ? saved.filter(n => n !== name) : [...saved, name];
  renderSaved();
}

menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

searchForm.addEventListener("submit", e => e.preventDefault());
searchInput.addEventListener("input", applyFilters);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    filterButtons.forEach(b => b.setAttribute("aria-pressed", b === btn));
    applyFilters();
  });
});

cardGrid.addEventListener("click", e => {
  const btn = e.target.closest(".save-btn");
  if (btn) toggleSave(btn.closest(".card").dataset.name);
});

savedList.addEventListener("click", e => {
  const btn = e.target.closest(".remove-btn");
  if (btn) toggleSave(btn.dataset.name);
});

renderSaved();
applyFilters();