<template>
  <div>
    <!-- Page Navigation -->
    <div class="row tabs" id="page-navigation">
      <div class="container">
        <ul class="cont/ent">
          <li class="tabs__item tabs__item--active">
            <a href="#overview">Overview</a>
          </li>
          <li class="tabs__item">
            <a href="#meet-the-team">Meet the Team</a>
          </li>
          <li class="tabs__item">
            <a href="#benefits">Benefits</a>
          </li>
          <li class="tabs__item">
            <a href="#current-vacancies">Current Vacancies</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import WaypointHandlers from "../middleware/waypointHandlers";
export default {
  mounted() {
    // Grab dom references for elements to be waypointed
    var waypointTargets = document.getElementsByClassName("content-section");

    // For each dom element, create a waypoint
    for (var i = 0; i < waypointTargets.length; i++) {
      new Waypoint({
        element: waypointTargets[i],
        handler: function(dir) {
          WaypointHandlers.waypointListeners[this.element.id](
            this.element.id,
            dir
          );
        },
        offset: 141
      });
    }

    // Create waypoint for navigation
    var navbarWaypoint = new Waypoint({
      element: document.getElementById("page-navigation"),
      handler: function(dir) {
        WaypointHandlers.waypointListeners[this.element.id](
          this.element.id,
          dir
        );
      }
    });
  },
  computed: {
    getCurrentTabName() {
      return this.$store.state.navbar.currentTab;
    }
  },
  methods: {
    setSectionWaypoint(sectionid, elements) {
      var _this = this;
      return;
    },
    selectActiveTab(elements) {
      var nav = this.setSectionWaypoint("page-navigation", elements);
      var meetTheTeam = this.setSectionWaypoint("meet-the-team", elements);
      var benefits = this.setSectionWaypoint("benefits", elements);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.tabs {
  position: sticky;
  top: 0;
  height: 5.5rem;
  padding: 0;
  background-color: $primary-colour;
  z-index: 999;

  &.sticky-nav {
    position: fixed;
    width: 100%;
  }

  @media (max-width: 767px) {
    display: none;
  }

  // @media (max-width:530px) {
  //     height:96px;

  // }

  .container {
    border: 0;
  }

  &__item {
    float: left;
    text-align: center;
    line-height: 5.5rem;

    @media (max-width: 530px) {
      width: 50%;
      border-left: none;
    }
    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      color: #fff;
      position: relative;
      top: 0;
      padding: 0 1.42rem;
      border-left: 1px solid transparent;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }
    &--active {
      a {
        background: $secondary-colour;
        line-height: 6.5rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0 0 0.20225rem 0.20225rem;
      }
    }
  }
}
</style>