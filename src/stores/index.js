import { createStore } from 'vuex';
import UsersInformation from "@/stores/UsersInformation.js";
import PlantesInformation from "@/stores/PlantesInformation.js";
import BouquetInformation from "@/stores/BouquetInformation.js";
import PanierParticulier from "@/stores/PanierParticulier.js";
import PanierPro from "@/stores/PanierPro.js";
import Stripe from "@/stores/Stripe.js";

const store = createStore({
    modules: {
        UsersInformation,
        PlantesInformation,
        BouquetInformation,
        PanierParticulier,
        PanierPro,
        Stripe,
    },

});

export default store;
