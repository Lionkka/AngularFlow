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

## Homework 4 ## (Group 2)
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.

## Homework 4 ## (Group 1)
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)

## Homework 5 ##
- Create application on type script. Application use jquery library, bootstrap scss library and contains few png on the page. Application should be contains two input fields (email and name). If email and name is valid and button pressed should be show pop-up window with png picture on the background.
- all ts should be bundled with web pack.
- All scripts should use OOP style
- scss should be transpile into css
- jquery should be included in common chunk(CommonChunk Plugin)
- scripts add to html automatically.
- on the page we should show version of the script(version define by webpack)
- version has to be shown only for development version of build
- images included and put to the sources via webpack

## Homework 6 ##
 - Create counter component. (first) Component contains two buttons first add 1 to general count. Second substract 1 from general count. Count should be shown pretty. Html should be in separate file. We need to set counter step. If I do not push the button after each 20 seconds counter increase by 1 point and if it increase automatically counter should be colored by red. If I increase/decrease by button counter should be colored blue(pretty blue). Second component should contains number only.

 ## Homework 7 ##
- Create root component container. As its first child element create clock container(has clock but not show it). As clock container timer child create show-time component (It shows time and has button - remember time). As root container child create element time-capsule. It can remember time from show-time container. This container contains element that has button thats trigger event that forced show time container show remembered time for 5 seconds. After this it has to show time as usually.

## Homework 8 ##
- Password pipe. Input string output * symbols instead all characters.
- Create orderBy pipe for ordering numeric and string arrays. Input parameter sort order Asc/Desc.
- Create translator pipe that will be translate words that contains in the included dictionary. EN -> RU

## Homework 9 ##
- Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)
- Given counter - After starting application it disabled. After two seconds after app start it enabled to increase/decrease
- Counter decrease/increase appear to counter after 1 second delay.
- Use redux components architecture.
- Enjoy!

## Homework New (Group2)##
- Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.
- Implement generic for two way linked list for different items type.
- Create d.ts file for jQueryCookie library
- Transpile these files to js and then create bundle with webpack that you have from previous tasks and create webpack config for bundling them to one file.

## Homework Component2 (Group2)##
- Create parent component tic-tac-toe container
- Create component tic-tac-toe cell if you click on cell cross appears  if you click twice zero appears
- Integrates all components together

 ## Homework New ##
- Create root component container. As its first child element create clock container(has clock but not show it). As clock container timer child create show-time component (It shows time and has button - remember time). As root container child create element time-capsule. It can remember time from show-time container. This container contains element that has button thats trigger event that forced show time container show remembered time for 5 seconds. After this it has to show time as usually.
  