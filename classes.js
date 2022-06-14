class PaySlip  {
    constructor(basic, allowance, total_earning) {
        this.basic = basic;
        this.allowance = allowance;
        this.total_earning = total_earning;
    }
    setBasic(value) {
        this.basic=value;
    }
    setAllowance(value){
        this.allowance=value;
    }
    setTotalEarning(value){
        this.total_earning=value;
    }
    getBasic(){
        return this.basic;
    }
    getAllowance(){
        return this.allowance;
    }
    getTotalEarning(){
        return this.total_earning;
    }
}
module.exports=class Employee {
    constructor(id, name, age, experience) {
        // super(basic,allowance,total_earning)
        this.id = id;
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.PaySlip=new PaySlip();
        this.project=new Project();
    }
    setEmployid(id){
        this.id=id;
    }
    setName(name){
        this.name=name;
    }
    setAge(age){
        this.age=age;
    }
    setExperience(experience){
        this.experience=experience;
    }
    setPaySlip(paySlip){
        this.paySlip=paySlip;
    }
    setProject(project){
        this.project=project;
    }
}
class Project{
    constructor(){
        this.projectName;
    }
    getProjectName(){
        return this.getProjectName;
    }
    setProjectName(projectName){
        
     this.projectName=projectName.split(',');
    }
}