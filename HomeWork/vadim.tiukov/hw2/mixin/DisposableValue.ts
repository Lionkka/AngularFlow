import Constructable from "./Constructable";

export default function DisposableValue<BC extends Constructable>(base: BC) {
  return class extends base {
    public value: string = "";

    public dispose(): void {
      this.value = "";
    }
  };
}
