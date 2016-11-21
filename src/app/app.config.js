export function moduleconfig($routeProvider) {
  $routeProvider.when('/list', {
    template: require('./contacts-list/contacts-list.html')
  });
  $routeProvider.otherwise({
    redirectTo:'/list'
  });

}
