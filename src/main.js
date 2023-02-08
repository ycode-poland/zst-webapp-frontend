import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faArrowLeft,
    faHouse,
    faUsers,
    faNewspaper,
    faUser,
    faLock,
    faEdit,
    faPlus,
    faCaretUp,
    faCaretDown,

} from "@fortawesome/free-solid-svg-icons";
import 'vue-toastification/dist/index.css';
import Toast, { useToast } from 'vue-toastification';
import store from "@/stores/store";
import moment from 'moment/moment';
import axios from "axios";
import config from '../config.json';
import modalElement from "@/components/elements/ModalElement.vue";
import inputElement from "@/components/elements/InputElement.vue";

library.add(faArrowLeft, faUsers, faHouse, faNewspaper, faUser, faLock, faEdit, faPlus, faCaretUp, faCaretDown)

axios.defaults.baseURL = config.system.api_url;
axios.defaults.headers.Authorization = `Bearer ${localStorage.accessToken}`

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('y-modal', modalElement)
    .component('x-input', inputElement)
    .use(Toast)
    .use(router)
    .use(store)

app.config.globalProperties.$toast = useToast()
app.config.globalProperties.moment = moment;
app.config.globalProperties.config = config;

if (config.system.production) {
    app.productionTip = false;
    app.devtools = false;
}

router.isReady().then(() => {
    app.mount("#app");
});
