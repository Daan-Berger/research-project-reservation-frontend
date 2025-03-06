const state = {
  paymentMethod: null,
  paymentDetails: {},
};

const mutations = {
  SET_PAYMENT_METHOD(state, method) {
    state.paymentMethod = method;
  },
  SET_PAYMENT_DETAILS(state, details) {
    state.paymentDetails = details;
  },
};

const actions = {
  selectPaymentMethod({ commit }, method) {
    commit('SET_PAYMENT_METHOD', method);
  },
  submitPaymentDetails({ commit }, details) {
    commit('SET_PAYMENT_DETAILS', details);
  },
};

const getters = {
  paymentMethod: (state) => state.paymentMethod,
  paymentDetails: (state) => state.paymentDetails,
};

export default {
  namespaced: true, // Adding namespaced for consistency with reservation module
  state,
  mutations,
  actions,
  getters,
};