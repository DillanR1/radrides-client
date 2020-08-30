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
                  <h2 style={{color:'#13b0cc'}}>Edit Car</h2>
                    <label htmlFor="year"></label>
                    <input onChange={this.handleChange} placeHolder="Year" type="number" name="year" value={year}/>
                  <div className="editInfo">
                    <label htmlFor="make"></label>
                    <input onChange={this.handleChange} placeHolder="Make" type="text" name="make" value={make} />
                  </div>
                  <div className="editInfo">
                    <label htmlFor="model"></label>
                    <input onChange={this.handleChange} placeHolder="Model" type="text" name="model" value={model} />
                  </div>
                  <div className="editInfo">
                    <label htmlFor="carPicUrl"></label>
                    <input onChange={this.handleChange} placeHolder="Picture URL" type="text" name="carPicUrl" value={carPicUrl} />
                  </div>
                  <button type="submit">Update</button>
              </form>
            </div>
        )
    } 
}       

export default EditCarContainer;