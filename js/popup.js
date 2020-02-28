var buttonSearch = document.querySelector(".btn-index");
var popup = document.querySelector("form");
var dateArrival = popup.querySelector("[name=hotel-search-date]"); 
var dateDeparture = popup.querySelector("[name=search-departure-date]");
var tourist = popup.querySelector("[name=tourist-count]");
var touristChild = popup.querySelector("[name=tourist-child]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popup.classList.contains("form-search-show")) {
    popup.classList.remove("form-search-show");
  } else {
    popup.classList.add("form-search-show");
  }
});

popup.addEventListener("submit", function(evt) {
  if (!dateArrival.value || !dateDeparture.value || !tourist.value || !touristChild.value) {
    evt.preventDefault();
    console.log("Для поиска гостиницы заполните все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("tourist", tourist.value);
      localStorage.setItem("touristChild", touristChild.value);
    }
  }
});

