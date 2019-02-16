import React from "react";
import {SelectOption} from "./Select/Select";

export default class ProblemType {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromRow(row) {
        return new ProblemType(row.id, row.name);
    }

    static async fetch() {
        if (this._cache) {
            console.log("CACHED");
            return this._cache;
        }
        const response = await fetch('/problem-types');
        const json = await response.json();
        const types = json.map(this.fromRow);
        this._cache = types;
        return types;
    }
}

export class ProblemTypeOption extends SelectOption {
    render() {
        return <div className="select-option-content">
            <div className="employee-id">ID: {this._value.id}</div>
            <div className="employee-full-name">{this._value.name}</div>
        </div>
    }

    get value() {
        return this._value.id;
    }

    static async fetch() {
        const types = await ProblemType.fetch();
        return types.map(type => new ProblemTypeOption(type));
    }
}