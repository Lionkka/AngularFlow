/* Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
Class should contains property value: string. If Dispose it should be equals ''.
If delete is should be equals 'deleted'. Id readonly it can't be changed */
import { Disposable } from './classes/disposable';
import { Deletable } from './classes/deletable';
import { Readable } from './classes/readable';
import { Collector } from './classes/collector';

import { applyMixins } from './utils/apply-mixins';

applyMixins(Collector, [Disposable, Deletable, Readable]);

// check

let coll = new Collector('waka', false);

// SZ please use es6 templates for concatination
// SZ console.log(`Value: ${coll.value}; Read Only: ${coll.isReadOnly}`);

console.log('Value: ' + coll.value + '; Read Only: ' + coll.isReadOnly);

coll.value = 'some value';
console.log('Value: ' + coll.value + '; Read Only: ' + coll.isReadOnly);

coll.dispose();
console.log('Value: ' + coll.value + '; Read Only: ' + coll.isReadOnly);

coll.delete();
console.log('Value: ' + coll.value + '; Read Only: ' + coll.isReadOnly);

coll.readonly();
console.log('Read Only: ' + coll.isReadOnly);

coll.value = 'PackMan';
console.log('Value: ' + coll.value + '; Read Only: ' + coll.isReadOnly);

/* Implement generic for two way linked list for different items type */

import { Generic } from './classes/generic';

// check
console.log('--------');

let list = new Generic<string>();

list.add('Joe');

list.add('Tom');

list.add('Peter');

console.log(list.getFirst());
console.log(list.getLast());
console.log(list.getOne(1));

list.remove(1);

console.log(list.getOne(2));

/* Create d.ts file for jQueryCookie library */

/* Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel
    when the first finish run third and when all finish console log 'Done!') timeout request
    to paralel. And When it all done log to console 'DONE!'(Use p) */

import { Promise } from 'es6-promise';

function delayedEcecution () {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 2000);
    });
};

// check

console.log('--------');

Promise.all([
    delayedEcecution(),
    delayedEcecution(),
    delayedEcecution()
]).then(
    (result) => {
        console.log('DONE!');
    },
    (error) => {
        console.log('Error');
    }
);