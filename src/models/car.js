const url = `https://infinite-lake-54694.herokuapp.com/api/v1/cars`;

class CarModel {
  static getAllCars = () => {
    return fetch(url).then((response) => response.json())
  }

  static getCarById = (carId) => {
    return fetch(`${url}/${carId}`).then((response) => response.json())
    //console.log(carId);
  }

  static createCar = (car) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
    .then((response) => response.json());
  }

  static updateCar = (car,id) => {
    return fetch(`${url}/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
    .then((response) => response.json());
  }

  static deleteCar = (id) => {
    return fetch(`${url}/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json());
  }
}

export default CarModel
