var waypointListeners = {
  "meet-the-team": MeetTheTeamHander,
  "page-navigation": NavigationHandler,
  "benefits": BenefitsHandler,
  "current-vacancies": VacanciesHandler
};

var activeClassName = "tabs__item--active";

function MeetTheTeamHander(element, dir) {
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

function BenefitsHandler(element, dir) {
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

function VacanciesHandler(element, dir) {
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
  MeetTheTeamHander,
  NavigationHandler
};
