import { createStore } from 'vuex';
import UsersInformation from "@/stores/UsersInformation.js";
import PlantesInformation from "@/stores/PlantesInformation.js";

const store = createStore({
    modules: {
        UsersInformation,
        PlantesInformation,
    },

});

export default store;
