const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

function save(event){
    
    event.preventDefault();
    const empDate = new EmpPayrollData()
    empDate.name = event.target.name.value;
    empDate.gender = event.target.gender.value;
    empDate.profilePic = event.target.profile.value
    empDate.department = event.target.department.value;
    empDate.salary = event.target.salary.value;
    empDate.note = event.target.note.value;
    empDate.startDate = event.target.Day.value + "-" + event.target.Month.value + event.target.Month.year;
    console.log(empDate.toString())
}