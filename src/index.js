
document.addEventListener("DOMContentLoaded", () => {
    const flip = document.getElementById("skills");
    const front = document.querySelector(".card-outline");
    const back = document.querySelector(".back");
    const skillsNew = document.getElementById("skills-new");

    flip.onclick = () => {
        back.classList.remove("flip");
        front.classList.add("flip");
        const vid1 = document.querySelector(".break-mov");
        vid1.onmouseover = () => {
            vid1.play();
        }
        vid1.onmouseout = () => {
            vid1.pause();
        }
    }

    skillsNew.onclick = () => {
        front.classList.remove("flip");
        back.classList.add("flip");
    }
});