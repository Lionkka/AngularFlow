export class Readable {
    public valueReadOnly: boolean;

    public readonly(): void {
        this.valueReadOnly = true;
    }
}