import { Box } from "./Box";
import Vec2D from "./Vec2d";

export interface IParticle {
    position: Vec2D;
    velocity: Vec2D;
    radius: number;
    mass: number
}

const DefaultParticle: IParticle = {
    position: new Vec2D,
    velocity: new Vec2D,
    radius: 1,
    mass: 1,
}

export class Particle implements IParticle {
    position: Vec2D;
    velocity: Vec2D;
    radius: number;
    mass: number;

    constructor({position, velocity, radius, mass}: Partial<IParticle> = {}) {
        this.position = position ?? DefaultParticle.position;
        this.velocity = velocity ?? DefaultParticle.velocity;
        this.radius = radius ?? DefaultParticle.radius;
        this.mass = mass ?? DefaultParticle.mass;
    }

    get xMin(): number {
        return this.position.x - this.radius;
    }
    get xMax(): number {
        return this.position.x + this.radius;
    }
    get yMin(): number {
        return this.position.y - this.radius;
    }
    get yMax(): number {
        return this.position.y + this.radius;
    }
    get boundingBox(): Box {
        return new Box({xMin: this.xMin, xMax: this.xMax, yMin: this.yMin, yMax: this.yMax})
    }

    public isBounded(box: Box): boolean {
        return this.xMin > box.xMin && this.xMax < box.xMax && this.yMin > box.yMin && this.yMax < box.yMax;
    }
    public intersects(particle: Particle): boolean {
            const radiusDiff = Math.abs(this.radius - particle.radius);
            const radiusSum = this.radius + particle.radius;
            const distance = Vec2D.distance(this.position, particle.position);
            return radiusDiff <= distance && distance <= radiusSum;
    }
}

