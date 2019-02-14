import SearchSelect from "./SearchSelect";
import React from "react";
import PropTypes from "prop-types";
import {SelectOption} from "./Select";

export default class MultiSelect extends SearchSelect {
    static propTypes = {
        ...SearchSelect.propTypes,
        selected: PropTypes.arrayOf(PropTypes.instanceOf(SelectOption))
    };
    // state = {active: false};
    // selected = new Set();

    constructor(props) {
        super(props);
        this.state.selected = props.selected || [];
    }

    componentDidMount() {
        super.componentDidMount();
    }

    options() {
        return super.options().filter(option => {
            for (let opt of this.state.selected)
                if (option.equals(opt)) return false;
            return true;
        })
    }

    select(option) {
        const selected = [...this.state.selected, option];
        this.setState({selected: selected});
        this.changed(selected);
        this.clearQuery();
        this.refs.toggle.focus();
        this.close();
    }

    unselect(option) {
        const selected = this.state.selected.filter(selected => selected !== option);
        this.setState({selected: selected});
        this.changed(selected);
        this.close();
    }

    get value() {
        return this.state.selected;
    }

    valid() {
        return this.state.selected.length !== 0;
    }

    render() {
        return <div className="select-root">
            {this.state.selected.map(option =>
                <div className="select-row"
                     key={option.getKey()}
                >
                    {option.render()}
                    <button
                        className="select-option-remove"
                        onClick={event => this.unselect(option)}
                    />
                </div>
            )}
            <div className={"select-field" + (this.state.active ? " active" : "")} ref={"root"}>
                <div className="select-row" tabIndex={-1}>
                    {this.searchInput()}
                    {this.toggleButton()}
                </div>
                {this.optionlist()}
            </div>
        </div>
    }
}