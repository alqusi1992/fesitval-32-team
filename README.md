Demo: https://github.com/alqusi1992/fesitval-32-team


# class32-project

## Styling

-  The Project is styled using the styled - component for the User Interface. Each component will have its own styled version inside the folder.

## FrontEnd Folder Structure

```
client
 ┗ src
 ┃ ┣
 ┃ ┃
 ┃ ┣ components
 ┃ ┃ ┣ Nav
 ┃ ┃ ┃   ┣ NavStyle.js
 ┃ ┃ ┃   ┣ Nav.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ Pages
 ┃ ┃
 ┃ ┣ GlobalStyles.js
 ┃ ┣ Context

```

-  Each component folder gets 2 files one for the styles and one for exporting the logic with the styles, and every logic component get exported from the index.js .
-  index.js is responsible for exporting the final components.
-  globalStyles is responsible for exporting reusable components.

## FrontEnd Routing Solution

The client side routing is done using the library of react-router-dom.

## BackEnd Folder Structure

```
server
 ┣
 ┣ config
 ┃ ┣ connectDB.js                      ## Database connection
 ┃
 ┃
 ┣ controllers                         ## endpoints controllers
 ┣ models                              ## database modals
 ┣ routes
 ┣ .gitignore
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┣ .env
 ┗ index.js

```

Festival React Project is using REST API with Express.

## Code Style

Application has ES6 syntax and has not used any shortcuts for the booleans. The variable has descriptive names using the camelCase convention. The Global variables will be capitals.

## Object

### creating an object

```javascript
// bad
const item = new Object();

// good
const item = {};
```

### Property value shorthanded

-  Group your shorthand properties at the beginning of your object declaration
-  Use property value shorthand

```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
   episodeOne: 1,
   twoJediWalkIntoACantina: 2,
   lukeSkywalker,
   episodeThree: 3,
   mayTheFourth: 4,
   anakinSkywalker,
};

// good
const obj = {
   lukeSkywalker,
   anakinSkywalker,
   episodeOne: 1,
   twoJediWalkIntoACantina: 2,
   episodeThree: 3,
   mayTheFourth: 4,
};
```

## Use Spread Operator over `Object-assign` .

```javascript
// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
```

## Destructuring

```javascript
// bad
const getFullName = (user) => {
   const firstName = user.firstName;
   const lastName = user.lastName;

   return `${firstName} ${lastName}`;
};

// good
const getFullName = (user) => {
   const { firstName, lastName } = user;
   return `${firstName} ${lastName}`;
};

// best
const getFullName = ({ firstname, lastname }) => {
   return `${firstName} ${lastName}`;
};
```

### Use object destructuring for multiple variables instead of array

```javascript
// bad
const processInput = (input) => {
   // then a miracle occurs
   return [left, right, top, bottom];
};

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
const processInput = (input) => {
   // then a miracle occurs
   return { left, right, top, bottom };
};

// the caller selects only the data they need
const { left, top } = processInput(input);
```
