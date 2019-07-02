<template>
  <div>
    <!-- Benefits #benefits -->
    <div class="content-section row" id="benefits">
      <div class="container">
        <h2>Benefits</h2>

        <ul>
          <li class="header">Financial</li>
          <li>Competitive salary</li>
          <li>Holiday concession</li>
          <li>Staff holiday offers</li>
          <li>Company pension</li>
          <li>Discount shopping & cashback benefits</li>
          <li>Company share scheme</li>
        </ul>
        <ul>
          <li class="header">Personal &amp; Professional Development</li>
          <li>MSDN subscription</li>
          <li>Built in training time</li>
          <li>Project autonomy</li>
          <li>Best practice Agile methodologies</li>
          <li>Induction program</li>
        </ul>
        <ul>
          <li class="header">Environment</li>
          <li>Free secure onsite parking</li>
          <li>Air conditioned offices</li>
          <li>Close to town centre</li>
          <li>Bi-annual parties</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#benefits {
  background: #002e60;
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 6rem 1rem 3.5rem;
  }

  .container {
    overflow: hidden;
  }

  ul {
    float: left;
    width: 33.33%;
    font-size: 95%;

    @media (max-width: 530px) {
      float: none;
      width: 100%;
      padding: 0 0 1.5rem 0;
    }
    li {
      display: block;
      clear: both;
      line-height: 1.5rem;

      &:not(.header) {
        position: relative;
        padding-left: 1.5rem;

        &:before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1.5rem;
          height: 1.5rem;
          background-size: 1rem 1rem;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url("../assets/tick_018ada.svg");
          content: " ";
        }
      }
      &.header {
        font-weight: bold;
      }
    }
  }
}
</style>