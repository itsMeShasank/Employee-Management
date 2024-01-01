angular.module("myApp").service("employeeService",function() {
    this.employees = [];
            this.addEmployee = function(employee) {
                this.employees.push(employee);
                localStorage.setItem("EmployeeDetails",JSON.stringify(this.employees));
                alert("Employee added successfully!!");
            
            }
        
            this.removeEmployee = function(index) {
                this.employees.splice(index,1);
                localStorage.setItem("EmployeeDetails",JSON.stringify(this.employees));
                alert("Employee removed successfully!!");
                
            }
        
            this.getEmployees = function() {

                var storedData = localStorage.getItem("EmployeeDetails");

                if (storedData) {
                    this.employees = JSON.parse(storedData);
                } else {
                    this.employees = [];
                }
                return this.employees;
            }
            this.updateEmployee = function(index,employee) {
                this.employees.splice(index,1);
                this.employees.push(employee);
                localStorage.setItem("EmployeeDetails",JSON.stringify(this.employees));
                alert("Employee Updated Successfulyy!!");
            };

});