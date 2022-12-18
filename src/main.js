import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowLeft, faHouse, faUsers, faNewspaper, faUser} from "@fortawesome/free-solid-svg-icons";
import 'vue-toastification/dist/index.css';
import Toast, { useToast } from 'vue-toastification';
import store from "@/stores/store";
import moment from 'moment/moment';

library.add(faArrowLeft, faUsers, faHouse, faNewspaper, faUser)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Toast).use(router).use(store)

app.config.globalProperties.$toast = useToast()
app.config.globalProperties.moment = moment;
router.isReady().then(() => {
    app.mount("#app");
});
