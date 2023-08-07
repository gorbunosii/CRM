'use strict';

const {
  createHeader,
  createLogo,
  createMain,
  createButtonGroup,
  createTable,
  createForm,
  createFooter,
  createSave,
  createRow,
} = require('./createElements');

const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const save = createSave(title);
  const main = createMain();
  const footer = createFooter();
  const buttonGroup = createButtonGroup([
    {
      className: `btn btn-primary mr-3`,
      type: `button`,
      text: `Добавить`,
    },
    {
      className: `btn btn-danger`,
      type: `button`,
      text: `Удалить`,
    },
  ]);
  const table = createTable();
  const {form, overlay} = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  footer.footerContainer.append(save);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    headList: table.thead,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, data) => {
  const alllRow = data.map(createRow);
  elem.append(...alllRow);
  return alllRow;
};

module.exports = {
  renderPhoneBook,
  renderContacts,
};
