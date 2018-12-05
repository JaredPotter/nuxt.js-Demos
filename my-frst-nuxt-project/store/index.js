export const state = () => ({
    user: null
})

export const getters = {
    user(state) {
        return state.user;
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
}

export const actions = {
    login({commit}, {username, password}) {

        if(username == 'username' && password == 'password') {
            commit('setUser', {});
        }
        
    },
    logout({commit}) {
        commit('setUser', null);
    }
}