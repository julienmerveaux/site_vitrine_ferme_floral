import Airtable from 'airtable';
import axios from "axios";

// Configurez Airtable avec votre API key et l'ID de base
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patv6DaZVw17S52ax.cfeb828bbcf32ab7dc4316614ea4b8d5efb344c43cedc004c58c08df13480537'
});
const base = Airtable.base('appbmkbokhHog6r1K');


const BouquetInformation = {
    namespaced: true,
    state: {
        AllBouquets: [],
        FilteredBouquets: [], // Les bouquets filtrés
    },
    getters: {
        getAllBouquet: state => state.AllBouquets,
        getAllBouquetFraiche: state => state.AllBouquets.filter(bouquet => bouquet.type === "fleurs-fraiche"),
        getAllBouquetSechee: state => state.AllBouquets.filter(bouquet => bouquet.type === "fleurs-sechee"),
        getFilteredBouquets: state => {
            // Retourne les bouquets filtrés s'il y en a, sinon retourne tous les bouquets
            return state.FilteredBouquets.length > 0 ? state.FilteredBouquets : state.AllBouquets;
        },
    },
    mutations: {
        setAllBouquets(state, bouquetObject) {
            state.AllBouquets = bouquetObject;
        },
        setFilteredBouquets(state, filteredBouquets) {
            state.FilteredBouquets = filteredBouquets;
        }
    },
    actions: {
        allBouquet({commit}) {
            base('Bouquet').select({
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                const bouquetsData = records.map(record => ({
                    id: record.id,
                    nom: record.get('nom'),
                    type: record.get('type'),
                    prix: record.get('prix'),
                    quantite: record.get('quantite'),
                    taille: record.get('taille'),
                    quantiteAchat: 0,
                    image: record.get('image')
                }));
                console.log(bouquetsData)
                console.log("salut")
                commit('setAllBouquets', bouquetsData);
                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        },
        filter({ commit, state }, filterCriteria) {
            console.log(filterCriteria)
            const filtered = state.AllBouquets.filter(bouquet => {
                let matchesCriteria = true; // On commence en supposant que le bouquet correspond aux critères

                // Vérifier si un nom a été fourni et si oui, si le bouquet correspond au nom
                if (filterCriteria.nom && filterCriteria.nom !== '') {
                    matchesCriteria = matchesCriteria && bouquet.nom.toLowerCase().includes(filterCriteria.nom.toLowerCase());
                }

                // Vérifier si un prix maximum a été fourni et si oui, si le bouquet ne dépasse pas ce prix
                if (filterCriteria.maxPrix && filterCriteria.maxPrix !== null) {
                    matchesCriteria = matchesCriteria && bouquet.prix <= filterCriteria.maxPrix;
                }

                // Vérifier si une taille a été fournie et si oui, si le bouquet correspond à cette taille
                if (filterCriteria.taille && filterCriteria.taille !== '') {
                    matchesCriteria = matchesCriteria && bouquet.taille.toLowerCase() === filterCriteria.taille.toLowerCase();
                }

                if (filterCriteria.type && filterCriteria.type !== '') {
                    matchesCriteria = matchesCriteria && bouquet.type === filterCriteria.type;
                }
                return matchesCriteria;
            });
            console.log(filtered)

            commit('setFilteredBouquets', filtered);
        }

    },

};


export default BouquetInformation;
