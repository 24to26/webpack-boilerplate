const { default: merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const developmentConfig = require("./webpack.dev");
const productionConfig = require("./webpack.prod");
const presetConfig = require("./build-utils/loadPresets");
const applyPresets = require("./build-utils/loadPresets");

module.exports = ({ mode, presets = "" }, args) => {
  const presetsArr = presets.length ? presets.split(",") : [];
  switch (mode) {
    case "development":
      return merge(commonConfig, developmentConfig, applyPresets({ presets: presetsArr }));
    case "production":
      return merge(commonConfig, productionConfig, applyPresets({ presets: presetsArr }));
    default:
      throw new Error("No matching configuration was found!");
  }
};
