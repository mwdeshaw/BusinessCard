import Background from './background';
class Info {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background();
        this.color = "#ffffff";
    };

    allCurObjects() {
        return [].concat([this.background]);
    };

    draw() {
       let ctx = this.ctx;
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // this.allCurObjects().forEach(obj => {
        //     obj.draw(ctx);
        // });
    };
   
};

export default Info;