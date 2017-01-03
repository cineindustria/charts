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
        this.attachImagesToGrab()
      })
  }
  attachImagesToGrab(){
    this.grabs.map((grab) =>{
      this.datasetService
        .getImagesByID(grab.id)
        .then((images) => {
          grab.imgs = images.data
        })
    })
    console.log(this.grabs)
  }
  setMovie(grab){
    console.log(this.grabs)
    this.movie = grab
  }
  paginate(){
    console.log("paginate...")
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
