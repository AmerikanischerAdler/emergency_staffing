let infos = document.querySelectorAll(".list-item");
const modal = document.getElementById("modal");
const commentText = document.getElementById("commentText");
const commentInfo = document.getElementById("com-info");
const closeModal = document.querySelector(".close-modal");

infos.forEach((e) => {
    if (!e.classList.contains("head")) {
        e.addEventListener("click", () => {
            const comment = e.getAttribute("data-comment");
            const hour = e.getAttribute("data-hour");
            const date = e.getAttribute("data-date");

            let [year, month, day] = date.split("-");

            commentText.textContent = comment;
            commentInfo.textContent = `${month}/${day}/${year} - Hour ${hour}`

            modal.style.display = "block";
        });
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

