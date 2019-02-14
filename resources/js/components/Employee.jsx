export default class Employee {
    constructor(id, title, firstName, lastName, department_name) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department_name = department_name;
    }

    fullName() {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }

    static fromRow(row) {
        return new Employee(row.id, row.title, row["first_name"], row["last_name"], row.department_name)
    }

    static async fetch() {
        if (this._cache) {
            console.log("CACHED");
            return this._cache;
        }
        const response = await fetch('/employees/list');
        const json = await response.json();
        const employees = json.map(this.fromRow);
        this._cache = employees;
        return employees;
    }
}
