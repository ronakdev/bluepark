const bleno = require('../blue/bleno/')
const util = require('util')
var PermitAuthRequestCharacteristic = require('./PermitAuthRequestCharacteristic.js')
var ClearParkingSpot = require('./ClearParkingSpotCharacteristic.js')
function ParkingService(parkingSpot) {
	bleno.PrimaryService.call(this, {
		uuid: '8556f0aa-38ec-4f2c-a499-021c5c8c4a49',
		characteristics: [
			new PermitAuthRequestCharacteristic(parkingSpot),
			new ClearParkingSpot(parkingSpot)
		]
	})
}

util.inherits(ParkingService, bleno.PrimaryService)
module.exports = ParkingService
