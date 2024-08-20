const fs = require('fs');
const csso = require('csso');
const path = require('path');

const packages = [
  {
    name: "fluidsizingcss",
    files: [
      'src/fluidsizingcss-common.css',
      'src/fluidsizingcss-physical.css',
      'src/fluidsizingcss-logical.css'
    ]
  },
  {
    name: "fluidsizingcss-physical",
    files: [
      'src/fluidsizingcss-common.css',
      'src/fluidsizingcss-physical.css',
    ]
  },
  {
    name: "fluidsizingcss-logical",
    files: [
      'src/fluidsizingcss-common.css',
      'src/fluidsizingcss-logical.css'
    ]
  },
]

// Ensure the dist/css directory exists
const distDir = 'dist/css';

// Delete all files under dist/css
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log('Deleted all files under dist/css');
}

// Recreate the dist/css directory
fs.mkdirSync(distDir, { recursive: true });
console.log('Created dist/css directory');

function mergeAndMinifyFiles(package) {

  const name = package.name;
  const files = package.files;

  // Merge all files into one
  const mergedInput = files.map(file => fs.readFileSync(file, 'utf8')).join('\n');
  console.log(`Merged files: ${files.join(', ')}`);

  // Write the unminified merged file
  fs.writeFileSync(`dist/css/${name}.css`, mergedInput, 'utf8');
  console.log(`Written unminified merged file: dist/css/modulate.css`);

  // Minify the merged content
  const mergedOutput = csso.minify(mergedInput).css;

  // Write the minified merged file
  fs.writeFileSync(`dist/css/${name}.min.css`, mergedOutput, 'utf8');
  console.log(`Written minified merged file: dist/css/modulate.min.css`);
}

packages.forEach(package => {
  mergeAndMinifyFiles(package);
}); 

console.log('CSS files have been processed successfully.');