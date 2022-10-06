function resolveAfterSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("delayed successful!");
    }, 500);
  });
}

async function resolvedPromise() {
  const x = await resolveAfterSeconds();
  console.log(x); 
}

resolvedPromise();



function rejectAfterSeconds() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("delayed exception!");
    }, 500);
  });
}

async function rejectPromise() {
  const x = await rejectAfterSeconds();
  console.log(x); 
}

rejectPromise();