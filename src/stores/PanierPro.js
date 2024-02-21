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
        deleteArticle(state, articleId) {
            const index = state.panierPro.findIndex(item => item.id === articleId);
            if (index !== -1) {
                state.panierPro.splice(index, 1);
            }
        }

    },

    actions: {
        addArticleToPanier({ commit }, article) {
            commit('addArticle', article);
        },
        deleteArticleFromPanier({ commit }, articleId) {
            commit('deleteArticle', articleId);
        }
    }
}

export default PanierPro;
