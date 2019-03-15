import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // Tempatnya data state (data yg kaya di components)
  	isLogin: false,
  	// userData: {}
  },
  mutations: { // Tempat perubahan data
  	updateLoginStatus(state) {
      state.isLogin = true;
      localStorage.setItem('isLogin', true);
  	},
  },
  actions: { // Untuk merubah data untuk di state nya

  },
});
