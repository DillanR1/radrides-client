import React from 'react';
import Cars from '../../components/Cars/Cars';
import CarModel from '../../models/car';

class CarsContainer extends React.Component {
    state = {
        cars: [],
    };

    componentDidMount() {
        CarModel.getAllCars()
            .then((result) => {
            console.log(result);
            this.setState({cars: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return <Cars cars={this.state.cars} />;
    }
}

export default CarsContainer;