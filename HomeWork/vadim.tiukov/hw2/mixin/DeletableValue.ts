import Constructable from "./Constructable";

export default function DeletableValue<BC extends Constructable>(base: BC) {
  return class extends base {
    public value: string = "deleted";

    public delete(): void {
      this.value = "deleted";
    }
  };
}
