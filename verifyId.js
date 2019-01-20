let permits = {
	0: true,
	4: true,
	7: true
}
module.exports = function(id) {
	return permits[id]
}