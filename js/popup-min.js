var buttonSearch=document.querySelector(".btn-search"),popup=document.querySelector(".hotel-search-form"),dateArrival=popup.querySelector("#search-date"),dateDeparture=popup.querySelector("#departure-date"),tourist=popup.querySelector("#tourist-count"),touristChild=popup.querySelector("#tourist-child"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}buttonSearch.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("form-search-show")?popup.classList.remove("form-search-show"):popup.classList.add("form-search-show")}),popup.addEventListener("submit",function(e){dateArrival.value&&dateDeparture.value&&tourist.value&&touristChild.value?isStorageSupport&&(localStorage.setItem("tourist",tourist.value),localStorage.setItem("touristChild",touristChild.value)):(e.preventDefault(),popup.classList.remove("form-search-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("form-search-error"),alert("Для поиска гостиницы заполните все поля"),console.log("Для поиска гостиницы заполните все поля"))});