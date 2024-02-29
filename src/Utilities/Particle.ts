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

    public intersects(particle: Particle): boolean {
        const radiusDiff = Math.abs(this.radius - particle.radius);
        const radiusSum = this.radius + particle.radius;
        const distance = Vec2D.distance(this.position, particle.position);
        return radiusDiff <= distance && distance <= radiusSum;
    }
}

