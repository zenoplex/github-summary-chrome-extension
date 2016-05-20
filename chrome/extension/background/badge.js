const { storage, browserAction } = window.chrome;

if (storage) {
  storage.local.get('app', (result) => {
    const { app } = result;
    console.log(app);
    browserAction.setBadgeText({ text: '' });
  });
}
