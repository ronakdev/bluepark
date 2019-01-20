const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config)


module.exports = function(location, uid) {
	let db = firebase.database()
	db.ref(`lots/P208/${location}`).set({
		location: location,
		user: uid
	})
}