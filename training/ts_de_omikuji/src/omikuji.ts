class Omikuji {
  items: Array<string>;

  constructor(items: Array<string>) {
    this.items = items;
  }

  get() {
    const rand: number = Math.floor(Math.random() * this.items.length);
    return this.items[rand];
  }
}

module.exports = Omikuji;
