// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (typeof name === "object") throw new Error("bingo bango bongo");
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return ("Employee");
    }
}

module.exports = Employee;
