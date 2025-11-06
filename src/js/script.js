// *** CAROUSEL ***
// Récupère les éléments du DOM
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item (déterminée dynamiquement)
if (carousel) {
	const premierItem = document.querySelector(".carousel__item");
	const scrollAmount = premierItem ? premierItem.clientWidth : 260; // fallback

	// Scroll au clic sur le bouton précédent
	if (prevButton) {
		prevButton.addEventListener("click", () => {
			carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		});
	}

	// Scroll au clic sur le bouton suivant
	if (nextButton) {
		nextButton.addEventListener("click", () => {
			carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
		});
	}
}
