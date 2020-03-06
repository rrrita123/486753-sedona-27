var buttonSearch = document.querySelector(".btn-search");
var popup = document.querySelector(".hotel-search-form");
var dateArrival = popup.querySelector("#search-date"); 
var dateDeparture = popup.querySelector("#departure-date");
var tourist = popup.querySelector("#tourist-count");
var touristChild = popup.querySelector("#tourist-child");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popup.classList.contains("form-search-close")) {
    popup.classList.remove("form-search-close");
  } else {
    popup.classList.add("form-search-close");
  }
  });

popup.addEventListener("submit", function(evt) {
  if (!dateArrival.value || !dateDeparture.value || !tourist.value || !touristChild.value) {
    evt.preventDefault();
    popup.classList.remove("form-search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-search-error");
    alert("Для поиска гостиницы заполните все поля");
    console.log("Для поиска гостиницы заполните все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("tourist", tourist.value);
      localStorage.setItem("touristChild", touristChild.value);
    }
  }
});

