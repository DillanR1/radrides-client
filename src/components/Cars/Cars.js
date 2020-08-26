import React from 'react';
import Car from '../Car/Car';

import './Cars.css';

function Cars(props) {
    const cars = props.cars.map((carObj) => {
        return <Car key={carObj._id} car={carObj} list={true} />
    });

    return (
        <div className="cars-container">
            {cars}
        </div>
    );
}

export default Cars; 