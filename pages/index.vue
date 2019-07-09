<template>
  <div class="container">
    <Header />
    <Nav />
    <Overview />
    <Profile />
    <Benefits />
    <Vacancies />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";
import Nav from "~/components/Nav.vue";
import Overview from "~/components/Overview.vue";
import Profile from "~/components/Profile.vue";
import Benefits from "~/components/Benefits.vue";
import Vacancies from "~/components/Vacancies.vue";
import jobsService from "../services/jobDetails";

export default {
  components: {
    Logo,
    Header,
    Nav,
    Overview,
    Profile,
    Benefits,
    Vacancies
  },
  created() {
    this.$store.dispatch("assignAvailableJobs", jobsService.jobs);
    this.$store.dispatch("assignJobsByFilter", "All");
  },
  mounted() {}
};
</script>

<style>
</style>
