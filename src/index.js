import Info from './classes/info';
import Card from './classes/card';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("card");
    const ctx = canvas.getContext("2d");

    const info = new Info(ctx, canvas);
    new Card(info).start();
});