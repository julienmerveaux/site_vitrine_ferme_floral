// Vuex Store (store.js)
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";

// Initialisez stripePromise une seule fois, pas dans le state de Vuex
const stripePromise = loadStripe('pk_test_51OmIQjBKIzdgim72RiUzEnydhCDovFYtoiy33c4hR2GFvgo9miJdVLRBBnw3aRR9bfAPyiYTnPxrMBtRA1TSjHsn00AFLYJ6bC');

const stripe = {
    namespaced: true,
    state: {
        sessionId: null,
        sessionIdPro: null,
        sessionIdAbo:null,
        sessionDetails: {},

    },
    getters: {
        stripeInstance: () => stripePromise,
        getSessionDetail:(state) => state.sessionDetails,

    },
    mutations: {
        SET_SESSION_ID(state, sessionId) {
            state.sessionId = sessionId;
        },
        SET_SESSION_ID_PRO(state, sessionId) {
            state.sessionIdPro = sessionId;
        },
        SET_SESSION_ID_ABO(state, sessionId) {
            state.sessionIdAbo = sessionId;
        },
        setSessionDetails(state, details) {
            state.sessionDetails = details;
        },
    },
    actions: {
        async retrieveSessionDetails({ commit }, sessionId) {
            // Faire une requête à l'API pour récupérer les détails de la session avec l'ID de session.
            const response = await axios.get('/retrieve-session-details', { params: { session_id: sessionId } });
            commit('setSessionDetails', response.data);
            return response.data;
        },
        async createSessionAbonnement({commit, rootGetters}, aboInfo) {
            try {
                const user = rootGetters['UsersInformation/getCurrentUser'];

                const response = await fetch('https://api.les-5-saisons.fr/create-stripe-session_abonnement', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user, aboInfo}),
                });
                if (!response.ok) {
                    throw new Error('Failed to create Stripe session');
                }
                const {sessionId} = await response.json();
                commit('SET_SESSION_ID_ABO', sessionId);
                return sessionId;
            } catch (error) {
                console.error('Error creating session:', error);
                throw error;
            }
        },
    }
};

export default stripe;
