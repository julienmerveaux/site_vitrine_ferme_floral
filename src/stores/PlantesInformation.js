import Airtable from 'airtable';
import axios from "axios";

// Configurez Airtable avec votre API key et l'ID de base
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patv6DaZVw17S52ax.cfeb828bbcf32ab7dc4316614ea4b8d5efb344c43cedc004c58c08df13480537'
});
const base = Airtable.base('appbmkbokhHog6r1K');


const PlantesInformation = {
    namespaced: true,
    state: {
        AllFleurs: [],
        FilteredFleurs: [],
        tabColor: [],
    },
    getters: {
        getAllFleurs: state => state.AllFleurs,
        getFilteredFleurs: state => {
            // Retourne les bouquets filtrés s'il y en a, sinon retourne tous les bouquets
            return state.FilteredFleurs.length > 0 ? state.FilteredFleurs : state.AllFleurs;
        },
        getTabColor: state => state.tabColor,


    },
    mutations: {
        setAllFleurs(state, bouquetObject) {
            state.AllFleurs = bouquetObject;
        },
        setFilteredFleurs(state, filteredFleurs) {
            state.FilteredFleurs = filteredFleurs;
        },
        setTabColor(state, color) {
            state.tabColor = color;
        }
    },
    actions: {
        allFleurs({commit}) {
            let uniqueColors = new Set(); // Initialise un Set vide pour les couleurs uniques

            base('CatalogueProfessionnel').select({
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                const bouquetsData = records.map(record => {
                    const couleur = record.get('Couleur');
                    if (couleur) {
                        // Sépare les couleurs et les ajoute au Set
                        couleur.forEach(c => {
                            // Supprime les espaces avant et après chaque couleur
                            uniqueColors.add(c.trim());
                        });
                    }

                    return {
                        id: record.id,
                        nom: record.get('Nom'),
                        couleur: couleur,
                        prix: record.get('Prix'),
                        quantite: record.get('Quantite'),
                        botte: record.get('Botte'),
                        quantiteAchat: 1,
                        image: record.get('Image'),
                        showFleurs: record.get("showFleurs")
                    };
                });
                commit('setAllFleurs', bouquetsData);
                commit('setTabColor', Array.from(uniqueColors)); // Convertit le Set en Array pour le commit

                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        },
        filter({commit, state}, {nom, maxPrix, couleur}) {
            let filteredFleurs = state.AllFleurs.filter(fleur => {
                let matchNom = nom ? fleur.nom.toLowerCase().includes(nom.toLowerCase()) : true;
                let matchPrix = maxPrix ? fleur.prix <= maxPrix : true;
                let matchCouleur = couleur ? fleur.couleur.includes(couleur) : true;

                return matchNom && matchPrix && matchCouleur;
            });

            commit('setFilteredFleurs', filteredFleurs);
        },

        async updateProductQuantity({commit}, {recordId, quantitySold}) {
            try {
                const record = await base('CatalogueProfessionnel').find(recordId);
                const updatedQuantity = record.fields.Quantite - quantitySold;

                await base('CatalogueProfessionnel').update([
                    {
                        id: recordId,
                        fields: {
                            quantite: updatedQuantity
                        }
                    }
                ]);
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la quantité', error);
            }
        },
    },

};


export default PlantesInformation;
