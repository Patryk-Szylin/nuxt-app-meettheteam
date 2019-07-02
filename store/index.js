import Vuex from "vuex";
import NavBar from "./modules/navbar";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      navbar: NavBar
    }
  });
};

export default createStore;
