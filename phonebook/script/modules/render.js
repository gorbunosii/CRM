import * as create from './createElements.js';

export const renderPhoneBook = (app, title) => {
  const header = create.createHeader();
  const logo = create.createLogo(title);
  const save = create.createSave(title);
  const main = create.createMain();
  const footer = create.createFooter();
  const buttonGroup = create.createButtonGroup([
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
  const table = create.createTable();
  const {form, overlay} = create.createForm();

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

export const renderContacts = (elem, data) => {
  const alllRow = data.map(create.createRow);
  elem.append(...alllRow);
  return alllRow;
};
