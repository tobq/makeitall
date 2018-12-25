import React, {Component} from "react";

export default class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        this.refs.root.addEventListener("focusout", (event) => {
            if (!this.refs.root.contains(event.relatedTarget)) this.close();
        });
    }

    render() {
        const rovingIndex = this.state.active ? 0 : -1;
        return <div tabIndex={1} ref={"root"} className={"user-menu-root" + (this.state.active ? " active" : "")}>
            <button className="user-display-picture" onClick={event => this.toggle()}/>
            <div className="user-menu-list">
                <a  className="user-menu-name" href="/" tabIndex={rovingIndex}>$Alice</a>
                <a href="/" tabIndex={rovingIndex}>Settings</a>
                <a href="/" tabIndex={rovingIndex}>Something</a>
                <a href="/" tabIndex={rovingIndex}>Log Out</a>
            </div>
        </div>
    }

    toggle() {
        if (this.state.active) this.close();
        else this.open();
    }

    open() {
        // console.log("Open Menu");
        if (this.state.active) return false;
        this.setState({active: true});
        return true;
    }

    close() {
        // console.log("Close Menu");
        this.setState({active: false})
    }
}
