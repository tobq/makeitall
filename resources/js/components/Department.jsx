// export default class Department {
//     constructor(ID, name) {
//         this.ID = ID;
//         this.name = name;
//     }
//
//     static fromRow(row) {
//         return new Department(row.ID, row.name);
//     }
//
//     static async fetch() {
//         const response = await fetch('/departments');
//         console.log(response);
//         const departments = {};
//         for (let department of await response.json())
//             departments[department.ID] = department.name;
//         this._cache = departments;
//         console.log(departments);
//     }
//
//     static getName(ID) {
//         console.log(this._cache[ID]);
//         return this._cache[ID];
//     }
// }
// Department.fetch();