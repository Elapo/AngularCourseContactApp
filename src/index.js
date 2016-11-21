import 'materialize-css/dist/css/materialize.css';
import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import './index.css';

import angular from 'angular'; //library compatibility

import appModule from './app/app.module';

angular.bootstrap(document, [appModule]);
