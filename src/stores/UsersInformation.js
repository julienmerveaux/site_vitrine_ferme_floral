import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
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
                await router.push("/")
                commit('setUserId', userCredential.user.uid);

                const userId = doc(db, "users", userCredential.user.uid);
                const userWithId = await getDoc(userId);
                // Vérifier si le document existe et mettre à jour le state avec les données de l'utilisateur
                if (userWithId.exists()) {
                    commit('setCurrentUser', userWithId.data());
                    commit('setIsConnected',true)
                    console.log('Bien connecté ! ',userWithId.data())
                } else {
                    console.log("Aucun document utilisateur trouvé!");
                }
            } catch (error) {
                console.error("Erreur lors de la connexion :", error);
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
        registerUserParticulier({ commit }, { name, firstname, email, password, siret, type }) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((dataUser) => {
                    // Ici, utilisez l'UID comme clé pour le nouveau document Firestore.
                    const userDocRef = doc(db, "users", dataUser.user.uid);

                    // Préparez les données de l'utilisateur à enregistrer.
                    const userDocData = {
                        name: name,
                        firstname: firstname,
                        siret: siret,
                        email: dataUser.user.email, // Utilisez l'email fourni par l'authentification
                        type: type
                    };

                    // Ajoutez le document avec l'UID comme clé dans Firestore.
                    setDoc(userDocRef, userDocData)
                        .then(() => {
                            commit('setUserId', dataUser.user.uid);
                            commit('setCurrentUser', userDocData);
                            console.log("Utilisateur enregistré dans Firestore avec l'UID:", dataUser.user.uid);
                        })
                        .catch((error) => {
                            console.error("Erreur lors de l'ajout du document utilisateur:", error);
                        });
                })
                .catch((error) => {
                    console.error("Erreur lors de la création de l'utilisateur:", error);
                });
        },
    },
};

export default UsersInformation;
