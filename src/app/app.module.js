import angular from 'angular';

import {ContactsListController} from './contacts-lists/contacts-list.controller';

export default angular.module('contactsApp', [])
  .constant('appVersion', "0.0.1")
  .config((appVersion) => {
    console.log("Current application version: " + appVersion);
})
  .controller('ContactsListController', ContactsListController)
//  .controller('ChildController', ($scope) => {})
  .name;
