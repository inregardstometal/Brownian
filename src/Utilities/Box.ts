interface IBox {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}

export class Box {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;

    constructor ({xMin, xMax, yMin, yMax}: IBox) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
    }

}