import { createApp } from "vue";
import "./css/styles.css";
import App from "./App.vue";
import router from "./router";
import Flicking from "../node_modules/@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css";

const app = createApp(App);
app.component("Flicking", Flicking);
app.use(router);
app.mount("#app");
