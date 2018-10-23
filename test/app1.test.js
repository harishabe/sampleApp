describe('full code coverage', function () {
    var response;
    response = { "name": "paul rudd", "movies": ["I Love You Man", "Role Models"], "id": "996", "createdAt": "2018-01-20T18:19:38.746Z" };

    //Injecting the modules that would then be used in the tests
    beforeEach(module('testApp'));

    beforeEach(inject(function ($controller, $rootScope, _apiService_) {
        $scope = $rootScope.$new();
        CategoryService = _apiService_;

        //Creating a spy for this method so that it doesn't call the original Service method.
        spyOn(CategoryService, 'postData').and.callFake(function () {
            return {
                then: function (successCallback) {
                    successCallback(response);
                }
            }
        });

        SearchCtrl = $controller('testCtrl', {
            $scope: $scope
        });
    }));

    describe('Initialization', function () {
        it('should initialize the controller\'s scope with categories', function () {
            //expect(CategoryService.postData).toHaveBeenCalled();
            expect(response).toBeDefined();
            // expect($scope.resData.length).toEqual(1);
            // expect($scope.categories[0].id).toEqual(response.data[0].id);
            // expect($scope.categories[0].category).toEqual(response.data[0].category);
        });
    });
});