// you can pass in `scratchData` to test out `findByid`
// your function
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

//input items and idNum
//output idNum from items

//access array check
//access object
//search for idNum
//store idNum
//return idNum

function findById(items, idNum) {
  console.log(typeof items[0])
  let currentObject;
  for(let i = 0; i < items.length; i++) {
    currentObject = items[i];
    console.log(items[i].id === currentObject.id);
    if(currentObject.id === idNum) {
      return currentObject;
    } 
  }
  console.log('Did not work');
  return null;
 }
 
findById(scratchData, 222);


// 

function testIt() {
  var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];
  var result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' +
      result.id
    );
    return
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();



/////////////-------------------------



// running the function with `objectA` and `expectedKeys`
// should return `true`
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
  console.log('Comparing', object, expectedKeys)
  
  for (var i = 0; i < expectedKeys.length; i++) {
    // does the object have a key called the
    // same name as value of expectedKeys[i]?
    
    var currentValue = expectedKeys[i]
    
    if (object[currentValue] !== undefined) {
      // console.log('Object has key', currentValue)
    } else {
      console.log('Object does not have key', currentValue)
      return false
    }
  }
  
  //
  // if object has something extra
  // return false
  
  if (expectedKeys.length !== Object.keys(object).length) {
   console.log('There is an extra key.')
   return false; 
  }
  //
 
  console.log('Keys match')
  return true 
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt()



//-------

//input an object with owner (string) and 
//todo (array of string )properties
//want to return an object of owner and todo
//propoerties via html string

//
//use generateHtml method to create ul and lis
//return

function makeToDos(owner, toDos) {
  
//   console.log('The owner is ' + owner);
//   for(var i = 0; i < toDos.length; i++) {
//   console.log('<ul><li>' + toDos[i] + '</li></ul>');
//   }
// }
var first = '<ul>';
var last = '</ul>';

return {
  owner, toDos,
  generateHtml: function() {
    let html = '<ul>';
    
    for(var i = 0; i < toDos.length; i++) {
    html+= '<li>' + toDos[i] + '</li>';
      }
      return html + '</ul>';
    }
  }
}
/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/


// tests

function testIt() {
  var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
  var owner = 'Steve';
  var myToDos = makeToDos(owner, toDos);
  if (!myToDos || !myToDos instanceof Object) {
    console.error('FAILURE: `makeToDos` must return an object');
    return;
  }
  
  var expectedKeys = ['owner', 'toDos', 'generateHtml'];
  var missingKeys = expectedKeys.filter(function(key) {
    return Object.keys(myToDos).indexOf(key) < 0;
  });
  
  if (missingKeys.length > 0)
  {
    console.error(
      'FAILURE: `makeToDos` missing following keys: ' + missingKeys.join(', '));
    return;
  }
  
  if (myToDos.owner !== owner) {
    console.error(
     'FAILURE: expected `makeToDos` to return an object with `.owner` '+
     'set to value passed in for `owner`, in this case ' + owner);
    return;
  }
  if (!toDos.every(function(toDo) {
    return myToDos.toDos.find(function(_toDo) {
      return _toDo === toDo;
    })
  })) { 
    console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
  }
  
  var element = $(myToDos.generateHtml());

  if (element.length !== 1) {
    console.error(
      'FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
      'method that returns an unordered list');
    return;
  }

  if (!toDos.every(function(toDo) {
    return element.find('li:contains("' + toDo + '")').length === 1;
  })) {
    console.error('FAILURE: generateHtml must return li element for every todo');
    return
  }

  console.log('SUCCESS: `makeToDos` is working');
  
}

testIt();



//-----------Additional Object Drills

let loaf = {
  flour: 300,
  water: 210
}
console.log(loaf.flour)
console.log(loaf.water)

//--------------------

let myObject = {
  foo: 'red', 
  bar: 'blue', 
  fum: 'green', 
  quux: 'yellow', 
  spam: 'orange'
};

for (let key in myObject) {
  console.log(key + " is equal to " + myObject[key]);
}

//--------------------

let myFood = {
   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};
console.log(myfood.meals[3]);

//------------

let player = [
   {name: 'Lebron',
   job_title: 'basketball player'
   },
   {name: 'Trout',
   job_title: 'baseball player',
   boss: 'Angels manager'
   },
   {name: 'Brady',
   job_title: 'football player',
   boss: 'Pats coach'
   },
   {name: 'Crosby',
   job_title: 'hockey player',
   boss: 'Pittsburg coach'
   }
]

for (var i = 0; i < player.length; i++) {
  let athlete = player[i];
  if (!athlete.boss) {
      console.log(`${athlete.name}, the ${athlete.job_title}, reports to no one`)
  } else
  console.log(`${athlete.name}, the ${athlete.job_title}, reports to his ${athlete.boss}`)
}

  





//-----------------


function decode(string) {

let code = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
  
  if (string[0] === "a"){
		console.log(string[1])
  }
  if (string[0] === "b"){
		console.log(string[2]);
  }
  if (string[0] === "c"){
	console.log(string[3]);
  }
  if (string[0] === "d"){
  console.log(string[4]);
  }
  else {
    console.log(" ")
  }
}

decode("craft");
decode("block");
decode("argon");
decode("meter");
decode("bells");
decode("brown");
decode("croon");
decode("droop");

//----------------





