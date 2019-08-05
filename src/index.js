
document.addEventListener("DOMContentLoaded", () => {
    const flip = document.getElementById("skills");
    const front = document.querySelector(".card-inline");
    const back = document.querySelector(".back");
    const skillsNew = document.getElementById("skills-new");

    flip.onclick = () => {
        back.classList.remove("flip");
        front.classList.add("flip");
    }

    skillsNew.onclick = () => {
        front.classList.remove("flip");
        back.classList.add("flip");
    }
});