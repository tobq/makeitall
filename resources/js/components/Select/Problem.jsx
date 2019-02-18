import React from "react";

export default class Problem {
    constructor(id, title, description, urgency) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.urgency = urgency;
    }

    static fromRow(row) {
        return new Problem(row.id, row.title, row["description"], row["urgency"])
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
            <div className="employee-id">{id}</div>
            <div className="employee-full-name">{title}</div>
            <div className="tag">{priority}</div>
        </div>
    }
}