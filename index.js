var ldutils = require('loader-utils');

module.exports = function(source) {
	this.cacheable && this.cacheable();

	const query = ldutils.parseQuery(this.query);
	var value = typeof source === 'string' ? JSON.parse(source) : source;

	query.key.split('.').map(function(key) {
		if (typeof value !== 'undefined')
			value = value[key];
	});

	this.values = [ value ];
	return [ 'module.exports = ', JSON.stringify(value, undefined, '\t'), ';' ].join('');
}
