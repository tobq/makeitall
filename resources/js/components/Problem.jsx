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
            <div className="employee-id">ID: {id}</div>
            <div className="employee-full-name">{title}</div>
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

export class PriorityOption extends SelectOption {
    render() {
        return <div className="select-option-content">
            {Problem.getPriority(this._value)}<span className={'priority-marker-' + this._value}/>
        </div>
    }
}