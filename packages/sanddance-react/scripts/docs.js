const fs = require('fs');

const docroot = '../../docs/docs/sanddance-react/v1/api/';

fs.unlinkSync(docroot + 'index/sanddance.md');

let index = fs.readFileSync(docroot + 'index.md', 'utf8');
index = index.replace(/(?!## Namespaces[\s\S]*)### \[SandDance\].*\n/, '### SandDance - instance of [sanddance](../../../sanddance/v1/api)');
fs.writeFileSync(docroot + 'index.md', index, 'utf8');
