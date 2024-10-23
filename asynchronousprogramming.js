console.log('\n\nUpdating the Page During a Loop');
console.log('==============================\n\n');
function updatePageDuringLoop() {
  for (let i = 0; i < 10; i++) {
    document.getElementById('output').innerHTML = i;
    console.log(i);
  }
}

console.log('\n\nUsing a Function That Returns a Promise');
console.log('==============================\n\n');
fetch(
  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg'
)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP code: ${response.status}`);
    } else {
      return response.blob();
    }
  })
  .then(blob => {
    const img = document.getElementById('imgDownload');
    img.src = URL.createObjectURL(blob);
  })
  .catch(error => {
    console.log('An error occurred in the first or second promise');
  });

console.log('\n\nPromisifying an Asynchronous Function That Uses a Callback');
console.log('==============================\n\n');
function getFactorial(numbers, success, error) {
  if (numbers < 0) {
    error(new Error('Required Positive Number'));
  } else if (numbers !== Math.trunc(numbers)) {
    error(new Error('Required integer'));
  } else {
    setTimeout(() => {
      if (numbers === 0 || numbers === 1) {
        success(1);
      } else {
        let result = numbers;
        while (numbers > 1) {
          numbers -= 1;
          result *= numbers;
        }
        success(result);
      }
    }, 500);
  }
}

function factorialPromise(numbers) {
  return new Promise((resolve, reject) => {
    getFactorial(
      numbers,
      result => {
        resolve(result);
      },
      error => {
        reject(error);
      }
    );
  });
}

factorialPromise(5)
  .then(result => {
    console.log(`5!=${result}`);
  })
  .catch(error => {
    console.error(error.message);
  });

console.log('\n\nExecuting Multiple Promises Concurrently');
console.log('==============================\n\n');
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from fetchData1');
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from fetchData2');
    }, 1500);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from fetchData3');
    }, 2000);
  });
}

const promise1 = fetchData1();
const promise2 = fetchData2();
const promise3 = fetchData3();

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

console.log('\n\nWaiting for a Promise to Finish with Await and Async');
console.log('==============================\n\n');
function getFactorial(number) {
  return new Promise((resolve, reject) => {
    if (number < 0) {
      reject(new Error('Required positive number.'));
    } else if (number !== Math.trunc(number)) {
      reject(new Error('Required integer.'));
    } else {
      setTimeout(() => {
        let result = 1;
        for (let i = 2; i <= number; i++) {
          result *= i;
        }
        resolve(result);
      }, 500);
    }
  });
}

async function factorialAsync(number) {
  try {
    const result = await getFactorial(number);
    console.log(`${number}! = ${result}`);
  } catch (error) {
    console.error(error.message);
  }
}
factorialAsync(7);

console.log('\n\nCreating an Asynchronous Generator Function');
console.log('==============================\n\n');
async function* getRandomIntegers(max) {
  while (true) {
    yield Math.floor(Math.random() * Math.floor(max) + 1);
  }
}

const randomGenerator = getRandomIntegers(6);
for (let i = 0; i < 10; i++) {
  console.log(randomGenerator.next());
}

console.log('\n\nUsing a Web Worker to Perform a Background Task');
console.log('==============================\n\n');
const worker = new Worker('worker.js');
worker.postMessage('Start');
worker.onmessage = event => {
  console.log('Message from worker:', event.data);
  worker.terminate();
};

console.log('\n\nAdding Progress Support to a Web Worker');
console.log('==============================\n\n');
const worker2 = new Worker('worker.js');
worker2.postMessage({ action: 'start', totalItems: 100 });
worker2.onmessage = event => {
  if (event.data.type === 'progress') {
    const progress = event.data.progress;
    console.log('Progress:', progress);
  } else if (event.data.type === 'complete') {
    console.log('Task complete');
  }
};
