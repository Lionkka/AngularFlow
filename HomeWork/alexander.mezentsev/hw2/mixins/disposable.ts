// Disposable mixin
namespace Mixins {
    export class Disposable{
        isDisposed: boolean;
        value: string = '';
        dispose():void {
            this.isDisposed = true;
            this.value = '';
        }
    }
}