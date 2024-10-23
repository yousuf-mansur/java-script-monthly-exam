console.log('\n\nCatching and Neutralizing an Error');
console.log('==============================\n\n');
try {
  const uri = decodeURI('http%test');

  console.log('Success!');
} catch (error) {
  console.log(error);
}

console.log('\n\nCatching Different Types of Errors');
console.log('==============================\n\n');
try {
  throw new TypeError('Type error occurred');
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error caught:', error.message);
  } else {
    console.error('Other error caught:', error.message);
  }
}

console.log('\n\nCatching Asynchronous Errors');
console.log('==============================\n\n');
async function doWork() {
  try {
    const response = await fetch('http://noserver');
  } catch (error) {
    console.log(error);
  }
}
doWork().then(() => {
  console.log('All done');
});

console.log('\n\nDetecting Unhandled Errors');
console.log('==============================\n\n');
window.addEventListener('error', function (errorEvent) {
  console.error('Unhandled error occurred:', errorEvent.error.message);
});

console.log('\n\nThrowing a Standard Error');
console.log('==============================\n\n');
function setAge(age) {
  const upper = 125;
  const lower = 18;
  if (age > 125 || age < 18) {
    throw new RangeError(
      `Age [${age}] is out of the acceptable range of ${lower} to ${upper}.`
    );
  }
}
setAge(130);

console.log('\n\nThrowing a Custom Error');
console.log('==============================\n\n');
class ProductNotFound extends Error {
  constructor(missingProductID) {
    super(`Product ${missingProductID} does not exist in the catalog`);
    this.name = 'ProductNotFound';
    this.productID = missingProductID;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProductNotFound);
    }
  }
}
try {
  throw new ProductNotFound(420);
} catch (error) {
  console.log(`An error occured with the message: ${error.message}`);
  if (error instanceof ProductNotFound) {
    console.log(`Missing: ${error.productID}`);
  }
}

console.log('\n\nWriting Unit Tests for Your Code');
console.log('==============================\n\n');
function sum(a, b) {
  return a + b;
}

function testSum() {
  const result = sum(2, 3);
  if (result !== 5) {
    throw new Error('Sum function test failed');
  }
}
testSum();
