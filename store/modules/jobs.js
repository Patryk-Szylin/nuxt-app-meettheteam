import mapper from "../../services/mappers/contentMapper";
var axios = require("axios");

const state = {
    jobsAvailable: [],
    jobs: []

};
const mutations = {
    SET_AVAILABLE_JOBS: function (state, payload) {
        state.jobsAvailable = payload;
    },
    SET_JOBS: function (state, payload) {
        state.jobs = payload;
    }
};

const actions = {
    assignAvailableJobs({ commit }, payload) {
        commit("SET_AVAILABLE_JOBS", payload);
    },
    assignJobsByFilter({ commit, state }, payload) {
        var filteredJobs = [];

        if (payload == "All") {
            filteredJobs = state.jobsAvailable;
        } else {
            filteredJobs = state.jobsAvailable.filter(job => {
                return job.role == payload;
            });
        }

        commit("SET_JOBS", filteredJobs);

    },
    async fetchCurrentJobs({ commit }) {
        var jobsAvailable = await axios
            .get("http://localhost:3001/content")
            .then(res => {
                var jobs = mapper.MapContentToResults(res);
                commit("SET_AVAILABLE_JOBS", jobs)
            }).catch((err) => {
                console.log(err);
            });
        return jobsAvailable;
    }

};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
};
