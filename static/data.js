let infos = document.querySelectorAll(".list-item");

infos.forEach((e) => {
    if (!e.classList.contains("head")) {
        e.addEventListener("click", () => {
            alert(1)
        });
    }
});
