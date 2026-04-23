const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Добавляем папки монорепозитория в watchFolders
config.watchFolders = [
  path.resolve(__dirname, 'libs'),
  path.resolve(__dirname, 'web'), // если веб в отдельной папке
];

// Указываем, где искать node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, 'libs', 'node_modules'),
];

// Отключаем иерархический поиск (важно для монорепозиториев)
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
