## Homework 1 ##
- Implement override method that can retrieve day, month(as number as text format) and year and return Date object
- Override this method for retrieve array of such parameters and retrieve array with dates.
- Implements to string method. Retrieve different type of object returns string
- Implements valueOf method. Retrieve different type of objects returns true/false.

## Homework 2 ##
- Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.
- Implement generic for two way linked list for different items type.
- Create d.ts file for jQueryCookie library
- Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel when the first finish run third and when all finish console log 'Done!') timeout request to paralel. And When it all done log to console 'DONE!'(Use p)

## Homework 3 ##
- Create Circle class. It contains three properties x, y and radius. Create method calculate circle square. Create method calculate circle length. If radius will be more that 100 and less than 0 throw exception. Use TDD paradigm and jest framework.

## Homework 3 (Group 2) ##
- Create decorator for class. Decorator should add method componentDidMount that console log 'Component ${name} was mounted'.
- Create decorator for method that before method invoke fill field hash of class (get name and class id and put to added field name)
- Add decorator notify. Decorator before invoke the method should be invoke all methods from input array of callbacks.  

## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)