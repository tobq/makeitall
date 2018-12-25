import React from 'react';
import PropTypes from "prop-types";
import Select from "./Select";

export default class SearchSelect extends Select {
    constructor(props) {//type, element, options, render) {
        super(props);
        this.state.queryString = "";
    }

    componentDidMount() {
        super.componentDidMount();
        this.clearQuery();
    }

    query(queryString) {
        this.open();
        this.setState({queryString: queryString})
    }

    close() {
        super.close();
        this.clearQuery();
    }

    clearQuery() {
        //TODO: search ref null
        this.refs.search.value = null;
        this.setState({queryString: ""});
    }

    // open() {
    //     if (super.open()) this.refs.search.focus();
    // }

    render() {
        const search = <input
            onKeyUp={event => {
                const queryString = this.refs.search.value;
                if (this.state.queryString !== queryString) this.query(queryString);
            }}
            onChange={event => this.query(event.target.value)}
            ref="search"
            tabIndex={!this.valid() || this.state.active ? 0 : -1}
            className="select-search"
            placeholder={`Search for ${this.props.type}`}
        />;

        return <div className="select-root">
            <div className={"select-field" + (this.state.active ? " active" : "")} ref={"root"}>
                {this.valid() ? <div>
                        <div className="select-row" onClick={event => this.toggle()}>
                            {this.state.value}
                            {this.toggleButton()}
                        </div>
                        <div className="select-row" tabIndex={-1}>
                            {search}
                        </div>
                    </div>
                    :
                    <div className="select-row" tabIndex={-1}>
                        {search}
                        {this.toggleButton()}
                    </div>
                }
                {this.optionlist(this.props.options.filter(
                    option => this.props.query(option, this.state.queryString)
                ))}
            </div>
        </div>
    }
}

SearchSelect.propTypes = {
    query: PropTypes.func.isRequired,
};

// export class MultiSelect extends SearchSelect {
//     constructor(type, element, options, render, query) {
//         super(type, element, options, render, query);
//         this.value = [];
//         const multiCon = document.createElement("div");
//         multiCon.className = "select-field-extension";
//         this._multiCon = multiCon;
//         this._root.insertBefore(multiCon, this._selectElement);
//         this._input.placeholder += " to add";
//     }
//
//     select(option) {
//         this.value.push(option);
//         const classList = this._optionElements.get(option).classList;
//         classList.add("select-option-selected");
//         const optRow = document.createElement("div");
//         optRow.className = "select-row";
//         const optRemove = document.createElement("button");
//         const optTitle = document.createElement("div");
//         optTitle.className = "select-option-title";
//         optTitle.innerHTML = this._display(option);
//
//         optRemove.className = "select-option-remove";
//         optRemove.innerText = "close";
//         optRemove.addEventListener("click", event => {
//             this.value = this.value.filter(op => op !== option);
//             this.changed(option);
//
//             classList.remove("select-option-selected");
//             optRow.remove();
//         });
//         optRow.appendChild(optTitle);
//         optRow.appendChild(optRemove);
//         this._multiCon.appendChild(optRow);
//
//         this.changed(option);
//         this.close();
//     }
// }