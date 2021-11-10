import { House } from "../Models/House.js";

export function getHouseForm(houseData = {}) {
    const house = new House(houseData)


    return /*html*/`
  <form onsubmit="app.housesController.createHouse('${house.id}')">
    <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="rooms" class="form-label">Bedrooms</label>
      <input type="text" class="form-control" name="rooms" id="rooms" aria-describedby="rooms"
        placeholder="rooms..." required value="${house.bedrooms}">
    </div>
    <div>
      <label for="bathrooms" class="form-label">Bathrooms</label>
      <input type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
        placeholder="bathrooms..." required value="${house.bathrooms}">
    </div>
    <div>
      <label for="levels" class="form-label">Levels</label>
      <input type="text" class="form-control" name="levels" id="levels" aria-describedby="levels"
        placeholder="levels..." required value="${house.levels}">
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." required value="${house.year}">
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required value="${house.price}">
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required value="${house.imgUrl}">
    </div>
  </div>
  <div class="mb-3">
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}