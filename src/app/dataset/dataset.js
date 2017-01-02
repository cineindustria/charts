export class DatasetService {
    constructor($http) {
        this.$http = $http
    }
    getData() {
        return this.$http({
            method: 'GET',
            url: './app/dataset/grabs.json'
        })
    }
}
