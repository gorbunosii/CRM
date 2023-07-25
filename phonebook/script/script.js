'use strict';

const data = [
  {
    name: 'Иван',
    surname: 'Петров',
    phone: '+79514545454',
  },
  {
    name: 'Игорь',
    surname: 'Семёнов',
    phone: '+79999999999',
  },
  {
    name: 'Семён',
    surname: 'Иванов',
    phone: '+79800252525',
  },
  {
    name: 'Мария',
    surname: 'Попова',
    phone: '+79876543210',
  },
];

{
  const createContainer = () => {
    const container = document.createElement(`div`);
    container.classList.add(`container`);
    return container;
  };


  const createHeader = () => {
    const header = document.createElement(`header`);
    header.classList.add(`header`);

    const headerContainer = createContainer();
    header.append(headerContainer);

    header.headerContainer = headerContainer;

    return header;
  };

  const createLogo = title => {
    const h1 = document.createElement(`h1`);
    h1.classList.add(`logo`);
    h1.textContent = `Телефонный справочник. ${title}`;

    return h1;
  };

  const createMain = () => {
    const main = document.createElement(`main`);
    const mainContainer = createContainer();
    main.append(mainContainer);
    main.mainContainer = mainContainer;
    return main;
  };

  const createButtonGroup = params => {
    const btnWrapper = document.createElement(`div`);
    btnWrapper.classList.add(`btn-wrapper`);

    const btns = params.map(({className, type, text}) => {
      const button = document.createElement(`button`);
      button.type = type;
      button.textContent = text;
      button.className = className;

      return button;
    });
    btnWrapper.append(...btns);

    return {
      btnWrapper,
      btns,
    };
  };

  const createTable = () => {
    const table = document.createElement(`table`);
    table.classList.add(`table`, `table-striped`);

    const thead = document.createElement(`thead`);
    thead.insertAdjacentHTML(`beforeend`, `
        <tr>
            <th class="delete">Удалить</th>
            <th class="table-name">Имя</th>
            <th class="table-surname">Фамилия</th>
            <th>Телефон</th>
            <th>Редактирование</th>
        </tr>
        `);

    const tbody = document.createElement(`tbody`);
    table.append(thead, tbody);
    table.tbody = tbody;
    table.thead = thead;

    return table;
  };

  const createForm = () => {
    const overlay = document.createElement(`div`);
    overlay.classList.add(`form-overlay`);

    const form = document.createElement(`form`);
    form.classList.add(`form`);
    form.insertAdjacentHTML(`beforeend`, `
         <button class="close" type="button"></button>
         <h2 class="form-title">Добавить контакт</h2>
         <div class="form-group">
            <lable class="form=label" for="name">Имя:</lable>
            <input class="form-input" name="name" id="name" type="text"
             required>
         </div>
         <div class="form-group">
            <lable class="form=label" for="surname">Фамилия:</lable>
            <input class="form-input" name="surname" id="surname" type="text"
             required>
         </div>
         <div class="form-group">
            <lable class="form=label" for="phone">Телефон:</lable>
            <input class="form-input" name="phone" id="phone" type="number"
             required>
         </div>
        `);
    const buttonGroup = createButtonGroup([
      {
        className: `btn btn-primary mr-3`,
        type: `submit`,
        text: `Добавить`,
      },
      {
        className: `btn btn-danger`,
        type: `reset`,
        text: `Отмена`,
      },
    ]);

    form.append(...buttonGroup.btns);

    overlay.append(form);

    return {
      overlay,
      form,
    };
  };

  const createFooter = () => {
    const footer = document.createElement(`footer`);
    footer.classList.add(`footer`);

    const footerContainer = createContainer();
    footer.append(footerContainer);

    footer.footerContainer = footerContainer;

    return footer;
  };

  const createSave = title => {
    const p = document.createElement(`p`);
    p.textContent = `Все права защищены Ⓒ${title}`;

    return p;
  };


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
    const form = createForm();

    header.headerContainer.append(logo);
    main.mainContainer.append(buttonGroup.btnWrapper, table, form.overlay);
    footer.footerContainer.append(save);
    app.append(header, main, footer);

    return {
      list: table.tbody,
      headList: table.thead,
      logo,
      btnAdd: buttonGroup.btns[0],
      btnDel: buttonGroup.btns[1],
      formOverlay: form.overlay,
      form: form.form,
    };
  };

  const createRow = ({name: firstName, surname, phone}) => {
    const tr = document.createElement('tr');
    tr.classList.add(`contact`);

    const tdDel = document.createElement('td');
    tdDel.classList.add('delete');

    const buttonDel = document.createElement('button');
    buttonDel.classList.add('del-icon');
    tdDel.append(buttonDel);

    const tdName = document.createElement('td');
    tdName.textContent = firstName;

    const tdSurname = document.createElement('td');
    tdSurname.textContent = surname;

    const tdPhone = document.createElement('td');
    const phoneLink = document.createElement('a');

    const tdEdit = document.createElement(`td`);
    const editButton = document.createElement('button');

    phoneLink.href = `tel:${phone}`;
    phoneLink.textContent = phone;
    tr.phoneLink = phoneLink;

    tdPhone.append(phoneLink);

    editButton.textContent = `Редактировать`;
    editButton.classList.add(`edit-button`);
    tdEdit.append(editButton);

    tr.append(tdDel, tdName, tdSurname, tdPhone, tdEdit);

    return tr;
  };

  const renderContacts = (elem, data) => {
    const alllRow = data.map(createRow);
    elem.append(...alllRow);
    return alllRow;
  };

  const hoverRow = (allRow, logo) => {
    const text = logo.textContent;
    allRow.forEach(contact => {
      contact.addEventListener(`mouseenter`, () => {
        logo.textContent = contact.phoneLink.textContent;
      });
      contact.addEventListener(`mouseleave`, () => {
        logo.textContent = text;
      });
    });
  };

  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const phoneBook = renderPhoneBook(app, title);

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      btnDel,
      headList,
    } = phoneBook;

    // функционал

    const allRow = renderContacts(list, data);
    hoverRow(allRow, logo);

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

    btnDel.addEventListener(`click`, () => {
      document.querySelectorAll(`.delete`).forEach(del => {
        del.classList.toggle(`is-visible`);
      });
    });

    list.addEventListener(`click`, e => {
      const target = e.target;
      if (target.closest(`.del-icon`)) {
        target.closest(`.contact`).remove();
      }
    });

    headList.addEventListener(`click`, e => {
      const target = e.target;
      const aaa = document.querySelector(`.table`);
      if (target.closest(`.table-name`)) {
        const sortTable = Array.from(aaa.rows).slice(1).sort((a, b) =>
          (a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1));
        aaa.tBodies[0].append(...sortTable);
      }
      if (target.closest(`.table-surname`)) {
        const sortTable = Array.from(aaa.rows).slice(1).sort((a, b) =>
          (a.cells[2].innerHTML > b.cells[2].innerHTML ? 1 : -1));
        aaa.tBodies[0].append(...sortTable);
      }
    });
  };

  window.phoneBookInit = init;
}

