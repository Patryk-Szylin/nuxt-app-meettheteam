const state = {
  currentTab: "Tabbb"
};
const mutations = {
  SET_CURRENT_TAB: function (state, payload) {
    state.currentTab = payload;
  }
};

const actions = {
  selectCurrentTab({ commit }, payload) {
    commit("SET_CURRENT_TAB", payload);
  }
};
const getters = {
  getCurrentTab() {
    return state.currentTab;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
