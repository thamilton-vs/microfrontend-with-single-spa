import { registerApplication, start } from 'single-spa';

const appContainer = document.createElement('div');
appContainer.id = 'app-container';
appContainer.style.display = 'flex';

const app1Container = document.createElement('div');
app1Container.id = 'app1';
app1Container.style.flex = '1';
app1Container.style.margin = '10px';
app1Container.style.padding = '10px';

const app2Container = document.createElement('div');
app2Container.id = 'app2';
app2Container.style.flex = '1';
app2Container.style.margin = '10px';
app2Container.style.padding = '10px';

appContainer.appendChild(app1Container);
appContainer.appendChild(app2Container);
document.body.appendChild(appContainer);

registerApplication({
  name: '@verint/app1',
  app: async () => {
    const app = await System.import('@verint/app1');
    return {
      bootstrap: app.bootstrap,
      mount: app.mount,
      unmount: app.unmount,
    };
  },
  activeWhen: ['/'],
  customProps: {
    domElement: app1Container,
  },
});

registerApplication({
  name: '@verint/app2',
  app: async () => {
    const app = await System.import('@verint/app2');
    return {
      bootstrap: app.bootstrap,
      mount: app.mount,
      unmount: app.unmount,
    };
  },
  activeWhen: ['/'],
  customProps: {
    domElement: app2Container,
  },
});

start();