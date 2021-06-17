const tailwindcss = require("tailwindcss");
//const tailwindcss = require("@tailwindcss/jit"); // did not work

module.exports = {
  plugins: ["postcss-preset-env", tailwindcss],
};
