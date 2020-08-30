import React from 'react';
import { withRouter } from 'react-router-dom';
import CarModel from '../../models/car';

import './NewCar.css';

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
                  <h2 style={{color:'#13b0cc'}}>Add A New Car</h2>
                  <div className="newCarSub">
                    <label htmlFor=""></label>
                    <input onInput={this.handleChange} placeholder="Year" type="number" name="year" />
                  </div>
                  <div className="newCarSub">
                    <label htmlFor=""></label>
                    <input onInput={this.handleChange} placeholder="Make" type="text" name="make" />
                  </div>
                  <div className="newCarSub">
                    <label htmlFor=""></label>
                    <input onInput={this.handleChange} placeholder="Model" type="text" name="model" />
                  </div>
                  <div className="newCarSub"> 
                    <label htmlFor=""></label>
                    <input onInput={this.handleChange} placeholder="Picture Url" type="text" name="carPicUrl" />
                  </div>
                  <button type="submit">Add Car</button>
              </form>
            </div>
        );
    }
}

export default withRouter (NewCarContainer);