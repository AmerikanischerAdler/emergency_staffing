let infos = document.querySelectorAll(".list-item");

const modal = document.getElementById("modal");
const commentText = document.getElementById("commentText");
const commentInfo = document.getElementById("com-info");
const closeModal = document.querySelector(".close-modal");

infos.forEach((e) => {
    if (!e.classList.contains("head")) {
        const hour = parseInt(e.getAttribute("data-hour"));
        const targetNurses = calcTargetNurses(hour);

        const targetNursesEl = e.querySelector(".targetNurses");
        if (targetNursesEl) {
            targetNursesEl.textContent = targetNurses;
        }

        e.addEventListener("click", () => {
            const comment = e.getAttribute("data-comment");
            const date = e.getAttribute("data-date");

            commentText.textContent = comment;
            commentInfo.textContent = `${date} - Hour ${hour}`

            modal.style.display = "block";
        });

        const patients = parseInt(e.getAttribute("data-patients"));
        const nursesNeeded = calcNursesNeeded(patients);
        
        const nursesNeededEl = e.querySelector(".nursesNeeded");
        if (nursesNeededEl) {
            nursesNeededEl.textContent = nursesNeeded;
        }
    }
});

function calcNursesNeeded(patients) {
    if (patients === 1) {
        return 3;
    } else if (patients === 2) {
        return 3;
    } else if (patients === 3) {
        return 3;
    } else if (patients === 4) {
        return 3;
    } else if (patients === 5) {
        return 3;
    } else if (patients === 6) {
        return 3;
    } else if (patients === 7) {
        return 3;
    } else if (patients === 8) {
        return 3;
    } else if (patients === 9) {
        return 3;
    } else if (patients === 10) {
        return 4;
    } else if (patients === 11) {
        return 4;
    } else if (patients === 12) {
        return 4;
    } else if (patients === 13) {
        return 5;
    } else if (patients === 14) {
        return 5;
    } else if (patients === 15) {
        return 5;
    } else if (patients === 16) {
        return 6;
    } else if (patients === 17) {
        return 6;
    } else if (patients === 18) {
        return 6;
    } else if (patients === 19) {
        return 7;
    } else if (patients === 20) {
        return 7;
    } else if (patients === 21) {
        return 7;
    } else if (patients === 22) {
        return 8;
    } else {
        return "idk";
    }
}

function calcTargetNurses(hour) {
    if (hour === 1) {
        return 4;
    } else if (hour === 2) {
        return 2;
    } else if (hour === 3) {
        return 2;
    } else if (hour === 4) {
        return 2;
    } else if (hour === 5) {
        return 2;
    } else if (hour === 6) {
        return 2;
    } else if (hour === 7) {
        return 2;
    } else if (hour === 8) {
        return 3;
    } else if (hour === 9) {
        return 3;
    } else if (hour === 10) {
        return 4;
    } else if (hour === 11) {
        return 4;
    } else if (hour === 12) {
        return 5;
    } else if (hour === 13) {
        return 6;
    } else if (hour === 14) {
        return 6;
    } else if (hour === 15) {
        return 6;
    } else if (hour === 16) {
        return 6;
    } else if (hour === 17) {
        return 6;
    } else if (hour === 18) {
        return 7;
    } else if (hour === 19) {
        return 7;
    } else if (hour === 20) {
        return 7;
    } else if (hour === 21) {
        return 7;
    } else if (hour === 22) {
        return 5;
    } else if (hour === 23) {
        return 5;
    } else if (hour === 24) {
        return 4;
    } else {
        return "idk";
    }
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

