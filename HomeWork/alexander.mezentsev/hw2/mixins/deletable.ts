// Deletable mixin
namespace Mixins {
    export class Deletable {
        isDeleted: boolean;
        value: string = 'deleted';
        delete():void {
            this.isDeleted = true;
            this.value = 'deleted';
        }
    }
}