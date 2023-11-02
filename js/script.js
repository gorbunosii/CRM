import modulControl from './modules/control.js';
import {renderCRM, renderContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {fetchRequest} = modulStorage;

const {
  deleteControl,
  visibleControl} = modulControl;

const init = () => {
  const {
    btnAdd,
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
};

init();
