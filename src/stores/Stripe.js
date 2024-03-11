// Vuex Store (store.js)
import { loadStripe } from "@stripe/stripe-js";

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
        async createSession({ commit, rootGetters }) {
            const stripe = await stripePromise;
            const panierParticulier = rootGetters['PanierParticulier/getPanierparticulier'];

            const sessionInfo = {
                payment_method_types: ['card'],
                line_items: panierParticulier.map(item => ({
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

                const { sessionId } = await response.json();
                commit('SET_SESSION_ID', sessionId);
                return sessionId;
            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        },
        async createSessionPro({ commit, rootGetters }) {
            const stripe = await stripePromise;
            const panierPro = rootGetters['PanierPro/getPanierPro'];

            const sessionInfo = {
                payment_method_types: ['card'],
                line_items: panierPro.map(item => ({
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
                    customerType: 'pro'
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

                const { sessionId } = await response.json();
                commit('SET_SESSION_ID', sessionId);
                return sessionId;


            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        },

        async createSessionBouquetMois({ commit, rootGetters}) {
            const stripe = await stripePromise;
            const bouquetMois = rootGetters['BouquetInformation/getBouquetMois'];
            console.log(bouquetMois)
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
            console.log(sessionInfo)

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

                const { sessionId } = await response.json();
                commit('SET_SESSION_ID', sessionId);
                return sessionId;


            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        }
    }
};

export default stripe;
