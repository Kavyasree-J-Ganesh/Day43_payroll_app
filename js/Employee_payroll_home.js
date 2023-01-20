document.addEventListener("DOMContentLoaded", (event)=>{
   if(!localStorage.getItem("empPayrollList")){
    storeEmpListToLocatStorage([
        {
          "name": "mohit kumar new",
          "gender": "male",
          "departMent": [
            "HR"
          ],
          "salary": "30000",
          "startDate": "1 Jan 2020",
          "notes": "",
          "id": 1604589551457,
          "profileUrl": "../assets/profile-images/Ellipse 1.png"
        },
        {
          "name": "mohit kumar test",
          "gender": "male",
          "departMent": [
            "HR"
          ],
          "salary": "30000",
          "startDate": "1 Jan 2020",
          "notes": "",
          "id": 1604589594363,
          "profileUrl": "../assets/profile-images/Ellipse 1.png"
        },
        {
          "name": "mohit",
          "gender": "male",
          "departMent": [
            "HR"
          ],
          "salary": "30000",
          "startDate": "1 Jan 2020",
          "notes": "",
          "id": 1604589699566,
          "profileUrl": "../assets/profile-images/Ellipse -3.png"
        },
        {
          "name": "test",
          "gender": "male",
          "departMent": [
            "HR"
          ],
          "salary": "30000",
          "startDate": "1 Jan 2020",
          "notes": "",
          "id": 1604589731061,
          "profileUrl": "../assets/profile-images/Ellipse -3.png"
        }
       ]);
   }
   createInnerHtml();
})

let employeeList = [];
const createInnerHtml = () => {
   employeeList = getEmpPayrollListFromLocalStorage();
   const headerHtml = `
   <tr>
   <th></th>
   <th>Name</th>
   <th>Gender</th>
   <th>Department</th>
   <th>Salary</th>
   <th>Start Date</th>
   <th>Action</th>
   </tr>`

   innerHtml = `${headerHtml}`

   for( const employee of employeeList){
    innerHtml = `${innerHtml} 
    <tr>
         <td>
             <img src="${employee.profileUrl}" alt="" class="profile">
        </td>
        <td>${employee.name}</td>
        <td>${employee.gender}</td>
        <td>
           ${getDeptHtml(employee.departMent)}
        <td>${employee.salary}</td>
        <td>${employee.startDate}</td>
        <td>
            <img id="${employee.id}" onclick="deletePerson(${employee.id})" alt="Delete" src="./assets/icons/delete-black-18dp.svg">
           <img id="${employee.id}"  alt="Edit" src="./assets/icons/create-black-18dp.svg">
        </td>
    </tr>`
   }

   document.querySelector("#display").innerHTML = innerHtml;
}

const getDeptHtml = (departments)=>{
    let deptHtml = '';
    for(let dept of departments){
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }

    return deptHtml;
}

const storeEmpListToLocatStorage = (empList)=>{
        localStorage.setItem("empPayrollList", JSON.stringify(empList)) 
}

const getEmpPayrollListFromLocalStorage = ()=>{
    return localStorage.getItem("empPayrollList") ? JSON.parse(localStorage.getItem("empPayrollList")) : []
}


const deletePerson = (id) =>{
    if(employeeList.find(emp=> emp.id === id)){
        
        employeeList = employeeList.filter(emp=> emp.id != id);

        storeEmpListToLocatStorage(employeeList)
        createInnerHtml();
    }
}
