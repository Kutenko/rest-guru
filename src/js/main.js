import Swiper from 'swiper/bundle';

document.addEventListener("DOMContentLoaded", function() {
	var selectedFlag = document.querySelector(".lang-selected");
  var langOptions = document.querySelector(".lang-options");
  var closeButton = document.getElementById("close-button");

  langOptions.style.display = "none"; // Закрываем список по умолчанию

  selectedFlag.addEventListener("click", toggleLangOptions);

  closeButton.addEventListener("click", function() {
    langOptions.style.display = "none";
  });

  var langOptionItems = document.querySelectorAll(".lang-option");
  langOptionItems.forEach(function(langOption) {
    langOption.addEventListener("click", function() {
      var selectedLang = langOption.getAttribute("data-lang");
      var selectedFlagImg = langOption.querySelector("img").getAttribute("src");
      selectedFlag.querySelector("img").setAttribute("src", selectedFlagImg);
      toggleLangOptions(); // Закрываем список
    });
  });

  // Закрытие списка при клике на любое место на странице
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".lang-dropdown")) {
      langOptions.style.display = "none";
    }
  });

  function toggleLangOptions() {
    langOptions.style.display = langOptions.style.display === "none" ? "flex" : "none";
  }
  // Инициализация Swiper
	const mySwiper = new Swiper('.swiper-container', {
		spaceBetween: 20,
		slidesPerView: "auto",
		// breakpoints: {
		// 	980: {
		// 		slidesPerView: 4,
		// 		slidesPerGroup: 4
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 		slidesPerGroup: 3
		// 	},
		// 	320: {
		// 		slidesPerView: 1,
		// 		slidesPerGroup: 2
		// 	}					
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
		
}); 
