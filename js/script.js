import modulControl from './modules/control.js';
import {renderCRM, renderContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {fetchRequest} = modulStorage;

const {
  deleteControl,
  visibleControl,
  inputControl,
  filterControl} = modulControl;

const init = () => {
  const {
    btnAdd,
    btnFilter,
    inputSearch,
    btnDel,
    tableTbody,
    URL,
  } = renderCRM();

  fetchRequest(URL, {
    method: `get`,
    callback: renderContacts,
  });
  deleteControl(btnDel, tableTbody);
  visibleControl(btnAdd, tableTbody);
  inputControl(inputSearch, tableTbody);
  filterControl(btnFilter, tableTbody);
};

init();
