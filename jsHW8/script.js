const Company = {

    employse : [],
    directorIndex : null,

    addEmployee: function(fullName, sex, age, work, salary) {
        if (work == `Директор`){
            if (directorIndex != null){
                this.employ[directorIndex] = {fullName, sex, age, work, salary}
                return
            }
            directorIndex = this.employse.length
        }

        this.employse.push({fullName, sex, age, work, salary})
    },

    deliteByIndex: function(index) {
        if (index < 0 || index >= this.employse.length){
            console.log("Сотрудника с таким индексом не существует");
            return
        }
        this.employse.slice(index);
        if (index == this.directorIndex){
            this.directorIndex = null;
        }
    },

    updateEmployee: function(index) {
        if (index < 0 || index >= this.employse.length){
            console.log("Сотрудника с таким индексом не существует");
            return
        }
        let emp = this.employees[index];
        let newData = {
            fullName : prompt('ФИО:', emp.fullName),
            sex : prompt('Пол:', emp.sex),
            age : prompt('Возраст:', emp.age),
            work : prompt('Должность:', emp.work),
            salary : prompt('Зарплата:', emp.salary)
        };

        this.employees[index] = newData;
        

        if (newData.work == `Директор`){
            if (directorIndex != null){
                deliteByIndex(directorIndex);
            }
            directorIndex = index;
        }
    },

    listEmployees: function(){
        return this.employse
    },

    listWorks: function(){
        let arr = [];
        for (let i = 0; i< this.employse.length; i++){
            if (arr.indexOf(this.employse[i].work) == -1){
                arr.push(this.employse[i].work);
            }
        }
        return arr
    },

    getDirectorName: function(){
        if (this.directorIndex == null){
            console.log("Директора не существует");
            return
        }
        return this.employse[this.directorIndex].fullName
    }


}