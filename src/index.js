import angular from 'angular';
import iso from 'angular-isotope';
import ngInfiniteScroll from 'ng-infinite-scroll';

import {DatasetService} from './app/dataset/dataset';
import {App} from './app/containers/App';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'iso.directives', ngInfiniteScroll])
  .config(routesConfig)
  .service('datasetService', DatasetService)
  .component('app', App)
