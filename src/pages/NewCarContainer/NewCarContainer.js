import React from 'react';
import { withRouter } from 'react-router-dom';
import CarModel from '../../models/car';

class NewCarContainer extends React.Component {
    state = {
        year: Number,
        make: '',
        model: '',
        carPicUrl: '',
    };

    handleChange = (event) => {
        if (event.target.value === 'on') {
           event.target.value = true;
        }

        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        CarModel.createCar(this.state)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/cars');
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <h2>Add A New Car</h2>
                  <div>
                    <label htmlFor="">Year</label>
                    <input onInput={this.handleChange} type="number" name="year" />
                  </div>
                  <div>
                    <label htmlFor="">Make</label>
                    <input onInput={this.handleChange} type="text" name="make" />
                  </div>
                  <div>
                    <label htmlFor="">Model</label>
                    <input onInput={this.handleChange} type="text" name="model" />
                  </div>
                  <div>
                    <label htmlFor="">Car Snapshot</label>
                    <input onInput={this.handleChange} type="text" name="carPicUrl" />
                  </div>
                  <button type="submit">Add Car</button>
              </form>
            </div>
        );
    }
}

export default withRouter (NewCarContainer);