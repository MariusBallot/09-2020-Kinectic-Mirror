import RAF from "../utils/RAF"

class KinecticCanvas {
    constructor() {
        this.bind()
        this.can
        this.ctx
        this.imgS

        this.mouseVec = [0, 0]

        this.width
        this.height
    }

    init(can, imgSize, imgs) {
        this.imgSize = imgSize
        this.can = can;
        this.imgs = imgs
        this.ctx = this.can.getContext("2d")

        this.ctx.canvas.width = window.innerWidth
        this.ctx.canvas.height = window.innerHeight

        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        window.addEventListener('mousemove', this.getMousePos)
        console.log(this.imgs)
        RAF.subscribe("canvasUpdate", this.draw)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        for (let x = 0; x < this.width; x += this.imgSize) {
            for (let y = 0; y < this.width; y += this.imgSize) {

                var a = this.mouseVec[0] - x;
                var b = this.mouseVec[1] - y;

                var c = Math.sqrt(a * a + b * b);


                this.ctx.beginPath()
                this.ctx.drawImage(this.imgs[Math.round
                    (Math.sin(c * 0.01) + 1)],
                    x, y, this.imgSize, this.imgSize)
                this.ctx.closePath()
            }
        }

    }


    getMousePos(e) {
        this.mouseVec[0] = e.clientX
        this.mouseVec[1] = e.clientY
    }

    bind() {
        this.init = this.init.bind(this)
        this.draw = this.draw.bind(this)
        this.getMousePos = this.getMousePos.bind(this)
    }

}

const _instance = new KinecticCanvas()
export default _instance