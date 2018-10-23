describe('App controller', function () {
    beforeEach(module('testApp'));
    var $controller, controller, $scope = {}, $httpBackend;
    beforeEach(inject(function (_$controller_, _apiService_, _$httpBackend_) {
        $controller = _$controller_;
        apiService = _apiService_;
        $httpBackend = _$httpBackend_;
        controller = $controller('testCtrl', { $scope: $scope })
    }));
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    // it('check the API', function () {
    //     expect($scope.API).toBe("https://reqres.in/api/users");
    // });

    // it('Check the getData function', function () {
    //     $scope.data();
    // });

    // it('should have a getData function', function () {
    //     expect(angular.isFunction(apiService.getData)).toBe(true);
    // });

    // it('getData function should return data object if http request is successful', function () {
    //     var data = [{ "id": 1, "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { "id": 2, "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" }, { "id": 3, "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" }];
    //     //var expectedData = data;

    //     $httpBackend.when('GET', "https://reqres.in/api/users")
    //         .respond(200, data);

    //     var promise = apiService.getData("https://reqres.in/api/users");

    //     var result;
    //     promise.then(function(foo){
    //         result = foo;
    //     },function(reason){
    //         result = reason;
    //     })
    // });

    it('should get a list of events', function () {

        // var url = 'https://reqres.in/api/users';
        // $httpBackend.expectGET(url);
        // apiService.getData(url,function (response) {
        //     expect(response.length).toEqual(undefined);
        // });

        //$httpBackend.flush();

    });





});