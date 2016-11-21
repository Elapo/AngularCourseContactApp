import {ContactsListController} from './contacts-list/contacts-list.controller';
import {ContactsAddController} from './contacts-add/contacts-add.controller';
import {ContactsDetailsController} from './contacts-details/contacts-details.controller';

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
  $routeProvider.when('/details/:contactId', {
    template: require('./contacts-details/contacts-details.html'),
    controller:ContactsDetailsController,
    controllerAs:'ctrl'
  });
  $routeProvider.otherwise({
    redirectTo:'/list'
  });

}
