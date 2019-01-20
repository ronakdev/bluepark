const bleno = require('../blue/bleno/')
var PermitAuthRequestCharacteristic = require('./permitAuth.js')

function ParkingService(parkingSpot) {
	bleno.PrimaryService.call(this, {
		uuid: '13333333333333333333333333333337',
		characteristics: [
			new PermitAuthRequestCharacteristic(parkingSpot)
		]
	})
}

module.exports = ParkingService