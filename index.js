const myModule = require('@abadri-test/my-yarn-test');

console.log(myModule.bar);

myModule.exports = {
  baz: 'two'
};