import "./index.css";
import SearchCardRender from "./js/components/SearchCardRender";
import SearchCard from "./js/components/SearchCard.js";
import Card from "./js/components/Card";
import CardRender from "./js/components/CardRender";
import { RESULT_ITEMS, CARDS } from "./js/constants/constants.js";



const resultTemplate = document
  .querySelector("#items-container")
  .content.querySelector(".search__results-item");
const itemsList = document.querySelector(".search__results-container");

const SearchCards = RESULT_ITEMS.map(({ linkImg, title, query }) => {
  return new SearchCard(title, linkImg, resultTemplate, query).createCard();
});

const listSearchCards = new SearchCardRender(itemsList).render(SearchCards);
// // ========рендер карт

const cardTemplate = document.querySelector("#cards-container").content.querySelector(".result__card");
const cardsList = document.querySelector(".results__cards");

const initialCards = CARDS.map(({ linkImg, title, price }) => {
  return new Card(title, linkImg, cardTemplate, price).createCard();
});

const listCards = new CardRender(cardsList).render(initialCards);