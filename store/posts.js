export const state = () => ({
  loadedPosts: [],
  singlePost: {}
})

export const mutations = {
  setPosts (state, posts) {
    state.loadedPosts = posts
  },
  setSinglePost (state, post) {
    state.singlePost = post
  }
}

export const actions = {
  setPosts (vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  setSinglePost (vuexContext, posts) {
    vuexContext.commit('setSinglePost', posts)
  }
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  }
}
