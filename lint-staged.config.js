module.exports = {
  // це перевірить файли TypeScript
  '**/*.(ts|tsx)': () => 'npm run tsc -- --noEmit',

  // Це відформатує і виправить помилки в файлах TypeScript і JavaScript
  '**/*.(ts|tsx|js)': filenames => [
    `npm run eslint -- --fix ${filenames.join(' ')}`,
    `npm run prettier -- --write ${filenames.join(' ')}`,
  ],

  // це відформатує файли MarkDown і JSON
  '**/*.(md|json)': filenames =>
    `npm run prettier -- --write ${filenames.join(' ')}`,
};
