import Constructable from './Constructable'

export default function ReadonlyValue<BC extends Constructable>(Base: BC) {
  return class extends Base {
    readonly value: any;
  }
}