export default class CardRender {
  constructor(container) {
    this.container = container;
    this.array= this.array;
  }

  addCard(card) {
    this.container.append(card);
  }

  render(array) {
    array.forEach((elem) => this.addCard(elem));
  }

}