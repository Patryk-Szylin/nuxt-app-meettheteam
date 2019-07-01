<template>
  <div class="container">
    <Header/>
    <Nav/>
    <Overview/>
    <Profile/>
    <Benefits/>
    <Vacancies/>
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

export default {
  components: {
    Logo,
    Header,
    Nav,
    Overview,
    Profile,
    Benefits,
    Vacancies
  }
};
</script>

<style>
</style>
