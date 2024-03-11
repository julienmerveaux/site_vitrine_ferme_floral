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
            localStorage.setItem('panierParticulier', JSON.stringify(state.panierParticulier));
        },
        setPanier(state, panier) {
            state.panierParticulier = panier;
        },
        clearPanier(state) {
            state.panierParticulier = [];
            state.totalPricePanier = 0;
        },
    },
    actions: {
        addArticleToPanier({ commit }, article) {
            console.log(article,"article")
            commit('addArticle', article);
        },
        initializePanier({ commit }) {
            const savedPanier = localStorage.getItem('panierParticulier');
            if (savedPanier) {
                commit('setPanier', JSON.parse(savedPanier));
            }
        },
    }
};

export default PanierParticulier;
