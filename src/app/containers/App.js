import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo} from '../todos/todos';

class AppController {
    constructor(datasetService) {
        this.todos = [initialTodo];
        this.filter = SHOW_ALL;
        this.datasetService = datasetService;
        this.grabs = null;
        this.movie = null;
        this.imageList = [];
        this.displayGrabs();
    }
    displayGrabs() {
        this.datasetService
          .getMovies()
          .then((grabs) => {
            this.grabs = grabs.data
            this.displayImgs()
        })
    }
    setMovie(grab) {
        console.log(this.grabs)
        this.movie = grab
    }
    displayImgs() {
        this.grabs.map((grab) => {
            this.datasetService
              .getImagesByID(grab.id)
              .then((list) => {
                this.imageList[grab.id] = list.data
            })
        })
    }
    paginate() {
        console.log("paginate...")
    }
}
export const App = {
    template: require('./App.html'),
    controller: AppController
};
