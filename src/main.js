import { createApp } from "vue";
// import Antd from "ant-design-vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./utils/axios";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.config.productionTip = false;

// app.use(Antd);

app.use(router);

app.use(store);

app.mount("#app");
