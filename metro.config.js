const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [/react-native-maps/];

module.exports = config; 