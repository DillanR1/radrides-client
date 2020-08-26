const url = `http://localhost:4000/api/v1/cars`

class CarModel {
    static getAllCars = () => {
        return fetch(url)
          .then((response) => response.json())
    }

    static getCarById = (carId) => {
        return fetch(`${url}/${carId}`)
          .then((response) => response.json())
    }

    static createCar = (car) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
           .then((response) => response.json())
    }
}

export default CarModel