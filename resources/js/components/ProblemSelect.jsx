import MultiSelect from "./Select/MultiSelect";
import NewProblem from "./NewProblem";
import PropTypes from "prop-types";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import React from "react";
import Problem from "./Problem";
import {QueryOption} from "./Select/SearchSelect";
import {SelectOption} from "./Select/Select";

export default class ProblemSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onChanged: PropTypes.func,
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
        const newProblem = <NewProblem
            ref={ref}
            onRemove={() => this.unCreate(newProblem)}
            onChanged={this.props.onChanged}
        />;
        const created = [...this.state.created, newProblem];
        this.setState({created: created});
    }

    unCreate(newProblem) {
        const created = this.state.created.filter(np => np !== newProblem);
        this.setState({created: created});
    }

    validate() {
        let valid = true;
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
            <div className="multi-select-list">
                {this.state.created}
            </div>
            <MultiSelect
                ref={this.ref}
                type={"Problem"}
                options={this.state.options}
            />
        </div>

    }

    get value() {
        return {
            created: this.state.created.map(newProblem => newProblem.ref.current.value),
            selected: this.ref.current.value.map(option => option.value)
        }
    }
}

export class ProblemOption extends QueryOption {
    constructor(value) {
        if (!(value instanceof Problem)) throw value + " not an instance of Problem";
        super(value);
    }


    toSearchString() {
        const problem = this._value;
        return QueryOption.prepareSearchString(`${problem.id} ${problem.title} ${problem.description}`);
    }

    render() {
        const problem = this._value;
        return Problem.render(problem.id, problem.title, problem.priority)
    }

    get value() {
        return this._value.id;
    }

    static async fetch() {
        const problems = await Problem.fetch();
        return problems.map(employee => new ProblemOption(employee));
    }
}

export class PriorityOption extends SelectOption {
    render() {
        return <div className="select-option-content">
            {Problem.getPriority(this._value)}<span className={'priority-marker-' + this._value}/>
        </div>
    }
}