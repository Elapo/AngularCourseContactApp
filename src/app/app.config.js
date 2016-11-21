import {ContactsListController} from './contacts-list/contacts-list.controller';
import {ContactsAddController} from './contacts-add/contacts-add.controller'

export function moduleconfig($routeProvider) {
  $routeProvider.when('/list', {
    template: require('./contacts-list/contacts-list.html'),
    controller:ContactsListController,
    controllerAs:'ctrl'
  });
  $routeProvider.when('/add', {
    template: require('./contacts-add/contacts-list-add.html'),
    controller:ContactsAddController,
    controllerAs:'ctrl'
  });
  $routeProvider.otherwise({
    redirectTo:'/list'
  });

}
