import React from 'react';
import CarModel from '../../models/car';

class EditCarContainer extends React.Component {
    state = {
        year: Number,
        make: '',
        model: '',
        carPicUrl: '',
    };
    componentDidMount() {
        CarModel.getCarById(this.props.match.params.id)
            .then((result) => this.setState(result))
            .catch((err) => console.log(err));
    }
    
    handleChange = (event) => {
        console.log(event.target.id); 
      if (event.target.value === 'on') {
          event.target.value = true;    
      }

      this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        CarModel.updateCar(this.state, this.props.match.params.id)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push(`/cars/${this.props.match.params.id}`);
    }

    render() {
        const { year, make, model, carPicUrl } = this.state;
        
        return (
           <div>
              <form onSubmit={this.handleSubmit}>
                  <h2>Edit Car</h2>
                    <label htmlFor="year">Year</label>
                    <input onInput={this.handleChange} type="number" name="year" id="year" value={year}/>
                  <div>
                    <label htmlFor="make">Make</label>
                    <input onInput={this.handleChange} type="text" name="make" id="make" value={make} />
                  </div>
                  <div>
                    <label htmlFor="model">Model</label>
                    <input onInput={this.handleChange} type="text" name="model" id="model" value={model} />
                  </div>
                  <div>
                    <label htmlFor="carPicUrl">Car Snapshot</label>
                    <input onInput={this.handleChange} type="text" name="carPicUrl" id="carPicUrl" value={carPicUrl} />
                  </div>
                  <button type="submit">Add Car</button>
              </form>
            </div>
        )
    } 
}       

export default EditCarContainer;