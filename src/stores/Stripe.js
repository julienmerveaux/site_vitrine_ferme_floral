import {loadStripe} from "@stripe/stripe-js";
import PanierParticulier from "@/stores/PanierParticulier.js";
import UsersInformation from "@/stores/UsersInformation.js";

const stripe = {
    namespaced: true,
    state: {
        sessionId: null,
    },
    getters: {},
    mutations: {
        SET_SESSION_ID(state, sessionId) {
            state.sessionId = sessionId;
        },
    },

    actions: {
        async createSession({commit, rootGetters}) { // Utilisez rootGetters comme deuxième argument
            try {
                const stripe = await loadStripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');

                // Accédez aux getters des autres stores Vuex pour obtenir les informations nécessaires
                const panierParticulier = rootGetters['PanierParticulier/getPanierparticulier'];
                // const currentUser = rootGetters['UsersInformation/getCurrentUser'];
                console.log(panierParticulier)
                const sessionInfo = {
                        payment_method_types: ['card'],
                        line_items: panierParticulier.map(item => ({
                            price_data: {
                                currency: 'eur',
                                product_data: {
                                    name: item.nom,
                                },
                                unit_amount: item.prix * 100, // Prix en centimes
                            },
                            quantity: item.quantiteAchat,
                        })),
                        mode: 'payment',
                        success_url: 'http://localhost:5173/success',
                        cancel_url: 'http://localhost:5173/cancel',
                    };


                console.log(sessionInfo)
                // Appeler l'API pour créer une session Stripe
                const response = await fetch('http://localhost:3000/create-stripe-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sessionInfo),
                });
                console.log(response, "salut")
                if (!response.ok) {
                    throw new Error('Failed to create Stripe session');
                }

                const {sessionId} = await response.json();

                commit('SET_SESSION_ID', sessionId);
                return {sessionId};
            } catch (error) {
                console.error('Error creating session:', error);
                console.log(error)
                throw error;
            }
        }
    }
}

export default stripe;
