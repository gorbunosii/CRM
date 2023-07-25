'use strict';

const btnAdd = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const form = document.querySelector(`.questionnaire`);
const btnDel = document.querySelector(`.table-order`);

btnAdd.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
  form.classList.add(`is-visible`);
});

formOverlay.addEventListener(`click`, e => {
  const target = e.target;
  if (target === formOverlay ||
    target.classList.contains(`close`)) {
    formOverlay.classList.remove(`is-visible`);
  }
});

btnDel.addEventListener(`click`, e => {
  if(e.target.closest(`.clear`)) {
    e.target.closest(`.order`).remove()
  }
});