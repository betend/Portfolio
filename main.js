const filterButtons = document.querySelectorAll("#filters .btn")
const projectCards = document.querySelectorAll("#projects .card")

for (let button of filterButtons) {
    button.addEventListener("click", function() {

        // 1. Mise à jour du bouton actif
        for (let btn of filterButtons) {
            btn.classList.remove("active")
        }
        button.classList.add("active")

        // 2. Récupération du filtre en minuscules
        const filter = button.textContent.trim().toLowerCase()

        // 3. Filtrage sécurisé des cartes
        for (let card of projectCards) {
            const tech = (card.getAttribute("tech") || "").toLowerCase()

            if (filter === "all" || tech.includes(filter)) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }
        }
    })
}