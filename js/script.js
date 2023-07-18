'use strict';

// const crmTitle = document.querySelectorAll(`.title`);
// const crmButtonID = document.querySelectorAll(`.button-funnel`);
// const crmColumnID = document.querySelectorAll(`.ID`);
// const formForm = document.querySelectorAll(`.form`);
// const formCheckbox = document.querySelectorAll(`.checkbox`);
// const formCheckboxInput = document.querySelectorAll(`.checkbox-input`);
// const finalPrice = document.querySelectorAll(`.final-price`);


const btn = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const form = document.querySelector(`.questionnaire`);
const exit = document.querySelector(`.close`);

btn.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
  form.classList.add(`is-visible`);
});

form.addEventListener(`click`, event => {
  event.stopPropagation();
});

formOverlay.addEventListener(`click`, () => {
  formOverlay.classList.remove(`is-visible`);
  form.classList.remove(`is-visible`);
});

exit.addEventListener(`click`, () => {
  formOverlay.classList.remove(`is-visible`);
  form.classList.remove(`is-visible`);
});
