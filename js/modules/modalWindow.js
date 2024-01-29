import loadStyle from './loadStyle.js';
import modulStorage from './serviceStorage.js';
const {setTableStorage, fetchRequest} = modulStorage;
import {renderContacts} from './render.js';

const showModal = async (tableTbody, data) => {
  await loadStyle(`style/form-style.css`);
  const overlayTrue = document.querySelector(`.overlay`);
  if (overlayTrue) {
    overlayTrue.classList.remove(`is-visible`);
  } else {
    const overlay = document.createElement(`div`);
    overlay.classList.add(`overlay`);
    const questionnaire = document.createElement(`div`);
    questionnaire.classList.add(`questionnaire`);
    const close = document.createElement(`button`);
    close.classList.add(`close`);
    const blank = document.createElement(`div`);
    blank.classList.add(`blank`);
    const title = document.createElement(`h1`);
    title.classList.add(`title`);
    title.textContent = `Добавить товар`;
    const line = document.createElement(`div`);
    line.classList.add(`line`);
    const form = document.createElement(`form`);
    form.classList.add(`form`);
    form.name = `calculator`;
    form.action = `#`;
    form.method = `post`;
    const specifications = document.createElement(`div`);
    specifications.classList.add(`specifications`);

    const cellName = document.createElement(`div`);
    cellName.classList.add(`cell`);
    cellName.classList.add(`name`);
    const labelName = document.createElement(`label`);
    labelName.classList.add(`label`);
    labelName.setAttribute(`for`, `Имя`);
    labelName.textContent = `Наименование`;
    const inputName = document.createElement(`input`);
    inputName.classList.add(`input`);
    inputName.name = `title`;
    inputName.id = `Имя`;
    inputName.value = data.title || ` `;
    inputName.required = true;
    cellName.append(labelName, inputName);

    const cellCategory = document.createElement(`div`);
    cellCategory.classList.add(`cell`);
    cellCategory.classList.add(`category`);
    const labelCategory = document.createElement(`label`);
    labelCategory.classList.add(`label`);
    labelCategory.setAttribute(`for`, `Категория`);
    labelCategory.textContent = `Категория`;
    const inputCategory = document.createElement(`input`);
    inputCategory.classList.add(`input`);
    inputCategory.setAttribute(`list`, `list`);
    inputCategory.name = `category`;
    inputCategory.id = `Категория`;
    inputCategory.value = data.category || ` `;
    inputCategory.required = true;
    const datalistCategory = document.createElement(`datalist`);
    datalistCategory.id = `list`;
    const optionsDatalist = async (category) => {
      const response = await fetch(`https://lydian-romantic-litter.glitch.me/api/categories`);
      const data = await response.json();
      const arrNew = data.map(item => {
        const datalistOptions = new Option(item);
        category.append(datalistOptions);
      });
      return arrNew;
    };
    optionsDatalist(datalistCategory);
    cellCategory.append(labelCategory, inputCategory, datalistCategory);

    const cellSize = document.createElement(`div`);
    cellSize.classList.add(`cell`);
    cellSize.classList.add(`size`);
    const labelSize = document.createElement(`label`);
    labelSize.classList.add(`label`);
    labelSize.setAttribute(`for`, `ЕИ`);
    labelSize.textContent = `Единицы измерения`;
    const inputSize = document.createElement(`input`);
    inputSize.classList.add(`input`);
    inputSize.name = `units`;
    inputSize.id = `ЕИ`;
    inputSize.value = data.units || ` `;
    inputSize.required = true;
    cellSize.append(labelSize, inputSize);

    const cellDis = document.createElement(`div`);
    cellDis.classList.add(`cell`);
    cellDis.classList.add(`dis`);
    const labelDis = document.createElement(`label`);
    labelDis.classList.add(`label`);
    labelDis.setAttribute(`for`, `дисконт`);
    labelDis.textContent = `Дисконт`;
    const disGroup = document.createElement(`div`);
    disGroup.classList.add(`discount-group`);
    const disInput = document.createElement(`input`);
    disInput.classList.add(`checkbox`);
    disInput.type = 'checkbox';
    disInput.id = `dis`;
    const disLabel = document.createElement(`label`);
    disLabel.classList.add(`checkbox-label`);
    disLabel.setAttribute(`for`, `dis`);
    const inputDis = document.createElement(`input`);
    inputDis.classList.add(`input`);
    inputDis.classList.add(`checkbox-input`);
    inputDis.name = `discount`;
    inputDis.id = `дисконт`;
    inputDis.disabled = true;
    disGroup.append(disInput, disLabel, inputDis);
    cellDis.append(labelDis, disGroup);

    const cellPicture = document.createElement(`div`);
    cellPicture.classList.add(`cell`);
    cellPicture.classList.add(`preview`);
    const pictureImg = document.createElement(`img`);
    pictureImg.classList.add(`IMG`);
    cellPicture.append(pictureImg);

    const cellDescription = document.createElement(`div`);
    cellDescription.classList.add(`cell`);
    cellDescription.classList.add(`description`);
    const labelDescription = document.createElement(`label`);
    labelDescription.classList.add(`label`);
    labelName.setAttribute(`for`, `описание`);
    labelDescription.textContent = `описание`;
    const inputDescription = document.createElement(`textarea`);
    inputDescription.classList.add(`input`);
    inputDescription.classList.add(`des`);
    inputDescription.name = `description`;
    inputDescription.id = `описание`;
    inputDescription.value = data.description || ` `;
    inputDescription.required = true;
    cellDescription.append(labelDescription, inputDescription);

    const cellAmount = document.createElement(`div`);
    cellAmount.classList.add(`cell`);
    cellAmount.classList.add(`amount`);
    const labelAmount = document.createElement(`label`);
    labelAmount.classList.add(`label`);
    labelAmount.setAttribute(`for`, `количество`);
    labelAmount.textContent = `количество`;
    const inputAmount = document.createElement(`input`);
    inputAmount.classList.add(`input`);
    inputAmount.name = `count`;
    inputAmount.value = `0`;
    inputAmount.type = `number`;
    inputAmount.id = `количество`;
    inputAmount.value = data.count || ` `;
    inputAmount.required = true;
    cellAmount.append(labelAmount, inputAmount);

    const cellPrice = document.createElement(`div`);
    cellPrice.classList.add(`cell`);
    cellPrice.classList.add(`price`);
    const labelPrice = document.createElement(`label`);
    labelPrice.classList.add(`label`);
    labelPrice.setAttribute(`for`, `цена`);
    labelPrice.textContent = `цена`;
    const inputPrice = document.createElement(`input`);
    inputPrice.classList.add(`input`);
    inputPrice.name = `price`;
    inputPrice.value = `0`;
    inputPrice.type = `number`;
    inputPrice.id = `цена`;
    inputPrice.value = data.price || ` `;
    inputPrice.required = true;
    cellPrice.append(labelPrice, inputPrice);

    const cellImg = document.createElement(`div`);
    cellImg.classList.add(`cell`);
    cellImg.classList.add(`img`);
    const inputImg = document.createElement(`input`);
    inputImg.classList.add(`add-file`);
    inputImg.type = `file`;
    inputImg.id = `file`;
    inputImg.accept = `image/*`;
    const labelImg = document.createElement(`label`);
    labelImg.classList.add(`add-label`);
    labelImg.setAttribute(`for`, `file`);
    labelImg.textContent = `Добавить изображение`;
    cellImg.append(inputImg, labelImg);

    const final = document.createElement(`div`);
    final.classList.add(`final`);
    const finalP = document.createElement(`p`);
    finalP.classList.add(`text`);
    finalP.classList.add(`final-price`);
    finalP.textContent = `Итоговая стоимость:`;
    const finalSpan = document.createElement(`span`);
    finalSpan.classList.add(`effect`);
    finalSpan.classList.add(`sumModal`);
    const finalButton = document.createElement(`button`);
    finalButton.classList.add(`accept`);
    finalButton.textContent = `Добавить товар`;
    finalP.append(finalSpan);
    final.append(finalP, finalButton);

    const error = document.createElement(`div`);
    error.classList.add(`error`);
    const errorButton = document.createElement(`button`);
    errorButton.classList.add(`close-error`);
    errorButton.type = `submit`;
    const errorP = document.createElement(`p`);
    errorP.classList.add(`error-color`);
    error.append(errorButton, errorP);

    overlay.append(questionnaire, error);
    questionnaire.append(close, blank, title, line, form);
    form.append(specifications, final);
    specifications.append(cellName, cellCategory, cellSize, cellDis,
        cellPicture, cellDescription, cellAmount, cellPrice, cellImg);
    const body = document.querySelector(`body`);
    body.append(overlay);

    const sumModal = document.querySelector(`.sumModal`);
    sumModal.textContent = `$${form.count.value * form.price.value}`;

    overlay.addEventListener(`click`, e => {
      const target = e.target;
      if (target === overlay ||
            target.classList.contains(`close`)) {
        overlay.classList.add(`is-visible`);
        const fn = () => {
          overlay.remove();
        };
        setTimeout(fn, 300);
      }
      if (target.classList.contains(`close-error`)) {
        error.classList.add(`is-visible`);
        const fn = () => {
          overlay.remove();
        };
        setTimeout(fn, 300);
      }
    });

    form.addEventListener(`change`, () => {
      sumModal.textContent = `$${form.count.value * form.price.value}`;
    });

    form.addEventListener(`submit`, e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);

      fetchRequest(`https://lydian-romantic-litter.glitch.me/api/goods`, {
        method: `POST`,
        body: {
          tite: form.name.value,
          body: form.description.value,
        },
        callback(err) {
          console.log(err);
          if (err) {
            error.classList.add(`is-visible`);
            if (err !== ``) {
              const errorEff = document.querySelector(`.error-color`);
              errorEff.textContent = err;
            } else {
              `Что-то пошло не так`;
            }
            return;
          }
          form.reset();
          overlay.classList.remove(`is-visible`);
          setTableStorage(newContact);
          const obj = {goods: [newContact]};
          renderContacts(null, tableTbody, obj);
          sumModal.textContent = `$0`;
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });

    const checkboxtBtn = document.querySelector(`.checkbox-label`);
    checkboxtBtn.addEventListener(`click`, e => {
      const checkboxInput = document.querySelector(`.checkbox-input`);
          e.target.closest(`.checkbox-label`) && checkboxInput.disabled ===
           true ? checkboxInput.disabled = false :
            checkboxInput.disabled = true; checkboxInput.value = '';
    });

    inputImg.addEventListener(`change`, e => {
      if (inputImg.files.length > 0) {
        if (inputImg.files[0].size > 1000000) {
          const p = document.createElement(`p`);
          p.classList.add(`red-text`);
          p.textContent = `изображение не должно превышать размер 1 мб`;
          cellPicture.append(p);
        } else {
          const src = URL.createObjectURL(inputImg.files[0]);
          pictureImg.src = src;
        }
      }
    });
    inputName.addEventListener(`input`, () => {
      inputName.value = inputName.value.replace(/[\w-]/gi, '');
    });
    inputCategory.addEventListener(`input`, () => {
      inputCategory.value = inputCategory.value.replace(/[\w-]/gi, ``);
    });
    inputDescription.addEventListener(`input`, () => {
      inputDescription.value =
      inputDescription.value.replace(/[\w-]{80,}/gi, ``);
    });
    inputSize.addEventListener(`input`, () => {
      inputSize.value = inputSize.value.replace(/[\w\s]/gi, ``);
    });
    inputAmount.addEventListener(`input`, () => {
      inputAmount.value = inputAmount.value.replace(/[^0-9-]/gi, ``);
    });
    inputDis.addEventListener(`input`, () => {
      inputDis.value = inputDis.value.replace(/[^0-9-]/gi, ``);
    });
    inputPrice.addEventListener(`input`, () => {
      inputPrice.value = inputPrice.value.replace(/[^0-9-]/gi, ``);
    });
  }
};

const deleteTrue = async () => {
  await loadStyle(`style/delete.css`);
  const overlay = document.createElement(`div`);
  overlay.classList.add(`overlay`);
  const questionnaire = document.createElement(`div`);
  questionnaire.classList.add(`questionnaire`);
  questionnaire.textContent = `Удалить товар?`;
  const btn = document.createElement(`div`);
  btn.classList.add(`btn`);
  const yesButton = document.createElement(`button`);
  yesButton.classList.add(`accept`);
  yesButton.textContent = `Да`;
  const noButton = document.createElement(`button`);
  noButton.classList.add(`accept`);
  noButton.textContent = `Нет`;
  btn.append(yesButton, noButton);
  questionnaire.append(btn);
  overlay.append(questionnaire);
  const body = document.querySelector(`body`);
  body.append(overlay);

  overlay.addEventListener(`click`, e => {
    const target = e.target;
    if (target === overlay) {
      overlay.classList.add(`is-visible`);
      overlay.remove();
    }
  });

  return new Promise(resolve => {
    yesButton.addEventListener(`click`, () => {
      overlay.classList.add(`is-visible`);
      overlay.remove();
      resolve(true);
    });

    noButton.addEventListener(`click`, () => {
      overlay.classList.add(`is-visible`);
      overlay.remove();
      resolve(false);
    });
  });
};

export default {
  showModal,
  deleteTrue};
