import Airtable from 'airtable';

// Configurez Airtable avec votre API key et l'ID de base
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patv6DaZVw17S52ax.cfeb828bbcf32ab7dc4316614ea4b8d5efb344c43cedc004c58c08df13480537'
});
const base = Airtable.base('appbmkbokhHog6r1K');


const PlantesInformation = {
    namespaced: true,
    state: {
        fleurs: {},
        currentFleur: {},
    },
    getters: {
        getFleurs: state => state.fleurs,
        getCurrentFleur: state => state.currentFleur
    },
    mutations: {
        setFleurs(state, fleursObject) {
            state.fleurs = fleursObject;
        },
        setCurrentFleur(state, fleur) {
            state.currentFleur = fleur;
        }
    },
    actions: {
        allFleurs({ commit }) {
            base('fleursParticulier').select({
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                const fleursData = [];
                records.forEach(function (record) {
                    const fleurData = {
                        id: record.id,
                        titre: record.get('titre'),
                        type: record.get('type'),
                        prix: record.get('prix'),
                    };
                    fleursData.push(fleurData);
                    console.log(fleurData);
                });
                commit('setFleurs', fleursData);
                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        },
        fleurWithId({ commit }, fleurId) {
            base('fleursParticulier').find(fleurId, function (err, record) {
                if (err) {
                    console.error(err);
                    return;
                }
                const fleurDetails = {
                    id: record.id,
                    titre: record.fields.titre,
                    type: record.fields.type,
                    prix: record.fields.prix,
                };
                commit('setCurrentFleur', fleurDetails);
                console.log('Retrieved', record.id);
            });
        }
    }
};

export default PlantesInformation;
