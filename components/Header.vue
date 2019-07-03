<template>
  <div>
    <!-- Hero Banner Row -->
    <div class="row hero" id="hero-banner">
      <div class="container">
        <h1 class="hero__title headline headline--large">Meet the team</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 0;
  height: 380px;
  background-image: url("../assets/thumbs/dev.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 530px) {
    height: 176px;
  }

  &__title {
    position: absolute;
    bottom: 10%;
  }

  .container {
    width: 100%;
    border: 0;
  }
}
</style>