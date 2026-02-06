const photoCards = document.querySelectorAll(".photo-card");
const overlay = document.getElementById("quoteOverlay");
const quoteText = document.getElementById("quoteText");

photoCards.forEach(card => {
    card.addEventListener("click", () => {
        const quote = card.getAttribute("data-quote");
        quoteText.textContent = quote;
        overlay.classList.add("show");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
});
