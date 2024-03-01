import { Particle } from "./Particle";

export class ParticleSimulator {
    private particles: Set<Particle> = new Set();
    private isRunning: boolean = false;

    public addParticle(particle: Particle): this {
        this.particles.add(particle);
        return this;
    }

    public removeParticle(particle: Particle): this {
        this.particles.delete(particle);
        return this;
    }

    public start() {
        this.isRunning = true;
        this.simulate();
    }

    public stop() {
        this.isRunning = false;
    }

    private update() {

    }

    private simulate() {
        while(this.isRunning) {
            this.update();
        }
    }
}