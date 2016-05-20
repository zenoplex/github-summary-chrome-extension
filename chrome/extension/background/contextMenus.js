const { windows, contextMenus } = chrome;
const CONTEXT_MENU_ID = 'context_menu';
let windowId = 0;

function closeIfExist() {
  if (windowId > 0) {
    windows.remove(windowId);
    windowId = windows.WINDOW_ID_NONE;
  }
}

function popupWindow(type) {
  closeIfExist();
  const options = {
    type: 'popup',
    width: 800,
    height: 475,
  };

  if (type === 'open') {
    options.url = 'window.html';
    windows.create(options, (win) => {
      windowId = win.id;
    });
  }
}

contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: 'GitHub summary extension',
  contexts: ['all'],
});

contextMenus.onClicked.addListener((event) => {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popupWindow('open');
  }
});
