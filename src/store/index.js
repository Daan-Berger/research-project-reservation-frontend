import { createStore } from 'vuex';
import reservation from './modules/reservation';
import payment from './modules/payment';

export default createStore({
  modules: {
    reservation,
    payment
  }
});