import React , { Component } from 'react';

class AppComponent extends Component {
    render (props){
        return (
            <div>
            <h1>Name</h1> <p>{this.props.name}</p>
            </div>
        )
    }
}

export default AppComponent;