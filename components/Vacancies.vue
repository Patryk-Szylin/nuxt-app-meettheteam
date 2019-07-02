<template>
  <div>
    <!-- Current Vacancies #current-vacancies  -->
    <div class="content-section row" id="current-vacancies">
      <div class="container">
        <h2>Current Vacancies</h2>

        <div class="vacancy">
          <div class="vacancy__thumb">
            <img src="~/assets/thumbs/job-php-development.jpg" alt />
          </div>
          <div class="vacancy__summary">
            <div class="vacancy__title">
              <h3>Web Developer</h3>
              <span>Thornaby, Stockton-on-Tees</span>
            </div>
            <p>
              We have a fantastic opportunity for a talented Web Developer to
              join a new creative team and help take an already established
              brand to a new level. Under the direction of the Brand Manager
              and working closely with a Digital Designer, you will be
              responsible for the development and technical integration of our
              key marketing platforms including e.g. Wordpress, Facebook and
              Email.
            </p>
            <a
              class="btn btn--primary"
              href="https://tuijobsuk.co.uk/job-details.php?nPostingTargetID=45273"
              target="_blank"
            >Find out more</a>
          </div>
        </div>

        <div class="vacancy">
          <div class="vacancy__thumb">
            <img src="~/assets/thumbs/job-testing.jpg" alt />
          </div>
          <div class="vacancy__summary">
            <div class="vacancy__title">
              <h3>Software Tester</h3>
              <span>Thornaby, Stockton-on-Tees</span>
            </div>
            <p>
              Joining the Retail Websites team in Thornaby-on-Tees, as a
              Software Tester, you will be responsible for testing the retail
              websites and back office applications.
            </p>
            <a
              class="btn btn--primary"
              href="https://tuijobsuk.co.uk/job-details.php?nPostingTargetID=45267"
              target="_blank"
            >Find out more</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Vacancies #current-vacancies  -->
    <div class="row" id="get-in-touch">
      <div class="container">
        <div class="blurb">
          <h3>Where we're based</h3>
          <p>
            Holiday Hypermarket
            <br />Dunedin House
            <br />Columbia Drive
            <br />Thornaby
            <br />Stockton-on-Tees
            <br />TS17 6BJ
          </p>
          <a
            class="btn btn--primary"
            href="https://www.google.com/maps/place/Thornaby,+Stockton-on-Tees+TS17+6BJ"
            target="_blank"
          >Find us on Google Maps</a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.3025675156614!2d-1.3110921841153151!3d54.56341898025216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e92e38fee1619%3A0x4226b7cfa3faa544!2sThornaby%2C+Stockton-on-Tees+TS17+6BJ!5e0!3m2!1sen!2suk!4v1561974488618!5m2!1sen!2suk"
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    };
  }
  // computed: {
  //   content: function() {
  //     return this.getContent();
  //   }
  // },
  // methods: {
  //   async getContent() {
  //     console.log("djisajd");
  //     const results = await this.$axios
  //       .$get(
  //         "https://cdn.contentful.com/spaces/05dm8wov7m1i/environments/master/entries?access_token=vups_72apQaJaURGtK5xcTt_UE1jMwwBApSQCQhX3Io"
  //       )
  //       .then(data => {
  //         console.log("finished");
  //       });
  //     return results;
  //   }
  // }
};
</script>

<style lang="scss">
.vacancy {
  padding-bottom: 32px;
  margin-bottom: 32px;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &__thumb {
    float: left;
    width: 367px;
    height: 200px;
    margin-right: 32px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    img {
      width: 100%;
    }

    @media (max-width: 530px) {
      float: none;
      width: 100%;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  &__summary {
    float: none;
    width: auto;
    overflow: hidden;
  }
  &__title {
    h3 {
      margin-bottom: 8px;
    }
    span {
      display: block;
      margin-bottom: 16px;
    }
  }
  p {
    padding-right: 24px;
    font-size: 105%;
  }
}
</style>