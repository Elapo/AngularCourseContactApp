import 'materialize-css/dist/css/materialize.css';
import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import './index.css';

import angular from 'angular'; //library compatibility

import 'angular-i18n/angular-locale_nl-be';

import appModule from './app/app.module';

angular.bootstrap(document, [appModule]);
