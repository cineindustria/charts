import angular from 'angular';
import 'angular-mocks';
import Dataset from './dataset';

describe('Dataset service', () => {
  beforeEach(() => {
    angular
      .module('Dataset', [])
      .service('Dataset', Dataset);
    angular.mock.module('Dataset');
  });

  it('should', angular.mock.inject(Dataset => {
    expect(Dataset.getData()).toEqual(3);
  }));
});
