import React from "react";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import Select from "./Select/Select";
import {ProblemOption} from "./ProblemSelect";
import ProblemType, {ProblemTypeOption} from "./ProblemType";

export default class ProblemTypeSelect extends React.Component {
    ref = React.createRef();
    label = React.createRef();
    state = {
        options: []
    };

    constructor(props) {
        super(props);
        // setInterval(() => this.validate(), 1000);

        ProblemTypeOption.fetch().then(x => {
            console.log(x);
            return x;
        })
            .then(options => this.setState({options: options}));
    }

    render() {
        return <div>
            <RequiredLabel ref={this.label} for={this.ref}>Problem Type</RequiredLabel>
            <Select
                ref={this.ref}
                type={"Problem Type"}
                options={this.state.options}
            />
        </div>
    }
}