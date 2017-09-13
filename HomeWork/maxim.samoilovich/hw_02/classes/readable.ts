export class Readable {
    public isReadOnly: boolean;

    public readonly(): void {
        this.isReadOnly = true;
    }
}