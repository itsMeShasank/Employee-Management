angular.module("myApp").controller("viewController",function($scope,employeeService) {

    var firstName,lastName,mobileNumber,address;

   fetchData();
   function fetchData() {
    $scope.employees = employeeService.getEmployees();
   }


    $scope.update = function(index) {
        var employee = $scope.employees[index];
        $scope.id = index;
        $scope.firstName = employee.firstName
        $scope.lastName = employee.lastName;
        $scope.mobileNumber = employee.mobileNumber;
        $scope.address = employee.address;
    }

    $scope.save = function() {
        firstName = $scope.firstName;
        lastName = $scope.lastName;
        mobileNumber = $scope.mobileNumber;
        address = $scope.address;
        employee = {firstName,lastName,mobileNumber,address}
        employeeService.updateEmployee($scope.id,employee);
        $scope.firstName = ""
        $scope.lastName = ""
        $scope.mobileNumber = ""
        $scope.address = ""
    }

    $scope.deleteEmployee = function(index) {
        employeeService.removeEmployee(index);
    }
});