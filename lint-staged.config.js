module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '**/*.ts?(x)': () => 'npm run build:types',
  '*.json': ['prettier --write --ignore-unknown'],
};
