const PanierParticulier = {
    namespaced: true,
    state: {
        panierParticulier: [],
        totalPricePanier: 0
    },
    getters: {
        getPanierparticulier: state => state.panierParticulier,
        getTotalPrice: state => {
            return state.panierParticulier.reduce((total, article) => {
                return total + (article.prix * article.quantiteAchat);
            }, 0);
        }
    },
    mutations: {
        addArticle(state, article) {
            const articleExistant = state.panierParticulier.find(i => i.id === article.id);
            if (articleExistant) {
                articleExistant.quantiteAchat += article.quantiteAchat;
            } else {
                state.panierParticulier.push({...article});
            }
        }
    },
    actions: {
        addArticleToPanier({ commit }, article) {
            commit('addArticle', article);
        }
    }
};

export default PanierParticulier;
