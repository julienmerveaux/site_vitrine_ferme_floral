import Airtable from 'airtable';
import axios from "axios";

// Configurez Airtable avec votre API key et l'ID de base
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patv6DaZVw17S52ax.cfeb828bbcf32ab7dc4316614ea4b8d5efb344c43cedc004c58c08df13480537'
});
const base = Airtable.base('appbmkbokhHog6r1K');


const BlogsInformations = {
    namespaced: true,
    state: {
        allBlogs: [],
        blogs_UNE: [],
        FilteredBlogs: [],
        tabType: [],
        currentBlogs: {}

    },
    getters: {
        getAllBlogs: state => state.allBlogs,
        getBlogsUne: state => state.blogs_UNE,
        getFilteredBlogs: state => {
            // Retourne les bouquets filtrés s'il y en a, sinon retourne tous les bouquets
            return state.FilteredBlogs.length > 0 ? state.FilteredBlogs : state.allBlogs;
        },
        getTabType: state => state.tabType,
        getCurrentBlogs: state => state.currentBlogs
    },
    mutations: {
        setAllBlogs(state, blogs) {
            state.allBlogs = blogs
        },
        setBlogsUne(state, blogsUne) {
            state.blogs_UNE = blogsUne
        },
        setFilteredBlogs(state, filteredBlogs) {
            state.FilteredBlogs = filteredBlogs;
        },
        setTabType(state, type) {
            state.tabType = type;
        },
        setCurrentBlog(state, info) {
            console.log(info)
            state.currentBlogs = info;
        },
    },
    actions: {
        allBlogs({commit}) {
            let uniqueType = new Set(); // Initialise un Set vide pour les couleurs uniques
            base('Blogs').select({
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                const blogsData = records.map(record => {

                    const type = record.get('Type');
                    console.log(type)
                    if (type) {
                        uniqueType.add(type);
                    }
                    return {
                        id: record.id,
                        Titre: record.get('Titre'),
                        Text: record.get('Text'),
                        Image_couverture: record.get('Image_couverture'),
                        Temps_lecture: record.get('Temps_lecture'),
                        Date: record.get('Date'),
                        A_la_une: record.get('A_la_une'),
                        Nombre_vu: record.get('Nombre_vu'),
                        Type: type,
                        Titre_url: record.get("Titre_URL")
                    };
                });

                commit('setTabType',  Array.from(uniqueType));
                commit('setBlogsUne', blogsData.find(blogsUne => blogsUne.A_la_une === true));
                commit('setAllBlogs', blogsData);

                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        }
,
        updateNombreVue({commit}, articleId) {
            base('Blogs').find(articleId, function(err, record) {
                if (err) {
                    console.error(err);
                    return;
                }

                let currentViews = record.get('Nombre_vu');
                console.log(currentViews, "nombre de vue actuelle");

                // Incrémenter le nombre de vues
                let newViews = currentViews + 1;

                base('Blogs').update([
                    {
                        id: articleId,
                        fields: {
                            'Nombre_vu': newViews
                        }
                    }
                ], function (err, records) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("Nombre de vues mis à jour pour l'article", articleId);
                });
            });
        }
,
        filter({commit, state}, {type}) {
            const filtered = state.allBlogs.filter(blogs => {
                let isValid = true;

                if (type && type !== '' && blogs.Type.toLowerCase() !== type.toLowerCase()) {
                    isValid = false;
                }
                return isValid;
            });
            commit('setFilteredBlogs', filtered);
        },
        setCurrentBlogs({ commit }, blog) {
            console.log(blog);
            commit('setCurrentBlog', blog);
            // Stocker les informations de blog dans localStorage
            localStorage.setItem('currentBlog', JSON.stringify(blog));
        },


    },

};


export default BlogsInformations;
