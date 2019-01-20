const bleno = require('../blue/bleno/')
const util = require('util')
var PermitAuthRequestCharacteristic = require('./permitAuth.js')

function ParkingService(parkingSpot) {
	bleno.PrimaryService.call(this, {
		uuid: '13333333333333333333333333333337',
		characteristics: [
			new PermitAuthRequestCharacteristic(parkingSpot)
		]
	})
}

util.inherits(ParkingService, bleno.PrimaryService)
module.exports = ParkingService