'use strict';

const btnAdd = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const btnDel = document.querySelector(`.table-order`);
const checkboxtBtn = document.querySelector(`.checkbox-label`);
const form = document.querySelector(`.form`);

btnAdd.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
});

formOverlay.addEventListener(`click`, e => {
  const target = e.target;
  if (target === formOverlay ||
    target.classList.contains(`close`)) {
    formOverlay.classList.remove(`is-visible`);
  }
});

btnDel.addEventListener(`click`, e => {
  if (e.target.closest(`.clear`)) {
    e.target.closest(`.order`).remove();
  }
});

checkboxtBtn.addEventListener(`click`, e => {
  const checkboxInput = document.querySelector(`.checkbox-input`);
  e.target.closest(`.checkbox-label`) && checkboxInput.disabled === true ?
   checkboxInput.disabled = false : checkboxInput.disabled = true;
  checkboxInput.value = '';
});

form.addEventListener(`submit`, e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newContact = Object.fromEntries(formData);
  console.log(newContact);
  form.reset();
  formOverlay.classList.remove(`is-visible`);
});
