import '../node_modules/modern-normalize/modern-normalize.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-dark-indigo/theme.css';

import { createApp, reactive } from 'vue';

import Primevue from 'primevue/config';
import Button from 'primevue/button';
import CheckBox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';
import Badge from 'primevue/badge';
import Divider from 'primevue/divider';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);

  app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

  app.use(store);
  app.use(router);
  app.use(Primevue, { ripple: true, inputStyle: 'outlined' });

  app.directive('ripple', Ripple);
  app.directive('tooltip', Tooltip);
  app.directive('styleclass', StyleClass);
  app.directive('badge', Badge);

  app.component('PButton', Button);
  app.component('PCheckbox', CheckBox);
  app.component('PInputText', InputText);
  app.component('PPassword', Password);
  app.component('PCalendar', Calendar);
  app.component('PDivider', Divider);

  app.mount('#app');
