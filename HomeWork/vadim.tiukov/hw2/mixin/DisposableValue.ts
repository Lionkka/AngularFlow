import Constructable from './Constructable';

export default function DisposableValue<BC extends Constructable>(Base: BC) {
  return class extends Base {
    value: string = '';

    dispose(): void {
      this.value = ''
    }
  }
}
