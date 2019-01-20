const bleno = require('../blue/bleno/')
const verifyId = require('./verifyId.js')
const util = require('util')

const confirmSpot = require('./confirmSpot.js')
// hardware
// const Gpio = require('onoff').Gpio
// let LED = new Gpio(4, 'out')

function PermitAuthRequestCharacteristic(parkingSpot) {
	this.parkingSpot = parkingSpot
	bleno.Characteristic.call(this, {
		uuid: '4dfda589-ab7e-4304-bb88-9ea25910c888',
		properties: [
			"write", "read"
		],
		descriptors: [
			new bleno.Descriptor({
				uuid: '2901',
				value: 'Authenticates your parking'
			})
		]
	})
}

util.inherits(PermitAuthRequestCharacteristic, bleno.Characteristic)
PermitAuthRequestCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
	console.log("We be written too")
	console.log(data)
	if (offset) {
		callback(this.RESULT_ATTR_NOT_LONG);
	} else if (data.length !== 2) {
		callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
	} else {
		if (offset) {
			callback(this.RESULT_ATTR_NOT_LONG);
		}
		else if (data.length !== 1) {
			callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
		}
		else {
			let id = data.readUInt8(0);
			console.log(id)
			if (verifyId(id)) {
				confirmSpot(this.parkingSpot.location, id)
				callback(this.RESULT_SUCCESS, this.parkingSpot.location)
				// LED.writeSync(0)
			} else {
				// LED.writeSync(1)
				// callback(this.INVALID_RESULT, null)
			}
		}
	}
}

PermitAuthRequestCharacteristic.prototype.onReadRequest = function(offset, callback) {
  //if (offset) {
    callback(this.RESULT_SUCCESS, this.parkingSpot.location);
  // }
  // else {
    // callback(this.RESULT_SUCCESS, null);
  // }
};

module.exports = PermitAuthRequestCharacteristic
