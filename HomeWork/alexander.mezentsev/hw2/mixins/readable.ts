// Readable mixin
namespace Mixins {
    export class Readable{
        isReadOnly: boolean;        
        readonly():void {
            this.isReadOnly = true;            
        }
    }
}