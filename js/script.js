'use strict';

const btn = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const form = document.querySelector(`.questionnaire`);

btn.addEventListener(`click`, () => {
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
