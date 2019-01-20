const firebase = require('./firebase.js')


module.exports = function(location, uid) {
	let db = firebase.database()
	db.ref(`lots/P208/${location}`).set({
		location: location,
		user: uid
	})
	console.log("Logged on firebase")
}