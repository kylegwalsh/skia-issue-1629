// This file is important because it prevents react-native-skia from
// erroring on web (it complains about not being able to find fs and path).
// The generally accepted solution is to polyfill path and fs on web, but I couldn't
// find an example of how to do that without using webpack (we use metro).
// Therefore, we're using the solution here: https://github.com/Shopify/react-native-skia/issues/1448
const fs = require('fs');
const path = require('path');

// ---------- COPY INCORRECTLY COPIED SKIA SETUP CODE TO PUBLIC FOLDER ----------
// Copy contents to correct location
fs.copyFileSync(
  path.join(__dirname, '../web/static/js/canvaskit.wasm'),
  path.join(__dirname, '../public/js/canvaskit.wasm')
);
// Delete incorrect location
fs.rmSync(path.join(__dirname, '../web'), { recursive: true, force: true });
console.log('[configure-skia-web] Copied canvaskit.wasm to public folder');

// ---------- UPDATE PACKAGE.JSON TO AVOID USING PATH AND FS ----------
const packageJsonPath = path.join(
  __dirname,
  '../node_modules',
  'canvaskit-wasm',
  'package.json'
);
const packageJson = require(packageJsonPath);

packageJson.browser = {
  fs: false,
  path: false,
  os: false,
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('[configure-skia-web] Updated canvaskit-wasm package.json');
