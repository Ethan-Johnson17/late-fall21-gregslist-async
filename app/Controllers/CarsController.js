import { ProxyState } from "../AppState.js"
import { getCarForm } from "../Forms/Carform.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  const cars = ProxyState.cars
  let template = ''
  // loop through the cars
  cars.forEach(car => template += car.Template)
  // add to page
  document.getElementById('listings').innerHTML = template
}


export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    // draw default cars
    // _drawCars()
  }

  createCar() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const carData = {
      make: formElem.make.value,
      model: formElem.model.value,
      year: formElem.year.value,
      price: formElem.price.value,
      color: formElem.color.value,
      description: formElem.description.value,
      imgUrl: formElem.imgUrl.value
    }

    carsService.createCar(carData)

    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }

  deleteCar(id) {
    carsService.deleteCar(id)
  }

  showCars() {
    _drawCars()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getCarForm()
  }
}