import React from 'react';

class Search extends React.Component{
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit}>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." value={this.state.term} onChange={ e => this.setState({term: e.target.value}) }/>
                    <i aria-hidden="true" className="search icon"/>
                </div>
            </form>
        </div>);
    }
}

export default Search;
