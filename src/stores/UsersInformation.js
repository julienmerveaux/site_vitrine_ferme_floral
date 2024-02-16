import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import db from "@/Firebase.js";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import router from "@/router/index.js";

const auth = getAuth();


const UsersInformation = {
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
        clearUserState(state) {
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
        }
    },
    actions: {
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
                    console.log('Bien connecté !', userData);
                   await router.push("/")
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
                commit('clearUserState');
                commit('setIsConnected',false)
            } catch (error) {
                console.error("Erreur lors de la déconnexion :", error);
            }
        },
        async registerUserParticulier({ commit }, { name, firstname, email, password, siret, type }) {
            try {
                const dataUser = await createUserWithEmailAndPassword(auth, email, password);
                await router.push("/");

                const userDocRef = doc(db, "users", dataUser.user.uid);

                const userDocData = {
                    name: name,
                    firstname: firstname,
                    siret: siret,
                    email: dataUser.user.email,
                    type: type,
                    connectionWith:"motDePasse",
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
    },
};

export default UsersInformation;
