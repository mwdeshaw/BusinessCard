class Card {
    constructor(info) {
        this.info = info;
    };

    start() {
        // this.lastTime = new Date();
        requestAnimationFrame(this.animate.bind(this));
    };

    animate() {
        // const deltaT = (new Date() - this.lastTime) / 1000;
        // this.game.singleMove(deltaT)
        this.info.draw();
        this.lastTime = new Date();
        requestAnimationFrame(this.animate.bind(this))
    };
}

export default Card;