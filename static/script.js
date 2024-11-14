function updateTargetNurses() {
    const hour = parseInt(document.getElementById("hour").value);
    if (!isNaN(hour) && hour >= 1 && hour <= 24) {
        const targetNurses = calcTargetNurses(hour);
        const targetEl = document.getElementById("targetNurses"); 
        if (targetEl) {
            targetEl.textContent = targetNurses;
        }
    }
}

function updateNursesNeeded() {
    const patients = parseInt(document.getElementById("patients").value);
    if (!isNaN(patients) && patients > 0) {
        const nursesNeeded = calcNursesNeeded(patients);
        const nursesNeededEl = document.getElementById("nursesNeeded");
        if (nursesNeededEl) {
            nursesNeededEl.textContent = nursesNeeded;
        }
    }
}

function calcNursesNeeded(patients) {
    if (patients === 1 || patients === 2 || patients === 3 || patients === 4 || patients === 5 || patients === 6 || patients === 7 || patients === 8 || patients === 9) {
        return 3;
    } else if (patients === 10 || patients === 11 || patients === 12) {
        return 4;
    } else if (patients === 13 || patients === 14 || patients === 15) {
        return 5;
    } else if (patients === 16 || patients === 17 || patients === 18) {
        return 6;
    } else if (patients === 19 || patients === 20) {
        return 7;
    } else if (patients === 21 || patients === 22) {
        return 8;
    } else {
        return "idk";
    }
}

function calcTargetNurses(hour) {
    if (hour === 1 || hour === 2 || hour === 3 || hour === 4 || hour === 5 || hour === 6 || hour === 7) {
        return 2;
    } else if (hour === 8 || hour === 9 || hour === 10 || hour === 11) {
        return 4;
    } else if (hour === 12 || hour === 13 || hour === 14 || hour === 15) {
        return 6;
    } else if (hour === 16 || hour === 17) {
        return 7;
    } else if (hour === 18 || hour === 19 || hour === 20) {
        return 8;
    } else {
        return 3; 
    }
}

document.getElementById("hour").addEventListener("input", updateTargetNurses);
document.getElementById("patients").addEventListener("input", updateNursesNeeded);

