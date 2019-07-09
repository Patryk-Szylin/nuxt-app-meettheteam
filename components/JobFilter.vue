<template>
  <div>
    <ul>
      <li v-bind:key="item" v-for="item in roles">
        <button @click="filterJobsByRole(item)">{{item}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: []
    };
  },
  mounted() {
    var jobRoles = this.$store.state.jobs.jobsAvailable;
    var distinctRoles = [...new Set(jobRoles.map(x => x.role))];
    distinctRoles.push("All");
    this.roles = distinctRoles;
  },
  methods: {
    filterJobsByRole(roleName) {
      this.$store.dispatch("assignJobsByFilter", roleName);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>