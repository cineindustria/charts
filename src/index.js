import angular from 'angular';
import iso from 'angular-isotope';
import ngInfiniteScroll from 'ng-infinite-scroll';

//import {TodoService} from './app/todos/todos';
import {DatasetService} from './app/dataset/dataset';
import {App} from './app/containers/App';
// import {Header} from './app/components/Header';
// import {MainSection} from './app/components/MainSection';
// import {TodoTextInput} from './app/components/TodoTextInput';
// import {TodoItem} from './app/components/TodoItem';
// import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'iso.directives', ngInfiniteScroll])
  .config(routesConfig)
  //.service('todoService', TodoService)
  .service('datasetService', DatasetService)
  .component('app', App)
  // .component('headerComponent', Header)
  // .component('footerComponent', Footer)
  // .component('mainSection', MainSection)
  // .component('todoTextInput', TodoTextInput)
  // .component('todoItem', TodoItem);
