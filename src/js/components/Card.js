export default class Card {
  constructor(title, linkImg, resultTemplate, price)
  {
    this.title = title;
    this.linkImg = linkImg;
    this.resultTemplate = resultTemplate;
    this.price = price;
     
}
createCard() {
  this.container = this.resultTemplate.cloneNode(true);
  
  this.container.querySelector(".results__card-img").setAttribute('src', this.linkImg);
  this.container.querySelector(".results__card-title").textContent = this.title;
  this.container.querySelector(".results__card-prise").textContent = this.price;
  return this.container;
}

}