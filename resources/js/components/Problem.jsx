import React from "react";
import {SelectOption} from "./Select/Select";

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
        const response = await fetch('/problems/list');
        const json = await response.json();
        const problems = json.map(this.fromRow);
        this._cache = problems;
        return problems;
    }

    static priorities = ["Low", "Normal", "Emergency"];

    static render(id, title, priority) {
        const priorityText = this.getPriority(priority);
        return <div className="select-option-content">
            <div>
                <span className="tag-id">ID</span><span className="tag">{id}</span>
            </div>
            <div className="select-content-title">{title}</div>
            <div>
                <span className="tag">Priority</span><span
                className={"problem-priority-" + priority}>{priorityText}</span>
            </div>
        </div>
    }

    static getPriority(priority) {
        return this.priorities[priority - 1];
    }
}