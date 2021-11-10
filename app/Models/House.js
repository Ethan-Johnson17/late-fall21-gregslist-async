

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms || ''
    this.bathrooms = data.bathrooms || ''
    this.levels = data.levels || ''
    this.imgUrl = data.imgUrl || ''
    this.year = data.year || ''
    this.price = data.price || ''
    this.description = data.description || ''
    this.size = data.size || ''
  }

  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded h-100">
        <img width="100%" height="300px" class="car-img rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p><b>${this.bedrooms}bed/${this.bathrooms}bath - Built in ${this.year}</b></p>
          <p>${this.levels}</p>
          <div class="d-flex align-items-center">
            <p class="m-0"><em>$${this.price}</em></p>
            </div>
            <div>
            <p class="m-0">${this.description}</p>
            </div>
            <div class="text-end">
            <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}