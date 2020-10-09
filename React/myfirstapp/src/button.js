// session 3

// create a seperate button JS and follow this process to add a button and change the text when clicked.

import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false };
    }
    
    //componentDidMount () {
        //console.log('mounted  to the page')
   // } 
    

    render() {
        return (
            <button
                className="button-styles"
                onClick={() => this.setState({ clicked: true})}
            >
                {this.state.clicked ? 'Item added to basket' : 'Add to basket'}
            </button>
        )
    }
}  

export default Button; // always have to export and well as import