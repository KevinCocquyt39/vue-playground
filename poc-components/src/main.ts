import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "v-calendar/style.css";
import "@vueform/multiselect/themes/default.css";

import { createApp } from "vue";
import App from "./App.vue";

import VCalendar from "v-calendar";

const app = createApp(App);

// plugins
app.use(VCalendar, {});

app.mount("#app");
