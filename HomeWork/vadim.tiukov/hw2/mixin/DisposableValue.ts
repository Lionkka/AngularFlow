import Constructable from "./Constructable";

export function DisposableValue<BC extends Constructable>(base: BC) {
  return class extends base {
    public value: string = "";

    public dispose(): void {
      this.value = "";
    }
  };
}
