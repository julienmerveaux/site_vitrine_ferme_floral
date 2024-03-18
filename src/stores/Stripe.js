// Vuex Store (store.js)
import {loadStripe} from "@stripe/stripe-js";

// Initialisez stripePromise une seule fois, pas dans le state de Vuex
const stripePromise = loadStripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');

const stripe = {
    namespaced: true,
    state: {
        sessionId: null,
        sessionIdPro: null,
    },
    getters: {
        stripeInstance: () => stripePromise,
    },
    mutations: {
        SET_SESSION_ID(state, sessionId) {
            state.sessionId = sessionId;
        },
        SET_SESSION_ID_PRO(state, sessionId) {
            state.sessionIdPro = sessionId;
        },
    },
    actions: {
        async createSession({commit, rootGetters}, adresse_livraison) {
            const panier = rootGetters['PanierParticulier/getPanierparticulier'];

            try {
                const response = await fetch('http://localhost:3000/create-stripe-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({panier, adresse_livraison}),
                });

                if (!response.ok) {
                    throw new Error('Failed to create Stripe session');
                }

                const {sessionId} = await response.json();
                commit('SET_SESSION_ID', sessionId);
                return sessionId;
            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        }
        ,
        async createSessionPro({commit, rootGetters}, adresse_livraison) {

            const panier = rootGetters['PanierPro/getPanierPro'];

            try {
                const response = await fetch('http://localhost:3000/create-stripe-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({panier, adresse_livraison}),
                });
                if (!response.ok) {
                    throw new Error('Failed to create Stripe session');
                }

                const {sessionId} = await response.json();
                commit('SET_SESSION_ID_PRO', sessionId);
                return sessionId;
            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        },

        async createSessionBouquetMois({commit, rootGetters}) {
            const stripe = await stripePromise;
            const bouquetMois = rootGetters['BouquetInformation/getBouquetMois'];
            const sessionInfo = {
                payment_method_types: ['card'],
                line_items: bouquetMois.map(item => ({
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: item.nom,
                        },
                        unit_amount: item.prix * 100,
                    },
                    quantity: item.quantiteAchat,
                })),
                mode: 'payment',
                success_url: 'http://localhost:5173/success',
                cancel_url: 'http://localhost:5173/cancel',
                metadata: {
                    customerType: 'particulier'
                }
            };

            // Ici, vous appelez votre API pour créer la session Stripe
            try {
                const response = await fetch('http://localhost:3000/create-stripe-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sessionInfo),
                });

                if (!response.ok) {
                    throw new Error('Failed to create Stripe session');
                }

                const {sessionId} = await response.json();
                commit('SET_SESSION_ID', sessionId);
                return sessionId;


            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        },
    }
};

export default stripe;
