import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CarModel from '../../models/car';

import './Car.css';

function Car (props) {
    const { car } = props;

    const handleDelete = () => {
      CarModel.deleteCar(car._id)
        .then((result) => props.history.push('/cars'))
        .catch((err) => console.log(err));
    };

    return (
      <>
        <Link to={`/cars/${car._id}`}>
            <div className="car-card">
              <section className="image-wrapper">
                  <img src={car.carPicUrl} alt={car.make&&car.model} height="100" />
              </section>
              <section className="content-wrapper">
                <h4>{car.make} {car.model}</h4>
              </section>
            </div>
        </Link>
       
      </>
    );
}

export default withRouter(Car);