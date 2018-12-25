import React, {Component} from "react";
import PropTypes from "prop-types";

export default class SelectOption extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button>
            {/*return <button onClick={this.props.onClick}>*/}
            {this.props.value.toString()}
        </button>
    }
}

SelectOption.propTypes = {
    value: PropTypes.any.isRequired,
    // onClick: PropTypes.func.isRequired,
};