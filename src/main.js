import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/body-set.scss';

const app = createApp(App);
//global components (create individual place?)
import Btn from './components/Btn.vue';
import InputField from './components/InputField.vue';
app.component('btn', Btn);
app.component('input-field',InputField );
app.mount('#app');
