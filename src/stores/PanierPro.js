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
                console.log("existant")
                articleExistant.quantiteAchat += article.quantiteAchat;
            } else {
                console.log("created")

                state.panierPro.push({...article});
            }
            localStorage.setItem('panierPro', JSON.stringify(state.panierPro));

        },
        setPanier(state, panier) {
            state.panierPro = panier;
        },
        clearPanier(state) {
            state.panierPro = [];
            state.totalPricePanier = 0;
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
        },
        initializePanier({ commit }) {
            const savedPanier = localStorage.getItem('panierPro');
            if (savedPanier) {
                commit('setPanier', JSON.parse(savedPanier));
            }
        },
    }
}

export default PanierPro;
