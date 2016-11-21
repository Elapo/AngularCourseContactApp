import angular from 'angular';
import ngRoute from 'angular-route';

import {moduleconfig} from './app.config';

export default angular.module('contactsApp', [ngRoute])
  .constant('appVersion', "0.0.1")
  .config((appVersion) => {
    console.log("Current application version: " + appVersion);
})
  .config(moduleconfig)
  .constant('apiUrl', 'https://jsonplaceholder.typicode.com/')
//  .controller('ContactsListController', ContactsListController)
//  .controller('ChildController', ($scope) => {})
  .name;
