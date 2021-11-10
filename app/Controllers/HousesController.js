import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js";

let btnTemplate = `<button title='create house' type="button" class="btn btn-success me-3"
    onclick="app.housesController.openCreateModal()" id="houseform-button">
    <i class="mdi mdi-plus"></i>
</button>`

function _drawHouses() {
    const houses = ProxyState.houses
    let template = ''
    houses.forEach(house => template += house.Template)
    document.getElementById('listings').innerHTML = template
    document.getElementById('plusBtn').innerHTML = btnTemplate
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)

    }

    async createHouse(id) {
        try {
            window.event.preventDefault()
            /** @type { HTMLFormElement} */
            // @ts-ignore
            const formElem = window.event.target
            const houseData = {
                year: formElem.year.value,
                bedrooms: formElem.bedrooms.value,
                bathrooms: formElem.bathrooms.value,
                levels: formElem.levels.value,
                imgUrl: formElem.imgUrl.value,
                price: formElem.price.value,
                description: formElem.description.value
            }
            if (id !== 'undefined') {
                await housesService.editHouse(houseData, id)
            } else {
                await housesService.createHouse(houseData)
            }

            formElem.reset()
            // @ts-ignore
            bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
        } catch (error) {
            console.error("[CREATE ERROR]", error.message)
        }
    }

    async showHouses() {
        try {
            await housesService.getAllHouses()
            document.getElementById('form-button').classList.remove('visually-hidden')
            document.getElementById('modal-body-slot').innerHTML = getHouseForm()
        } catch (error) {

        }
    }

    openCreateModal() {
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).toggle()
    }
}