const PanierPro = {
    namespaced: true,
    state: {
        panierPro: []
    },
    getters: {
        getPanierPro: state => state.panierPro,

    },
    mutations: {
        addArticle(state, article) {
            const articleExistant = state.panierPro.find(i => i.id === article.id);
            if (articleExistant) {
                articleExistant.quantiteAchat += 1;
            } else {
                state.panierPro.push({...article, quantiteAchat: 1});
            }
        },

    },

    actions: {
        addArticleToPanier({ commit }, article) {
            commit('addArticle', article);
        }
    }
}

export default PanierPro;
