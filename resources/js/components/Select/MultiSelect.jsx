import SearchSelect from "./SearchSelect";
import React from "react";

export default class MultiSelect extends SearchSelect {
    static propTypes = SearchSelect.propTypes;
    // state = {active: false};
    // selected = new Set();

    constructor(props) {
        super(props);
        this.state.selected = [];
    }

    options() {
        return super.options().filter(option => !this.state.selected.includes(option))
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

    render() {
        return <div className="select-root">
            {this.state.selected.map(option =>
                <div className="select-row">
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