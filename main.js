// Character Class
// Weapon

function Character (options) {
  const opts = options || {}
  calvin = 'a person'
  this.name = opts.name
  this.age = opts.age || 21
  this.class = opts.class
  this.health = 100
  this.weapon = null

  this.addWeapon = function (weaponInstance) {
    this.weapon = weaponInstance
    console.log(
      `You have been armed with ${this.weapon.name} with ${this.weapon.power}`
    )
  }
}

Character.prototype.attack = function (characterInstance) {
  const random = Math.floor(Math.random() * 10)
  console.log('random number', random)
  if (random < 8) {
    if (characterInstance.health <= 0) {
      alert(`${this.name} wins!  and beat ${characterInstance.name} soundly!`)
    }
    characterInstance.health = characterInstance.health - this.weapon.power
    console.log(
      'character attacked health',
      characterInstance.health,
      this.weapon.power
    )
  } else {
    console.log('pew pew, it missed!')
  }
}

function Weapon (options) {
  const opts = options || {}
  this.name = opts.name || 'pea shooter'
  this.power = opts.power || 1
}

const heather = { name: 'Heather the Head', class: 'Warrior Elf' }
const andi = { name: 'Andi the prototype', class: 'Ninja Human' }

const Heather = new Character(heather)
const Andi = new Character(andi)

const crossbow = new Weapon({ name: 'crossbow', power: 45 })
const katana = new Weapon({ name: 'katana', power: 30 })

Heather.addWeapon(crossbow)
Andi.addWeapon(katana)

console.log(Heather instanceof Character)
