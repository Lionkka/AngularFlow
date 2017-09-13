export class Deletable {
    public value;

    public delete(): void {
        this.value = 'deleted';
    };
}