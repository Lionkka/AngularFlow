import Constructable from './Constructable'

export default function DeletableValue<BC extends Constructable>(Base: BC) {
  return class extends Base {
    value: string = 'deleted';

    delete(): void {
      this.value = 'deleted';
    }
  }
}