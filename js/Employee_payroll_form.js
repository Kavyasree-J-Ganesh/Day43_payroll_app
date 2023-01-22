const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;

let isUpdate = false;
let empData;

window.addEventListener("DOMContentLoaded", (event)=>{
    salary.addEventListener('change', function() {
        output.textContent = salary.value;
    });

    checkForUpdate()
})

function checkForUpdate(){
    if(localStorage.getItem("editEmp")){
        isUpdate = true;
        setForm();
    }
}

function save(event){
    
    event.preventDefault();
    try{
      setEmployeePayrollObject(event);
      createAndUpdateStorage()
      reset();
      location.replace(site_properties.home_page)
    } catch(e){
      return;
    }
}

const setEmployeePayrollObject = (event)=>{
    if(!isUpdate){
        empData = new EmpPayrollData()
        empData.id = new Date().getTime();
    }
    empData.name = event.target.name.value;
    empData.gender = event.target.gender.value;
    empData.profilePic = event.target.profile.value
    empData.department = getSelectedValues("[name=department");
    empData.salary = event.target.salary.value;
    empData.note = event.target.note.value;
    empData.startDate = ("0" + event.target.Day.value).slice(-2) + " " +  event.target.Month.value + " "  + event.target.year.value;
    localStorage.setItem("personObj", JSON.stringify(empData))
    
}

const createAndUpdateStorage = ()=>{
   let empList = []
   if(!localStorage.getItem("empPayrollList")){
    localStorage.setItem("empPayrollList",JSON.stringify([empData]))
    return;
   } else if(isUpdate) {
        empList = JSON.parse(localStorage.getItem("empPayrollList"));
        const index = empList.findIndex(emp=> emp.id == empData.id)
        if(index > -1){
            empList[index] = empData;
        }
        localStorage.removeItem("editEmp")
    } else {
        empList = JSON.parse(localStorage.getItem("empPayrollList"));
        empList.push({
            id:empData._id, 
            name: empData._name, 
            gender: empData._gender,
            profileUrl: empData._profilePic,
            departMent: empData._department,
            salary: empData._salary,
            notes: empData._note,
            startDate: empData._startDate
        })
    }
    localStorage.setItem("empPayrollList", JSON.stringify(empList))
}

function reset(){
    setTextValue("name", "");
    setValues("notes", "");
    setValues("salary", 40000)
    setValues("day", "1");
    setValues("month", "01");
    setValues("year", "2023");
    unSelectSelected("[name=profile")
    unSelectSelected("[name=gender")
    unSelectSelected("[name=department")
}

const setForm = ()=>{
    empData = JSON.parse(localStorage.getItem("editEmp"));
    setTextValue("name", empData.name);
    setValues("notes", empData.notes);
    setValues("salary", empData.salary)
    let date = stringifyDate(empData.startDate).split(" ")
    setTextValue("day", date[0]);
    setTextValue("month", date[1]);
    setTextValue("year", date[2]);
    selectSelected("[name=profile", empData.profileUrl)
    selectSelected("[name=gender", empData.gender)
    selectSelected("[name=department", empData.departMent)
    salary.textContent = empData.salary;
}

const setValues = (id, value)=>{
    document.getElementById(id).textContent = value
}

const setTextValue = (id, value)=>{
  document.getElementById(id).value = value
}

const unSelectSelected = (prop)=>{
    let allItems = document.querySelectorAll(prop);
    allItems.forEach(item=> item.checked = false)
}

const selectSelected = (prop, value) =>{
    let allItems = document.querySelectorAll(prop);
    allItems.forEach(item=> {
        if( Array.isArray(value) && value.includes(item.value)){
            item.checked = true
        } else if (value.includes(item.value)) {
            item.checked = true;
        }
        
    })
}


const getSelectedValues = (prop)=>{
    let items = []
    let allItems = document.querySelectorAll(prop);
    allItems.forEach(item=> {
        if(item.checked){
            items.push(item.value)
        }
        
    })

    return items;
}