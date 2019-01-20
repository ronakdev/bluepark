const bleno = require('../blue/bleno/')
const util = require('util')

const emptySpot = require('./emptySpot.js')


function ClearParkingSpotCharacteristic(parkingSpot) {
	this.parkingSpot = parkingSpot
	bleno.Characteristic.call(this, {
		uuid: '651edd60-cd7a-460f-8991-489739b155e3',
		properties: [
			"write", "read"
		],
		descriptors: [
			new bleno.Descriptor({
				uuid: '2901',
				value: 'Clears the Parking Spot'
			})
		]
	})
}

util.inherits(ClearParkingSpotCharacteristic, bleno.Characteristic)
ClearParkingSpotCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
	emptySpot(this.parkingSpot.location)
}

ClearParkingSpotCharacteristic.prototype.onReadRequest = function(offset, callback) {
  //if (offset) {
    callback(this.RESULT_SUCCESS, this.parkingSpot.location);
  // }
  // else {
    // callback(this.RESULT_SUCCESS, null);
  // }
};

module.exports = ClearParkingSpotCharacteristic
