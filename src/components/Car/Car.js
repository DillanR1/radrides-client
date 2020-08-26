import React from 'react';
import { Link } from 'react-router-dom';

import './Car.css';

function Car (props) {
    const { car } = props;

    return (
        <Link to={`/cars/${car._id}`}>
            <div className="car-card">
              <section className="image-wrapper">
                  <img src={car.carPicUrl} alt={car.make, car.model} height="100" />
              </section>
              <section className="content-wrapper">
                <h4>{car.make, car.model}</h4>
              </section>
            </div>
        </Link>
    );
}

export default Car;