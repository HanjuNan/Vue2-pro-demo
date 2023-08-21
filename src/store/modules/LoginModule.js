export default {
    namespaced: true,
    state: () => {
        return {
            userinfo : {
                user: '',
                token: '',
                isLogin: false
            }
        }
    },
    mutations: {
        // 存储用户信息
        setUserinfo(state, payload) {
            state.userinfo = payload
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}