describe('full code coverage', function () {
    var response;
    response = { "name": "paul rudd", "movies": ["I Love You Man", "Role Models"], "id": "996", "createdAt": "2018-01-20T18:19:38.746Z" };

    //Injecting the modules that would then be used in the tests
    beforeEach(module('testApp'));

    beforeEach(inject(function ($controller, $rootScope, _apiService_) {
        $scope = $rootScope.$new();
        CategoryService = _apiService_;

        //Creating a spy for this method so that it doesn't call the original Service method.
        spyOn(CategoryService, 'post').and.callFake(function () {
            return {
                then: function (successCallback) {
                    successCallback(response);
                }
            }
        });
        spyOn(CategoryService, 'get').and.callFake(function () {
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
            //expect(CategoryService.post).toHaveBeenCalled();
            $scope.data();
            expect(response).toBeDefined();
        });
        it('should call post method', function () {
            $scope.singleUser();
            expect(CategoryService.post).toHaveBeenCalled();
        });
        it('should call post method', function () {
            $scope.multipleUser();
            expect(CategoryService.get).toHaveBeenCalled();
        });
        it('should call get method check the object ', function () {
            CategoryService.get().then(function(res){
                expect(res).toEqual(response);
            })
        });
    });
});