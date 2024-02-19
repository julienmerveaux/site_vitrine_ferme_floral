import Airtable from 'airtable';

// Configurez Airtable avec votre API key et l'ID de base


const PanierParticulier = {
    namespaced: true,
    state: {
        panierParticulier: []
    },
    getters: {
        getPanierparticulier: state => state.panierParticulier,

    },
    mutations: {
        addArticle(state, article) {
            const articleExistant = state.panierParticulier.find(i => i.id === article.id);
            if (articleExistant) {
                articleExistant.quantiteAchat += 1;
            } else {
                state.panierParticulier.push({...article, quantiteAchat: 1});
            }
        },

    },

    actions: {
        addArticleToPanier({ commit }, article) {
            commit('addArticle', article);
        }
    }
}

export default PanierParticulier;
