export class Disposable {
    public value;

    public dispose(): void {
        this.value = '';
    };
}