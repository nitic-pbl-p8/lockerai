/** @type {import('stylelint').Config} */
module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-prettier', 'stylelint-config-recess-order', 'stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
};
