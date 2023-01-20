const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;

window.addEventListener("DOMContentLoaded", (event)=>{
    salary.addEventListener('change', function() {
        output.textContent = salary.value;
    });

    if(localStorage.getItem("editEmp")){
        setForm();
    }
})

function save(event){
    
    event.preventDefault();
    const empDate = new EmpPayrollData()
    empDate.id = 1;
    empDate.name = event.target.name.value;
    empDate.gender = event.target.gender.value;
    empDate.profilePic = event.target.profile.value
    empDate.department = event.target.department.value;
    empDate.salary = event.target.salary.value;
    empDate.note = event.target.note.value;
    empDate.day = event.target.day.value
    empDate.month = event.target.month.value
    empDate.year = event.target.year.value
    empDate.startDate = ("0" + event.target.Month.value).slice(-2) + "-" + ( "0" + event.target.Day.value).slice(-2) + "-"  + event.target.year.value;
    localStorage.setItem("editEmp", JSON.stringify(empDate))
    alert(JSON.stringify(empDate))
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
    const empData = JSON.parse(localStorage.getItem("editEmp"));
    setTextValue("name", empData._name);
    setValues("notes", empData._note);
    setTextValue("salary", empData._salary)
    setTextValue("day", empData._day);
    setTextValue("month", empData._month);
    setTextValue("year", empData._year);
    selectSelected("[name=profile", empData._profilePic)
    selectSelected("[name=gender", empData._gender)
    selectSelected("[name=department", empData._department)
    salary.textContent = empData._salary;
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
        if(value.includes(item.value)){
            item.checked = true
        }
        
    })
}