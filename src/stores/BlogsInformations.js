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
       allBlogs:[]
    },
    getters: {
       getAllBlogs: state => state.allBlogs
    },
    mutations: {
        setAllBlogs(state, blogs){
            state.allBlogs = blogs
        }
    },
    actions: {
        allBlogs({commit}) {
            base('Blogs').select({
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                const blogsData = records.map(record => {
                    return {
                        id: record.id,
                        Titre: record.get('Titre'),
                        Text: record.get('Text'),
                        Resume: record.get('Resume'),
                        Image_couverture: record.get('Image_couverture'),
                        Image: record.get('Image'),
                        Temps_lecture: record.get('Temps_lecture'),
                    };
                });
                commit('setAllBlogs', blogsData);

                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        },
    },

};


export default BlogsInformations;
