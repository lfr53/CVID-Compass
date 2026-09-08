const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const modules = new Map();
function compile(file) {
  const id = path.relative(root, file).replaceAll('\\', '/');
  if (modules.has(id)) return id;
  modules.set(id, '');
  let source = fs.readFileSync(file, 'utf8');
  source = source.replace(/^import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/gm, (_, names, specifier) => {
    const dependency = compile(path.resolve(path.dirname(file), specifier));
    return `const {${names.replace(/\s+as\s+/g, ':')}} = require(${JSON.stringify(dependency)});`;
  });
  const exports = [];
  source = source.replace(/\bexport\s+(const|let|function|class)\s+(\w+)/g, (_, kind, name) => {
    exports.push(name);
    return `${kind} ${name}`;
  });
  if (/^\s*(import|export)\s/m.test(source)) throw Error('Unsupported module syntax in ' + id);
  modules.set(id, `${JSON.stringify(id)}: function(require, exports) {\n${source}\nObject.assign(exports, {${exports.join(',')}});\n}`);
  return id;
}
const entry = compile(path.join(root, 'src/main.js'));
const bundle = `/* Generated from source modules by work/build-preview.cjs. */\n(function(){\n'use strict';\nconst modules={${[...modules.values()].join(',\n')}};\nconst cache={};\nfunction require(id){if(cache[id])return cache[id];const exports=cache[id]={};modules[id](require,exports);return exports;}\ntry { require(${JSON.stringify(entry)}); } catch(error) { console.error(error); const app=document.querySelector('#app'); if(app)app.textContent='The page could not load. Please keep index.html, src, assets and education together. 页面加载失败，请保留完整文件夹。'; }\n})();\n`;
fs.writeFileSync(path.join(root, 'src/site-bundle.js'), bundle);
console.log(`Bundled ${modules.size} modules (${Buffer.byteLength(bundle)} bytes).`);
