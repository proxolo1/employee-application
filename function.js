

module.exports=function startApplication() {
    let rl = require("readline-sync");
    let fs = require('fs');
    let Employee = require('./classes');
    let userInput, i = 0;
    let arr = new Array();
    try {
        // fs.readFile("employee.txt",(err,data)=>{
        //     console.log(data)
        //     arr=JSON.parse(data);
            
        while (userInput != 5) {
            userInput = rl.question("==================================================================================\n1.add employee\n2.delete employee \n3.update employee\n4.print employees\n5 exit\n6 search employee\n7 add paySlip\n8 assaign projects \n9 search employee based on project\n==================================================================================\n");
            switch (userInput) {
                case "1":
                    addEmployee();
                    break;
                case "2":
                    deleteEmployee();
                    break;
                case "3":
                    updateEmployee();
                    break;
                case "4":
                    printEmployees();
                    break;
                case "5":
                    console.log(".........................operation ended......................\n");
                    return;
                case "6":
                    searchEmployee();
                    break;
                case "7":
                    addEmployeePaySlip();
                    break;
                case "8":
                    AddProject();
                    break;
                    case "9":
                        SearchProjects();
                        break;
                default:

                    throw new Error("invalid user input")

            }

        }
    // })

    }
    catch (e) {
        console.log(e.message);
        fs.appendFile("log.txt", e.toString(), (err) => {
            if (err) throw err;
            console.log("log saved....")
        })
    }
    function addEmployee() {
        emp = new Employee()
        // emp.id = rl.question("enter employee id :")
        emp.setEmployid(rl.question("enter employee id : "))
        emp.setName(rl.question("enter employee name :"));
        emp.setAge(rl.question("enter employee age :"));
        emp.setExperience(rl.question("enter employee experience :"));
        for (obj in emp) {
            if (emp[obj] === '') {
                throw new Error("employee details should not be empty")
            }
        }
        arr.push(emp);
        file();
    }
function updateEmployee() {
    let name = rl.question("enter any details of employee  :");
    // arr[index].name = rl.question("enter employee new name :");
    // arr[index].age = rl.question("enter new employee age :");
    // arr[index].experience = rl.question("enter new employee experience :")
    arr.forEach((value) => {
        if (value.id == name || value.name == name || value.age == name || value.experience == name) {
            input = rl.question("what catergory want to change (id/name/age/experience) :")
            if (input === "id") {
                value.setEmployid(rl.question("enter new id of employee :"));
            }
            if (input === "name") {
                value.setName(rl.question("enter your new name")) ;
                
            }
            else if (input === "age") {
                value.setAge( rl.question("enter new age :"))
            }
            else {
                value.setExperience(rl.question(" enter employee experience"));
            }
            console.log(value)
            return;
        }
    })
    file();
}
function deleteEmployee() {
    let index = rl.question("enter id of employee :");
    arr.forEach((value) => {
        if (value.id === index) {
            delete arr[i];
            return;
        }
        i++;
    })
    
    
    file();
}
function printEmployees() {
    console.log(JSON.stringify(arr))
}
function searchEmployee() {
    let input = rl.question("enter employee details :");
    arr.forEach(value => {
        if (value.id == input || value.name == input || value.age == input || value.experience == input) {
            console.log(value);
            
        }
        
    })
}
function file() {
    fs.writeFile('employee.txt', JSON.stringify(arr), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
}
function addEmployeePaySlip() {
    input = rl.question("enter id of employee");
    arr.forEach((value) => {
        if (value.id === input) {
            value.PaySlip.setBasic(rl.question(`enter ${value.name} basic pay of employee `));
            value.PaySlip.setAllowance(rl.question(`enter ${value.name} allowance pay :`));
            value.PaySlip.setTotalEarning(rl.question(`enter ${value.name} total earning :`))
            file();
        }
    })
}
// function check(value){
    //     return 
    // }
    function AddProject() {
        input = rl.question("enter id of employee");
        arr.forEach(value => {
            if (value.id === input) {
                value.project.setProjectName(rl.question("enter project names (,): "))
                file()
                return;
            }
        })
    }
    function SearchProjects(){
        input=rl.question("enter project Name")
        let i=0;
        arr.forEach(value=>{
            value.project.projectName.forEach(data => {
                if(data==input) {
                    console.log("yes its worked.....")
                    console.log(value)
                }
            })
           
        })
    }
}

