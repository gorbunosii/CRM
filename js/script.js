'use strict';

const btn = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const form = document.querySelector(`.questionnaire`);
const exit = document.querySelector(`.close`);

btn.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
  form.classList.add(`is-visible`);
});

formOverlay.addEventListener(`click`, e => {
  // console.log(e.target);
  const target = e.target;
  if (target === formOverlay ||
    target.classList.contains(`close`)) {
    formOverlay.classList.remove(`is-visible`);
    form.classList.remove(`is-visible`);
  }
});

// exit.addEventListener(`click`, () => {
//   formOverlay.classList.remove(`is-visible`);
//   form.classList.remove(`is-visible`);
// });
