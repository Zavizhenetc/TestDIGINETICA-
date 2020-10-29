export default class Card {
  constructor(title, linkImg, resultTemplate, query)
  {
    this.title = title;
    this.linkImg = linkImg;
    this.resultTemplate = resultTemplate;
    this.query = query;
     
}
createCard() {
  this.container = this.resultTemplate.cloneNode(true);
  
  this.container.querySelector(".search__results-item-img").setAttribute('src', this.linkImg);
  this.container.querySelector(".search__results-item-title").textContent = this.title;
  this.container.querySelector(".search__results-item-count").textContent = this.query;
  return this.container;
}

}