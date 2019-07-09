<template>
  <div>
    <div class="vacancy">
      <div class="vacancy__thumb">
        <img src="~/assets/thumbs/job-php-development.jpg" alt />
      </div>
      <div class="vacancy__summary">
        <div class="vacancy__title">
          <h3>{{jobName}}</h3>
          <span>Stockton on Tees</span>
        </div>
        <p>
          {{desc}}
          <!-- We have a fantastic opportunity for a talented Web Developer to
          join a new creative team and help take an already established
          brand to a new level. Under the direction of the Brand Manager
          and working closely with a Digital Designer, you will be
          responsible for the development and technical integration of our
          key marketing platforms including e.g. Wordpress, Facebook and
          Email.-->
        </p>
        <a class="btn btn--primary" v-bind:href="`${hrefLink}`" target="_blank">Find out more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobName", "startDate", "hrefLink", "desc"]
};
</script>

<style lang="scss" scoped>
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