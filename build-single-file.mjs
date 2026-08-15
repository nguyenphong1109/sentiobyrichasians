import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const releaseDir = join(root, 'release');
const releaseFile = join(releaseDir, 'Sentio.html');
const read = (name, encoding = 'utf8') => readFileSync(join(root, name), encoding);

const css = read('styles.css');
const js = read('app.js');
const logo = read('sentio-logo.jpg', null).toString('base64');
const logoDataUrl = `data:image/jpeg;base64,${logo}`;

let html = read('index.html');
html = html.replace(
  '  <link rel="stylesheet" href="styles.css">',
  `  <style>\n${css}\n  </style>`,
);
html = html.replaceAll('src="sentio-logo.jpg"', `src="${logoDataUrl}"`);
html = html.replace(
  '  <script src="app.js"></script>',
  `  <script>\n${js}\n  </script>`,
);

if (
  html.includes('href="styles.css"')
  || html.includes('src="app.js"')
  || html.includes('src="sentio-logo.jpg"')
) {
  throw new Error('Single-file build still contains external local asset references.');
}

mkdirSync(releaseDir, { recursive: true });
writeFileSync(releaseFile, html, 'utf8');
console.log(`Built ${releaseFile}`);
