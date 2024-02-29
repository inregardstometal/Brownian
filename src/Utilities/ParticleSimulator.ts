import { Particle } from "./Particle";

export class ParticleSimulator {
    private particles: Set<Particle> = new Set();

    public addParticle(particle: Particle): this {
        this.particles.add(particle);
        return this;
    }

    public removeParticle(particle: Particle): this {
        this.particles.delete(particle);
        return this;
    }
}