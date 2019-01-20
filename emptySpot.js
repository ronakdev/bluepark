const firebase = require('./firebase.js')


module.exports = function(location) {
	let db = firebase.database()
	db.ref(`lots/P208/${location}`).set(false)
}