export class Deletable {
    public value: string;

    Delete(): void {
        this.value = 'deleted';
    }
}
