import React from "react";

export default class Problem {
    constructor(id, title, description, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    static fromRow(row) {
        return new Problem(row.id, row.title, row["description"], row["priority"])
    }

    static async fetch() {
        if (this._cache) {
            console.log("CACHED");
            return this._cache;
        }
        const response = await fetch('/problems');
        const json = await response.json();
        const problems = json.map(this.fromRow);
        this._cache = problems;
        return problems;
    }

    static render(id, title, priority) {
        return <div className="select-option-content">
            <div className="employee-id">ID: {id}</div>
            <div className="employee-full-name">{title}</div>
            <div className="tag">Priority: {priority}</div>
        </div>
    }
}