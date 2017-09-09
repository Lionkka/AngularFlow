export class Readable {
    public value: string;
    public isReadonly: boolean;

    ReadOnly(): void {
        this.isReadonly = true;
    }
}