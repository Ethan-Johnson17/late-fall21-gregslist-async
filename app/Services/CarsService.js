import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { sandboxApi } from "./AxiosService.js"

class CarsService {
  async getAllCars() {
    const res = await sandboxApi.get('cars')
    const cars = res.data.map(c => new Car(c))
    ProxyState.cars = cars
  }
  async createCar(carData) {
    // go create the car
    // NOTE post takes 2 arguments, 1st url, 2nd object to create
    const res = await sandboxApi.post('cars', carData)
    const car = new Car(res.data)
    ProxyState.cars = [...ProxyState.cars, car]
  }
  async editCar(carData, id) {
    // NOTE put requrest requires the ID in the url and the payload as a second argument
    const res = await sandboxApi.put('cars/' + id, carData)
    const index = ProxyState.cars.findIndex(c => c.id == id)
    ProxyState.cars.splice(index, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars
  }

  async deleteCar(id) {
    await sandboxApi.delete('cars/' + id)
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }

}


export const carsService = new CarsService()