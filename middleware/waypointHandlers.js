var waypointListeners = {
  "meet-the-team": TabChangingHandler,
  "page-navigation": NavigationHandler,
  "benefits": TabChangingHandler,
  "current-vacancies": TabChangingHandler
};

var activeClassName = "tabs__item--active";

function TabChangingHandler(element, dir) {
  if (dir == "down") {
    $(`a[href="#${element}"]`)
      .parent()
      .addClass(activeClassName);

    $("a")
      .not(`[href="#${element}"]`)
      .parent()
      .removeClass(activeClassName);
  } else {
    $(`a[href="#${element}"]`).parent().removeClass(activeClassName);
    $(`a[href="#${element}"]`).parent().prev().addClass(activeClassName);
  }
}

function NavigationHandler(element, dir) {
  if (dir == "down") {
    $(`#${element}`).addClass("sticky-nav");
  } else {
    $(`#${element}`).removeClass("sticky-nav");
  }
}

export default {
  waypointListeners,
  TabChangingHandler,
  NavigationHandler
};
