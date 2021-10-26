
export class Car {
  constructor(data) {
    // NOTE creates a random id when the object is created
    this.id = data.id
    // set default value of empty string
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || 1950
    this.price = data.price || 1
    this.color = data.color
    this.description = data.description || ''
    this.imgUrl = data.imgUrl || ''
  }
  // the get<space>Template defines that this is a getter function
  // getter function FAKES a property
  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="car-img rounded-top" src="${this.imgUrl}" alt="car image">
        <div class="p-3">
          <p><b>${this.make} - ${this.model} - ${this.year}</b></p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <div style="background-color: ${this.color}" class="color-swatch mx-2"></div>
            <p class="m-0"><em>$${this.price}</em></p>
            </div>
            <div class="text-end">
            <span title="edit car" class='justify-self-end selectable text-dark lighten-20' onclick="app.carsController.openEditModal('${this.id}')"><i class='mdi mdi-pencil'></i></span>
            <span title="delete car" class='justify-self-end selectable text-danger lighten-20' onclick="app.carsController.deleteCar('${this.id}')"><i class='mdi mdi-delete'></i></span>
            </div>
        </div>
      </div>
    </div>
    `
  }
}
