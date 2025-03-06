const state = {
  numberOfPeople: 1,
  selectedDish: 'mussels',
};

const mutations = {
  SET_NUMBER_OF_PEOPLE(state, number) {
    state.numberOfPeople = number;
  },
  SET_SELECTED_DISH(state, dish) {
    state.selectedDish = dish;
  },
};

const actions = {
  updateNumberOfPeople({ commit }, number) {
    commit('SET_NUMBER_OF_PEOPLE', number);
  },
  updateSelectedDish({ commit }, dish) {
    commit('SET_SELECTED_DISH', dish);
  },
};

const getters = {
  getNumberOfPeople: (state) => state.numberOfPeople,
  getSelectedDish: (state) => state.selectedDish,
};

export default {
  namespaced: true, // Add this for better module encapsulation
  state,
  mutations,
  actions,
  getters,
};