const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

const config = getDefaultConfig(__dirname);

const watchFolders = [];
if (fs.existsSync(path.resolve(__dirname, 'lib'))) {
  watchFolders.push(path.resolve(__dirname, 'lib'));
}
config.watchFolders = watchFolders;

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
];

config.resolver.disableHierarchicalLookup = true;

module.exports = config;
