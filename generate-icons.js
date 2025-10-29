const fs = require('fs');
const path = require('path');

const svgFiles = [
  'calender-medium-outline.svg',
  'clock-medium-outline.svg',
  'giftbox.svg',
  'house-medium-outline.svg',
  'house-medium-solid.svg',
  'inbox-medium-outline.svg',
  'inbox-medium-solid.svg',
  'key-medium-outline.svg',
  'lock-medium-solid.svg',
  'people-medium-outline.svg',
  'people-medium-solid.svg',
  'person-medium-outline.svg',
  'person-medium-solid.svg',
  'person-minus-medium-outline.svg',
  'person-plus-medium-outline.svg',
  'person-star-medium-outline.svg',
  'qrcode-medium-outline.svg',
  'search-medium-outline.svg',
  'search-medium-solid.svg',
  'settings-medium-outline.svg',
  'wallet-medium-outline.svg',
];

let output = '// Auto-generated icon data - SVG strings\nconst iconsData = {\n';

svgFiles.forEach((file) => {
  const iconName = file.replace('.svg', '');
  const svgContent = fs.readFileSync(path.join(__dirname, file), 'utf-8').trim();
  const escapedContent = svgContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  output += `  '${iconName}': \`${escapedContent}\`,\n`;
});

output += '};\n\nexport default iconsData;\n';

fs.writeFileSync(path.join(__dirname, 'icons-data.js'), output);
console.log('✅ Generated icons-data.js successfully!');
