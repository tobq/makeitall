import React from 'react';
import PropTypes from "prop-types";
import Select, {SelectOption} from "./Select";

export default class SearchSelect extends Select {
    static propTypes = {
        ...Select.propTypes,
        options: PropTypes.arrayOf(PropTypes.instanceOf(QueryOption).isRequired).isRequired,
    };

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

    clearQuery() {
        //TODO: search ref null
        if (this.refs.search) this.refs.search.value = null;
        this.setState({queryString: ""});
    }

    focus() {
        if (this.state.active) this.refs.search.focus();
        else super.focus();
    }

    options() {
        const query = QueryOption.prepare(this.state.queryString);
        return this.props.options.filter(option => option.query(query));
    }

    select(option) {
        super.select(option);
        this.clearQuery();
    }

    searchInput() {
        return <input
            onKeyUp={event => {
                const queryString = this.refs.search.value;
                if (this.state.queryString !== queryString) this.query(queryString);
            }}
            onChange={event => this.query(event.target.value)}
            ref="search"
            onFocus={event => {
                if (event.target.value.length > 0) this.open();
            }}
            tabIndex={!this.valid() || this.state.active ? 0 : -1}
            className="select-search"
            placeholder={`Search for ${this.props.type}`}
        />;
    }

    render() {
        let className = "select-field";
        if (this.state.active) className += " active";

        return <div className="select-root">
            <div className={className} ref={"root"}>
                {this.valid() ? <div>
                        <div className="select-row" tabIndex={-1} onClick={event => this.toggle()}>
                            {this.state.option.render()}
                            {this.toggleButton()}
                        </div>
                        {this.state.active ?
                            <div className="select-row" tabIndex={-1}>
                                {this.searchInput()}
                            </div>
                            :
                            null
                        }
                    </div>
                    :
                    <div className="select-row" tabIndex={-1}>
                        {this.searchInput()}
                        {this.toggleButton()}
                    </div>
                }
                {this.optionlist()}
            </div>
        </div>
    }
}

export class QueryOption extends SelectOption {
    static propTypes = SelectOption.propTypes;

    static prepare(queryString) {
        const keptWords = {};
        const words = queryString.toLowerCase().split(" ");
        for (let word of words) keptWords[word] = true;
        const uniqueWords = Object.keys(keptWords);
        const length = uniqueWords.length;
        for (let i = 0; i < length; i++) {
            const a = uniqueWords[i];
            if (keptWords[a])
                for (let j = i + 1; j < length; j++) {
                    const b = uniqueWords[j];
                    if (a.length > b.length) {
                        if (a.indexOf(b) !== -1) keptWords[b] = false;
                    } else if (b.indexOf(a) !== -1) keptWords[a] = false;
                }
        }
        return uniqueWords.filter(word => keptWords[word]);
    }

    static prepareSearchString(string) {
        // console.log(QueryOption.prepare(string.toLowerCase()).join(""));
        return QueryOption.prepare(string).join("");
    }

    toSearchString() {
        return QueryOption.prepareSearchString(this.value.toString());
    }

    query(preparedQuery) {
        const searchString = this.toSearchString();
        for (let word of preparedQuery)
            if (searchString.indexOf(word) === -1) return false;

        return true;
    }
}
