export class Disposable {
    public value: string;

    Dispose(): void {
        this.value = '';
    }
}