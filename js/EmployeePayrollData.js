class EmpPayrollData {

    //getter and setter method
    get id() { return this._id; }
    set id(id) {
         this._id = id; 
        }

    get name() { return this._name; }
    set name(name) {
        let errorTextName = document.querySelector(".text-error-name");
        let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
        if (nameRegex.test(name)){
            this._name = name;
            errorTextName.textContent = "";
        }  
        else {
            errorTextName.textContent = "Invalid name. Name should be atleast 3 characters and should start with capital"
            throw 'Name is Incorrect!';
        }
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
         this._profilePic = profilePic 
        }

    get gender() { return this._gender; }
    set gender(gender) {
         this._gender = gender; 
        }

    get department() { return this._department; }
    set department(department) {
         this._department = department; 
        }

    get salary() { return this._salary; }
    set salary(salary) { 
        return this._salary = salary;
     }

    get note() { return this._note; }
    set note(note) {
         this._note = note; 
        }

        get day() { return this._day; }
        set day(day) {
             this._day = day; 
        }

        get month() { return this._month; }
        set month(month) {
             this._month = month; 
        }

        get year() { return this._year; }
        set year(year) {
             this._year = year; 
        }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
         let errorTextDate = document.querySelector(".text-error-date");
         let dateDiff = new Date().getTime() - new Date(startDate).getTime();
         console.log(dateDiff)
         if(dateDiff > 0 && dateDiff <= 30*24*60*60*1000){
            this._startDate = startDate 
            errorTextDate.textContent = ""
         } else {
            errorTextDate.textContent = "Invalid date. Date should be with in 30 days of joining"
            throw 'Date is Incorrect!';
         }
         
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = 
            this.startDate
        return "id=" + this.id + ", name = '" + this.name + ", gender = '" + this.gender +
            ", profilePic = '" + this.profilePic + ", department = " + this.department +
            ", Salary = " + this.salary + ", startDate = " + empDate + ", note = " + this.note;

    }
}