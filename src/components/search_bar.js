import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    render() {
        return (
            <div>
                <input value={this.state.query} onChange={ev => this.setState({ query: ev.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
