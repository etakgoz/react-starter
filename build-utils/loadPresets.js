const webpackMerge = require('webpack-merge');

const applyPresets = (env) => {
    const { presets } = env;
    
    if (!presets) {
        return {};
    } 

    const mergedPresets = [].concat(...[presets]); // TODO: flatten, how?

    const mergedConfigs = mergedPresets.map(
        preset => require(`./presets/preset.${preset}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);

};

module.exports = applyPresets;