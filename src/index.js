import Info from './classes/info';
import Card from './classes/card';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("card-back");
    const ctx = canvas.getContext("2d");
    const info = new Info(ctx);
    new Card(info).start();
});