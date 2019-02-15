import MultiSelect from "./Select/MultiSelect";
import NewProblem from "./NewProblem";
import PropTypes from "prop-types";
import {FieldLabel, RequiredLabel} from "./FieldLabel/FieldLabel";
import React from "react";
import Problem from "./Problem";
import {QueryOption} from "./Select/SearchSelect";
import RequiredField from "./RequiredField";

export default class ProblemSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func,
    };

    ref = React.createRef();
    label = React.createRef();
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
        // console.log(this.state.created, this.state.created.length !== 0,
        //     this.state.created[this.state.created.length - 1]);
        if (this.state.created.length !== 0 &&
            !this.state.created[this.state.created.length - 1].ref.current.validate()) return false;
        const ref = React.createRef();
        const newProblem = <NewProblem ref={ref} onRemove={() => this.unCreate(newProblem)}/>;
        const created = [...this.state.created, newProblem];
        this.setState({created: created});
    }

    unCreate(newProblem) {
        const created = this.state.created.filter(np => np !== newProblem);
        this.setState({created: created});
    }

    validate() {
        let valid = true;
        console.log(this.state.created);
        for (let created of this.state.created)
            if (!created.ref.current.validate()) {
                valid = false;
                break;
            }

        if (valid && this.state.created.length === 0) valid = this.ref.current.validate();

        if (valid) {
            this.label.current.deactivate();
            this.ref.current.resetValidate();
        } else this.label.current.activate();
        return valid;
    }

    render() {
        return <div>
            <RequiredLabel ref={this.label} for={this.ref}>{this.props.label}</RequiredLabel>
            <div className="select-row">
                <button
                    className="select-create-problem"
                    onClick={event => this.create()}
                >Create New Problem
                </button>
            </div>
            {this.state.created}
            <MultiSelect
                ref={this.ref}
                type={"Problem"}
                options={this.state.options}
            />
        </div>

    }

    get value() {
        return {
            created: this.state.created.map(x => x.ref.current.value),
            selected: this.state.options
        }
    }
}


export class ProblemOption extends QueryOption {
    constructor(value) {
        if (!(value instanceof Problem)) throw value + " not an instance of Problem";
        super(value);
    }


    toSearchString() {
        const problem = this.value;
        return QueryOption.prepareSearchString(`${problem.id} ${problem.title} ${problem.description}`);
    }

    render() {
        const problem = this.value;
        return Problem.render(problem.id, problem.title, problem.priority)
    }

    getKey() {
        return this._value.id;
    }

    static async fetch() {
        const problems = await Problem.fetch();
        return problems.map(employee => new ProblemOption(employee));
    }
}
