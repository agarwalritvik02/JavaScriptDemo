'use strict';
let func = function myFunction() {
    console.log('hello world');
}

if (typeof process === 'object') func();

function hello() {
    func();
}
