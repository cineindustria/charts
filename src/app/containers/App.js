import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo} from '../todos/todos';

class AppController {
  constructor(datasetService) {
    this.todos = [initialTodo];
    this.filter = SHOW_ALL;
    this.datasetService = datasetService
    this.grabs = null
    this.movie = null
    this.displayGrabs();
  }
  displayGrabs(){
    this.datasetService
      .getMovies()
      .then((grabs) => {
        this.grabs = grabs.data
      })
  }
  setMovie(grab){
    this.movie = grab
    this.datasetService
      .getImages(this.movie.id)
      .then((images) => {
        this.imgs = images.data
        console.log(this.imgs)
      })
  }
  paginate(){
    console.log("paginate...")
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
