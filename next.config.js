const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withCss(
  withSass(
    withImages({
      webpack(config, options) {
        return config;
      },
    })
  )
);
