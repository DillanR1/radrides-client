import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CarModel from '../../models/car';

import './Car.css';

function CarDetail (props) {
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
        {(
          <div className='car-card-actions'>
            <p><strong>Year: </strong> {car.year}</p>
            <p><strong>Make: </strong> {car.make}</p>
            <p><strong>Model: </strong> {car.model}</p>
            <button className='delete' onClick={handleDelete}>Delete</button>
            <Link to={`/cars/${car._id}/edit`} className='edit'>Edit</Link>
          </div>
        )}
      </>
    );
}

export default withRouter(CarDetail);