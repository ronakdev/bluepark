const bleno = require('bleno')
const ParkingService = require('./parkingService.js')

let parkingSpot = {
	location: "1-1",
	permitsAccepted: ["A"],
}

let parkingService = new ParkingService(parkingSpot)

let name = `Spot ${parkingSpot.location} (${parkingSpot.permitsAccepted.join(", ")})`

bleno.on('stateChange', function(state) {
	if (state === 'poweredOn') {
		// we can do stuff!

		bleno.startAdvertising(name, [parkingService.uuid], function(err) {
			if (err) {
				console.log(err)
			}
		})
	} else {
		bleno.stopAdvertising()
	}
})

bleno.on('advertisingStart', function(err) {
	if (!err) {
		console.log("Advertising Signal")
	
		bleno.setServices([parkingService])
	}
})