import { createStore } from 'vuex';
import UsersInformation from "@/stores/UsersInformation.js";

const store = createStore({
    modules: {
        UsersInformation,
    },

});

export default store;
