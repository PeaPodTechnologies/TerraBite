/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

	return fs.readJson(pathToConfigFile);
}

// this is to automatically find and load a configuration file from
// cypress/config/*.json
module.exports = (on, config) => {
	// accept a configFile value or use development by default
	const file = config.env.configFile || 'development';

	return getConfigurationByFile(file);
}
