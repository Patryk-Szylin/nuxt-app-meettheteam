import Vuex from "vuex";
import NavBar from "./modules/navbar";
import Jobs from "./modules/jobs";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      navbar: NavBar,
      jobs: Jobs
    }
  });
};

export default createStore;
