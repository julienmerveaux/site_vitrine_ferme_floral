import { createStore } from 'vuex';
import UsersInformation from "@/stores/UsersInformation.js";
import PlantesInformation from "@/stores/PlantesInformation.js";
import BouquetInformation from "@/stores/BouquetInformation.js";

const store = createStore({
    modules: {
        UsersInformation,
        PlantesInformation,
        BouquetInformation,
    },

});

export default store;
