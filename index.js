'use strict';
/**
 * Export
 *
 */

exports = module.exports = {
	utils: require('./src/utils.js'),
	dust: {
		userCan: require('./src/dust/user-can.js')
	}
};

/*
  Export the version
*/

exports.version = require('./package').version;
