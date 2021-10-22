import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

class CarsService {
  deleteCar(id) {
    // Filters the array of cars removing the one with the id that was passed
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }
  createCar(carData) {
    const car = new Car(carData)
    ProxyState.cars = [...ProxyState.cars, car]
  }

}


export const carsService = new CarsService()