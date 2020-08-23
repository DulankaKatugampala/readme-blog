import Vue from "vue";
import Vuex from "vuex";
import blogService from "@/services/blogService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPosts: [],
  },
  mutations: {
    SET_BLOGPOSTS(state, data) {
      state.blogPosts = data;
    },
    ADD_BLOGPOSTS(state, data) {
      state.blogPosts.push(data);
    },
  },
  actions: {
    createNewBlogPost({ commit }, data) {
      return blogService.postBlogPost(data).then(() => {
        commit("ADD_BLOGPOSTS", data);
      });
    },
    fetchBlogPosts({ commit }) {
      blogService
        .getBlogPosts()
        .then((response) => {
          commit("SET_BLOGPOSTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    fetchFeaturedPost: state => {
      return state.blogPosts.filter(post => post.featured == 'true');
    }
  },
});
