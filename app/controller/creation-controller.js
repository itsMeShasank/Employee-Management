angular.module("myApp").controller("employeeRegistration",function($scope,employeeService) {

    var firstName,lastName,mobileNumber,address;
    $scope.saveContent = function() {
        if($scope.firstName == null) {
            alert("First Name required");
        }else if($scope.lastName == null) {
            alert("Last Name required");
        }else if($scope.mobileNumber == null) {
            alert("First Name required");
        }else if($scope.address == null) {
            alert("First Name required");
        }

        firstName = $scope.firstName;
        lastName = $scope.lastName;
        mobileNumber = $scope.mobileNumber;
        address = $scope.address;
        var employee = {firstName,lastName,mobileNumber,address};
        employeeService.addEmployee(employee);
    };

});