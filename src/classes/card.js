class Card {
    constructor(info) {
        this.info = info;
    };

    start() {
        requestAnimationFrame(this.animate.bind(this));
    };

    animate() {
        this.info.draw();
        requestAnimationFrame(this.animate.bind(this))
    };
}

export default Card;