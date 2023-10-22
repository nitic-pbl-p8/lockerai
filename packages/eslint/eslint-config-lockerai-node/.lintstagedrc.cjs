module.exports = {
  "**/*.{js,ts,json}": (/** @type {string[]} */ filenames) =>
    `pnpm eslint --fix ${filenames.join(" --fix ")}`,
  "**/*.{js,ts,json}": (/** @type {string[]} */ filenames) =>
    `pnpm prettier --check ${filenames.join(" --check ")}`,
};
