/* const num = 2;

const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;

  setTimeout(() => {
    if (isSuccess) {
      resolve(10);
    } else {
      reject(null);
    }
  }, 0);
});

const printNumber = () => {
  // starts here
  // ends here
  setTimeout(() => {
    console.log(num);
  }, 1000);
};

//

myPromise.then(response => {
  console.log(response);
});
// console.log(myPromise);

setTimeout(() => {
  console.log("Out of timeout");
}, 3000);

console.log(1);
printNumber();
console.log(3);

//
 */

const robot = new Promise((resolve, reject) => {
  //
  // Some expensive logic
  //

  const battery = 50;

  if (battery > 20) {
    resolve("Beep boop hello");
  } else {
    reject("Must charge");
  }
});

/* robot
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => {
    console.log("This is finally block");
  }); */

const handlePromise = async () => {
  try {
    const response = await robot;

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
  }
};

console.log(1);
handlePromise();
console.log(2);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => console.log(json));

const justLikeFetch = url => {
  return new Promise((resolve, reject) => {
    //
    //
    //
    //
    resolve(url);
  });
};
