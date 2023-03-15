import { bindable } from "aurelia";

export class Item {
  @bindable public data: { value?: string } = {};

  binding() {
    console.log(this);
    return new Promise((res) => setTimeout(res, 3000));
  }
}
