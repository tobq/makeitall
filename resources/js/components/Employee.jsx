export default class Employee {
    constructor(id, title, firstName, lastName, department) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }

    toString() {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }
}