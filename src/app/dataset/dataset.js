export class DatasetService {
    constructor($http) {
        this.$http = $http
    }
    getMovies() {
        return this.$http({
            method: 'GET',
            url: './app/dataset/grabs.json'
        })
    }
    getImages(id) {
        return this.$http({
            method: 'GET',
            url: './app/dataset/images/' + id + '.json'
        })
    }
}
