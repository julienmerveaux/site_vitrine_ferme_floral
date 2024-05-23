import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, updatePassword
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import db from "@/Firebase.js";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import router from "@/router/index.js";
import axios from "axios";
// const {isAgriculturalCompany} = require("../../function.js");

const auth = getAuth();


const UsersInformation = {
    namespaced:true,
    state: {
        userId: null,
        currentUser: {},
        isConnected:false,
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setCurrentUser(state, userData) {
            state.currentUser = userData;
        },
        'clearUserState'(state) {
            state.userId = null;
            state.currentUser = {};
        },
        setIsConnected(state, isConnected) {
            state.isConnected = isConnected;
        },

    },
    getters: {
        getCurrentUser: (state) => {
            return state.currentUser
        },
        getIsConnected: (state) => {
            return state.isConnected
        },
        getHistoriqueCommandes: (state) => {
            return state.currentUser.commandes;
        },
        getHistoriqueAbonnements: (state) => {
            return state.currentUser.abonnement;
        }
    },
    actions: {
        async changePassword({ commit }, newPassword) {
            console.log(newPassword)
            try {
                const user = auth.currentUser;
                if (user) {
                    await updatePassword(user, newPassword);
                    // Mettre à jour localement si nécessaire
                    // Par exemple, vous pouvez vider l'état de l'utilisateur actuel
                    commit('clearUserState');
                    // Vous pouvez également gérer la redirection vers une page appropriée ici
                    // et toute autre logique nécessaire après le changement de mot de passe réussi
                    return Promise.resolve("Mot de passe modifié avec succès !");
                } else {
                    return Promise.reject(new Error("Aucun utilisateur connecté."));
                }
            } catch (error) {
                console.error("Erreur lors du changement de mot de passe :", error);
                return Promise.reject(error);
            }
        },
        async deleteAbo({ commit, rootGetters }, info) {
            try {
                const user = rootGetters['UsersInformation/getCurrentUser'];
                console.log(user)
                const infoAbo = {
                    idAbonnement:info.idAbonnement,
                    userId:user.userId
                }
                console.log(info)
                // Remplacez cette URL par l'endpoint correct de votre API
                const response = await fetch(`https://api.les-5-saisons.fr/deleteAbo/${info.idAbonnement}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({infoAbo}),
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'annulation de l\'abonnement');
                }
                console.log("salut")
                // Traitement supplémentaire si nécessaire
            } catch (error) {
                console.error("Erreur dans annulerAbonnementAction", error);
                throw error;
            }
        },
        initAuthState({ commit }) {
            const auth = getAuth();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    // L'utilisateur est connecté, récupérez ses informations
                    const userDocRef = doc(db, "users", user.uid);
                    const userDocSnapshot = await getDoc(userDocRef);
                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        commit('setCurrentUser', userData);
                        commit('setIsConnected', true);
                        commit('setUserId', user.uid);
                    } else {
                        // Gérer le cas où il n'y a pas de données utilisateur dans Firestore
                        console.log("Données utilisateur non trouvées dans Firestore.");
                    }
                } else {
                    // L'utilisateur est déconnecté, nettoyez l'état
                    commit('clearUserState');
                }
            });
        },
        async loginUser({commit}, {email, password}) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                commit('setUserId', userCredential.user.uid);

                const userDocRef = doc(db, "users", userCredential.user.uid);
                const userDocSnapshot = await getDoc(userDocRef);
                // Vérifier si le document existe et mettre à jour le state avec les données de l'utilisateur
                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    commit('setCurrentUser', userData);
                    commit('setIsConnected', true);
                    // Utilisation de router.push ici pourrait ne pas être idéale. Retournez plutôt une valeur ou une promesse résolue pour gérer la navigation dans le composant.
                    return Promise.resolve();
                } else {
                    console.log("Aucun document utilisateur trouvé!");
                    // Gérer le cas où l'utilisateur est authentifié mais non enregistré dans Firestore
                    // Peut-être retourner une erreur spécifique ou rejeter une promesse
                    return Promise.reject(new Error("Aucun document utilisateur trouvé!"));
                }
            } catch (error) {
                // Propager l'erreur pour pouvoir l'attraper dans le composant appelant
                console.error("Erreur lors de la connexion :", error);
                return Promise.reject(error);
            }
        },

        async loginUserWithGoogle({ commit }) {
            try {
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                await router.push("/");

                const userDocRef = doc(db, "users", result.user.uid);
                // Récupérer les informations de l'utilisateur

                const userData = {
                    email: result.user.email,
                    name: result.user.displayName,
                    type: "particulier",
                    connectionWith:"google",
                    createdAt:Date.now()
                };
                await setDoc(userDocRef, userData);
                // Mettre à jour le state avec les informations de l'utilisateur
                commit('setCurrentUser', userData);
                commit('setIsConnected', true);

                // Redirection vers une page appropriée, si nécessaire

                return Promise.resolve();
            } catch (error) {
                console.error("Erreur lors de la connexion avec Google:", error);
                return Promise.reject(error);
            }
        },

        async logout({ commit }) {
            try {
                const auth = getAuth();
                await signOut(auth);
                localStorage.removeItem('panierParticulier'); // ou sessionStorage.removeItem('panierParticulier');
                localStorage.removeItem('panierPro'); // ou sessionStorage.removeItem('panierParticulier');
                commit('PanierParticulier/clearPanier', null, { root: true });
                commit('PanierPro/clearPanier', null, { root: true });
                commit('clearUserState');
                commit('setIsConnected',false)
            } catch (error) {
                console.error("Erreur lors de la déconnexion :", error);
            }
        },
        async registerUserParticulier({ commit }, { name, firstname, email, password, siret, type, nom_entreprise }) {
            try {
                // const res = await isAgriculturalCompany(siret); // Ajoutez await ici
                const dataUser = await createUserWithEmailAndPassword(auth, email, password);
                console.log(dataUser)
                await router.push("/");

                const userDocRef = doc(db, "users", dataUser.user.uid);

                const userDocData = {
                    userId:dataUser.user.uid,
                    name: name,
                    firstname: firstname,
                    siret: siret,
                    email: dataUser.user.email,
                    type: type,
                    nom_entreprise:nom_entreprise,
                    connectionWith:"motDePasse",
                    commandes:[],
                    abonnement:[],
                    createdAt:Date.now()
                };

                await setDoc(userDocRef, userDocData);

                commit('setUserId', dataUser.user.uid);
                commit('setCurrentUser', userDocData);


                // Connexion de l'utilisateur après son inscription
                await signInWithEmailAndPassword(auth, email, password);

                commit('setIsConnected', true);


            } catch (error) {
                console.error("Erreur lors de la création de l'utilisateur:", error);
            }
        },
        submitForm({ commit }, formData) {
            axios.post('/api/submit-form', formData)
                .then(response => {
                    commit('FORM_SUBMITTED', response.data);
                })
                .catch(error => {
                    commit('FORM_SUBMIT_FAILED', error);
                });
        }
    },
};

export default UsersInformation;
