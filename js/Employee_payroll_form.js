const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('change', function() {
    output.textContent = salary.value;
});

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
    empDate.startDate = ("0" + event.target.Month.value).slice(-2) + "-" + ( "0" + event.target.Day.value).slice(-2) + "-"  + event.target.year.value;
    localStorage.setItem("personObj", empDate.toString())
    alert(empDate.toString())
}

function reset(){
    setValues("name", "");
    setValues("note", "");
    setValues("salary", 40000)
    setValues("day", "1");
    setValues("month", "01");
    setValues("year", "2023");
    unSelectSelected("[name=profile")
    unSelectSelected("[name=gender")
    unSelectSelected("[name=department")
}

const setValues = (id, value)=>{
    document.getElementById(id).textContent = value
}

const unSelectSelected = (prop)=>{
    let allItems = document.querySelectorAll(prop);
    allItems.forEach(item=> item.checked = false)
}