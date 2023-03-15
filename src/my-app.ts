import { ItemData } from "./item-data";

export class MyApp {
  public message = "Hello World!";
  public items: ItemData[] = [];

  binding() {
    this.items = [
      new ItemData({ value: "a" }),
      new ItemData({ value: "b" }),
      new ItemData({ value: "c" }),
    ];
    setTimeout(() => {
      // this.items = this.items.filter((item) => item.data.value !== "b");
      this.items.splice(1, 1);
      this.items.push(new ItemData({ value: "d" }));
    }, 1000);
  }
}
