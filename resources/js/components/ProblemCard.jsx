import React from "react";
import PropTypes from "prop-types"
import Problem from "./Problem";

export default class ProblemCard extends React.Component {
    static propTypes = {
        problem: PropTypes.instanceOf(Problem).isRequired
    };


    render() {
        return <div className="problem-card">
            <div className="select-option-content">
                <div>
                    <span className="tag-id">ID</span><span className="tag">{this.props.problem.id}</span>
                </div>
                <span className="problem-card-title select-content-title">{this.props.problem.title}</span>
            </div>
            <div className="problem-card-description">
                {this.props.problem.description}
            </div>
        </div>
    }
}