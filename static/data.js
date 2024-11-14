let infos = document.querySelectorAll(".list-item");
let modal = document.getElementById("modal");

infos.forEach((e) => {
    if (!e.classList.contains("head")) {
        e.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }
});

window.addEventListener("click", (event) => {
    if (event.target == modal || event.target.classList.contains("close-modal")) {
        modal.style.display = "none";
    }
});

