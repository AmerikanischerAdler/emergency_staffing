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
    if (patients === 1 || patients === 2 || patients === 3 || patients === 4 || patients === 5 || patients === 6 || patients === 7 || patients === 8 || patients === 9) {
        return 3;
    } else if (patients === 10 || patients === 11 || patients === 12) {
        return 4;
    } else if (patients === 13 || patients === 14 || patients === 15) {
        return 5;
    } else if (patients === 16 || patients === 17 || patients === 18) {
        return 6;
    } else if (patients === 19 || patients === 20 || patients === 21) {
        return 7;
    } else if (patients === 22) {
        return 8;
    } else {
        return 8;
    }
}

function calcTargetNurses(hour) {
    if (hour === 2 || hour === 3 || hour === 4 || hour === 5 || hour === 6 || hour === 7) {
        return 2;
    } else if (hour === 8 || hour === 9) {
        return 3;
    } else if (hour === 1 || hour === 10 || hour === 11 || hour === 24) {
        return 4;
    } else if (hour === 12 || hour === 22 || hour === 23) {
        return 5;
    } else if (hour === 13 || hour === 14 || hour === 15 || hour === 16 || hour === 17) {
        return 6;
    } else if (hour === 18 || hour === 19 || hour === 20 || hour === 21) {
        return 7;
    } else {
        return "Must be 1-24"; 
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

