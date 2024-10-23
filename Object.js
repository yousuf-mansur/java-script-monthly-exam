console.log('\n\nChecking an Object Type');
console.log('==============================\n\n');
const obj1 = {};
console.log(typeof obj1);
const obj2 = {};
console.log(obj2 instanceof Object);
console.log(!(obj2 instanceof Object));

console.log('\n\nUse an Object Literal to Bundle Data');
console.log('==============================\n\n');
const trainee = {
  traineeId: 1280670,
  firstName: 'Md. Yousuf',
  lastName: 'Mansur',
  dateOfBirth: new Date(1994, 4, 25),
  age: 30,
  sayHello: function (id, fname, lname) {
    console.log(
      `This is ${this.firstName} ${this.lastName}, I am ${this.age} years old. My Trainee ID is: ${this.traineeId}`
    );
  },
};
console.log(trainee.dateOfBirth);
trainee.sayHello();

console.log('\n\nCheck If an Object Has a Property');
console.log('==============================\n\n');
const address = {
  country: 'Bangladesh',
  city: 'Dhaka',
  streetNum: '44',
  streetName: 'Bazar Road',
};
console.log(address.hasOwnProperty('country'));
console.log(address.hasOwnProperty('zipCode'));

console.log('\n\nIterating All the Properties of an Object');
console.log('==============================\n\n');
const address1 = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd',
};
for (const property in address) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

console.log('\n\nTesting for and empty Object');
console.log('==============================\n\n');
const blankObject = {};
if (Object.keys(blankObject).length === 0) {
  console.log("This code runs because there's nothing in this object");
}
const objectWithProperty = { price: 47.99 };
if (Object.keys(objectWithProperty).length === 0) {
  console.log("This code won't run, because objectWithProperty isn't empty");
}

console.log('\n\nMerge the Properties of Two Objects');
console.log('==============================\n\n');
const address3 = {
  country: 'Bangladesh',
  city: 'Dhaka',
  streetNum: '44',
  streetName: 'Bazar Road',
};
const customer = {
  firstName: 'Md. Yousuf',
  lastName: 'Sarkar',
};
const customerWithAddress = { ...customer, ...address3 };
console.log(customerWithAddress);

console.log('\n\nCustomizing the way a property is defined');
console.log('==============================\n\n');
const person = {
  firstName: 'Md. Yousuf',
  lastName: 'Monsur',
  dateOfBirth: new Date(1994, 4, 25),
};

Object.defineProperty(person, 'age', {
  configurable: true,
  enumerable: true,
  get: function () {
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())
    ) {
      age -= 1;
    }
    return age;
  },
});
console.log(person.age);

console.log('\n\nPreventing any changes to an Object');
console.log('==============================\n\n');
const customer1 = {
  firstName: 'Md. Yousuf',
  lastName: 'Mansur',
};
Object.freeze(customer1);
customer1.firstName = 'Sarkar';
customer1.middleInitial = 'Palace';
delete customer1.lastName;
console.log(customer1);

console.log('\n\nIntercepting and Changing Actions on an Object with a Proxy');
console.log('==============================\n\n');

const product = { name: 'Banana' };

const propertyChecker = {
  set: function (target, property, value) {
    if (property === 'price') {
      if (typeof value !== 'number') {
        throw new TypeError('price is not a number');
      } else if (value <= 0) {
        throw new RangeError('price must be greater than zero');
      }
    } else if (property !== 'name') {
      throw new ReferenceError(`property '${property}' not valid`);
    }
    target[property] = value;
    return true; // Return true to indicate success
  },
};

const proxy = new Proxy(product, propertyChecker);
try {
  proxy.name = 'Apple';
  proxy.type = 'red delicious';
  proxy.price = 'Five dollars';
  proxy.price = -1.0;
} catch (error) {
  console.error(error.message);
}

try {
  product.price = -1.0;
} catch (error) {
  console.error(error.message);
}

console.log('\n\nClone an Object');
console.log('==============================\n\n');
const animal = {
  name: 'Red Fox',
  class: 'Mammalia',
  order: 'Carnivora',
  family: 'Canidae',
  genus: 'Vulpes',
  species: 'Vulpes vulpes',
};
const animalCopy = { ...animal };
console.log(animalCopy.species);

console.log('\n\nMake a Deep Copy of an Object');
console.log('==============================\n\n');
const student = {
  firstName: 'Monsur',
  lastName: 'Sarkar',
  testScores: [78, 88, 94, 91, 88, 96],
};

function cloneStudent(student) {
  const studentCopy = { ...student };
  studentCopy.testScores = [...student.testScores];
  return studentCopy;
}
const studentCopy = cloneStudent(student);
studentCopy.testScores[0] = 56;
console.log(student.testScores[0]);
console.log(studentCopy.testScores[0]);

console.log('\n\nCreating Absolutely Unique Object Property Keys');
console.log('==============================\n\n');
const newObj = {};
const uniqueId = Symbol();
newObj[uniqueId] = 'No two alike';
const anotherUniqueId = Symbol();
newObj[anotherUniqueId] = 'This will not clash, either';
console.log(newObj);

console.log('\n\nIterating All the Properties of an Object');
console.log('==============================\n\n');
const TrafficLight = {
  Green: Symbol('green'),
  Red: Symbol('red'),
  Yellow: Symbol('yellow'),
};
function switchLight(newLight) {
  if (newLight === TrafficLight.Green) {
    console.log('Turning light green');
  } else if (newLight === TrafficLight.Yellow) {
    console.log('Get ready to stop');
  } else {
    console.log('Turning light red');
  }
  return newLight;
}
let light = TrafficLight.Green;
light = switchLight(TrafficLight.Yellow);
light = switchLight(TrafficLight.Red);
console.log(light);

console.log('\n\nUnit Conversion');
console.log('==============================\n\n');

const Units = {
  Meters: Symbol('Meters'),
  Centimeters: Symbol('Centimeters'),
};

const conversionFactors = {
  [Units.Meters]: 1,
  [Units.Centimeters]: 0.01,
};

function convertToMeters(value, unit) {
  const conversionFactor = conversionFactors[unit];
  if (conversionFactor !== undefined) {
    return value * conversionFactor;
  } else {
    throw new Error('Invalid unit');
  }
}

console.log(convertToMeters(10, Units.Meters));
console.log(convertToMeters(10, Units.Centimeters));
