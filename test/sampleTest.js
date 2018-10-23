describe("your backend service", function () {
    var dataWeWantToGet = {
        "name": "paul rudd",
        "movies": ["I Love You Man", "Role Models"]
    };;
    //var mainFactory;
    var $httpBackend, $scope;
    beforeEach(module('testApp'));
    beforeEach(inject(function ($controller, $rootScope, _apiService_, _$httpBackend_) {
        mainFactory = _apiService_;
        $httpBackend = _$httpBackend_;
        $scope = $rootScope.$new();
        spyOn(mainFactory, 'postData').and.callFake(function () {
            return {
                then: function (successCallback) {
                    successCallback(dataWeWantToGet);
                }
            }
        });
        spyOn(mainFactory, 'get').and.callFake(function () {
            return {
                then: function (successCallback) {
                    successCallback(dataWeWantToGet);
                }
            }
        });
        spyOn(mainFactory, 'post').and.callFake(function () {
            return {
                then: function (successCallback) {
                    successCallback(dataWeWantToGet);
                }
            }
        });
        SearchCtrl = $controller('testCtrl', {
            $scope: $scope
        });
    }));

    it('should call main function', function () {
        $scope.data();
        var locs = { name: 'harish' };
        console.log('localStorage.name',localStorage.name);
        expect(localStorage.name).toEqual({"name":"harish"});;
    });

    it('should call get method', function () {
        $scope.singleUser();
        expect(mainFactory.post).toHaveBeenCalled();
    });

    it('should call get method', function () {
        $scope.multipleUser();
        expect(mainFactory.get).toHaveBeenCalled();
    });

     it('should call callbackFunction method', function () {
        $scope.callbackFunction();
        mainFactory.postData().then(function(res){
            console.log('res calllback function',res);
        });
        //expect(mainFactory.postData).toHaveBeenCalled();
    });


    it("should return movie search data from the title", function () {
        var response = [];
        $httpBackend.when('GET', 'https://reqres.in/api/users')
            .respond(200, dataWeWantToGet);
        mainFactory.get()
            .then(function (data) {
                response = data;
            });
        //$httpBackend.flush();
        expect(response).toEqual(dataWeWantToGet);
    }); // end it

}); // end describe