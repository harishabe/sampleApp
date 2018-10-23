(function () {
    angular.module('testApp', []).controller('testCtrl', function ($scope, apiService) {
        $scope.API = "https://reqres.in/api/users";
        $scope.API1 = "https://reqres.in/api/users";
        $scope.JSONObject = {
            "name": "paul rudd",
            "movies": ["I Love You Man", "Role Models"]
        };
        //main function


        $scope.data = function () {
            $scope.name = { name: "harish" };
            localStorage.name = JSON.stringify($scope.name);
            $scope.showSpinner = true;
            $scope.callbackFunction($scope.API, $scope.JSONObject);
            $scope.singleUser($scope.API, $scope.JSONObject);
            $scope.multipleUser($scope.API1);
        }

        $scope.callbackFunction = function (_api, _jsonObj) {
            apiService.post(_api, _jsonObj).then(function (response) {
                $scope.showSpinner = false;
                $scope.resData = response.data;
            });
        }

        $scope.singleUser = function (_api, _jsonObj) {
            apiService.post(_api, _jsonObj).then(function (response) {
                if (response.status === 201) {
                    $scope.showSpinner = false;
                    $scope.resData = response.data;
                }
            });
        }

        $scope.multipleUser = function (_getApi) {
            apiService.get(_getApi).then(function (response) {
                if (response.status === 200) {
                    $scope.showSpinner = false;
                    $scope.resData1 = response.data;
                }
            });
        }


    });
})();