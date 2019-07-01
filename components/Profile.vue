<template>
  <div>
    <!-- Meet the Team Section #meet-the-team  -->
    <div class="row" id="meet-the-team">
      <div class="container">
        <h2>Meet the Team</h2>
        <div class="profile">
          <div class="profile__thumb">
            <img src="~/assets/thumbs/job-sales.jpg" alt />
          </div>
          <div class="profile__summary">
            <h3>Sales &amp; Service</h3>
            <p>
              We're a vibrant sales and service team who pride ourselves on
              delivering sales through exceptional service. Our team are
              passionate about the products we sell, and make it their aim to
              provide customers with a friendly and approachable service
              that's sure to leave them smiling.
            </p>
            <blockquote class="profile__quote">
              <p>I'm genuinely happy coming to work every day</p>
              <footer>Laura Pavlou - Sales Advisor</footer>
            </blockquote>
          </div>
        </div>
        <div class="profile">
          <div class="profile__thumb">
            <img src="~/assets/thumbs/shutterstock_279051407.jpg" alt />
          </div>
          <div class="profile__summary">
            <h3>Development</h3>
            <p>
              We've been developing our travel site since 2005 and in that
              time we've had to evolve our team through a number of different
              technologies, methodologies and systems. The things that have
              remained constant and helped us thrive in a sometimes
              challenging industry have been our commitment to learning, our
              supportive team culture and our passion for innovation.
            </p>
            <blockquote class="profile__quote">
              <p>
                We encourage our developers to have their say in our product
                roadmap
              </p>
              <footer>Andrew Harrison - Development Manager</footer>
            </blockquote>
          </div>
        </div>
        <div class="profile">
          <div class="profile__thumb">
            <img src="~/assets/thumbs/marketing.jpg" alt />
          </div>
          <div class="profile__summary">
            <h3>Marketing</h3>
            <p>
              As a digital marketing team, we pride ourselves on being able to
              continually come up with fresh ideas that reflect our brand
              values. It's our enthusiasm and dedication to remaining relevant
              in such a fast-paced industry has helped us to successfully
              re-invent ourselves over the last 15 years.
            </p>
            <blockquote class="profile__quote">
              <p>
                I love working in such a creative environment with great
                people!
              </p>
              <footer>Corie Daniel - Marketing Executive</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobsales: "~/assets/thumbs/dev.jpg"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.profile {
  padding-bottom: 56px;
  margin-bottom: 56px;
  border-bottom: 1px #ddd solid;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media (max-width: 530px) {
    padding-bottom: 32px;
    margin-bottom: 32px;
  }
  &__thumb {
    float: left;
    width: 367px;
    height: 296px;
    margin-right: 32px;

    img {
      width: 100%;
    }

    @media (max-width: 992px) {
      width: 256px;
      height: 200px;
    }
    @media (max-width: 530px) {
      float: none;
      width: 100%;
      height: 200px;
      margin-right: 0;
      margin-bottom: 24px;
      overflow: hidden;
    }
  }
  &__summary {
    float: none;
    width: auto;
    overflow: hidden;
  }
  p {
    padding-right: 24px;
    font-size: 115%;
  }
  &__quote {
    margin: 24px 0;
    position: relative;
    line-height: 120%;
    padding: 24px;
    border-left: 9px solid $secondary-colour;
    background: #fff;

    @media (max-width: 992px) {
      font-size: 120%;
    }

    p {
      margin-bottom: 24px;

      &::after {
        content: "‘’";
        font-size: 8rem;
        color: $secondary-colour;
        position: absolute;
        bottom: 0;
        line-height: 0;
        right: 1.25rem;
        letter-spacing: -0.625rem;
        opacity: 0.25;
      }
    }

    footer {
      color: $secondary-colour;
    }
  }
  &:nth-child(2n + 1) {
    .profile__thumb {
      float: right;
      margin-right: 0;
      margin-left: 32px;

      @media (max-width: 530px) {
        float: none;
        margin-left: 0;
      }
    }
  }
}
</style>