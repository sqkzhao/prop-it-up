import React, { component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    increaseAge = () => {
        this.setState({age: this.state.age + 1})
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default PersonCard;