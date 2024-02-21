import Airtable from 'airtable';

// Configurez Airtable avec votre API key et l'ID de base
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patv6DaZVw17S52ax.cfeb828bbcf32ab7dc4316614ea4b8d5efb344c43cedc004c58c08df13480537'
});
const base = Airtable.base('appbmkbokhHog6r1K');


const BouquetInformation = {
    namespaced: true,
    state: {
        AllBouquets: []
    },
    getters: {
        getAllBouquet: state => state.AllBouquets,
        getAllBouquetFraiche: state => state.AllBouquets.filter(bouquet => bouquet.type === "fleurs-fraiche"),
        getAllBouquetSechee: state => state.AllBouquets.filter(bouquet => bouquet.type === "fleurs-sechee"),
    },
    mutations: {
        setAllBouquets(state, bouquetObject) {
            state.AllBouquets = bouquetObject;
        }
    },
    actions: {
        allBouquet({ commit }) {
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
                    quantiteAchat:0,
                    image:record.get('image')
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
    }
};


export default BouquetInformation;
