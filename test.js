var dsl = require('xpath-builder').dsl();


console.log( dsl.descendant('p').where(dsl.attr('id').equals('foo')));