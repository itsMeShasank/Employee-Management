
describe("Testing employee service class which interacts with local storage of browser.",()=>{
    
    var $employeeService;
    beforeEach(module('myApp'));
    

    beforeEach(inject(function(_employeeService_) {
        $employeeService = _employeeService_;
    }));

    it("Testing first test case using karma",()=>{
        expect(true).toBe(true);
    });

    it("Testing adding employee to localstorage",() =>{
        var employee = {"firstName":"string","lastName":"string","mobilenumber":7780681762,"address":"string"};
        $employeeService.addEmployee(employee);
        employees = [];
        employees.push(employee);
        expect(employees.length).toBe($employeeService.getEmployees().length);
    });

    it("Testing removing employee from localstorage",() =>{
        $employeeService.removeEmployee(0);
        expect($employeeService.getEmployees().length).toBe(0);
    });

    it("Testing fetching employees from localstorage",() => {
        employees = $employeeService.getEmployees();
        expect(employees).toBeDefined();
    });

    it("Testing updating api to localstorage",() => {
        var employee = {"firstName":"shasank","lastName":"gadipilli","mobilenumber":7780681762,"address":"vzm"};
        $employeeService.updateEmployee(0,employee);
        expect($employeeService.getEmployees()[0]).toEqual(employee);
    });
});