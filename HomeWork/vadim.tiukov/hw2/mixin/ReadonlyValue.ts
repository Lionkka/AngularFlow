import Constructable from "./Constructable";

export default function ReadonlyValue<BC extends Constructable>(base: BC) {
  return class extends base {
    public readonly value: any;
  };
}
