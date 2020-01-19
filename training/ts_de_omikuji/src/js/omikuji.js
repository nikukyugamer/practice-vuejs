class Omikuji {
  constructor(array) {
    this.items = array;
  }

  get() {
    const rand = Math.floor(Math.random() * this.items.length);
    return this.items[rand];
  }
}

module.exports = Omikuji;
