<template>
  <div>
    <!-- Current Vacancies #current-vacancies  -->
    <div class="content-section row" id="current-vacancies">
      <div class="container">
        <h2>Current Vacancies</h2>
        <p
          class="tui-desc"
        >TUI UK Retail operate Online Travel Agency (OTA) websites which include Holidayhypermarket.co.uk, Latedeals.co.uk, Cruisedeals.co.uk and a range of corporate websites. By joining our North East development team as a Software Developer, you will be involved in the design, development and maintenance of these customer facing websites and the supporting systems using the latest tools from Microsoft MSDN and other leading providers.</p>
        <p>All our websites offer fantastic ATOL protected holidays at guaranteed best online prices. OTA is an exciting and rapidly growing area of the business where team members work together to produce innovative solutions and explore new technologies in order to move the business forward.</p>

        <JobFilter />
        <ul class="jobs">
          <li v-bind:key="item.jobName" v-for="item in getCurrentJobs">
            <Job
              :jobName="item.jobName"
              :startDate="item.startDate"
              :hrefLink="item.hrefLink"
              :desc="item.desc"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mapper from "../services/mappers/contentMapper";
import Job from "../components/SubComponents/Job";
import JobFilter from "./JobFilter";

export default {
  components: {
    Job,
    JobFilter
  },
  computed: {
    getCurrentJobs() {
      return this.$store.state.jobs.jobs;
    },
    filteredJobs() {
      var self = this;

      return;
      // return self.jobs.filter(job => {
      //   return job.role == ;
      // });
    }
  }
};
</script>

<style lang="scss">
.jobs {
  margin-top: 100px;
}

.tui-desc {
  margin-bottom: 10px;
}
</style>