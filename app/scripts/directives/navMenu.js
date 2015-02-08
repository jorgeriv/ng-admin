'use strict';

/**
 * @ngdoc function
 * @name oddsApp.directive:nav-menu
 * @description
 * # navMenu directive
 * Directive of the navMenu
 */
angular.module('gymApp')
.directive('navMenu', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
        onClass = attrs.navMenu || 'on',
        routePattern,
        link,
        url,
        currentLink,
        urlMap = {},
        i;

    if (!$location.$$html5) {
      routePattern = /^#[^/]*/;
    }

    for (i = 0; i < links.length; i++) {
      link = angular.element(links[i]);
      url = link.attr('href');

      if ($location.$$html5) {
        urlMap[url] = link;
      } else {
        urlMap[url.replace(routePattern, '')] = link;
      }
    }

    scope.$on('$routeChangeStart', function() {
      var pathLink = urlMap[$location.path()];

      if (pathLink) {
        if (currentLink) {
          currentLink.parent().removeClass(onClass);
        }
        currentLink = pathLink;
        currentLink.parent().addClass(onClass);
      }
    });
  };
});
