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
  }

  async showCars() {
    try {
      await carsService.getAllCars()
      document.getElementById('form-button').classList.remove('visually-hidden')
      document.getElementById('modal-body-slot').innerHTML = getCarForm()
    } catch (error) {

    }
  }
  async createCar(id) {
    try {
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
      if (id) {
        await carsService.editCar(carData, id)
      } else {
        await carsService.createCar(carData)
      }

      // clear the form
      formElem.reset()
      // Close the modal
      // @ts-ignore
      bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
    } catch (error) {
      console.error("[CREATE ERROR]", error.message)
    }
  }

  openCreateModal() {
    document.getElementById('modal-body-slot').innerHTML = getCarForm()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).toggle()
  }

  async openEditModal(id) {
    const car = ProxyState.cars.find(c => c.id == id)
    // inject car's data into the form 

    document.getElementById('modal-body-slot').innerHTML = getCarForm(car)
    // open the modal
    debugger
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).toggle()
  }


  async deleteCar(id) {
    try {
      await carsService.deleteCar(id)
    } catch (error) {
      console.error("[DELETE ERROR]", error.message)
    }
  }
}