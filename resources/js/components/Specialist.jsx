export default class Specialist {
    constructor(id, title, firstName, lastName, problem_count) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.problem_count = problem_count;
    }

    fullName() {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }

    static fromRow(row) {
        return new Specialist(row.id, row.title, row["first_name"], row["last_name"], row["problem_count"])
    }

    static async fetch() {
        if (this._cache) {
            console.log("CACHED");
            return this._cache;
        }
        const response = await fetch('/specialists/list');
        const json = await response.json();
        const specialists = json.map(this.fromRow);
        this._cache = specialists;
        return specialists;
    }
}