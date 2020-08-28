import React from 'react';
import CarDetail from '../../components/CarDetail/CarDetail';
import CarModel from '../../models/car';

class CarContainer extends React.Component {
    state = {
        car: {},
    };

    componentDidMount() {
        //Get All Cars, like game example
        CarModel.getCarById(this.props.match.params.id)
            .then((result) => {
              console.log(result);
              this.setState({car: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log(this.props);
        return <CarDetail car={this.state.car} list={false} />;
    }
}

export default CarContainer;