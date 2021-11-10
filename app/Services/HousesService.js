import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js";

class HousesService {

    constructor() {
        console.log('service is here')
    }

    editHouse(houseData, id) {
        throw new Error("Method not implemented.");
    }
    async createHouse(houseData) {
        const res = await sandboxApi.post('houses', houseData)
        const house = new House(res.data)
        ProxyState.houses = [...ProxyState.houses, house]
    }

    async getAllHouses() {
        const res = await sandboxApi.get('houses')
        console.log(res.data)
        const houses = res.data.map(h => new House(h))
        ProxyState.houses = houses
    }
}


export const housesService = new HousesService()