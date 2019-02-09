import MultiSelect from "./Select/MultiSelect";
import NewProblem from "./NewProblem";
import PropTypes from "prop-types";
import {FieldLabel} from "./FieldLabel/FieldLabel";
import {Component} from "react";
import React from "react";
import Problem from "./Problem";
import {QueryOption} from "./Select/SearchSelect";

export default class ProblemSelect extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func,
    };

    ref = React.createRef();
    state = {
        created: [],
        options: []
    };

    constructor(props) {
        super(props);
        // setInterval(() => this.validate(), 1000);

        ProblemOption.fetch()
            .then(options => this.setState({options: options}));
    }

    create() {
        console.log(this.state.created, this.state.created.length !== 0,
            this.state.created[this.state.created.length - 1]);
        if (this.state.created.length !== 0 &&
            !this.state.created[this.state.created.length - 1].current.validate()) return;
        const ref = React.createRef();
        const newProblem = <NewProblem ref={ref} onRemove={() => this.unCreate(ref)}/>;
        const created = [...this.state.created, ref];
        this.setState({created: created});
    }

    unCreate(newProblem) {
        const created = this.state.created.filter(np => np !== newProblem);
        this.setState({created: created});
    }

    validate() {
        for (let created of this.state.created)
            if (!created.current.validate()) return false;

        return this.state.created.length === 0 ? this.ref.current.validate() : true;
    }

    render() {
        return <div>
            <FieldLabel for={this.ref}>{this.props.label}</FieldLabel>
            <div className="select-row">
                <button
                    className="select-create-problem"
                    onClick={event => this.create()}
                >Create New Problem
                </button>
            </div>
            {this.state.created.map(ref => ref.current)}
            <MultiSelect
                ref={this.ref}
                type={"Problem"}
                options={this.state.options}
            />
        </div>

    }
}


export class ProblemOption extends QueryOption {
    constructor(value) {
        if (!(value instanceof Problem)) throw value + " not an instance of Problem";
        super(value);
    }


    toSearchString() {
        const problem = this.value;
        return this.prepareSearchString(`${problem.id} ${problem.title} ${problem.description}`);
    }

    render() {
        const problem = this.value;
        return Problem.render(problem.id, problem.title, problem.priority)
    }

    static async fetch() {
        const problems = await Problem.fetch();
        return problems.map(employee => new ProblemOption(employee));
    }
}