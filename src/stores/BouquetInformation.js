import Airtable from 'airtable';
import axios from "axios";
import bouquetDuMois from "@/components/BouquetDuMois.vue";

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
            tabTaille: [],
            tabType: [],
            bouquetDuMois: {}
        },
        getters: {
            getAllBouquet: state => state.AllBouquets,
            getAllBouquetFraiche: state => state.AllBouquets.filter(bouquet => bouquet.type === "Fleurs fraiches"),
            getAllBouquetSechee: state => state.AllBouquets.filter(bouquet => bouquet.type === "Fleurs séchées"),
            getFilteredBouquets: state => {
                // Retourne les bouquets filtrés s'il y en a, sinon retourne tous les bouquets
                return state.FilteredBouquets.length > 0 ? state.FilteredBouquets : state.AllBouquets;
            },
            getTabTaille: state => state.tabTaille,
            getTabType: state => state.tabType,
            getBouquetMois:state => state.bouquetDuMois
        },
        mutations: {
            setAllBouquets(state, bouquetObject) {
                state.AllBouquets = bouquetObject;
            },
            setFilteredBouquets(state, filteredBouquets) {
                state.FilteredBouquets = filteredBouquets;
            },
            setTabTaille(state, taille) {
                state.tabTaille = taille;
            },
            setTabType(state, type) {
                state.tabType = type;
            },
            setBouquetDuMois(state, bouquetDuMois) {
                state.bouquetDuMois = bouquetDuMois;
            },
        },
        actions: {
            allBouquet({commit}) {
                let uniqueTaille = new Set(); // Initialise un Set vide pour les couleurs uniques
                let uniqueType = new Set(); // Initialise un Set vide pour les couleurs uniques

                base('Bouquet').select({
                    view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                    const bouquetsData = records.map(record => {
                        const taille = record.get('taille');
                        const type = record.get('type');
                        if (taille) {
                            uniqueTaille.add(taille);
                        }
                        if (type) {
                            uniqueType.add(type);
                        }

                        return {
                            id: record.id,
                            nom: record.get('nom'),
                            type: type,
                            prix: record.get('prix'),
                            quantite: record.get('quantite'),
                            taille: taille,
                            quantiteAchat: 1,
                            image: record.get('image'),
                            text:record.get('text'),
                        }
                    });
                    commit('setAllBouquets', bouquetsData);
                    commit('setTabTaille', Array.from(uniqueTaille));
                    commit('setTabType', Array.from(uniqueType));
                    commit('setBouquetDuMois', bouquetsData.find(bouquetDuMois => bouquetDuMois.type === "Bouquet du mois"));


                    fetchNextPage();
                } , function done(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            },

            filter({commit, state}, {taille, maxPrix, type}) {
                const filtered = state.AllBouquets.filter(bouquet => {
                    let isValid = true;


                    if (maxPrix && bouquet.maxPrix > maxPrix) {
                        isValid = false;
                    }

                    if (taille && taille !== '' && bouquet.taille !== taille) {
                        isValid = false;
                    }
                    if (type && type !== '' && bouquet.type !== type) {
                        isValid = false;
                    }

                    return isValid;
                });

                commit('setFilteredBouquets', filtered);
            },
            updateQuantiteAchat({ commit, state }, { quantiteAchat }) {
                // Créer une copie de l'objet bouquetDuMois pour éviter les mutations directes de l'état
                const updatedBouquetDuMois = { ...state.bouquetDuMois, quantiteAchat: quantiteAchat };
                // Utiliser la mutation pour mettre à jour l'état
                commit('setBouquetDuMois', updatedBouquetDuMois);
            }
        },


    };


export default BouquetInformation;
