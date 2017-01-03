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
    getImagesByID(id) {
        return this.$http({
            method: 'GET',
            url: './app/dataset/images-list/' + id + '.json'
        })
    }
}
