// Constructors

// Cars
//  - cars have wheels
//  - cars have engines
//  - cars headlights
//  - startCar
//  - brake
//  - speedUp
//  - turn l/r
//  - go forward/backard

const familyVanOptions = {
  model: 'Dodge Grand Caravan',
  year: 2015,
  color: 'cobalt blue',
  type: 'van'
}
const dreamVehicleOpts = {
  model: 'Ford F150 Raptor',
  year: 2017,
  color: 'black',
  type: 'truck'
}
function Car (options) {
  const opts = options || {}
  this.model = opts.model || 'generic car'
  this.year = opts.year || '1908'
  this.color = opts.color || 'white'
  this.type = opts.type || 'car'
}

const myFamilyMobile = new Car(familyVanOptions)
const myDreamVehicle = new Car(dreamVehicleOpts)
const genericCar = new Car()
console.log('generic car', genericCar)
console.log('myFamilyMobile', myFamilyMobile, 'myDreamVehicle', myDreamVehicle)
